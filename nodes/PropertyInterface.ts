export interface IPropertyGroup {
    name?: string;
    description?: string;
    displayType?: string;
    sortingType?: string;
    filterable?: boolean;
    position?: number;
    options?: IPropertyGroupOption[];
    translations?: IPropertyGroupTranslation[];
}

export interface IPropertyGroupTranslation {
    name?: string;
    description?: string;
    position?: number; // This is because different translations need differenz sortings 
}

export interface IPropertyGroupOption {
    name?: string;
    groupId?: string,
    position?: number;
    colorHexCode?: string;
    mediaId: string;
    translations?: IPropertyGroupOptionTranslation[];
}

export interface IPropertyGroupOptionTranslation {
    name?: string;
    position?: number;
}