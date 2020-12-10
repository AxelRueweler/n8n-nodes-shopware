import {
	OptionsWithUri,
} from 'request';

import "reflect-metadata";

import {
	IExecuteFunctions,
	IExecuteSingleFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodePropertyOptions
} from 'n8n-workflow';

import console = require('console');
import e = require('express');

type requestableObjects =  IDataObject;

export interface IFilterObject {
	type?: string;
	field: string;
	value: Array<string>;
}

export interface IFilterRangeObject {
	type: string;
	field: string;
	parameters: IFilterRangeParametersObject;
}

export interface IFilterRangeParametersObject {
	gt?: string;
	gte?: string;
	lt?: string;
	lte?: string;
}


export function processFilter(filterName: string, filterRules: IDataObject) {
	const bodyFilter: IDataObject = {};
	const filterArray: IFilterObject[] = [];

	if (filterRules) {
		//@ts-ignore
		filterRules.forEach(function (filter) {
			if (filterName.indexOf('Any') !== -1) {
				filterArray.push({
					type: filterName,
					field: filter.field,
					value: filter.value.split(','),
				});
			} else {
				filterArray.push({
					type: filterName,
					field: filter.field,
					value: filter.value,
				});
			}
		});
 
		if (filterArray.length > 1) {
			Object.assign(bodyFilter, {
				type: 'multi',
				operator: 'OR',
				queries: filterArray
			});
		} else if (filterArray.length == 1) {
			Object.assign(bodyFilter, filterArray[0]);
		}
	}

	return bodyFilter;
}

export async function processRangeFilter(filterName: string, filterRules: IDataObject) {
	const bodyFilter: IDataObject = {};
	const filterArray: IFilterRangeObject[] = [];

	if (filterRules) {
		//@ts-ignore
		filterRules.forEach(function (filter) {
			filterArray.push({
				type: filterName,
				field: filter.field,
				parameters: {
					[filter.operator1]: filter.value1,
					[filter.operator2]: filter.value2,
				}
			});
		});
	}

	if (filterArray.length > 1) {
		Object.assign(bodyFilter, {
			type: 'multi',
			operator: 'OR',
			queries: filterArray
		});
	} else {
		Object.assign(bodyFilter, filterArray[0]);
	}

	return bodyFilter;
}

export async function getEntityIds(this: ILoadOptionsFunctions, endpoint: string, body: IDataObject) {
	const returnData: INodePropertyOptions[] = [];
	const responseData = await shopwareApiRequest.call(this, 'POST', '/search/' + endpoint, body);

	if (responseData !== undefined) {
		//@ts-ignore
		responseData.forEach(function (currency) {
			returnData.push({
				name: currency.name,
				value: currency.id,
			} as INodePropertyOptions);
		});
	}

	//@ts-ignore
	return returnData;
}

export async function getEntityIdsByFilter(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, endpoint: string, filter: IDataObject): Promise<Array<string>> { // tslint:disable-line:no-any
	const response = await getEntityIdResponseByFilter.call(this, endpoint, filter, false);

	const returnData:Array<string> = [];

	response.forEach((responseItem) => {
		returnData.push(responseItem.id);
	});

	if(returnData.length > 0) {
		return returnData;
	} else {
		throw Error('No Ids found for: ' + endpoint)
	}

	return returnData;
}

export async function getEntityIdByFilter(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, endpoint: string, filter: IDataObject): Promise<string> { // tslint:disable-line:no-any
	const response = await getEntityIdResponseByFilter.call(this, endpoint, filter, true);
	if(response[0] !== undefined && response[0].id !== undefined) { 
		const id = response.pop().id;
		return id;
	} else {
		throw Error('No Id found for: ' + endpoint)
	}
}

async function getEntityIdResponseByFilter(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, endpoint: string, filter: IDataObject, limit: boolean = true): Promise<Array<any>> { // tslint:disable-line:no-any
	const bodyFilter: IDataObject[] = [];

	if (filter.contains && Object.keys(filter.contains).length !== 0) {
		bodyFilter.push(processFilter('contains', filter.contains as IDataObject));
	}

	if (filter.equalsAny && Object.keys(filter.equalsAny).length !== 0) {
		bodyFilter.push(processFilter('equalsAny', filter.equalsAny as IDataObject));
	}

	if (filter.equals && Object.keys(filter.equals).length !== 0) {
		bodyFilter.push(processFilter('equals', filter.equals as IDataObject));
	}
	
	const getEntityIdBody: IDataObject = {};

	const bodyInclude = {includes: {[endpoint]: ["id"]}};
	Object.assign(getEntityIdBody, bodyInclude);

	if(limit) {
		const bodyLimit = {limit: 1};
		Object.assign(getEntityIdBody, bodyLimit);
	}

	if (bodyFilter.length > 1) {
		getEntityIdBody.filter = [{
			type: 'multi',
			operat: 'AND',
			queries: bodyFilter,
		}];
	} else {
		getEntityIdBody.filter = bodyFilter;
	}

	try {
		// @ts-ignore
		return shopwareApiRequest.call(this, 'POST', '/search/' + endpoint, getEntityIdBody);
	} catch (error) {
		throw error;
	}
}

async function shopwareAuthRequest(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions): Promise<any> { // tslint:disable-line:no-any
	const credentials = this.getCredentials('shopwareApi');
	if (credentials === undefined) {
		throw new Error('No credentials got returned!');
	}

	const body = {
		client_secret: `${credentials.clientSecret}`,
		client_id: `${credentials.clientId}`,
		grant_type: 'client_credentials',
	};

	const options: OptionsWithUri = {
		method: 'POST',
		qs: '',
		uri: `https://${credentials.domain}/api/oauth/token`,
		body,
		json: true,
	};

	try {
		return await this.helpers.request!(options);
	} catch (error) {
		handleShopwareApiRequestError(error);
	}
}

export async function shopwareApiRequestSchema(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions) { // tslint:disable-line:no-any
	const credentials = this.getCredentials('shopwareApi');
	if (credentials === undefined) {
		throw new Error('No credentials got returned!');
	}

	const auth = await shopwareAuthRequest.call(this);
	const accessToken = auth.access_token;

	const headerWithAuthentication = Object.assign({}, { 'authorization': accessToken });

	const options: OptionsWithUri = {
		headers: headerWithAuthentication,
		method: 'GET',
		qs: '',
		uri: `https://${credentials.domain}/api/v3/_info/entity-schema.json`,
		body: '',
		json: true,
	};

	try {
		const responseData = await this.helpers.request!(options);
		return responseData;
	} catch (error) {
		handleShopwareApiRequestError(error);
	}
}

export async function shopwareApiRequestEndpoints(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions) { // tslint:disable-line:no-any
	const credentials = this.getCredentials('shopwareApi');
	if (credentials === undefined) {
		throw new Error('No credentials got returned!');
	}

	const auth = await shopwareAuthRequest.call(this);
	const accessToken = auth.access_token;

	const headerWithAuthentication = Object.assign({}, { 'authorization': accessToken });

	const options: OptionsWithUri = {
		headers: headerWithAuthentication,
		method: 'GET',
		qs: '',
		uri: `https://${credentials.domain}/api/v3/_info/openapi3.json`,
		body: '',
		json: true,
	};

	try {
		const endpoints = [];
		const responseData = await this.helpers.request!(options);

		for (const [endpointName, endpointData] of Object.entries(responseData.paths)) {
			// Remove the endpoints with arguments in the path
			if (endpointName.indexOf('{') === -1) {
				endpoints.push({
					path: endpointName,
					//@ts-ignore
					description: endpointData.get.summary
				});
			}
		};

		return endpoints;
	} catch (error) {
		handleShopwareApiRequestError(error);
	}
}

export async function shopwareApiRequest(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, method: string, resource: string, body: any = {}, query: requestableObjects = {}, uri?: string, option: IDataObject = {}, header: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any
	const credentials = this.getCredentials('shopwareApi');
	if (credentials === undefined) {
		throw new Error('No credentials got returned!');
	}

	const auth = await shopwareAuthRequest.call(this);
	let accessToken: string = '';
	if(auth !== undefined && auth.access_token !== '') {
		accessToken = auth.access_token;
	} else {
		throw Error('No connection to Shopware API');
	}

	let headerWithAuthentication = { 'authorization': accessToken };

	headerWithAuthentication = Object.assign({}, headerWithAuthentication, header);

	let options: OptionsWithUri = {
		headers: headerWithAuthentication,
		method: method,
		qs: query,
		uri: `https://${credentials.domain}/api/v3${resource}`,
		body: body,
		json: true,
	};

	options = Object.assign({}, options, option);

	//console.log(options);

	try {
		const responseData = await this.helpers.request!(options);
		/*
		* TODO - Write Meta-Data to all the rows
		* Important - Write Access does not result in response data!
		*/
		if (responseData !== undefined && responseData.data !== undefined) {
			return responseData.data;
		} else {
			return responseData
		}
	} catch (error) {
		// When uploading existing media assets the response body is not parsed
		if(error.response !== undefined && error.response.body && error.response.body.errors === undefined) {
			error.response.body = JSON.parse(error.response.body);
		}
		
		if(error.response !== undefined && error.response.body && error.response.body.errors) {
			let message = '';
			let name = '';
		
			console.log(error.response.body.errors);
			if(typeof error.response.body.errors === 'object') {
				for (const key of Object.keys(error.response.body.errors)) {
					message += error.response.body.errors[key].status + ' - ' + error.response.body.errors[key].title + ' - ' + error.response.body.errors[key].detail;
					name = error.response.body.errors[key].code;
				}
			} else {
				message = `${error.response.body.errors} |`;
			}
			const errorMessage = `Shopware error response ` + message;

			const newError = new Error(errorMessage);
			newError.name = name;
			throw newError;
		}
		throw error;
	}
}

async function handleShopwareApiRequestError(error: any) {
	if (error.response !== undefined && error.response.body && error.response.body.errors) {
		let message = '';
		if (typeof error.response.body.errors === 'object') {
			for (const key of Object.keys(error.response.body.errors)) {
				message += error.response.body.errors[key].status + ' - ' + error.response.body.errors[key].title + ' - ' + error.response.body.errors[key].detail;
				if(error.response.body.errors[key].source.pointer !== undefined) {
					message += ' - ' + error.response.body.errors[key].source.pointer;
				}
			}
		} else {
			message = `${error.response.body.errors} |`;
		}
		const errorMessage = `Shopware error response ` + message;
		throw new Error(errorMessage);
	}
	throw error;
}

export async function searchForShopwareEntity(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, resource: string, shopwareEntity: object): Promise<any> {
	const shopwareSearch:object = {"limit":1,"filter":[{"type":"multi","operator":"AND","queries":[]}]};

	removeEmptyProperties(shopwareEntity);
	for (var property in shopwareEntity) {
		if (shopwareEntity.hasOwnProperty(property)) {
			// @ts-ignore
			shopwareSearch.filter.push({"type":"equals","field":property,"value":shopwareEntity[property]});

		}
	}

	return getShopwareEntity.call(this, resource, shopwareSearch);
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

export function removeEmptyProperties(obj: object) {
	Object.keys(obj).forEach(function(key) {
		// @ts-ignore
		if (obj[key] && typeof obj[key] === 'object') removeEmptyProperties(obj[key]); //recursive for objects
		// @ts-ignore
			else if (obj[key] == null || obj[key]== "") delete obj[key];         //remove empty properties
		// @ts-ignore	
		if (typeof obj[key] === 'object' && Object.keys(obj[key]).length == 0) delete obj[key]; //remove empty objects
	});
};

const formatMetadataKey = Symbol("properties");

export function propertyConfiguration(properties: object) {
    return Reflect.metadata(formatMetadataKey, properties);
}

export function getPropertyConfiguration(target: any, propertyKey: string, property: string) {
   return Reflect.getMetadata(formatMetadataKey, target, property);
}