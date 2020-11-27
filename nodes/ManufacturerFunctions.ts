import {
	IExecuteFunctions,
	IExecuteSingleFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
} from 'n8n-core';

import {
	IBinaryData, IDataObject,
} from 'n8n-workflow';

import { getEntityIdByFilter, getEntityIdsByFilter, removeEmptyProperties, shopwareApiRequest } from './GenericFunctions';
import { IManufacturerTranslation } from './ManufacturerInterface';

export async function setManufacturer(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, i: number, operation: string): Promise<any> {
	const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject[];
	let manufacturerIds: string[] = [];
	const body: IDataObject = {};

	for (const [key, value] of Object.entries(additionalFields)) {
		if(key === 'translations'){
			const translations: IManufacturerTranslation[] = [];
			
			// @ts-ignore
			value.translation.forEach(function(tmpTranslation) {
				const translation = {
					languageId:  tmpTranslation.languageId,
					name: tmpTranslation.name,
					description: tmpTranslation.description, 
				} as IManufacturerTranslation;
		
				removeEmptyProperties(translation);
		
				translations.push(translation);
			}, this);
		
			if(translations.length !== 0) {
				Object.assign(body, {translations: translations});	
			}
		} else if(key === 'mediaId') {
			const mediaId = await getEntityIdByFilter.call(this, 'media', value);
			Object.assign(body, {mediaId: mediaId});	
		} else if(key) {
			// Catch-All for singe-value fields without any special conversion
			Object.assign(body, {[key]: value});
		}
	}

	if(operation === 'update') {
		const manufacturerIdsSearch = this.getNodeParameter('manufacturerIds', i) as IDataObject;

		if(manufacturerIdsSearch) {
			manufacturerIds = await getEntityIdsByFilter.call(this, 'product-manufacturer', manufacturerIdsSearch);
		}

		for (const manufacturerId of manufacturerIds) {
			const responseData = await shopwareApiRequest.call(this, 'PATCH', '/product-manufacturer/' + manufacturerId, body);
		};
	}

	if(operation === 'create') {
		const responseData = await shopwareApiRequest.call(this, 'POST', '/product-manufacturer', body); 
	}
}