import {
    IDataObject,
    GenericValue
} from 'n8n-workflow';

export interface IProduct {
    active?: boolean;
    autoIncrement?: number;
    //blacklistIds?: IBlacklistIds;
    categories?: IAssociationToMany;
    categoriesRo?: IAssociationToMany;
    children?: IAssociationToMany;
    //configuratorGroupConfig?: IConfiguratorGroupConfig;
    configuratorSettings?: IAssociationToMany;
    cover?: IAssociationToOne;
    coverId?: string;
    crossSellingAssignedProducts?: IAssociationToMany;
    crossSellings?: IAssociationToMany;
    //customFields?: ICustomFields; //translatable
    customFieldSetSelectionActive?: boolean;
    customFieldSets?: IAssociationToMany;
    deliveryTime?: IAssociationToOne;
    deliveryTimeId?: string;
    ean?: number;
    featureSet?: IAssociationToMany;
    featureSetId?: string;
    height?: number;
    id?: string;
    isCloseout?: boolean;
    length?: number;
    mainCategories?: IAssociationToMany;
    mainVariantId?: string;
    manufacturer?: IAssociationToOne;
    manufacturerId?: string;
    manufacturerNumber?: string;
    markAsTopseller?: boolean;
    maxPurchase?: number;
    media?: IProductMedia;
    minPurchase?: number;
    options?: IAssociationToMany;
    orderLineItems?: IAssociationToMany;
    parent?: IAssociationToOne;
    parentId?: string;
    parentVersionId?: string;
    prices?: IAssociationToMany;
    productManufacturerVersionId?: string;
    productMediaVersionId?: string;
    productReviews?: IAssociationToMany;
    properties?: IAssociationToMany;
    purchasePrices?: IPrice;
    purchaseSteps?: number;
    purchaseUnit?: number;
    referenceUnit?: number;
    releaseDate?: Date;
    restockTime?: number;
    searchKeywords?: IAssociationToMany;
    seoUrls?: IAssociationToMany;
    shippingFree?: boolean;
    swagCustomizedProductsTemplate?: IAssociationToOne;
    swagCustomizedProductsTemplateId?: string;
    swagCustomizedProductsTemplateVersionId?: string;
    tags?: IAssociationToMany;
    tax?: IAssociationToOne;
    taxId?: string;
    translation?: string; 
    translations?: IProductTranslation[];
    unit?: IAssociationToOne;
    unitId?: string;
    //variantRestrictions?: IVariantRestrictions;
    variation?: string;
    versionId?: string;
    visibilities?: IAssociationToMany;
    weight?: number;
    //whitelistIds?: IWhitelistIds;
    width?: number;
}

export interface IProductCreate extends IProduct {
    name: string;
    price: IPrice[];
    productNumber: string;
    stock: number;
}

/*
 * Updating products uses the same parameters but without any required fields
 */
export interface IProductUpdate extends IProduct{
    name?: string;
    price?: IPrice[];
    productNumber?: string;
    stock?: number;
}


export interface IAssociationToMany {
    [key: string]: GenericValue | GenericValue[];
};

export interface IAssociationToOne {
    [key: string]: GenericValue | GenericValue[];
};

export interface ICustomSearchKeyword {
    [key: string]: GenericValue | GenericValue[];
};

export interface IProductTranslation {
    languageId: string
    name?: string; //translatable
    keywords?: string; //translatable
    description?: string; //translatable
    metaTitle?: string; //translatable
    metaDescription?: string; //translatable
    packUnit?: string; //translatable
    packUnitPlural?: string; //translatable
    customSearchKeywords?: ICustomSearchKeyword[]; //translatable
}

export interface IPrice {
    currencyId: string;
    net?: number;
    gross?: number;
    linked: boolean;
    listPrice?: IListPrice;
}

export interface IListPrice {
    currencyId: string;
    net?: number;
    gross?: number;
    linked?: boolean;
}

export interface IProductMedia {
    mediaId: string;
    position: number;
}