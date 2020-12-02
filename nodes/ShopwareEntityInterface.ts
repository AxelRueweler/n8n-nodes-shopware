import { createShopwareEntityObject, setShopwareEntity } from './ShopwareEntityFunctions';

import { Manufacturer, ManufacturerMap } from "./ManufacturerInterface";

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
	'property-group': PropertyGroupMap,
	'property-group-option': PropertyGroupOptionMap,
}; 

export const entityStore = {
	Manufacturer,
	PropertyGroup,
	PropertyGroupOption,
}

export const bodyMethodStore = {
	createShopwareEntityObject,
}

export const setMethodStore = {
	setShopwareEntity,
}

export type IShopwareEntities = Manufacturer |PropertyGroup | PropertyGroupOption;