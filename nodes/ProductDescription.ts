import {
	INodeProperties,
	INodePropertyOptions,
	INodePropertyCollection,
} from 'n8n-workflow';
import { filterFields } from './ShopwareFields';

export const idFilter = [
			{
				displayName: 'Contains',
				name: 'contains',
				values: [
					{
						displayName: 'Field',
						name: 'field',
						type: 'string',
						default: '',
						description: '',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: '',
					},
				],
			},
			{
				displayName: 'EqualsAny',
				name: 'equalsAny',
				values: [
					{
						displayName: 'Field',
						name: 'field',
						type: 'string',
						default: '',
						description: '',
					},
					{
						displayName: 'Values',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Values comma seperated',
					},
				],
			},
			{
				displayName: 'Equals',
				name: 'equals',
				values: [
					{
						displayName: 'Field',
						name: 'field',
						type: 'string',
						default: '',
						description: '',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: '',
					},
				],
			}
		] as INodePropertyCollection[];

export const productFields = [
	/* -------------------------------------------------------------------------- */
	/*                                product:create/update                       */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Product IDs Search',
		name: 'entityIds',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: [
					'product',
				],
				operation: [
					'update',
				],
			},
		},
		default: {},
		options: idFilter,
		description: "Products ID of the products.",
		required: true, 
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'product',
				],
				operation: [
					'create',
				],
			},
		},
		default: '',
		description: '',
		required: true,
	},
	{
		displayName: 'Stock',
		name: 'stock',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'product',
				],
				operation: [
					'create',
				],
			},
		},
		description: "Stock of the product.",
		required: true,
	},
	
	{
		displayName: 'Product Number',
		name: 'productNumber',
		type: 'string',
		placeholder: '',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'product',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Number of the product.',
		required: true,
	},
	{
		displayName: 'TaxID Search',
		name: 'taxId',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: [ 
					'product',
				],
				operation: [
					'create',
				],
			},
		},
		default: {},
		options: idFilter,
		description: "Tax ID of the product.",
		required: true, 
	},
	{
		displayName: 'Prices',
		name: 'price',
		type: 'fixedCollection',
		placeholder: 'Add price',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: [ 
					'product',
				],
				operation: [
					'create',
				],
			},
		},
		required: true,
		options: [
			{
				displayName: 'Price',
				name: 'price',
				type: 'fixedCollection',
				values: [
					{
						displayName: 'Currency Id Search',
						name: 'currencyId',
						type: 'options',
						default: '',
						typeOptions: {
							loadOptionsMethod: 'getCurrencies',
						},
						description: 'CurrencyId to consume.',
					},
					{
						displayName: 'Net price',
						name: 'net',
						type: 'number',
						default: 0,
						description: '',
					},
					{
						displayName: 'Gross price',
						name: 'gross',
						type: 'number',
						default: 0,
						description: '',
					},
					{
						displayName: 'Price Linked',
						name: 'linked',
						type: 'boolean',
						default: true,
						description: '',
					},
					{
						displayName: 'List net price',
						name: 'listPriceNet',
						type: 'number',
						default: 0,
						description: 'List price (original price) when the price is reduced.',
					},
					{
						displayName: 'List gross price',
						name: 'listPriceGross',
						type: 'number',
						default: 0,
						description: '',
					},
					{
						displayName: 'List price Linked',
						name: 'listPriceLinked',
						type: 'boolean',
						default: true,
						description: '',
					},
				],
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'create', 'update',
				],
				resource: [
					'product',
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
				description: '',
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Configurator Group Configs',
				name: 'configuratorGroupConfig',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: [
					{
						displayName: 'Configurator Group Config',
						name: 'configuratorGroupConfig',
						type: 'fixedCollection',
						default: {},
						values: [
							{
								displayName: 'Property Group Id',
								name: 'id',
								type: 'options',
								default: '',
								typeOptions: {
									loadOptionsMethod: 'getPropertyGroups',
								},
								description: 'getPropertyGroups to consume.',
							},
							{
								displayName: 'Representation',
								name: 'representation',
								type: 'string',
								default: '',
								description: '',
							},
							{
								displayName: 'Expression For Listing',
								name: 'expressionForListing',
								type: 'boolean',
								default: false,
								description: '',
							},
						],
					}
				],
				description: "Options of the product. Use EqualsAny to search for multiple.",
			},
			{
				displayName: 'Cover Image Id Search',
				name: 'coverId',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: idFilter,
				description: "Cover Id of the product.",
			},
			{
				displayName: 'Custom Search Keywords',
				name: 'customSearchKeywords',
				type: 'string',
				default: '',
				description: 'Custom Search Keywords used by the internal search. Split by comma.',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'EAN',
				name: 'ean',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'height',
				name: 'height',
				type: 'number',
				default: 0,
				description: '',
			},
			{
				displayName: 'Is closeout',
				name: 'isCloseout',
				type: 'boolean',
				default: false,
				description: '',
			},

			{
				displayName: 'length',
				name: 'length',
				type: 'number',
				default: 0,
				description: '',
			},

			{
				displayName: 'Media Assets',
				name: 'media',
				type: 'fixedCollection',
				placeholder: 'Add Asset',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: [
					{
						displayName: 'Asset ID',
						name: 'media',
						type: 'collection',
						values: [
							{
								displayName: 'Media ID',
								name: 'mediaId',
								type: 'string',
								default: '',
								description: '',
								required: true,
							},
							{
								displayName: 'Position',
								name: 'position',
								type: 'number',
								default: 0,
								description: 'Position starts with 0',
							},
							{
								displayName: 'Is cover',
								name: 'isCover',
								type: 'boolean',
								default: false,
								description: '',
							},
						],
					},
					{
						displayName: ''
					}
					// Bigger refactoring for having it transactional (we dont want to delete image assignments if the update fails)
					/*{
						displayName: 'Configuration',
						name: 'configuration',
						type: 'collection',
						values: [
							{
								displayName: 'Replace existing media',
								name: 'replaceExistingMedia',
								type: 'boolean',
								default: false,
								description: '',
							},
						],
					}*/
					// Integrated mediaId search does not work at the moment
					// There is some sort of Vue.js error
					// TypeError: Cannot read property 'length' of undefined : FixedCollectionParameter.vue?86c9:formatted:129
					/*{
						displayName: 'Asset Search',
						name: 'assetSearch',
						type: 'collection',
						values: [
							{
								displayName: 'AssetID Search',
								name: 'assetId',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true,
								},
								default: {},
								values: idFilter,
								description: "Search of the AssetId.",
								required: true, 
							},
							{
								displayName: 'Position',
								name: 'position',
								type: 'string',
								default: '',
								description: '',
							},
							{
								displayName: 'Is cover',
								name: 'isCover',
								type: 'boolean',
								default: false,
								description: '',
							},
						],
					},*/
				],
			},
			{
				displayName: 'Manufacturer Search',
				name: 'manufacturerId',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: idFilter,
				description: "Manufacturer ID of the product.",
				required: true, 
			},
			{
				displayName: 'Min Purchase',
				name: 'minPurchase',
				type: 'number',
				default: 0,
				description: '',
			},
			{
				displayName: 'Max Purchase',
				name: 'maxPurchase',
				type: 'number',
				default: 0,
				description: '',
			},
			{
				displayName: 'Meta Title',
				name: 'metaTitle',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Meta Description',
				name: 'metaDescription',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Option Ids Search',
				name: 'options',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: idFilter,
				description: "Options of the product. Use EqualsAny to search for multiple.",
			},
			{
				displayName: 'Pack Unit',
				name: 'packUnit',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Pack Unit Plural',
				name: 'packUnitPlural',
				type: 'string',
				default: '',
				description: '',
			},

			{
				displayName: 'Parent Id Search',
				name: 'parentId',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: idFilter,
				description: "Parent Id of the product.",
			},
			{
				displayName: 'Prices',
				name: 'prices',
				type: 'fixedCollection',
				placeholder: 'Add price',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: [
					{
						displayName: 'Price',
						name: 'price',
						type: 'collection',
						values: [
							{
								displayName: 'Currency Id Search',
								name: 'currencyId',
								type: 'options',
								default: '',
								typeOptions: {
									loadOptionsMethod: 'getCurrencies',
								},
								description: 'CurrencyId to consume.',
							},
							{
								displayName: 'Net price',
								name: 'net',
								type: 'number',
								default: 0,
								description: '',
							},
							{
								displayName: 'Gross price',
								name: 'gross',
								type: 'number',
								default: 0,
								description: '',
							},
							{
								displayName: 'Price Linked',
								name: 'linked',
								type: 'boolean',
								default: true,
								description: '',
							},
							{
								displayName: 'List net price',
								name: 'listPriceNet',
								type: 'number',
								default: 0,
								description: 'List price (original price) when the price is reduced.',
							},
							{
								displayName: 'List gross price',
								name: 'listPriceGross',
								type: 'number',
								default: 0,
								description: '',
							},
							{
								displayName: 'List price Linked',
								name: 'listPriceLinked',
								type: 'boolean',
								default: true,
								description: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Product Number',
				name: 'productNumber',
				type: 'string',
				placeholder: '',
				default: '',
				description: 'Number of the product.',
			},
			{
				displayName: 'Property Ids Search',
				name: 'properties',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: idFilter,
				description: "Property Ids of the product. Use EqualsAny to search for multiple.",
			},
			{
				displayName: 'Purchase Steps',
				name: 'purchaseSteps',
				type: 'number',
				default: 0,
				description: '',
			},
			{
				displayName: 'Purchase Unit',
				name: 'purchaseUnit',
				type: 'number',
				default: 0,
				description: '',
			},
			{
				displayName: 'Reference Unit',
				name: 'referenceUnit',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Release date', 
				name: 'releaseDate',
				type: 'dateTime',
				default: '',
				description: '',
			},
			{
				displayName: 'Restock time',
				name: 'restockTime',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Stock',
				name: 'stock',
				type: 'number',
				default: '',
				description: "Stock of the product.",
			},
			{
				displayName: 'TaxID Search',
				name: 'taxId',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: idFilter,
				description: "Tax ID of the product.",
				required: true, 
			},
			{
				displayName: 'Shipping free',
				name: 'shippingFree',
				type: 'boolean',
				default: false,
				description: '',
			},
			{
				displayName: 'Translations',
				name: 'translations',
				type: 'collection',
				placeholder: 'Add Texts',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: [
					{
						displayName: 'Translation',
						name: 'translation',
						type: 'collection',
						default: {},
						options: [
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
								displayName: 'Keywords',
								name: 'keywords',
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
								displayName: 'Meta Title',
								name: 'metaTitle',
								type: 'string',
								default: '',
								description: '',
							},
							{
								displayName: 'Meta Description',
								name: 'metaDescription',
								type: 'string',
								default: '',
								description: '',
							},
							{
								displayName: 'Pack Unit',
								name: 'packUnit',
								type: 'string',
								default: '',
								description: '',
							},
							{
								displayName: 'Pack Unit Plural',
								name: 'packUnitPlural',
								type: 'string',
								default: '',
								description: '',
							},
							{
								displayName: 'Custom Search Keywords',
								name: 'customSearchKeywords',
								type: 'string',
								default: '',
								description: 'Custom Search Keywords used by the internal search. Split by comma.',
							},
						],
					}
				],
			},
			{
				displayName: 'UnitId Search',
				name: 'unitId',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: idFilter,
				description: "Unit ID of the product.",
			},
			{
				displayName: 'weight',
				name: 'weight',
				type: 'number',
				default: 0,
				description: '',
			},
			{
				displayName: 'width',
				name: 'width',
				type: 'number',
				default: 0,
				description: '',
			},
		],
	},
] as INodeProperties[];