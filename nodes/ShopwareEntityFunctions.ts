import {
	IExecuteFunctions,
    ILoadOptionsFunctions,
    IHookFunctions,
    IExecuteSingleFunctions
} from 'n8n-core';

import {
	IDataObject,
} from 'n8n-workflow';

import { getEntityIdByFilter, getEntityIdsByFilter, getPropertyConfiguration, removeEmptyProperties, shopwareApiRequest } from './GenericFunctions';

import { IShopwareEntities, IShopwareEntityConfiguration, entityStore } from './ShopwareEntityInterface';

import * as uuid from 'uuid/v4';

export async function createShopwareEntityObject(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, i: number, operation: string, shopwareEntityConfiguration: IShopwareEntityConfiguration): Promise<any> {
	// @ts-ignore
	const shopwareEntity = new entityStore[shopwareEntityConfiguration.class]();

	// Fill all required properties if create
	if(operation === 'create') {
		console.log( Reflect.getMetadataKeys(shopwareEntity));

		for (const property in shopwareEntity) {
			const entityPropertyConfiguration = getPropertyConfiguration(shopwareEntity, 'properties', property);
			if(entityPropertyConfiguration !== undefined && entityPropertyConfiguration.requiredOnCreate) {
				if(entityPropertyConfiguration !== undefined && entityPropertyConfiguration.searchEntity) {
					let searchResult;
					const searchObject = this.getNodeParameter(property, i) as IDataObject;

					if(entityPropertyConfiguration.multipleResults) {
						searchResult = await getEntityIdsByFilter.call(this, entityPropertyConfiguration.searchEntity, searchObject);
					} else {
						searchResult = await getEntityIdByFilter.call(this, entityPropertyConfiguration.searchEntity, searchObject);
					}

					// @ts-ignore
					shopwareEntity[property] = searchResult;
				} else {
					const propertyParameter = this.getNodeParameter(property, i);
					
					if(property === 'price') {
						// @ts-ignore
						removeEmptyProperties(propertyParameter);
						Object.assign(shopwareEntity, propertyParameter);
					} else {
						// @ts-ignore
						shopwareEntity[property] = propertyParameter;
					}
				}
			}
		}
	}

	// Run through all the additional fields and import them
	const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject[];
	for (const [key, value] of Object.entries(additionalFields)) {
		const entityPropertyConfiguration = getPropertyConfiguration(shopwareEntity, 'properties', key);

		// Search
		if(entityPropertyConfiguration !== undefined && entityPropertyConfiguration.searchEntity) {
            let searchResult;
			if(entityPropertyConfiguration.multipleResults) {
				searchResult = await getEntityIdsByFilter.call(this, entityPropertyConfiguration.searchEntity, value);
			} else {
                searchResult = await getEntityIdByFilter.call(this, entityPropertyConfiguration.searchEntity, value);
			}

			// @ts-ignore
			shopwareEntity[key] = searchResult;
		} else if(key === 'translations'){
			removeEmptyProperties(value);
			const translations:object[] = [];
			// @ts-ignore
			value.forEach(element => {
				translations.push(element.translation);
			});
			Object.assign(shopwareEntity, {translations: translations});

		} else if(key === 'price'){
			removeEmptyProperties(value);
			Object.assign(shopwareEntity, value.price);
		} else if(key) {
			if(typeof value === 'object' && Object.keys(value).length) {
				continue;
			}
			// Catch-All for singe-value fields without any special conversion
			// @ts-ignore
			shopwareEntity[key] = value;
		}
	}

	return shopwareEntity;
}

export async function setShopwareEntity(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, operation: string, shopwareEntityConfiguration: IShopwareEntityConfiguration, shopwareEntity: IShopwareEntities, ids?: string[]): Promise<any> {
	// Write the update
	if(operation === 'update') {
		if(ids !== undefined) {
			for (const id of ids) {
				const responseData = await shopwareApiRequest.call(this, 'PATCH', '/' + shopwareEntityConfiguration.endpoint + '/' + id, shopwareEntity);
			};	
		}
	}

	shopwareEntity.id = uuid().replace(/-/g, '');
	shopwareEntity.versionId = uuid().replace(/-/g, '');
	if(operation === 'create') {
		 await shopwareApiRequest.call(this, 'POST', '/' + shopwareEntityConfiguration.endpoint, shopwareEntity);
		 return shopwareEntity;
	}
}

export async function getShopwareEntity(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, resource: string, shopwareSearch: object, id? : string): Promise<any> {
	let responseData;

	if(id) {
		responseData = await shopwareApiRequest.call(this, 'POST', '/search/' + resource + '/' + id, shopwareSearch);
	} else {
		responseData = await shopwareApiRequest.call(this, 'POST', '/search/' + resource, shopwareSearch);
	}

	const returnData: IDataObject[] = [];

	if(responseData.length > 0) {
		returnData.push.apply(returnData, responseData as IDataObject[]);
	}
	
	return returnData
}