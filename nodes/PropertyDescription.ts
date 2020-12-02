import {
	INodeProperties,
} from 'n8n-workflow';

import { idFilter } from './ProductDescription';

export const propertyGroupFields = [
	{
		displayName: 'Property Group IDs Search',
		name: 'entityIds', // Generic Id Search for updates
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: [
					'property-group',
				],
				operation: [
					'update',
				],
			},
		},
		default: {},
		options: idFilter,
		description: "Property Group IDs of the property groups.",
		required: true, 
	},
	{
		displayName: 'Name',
		name: 'name',
		displayOptions: {
			show: {
				resource: [
					'property-group',
				],
				operation: [
					'create'
				],
			},
		},
		default: '',
		type: 'string',
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
					'property-group',
				],
				operation: [
					'create', 'update',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Display Type',
				name: 'displayType',
				type: 'string',
				default: '',
			},
			{
				displayName: 'sortingType',
				name: 'sortingType',
				type: 'string',
				default: '',
			},
			{
				displayName: 'filterable Type',
				name: 'filterable',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
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
							{
								displayName: 'Position',
								name: 'position',
								type: 'number',
								default: 0,
								description: '',
							},
						],
					}
				],
			},
		],
	},
] as INodeProperties[];

export const propertyGroupOptionFields = [
	{
		displayName: 'Property Group Option IDs Search',
		name: 'propertyGroupOptionIds',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: [
					'property-group-option',
				],
				operation: [
					'update',
				],
			},
		},
		default: {},
		options: idFilter,
		description: "Property Group Option IDs of the property group options.",
		required: true, 
	},
	{
		displayName: 'Property Group ID Search',
		name: 'propertyGroupId',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: [
					'property-group-option',
				],
				operation: [
					'update', 'create',
				],
			},
		},
		default: {},
		options: idFilter,
		description: "Property Group ID of the property group options.",
		required: true, 
	},
	{
		displayName: 'Name',
		name: 'name',
		displayOptions: {
			show: {
				resource: [
					'property-group-option',
				],
				operation: [
					'create'
				],
			},
		},
		default: '',
		type: 'string',
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
					'property-group-option',
				],
				operation: [
					'create', 'update',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Color',
				name: 'colorHexCode',
				type: 'color',
				default: '0',
			},
			{
				displayName: 'Media Asset',
				name: 'position',
				type: 'number',
				default: 0,
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
								displayName: 'Position',
								name: 'position',
								type: 'number',
								default: 0,
								description: '',
							},
						],
					}
				],
			},
		],
	},
] as INodeProperties[]; 
