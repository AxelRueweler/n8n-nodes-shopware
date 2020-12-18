import { propertyConfiguration } from "./GenericFunctions";
import { IShopwareEntityConfiguration } from './ShopwareEntityInterface';

export const ProductMap = {
    endpoint: 'product',
    class: 'Product',
    bodyMethod: 'createShopwareEntityObject',
    setMethod: 'setShopwareEntity',
} as IShopwareEntityConfiguration;

export class Product {
    @propertyConfiguration({requiredOnCreate: true})
    name?: string = undefined;
    @propertyConfiguration({requiredOnCreate: true, multipleValues: true})
    price?: Price[] = undefined;
    @propertyConfiguration({requiredOnCreate: true})
    productNumber?: string = undefined;
    @propertyConfiguration({requiredOnCreate: true})
    stock?: number = undefined;
    active?: boolean = undefined;
    autoIncrement?: number = undefined;
    //blacklistIds?: IBlacklistIds;
    //categories?: IAssociationToMany = undefined;
    //categoriesRo?: IAssociationToMany = undefined;
    //children?: IAssociationToMany = undefined;
    configuratorGroupConfig?: ConfiguratorGroupConfig[] = undefined;
    //configuratorSettings?: IAssociationToMany = undefined;
    //cover?: IAssociationToOne = undefined;
    @propertyConfiguration({idSearch: true, searchEntity: 'media', multipleResults: false})
    coverId?: string = undefined;
    //crossSellingAssignedProducts?: IAssociationToMany = undefined;
    //crossSellings?: IAssociationToMany = undefined;
    //customFields?: ICustomFields; //translatable
    customFieldSetSelectionActive?: boolean = undefined;
    //customFieldSets?: IAssociationToMany = undefined;
    //deliveryTime?: IAssociationToOne = undefined;
    deliveryTimeId?: string = undefined;
    ean?: number = undefined;
    //featureSet?: IAssociationToMany = undefined;
    featureSetId?: string = undefined;
    height?: number = undefined;
    id?: string = undefined;
    isCloseout?: boolean = undefined;
    length?: number = undefined;
    //mainCategories?: IAssociationToMany = undefined;
    @propertyConfiguration({idSearch: true, searchEntity: 'product', multipleResults: false})
    mainVariantId?: string = undefined;
    //manufacturer?: IAssociationToOne = undefined;
    @propertyConfiguration({idSearch: true, searchEntity: 'product-manufacturer', multipleResults: false})
    manufacturerId?: string = undefined;
    manufacturerNumber?: string = undefined;
    markAsTopseller?: boolean = undefined;
    maxPurchase?: number = undefined;
    @propertyConfiguration({multipleValues: true})
    media?: ProductMedia[] = undefined;
    minPurchase?: number = undefined;
    @propertyConfiguration({idSearch: true, searchEntity: 'property-group-option', multipleResults: true, multipleValues: true})
    options?: ProductOption[] = undefined;
    //orderLineItems?: IAssociationToMany = undefined;
    //parent?: string = undefined;
    @propertyConfiguration({idSearch: true, searchEntity: 'product', multipleResults: false})
    parentId?: string = undefined;
    parentVersionId?: string = undefined;
    //prices?: IAssociationToMany = undefined;
    productManufacturerVersionId?: string = undefined;
    productMediaVersionId?: string = undefined;
    //productReviews?: IAssociationToMany = undefined;
    @propertyConfiguration({idSearch: true, searchEntity: 'property-group-option', multipleResults: true, multipleValues: true})
    properties?: string[] = undefined;
    purchasePrices?: Price = undefined;
    purchaseSteps?: number = undefined;
    purchaseUnit?: number = undefined;
    referenceUnit?: number = undefined;
    releaseDate?: Date = undefined;
    restockTime?: number = undefined;
    @propertyConfiguration({multipleValues: true})
    searchKeywords?: CustomSearchKeyword[] = undefined;
    //seoUrls?: IAssociationToMany = undefined;
    shippingFree?: boolean = undefined;
    //swagCustomizedProductsTemplate?: IAssociationToOne = undefined;
    swagCustomizedProductsTemplateId?: string = undefined;
    swagCustomizedProductsTemplateVersionId?: string = undefined;
    //tags?: IAssociationToMany = undefined;
    //tax?: IAssociationToOne = undefined;
    @propertyConfiguration({requiredOnCreate: true, idSearch: true, searchEntity: 'tax', multipleResults: false})
    taxId?: string = undefined;
    translation?: string = undefined;
    @propertyConfiguration({multipleValues: true})
    translations?: ProductTranslation[] = undefined;
    //unit?: IAssociationToOne = undefined;
    unitId?: string = undefined;
    //variantRestrictions?: IVariantRestrictions;
    variation?: string = undefined;
    versionId?: string = undefined;
    //visibilities?: IAssociationToMany = undefined;
    weight?: number = undefined;
    //whitelistIds?: IWhitelistIds;
    width?: number = undefined;
}

export class CustomSearchKeyword {
    [key: string]: string;
};

export class ProductTranslation {
    languageId?: string = undefined;
    name?: string = undefined; //translatable
    keywords?: string = undefined; //translatable
    description?: string = undefined; //translatable
    metaTitle?: string = undefined; //translatable
    metaDescription?: string = undefined; //translatable
    packUnit?: string = undefined; //translatable
    packUnitPlural?: string = undefined;; //translatable
    customSearchKeywords?: CustomSearchKeyword[] = undefined; //translatable
}

export class Price {
    currencyId?: string = undefined;
    net?: number = undefined;
    gross?: number = undefined;
    linked?: boolean = undefined;
    listPrice?: ListPrice = undefined;
}

export class ListPrice {
    currencyId?: string = undefined;
    net?: number = undefined;
    gross?: number = undefined;
    linked?: boolean = undefined;
}

export class ProductMedia {
    mediaId?: string = undefined;
    position?: number = undefined;
    isCover?: boolean = undefined;
}

export class ConfiguratorGroupConfig {
    id?: string = undefined;
    representation?: string = undefined;
    expressionForListing?: boolean = undefined;
}

export class ProductOption {
    id?: string = undefined;
}

export class ProductConfiguratorSetting {
    id?: string = undefined;
    versionId?: string = undefined;
    @propertyConfiguration({requiredOnCreate: true})
    productId?: string = undefined;
    productVersionId?: string = undefined;
    mediaId?: string = undefined;
    @propertyConfiguration({requiredOnCreate: true})
    optionId?: string = undefined;
    position?: number = undefined;
}