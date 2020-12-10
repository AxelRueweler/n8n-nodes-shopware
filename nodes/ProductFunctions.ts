import {
	IExecuteFunctions,
	IExecuteSingleFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
} from 'n8n-core';
import { searchForShopwareEntity, shopwareApiRequest } from './GenericFunctions';
import { ProductConfiguratorSetting } from './ProductInterface';

export async function updateVariationOptionAssignment(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, id: string, shopwareEntity: object) {
	const endpoint = 'product-configurator-setting';
	let shopwareSearch = {"ids":[id],"limit":"100","includes":{"product":["childCount"]},"total-count-mode":"0","filter":[]};	
	let responseData = await shopwareApiRequest.call(this, 'POST', '/search/product', shopwareSearch);

	if(responseData[0].childCount > 0) {
		// @ts-ignore
		shopwareSearch = {"includes":{"product":["id","optionIds"]},"total-count-mode":"0","filter":[{"type":"equals","field":"parentId","value":id}]}

		const responseDataOptions = await shopwareApiRequest.call(this, 'POST', '/search/product', shopwareSearch);

		let options:object[] = [];
		// @ts-ignore
		responseDataOptions.forEach(row => {
			// @ts-ignore
			row.optionIds.forEach(optionId => {
				const productConfiguratorSetting = new ProductConfiguratorSetting();
				productConfiguratorSetting.productId = id;
				productConfiguratorSetting.optionId = optionId;

				options.push(productConfiguratorSetting);
			});
		});

		const optionsBody = {configuratorSettings: options};

		for (const option of options) {
			const productConfiguratorSetting = await searchForShopwareEntity.call(this, endpoint, option);
			if(productConfiguratorSetting.length === 0) {
				responseData = await shopwareApiRequest.call(this, 'POST', '/' + endpoint, option);
			}
		};
	}

	// @ts-ignore
	if(shopwareEntity.parentId !== undefined && shopwareEntity.optionIds !== undefined) {
		let options:object[] = [];
		// @ts-ignore 
		shopwareEntity.optionIds.forEach(optionId => {
			options.push({optionId: optionId});
		});

		const optionsBody = {configuratorSettings: options};

		// @ts-ignore
		const responseData = await shopwareApiRequest.call(this, 'PATCH', '/' + shopwareEntityConfiguration.endpoint + '/' + shopwareEntity.parentId, optionsBody);
	}
}