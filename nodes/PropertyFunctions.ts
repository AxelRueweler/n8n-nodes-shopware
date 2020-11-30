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
import { IPropertyGroupTranslation, IPropertyGroupOptionTranslation } from './PropertyInterface';

export async function setPropertyGroup(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, i: number, operation: string): Promise<any> {
	const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject[];
	let manufacturerIds: string[] = [];
    const body: IDataObject = {};
    
	if(operation === 'create') {
        const name = this.getNodeParameter('name', i) as string;
        Object.assign(body, {name: name});
	}

	for (const [key, value] of Object.entries(additionalFields)) {
		if(key === 'translations'){
			const translations: IPropertyGroupTranslation[] = [];
			
			// @ts-ignore
			value.translation.forEach(function(tmpTranslation) {
				const translation = {
					languageId:  tmpTranslation.languageId,
					name: tmpTranslation.name,
                    description: tmpTranslation.description, 
                    position: tmpTranslation.position,
				} as IPropertyGroupTranslation;
		
				removeEmptyProperties(translation);
		
				translations.push(translation);
			}, this);
		
			if(translations.length !== 0) {
				Object.assign(body, {translations: translations});	
			}
		} else if(key) {
			// Catch-All for singe-value fields without any special conversion
			Object.assign(body, {[key]: value});
		}
	}

	if(operation === 'update') {
		const manufacturerIdsSearch = this.getNodeParameter('propertyGroupIds', i) as IDataObject;

		if(manufacturerIdsSearch) {
			manufacturerIds = await getEntityIdsByFilter.call(this, 'property-group', manufacturerIdsSearch);
		}

		for (const manufacturerId of manufacturerIds) {
			const responseData = await shopwareApiRequest.call(this, 'PATCH', '/property-group/' + manufacturerId, body);
		};
	}

	if(operation === 'create') {
		const responseData = await shopwareApiRequest.call(this, 'POST', '/property-group', body); 
    }
}

export async function setPropertyGroupOption(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, i: number, operation: string): Promise<any> {
	const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject[];
	let manufacturerIds: string[] = [];
    const body: IDataObject = {};
    
	if(operation === 'create') {
        const name = this.getNodeParameter('name', i) as string;
        Object.assign(body, {name: name});

        const propertyGroupIdSearch = this.getNodeParameter('propertyGroupId', i) as IDataObject;
        const propertyGroupId = await getEntityIdByFilter.call(this, 'property-group', propertyGroupIdSearch);
        Object.assign(body, {groupId: propertyGroupId});
	}

	for (const [key, value] of Object.entries(additionalFields)) {
		if(key === 'translations'){
			const translations: IPropertyGroupTranslation[] = [];
			
			// @ts-ignore
			value.translation.forEach(function(tmpTranslation) {
				const translation = {
					languageId:  tmpTranslation.languageId,
					name: tmpTranslation.name,
                    position: tmpTranslation.position,
				} as IPropertyGroupOptionTranslation;
		
				removeEmptyProperties(translation);
		
				translations.push(translation);
			}, this);
		
			if(translations.length !== 0) {
				Object.assign(body, {translations: translations});	
            }
        } else if(key === 'propertyGroupId') {
            const propertyGroupId = await getEntityIdByFilter.call(this, 'property-group', value);
            Object.assign(body, {groupId: propertyGroupId});
        } else if(key === 'mediaId') {
            const mediaId = await getEntityIdByFilter.call(this, 'media', value);
            Object.assign(body, {mediaId: mediaId});
        } else if(key) {
			// Catch-All for singe-value fields without any special conversion
			Object.assign(body, {[key]: value});
		}
	}

	if(operation === 'update') {
		const manufacturerIdsSearch = this.getNodeParameter('propertyGroupOptionIds', i) as IDataObject;

		if(manufacturerIdsSearch) {
			manufacturerIds = await getEntityIdsByFilter.call(this, 'property-group-option', manufacturerIdsSearch);
		}

		for (const manufacturerId of manufacturerIds) {
			const responseData = await shopwareApiRequest.call(this, 'PATCH', '/property-group-option/' + manufacturerId, body);
		};
	}

	if(operation === 'create') {
		const responseData = await shopwareApiRequest.call(this, 'POST', '/property-group-option', body); 
	}
}