import { createShopwareEntityObject, setShopwareEntity } from './ShopwareEntityFunctions';

import { Manufacturer, ManufacturerMap } from "./ManufacturerInterface";

import { Product, ProductMap } from "./ProductInterface";

import { PropertyGroup, PropertyGroupMap, PropertyGroupOption, PropertyGroupOptionMap } from "./PropertyInterface";

export interface IShopwareEntityConfiguration {
	bodyMethod: string;
	class: string;
	endpoint: string;
	setMethod: string;
};

export interface IShopwareEntityMap {
	[key: string]: IShopwareEntityConfiguration;
}

export const entityMaps: IShopwareEntityMap = {
	'product-manufacturer': ManufacturerMap,
	'product': ProductMap,
	'property-group': PropertyGroupMap,
	'property-group-option': PropertyGroupOptionMap,
}; 

export const entityStore = {
	Manufacturer,
	PropertyGroup,
	PropertyGroupOption,
	Product,
}

export const bodyMethodStore = {
	createShopwareEntityObject,
}

export const setMethodStore = {
	setShopwareEntity,
}

export type IShopwareEntities = Manufacturer |PropertyGroup | PropertyGroupOption | Product;