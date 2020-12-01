import { propertyConfiguration } from "./GenericFunctions";


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
    name?: string;
    @propertyConfiguration({requiredOnCreate: true, idSearch: true, searchEntity: 'property-group', multipleResults: false})
    groupId?: string;
    position?: number;
    colorHexCode?: string;
    @propertyConfiguration({requiredOnCreate: true, idSearch: true, searchEntity: 'media', multipleResults: false})    
    mediaId?: string;
    translations?: PropertyGroupOptionTranslation[];
}

export class PropertyGroupOptionTranslation {
    name?: string;
    position?: number;
}