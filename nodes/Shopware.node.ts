/*
 * Implementation the n8n node for Shopware 6 (https://github.com/shopware/platform)
 *  
 * Initial Implementation: Axel Rüweler <axel@rueweler.de>
 * 
 * TODOs:
 * - Create capabilities (might be hard because of the deep data structure of Shopware 6)
 * - Caching of access token for the credentials so that all the nodes in one workflow can access it
 * - Better error handling
 * - Consistent handling of loops
 * - Media Assets ✔
 *  - Title and alt tags
 * - Option handling
 * - Variation handling
 * - Guard against to many updates
 * - Media assignment
 *  - Replace all assigments
 *  - Search for Media and assign it all
 * - Refactoring for distinction between building payload and doing requests
 * 
 * Needed Features for a better integration:
 * - loadOptionsMethod based on the value of other fields. At the moment the selection of fields and the associations is quite long.
 * - Float / Decimal frontend component for entering prices
 * - Dynamicly update values in one field based on entering data in another (calculation of gross to net price)
 */

import {
	IExecuteFunctions,
	ILoadOptionsFunctions,
} from 'n8n-core';

import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
	INodePropertyOptions,
	IBinaryKeyData
} from 'n8n-workflow';

import {
	shopwareApiRequest,
	shopwareApiRequestSchema,
	shopwareApiRequestEndpoints,
	processFilter,
	processRangeFilter,
	getEntityIds,
	getEntityIdsByFilter,
} from './GenericFunctions';

import {
	entityFields,
	filterFields,
} from './ShopwareFields';

import {
	productFields,
} from './ProductDescription';

import {
	mediaFields,
} from 	'./MediaDescription';

import {
	getProductCreateOrUpdateBody,
} from './ProductFunctions'

import { setMedia } from './MediaFunctions';

import {
	manufacturerFields,
} from './ManufacturerDescription';

import {propertyGroupFields, propertyGroupOptionFields} from './PropertyDescription';
import { bodyMethodStore, setMethodStore, entityMaps } from './ShopwareEntityInterface';

require('console');

export class Shopware implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Shopware',
		name: 'shopware',
		group: ['transform'],
		icon: 'file:shopware.png',
		version: 1,
		description: 'Consume Shopware 6 API',
		defaults: {
			name: 'Shopware',
			color: '#772244',
		},
		credentials: [
			{
				name: 'shopwareApi',
				required: true,
			},
		],
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getEndpoints',
				},
				default: 'product',
				description: 'Resource to consume.',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create an entity',
					},
					{
						name: 'Update',
						value: 'update',
						description: 'Update an entity',
					},
					{
						name: 'Get',
						value: 'get',
						description: 'Get an entity',
					},
					{
						name: 'Get All',
						value: 'getAll',
						description: 'Get all entities',
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Delete an entity',
					},
				],
				default: 'getAll',
				description: 'The operation to perform.',
			},
			{
				displayName: 'Ids',
				name: 'ids',
				placeholder: 'Ids',
				description: 'Ids of entities. Seperated by comma.',
				type: 'string',
				displayOptions: {
					show: {
						operation: [
							'get'
						],
					},
				},
				default: '',
			},
			{
				displayName: 'Id',
				name: 'id',
				placeholder: 'Id',
				description: 'Id of entity',
				type: 'string',
				displayOptions: {
					show: {
						operation: [
							'delete'
						],
					},
				},
				default: '',
			},
			{
				displayName: 'Total Count Mode',
				name: 'totalCountMode',
				placeholder: '',
				description: 'Mode for counting the found entities - when usage for paging',
				type: 'options',
				displayOptions: {
					show: {
						operation: [
							'get', 'getAll'
						],
					},
				},
				options: [
					{
						name: 'No total determined',
						value: '0',
						description: 'No total determined - high performance',
					},
					{
						name: 'Exact total determined',
						value: '1',
						description: 'The exact total is determined - low performance',
					},
					{
						name: 'Next page exists',
						value: '2',
						description: 'Determines if a next page with products exists - high performance',
					},
				],
				default: '0',
			},
			{
				displayName: 'Page',
				name: 'page',
				placeholder: '',
				description: '',
				type: 'string',
				displayOptions: {
					show: {
						operation: [
							'get'
						],
					},
				},
				default: '',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				placeholder: '',
				description: 'Defines the number of entries to be determined',
				type: 'string',
				displayOptions: {
					show: {
						operation: [
							'get'
						],
					},
				},
				default: '100',
			},
			{
				displayName: 'Grouping',
				name: 'grouping',
				placeholder: '',
				description: 'Lets you group records by fields. Seperated by comma.',
				type: 'string',
				displayOptions: {
					show: {
						operation: [
							'get', 'getAll'
						],
					},
				},
				default: '',
			},

			...entityFields,
			...filterFields,

			...productFields,

			...mediaFields,

			...manufacturerFields,

			...propertyGroupFields,
			...propertyGroupOptionFields,
		]
	};

	methods = {
		loadOptions: {
			// Get all the available products to display them to user so that he can
			// select them easily
			async getEntities(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const returnData: INodePropertyOptions[] = [];
				const entities = await shopwareApiRequestSchema.call(this);

				for (const [entityName, entityData] of Object.entries(entities)) {
					returnData.push({
						name: entityName,
						value: entityName,
					});
				}
				return returnData;
			},

			async getEndpoints(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const returnData: INodePropertyOptions[] = [];

				try {
					const endpoints = await shopwareApiRequestEndpoints.call(this);

					if (endpoints !== undefined) {
						for(const endpoint of endpoints) {
							const endpointName = endpoint.path.replace('/', '');
							const endpointPath = endpoint.path.replace('/', '');
							const endpointDescription = endpoint.description;

							returnData.push({
								name: endpointName,
								value: endpointPath,
								description: endpointDescription,
							});
						};
					}
					return returnData;
				} catch (e) {
					throw e;
				}
			},

			async getCurrencies(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				let returnData: INodePropertyOptions[] = [];

				try {
					const body = {
						"includes": {"currency":["name","isoCode","id"]},
						"total-count-mode": "0",
						"sort": [{ "field": "name", "order": "ASC", "naturalSorting": true }],
						"filter": [],
					} as IDataObject

					returnData = await getEntityIds.call(this, 'currency', body);

					return returnData;
				} catch (e) {
					throw e;
				}
			},

			async getLanguages(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				let returnData: INodePropertyOptions[] = [];

				try {
					const body = {
						"includes": {"language":["name","isoCode","id"]},
						"total-count-mode": "0",
						"sort": [{ "field": "name", "order": "ASC", "naturalSorting": true }],
						"filter": [],
					} as IDataObject

					returnData = await getEntityIds.call(this, 'language', body);

					return returnData;
				} catch (e) {
					throw e;
				}
			},

			async getMediaFolders(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				let returnData: INodePropertyOptions[] = [];

				try {
					const body = {
						"includes": {"language":["name","id"]},
						"total-count-mode": "0",
						"sort": [{ "field": "name", "order": "ASC", "naturalSorting": true }],
						"filter": [],
					} as IDataObject

					returnData = await getEntityIds.call(this, 'media-folder', body);

					return returnData;
				} catch (e) {
					throw e;
				}
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];
		const length = items.length as unknown as number;
		let responseData;
		const operation = this.getNodeParameter('operation', 0) as string;
		const resource = this.getNodeParameter('resource', 0) as string;

		for (let i = 0; i < length; i++) {
			if (operation === 'create') {
				if(resource === 'product') {
					const body = await getProductCreateOrUpdateBody.call(this, i, operation);
					responseData = await shopwareApiRequest.call(this, 'POST', '/' + resource, body);
				} else if(resource === 'media') {
					// First create the media
					// media?_response=true, {"mediaFolderId":"cef84bd4991c4055a7b02388dc49ca70" }
					const mediaFolder = this.getNodeParameter('mediaFolder', i) as IDataObject;
					const fileName = this.getNodeParameter('fileName', i) as string;
					const overrideMode = this.getNodeParameter('overrideMode', i) as string;

					const mediaFolderbody = {mediaFolderId: mediaFolder}
					responseData = await shopwareApiRequest.call(this, 'POST', '/media', mediaFolderbody, {_response: true});

					// Then upload the file
					// https://denkteich-test.shopware.store/api/v3/_action/media/3278663dfbfd4ed7a22c7c562984e270/upload?extension=jpg&fileName=113063098_A_519NEU
					if(responseData.id !== undefined){
						const isBinaryData = this.getNodeParameter('isBinaryData', i) as string;
						const mediaId = responseData.id;

						if (isBinaryData) {
							const binaryPropertyName = this.getNodeParameter('binaryPropertyName', 0) as string;
	
							if (items[i].binary === undefined) {
								throw new Error('No binary data exists on item!');
							}
							//@ts-ignore
							if (items[i].binary[binaryPropertyName] === undefined) {
								throw new Error(`No binary data property "${binaryPropertyName}" does not exists on item!`);
							}
	
							const binaryData = (items[i].binary as IBinaryKeyData)[binaryPropertyName];

							const mediaResponseData = await setMedia.call(this, mediaId, binaryData, fileName, overrideMode);
							returnData.push.apply(returnData, [mediaResponseData] as IDataObject[]); // Should this already be returned as an array?
						} else {
							const fileUrl = this.getNodeParameter('fileUrl', i) as string;

							const mediaResponseData  = await setMedia.call(this, mediaId, fileUrl, fileName, overrideMode);
	
							if(responseData !== undefined) {
								returnData.push.apply(returnData, [mediaResponseData] as IDataObject[]);
							}
						}
					}
				} else if (entityMaps[resource] !== undefined){
					const shopwareEntityConfiguration = entityMaps[resource];
					//const shopwareEntity = await createShopwareEntityObject.call(this, i, operation, shopwareEntityConfiguration);
					//const result = await setShopwareEntity.call(this, operation, shopwareEntityConfiguration, shopwareEntity);
					
					// @ts-ignore
					const shopwareEntity = await bodyMethodStore[shopwareEntityConfiguration.bodyMethod].call(this, i, operation, shopwareEntityConfiguration);

					// @ts-ignore
					const result = await setMethodStore[shopwareEntityConfiguration.setMethod].call(this, operation, shopwareEntityConfiguration, shopwareEntity);
					
					if(result !== undefined) {
						returnData.push.apply(returnData, [result] as IDataObject[]);
					}
				}
			} else if (operation === 'update') {
				if(resource === 'product') {
					const productIdsSearch = this.getNodeParameter('productIds', i) as IDataObject;
					const productIds = await getEntityIdsByFilter.call(this, 'product', productIdsSearch);

					for (const productId of productIds) {
						const body = await getProductCreateOrUpdateBody.call(this, i, operation);
						responseData = await shopwareApiRequest.call(this, 'PATCH', '/' + resource + '/' + productId, body);
					};
				} else if (entityMaps[resource] !== undefined){
					const shopwareEntityConfiguration = entityMaps[resource];
					// @ts-ignore
					const shopwareEntity = await bodyMethodStore[shopwareEntityConfiguration.bodyMethod].call(this, i, operation, shopwareEntityConfiguration);

					const entityIdsSearch = this.getNodeParameter('entityIds', i) as IDataObject;

					let entityIds: string[] = [];
					if(entityIdsSearch) {
						entityIds = await getEntityIdsByFilter.call(this, resource, entityIdsSearch);
					}

					// @ts-ignore
					const result = await setMethodStore[shopwareEntityConfiguration.setMethod].call(this, operation, shopwareEntityConfiguration, shopwareEntity, entityIds);

					if(result !== undefined) {
						returnData.push.apply(returnData, [result] as IDataObject[]);
					}
				}
			} else if (operation === 'get' || operation === 'getAll') {
				const body: IDataObject = {};
				if (operation === 'get') {
					/*
					* Load a specific list of ids
					*/
					const Ids = this.getNodeParameter('ids', i) as string;
					if (Ids) {
						body.ids = [];
						Object.assign(body.ids, Ids.split(','));
					}

					/*
					* Page of the result
					*/
					const page = this.getNodeParameter('page', i) as Number;

					if (page) {
						body.page = page;
					}

					/*
					* Limit of the result
					*/
					const limit = this.getNodeParameter('limit', i) as Number;

					if (limit) {
						body.limit = limit;
					}
				}

				/*
				* Includes determine which entities with which fields are loaded
				*/
				const includes = this.getNodeParameter('includes', i) as IDataObject;
				if (includes.entities && includes.entities !== undefined) {
					body.includes = {};

					//@ts-ignore
					for (const entity of includes.entities) {
						if(entity !== undefined && entity !== null) {
							//@ts-ignore
							const entityName = entity.entity;
							const fields:string[] = [];

							//@ts-ignore
							for(const field:string of entity.fields) {
									fields.push(field.split('.')[1]);
							}

							Object.assign(body.includes, { [entityName]: fields });
						}
					};
				}


				const associations = this.getNodeParameter('associations', i) as IDataObject;
				if (associations && associations.entities !== undefined) {
					body.associations = {};

					//@ts-ignore
					for(const association:object of associations.entities) {
						if(association !== undefined && association !== null) {
							//@ts-ignore
							Object.assign(body.associations, { [association.entity.split('.')[1]]: { 'total-count-mode': association.totalCountMode } });
						}
					}
				}

				/*
				* Checks if a total count should be gathered an in which mode
				*/
				const totalCountMode = this.getNodeParameter('totalCountMode', 0) as Number;

				if (totalCountMode) {
					body['total-count-mode'] = totalCountMode;
				}

				/*
				* Grouping of the result
				*/
				const grouping = this.getNodeParameter('grouping', i) as string;

				if (grouping) {
					body.grouping = grouping.split(',');
				}

				/*
				* Filter of the result
				*	'filter': [
				*		{ "type": "equals", "field": "id", "value": "04d0107ac065458da3a0fe0b9f9bc58c" ,
				*		{ "type": "range", "field": "purchasePrice", "parameters": {"gt": 10, "lt": 80} },
				*		{ "type": "equalsAny", "field": "id", "value": ["0c0995b393d74e91bdf00ffdf9bfb2a0", "0dccf6d3de6749b6b5ace4a58369cd3e"] }
				*	]
				*/
				const filter = this.getNodeParameter('filter', 0) as IDataObject;
				if (filter) {
					const bodyFilter: IDataObject[] = [];

					if (filter.contains && Object.keys(filter.contains).length !== 0) {
						bodyFilter.push(await processFilter('contains', filter.contains as IDataObject));
					}

					if (filter.equalsAny && Object.keys(filter.equalsAny).length !== 0) {
						bodyFilter.push(await processFilter('equalsAny', filter.equalsAny as IDataObject));
					}

					if (filter.equals && Object.keys(filter.equals).length !== 0) {
						bodyFilter.push(await processFilter('equals', filter.equals as IDataObject));
					}

					if (filter.range && Object.keys(filter.range).length !== 0) {
						bodyFilter.push(await processRangeFilter('range', filter.range as IDataObject));
					}

					if (bodyFilter.length > 1) {
						body.filter = [{
							type: 'multi',
							operat: 'AND',
							queries: bodyFilter,
						}];
					} else {
						body.filter = bodyFilter;
					}
				}

				const resource = this.getNodeParameter('resource', i) as string;
				if (resource) {
					responseData = await shopwareApiRequest.call(this, 'POST', '/search/' + resource, body);

					if(responseData.length > 0) {
						returnData.push.apply(returnData, responseData as IDataObject[]);
					}
				}
			} else if (operation === 'delete') {
				const resource = this.getNodeParameter('resource', i) as string;
				const Id = this.getNodeParameter('id', i) as string;

				if (Id) {
					responseData = await shopwareApiRequest.call(this, 'DELETE', '/' + resource + '/' + Id, {});

					if(responseData.length > 0) {
						returnData.push.apply(returnData, responseData as IDataObject[]);
					}
				}
			}
		}

		console.log(returnData);
		return [this.helpers.returnJsonArray(returnData)];
	}
}