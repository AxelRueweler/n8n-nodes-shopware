import {
	IExecuteFunctions,
	ILoadOptionsFunctions,
} from 'n8n-core';

import {
	IDataObject,
} from 'n8n-workflow';

import {
	IProductCreate,
	IProductUpdate,
	IPrice,
	IListPrice,
	IProductTranslation,
	IProduct,
} from './ProductInterface';

import {
	getEntityIdByFilter,
	removeEmptyProperties,
} from './GenericFunctions';

export async function getProductCreateOrUpdateBody(this: ILoadOptionsFunctions | IExecuteFunctions, i: number, operation: string): Promise<IProductUpdate | IProductCreate> {
	let body: IProductUpdate = {};

    /*
	* Required Fields
	*/ 
	if(operation === 'create') {
		const name = this.getNodeParameter('name', i) as string;
		const productNumber = this.getNodeParameter('productNumber', i) as string;
		const taxIdSearch = this.getNodeParameter('taxId', i) as IDataObject;
		const stock = this.getNodeParameter('stock', i) as number;
		const tmpPrices = this.getNodeParameter('prices', i) as IDataObject[];

		const prices: IPrice[] = [];
		// @ts-ignore
		tmpPrices.price.forEach(function(tmpPrice) {
			const price = {
				currencyId: tmpPrice.currencyId,
				net: tmpPrice.net,
				gross: tmpPrice.gross,
				linked: tmpPrice.linked,
			} as IPrice;

			if(tmpPrice.listPrice) {
				price.listPrice = {
					currencyId: tmpPrice.currencyId,
					net: tmpPrice.listPriceNet,
					gross: tmpPrice.listPriceGross,
					linked: tmpPrice.listPriceLinked,
				} as IListPrice;
			}

			prices.push(price);
		}, this);

		// @ts-ignore
		const taxId = await getEntityIdByFilter.call(this, 'tax', taxIdSearch);

		body = {
			name: name,
			productNumber: productNumber,
			taxId: taxId,
			stock: stock,
			price: prices,
		} as IProductCreate;
	} else if (operation === 'update') {
		const baseFields = this.getNodeParameter('baseFields', i) as object[];

		body = {} as IProductUpdate;

		for (const [key, value] of Object.entries(baseFields)) {
			if(key === 'prices') {
				const prices: IPrice[] = [];

				// @ts-ignore
				for(const tmpPrice of value.price) {
					if(tmpPrice !== undefined && tmpPrice !== null) {
						const price = {
							currencyId: tmpPrice.currencyId,
							net: tmpPrice.net,
							gross: tmpPrice.gross,
							linked: tmpPrice.linked,
						} as IPrice;
			
						if(price.listPrice) {
							price.listPrice = {
								currencyId: tmpPrice.currencyId,
								net: tmpPrice.listPriceNet,
								gross: tmpPrice.listPriceGross,
								linked: tmpPrice.listPriceLinked,
							} as IListPrice;
						}
						prices.push(price);
					}
				}
		
				if(prices.length !== 0) {
					Object.assign(body, {price: prices});	
				}
			}else if(key === 'customSearchKeywords') {
				// @ts-ignore
				Object.assign(body, {customSearchKeywords: value.split(',')});
			} else if(key) {
				// Catch-All for singe-value fields without any special conversion
				Object.assign(body, {[key]: value});
			}
		};
	}

	/*
	 * Optional Fields
	 */
	const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject[];

	for (const [key, value] of Object.entries(additionalFields)) {
		if(key === 'translations'){
			const translations: IProductTranslation[] = [];
			
			// @ts-ignore
			value.translation.forEach(function(tmpTranslation) {
				const translation = {
					languageId:  tmpTranslation.languageId,
					name: tmpTranslation.name, 
					keywords: tmpTranslation.keywords, 
					description: tmpTranslation.description, 
					metaTitle: tmpTranslation.metaTitle, 
					metaDescription: tmpTranslation.metaDescription, 
					packUnit: tmpTranslation.packUnit, 
					packUnitPlural: tmpTranslation.packUnitPlural, 
					customSearchKeywords: tmpTranslation.customSearchKeywords.split(','), 
				} as IProductTranslation;
		
				removeEmptyProperties(translation);
		
				translations.push(translation);
			}, this);
		
			if(translations.length !== 0) {
				Object.assign(body, {translations: translations});	
			}
		} else if(key === 'packageData') {
			for(const [keyPackageData, valuePackageData] of Object.entries(value)){
				if(keyPackageData === 'unitId') {
					console.log(valuePackageData);

					// @ts-ignore
					const unitId = await getEntityIdByFilter.call(this, 'unit', valuePackageData);
					console.log(unitId);
					Object.assign(body, {unitId: unitId});
				} else {
					Object.assign(body, {[keyPackageData]: valuePackageData});
				}
			}
		} else if(key === 'additionalStockData') {
			for(const [keyAdditionalStockData, valueAdditionalStockData] of Object.entries(value)){
				Object.assign(body, {[keyAdditionalStockData]: valueAdditionalStockData});
			}
		} else if(key === 'customSearchKeywords') {
			// @ts-ignore
			Object.assign(body, {customSearchKeywords: value.split(',')});
		} else if(key) {
			// Catch-All for singe-value fields without any special conversion
			Object.assign(body, {[key]: value});
		}
	}

	return body;
}