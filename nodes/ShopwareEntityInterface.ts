import { PropertyGroup } from "./PropertyInterface";

import { createShopwareEntityObject, setShopwareEntity } from './ShopwareEntityFunctions';

export interface IShopwareEntityConfiguration {
	endpoint: string;
	class: string;
	bodyMethod: string;
	setMethod: string;
};

export interface IShopwareEntityMap {
	[key: string]: IShopwareEntityConfiguration;
}

export const entityMaps: IShopwareEntityMap = {
	'property-group': {
		endpoint: 'property-group',
		class: 'PropertyGroup',
		bodyMethod: 'createShopwareEntityObject',
		setMethod: 'setShopwareEntity',
	} as IShopwareEntityConfiguration,
}; 

export const entityStore = {
	PropertyGroup,
}

export const bodyMethodStore = {
	createShopwareEntityObject,
}

export const setMethodStore = {
	setShopwareEntity,
}

export type IShopwareEntities = PropertyGroup;