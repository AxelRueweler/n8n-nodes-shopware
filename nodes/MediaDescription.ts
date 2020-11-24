import {
	INodeProperties,
} from 'n8n-workflow';


export const mediaFields = [
	{
		displayName: 'Media Folder',
		name: 'mediaFolder',
		displayOptions: {
			show: {
				resource: [
					'media',
				],
				operation: [
					'create'
				],
			},
		},
		default: {},
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getMediaFolders',
		},
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		displayOptions: {
			show: {
				resource: [
					'media',
				],
				operation: [
					'create'
				],
			},
		},
		default: '',
		type: 'string',
	},
	{
		displayName: 'Is Binary',
		name: 'isBinaryData',
		displayOptions: {
			show: {
				resource: [
					'media',
				],
				operation: [
					'create'
				],
			},
		},
		default: false,
		type: 'boolean',
	},
	{
		displayName: 'binaryPropertyName',
		name: 'binaryPropertyName',
		displayOptions: {
			show: {
				resource: [
					'media',
				],
				operation: [
					'create'
				],
			},
		},
		default: '',
		type: 'string',
	},
	{
		displayName: 'File Url',
		name: 'fileUrl',
		displayOptions: {
			show: {
				resource: [
					'media',
				],
				operation: [
					'create'
				],
			},
		},
		default: '',
		type: 'string',
	},
	{
		displayName: 'Override Mode',
		name: 'overrideMode',
		displayOptions: {
			show: {
				resource: [
					'media',
				],
				operation: [
					'create'
				],
			},
		},
		default: 'skip',
		type: 'options',
		options: [
			{
				name: 'Rename',
				value: 'rename',
				description: 'Creates a new asset with a new name',
			},
			{
				name: 'Replace',
				value: 'replace',
				description: 'Replaces the old asset with the same name',
			},
			{
				name: 'Skip',
				value: 'skip',
				description: 'Skipps the asset',
			},
			{
				name: 'Error',
				value: 'error',
				description: 'Throws an error if the asset already exists',
			},
		],
	},
] as INodeProperties[]; 
