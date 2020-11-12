import {
	INodeProperties,
} from 'n8n-workflow';

export const entityFields = [
	{
		displayName: 'Includes',
		name: 'includes',
		placeholder: 'Add Includes',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				operation: [
					'get', 'getAll'
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Entities',
				name: 'entities',
				description: 'Requested entities',
				type: 'fixedCollection',
				values: [
					{
						displayName: 'Entity',
						name: 'entity',
						default: {},
						type: 'options',
						typeOptions: {
							loadOptionsMethod: 'getEntities',
						},
					},
					{
						displayName: 'Fields',
						name: 'fields',
						type: 'string',
						default: ''
					}
				],
			},
		],
	},
	{
		displayName: 'Associations',
		name: 'associations',
		placeholder: '',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				operation: [
					'get', 'getAll'
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Entities',
				name: 'entities',
				type: 'fixedCollection',
				values: [
					{
						displayName: 'Entity',
						name: 'entity',
						type: 'options',
						typeOptions: {
							loadOptionsMethod: 'getEntities',
						},
						default: '',
						description: '',
					},
					{
						displayName: 'Total Count Mode',
						name: 'totalCountMode',
						placeholder: '',
						description: 'Mode for counting the found entities',
						type: 'options',
						options: [
							{
								name: 'No total determined',
								value: '0',
								description: 'No total determined - high performance',
							},
							{
								name: 'Exact total determined',
								value: '1',
								description: 'The exact total is determined - low performance',
							},
							{
								name: 'Next page exists',
								value: '2',
								description: 'Determines if a next page with products exists - high performance',
							},
						],
						default: '0',
					},
				],
			},
		]
	}] as INodeProperties[];

export const filterFields = [
	{
		displayName: 'Filter',
		name: 'filter',
		placeholder: 'Add Filter',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				operation: [
					'get', 'getAll'
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Contains',
				name: 'contains',
				type: 'fixedCollection',
				default: '',
				description: '',
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
				type: 'fixedCollection',
				default: '',
				description: '',
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
				type: 'fixedCollection',
				default: '',
				description: '',
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
				displayName: 'Range',
				name: 'range',
				type: 'fixedCollection',
				default: '',
				description: '',
				values: [
					{
						displayName: 'Field',
						name: 'field',
						type: 'string',
						default: '',
						description: '',
					},
					{
						displayName: 'Operator 1',
						name: 'operator1',
						type: 'options',
						default: '',
						description: '',
						options: [
							{
								name: 'Less then equals',
								value: 'lte',
								description: '',
							},
							{
								name: 'Less then',
								value: 'lt',
								description: '',
							},
							{
								name: 'Greater then',
								value: 'gt',
								description: '',
							},
							{
								name: 'Greater then equals',
								value: 'gte',
								description: '',
							},
						],
					},
					{
						displayName: 'Value 1',
						name: 'value1',
						type: 'string',
						default: '',
						description: '',
					},
					{
						displayName: 'Operator 2',
						name: 'operator2',
						type: 'options',
						default: '',
						description: '',
						options: [
							{
								name: 'Less then equals',
								value: 'lte',
								description: '',
							},
							{
								name: 'Less then',
								value: 'lt',
								description: '',
							},
							{
								name: 'Greater then',
								value: 'gt',
								description: '',
							},
							{
								name: 'Greater then equals',
								value: 'gte',
								description: '',
							},
						],
					},
					{
						displayName: 'Value 2',
						name: 'value2',
						type: 'string',
						default: '',
						description: '',
					},
				],
			}
		],
	}
] as INodeProperties[]; 