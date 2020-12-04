import { propertyConfiguration } from "./GenericFunctions";
import { IShopwareEntityConfiguration } from './ShopwareEntityInterface';

export const ManufacturerMap: IShopwareEntityConfiguration = {
    endpoint: 'product-manufacturer',
    class: 'Manufacturer',
    bodyMethod: 'createShopwareEntityObject',
    setMethod: 'setShopwareEntity',
};

export class Manufacturer {
    description?: string = undefined;
    id?: string = undefined;
    link?: string = undefined;
    @propertyConfiguration({requiredOnCreate: true, idSearch: true, searchEntity: 'media', multipleResults: false})    
    mediaId?: string = undefined;
    @propertyConfiguration({requiredOnCreate: true})
    name?: string = undefined;
    translations?: ManufacturerTranslation[] = undefined;
    versionId?: string = undefined;
}

export class ManufacturerTranslation {
    name?: string = undefined;
    description?: string = undefined;
}