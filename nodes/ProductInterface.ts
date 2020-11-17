import {
    IDataObject,
    GenericValue
} from 'n8n-workflow';

export interface IProduct {
    id?: string;
    versionId?: string;
    parentId?: string;
    parentVersionId?: string;
    manufacturerId?: string;
    productManufacturerVersionId?: string;
    unitId?: string;
    taxId?: string;
    coverId?: string;
    name: string;
    productMediaVersionId?: string;
    deliveryTimeId?: string;
    price: IPrice[]; // ✔
    productNumber: string; // ✔
    stock: number; // ✔
    restockTime?: number;
    autoIncrement?: number;
    active?: boolean;
    isCloseout?: boolean;
    //configuratorGroupConfig?: IConfiguratorGroupConfig;
    mainVariantId?: string;
    //variantRestrictions?: IVariantRestrictions;
    manufacturerNumber?: string;
    ean?: number;
    purchaseSteps?: number;
    maxPurchase?: number;
    minPurchase?: number;
    purchaseUnit?: number;
    referenceUnit?: number;
    shippingFree?: boolean;
    markAsTopseller?: boolean;
    weight?: number;
    width?: number;
    height?: number;
    length?: number;
    releaseDate?: Date;
    //blacklistIds?: IBlacklistIds;
    //whitelistIds?: IWhitelistIds;
    customFieldSetSelectionActive?: boolean;
    translation?: string; 
    //customFields?: ICustomFields; //translatable
    parent?: IAssociationToOne;
    children?: IAssociationToMany;
    deliveryTime?: IAssociationToOne;
    tax?: IAssociationToOne;
    manufacturer?: IAssociationToOne;
    unit?: IAssociationToOne;
    cover?: IAssociationToOne;
    prices?: IAssociationToMany;
    media?: IAssociationToMany;
    crossSellings?: IAssociationToMany;
    crossSellingAssignedProducts?: IAssociationToMany;
    configuratorSettings?: IAssociationToMany;
    visibilities?: IAssociationToMany;
    searchKeywords?: IAssociationToMany;
    productReviews?: IAssociationToMany;
    mainCategories?: IAssociationToMany;
    seoUrls?: IAssociationToMany;
    orderLineItems?: IAssociationToMany;
    options?: IAssociationToMany;
    properties?: IAssociationToMany;
    categories?: IAssociationToMany;
    categoriesRo?: IAssociationToMany;
    tags?: IAssociationToMany;
    translations?: IProductTranslation[];
    customFieldSets?: IAssociationToMany;
    variation?: string;
    featureSetId?: string;
    featureSet?: IAssociationToMany;
    purchasePrices?: IPrice;
    createdAt?: Date; //Echt wichtig?
    swagCustomizedProductsTemplate?: IAssociationToOne;
    swagCustomizedProductsTemplateId?: string;
    swagCustomizedProductsTemplateVersionId?: string;
}


export interface IAssociationToMany {
    type: 'toMany';
    [key: string]: GenericValue | GenericValue[];
};

export interface IAssociationToOne {
    type: 'toOne';
    [key: string]: GenericValue | GenericValue[];
};

export interface ICustomSearchKeyword {
    [key: string]: GenericValue | GenericValue[];
};

export interface IProductTranslation {
    languageId: string
    name?: string; //translatable // ✔
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