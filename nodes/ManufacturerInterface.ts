export interface IManufacturer {
    description?: string;
    id?: string;
    link?: string;
    mediaId?: string;
    name?: string;
    translations?: IManufacturerTranslation[];
}

export interface IManufacturerTranslation {
    name?: string;
    description?: string;
} 