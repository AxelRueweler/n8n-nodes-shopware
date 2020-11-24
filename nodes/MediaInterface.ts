export interface IMedia {
    alt?: string;
    extension: string;
    fileName: string;
    title?: string;
    translation?: IMediaTranslation;
}

export interface IMediaTranslation {
    languageId: string;
    title?: string;
    alt?: string;
}
