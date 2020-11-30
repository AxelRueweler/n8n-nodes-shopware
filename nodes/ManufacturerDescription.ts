import {
	INodeProperties,
} from 'n8n-workflow';

import {
    idFilter
} from './ProductDescription';

export const manufacturerFields = [
	{
		displayName: 'Manufacturer IDs Search',
		name: 'manufacturerIds',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: [
					'product-manufacturer',
				],
				operation: [
					'update',
				],
			},
		},
		default: {},
		options: idFilter,
		description: "Manufacturer IDs of the manufacturers.",
		required: true, 
    },
    {
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'product-manufacturer',
				],
				operation: [
					'create', 'update'
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				default: '',
				type: 'string',
			},
			{
				displayName: 'Link',
				name: 'link',
				default: '',
				type: 'string',
			},
			{
				displayName: 'Description',
				name: 'description',
				default: '',
				type: 'string',
			},
			{
				displayName: 'MediaID Search',
				name: 'mediaId',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: idFilter,
				description: "Media ID of the manufacturer.",
				required: true, 
			},
			{
				displayName: 'Translations',
				name: 'translations',
				type: 'fixedCollection',
				placeholder: 'Add Texts',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: [
					{
						displayName: 'Translation',
						name: 'translation',
						type: 'fixedCollection',
						values: [
							{
								displayName: 'Language Id',
								name: 'languageId',
								type: 'options',
								default: '',
								typeOptions: {
									loadOptionsMethod: 'getLanguages',
								},
								description: 'LanguageId to consume.',
							},
							{
								displayName: 'Name',
								name: 'name',
								type: 'string',
								default: '',
								description: '',
							},
							{
								displayName: 'Description',
								name: 'description',
								type: 'string',
								default: '',
								description: '',
							},
						],
					}
				],
			},
		],
	}, 
] as INodeProperties[];