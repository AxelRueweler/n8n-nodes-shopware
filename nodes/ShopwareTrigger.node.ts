import {
	IHookFunctions,
	IWebhookFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';

import {
	shopwareApiRequest,
} from './GenericFunctions';

import {
	ShopwareTriggerTopics
} from './ShopwareTriggerProperties';

import * as uuid from 'uuid/v4';

export class ShopwareTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Shopware Trigger',
		name: 'shopwareTrigger',
		group: ['trigger'],
		icon: 'file:shopware.png',
		version: 1,
		description: 'Handle Shopware events via webhooks',
		defaults: {
			name: 'Shopify Trigger',
			color: '#559922',
		},
		inputs: [],
		outputs: ['main'],
		credentials: [
			{
				name: 'shopwareApi',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			...ShopwareTriggerTopics,
		],


	};

	// @ts-ignore (because of request)
	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				if (webhookData.webhookId === undefined) {
					return false;
				}
				const endpoint = `/webhook/${webhookData.webhookId}`;
				try {
					await shopwareApiRequest.call(this, 'GET', endpoint, {});
				} catch (e) {
					if (e.message.includes(404)) {
						delete webhookData.webhookName;
						delete webhookData.webhookId;
						delete webhookData.topic;
						return false;
					}
				}

				return true;
			},
			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const topic = this.getNodeParameter('topic') as string;
				const endpoint = `/webhook`;
				const name = 'n8n-' + topic.toLocaleLowerCase().replace(' ', '') + '-' + uuid();
				const body = {
					'name': name,
					'eventName': topic,
					'url': webhookUrl
				};

				let responseData;
				try {
					responseData = await shopwareApiRequest.call(this, 'POST', endpoint, body);
				} catch (error) {
					throw error;
				}

				try {
					console.log('Get the webhooks');
					const webhooks = await shopwareApiRequest.call(this, 'GET', '/webhook', {});
					const webhookData = this.getWorkflowStaticData('node');
					webhooks.forEach(function (webhook: IDataObject) {
						if (webhook.name === name) {
							webhookData.webhookName = name;
							webhookData.webhookId = webhook.id as string;
							webhookData.topic = topic as string;
						}
					});
				} catch (error) {
					throw error;
				}

				return true;
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				const endpoint = `/webhook/${webhookData.webhookId}`;
				try {
					await shopwareApiRequest.call(this, 'DELETE', endpoint, {});
				} catch (e) {
					return false;
				}

				delete webhookData.webhookName;
				delete webhookData.webhookId;
				delete webhookData.sharedSecret;
				delete webhookData.topic;
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const headerData = this.getHeaderData() as IDataObject;
		const req = this.getRequestObject();

		const returnArray: IDataObject[] = [];

		req.body.data.payload.forEach(function (payloadObject: any) {
			returnArray.push({
				entity: payloadObject.entity,
				operation: payloadObject.operation,
				primaryKey: payloadObject.primaryKey,
				updatedFields: payloadObject.updatedFields,
				event: payloadObject.event,
				url: req.body.source.url
			})
		});

		return {
			workflowData: [
				this.helpers.returnJsonArray(returnArray),
			],
		};
	}
}
