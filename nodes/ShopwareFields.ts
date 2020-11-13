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
						options: [
							{
							   'value':'app',
							   'name':'acl_role - app'
							},
							{
							   'value':'integrations',
							   'name':'acl_role - integrations'
							},
							{
							   'value':'users',
							   'name':'acl_role - users'
							},
							{
							   'value':'aclRole',
							   'name':'acl_user_role - aclRole'
							},
							{
							   'value':'user',
							   'name':'acl_user_role - user'
							},
							{
							   'value':'aclRole',
							   'name':'app - aclRole'
							},
							{
							   'value':'actionButtons',
							   'name':'app - actionButtons'
							},
							{
							   'value':'customFieldSets',
							   'name':'app - customFieldSets'
							},
							{
							   'value':'integration',
							   'name':'app - integration'
							},
							{
							   'value':'storefrontConfig',
							   'name':'app - storefrontConfig'
							},
							{
							   'value':'templates',
							   'name':'app - templates'
							},
							{
							   'value':'translations',
							   'name':'app - translations'
							},
							{
							   'value':'webhooks',
							   'name':'app - webhooks'
							},
							{
							   'value':'app',
							   'name':'app_action_button - app'
							},
							{
							   'value':'translations',
							   'name':'app_action_button - translations'
							},
							{
							   'value':'appActionButton',
							   'name':'app_action_button_translation - appActionButton'
							},
							{
							   'value':'language',
							   'name':'app_action_button_translation - language'
							},
							{
							   'value':'app',
							   'name':'app_template - app'
							},
							{
							   'value':'app',
							   'name':'app_translation - app'
							},
							{
							   'value':'language',
							   'name':'app_translation - language'
							},
							{
							   'value':'children',
							   'name':'category - children'
							},
							{
							   'value':'cmsPage',
							   'name':'category - cmsPage'
							},
							{
							   'value':'footerSalesChannels',
							   'name':'category - footerSalesChannels'
							},
							{
							   'value':'mainCategories',
							   'name':'category - mainCategories'
							},
							{
							   'value':'media',
							   'name':'category - media'
							},
							{
							   'value':'navigationSalesChannels',
							   'name':'category - navigationSalesChannels'
							},
							{
							   'value':'nestedProducts',
							   'name':'category - nestedProducts'
							},
							{
							   'value':'parent',
							   'name':'category - parent'
							},
							{
							   'value':'productStream',
							   'name':'category - productStream'
							},
							{
							   'value':'products',
							   'name':'category - products'
							},
							{
							   'value':'seoUrls',
							   'name':'category - seoUrls'
							},
							{
							   'value':'serviceSalesChannels',
							   'name':'category - serviceSalesChannels'
							},
							{
							   'value':'tags',
							   'name':'category - tags'
							},
							{
							   'value':'translations',
							   'name':'category - translations'
							},
							{
							   'value':'category',
							   'name':'category_tag - category'
							},
							{
							   'value':'tag',
							   'name':'category_tag - tag'
							},
							{
							   'value':'category',
							   'name':'category_translation - category'
							},
							{
							   'value':'language',
							   'name':'category_translation - language'
							},
							{
							   'value':'backgroundMedia',
							   'name':'cms_block - backgroundMedia'
							},
							{
							   'value':'section',
							   'name':'cms_block - section'
							},
							{
							   'value':'slots',
							   'name':'cms_block - slots'
							},
							{
							   'value':'swagCmsExtensionsQuickview',
							   'name':'cms_block - swagCmsExtensionsQuickview'
							},
							{
							   'value':'categories',
							   'name':'cms_page - categories'
							},
							{
							   'value':'previewMedia',
							   'name':'cms_page - previewMedia'
							},
							{
							   'value':'sections',
							   'name':'cms_page - sections'
							},
							{
							   'value':'swagCmsExtensionsScrollNavigationPageSettings',
							   'name':'cms_page - swagCmsExtensionsScrollNavigationPageSettings'
							},
							{
							   'value':'translations',
							   'name':'cms_page - translations'
							},
							{
							   'value':'cmsPage',
							   'name':'cms_page_translation - cmsPage'
							},
							{
							   'value':'language',
							   'name':'cms_page_translation - language'
							},
							{
							   'value':'backgroundMedia',
							   'name':'cms_section - backgroundMedia'
							},
							{
							   'value':'blocks',
							   'name':'cms_section - blocks'
							},
							{
							   'value':'page',
							   'name':'cms_section - page'
							},
							{
							   'value':'swagCmsExtensionsScrollNavigation',
							   'name':'cms_section - swagCmsExtensionsScrollNavigation'
							},
							{
							   'value':'block',
							   'name':'cms_slot - block'
							},
							{
							   'value':'translations',
							   'name':'cms_slot - translations'
							},
							{
							   'value':'cmsSlot',
							   'name':'cms_slot_translation - cmsSlot'
							},
							{
							   'value':'language',
							   'name':'cms_slot_translation - language'
							},
							{
							   'value':'customerAddresses',
							   'name':'country - customerAddresses'
							},
							{
							   'value':'orderAddresses',
							   'name':'country - orderAddresses'
							},
							{
							   'value':'salesChannelDefaultAssignments',
							   'name':'country - salesChannelDefaultAssignments'
							},
							{
							   'value':'salesChannels',
							   'name':'country - salesChannels'
							},
							{
							   'value':'states',
							   'name':'country - states'
							},
							{
							   'value':'taxRules',
							   'name':'country - taxRules'
							},
							{
							   'value':'translations',
							   'name':'country - translations'
							},
							{
							   'value':'country',
							   'name':'country_state - country'
							},
							{
							   'value':'customerAddresses',
							   'name':'country_state - customerAddresses'
							},
							{
							   'value':'orderAddresses',
							   'name':'country_state - orderAddresses'
							},
							{
							   'value':'translations',
							   'name':'country_state - translations'
							},
							{
							   'value':'countryState',
							   'name':'country_state_translation - countryState'
							},
							{
							   'value':'language',
							   'name':'country_state_translation - language'
							},
							{
							   'value':'country',
							   'name':'country_translation - country'
							},
							{
							   'value':'language',
							   'name':'country_translation - language'
							},
							{
							   'value':'customizedProductsTemplateOptionPrices',
							   'name':'currency - customizedProductsTemplateOptionPrices'
							},
							{
							   'value':'customizedProductsTemplateOptionValuePrices',
							   'name':'currency - customizedProductsTemplateOptionValuePrices'
							},
							{
							   'value':'orders',
							   'name':'currency - orders'
							},
							{
							   'value':'productExports',
							   'name':'currency - productExports'
							},
							{
							   'value':'promotionDiscountPrices',
							   'name':'currency - promotionDiscountPrices'
							},
							{
							   'value':'salesChannelDefaultAssignments',
							   'name':'currency - salesChannelDefaultAssignments'
							},
							{
							   'value':'salesChannelDomains',
							   'name':'currency - salesChannelDomains'
							},
							{
							   'value':'salesChannels',
							   'name':'currency - salesChannels'
							},
							{
							   'value':'translations',
							   'name':'currency - translations'
							},
							{
							   'value':'currency',
							   'name':'currency_translation - currency'
							},
							{
							   'value':'language',
							   'name':'currency_translation - language'
							},
							{
							   'value':'customFieldSet',
							   'name':'custom_field - customFieldSet'
							},
							{
							   'value':'app',
							   'name':'custom_field_set - app'
							},
							{
							   'value':'customFields',
							   'name':'custom_field_set - customFields'
							},
							{
							   'value':'products',
							   'name':'custom_field_set - products'
							},
							{
							   'value':'relations',
							   'name':'custom_field_set - relations'
							},
							{
							   'value':'customFieldSet',
							   'name':'custom_field_set_relation - customFieldSet'
							},
							{
							   'value':'addresses',
							   'name':'customer - addresses'
							},
							{
							   'value':'defaultBillingAddress',
							   'name':'customer - defaultBillingAddress'
							},
							{
							   'value':'defaultPaymentMethod',
							   'name':'customer - defaultPaymentMethod'
							},
							{
							   'value':'defaultShippingAddress',
							   'name':'customer - defaultShippingAddress'
							},
							{
							   'value':'group',
							   'name':'customer - group'
							},
							{
							   'value':'language',
							   'name':'customer - language'
							},
							{
							   'value':'lastPaymentMethod',
							   'name':'customer - lastPaymentMethod'
							},
							{
							   'value':'orderCustomers',
							   'name':'customer - orderCustomers'
							},
							{
							   'value':'productReviews',
							   'name':'customer - productReviews'
							},
							{
							   'value':'promotions',
							   'name':'customer - promotions'
							},
							{
							   'value':'recoveryCustomer',
							   'name':'customer - recoveryCustomer'
							},
							{
							   'value':'requestedGroup',
							   'name':'customer - requestedGroup'
							},
							{
							   'value':'salesChannel',
							   'name':'customer - salesChannel'
							},
							{
							   'value':'salutation',
							   'name':'customer - salutation'
							},
							{
							   'value':'tags',
							   'name':'customer - tags'
							},
							{
							   'value':'country',
							   'name':'customer_address - country'
							},
							{
							   'value':'countryState',
							   'name':'customer_address - countryState'
							},
							{
							   'value':'customer',
							   'name':'customer_address - customer'
							},
							{
							   'value':'salutation',
							   'name':'customer_address - salutation'
							},
							{
							   'value':'customers',
							   'name':'customer_group - customers'
							},
							{
							   'value':'registrationSalesChannels',
							   'name':'customer_group - registrationSalesChannels'
							},
							{
							   'value':'salesChannels',
							   'name':'customer_group - salesChannels'
							},
							{
							   'value':'translations',
							   'name':'customer_group - translations'
							},
							{
							   'value':'customerGroup',
							   'name':'customer_group_registration_sales_channels - customerGroup'
							},
							{
							   'value':'salesChannel',
							   'name':'customer_group_registration_sales_channels - salesChannel'
							},
							{
							   'value':'customerGroup',
							   'name':'customer_group_translation - customerGroup'
							},
							{
							   'value':'language',
							   'name':'customer_group_translation - language'
							},
							{
							   'value':'customer',
							   'name':'customer_recovery - customer'
							},
							{
							   'value':'customer',
							   'name':'customer_tag - customer'
							},
							{
							   'value':'tag',
							   'name':'customer_tag - tag'
							},
							{
							   'value':'scheduledTask',
							   'name':'dead_message - scheduledTask'
							},
							{
							   'value':'products',
							   'name':'delivery_time - products'
							},
							{
							   'value':'shippingMethods',
							   'name':'delivery_time - shippingMethods'
							},
							{
							   'value':'translations',
							   'name':'delivery_time - translations'
							},
							{
							   'value':'deliveryTime',
							   'name':'delivery_time_translation - deliveryTime'
							},
							{
							   'value':'language',
							   'name':'delivery_time_translation - language'
							},
							{
							   'value':'dependentDocuments',
							   'name':'document - dependentDocuments'
							},
							{
							   'value':'documentMediaFile',
							   'name':'document - documentMediaFile'
							},
							{
							   'value':'documentType',
							   'name':'document - documentType'
							},
							{
							   'value':'order',
							   'name':'document - order'
							},
							{
							   'value':'referencedDocument',
							   'name':'document - referencedDocument'
							},
							{
							   'value':'documentType',
							   'name':'document_base_config - documentType'
							},
							{
							   'value':'logo',
							   'name':'document_base_config - logo'
							},
							{
							   'value':'salesChannels',
							   'name':'document_base_config - salesChannels'
							},
							{
							   'value':'documentBaseConfig',
							   'name':'document_base_config_sales_channel - documentBaseConfig'
							},
							{
							   'value':'documentType',
							   'name':'document_base_config_sales_channel - documentType'
							},
							{
							   'value':'salesChannel',
							   'name':'document_base_config_sales_channel - salesChannel'
							},
							{
							   'value':'documentBaseConfigSalesChannels',
							   'name':'document_type - documentBaseConfigSalesChannels'
							},
							{
							   'value':'documentBaseConfigs',
							   'name':'document_type - documentBaseConfigs'
							},
							{
							   'value':'documents',
							   'name':'document_type - documents'
							},
							{
							   'value':'translations',
							   'name':'document_type - translations'
							},
							{
							   'value':'documentType',
							   'name':'document_type_translation - documentType'
							},
							{
							   'value':'language',
							   'name':'document_type_translation - language'
							},
							{
							   'value':'rules',
							   'name':'event_action - rules'
							},
							{
							   'value':'salesChannels',
							   'name':'event_action - salesChannels'
							},
							{
							   'value':'eventAction',
							   'name':'event_action_rule - eventAction'
							},
							{
							   'value':'rule',
							   'name':'event_action_rule - rule'
							},
							{
							   'value':'eventAction',
							   'name':'event_action_sales_channel - eventAction'
							},
							{
							   'value':'salesChannel',
							   'name':'event_action_sales_channel - salesChannel'
							},
							{
							   'value':'log',
							   'name':'import_export_file - log'
							},
							{
							   'value':'failedImportLog',
							   'name':'import_export_log - failedImportLog'
							},
							{
							   'value':'file',
							   'name':'import_export_log - file'
							},
							{
							   'value':'invalidRecordsLog',
							   'name':'import_export_log - invalidRecordsLog'
							},
							{
							   'value':'profile',
							   'name':'import_export_log - profile'
							},
							{
							   'value':'user',
							   'name':'import_export_log - user'
							},
							{
							   'value':'importExportLogs',
							   'name':'import_export_profile - importExportLogs'
							},
							{
							   'value':'translations',
							   'name':'import_export_profile - translations'
							},
							{
							   'value':'importExportProfile',
							   'name':'import_export_profile_translation - importExportProfile'
							},
							{
							   'value':'language',
							   'name':'import_export_profile_translation - language'
							},
							{
							   'value':'aclRoles',
							   'name':'integration - aclRoles'
							},
							{
							   'value':'app',
							   'name':'integration - app'
							},
							{
							   'value':'integration',
							   'name':'integration_role - integration'
							},
							{
							   'value':'role',
							   'name':'integration_role - role'
							},
							{
							   'value':'actionButtonTranslations',
							   'name':'language - actionButtonTranslations'
							},
							{
							   'value':'appTranslations',
							   'name':'language - appTranslations'
							},
							{
							   'value':'categoryTranslations',
							   'name':'language - categoryTranslations'
							},
							{
							   'value':'children',
							   'name':'language - children'
							},
							{
							   'value':'cmsExtensionsScrollNavigationTranslations',
							   'name':'language - cmsExtensionsScrollNavigationTranslations'
							},
							{
							   'value':'cmsPageTranslations',
							   'name':'language - cmsPageTranslations'
							},
							{
							   'value':'cmsSlotTranslations',
							   'name':'language - cmsSlotTranslations'
							},
							{
							   'value':'countryStateTranslations',
							   'name':'language - countryStateTranslations'
							},
							{
							   'value':'countryTranslations',
							   'name':'language - countryTranslations'
							},
							{
							   'value':'currencyTranslations',
							   'name':'language - currencyTranslations'
							},
							{
							   'value':'customerGroupTranslations',
							   'name':'language - customerGroupTranslations'
							},
							{
							   'value':'customers',
							   'name':'language - customers'
							},
							{
							   'value':'customizedProductsTemplateExclusionOperatorTranslations',
							   'name':'language - customizedProductsTemplateExclusionOperatorTranslations'
							},
							{
							   'value':'customizedProductsTemplateOptionTranslations',
							   'name':'language - customizedProductsTemplateOptionTranslations'
							},
							{
							   'value':'customizedProductsTemplateOptionValueTranslations',
							   'name':'language - customizedProductsTemplateOptionValueTranslations'
							},
							{
							   'value':'customizedProductsTemplateTranslations',
							   'name':'language - customizedProductsTemplateTranslations'
							},
							{
							   'value':'deliveryTimeTranslations',
							   'name':'language - deliveryTimeTranslations'
							},
							{
							   'value':'documentTypeTranslations',
							   'name':'language - documentTypeTranslations'
							},
							{
							   'value':'importExportProfileTranslations',
							   'name':'language - importExportProfileTranslations'
							},
							{
							   'value':'locale',
							   'name':'language - locale'
							},
							{
							   'value':'localeTranslations',
							   'name':'language - localeTranslations'
							},
							{
							   'value':'mailHeaderFooterTranslations',
							   'name':'language - mailHeaderFooterTranslations'
							},
							{
							   'value':'mailTemplateTranslations',
							   'name':'language - mailTemplateTranslations'
							},
							{
							   'value':'mailTemplateTypeTranslations',
							   'name':'language - mailTemplateTypeTranslations'
							},
							{
							   'value':'mediaTranslations',
							   'name':'language - mediaTranslations'
							},
							{
							   'value':'newsletterRecipients',
							   'name':'language - newsletterRecipients'
							},
							{
							   'value':'numberRangeTranslations',
							   'name':'language - numberRangeTranslations'
							},
							{
							   'value':'numberRangeTypeTranslations',
							   'name':'language - numberRangeTypeTranslations'
							},
							{
							   'value':'orders',
							   'name':'language - orders'
							},
							{
							   'value':'parent',
							   'name':'language - parent'
							},
							{
							   'value':'paymentMethodTranslations',
							   'name':'language - paymentMethodTranslations'
							},
							{
							   'value':'pluginTranslations',
							   'name':'language - pluginTranslations'
							},
							{
							   'value':'productCrossSellingTranslations',
							   'name':'language - productCrossSellingTranslations'
							},
							{
							   'value':'productFeatureSetTranslations',
							   'name':'language - productFeatureSetTranslations'
							},
							{
							   'value':'productKeywordDictionaries',
							   'name':'language - productKeywordDictionaries'
							},
							{
							   'value':'productManufacturerTranslations',
							   'name':'language - productManufacturerTranslations'
							},
							{
							   'value':'productReviews',
							   'name':'language - productReviews'
							},
							{
							   'value':'productSearchKeywords',
							   'name':'language - productSearchKeywords'
							},
							{
							   'value':'productSortingTranslations',
							   'name':'language - productSortingTranslations'
							},
							{
							   'value':'productStreamTranslations',
							   'name':'language - productStreamTranslations'
							},
							{
							   'value':'productTranslations',
							   'name':'language - productTranslations'
							},
							{
							   'value':'promotionTranslations',
							   'name':'language - promotionTranslations'
							},
							{
							   'value':'propertyGroupOptionTranslations',
							   'name':'language - propertyGroupOptionTranslations'
							},
							{
							   'value':'propertyGroupTranslations',
							   'name':'language - propertyGroupTranslations'
							},
							{
							   'value':'salesChannelDefaultAssignments',
							   'name':'language - salesChannelDefaultAssignments'
							},
							{
							   'value':'salesChannelDomains',
							   'name':'language - salesChannelDomains'
							},
							{
							   'value':'salesChannelTranslations',
							   'name':'language - salesChannelTranslations'
							},
							{
							   'value':'salesChannelTypeTranslations',
							   'name':'language - salesChannelTypeTranslations'
							},
							{
							   'value':'salesChannels',
							   'name':'language - salesChannels'
							},
							{
							   'value':'salutationTranslations',
							   'name':'language - salutationTranslations'
							},
							{
							   'value':'seoUrlTranslations',
							   'name':'language - seoUrlTranslations'
							},
							{
							   'value':'shippingMethodTranslations',
							   'name':'language - shippingMethodTranslations'
							},
							{
							   'value':'stateMachineStateTranslations',
							   'name':'language - stateMachineStateTranslations'
							},
							{
							   'value':'stateMachineTranslations',
							   'name':'language - stateMachineTranslations'
							},
							{
							   'value':'taxRuleTypeTranslations',
							   'name':'language - taxRuleTypeTranslations'
							},
							{
							   'value':'themeTranslations',
							   'name':'language - themeTranslations'
							},
							{
							   'value':'translationCode',
							   'name':'language - translationCode'
							},
							{
							   'value':'unitTranslations',
							   'name':'language - unitTranslations'
							},
							{
							   'value':'languages',
							   'name':'locale - languages'
							},
							{
							   'value':'translations',
							   'name':'locale - translations'
							},
							{
							   'value':'users',
							   'name':'locale - users'
							},
							{
							   'value':'language',
							   'name':'locale_translation - language'
							},
							{
							   'value':'locale',
							   'name':'locale_translation - locale'
							},
							{
							   'value':'salesChannels',
							   'name':'mail_header_footer - salesChannels'
							},
							{
							   'value':'translations',
							   'name':'mail_header_footer - translations'
							},
							{
							   'value':'language',
							   'name':'mail_header_footer_translation - language'
							},
							{
							   'value':'mailHeaderFooter',
							   'name':'mail_header_footer_translation - mailHeaderFooter'
							},
							{
							   'value':'mailTemplateType',
							   'name':'mail_template - mailTemplateType'
							},
							{
							   'value':'media',
							   'name':'mail_template - media'
							},
							{
							   'value':'salesChannels',
							   'name':'mail_template - salesChannels'
							},
							{
							   'value':'translations',
							   'name':'mail_template - translations'
							},
							{
							   'value':'mailTemplate',
							   'name':'mail_template_media - mailTemplate'
							},
							{
							   'value':'media',
							   'name':'mail_template_media - media'
							},
							{
							   'value':'mailTemplate',
							   'name':'mail_template_sales_channel - mailTemplate'
							},
							{
							   'value':'mailTemplateType',
							   'name':'mail_template_sales_channel - mailTemplateType'
							},
							{
							   'value':'salesChannel',
							   'name':'mail_template_sales_channel - salesChannel'
							},
							{
							   'value':'language',
							   'name':'mail_template_translation - language'
							},
							{
							   'value':'mailTemplate',
							   'name':'mail_template_translation - mailTemplate'
							},
							{
							   'value':'mailTemplates',
							   'name':'mail_template_type - mailTemplates'
							},
							{
							   'value':'salesChannels',
							   'name':'mail_template_type - salesChannels'
							},
							{
							   'value':'translations',
							   'name':'mail_template_type - translations'
							},
							{
							   'value':'language',
							   'name':'mail_template_type_translation - language'
							},
							{
							   'value':'mailTemplateType',
							   'name':'mail_template_type_translation - mailTemplateType'
							},
							{
							   'value':'category',
							   'name':'main_category - category'
							},
							{
							   'value':'product',
							   'name':'main_category - product'
							},
							{
							   'value':'salesChannel',
							   'name':'main_category - salesChannel'
							},
							{
							   'value':'avatarUser',
							   'name':'media - avatarUser'
							},
							{
							   'value':'categories',
							   'name':'media - categories'
							},
							{
							   'value':'cmsBlocks',
							   'name':'media - cmsBlocks'
							},
							{
							   'value':'cmsPages',
							   'name':'media - cmsPages'
							},
							{
							   'value':'cmsSections',
							   'name':'media - cmsSections'
							},
							{
							   'value':'documentBaseConfigs',
							   'name':'media - documentBaseConfigs'
							},
							{
							   'value':'documents',
							   'name':'media - documents'
							},
							{
							   'value':'mailTemplateMedia',
							   'name':'media - mailTemplateMedia'
							},
							{
							   'value':'mediaFolder',
							   'name':'media - mediaFolder'
							},
							{
							   'value':'orderLineItems',
							   'name':'media - orderLineItems'
							},
							{
							   'value':'paymentMethods',
							   'name':'media - paymentMethods'
							},
							{
							   'value':'productConfiguratorSettings',
							   'name':'media - productConfiguratorSettings'
							},
							{
							   'value':'productManufacturers',
							   'name':'media - productManufacturers'
							},
							{
							   'value':'productMedia',
							   'name':'media - productMedia'
							},
							{
							   'value':'propertyGroupOptions',
							   'name':'media - propertyGroupOptions'
							},
							{
							   'value':'shippingMethods',
							   'name':'media - shippingMethods'
							},
							{
							   'value':'swagCustomizedProductsTemplate',
							   'name':'media - swagCustomizedProductsTemplate'
							},
							{
							   'value':'tags',
							   'name':'media - tags'
							},
							{
							   'value':'themeMedia',
							   'name':'media - themeMedia'
							},
							{
							   'value':'themes',
							   'name':'media - themes'
							},
							{
							   'value':'thumbnails',
							   'name':'media - thumbnails'
							},
							{
							   'value':'translations',
							   'name':'media - translations'
							},
							{
							   'value':'user',
							   'name':'media - user'
							},
							{
							   'value':'folder',
							   'name':'media_default_folder - folder'
							},
							{
							   'value':'children',
							   'name':'media_folder - children'
							},
							{
							   'value':'configuration',
							   'name':'media_folder - configuration'
							},
							{
							   'value':'defaultFolder',
							   'name':'media_folder - defaultFolder'
							},
							{
							   'value':'media',
							   'name':'media_folder - media'
							},
							{
							   'value':'parent',
							   'name':'media_folder - parent'
							},
							{
							   'value':'mediaFolders',
							   'name':'media_folder_configuration - mediaFolders'
							},
							{
							   'value':'mediaThumbnailSizes',
							   'name':'media_folder_configuration - mediaThumbnailSizes'
							},
							{
							   'value':'mediaFolderConfiguration',
							   'name':'media_folder_configuration_media_thumbnail_size - mediaFolderConfiguration'
							},
							{
							   'value':'mediaThumbnailSize',
							   'name':'media_folder_configuration_media_thumbnail_size - mediaThumbnailSize'
							},
							{
							   'value':'media',
							   'name':'media_tag - media'
							},
							{
							   'value':'tag',
							   'name':'media_tag - tag'
							},
							{
							   'value':'media',
							   'name':'media_thumbnail - media'
							},
							{
							   'value':'mediaFolderConfigurations',
							   'name':'media_thumbnail_size - mediaFolderConfigurations'
							},
							{
							   'value':'language',
							   'name':'media_translation - language'
							},
							{
							   'value':'media',
							   'name':'media_translation - media'
							},
							{
							   'value':'language',
							   'name':'newsletter_recipient - language'
							},
							{
							   'value':'salesChannel',
							   'name':'newsletter_recipient - salesChannel'
							},
							{
							   'value':'salutation',
							   'name':'newsletter_recipient - salutation'
							},
							{
							   'value':'tags',
							   'name':'newsletter_recipient - tags'
							},
							{
							   'value':'newsletterRecipient',
							   'name':'newsletter_recipient_tag - newsletterRecipient'
							},
							{
							   'value':'tag',
							   'name':'newsletter_recipient_tag - tag'
							},
							{
							   'value':'numberRangeSalesChannels',
							   'name':'number_range - numberRangeSalesChannels'
							},
							{
							   'value':'state',
							   'name':'number_range - state'
							},
							{
							   'value':'translations',
							   'name':'number_range - translations'
							},
							{
							   'value':'type',
							   'name':'number_range - type'
							},
							{
							   'value':'numberRange',
							   'name':'number_range_sales_channel - numberRange'
							},
							{
							   'value':'numberRangeType',
							   'name':'number_range_sales_channel - numberRangeType'
							},
							{
							   'value':'salesChannel',
							   'name':'number_range_sales_channel - salesChannel'
							},
							{
							   'value':'numberRange',
							   'name':'number_range_state - numberRange'
							},
							{
							   'value':'language',
							   'name':'number_range_translation - language'
							},
							{
							   'value':'numberRange',
							   'name':'number_range_translation - numberRange'
							},
							{
							   'value':'numberRangeSalesChannels',
							   'name':'number_range_type - numberRangeSalesChannels'
							},
							{
							   'value':'numberRanges',
							   'name':'number_range_type - numberRanges'
							},
							{
							   'value':'translations',
							   'name':'number_range_type - translations'
							},
							{
							   'value':'language',
							   'name':'number_range_type_translation - language'
							},
							{
							   'value':'numberRangeType',
							   'name':'number_range_type_translation - numberRangeType'
							},
							{
							   'value':'addresses',
							   'name':'order - addresses'
							},
							{
							   'value':'currency',
							   'name':'order - currency'
							},
							{
							   'value':'deliveries',
							   'name':'order - deliveries'
							},
							{
							   'value':'documents',
							   'name':'order - documents'
							},
							{
							   'value':'language',
							   'name':'order - language'
							},
							{
							   'value':'lineItems',
							   'name':'order - lineItems'
							},
							{
							   'value':'orderCustomer',
							   'name':'order - orderCustomer'
							},
							{
							   'value':'salesChannel',
							   'name':'order - salesChannel'
							},
							{
							   'value':'stateMachineState',
							   'name':'order - stateMachineState'
							},
							{
							   'value':'tags',
							   'name':'order - tags'
							},
							{
							   'value':'transactions',
							   'name':'order - transactions'
							},
							{
							   'value':'country',
							   'name':'order_address - country'
							},
							{
							   'value':'countryState',
							   'name':'order_address - countryState'
							},
							{
							   'value':'order',
							   'name':'order_address - order'
							},
							{
							   'value':'orderDeliveries',
							   'name':'order_address - orderDeliveries'
							},
							{
							   'value':'salutation',
							   'name':'order_address - salutation'
							},
							{
							   'value':'customer',
							   'name':'order_customer - customer'
							},
							{
							   'value':'order',
							   'name':'order_customer - order'
							},
							{
							   'value':'salutation',
							   'name':'order_customer - salutation'
							},
							{
							   'value':'order',
							   'name':'order_delivery - order'
							},
							{
							   'value':'positions',
							   'name':'order_delivery - positions'
							},
							{
							   'value':'shippingMethod',
							   'name':'order_delivery - shippingMethod'
							},
							{
							   'value':'shippingOrderAddress',
							   'name':'order_delivery - shippingOrderAddress'
							},
							{
							   'value':'stateMachineState',
							   'name':'order_delivery - stateMachineState'
							},
							{
							   'value':'orderDelivery',
							   'name':'order_delivery_position - orderDelivery'
							},
							{
							   'value':'orderLineItem',
							   'name':'order_delivery_position - orderLineItem'
							},
							{
							   'value':'cover',
							   'name':'order_line_item - cover'
							},
							{
							   'value':'order',
							   'name':'order_line_item - order'
							},
							{
							   'value':'orderDeliveryPositions',
							   'name':'order_line_item - orderDeliveryPositions'
							},
							{
							   'value':'product',
							   'name':'order_line_item - product'
							},
							{
							   'value':'order',
							   'name':'order_tag - order'
							},
							{
							   'value':'tag',
							   'name':'order_tag - tag'
							},
							{
							   'value':'order',
							   'name':'order_transaction - order'
							},
							{
							   'value':'paymentMethod',
							   'name':'order_transaction - paymentMethod'
							},
							{
							   'value':'stateMachineState',
							   'name':'order_transaction - stateMachineState'
							},
							{
							   'value':'availabilityRule',
							   'name':'payment_method - availabilityRule'
							},
							{
							   'value':'customers',
							   'name':'payment_method - customers'
							},
							{
							   'value':'media',
							   'name':'payment_method - media'
							},
							{
							   'value':'orderTransactions',
							   'name':'payment_method - orderTransactions'
							},
							{
							   'value':'plugin',
							   'name':'payment_method - plugin'
							},
							{
							   'value':'salesChannelDefaultAssignments',
							   'name':'payment_method - salesChannelDefaultAssignments'
							},
							{
							   'value':'salesChannels',
							   'name':'payment_method - salesChannels'
							},
							{
							   'value':'translations',
							   'name':'payment_method - translations'
							},
							{
							   'value':'language',
							   'name':'payment_method_translation - language'
							},
							{
							   'value':'paymentMethod',
							   'name':'payment_method_translation - paymentMethod'
							},
							{
							   'value':'paymentMethods',
							   'name':'plugin - paymentMethods'
							},
							{
							   'value':'translations',
							   'name':'plugin - translations'
							},
							{
							   'value':'language',
							   'name':'plugin_translation - language'
							},
							{
							   'value':'plugin',
							   'name':'plugin_translation - plugin'
							},
							{
							   'value':'categories',
							   'name':'product - categories'
							},
							{
							   'value':'categoriesRo',
							   'name':'product - categoriesRo'
							},
							{
							   'value':'children',
							   'name':'product - children'
							},
							{
							   'value':'configuratorSettings',
							   'name':'product - configuratorSettings'
							},
							{
							   'value':'cover',
							   'name':'product - cover'
							},
							{
							   'value':'crossSellingAssignedProducts',
							   'name':'product - crossSellingAssignedProducts'
							},
							{
							   'value':'crossSellings',
							   'name':'product - crossSellings'
							},
							{
							   'value':'customFieldSets',
							   'name':'product - customFieldSets'
							},
							{
							   'value':'deliveryTime',
							   'name':'product - deliveryTime'
							},
							{
							   'value':'featureSet',
							   'name':'product - featureSet'
							},
							{
							   'value':'mainCategories',
							   'name':'product - mainCategories'
							},
							{
							   'value':'manufacturer',
							   'name':'product - manufacturer'
							},
							{
							   'value':'media',
							   'name':'product - media'
							},
							{
							   'value':'options',
							   'name':'product - options'
							},
							{
							   'value':'orderLineItems',
							   'name':'product - orderLineItems'
							},
							{
							   'value':'parent',
							   'name':'product - parent'
							},
							{
							   'value':'prices',
							   'name':'product - prices'
							},
							{
							   'value':'productReviews',
							   'name':'product - productReviews'
							},
							{
							   'value':'properties',
							   'name':'product - properties'
							},
							{
							   'value':'searchKeywords',
							   'name':'product - searchKeywords'
							},
							{
							   'value':'seoUrls',
							   'name':'product - seoUrls'
							},
							{
							   'value':'swagCustomizedProductsTemplate',
							   'name':'product - swagCustomizedProductsTemplate'
							},
							{
							   'value':'tags',
							   'name':'product - tags'
							},
							{
							   'value':'tax',
							   'name':'product - tax'
							},
							{
							   'value':'translations',
							   'name':'product - translations'
							},
							{
							   'value':'unit',
							   'name':'product - unit'
							},
							{
							   'value':'visibilities',
							   'name':'product - visibilities'
							},
							{
							   'value':'category',
							   'name':'product_category - category'
							},
							{
							   'value':'product',
							   'name':'product_category - product'
							},
							{
							   'value':'category',
							   'name':'product_category_tree - category'
							},
							{
							   'value':'product',
							   'name':'product_category_tree - product'
							},
							{
							   'value':'media',
							   'name':'product_configurator_setting - media'
							},
							{
							   'value':'option',
							   'name':'product_configurator_setting - option'
							},
							{
							   'value':'product',
							   'name':'product_configurator_setting - product'
							},
							{
							   'value':'assignedProducts',
							   'name':'product_cross_selling - assignedProducts'
							},
							{
							   'value':'product',
							   'name':'product_cross_selling - product'
							},
							{
							   'value':'productStream',
							   'name':'product_cross_selling - productStream'
							},
							{
							   'value':'translations',
							   'name':'product_cross_selling - translations'
							},
							{
							   'value':'crossSelling',
							   'name':'product_cross_selling_assigned_products - crossSelling'
							},
							{
							   'value':'product',
							   'name':'product_cross_selling_assigned_products - product'
							},
							{
							   'value':'language',
							   'name':'product_cross_selling_translation - language'
							},
							{
							   'value':'productCrossSelling',
							   'name':'product_cross_selling_translation - productCrossSelling'
							},
							{
							   'value':'customFieldSet',
							   'name':'product_custom_field_set - customFieldSet'
							},
							{
							   'value':'product',
							   'name':'product_custom_field_set - product'
							},
							{
							   'value':'currency',
							   'name':'product_export - currency'
							},
							{
							   'value':'productStream',
							   'name':'product_export - productStream'
							},
							{
							   'value':'salesChannel',
							   'name':'product_export - salesChannel'
							},
							{
							   'value':'salesChannelDomain',
							   'name':'product_export - salesChannelDomain'
							},
							{
							   'value':'storefrontSalesChannel',
							   'name':'product_export - storefrontSalesChannel'
							},
							{
							   'value':'products',
							   'name':'product_feature_set - products'
							},
							{
							   'value':'translations',
							   'name':'product_feature_set - translations'
							},
							{
							   'value':'language',
							   'name':'product_feature_set_translation - language'
							},
							{
							   'value':'productFeatureSet',
							   'name':'product_feature_set_translation - productFeatureSet'
							},
							{
							   'value':'language',
							   'name':'product_keyword_dictionary - language'
							},
							{
							   'value':'media',
							   'name':'product_manufacturer - media'
							},
							{
							   'value':'products',
							   'name':'product_manufacturer - products'
							},
							{
							   'value':'translations',
							   'name':'product_manufacturer - translations'
							},
							{
							   'value':'language',
							   'name':'product_manufacturer_translation - language'
							},
							{
							   'value':'productManufacturer',
							   'name':'product_manufacturer_translation - productManufacturer'
							},
							{
							   'value':'media',
							   'name':'product_media - media'
							},
							{
							   'value':'product',
							   'name':'product_media - product'
							},
							{
							   'value':'option',
							   'name':'product_option - option'
							},
							{
							   'value':'product',
							   'name':'product_option - product'
							},
							{
							   'value':'product',
							   'name':'product_price - product'
							},
							{
							   'value':'rule',
							   'name':'product_price - rule'
							},
							{
							   'value':'option',
							   'name':'product_property - option'
							},
							{
							   'value':'product',
							   'name':'product_property - product'
							},
							{
							   'value':'customer',
							   'name':'product_review - customer'
							},
							{
							   'value':'language',
							   'name':'product_review - language'
							},
							{
							   'value':'product',
							   'name':'product_review - product'
							},
							{
							   'value':'salesChannel',
							   'name':'product_review - salesChannel'
							},
							{
							   'value':'language',
							   'name':'product_search_keyword - language'
							},
							{
							   'value':'product',
							   'name':'product_search_keyword - product'
							},
							{
							   'value':'translations',
							   'name':'product_sorting - translations'
							},
							{
							   'value':'language',
							   'name':'product_sorting_translation - language'
							},
							{
							   'value':'productSorting',
							   'name':'product_sorting_translation - productSorting'
							},
							{
							   'value':'categories',
							   'name':'product_stream - categories'
							},
							{
							   'value':'filters',
							   'name':'product_stream - filters'
							},
							{
							   'value':'productCrossSellings',
							   'name':'product_stream - productCrossSellings'
							},
							{
							   'value':'productExports',
							   'name':'product_stream - productExports'
							},
							{
							   'value':'translations',
							   'name':'product_stream - translations'
							},
							{
							   'value':'parent',
							   'name':'product_stream_filter - parent'
							},
							{
							   'value':'productStream',
							   'name':'product_stream_filter - productStream'
							},
							{
							   'value':'queries',
							   'name':'product_stream_filter - queries'
							},
							{
							   'value':'language',
							   'name':'product_stream_translation - language'
							},
							{
							   'value':'productStream',
							   'name':'product_stream_translation - productStream'
							},
							{
							   'value':'product',
							   'name':'product_tag - product'
							},
							{
							   'value':'tag',
							   'name':'product_tag - tag'
							},
							{
							   'value':'language',
							   'name':'product_translation - language'
							},
							{
							   'value':'product',
							   'name':'product_translation - product'
							},
							{
							   'value':'product',
							   'name':'product_visibility - product'
							},
							{
							   'value':'salesChannel',
							   'name':'product_visibility - salesChannel'
							},
							{
							   'value':'cartRules',
							   'name':'promotion - cartRules'
							},
							{
							   'value':'discounts',
							   'name':'promotion - discounts'
							},
							{
							   'value':'individualCodes',
							   'name':'promotion - individualCodes'
							},
							{
							   'value':'orderRules',
							   'name':'promotion - orderRules'
							},
							{
							   'value':'personaCustomers',
							   'name':'promotion - personaCustomers'
							},
							{
							   'value':'personaRules',
							   'name':'promotion - personaRules'
							},
							{
							   'value':'salesChannels',
							   'name':'promotion - salesChannels'
							},
							{
							   'value':'setgroups',
							   'name':'promotion - setgroups'
							},
							{
							   'value':'translations',
							   'name':'promotion - translations'
							},
							{
							   'value':'promotion',
							   'name':'promotion_cart_rule - promotion'
							},
							{
							   'value':'rule',
							   'name':'promotion_cart_rule - rule'
							},
							{
							   'value':'discountRules',
							   'name':'promotion_discount - discountRules'
							},
							{
							   'value':'promotion',
							   'name':'promotion_discount - promotion'
							},
							{
							   'value':'promotionDiscountPrices',
							   'name':'promotion_discount - promotionDiscountPrices'
							},
							{
							   'value':'currency',
							   'name':'promotion_discount_prices - currency'
							},
							{
							   'value':'promotionDiscount',
							   'name':'promotion_discount_prices - promotionDiscount'
							},
							{
							   'value':'discount',
							   'name':'promotion_discount_rule - discount'
							},
							{
							   'value':'rule',
							   'name':'promotion_discount_rule - rule'
							},
							{
							   'value':'promotion',
							   'name':'promotion_individual_code - promotion'
							},
							{
							   'value':'promotion',
							   'name':'promotion_order_rule - promotion'
							},
							{
							   'value':'rule',
							   'name':'promotion_order_rule - rule'
							},
							{
							   'value':'customer',
							   'name':'promotion_persona_customer - customer'
							},
							{
							   'value':'promotion',
							   'name':'promotion_persona_customer - promotion'
							},
							{
							   'value':'promotion',
							   'name':'promotion_persona_rule - promotion'
							},
							{
							   'value':'rule',
							   'name':'promotion_persona_rule - rule'
							},
							{
							   'value':'promotion',
							   'name':'promotion_sales_channel - promotion'
							},
							{
							   'value':'salesChannel',
							   'name':'promotion_sales_channel - salesChannel'
							},
							{
							   'value':'promotion',
							   'name':'promotion_setgroup - promotion'
							},
							{
							   'value':'setGroupRules',
							   'name':'promotion_setgroup - setGroupRules'
							},
							{
							   'value':'rule',
							   'name':'promotion_setgroup_rule - rule'
							},
							{
							   'value':'setgroup',
							   'name':'promotion_setgroup_rule - setgroup'
							},
							{
							   'value':'language',
							   'name':'promotion_translation - language'
							},
							{
							   'value':'promotion',
							   'name':'promotion_translation - promotion'
							},
							{
							   'value':'options',
							   'name':'property_group - options'
							},
							{
							   'value':'translations',
							   'name':'property_group - translations'
							},
							{
							   'value':'group',
							   'name':'property_group_option - group'
							},
							{
							   'value':'media',
							   'name':'property_group_option - media'
							},
							{
							   'value':'productConfiguratorSettings',
							   'name':'property_group_option - productConfiguratorSettings'
							},
							{
							   'value':'productOptions',
							   'name':'property_group_option - productOptions'
							},
							{
							   'value':'productProperties',
							   'name':'property_group_option - productProperties'
							},
							{
							   'value':'translations',
							   'name':'property_group_option - translations'
							},
							{
							   'value':'language',
							   'name':'property_group_option_translation - language'
							},
							{
							   'value':'propertyGroupOption',
							   'name':'property_group_option_translation - propertyGroupOption'
							},
							{
							   'value':'language',
							   'name':'property_group_translation - language'
							},
							{
							   'value':'propertyGroup',
							   'name':'property_group_translation - propertyGroup'
							},
							{
							   'value':'cartPromotions',
							   'name':'rule - cartPromotions'
							},
							{
							   'value':'conditions',
							   'name':'rule - conditions'
							},
							{
							   'value':'customizedProductsTemplateOptionPrices',
							   'name':'rule - customizedProductsTemplateOptionPrices'
							},
							{
							   'value':'customizedProductsTemplateOptionValuePrices',
							   'name':'rule - customizedProductsTemplateOptionValuePrices'
							},
							{
							   'value':'eventActions',
							   'name':'rule - eventActions'
							},
							{
							   'value':'orderPromotions',
							   'name':'rule - orderPromotions'
							},
							{
							   'value':'paymentMethods',
							   'name':'rule - paymentMethods'
							},
							{
							   'value':'personaPromotions',
							   'name':'rule - personaPromotions'
							},
							{
							   'value':'productPrices',
							   'name':'rule - productPrices'
							},
							{
							   'value':'promotionDiscounts',
							   'name':'rule - promotionDiscounts'
							},
							{
							   'value':'promotionSetGroups',
							   'name':'rule - promotionSetGroups'
							},
							{
							   'value':'shippingMethodPriceCalculations',
							   'name':'rule - shippingMethodPriceCalculations'
							},
							{
							   'value':'shippingMethodPrices',
							   'name':'rule - shippingMethodPrices'
							},
							{
							   'value':'shippingMethods',
							   'name':'rule - shippingMethods'
							},
							{
							   'value':'children',
							   'name':'rule_condition - children'
							},
							{
							   'value':'parent',
							   'name':'rule_condition - parent'
							},
							{
							   'value':'rule',
							   'name':'rule_condition - rule'
							},
							{
							   'value':'app',
							   'name':'saas_app_storefront_config - app'
							},
							{
							   'value':'user',
							   'name':'saas_sbp_user_data - user'
							},
							{
							   'value':'user',
							   'name':'saas_storefront_demo_token - user'
							},
							{
							   'value':'user',
							   'name':'saas_user_login_token - user'
							},
							{
							   'value':'analytics',
							   'name':'sales_channel - analytics'
							},
							{
							   'value':'countries',
							   'name':'sales_channel - countries'
							},
							{
							   'value':'country',
							   'name':'sales_channel - country'
							},
							{
							   'value':'currencies',
							   'name':'sales_channel - currencies'
							},
							{
							   'value':'currency',
							   'name':'sales_channel - currency'
							},
							{
							   'value':'customerGroup',
							   'name':'sales_channel - customerGroup'
							},
							{
							   'value':'customerGroupsRegistrations',
							   'name':'sales_channel - customerGroupsRegistrations'
							},
							{
							   'value':'customers',
							   'name':'sales_channel - customers'
							},
							{
							   'value':'documentBaseConfigSalesChannels',
							   'name':'sales_channel - documentBaseConfigSalesChannels'
							},
							{
							   'value':'domains',
							   'name':'sales_channel - domains'
							},
							{
							   'value':'eventActions',
							   'name':'sales_channel - eventActions'
							},
							{
							   'value':'footerCategory',
							   'name':'sales_channel - footerCategory'
							},
							{
							   'value':'hreflangDefaultDomain',
							   'name':'sales_channel - hreflangDefaultDomain'
							},
							{
							   'value':'language',
							   'name':'sales_channel - language'
							},
							{
							   'value':'languages',
							   'name':'sales_channel - languages'
							},
							{
							   'value':'mailHeaderFooter',
							   'name':'sales_channel - mailHeaderFooter'
							},
							{
							   'value':'mailTemplates',
							   'name':'sales_channel - mailTemplates'
							},
							{
							   'value':'mainCategories',
							   'name':'sales_channel - mainCategories'
							},
							{
							   'value':'navigationCategory',
							   'name':'sales_channel - navigationCategory'
							},
							{
							   'value':'newsletterRecipients',
							   'name':'sales_channel - newsletterRecipients'
							},
							{
							   'value':'numberRangeSalesChannels',
							   'name':'sales_channel - numberRangeSalesChannels'
							},
							{
							   'value':'orders',
							   'name':'sales_channel - orders'
							},
							{
							   'value':'paymentMethod',
							   'name':'sales_channel - paymentMethod'
							},
							{
							   'value':'paymentMethods',
							   'name':'sales_channel - paymentMethods'
							},
							{
							   'value':'productExports',
							   'name':'sales_channel - productExports'
							},
							{
							   'value':'productReviews',
							   'name':'sales_channel - productReviews'
							},
							{
							   'value':'productVisibilities',
							   'name':'sales_channel - productVisibilities'
							},
							{
							   'value':'promotionSalesChannels',
							   'name':'sales_channel - promotionSalesChannels'
							},
							{
							   'value':'seoUrlTemplates',
							   'name':'sales_channel - seoUrlTemplates'
							},
							{
							   'value':'seoUrls',
							   'name':'sales_channel - seoUrls'
							},
							{
							   'value':'serviceCategory',
							   'name':'sales_channel - serviceCategory'
							},
							{
							   'value':'shippingMethod',
							   'name':'sales_channel - shippingMethod'
							},
							{
							   'value':'shippingMethods',
							   'name':'sales_channel - shippingMethods'
							},
							{
							   'value':'socialShoppingSalesChannel',
							   'name':'sales_channel - socialShoppingSalesChannel'
							},
							{
							   'value':'systemConfigs',
							   'name':'sales_channel - systemConfigs'
							},
							{
							   'value':'themes',
							   'name':'sales_channel - themes'
							},
							{
							   'value':'translations',
							   'name':'sales_channel - translations'
							},
							{
							   'value':'type',
							   'name':'sales_channel - type'
							},
							{
							   'value':'salesChannel',
							   'name':'sales_channel_analytics - salesChannel'
							},
							{
							   'value':'country',
							   'name':'sales_channel_country - country'
							},
							{
							   'value':'salesChannel',
							   'name':'sales_channel_country - salesChannel'
							},
							{
							   'value':'currency',
							   'name':'sales_channel_currency - currency'
							},
							{
							   'value':'salesChannel',
							   'name':'sales_channel_currency - salesChannel'
							},
							{
							   'value':'currency',
							   'name':'sales_channel_domain - currency'
							},
							{
							   'value':'language',
							   'name':'sales_channel_domain - language'
							},
							{
							   'value':'productExports',
							   'name':'sales_channel_domain - productExports'
							},
							{
							   'value':'salesChannel',
							   'name':'sales_channel_domain - salesChannel'
							},
							{
							   'value':'salesChannelDefaultHreflang',
							   'name':'sales_channel_domain - salesChannelDefaultHreflang'
							},
							{
							   'value':'snippetSet',
							   'name':'sales_channel_domain - snippetSet'
							},
							{
							   'value':'language',
							   'name':'sales_channel_language - language'
							},
							{
							   'value':'salesChannel',
							   'name':'sales_channel_language - salesChannel'
							},
							{
							   'value':'paymentMethod',
							   'name':'sales_channel_payment_method - paymentMethod'
							},
							{
							   'value':'salesChannel',
							   'name':'sales_channel_payment_method - salesChannel'
							},
							{
							   'value':'salesChannel',
							   'name':'sales_channel_shipping_method - salesChannel'
							},
							{
							   'value':'shippingMethod',
							   'name':'sales_channel_shipping_method - shippingMethod'
							},
							{
							   'value':'language',
							   'name':'sales_channel_translation - language'
							},
							{
							   'value':'salesChannel',
							   'name':'sales_channel_translation - salesChannel'
							},
							{
							   'value':'salesChannels',
							   'name':'sales_channel_type - salesChannels'
							},
							{
							   'value':'translations',
							   'name':'sales_channel_type - translations'
							},
							{
							   'value':'language',
							   'name':'sales_channel_type_translation - language'
							},
							{
							   'value':'salesChannelType',
							   'name':'sales_channel_type_translation - salesChannelType'
							},
							{
							   'value':'customerAddresses',
							   'name':'salutation - customerAddresses'
							},
							{
							   'value':'customers',
							   'name':'salutation - customers'
							},
							{
							   'value':'newsletterRecipients',
							   'name':'salutation - newsletterRecipients'
							},
							{
							   'value':'orderAddresses',
							   'name':'salutation - orderAddresses'
							},
							{
							   'value':'orderCustomers',
							   'name':'salutation - orderCustomers'
							},
							{
							   'value':'translations',
							   'name':'salutation - translations'
							},
							{
							   'value':'language',
							   'name':'salutation_translation - language'
							},
							{
							   'value':'salutation',
							   'name':'salutation_translation - salutation'
							},
							{
							   'value':'deadMessages',
							   'name':'scheduled_task - deadMessages'
							},
							{
							   'value':'language',
							   'name':'seo_url - language'
							},
							{
							   'value':'salesChannel',
							   'name':'seo_url - salesChannel'
							},
							{
							   'value':'salesChannel',
							   'name':'seo_url_template - salesChannel'
							},
							{
							   'value':'availabilityRule',
							   'name':'shipping_method - availabilityRule'
							},
							{
							   'value':'deliveryTime',
							   'name':'shipping_method - deliveryTime'
							},
							{
							   'value':'media',
							   'name':'shipping_method - media'
							},
							{
							   'value':'orderDeliveries',
							   'name':'shipping_method - orderDeliveries'
							},
							{
							   'value':'prices',
							   'name':'shipping_method - prices'
							},
							{
							   'value':'salesChannelDefaultAssignments',
							   'name':'shipping_method - salesChannelDefaultAssignments'
							},
							{
							   'value':'salesChannels',
							   'name':'shipping_method - salesChannels'
							},
							{
							   'value':'tags',
							   'name':'shipping_method - tags'
							},
							{
							   'value':'translations',
							   'name':'shipping_method - translations'
							},
							{
							   'value':'calculationRule',
							   'name':'shipping_method_price - calculationRule'
							},
							{
							   'value':'rule',
							   'name':'shipping_method_price - rule'
							},
							{
							   'value':'shippingMethod',
							   'name':'shipping_method_price - shippingMethod'
							},
							{
							   'value':'shippingMethod',
							   'name':'shipping_method_tag - shippingMethod'
							},
							{
							   'value':'tag',
							   'name':'shipping_method_tag - tag'
							},
							{
							   'value':'language',
							   'name':'shipping_method_translation - language'
							},
							{
							   'value':'shippingMethod',
							   'name':'shipping_method_translation - shippingMethod'
							},
							{
							   'value':'set',
							   'name':'snippet - set'
							},
							{
							   'value':'salesChannelDomains',
							   'name':'snippet_set - salesChannelDomains'
							},
							{
							   'value':'snippets',
							   'name':'snippet_set - snippets'
							},
							{
							   'value':'historyEntries',
							   'name':'state_machine - historyEntries'
							},
							{
							   'value':'states',
							   'name':'state_machine - states'
							},
							{
							   'value':'transitions',
							   'name':'state_machine - transitions'
							},
							{
							   'value':'translations',
							   'name':'state_machine - translations'
							},
							{
							   'value':'fromStateMachineState',
							   'name':'state_machine_history - fromStateMachineState'
							},
							{
							   'value':'stateMachine',
							   'name':'state_machine_history - stateMachine'
							},
							{
							   'value':'toStateMachineState',
							   'name':'state_machine_history - toStateMachineState'
							},
							{
							   'value':'user',
							   'name':'state_machine_history - user'
							},
							{
							   'value':'fromStateMachineHistoryEntries',
							   'name':'state_machine_state - fromStateMachineHistoryEntries'
							},
							{
							   'value':'fromStateMachineTransitions',
							   'name':'state_machine_state - fromStateMachineTransitions'
							},
							{
							   'value':'orderDeliveries',
							   'name':'state_machine_state - orderDeliveries'
							},
							{
							   'value':'orderTransactions',
							   'name':'state_machine_state - orderTransactions'
							},
							{
							   'value':'orders',
							   'name':'state_machine_state - orders'
							},
							{
							   'value':'stateMachine',
							   'name':'state_machine_state - stateMachine'
							},
							{
							   'value':'toStateMachineHistoryEntries',
							   'name':'state_machine_state - toStateMachineHistoryEntries'
							},
							{
							   'value':'toStateMachineTransitions',
							   'name':'state_machine_state - toStateMachineTransitions'
							},
							{
							   'value':'translations',
							   'name':'state_machine_state - translations'
							},
							{
							   'value':'language',
							   'name':'state_machine_state_translation - language'
							},
							{
							   'value':'stateMachineState',
							   'name':'state_machine_state_translation - stateMachineState'
							},
							{
							   'value':'fromStateMachineState',
							   'name':'state_machine_transition - fromStateMachineState'
							},
							{
							   'value':'stateMachine',
							   'name':'state_machine_transition - stateMachine'
							},
							{
							   'value':'toStateMachineState',
							   'name':'state_machine_transition - toStateMachineState'
							},
							{
							   'value':'language',
							   'name':'state_machine_translation - language'
							},
							{
							   'value':'stateMachine',
							   'name':'state_machine_translation - stateMachine'
							},
							{
							   'value':'cmsBlock',
							   'name':'swag_cms_extensions_quickview - cmsBlock'
							},
							{
							   'value':'cmsSection',
							   'name':'swag_cms_extensions_scroll_navigation - cmsSection'
							},
							{
							   'value':'translations',
							   'name':'swag_cms_extensions_scroll_navigation - translations'
							},
							{
							   'value':'cmsPage',
							   'name':'swag_cms_extensions_scroll_navigation_page_settings - cmsPage'
							},
							{
							   'value':'language',
							   'name':'swag_cms_extensions_scroll_navigation_translation - language'
							},
							{
							   'value':'swagCmsExtensionsScrollNavigation',
							   'name':'swag_cms_extensions_scroll_navigation_translation - swagCmsExtensionsScrollNavigation'
							},
							{
							   'value':'configurations',
							   'name':'swag_customized_products_template - configurations'
							},
							{
							   'value':'exclusions',
							   'name':'swag_customized_products_template - exclusions'
							},
							{
							   'value':'media',
							   'name':'swag_customized_products_template - media'
							},
							{
							   'value':'options',
							   'name':'swag_customized_products_template - options'
							},
							{
							   'value':'products',
							   'name':'swag_customized_products_template - products'
							},
							{
							   'value':'translations',
							   'name':'swag_customized_products_template - translations'
							},
							{
							   'value':'template',
							   'name':'swag_customized_products_template_configuration - template'
							},
							{
							   'value':'templateConfigurationShares',
							   'name':'swag_customized_products_template_configuration - templateConfigurationShares'
							},
							{
							   'value':'templateConfiguration',
							   'name':'swag_customized_products_template_configuration_share - templateConfiguration'
							},
							{
							   'value':'conditions',
							   'name':'swag_customized_products_template_exclusion - conditions'
							},
							{
							   'value':'template',
							   'name':'swag_customized_products_template_exclusion - template'
							},
							{
							   'value':'templateExclusion',
							   'name':'swag_customized_products_template_exclusion_condition - templateExclusion'
							},
							{
							   'value':'templateExclusionOperator',
							   'name':'swag_customized_products_template_exclusion_condition - templateExclusionOperator'
							},
							{
							   'value':'templateOption',
							   'name':'swag_customized_products_template_exclusion_condition - templateOption'
							},
							{
							   'value':'templateOptionValues',
							   'name':'swag_customized_products_template_exclusion_condition - templateOptionValues'
							},
							{
							   'value':'templateExclusionCondition',
							   'name':'swag_customized_products_template_exclusion_condition_values - templateExclusionCondition'
							},
							{
							   'value':'templateOptionValue',
							   'name':'swag_customized_products_template_exclusion_condition_values - templateOptionValue'
							},
							{
							   'value':'templateExclusionConditions',
							   'name':'swag_customized_products_template_exclusion_operator - templateExclusionConditions'
							},
							{
							   'value':'translations',
							   'name':'swag_customized_products_template_exclusion_operator - translations'
							},
							{
							   'value':'language',
							   'name':'swag_customized_products_template_exclusion_operator_translation - language'
							},
							{
							   'value':'swagCustomizedProductsTemplateExclusionOperator',
							   'name':'swag_customized_products_template_exclusion_operator_translation - swagCustomizedProductsTemplateExclusionOperator'
							},
							{
							   'value':'prices',
							   'name':'swag_customized_products_template_option - prices'
							},
							{
							   'value':'tax',
							   'name':'swag_customized_products_template_option - tax'
							},
							{
							   'value':'template',
							   'name':'swag_customized_products_template_option - template'
							},
							{
							   'value':'templateExclusionConditions',
							   'name':'swag_customized_products_template_option - templateExclusionConditions'
							},
							{
							   'value':'translations',
							   'name':'swag_customized_products_template_option - translations'
							},
							{
							   'value':'values',
							   'name':'swag_customized_products_template_option - values'
							},
							{
							   'value':'rule',
							   'name':'swag_customized_products_template_option_price - rule'
							},
							{
							   'value':'templateOption',
							   'name':'swag_customized_products_template_option_price - templateOption'
							},
							{
							   'value':'language',
							   'name':'swag_customized_products_template_option_translation - language'
							},
							{
							   'value':'swagCustomizedProductsTemplateOption',
							   'name':'swag_customized_products_template_option_translation - swagCustomizedProductsTemplateOption'
							},
							{
							   'value':'prices',
							   'name':'swag_customized_products_template_option_value - prices'
							},
							{
							   'value':'tax',
							   'name':'swag_customized_products_template_option_value - tax'
							},
							{
							   'value':'templateExclusionConditions',
							   'name':'swag_customized_products_template_option_value - templateExclusionConditions'
							},
							{
							   'value':'templateOption',
							   'name':'swag_customized_products_template_option_value - templateOption'
							},
							{
							   'value':'translations',
							   'name':'swag_customized_products_template_option_value - translations'
							},
							{
							   'value':'rule',
							   'name':'swag_customized_products_template_option_value_price - rule'
							},
							{
							   'value':'templateOptionValue',
							   'name':'swag_customized_products_template_option_value_price - templateOptionValue'
							},
							{
							   'value':'language',
							   'name':'swag_customized_products_template_option_value_translation - language'
							},
							{
							   'value':'swagCustomizedProductsTemplateOptionValue',
							   'name':'swag_customized_products_template_option_value_translation - swagCustomizedProductsTemplateOptionValue'
							},
							{
							   'value':'language',
							   'name':'swag_customized_products_template_translation - language'
							},
							{
							   'value':'swagCustomizedProductsTemplate',
							   'name':'swag_customized_products_template_translation - swagCustomizedProductsTemplate'
							},
							{
							   'value':'mappings',
							   'name':'swag_migration_connection - mappings'
							},
							{
							   'value':'runs',
							   'name':'swag_migration_connection - runs'
							},
							{
							   'value':'settings',
							   'name':'swag_migration_connection - settings'
							},
							{
							   'value':'run',
							   'name':'swag_migration_data - run'
							},
							{
							   'value':'selectedConnection',
							   'name':'swag_migration_general_setting - selectedConnection'
							},
							{
							   'value':'run',
							   'name':'swag_migration_logging - run'
							},
							{
							   'value':'connection',
							   'name':'swag_migration_mapping - connection'
							},
							{
							   'value':'run',
							   'name':'swag_migration_media_file - run'
							},
							{
							   'value':'connection',
							   'name':'swag_migration_run - connection'
							},
							{
							   'value':'data',
							   'name':'swag_migration_run - data'
							},
							{
							   'value':'logs',
							   'name':'swag_migration_run - logs'
							},
							{
							   'value':'mediaFiles',
							   'name':'swag_migration_run - mediaFiles'
							},
							{
							   'value':'product',
							   'name':'swag_social_shopping_product_error - product'
							},
							{
							   'value':'salesChannel',
							   'name':'swag_social_shopping_product_error - salesChannel'
							},
							{
							   'value':'currency',
							   'name':'swag_social_shopping_sales_channel - currency'
							},
							{
							   'value':'productStream',
							   'name':'swag_social_shopping_sales_channel - productStream'
							},
							{
							   'value':'salesChannel',
							   'name':'swag_social_shopping_sales_channel - salesChannel'
							},
							{
							   'value':'salesChannelDomain',
							   'name':'swag_social_shopping_sales_channel - salesChannelDomain'
							},
							{
							   'value':'salesChannel',
							   'name':'system_config - salesChannel'
							},
							{
							   'value':'categories',
							   'name':'tag - categories'
							},
							{
							   'value':'customers',
							   'name':'tag - customers'
							},
							{
							   'value':'media',
							   'name':'tag - media'
							},
							{
							   'value':'newsletterRecipients',
							   'name':'tag - newsletterRecipients'
							},
							{
							   'value':'orders',
							   'name':'tag - orders'
							},
							{
							   'value':'products',
							   'name':'tag - products'
							},
							{
							   'value':'shippingMethods',
							   'name':'tag - shippingMethods'
							},
							{
							   'value':'customizedProductsOptionValues',
							   'name':'tax - customizedProductsOptionValues'
							},
							{
							   'value':'customizedProductsOptions',
							   'name':'tax - customizedProductsOptions'
							},
							{
							   'value':'products',
							   'name':'tax - products'
							},
							{
							   'value':'rules',
							   'name':'tax - rules'
							},
							{
							   'value':'country',
							   'name':'tax_rule - country'
							},
							{
							   'value':'tax',
							   'name':'tax_rule - tax'
							},
							{
							   'value':'type',
							   'name':'tax_rule - type'
							},
							{
							   'value':'rules',
							   'name':'tax_rule_type - rules'
							},
							{
							   'value':'translations',
							   'name':'tax_rule_type - translations'
							},
							{
							   'value':'language',
							   'name':'tax_rule_type_translation - language'
							},
							{
							   'value':'taxRuleType',
							   'name':'tax_rule_type_translation - taxRuleType'
							},
							{
							   'value':'childThemes',
							   'name':'theme - childThemes'
							},
							{
							   'value':'media',
							   'name':'theme - media'
							},
							{
							   'value':'previewMedia',
							   'name':'theme - previewMedia'
							},
							{
							   'value':'salesChannels',
							   'name':'theme - salesChannels'
							},
							{
							   'value':'translations',
							   'name':'theme - translations'
							},
							{
							   'value':'media',
							   'name':'theme_media - media'
							},
							{
							   'value':'theme',
							   'name':'theme_media - theme'
							},
							{
							   'value':'salesChannel',
							   'name':'theme_sales_channel - salesChannel'
							},
							{
							   'value':'theme',
							   'name':'theme_sales_channel - theme'
							},
							{
							   'value':'language',
							   'name':'theme_translation - language'
							},
							{
							   'value':'theme',
							   'name':'theme_translation - theme'
							},
							{
							   'value':'products',
							   'name':'unit - products'
							},
							{
							   'value':'translations',
							   'name':'unit - translations'
							},
							{
							   'value':'language',
							   'name':'unit_translation - language'
							},
							{
							   'value':'unit',
							   'name':'unit_translation - unit'
							},
							{
							   'value':'accessKeys',
							   'name':'user - accessKeys'
							},
							{
							   'value':'aclRoles',
							   'name':'user - aclRoles'
							},
							{
							   'value':'avatarMedia',
							   'name':'user - avatarMedia'
							},
							{
							   'value':'demoToken',
							   'name':'user - demoToken'
							},
							{
							   'value':'importExportLogEntries',
							   'name':'user - importExportLogEntries'
							},
							{
							   'value':'locale',
							   'name':'user - locale'
							},
							{
							   'value':'loginToken',
							   'name':'user - loginToken'
							},
							{
							   'value':'media',
							   'name':'user - media'
							},
							{
							   'value':'recoveryUser',
							   'name':'user - recoveryUser'
							},
							{
							   'value':'sbpUserData',
							   'name':'user - sbpUserData'
							},
							{
							   'value':'stateMachineHistoryEntries',
							   'name':'user - stateMachineHistoryEntries'
							},
							{
							   'value':'user',
							   'name':'user_access_key - user'
							},
							{
							   'value':'user',
							   'name':'user_recovery - user'
							},
							{
							   'value':'commits',
							   'name':'version - commits'
							},
							{
							   'value':'data',
							   'name':'version_commit - data'
							},
							{
							   'value':'version',
							   'name':'version_commit - version'
							},
							{
							   'value':'commit',
							   'name':'version_commit_data - commit'
							},
							{
							   'value':'app',
							   'name':'webhook - app'
							}
						],
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