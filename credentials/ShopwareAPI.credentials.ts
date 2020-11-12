import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';


export class ShopwareAPI implements ICredentialType {
	name = 'shopwareApi';
	displayName = 'Shopware API';
	properties = [
		// The credentials to get from user and save encrypted.
		// Properties can be defined exactly in the same way
		// as node properties.
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string' as NodePropertyTypes,
			default: '',
			description: '',
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string' as NodePropertyTypes,
			default: '',
			description: '',
		},
	];
}
