/*
 * Implementation the n8n node for Shopware 6 (https://github.com/shopware/platform)
 *  
 * Initial Implementation: Axel Rüweler <axel@rueweler.de>
 * 
 * TODOs:
 * - Create capabilities (might be hard because of the deep data structure of Shopware 6)
 * - Trigger node for getting data from webhooks (might not be possible because the webhook feature was added for apps, not for integrations)
 * - Helper for selecting fields of entities - At the moment not possible because values are not dynamic
 * - Caching of access token for the credentials so that all the nodes in one workflow can access it
 * - Better leverage of typescript (remove generic object types)
 * 
 */

import {
	BINARY_ENCODING,
	IExecuteFunctions,
	IExecuteSingleFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
} from 'n8n-core';

import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
	INodePropertyOptions
} from 'n8n-workflow';

import {
	shopwareApiRequest,
	shopwareApiRequestSchema,
	shopwareApiRequestEndpoints,
	processFilter,
	processRangeFilter,
} from './GenericFunctions';

import {
	entityFields,
	filterFields,
} from './ShopwareFields'

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

			/**
			 * Tax Rule
			 */
			{
				displayName: 'country Id',
				name: 'countryId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						operation: [
							'create'
						],
					},
				},
				default: '',
			},
			{
				displayName: 'taxRate',
				name: 'taxRate',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						operation: [
							'create'
						],
					},
				},
				default: '',
			},
			{
				displayName: 'taxId',
				name: 'taxId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						operation: [
							'create'
						],
					},
				},
				default: '',
			},
			{
				displayName: 'taxRuleTypeId',
				name: 'taxRuleTypeId',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						operation: [
							'create'
						],
					},
				},
				default: '',
			}, 
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
						endpoints.forEach(function (endpoint) {
							const endpointName = endpoint.path.replace('/', '');
							const endpointPath = endpoint.path.replace('/', '');
							const endpointDescription = endpoint.description;

							returnData.push({
								name: endpointName,
								value: endpointPath,
								description: endpointDescription,
							});
						});
					}
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
		const body: IDataObject = {};
		const operation = this.getNodeParameter('operation', 0) as string;
		for (let i = 0; i < length; i++) {
			if (operation === 'create') {
				const resource = this.getNodeParameter('resource', i) as string;

				
				if(resource === 'tax-rule') {
					const countryId = this.getNodeParameter('countryId', i) as string;
					const taxRate = this.getNodeParameter('taxRate', i) as string;
					const taxId = this.getNodeParameter('taxId', i) as string;
					const taxRuleTypeId = this.getNodeParameter('taxRuleTypeId', i) as string;

					Object.assign(body,{
						countryId: countryId,
						taxRate: taxRate,
						taxId: taxId,
						taxRuleTypeId: taxRuleTypeId,
					});
				}

				if (resource) {
					responseData = await shopwareApiRequest.call(this, 'POST', '/' + resource, body);
				}
			}
			if (operation === 'get' || operation === 'getAll') {
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
					includes.entities.forEach(function (entity) {
						const entityName = entity.entity;
						const fields = entity.fields.split(',');

						Object.assign(body.includes, { [entityName]: fields });
					});
				}


				const associations = this.getNodeParameter('associations', i) as IDataObject;
				if (associations && associations.entities !== undefined) {
					body.associations = {};

					//@ts-ignore
					associations.entities.forEach(function (association) {
						Object.assign(body.associations, { [association.entity]: { 'total-count-mode': association.totalCountMode } });
					});
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
						bodyFilter.push(await processFilter('equals', filter.equal as IDataObject));
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
				}
			} else if (operation === 'delete') {
				const resource = this.getNodeParameter('resource', i) as string;
				const Id = this.getNodeParameter('id', i) as string;

				if (Id) {
					responseData = await shopwareApiRequest.call(this, 'DELETE', '/' + resource + '/' + Id, {});
				}
			}
		}

		return [this.helpers.returnJsonArray(responseData)];
	}
}
