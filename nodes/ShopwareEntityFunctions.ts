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
					
					// @ts-ignore
					shopwareEntity[property] = propertyParameter;
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
			shopwareEntity[property] = searchResult;
		} else if(key === 'translations'){
			removeEmptyProperties(value);
			Object.assign(shopwareEntity, {translations: value.translation});
		} else if(key) {
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

	if(operation === 'create') {
		const responseData = await shopwareApiRequest.call(this, 'POST', '/' + shopwareEntityConfiguration.endpoint, shopwareEntity); 
	}
}