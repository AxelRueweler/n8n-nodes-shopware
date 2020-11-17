import {
	INodeProperties,
	INodePropertyOptions,
	INodePropertyCollection,
} from 'n8n-workflow';

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
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: '',
		required: true,
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
	{
		displayName: 'Product Number',
		name: 'productNumber',
		type: 'string',
		placeholder: '',
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
		description: 'Number of the product.',
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
		displayName: 'Translations',
		name: 'translations',
		type: 'fixedCollection',
		placeholder: 'Add Texts',
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
		displayName: 'Prices',
		name: 'prices',
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
						default: '',
						description: '',
					},
					{
						displayName: 'Gross price',
						name: 'gross',
						type: 'number',
						default: '',
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
						default: '',
						description: 'List price (original price) when the price is reduced.',
					},
					{
						displayName: 'List gross price',
						name: 'listPriceGross',
						type: 'number',
						default: '',
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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'product',
				],
			},
		},
		default: {},
		options: [
		],
	},
] as INodeProperties[];

