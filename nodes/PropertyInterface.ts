import { propertyConfiguration } from "./GenericFunctions";
import { IShopwareEntityConfiguration } from './ShopwareEntityInterface';

export const PropertyGroupMap = {
    endpoint: 'property-group',
    class: 'PropertyGroup',
    bodyMethod: 'createShopwareEntityObject',
    setMethod: 'setShopwareEntity',
} as IShopwareEntityConfiguration;

export const PropertyGroupOptionMap = {
    endpoint: 'property-group-option',
    class: 'PropertyGroupOption',
    bodyMethod: 'createShopwareEntityObject',
    setMethod: 'setShopwareEntity',
} as IShopwareEntityConfiguration;

export class PropertyGroup {
    @propertyConfiguration({requiredOnCreate: true})
    name?: string = undefined;
    description?: string = undefined;
    displayType?: string = undefined;
    sortingType?: string = undefined;
    filterable?: boolean = undefined;
    position?: number = undefined;
    options?: PropertyGroupOption[] = undefined;
    translations?: PropertyGroupTranslation[] = undefined;
}

export class PropertyGroupTranslation {
    name?: string;
    description?: string;
    position?: number; // This is because different translations need differenz sortings 
}

export class PropertyGroupOption {
    @propertyConfiguration({requiredOnCreate: true})
    name?: string = undefined;
    @propertyConfiguration({requiredOnCreate: true, idSearch: true, searchEntity: 'property-group', multipleResults: false})
    groupId?: string = undefined;
    position?: number = undefined;
    colorHexCode?: string = undefined;
    @propertyConfiguration({idSearch: true, searchEntity: 'media', multipleResults: false})    
    mediaId?: string = undefined;
    translations?: PropertyGroupOptionTranslation[] = undefined;
}

export class PropertyGroupOptionTranslation {
    name?: string = undefined;
    position?: number = undefined;
}