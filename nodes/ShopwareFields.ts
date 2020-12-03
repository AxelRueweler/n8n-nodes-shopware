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
						type: 'multiOptions',
						options: [
							{
								'name':'acl_role - createdAt',
								'value':'acl_role.createdAt'
							},
							{
								'name':'acl_role - description',
								'value':'acl_role.description'
							},
							{
								'name':'acl_role - id',
								'value':'acl_role.id'
							},
							{
								'name':'acl_role - name',
								'value':'acl_role.name'
							},
							{
								'name':'acl_role - privileges',
								'value':'acl_role.privileges'
							},
							{
								'name':'acl_role - updatedAt',
								'value':'acl_role.updatedAt'
							},
							{
								'name':'acl_user_role - aclRoleId',
								'value':'acl_user_role.aclRoleId'
							},
							{
								'name':'acl_user_role - createdAt',
								'value':'acl_user_role.createdAt'
							},
							{
								'name':'acl_user_role - updatedAt',
								'value':'acl_user_role.updatedAt'
							},
							{
								'name':'acl_user_role - userId',
								'value':'acl_user_role.userId'
							},
							{
								'name':'app - aclRoleId',
								'value':'app.aclRoleId'
							},
							{
								'name':'app - active',
								'value':'app.active'
							},
							{
								'name':'app - appSecret',
								'value':'app.appSecret'
							},
							{
								'name':'app - author',
								'value':'app.author'
							},
							{
								'name':'app - copyright',
								'value':'app.copyright'
							},
							{
								'name':'app - createdAt',
								'value':'app.createdAt'
							},
							{
								'name':'app - description',
								'value':'app.description'
							},
							{
								'name':'app - icon',
								'value':'app.icon'
							},
							{
								'name':'app - iconRaw',
								'value':'app.iconRaw'
							},
							{
								'name':'app - id',
								'value':'app.id'
							},
							{
								'name':'app - integrationId',
								'value':'app.integrationId'
							},
							{
								'name':'app - label',
								'value':'app.label'
							},
							{
								'name':'app - license',
								'value':'app.license'
							},
							{
								'name':'app - modules',
								'value':'app.modules'
							},
							{
								'name':'app - name',
								'value':'app.name'
							},
							{
								'name':'app - path',
								'value':'app.path'
							},
							{
								'name':'app - privacy',
								'value':'app.privacy'
							},
							{
								'name':'app - translated',
								'value':'app.translated'
							},
							{
								'name':'app - updatedAt',
								'value':'app.updatedAt'
							},
							{
								'name':'app - version',
								'value':'app.version'
							},
							{
								'name':'app_action_button - action',
								'value':'app_action_button.action'
							},
							{
								'name':'app_action_button - appId',
								'value':'app_action_button.appId'
							},
							{
								'name':'app_action_button - createdAt',
								'value':'app_action_button.createdAt'
							},
							{
								'name':'app_action_button - entity',
								'value':'app_action_button.entity'
							},
							{
								'name':'app_action_button - id',
								'value':'app_action_button.id'
							},
							{
								'name':'app_action_button - label',
								'value':'app_action_button.label'
							},
							{
								'name':'app_action_button - openNewTab',
								'value':'app_action_button.openNewTab'
							},
							{
								'name':'app_action_button - translated',
								'value':'app_action_button.translated'
							},
							{
								'name':'app_action_button - updatedAt',
								'value':'app_action_button.updatedAt'
							},
							{
								'name':'app_action_button - url',
								'value':'app_action_button.url'
							},
							{
								'name':'app_action_button - view',
								'value':'app_action_button.view'
							},
							{
								'name':'app_action_button_translation - appActionButtonId',
								'value':'app_action_button_translation.appActionButtonId'
							},
							{
								'name':'app_action_button_translation - createdAt',
								'value':'app_action_button_translation.createdAt'
							},
							{
								'name':'app_action_button_translation - label',
								'value':'app_action_button_translation.label'
							},
							{
								'name':'app_action_button_translation - languageId',
								'value':'app_action_button_translation.languageId'
							},
							{
								'name':'app_action_button_translation - updatedAt',
								'value':'app_action_button_translation.updatedAt'
							},
							{
								'name':'app_template - active',
								'value':'app_template.active'
							},
							{
								'name':'app_template - appId',
								'value':'app_template.appId'
							},
							{
								'name':'app_template - createdAt',
								'value':'app_template.createdAt'
							},
							{
								'name':'app_template - id',
								'value':'app_template.id'
							},
							{
								'name':'app_template - path',
								'value':'app_template.path'
							},
							{
								'name':'app_template - template',
								'value':'app_template.template'
							},
							{
								'name':'app_template - updatedAt',
								'value':'app_template.updatedAt'
							},
							{
								'name':'app_translation - appId',
								'value':'app_translation.appId'
							},
							{
								'name':'app_translation - createdAt',
								'value':'app_translation.createdAt'
							},
							{
								'name':'app_translation - description',
								'value':'app_translation.description'
							},
							{
								'name':'app_translation - label',
								'value':'app_translation.label'
							},
							{
								'name':'app_translation - languageId',
								'value':'app_translation.languageId'
							},
							{
								'name':'app_translation - updatedAt',
								'value':'app_translation.updatedAt'
							},
							{
								'name':'category - active',
								'value':'category.active'
							},
							{
								'name':'category - afterCategoryId',
								'value':'category.afterCategoryId'
							},
							{
								'name':'category - afterCategoryVersionId',
								'value':'category.afterCategoryVersionId'
							},
							{
								'name':'category - autoIncrement',
								'value':'category.autoIncrement'
							},
							{
								'name':'category - breadcrumb',
								'value':'category.breadcrumb'
							},
							{
								'name':'category - childCount',
								'value':'category.childCount'
							},
							{
								'name':'category - cmsPageId',
								'value':'category.cmsPageId'
							},
							{
								'name':'category - createdAt',
								'value':'category.createdAt'
							},
							{
								'name':'category - customFields',
								'value':'category.customFields'
							},
							{
								'name':'category - description',
								'value':'category.description'
							},
							{
								'name':'category - displayNestedProducts',
								'value':'category.displayNestedProducts'
							},
							{
								'name':'category - externalLink',
								'value':'category.externalLink'
							},
							{
								'name':'category - id',
								'value':'category.id'
							},
							{
								'name':'category - keywords',
								'value':'category.keywords'
							},
							{
								'name':'category - level',
								'value':'category.level'
							},
							{
								'name':'category - mediaId',
								'value':'category.mediaId'
							},
							{
								'name':'category - metaDescription',
								'value':'category.metaDescription'
							},
							{
								'name':'category - metaTitle',
								'value':'category.metaTitle'
							},
							{
								'name':'category - name',
								'value':'category.name'
							},
							{
								'name':'category - parentId',
								'value':'category.parentId'
							},
							{
								'name':'category - parentVersionId',
								'value':'category.parentVersionId'
							},
							{
								'name':'category - path',
								'value':'category.path'
							},
							{
								'name':'category - productAssignmentType',
								'value':'category.productAssignmentType'
							},
							{
								'name':'category - productStreamId',
								'value':'category.productStreamId'
							},
							{
								'name':'category - slotConfig',
								'value':'category.slotConfig'
							},
							{
								'name':'category - translated',
								'value':'category.translated'
							},
							{
								'name':'category - type',
								'value':'category.type'
							},
							{
								'name':'category - updatedAt',
								'value':'category.updatedAt'
							},
							{
								'name':'category - versionId',
								'value':'category.versionId'
							},
							{
								'name':'category - visible',
								'value':'category.visible'
							},
							{
								'name':'category_tag - categoryId',
								'value':'category_tag.categoryId'
							},
							{
								'name':'category_tag - categoryVersionId',
								'value':'category_tag.categoryVersionId'
							},
							{
								'name':'category_tag - tagId',
								'value':'category_tag.tagId'
							},
							{
								'name':'category_translation - breadcrumb',
								'value':'category_translation.breadcrumb'
							},
							{
								'name':'category_translation - categoryId',
								'value':'category_translation.categoryId'
							},
							{
								'name':'category_translation - categoryVersionId',
								'value':'category_translation.categoryVersionId'
							},
							{
								'name':'category_translation - createdAt',
								'value':'category_translation.createdAt'
							},
							{
								'name':'category_translation - customFields',
								'value':'category_translation.customFields'
							},
							{
								'name':'category_translation - description',
								'value':'category_translation.description'
							},
							{
								'name':'category_translation - externalLink',
								'value':'category_translation.externalLink'
							},
							{
								'name':'category_translation - keywords',
								'value':'category_translation.keywords'
							},
							{
								'name':'category_translation - languageId',
								'value':'category_translation.languageId'
							},
							{
								'name':'category_translation - metaDescription',
								'value':'category_translation.metaDescription'
							},
							{
								'name':'category_translation - metaTitle',
								'value':'category_translation.metaTitle'
							},
							{
								'name':'category_translation - name',
								'value':'category_translation.name'
							},
							{
								'name':'category_translation - slotConfig',
								'value':'category_translation.slotConfig'
							},
							{
								'name':'category_translation - updatedAt',
								'value':'category_translation.updatedAt'
							},
							{
								'name':'cms_block - backgroundColor',
								'value':'cms_block.backgroundColor'
							},
							{
								'name':'cms_block - backgroundMediaId',
								'value':'cms_block.backgroundMediaId'
							},
							{
								'name':'cms_block - backgroundMediaMode',
								'value':'cms_block.backgroundMediaMode'
							},
							{
								'name':'cms_block - createdAt',
								'value':'cms_block.createdAt'
							},
							{
								'name':'cms_block - cssClass',
								'value':'cms_block.cssClass'
							},
							{
								'name':'cms_block - customFields',
								'value':'cms_block.customFields'
							},
							{
								'name':'cms_block - id',
								'value':'cms_block.id'
							},
							{
								'name':'cms_block - locked',
								'value':'cms_block.locked'
							},
							{
								'name':'cms_block - marginBottom',
								'value':'cms_block.marginBottom'
							},
							{
								'name':'cms_block - marginLeft',
								'value':'cms_block.marginLeft'
							},
							{
								'name':'cms_block - marginRight',
								'value':'cms_block.marginRight'
							},
							{
								'name':'cms_block - marginTop',
								'value':'cms_block.marginTop'
							},
							{
								'name':'cms_block - name',
								'value':'cms_block.name'
							},
							{
								'name':'cms_block - position',
								'value':'cms_block.position'
							},
							{
								'name':'cms_block - sectionId',
								'value':'cms_block.sectionId'
							},
							{
								'name':'cms_block - sectionPosition',
								'value':'cms_block.sectionPosition'
							},
							{
								'name':'cms_block - type',
								'value':'cms_block.type'
							},
							{
								'name':'cms_block - updatedAt',
								'value':'cms_block.updatedAt'
							},
							{
								'name':'cms_page - config',
								'value':'cms_page.config'
							},
							{
								'name':'cms_page - createdAt',
								'value':'cms_page.createdAt'
							},
							{
								'name':'cms_page - customFields',
								'value':'cms_page.customFields'
							},
							{
								'name':'cms_page - entity',
								'value':'cms_page.entity'
							},
							{
								'name':'cms_page - id',
								'value':'cms_page.id'
							},
							{
								'name':'cms_page - locked',
								'value':'cms_page.locked'
							},
							{
								'name':'cms_page - name',
								'value':'cms_page.name'
							},
							{
								'name':'cms_page - previewMediaId',
								'value':'cms_page.previewMediaId'
							},
							{
								'name':'cms_page - translated',
								'value':'cms_page.translated'
							},
							{
								'name':'cms_page - type',
								'value':'cms_page.type'
							},
							{
								'name':'cms_page - updatedAt',
								'value':'cms_page.updatedAt'
							},
							{
								'name':'cms_page_translation - cmsPageId',
								'value':'cms_page_translation.cmsPageId'
							},
							{
								'name':'cms_page_translation - createdAt',
								'value':'cms_page_translation.createdAt'
							},
							{
								'name':'cms_page_translation - customFields',
								'value':'cms_page_translation.customFields'
							},
							{
								'name':'cms_page_translation - languageId',
								'value':'cms_page_translation.languageId'
							},
							{
								'name':'cms_page_translation - name',
								'value':'cms_page_translation.name'
							},
							{
								'name':'cms_page_translation - updatedAt',
								'value':'cms_page_translation.updatedAt'
							},
							{
								'name':'cms_section - backgroundColor',
								'value':'cms_section.backgroundColor'
							},
							{
								'name':'cms_section - backgroundMediaId',
								'value':'cms_section.backgroundMediaId'
							},
							{
								'name':'cms_section - backgroundMediaMode',
								'value':'cms_section.backgroundMediaMode'
							},
							{
								'name':'cms_section - createdAt',
								'value':'cms_section.createdAt'
							},
							{
								'name':'cms_section - cssClass',
								'value':'cms_section.cssClass'
							},
							{
								'name':'cms_section - customFields',
								'value':'cms_section.customFields'
							},
							{
								'name':'cms_section - id',
								'value':'cms_section.id'
							},
							{
								'name':'cms_section - locked',
								'value':'cms_section.locked'
							},
							{
								'name':'cms_section - mobileBehavior',
								'value':'cms_section.mobileBehavior'
							},
							{
								'name':'cms_section - name',
								'value':'cms_section.name'
							},
							{
								'name':'cms_section - pageId',
								'value':'cms_section.pageId'
							},
							{
								'name':'cms_section - position',
								'value':'cms_section.position'
							},
							{
								'name':'cms_section - sizingMode',
								'value':'cms_section.sizingMode'
							},
							{
								'name':'cms_section - type',
								'value':'cms_section.type'
							},
							{
								'name':'cms_section - updatedAt',
								'value':'cms_section.updatedAt'
							},
							{
								'name':'cms_slot - blockId',
								'value':'cms_slot.blockId'
							},
							{
								'name':'cms_slot - config',
								'value':'cms_slot.config'
							},
							{
								'name':'cms_slot - createdAt',
								'value':'cms_slot.createdAt'
							},
							{
								'name':'cms_slot - customFields',
								'value':'cms_slot.customFields'
							},
							{
								'name':'cms_slot - data',
								'value':'cms_slot.data'
							},
							{
								'name':'cms_slot - id',
								'value':'cms_slot.id'
							},
							{
								'name':'cms_slot - locked',
								'value':'cms_slot.locked'
							},
							{
								'name':'cms_slot - slot',
								'value':'cms_slot.slot'
							},
							{
								'name':'cms_slot - translated',
								'value':'cms_slot.translated'
							},
							{
								'name':'cms_slot - type',
								'value':'cms_slot.type'
							},
							{
								'name':'cms_slot - updatedAt',
								'value':'cms_slot.updatedAt'
							},
							{
								'name':'cms_slot - versionId',
								'value':'cms_slot.versionId'
							},
							{
								'name':'cms_slot_translation - cmsSlotId',
								'value':'cms_slot_translation.cmsSlotId'
							},
							{
								'name':'cms_slot_translation - cmsSlotVersionId',
								'value':'cms_slot_translation.cmsSlotVersionId'
							},
							{
								'name':'cms_slot_translation - config',
								'value':'cms_slot_translation.config'
							},
							{
								'name':'cms_slot_translation - createdAt',
								'value':'cms_slot_translation.createdAt'
							},
							{
								'name':'cms_slot_translation - customFields',
								'value':'cms_slot_translation.customFields'
							},
							{
								'name':'cms_slot_translation - languageId',
								'value':'cms_slot_translation.languageId'
							},
							{
								'name':'cms_slot_translation - updatedAt',
								'value':'cms_slot_translation.updatedAt'
							},
							{
								'name':'country - active',
								'value':'country.active'
							},
							{
								'name':'country - createdAt',
								'value':'country.createdAt'
							},
							{
								'name':'country - customFields',
								'value':'country.customFields'
							},
							{
								'name':'country - displayStateInRegistration',
								'value':'country.displayStateInRegistration'
							},
							{
								'name':'country - forceStateInRegistration',
								'value':'country.forceStateInRegistration'
							},
							{
								'name':'country - id',
								'value':'country.id'
							},
							{
								'name':'country - iso',
								'value':'country.iso'
							},
							{
								'name':'country - iso3',
								'value':'country.iso3'
							},
							{
								'name':'country - name',
								'value':'country.name'
							},
							{
								'name':'country - position',
								'value':'country.position'
							},
							{
								'name':'country - shippingAvailable',
								'value':'country.shippingAvailable'
							},
							{
								'name':'country - taxFree',
								'value':'country.taxFree'
							},
							{
								'name':'country - translated',
								'value':'country.translated'
							},
							{
								'name':'country - updatedAt',
								'value':'country.updatedAt'
							},
							{
								'name':'country_state - active',
								'value':'country_state.active'
							},
							{
								'name':'country_state - countryId',
								'value':'country_state.countryId'
							},
							{
								'name':'country_state - createdAt',
								'value':'country_state.createdAt'
							},
							{
								'name':'country_state - customFields',
								'value':'country_state.customFields'
							},
							{
								'name':'country_state - id',
								'value':'country_state.id'
							},
							{
								'name':'country_state - name',
								'value':'country_state.name'
							},
							{
								'name':'country_state - position',
								'value':'country_state.position'
							},
							{
								'name':'country_state - shortCode',
								'value':'country_state.shortCode'
							},
							{
								'name':'country_state - translated',
								'value':'country_state.translated'
							},
							{
								'name':'country_state - updatedAt',
								'value':'country_state.updatedAt'
							},
							{
								'name':'country_state_translation - countryStateId',
								'value':'country_state_translation.countryStateId'
							},
							{
								'name':'country_state_translation - createdAt',
								'value':'country_state_translation.createdAt'
							},
							{
								'name':'country_state_translation - customFields',
								'value':'country_state_translation.customFields'
							},
							{
								'name':'country_state_translation - languageId',
								'value':'country_state_translation.languageId'
							},
							{
								'name':'country_state_translation - name',
								'value':'country_state_translation.name'
							},
							{
								'name':'country_state_translation - updatedAt',
								'value':'country_state_translation.updatedAt'
							},
							{
								'name':'country_translation - countryId',
								'value':'country_translation.countryId'
							},
							{
								'name':'country_translation - createdAt',
								'value':'country_translation.createdAt'
							},
							{
								'name':'country_translation - customFields',
								'value':'country_translation.customFields'
							},
							{
								'name':'country_translation - languageId',
								'value':'country_translation.languageId'
							},
							{
								'name':'country_translation - name',
								'value':'country_translation.name'
							},
							{
								'name':'country_translation - updatedAt',
								'value':'country_translation.updatedAt'
							},
							{
								'name':'currency - createdAt',
								'value':'currency.createdAt'
							},
							{
								'name':'currency - customFields',
								'value':'currency.customFields'
							},
							{
								'name':'currency - decimalPrecision',
								'value':'currency.decimalPrecision'
							},
							{
								'name':'currency - factor',
								'value':'currency.factor'
							},
							{
								'name':'currency - id',
								'value':'currency.id'
							},
							{
								'name':'currency - isSystemDefault',
								'value':'currency.isSystemDefault'
							},
							{
								'name':'currency - isoCode',
								'value':'currency.isoCode'
							},
							{
								'name':'currency - name',
								'value':'currency.name'
							},
							{
								'name':'currency - position',
								'value':'currency.position'
							},
							{
								'name':'currency - shortName',
								'value':'currency.shortName'
							},
							{
								'name':'currency - symbol',
								'value':'currency.symbol'
							},
							{
								'name':'currency - translated',
								'value':'currency.translated'
							},
							{
								'name':'currency - updatedAt',
								'value':'currency.updatedAt'
							},
							{
								'name':'currency_translation - createdAt',
								'value':'currency_translation.createdAt'
							},
							{
								'name':'currency_translation - currencyId',
								'value':'currency_translation.currencyId'
							},
							{
								'name':'currency_translation - customFields',
								'value':'currency_translation.customFields'
							},
							{
								'name':'currency_translation - languageId',
								'value':'currency_translation.languageId'
							},
							{
								'name':'currency_translation - name',
								'value':'currency_translation.name'
							},
							{
								'name':'currency_translation - shortName',
								'value':'currency_translation.shortName'
							},
							{
								'name':'currency_translation - updatedAt',
								'value':'currency_translation.updatedAt'
							},
							{
								'name':'custom_field - active',
								'value':'custom_field.active'
							},
							{
								'name':'custom_field - config',
								'value':'custom_field.config'
							},
							{
								'name':'custom_field - createdAt',
								'value':'custom_field.createdAt'
							},
							{
								'name':'custom_field - customFieldSetId',
								'value':'custom_field.customFieldSetId'
							},
							{
								'name':'custom_field - id',
								'value':'custom_field.id'
							},
							{
								'name':'custom_field - name',
								'value':'custom_field.name'
							},
							{
								'name':'custom_field - type',
								'value':'custom_field.type'
							},
							{
								'name':'custom_field - updatedAt',
								'value':'custom_field.updatedAt'
							},
							{
								'name':'custom_field_set - active',
								'value':'custom_field_set.active'
							},
							{
								'name':'custom_field_set - appId',
								'value':'custom_field_set.appId'
							},
							{
								'name':'custom_field_set - config',
								'value':'custom_field_set.config'
							},
							{
								'name':'custom_field_set - createdAt',
								'value':'custom_field_set.createdAt'
							},
							{
								'name':'custom_field_set - global',
								'value':'custom_field_set.global'
							},
							{
								'name':'custom_field_set - id',
								'value':'custom_field_set.id'
							},
							{
								'name':'custom_field_set - name',
								'value':'custom_field_set.name'
							},
							{
								'name':'custom_field_set - position',
								'value':'custom_field_set.position'
							},
							{
								'name':'custom_field_set - updatedAt',
								'value':'custom_field_set.updatedAt'
							},
							{
								'name':'custom_field_set_relation - createdAt',
								'value':'custom_field_set_relation.createdAt'
							},
							{
								'name':'custom_field_set_relation - customFieldSetId',
								'value':'custom_field_set_relation.customFieldSetId'
							},
							{
								'name':'custom_field_set_relation - entityName',
								'value':'custom_field_set_relation.entityName'
							},
							{
								'name':'custom_field_set_relation - id',
								'value':'custom_field_set_relation.id'
							},
							{
								'name':'custom_field_set_relation - updatedAt',
								'value':'custom_field_set_relation.updatedAt'
							},
							{
								'name':'customer - active',
								'value':'customer.active'
							},
							{
								'name':'customer - affiliateCode',
								'value':'customer.affiliateCode'
							},
							{
								'name':'customer - autoIncrement',
								'value':'customer.autoIncrement'
							},
							{
								'name':'customer - birthday',
								'value':'customer.birthday'
							},
							{
								'name':'customer - campaignCode',
								'value':'customer.campaignCode'
							},
							{
								'name':'customer - company',
								'value':'customer.company'
							},
							{
								'name':'customer - createdAt',
								'value':'customer.createdAt'
							},
							{
								'name':'customer - customFields',
								'value':'customer.customFields'
							},
							{
								'name':'customer - customerNumber',
								'value':'customer.customerNumber'
							},
							{
								'name':'customer - defaultBillingAddressId',
								'value':'customer.defaultBillingAddressId'
							},
							{
								'name':'customer - defaultPaymentMethodId',
								'value':'customer.defaultPaymentMethodId'
							},
							{
								'name':'customer - defaultShippingAddressId',
								'value':'customer.defaultShippingAddressId'
							},
							{
								'name':'customer - doubleOptInConfirmDate',
								'value':'customer.doubleOptInConfirmDate'
							},
							{
								'name':'customer - doubleOptInEmailSentDate',
								'value':'customer.doubleOptInEmailSentDate'
							},
							{
								'name':'customer - doubleOptInRegistration',
								'value':'customer.doubleOptInRegistration'
							},
							{
								'name':'customer - email',
								'value':'customer.email'
							},
							{
								'name':'customer - firstLogin',
								'value':'customer.firstLogin'
							},
							{
								'name':'customer - firstName',
								'value':'customer.firstName'
							},
							{
								'name':'customer - groupId',
								'value':'customer.groupId'
							},
							{
								'name':'customer - guest',
								'value':'customer.guest'
							},
							{
								'name':'customer - hash',
								'value':'customer.hash'
							},
							{
								'name':'customer - id',
								'value':'customer.id'
							},
							{
								'name':'customer - languageId',
								'value':'customer.languageId'
							},
							{
								'name':'customer - lastLogin',
								'value':'customer.lastLogin'
							},
							{
								'name':'customer - lastName',
								'value':'customer.lastName'
							},
							{
								'name':'customer - lastOrderDate',
								'value':'customer.lastOrderDate'
							},
							{
								'name':'customer - lastPaymentMethodId',
								'value':'customer.lastPaymentMethodId'
							},
							{
								'name':'customer - legacyEncoder',
								'value':'customer.legacyEncoder'
							},
							{
								'name':'customer - legacyPassword',
								'value':'customer.legacyPassword'
							},
							{
								'name':'customer - newsletter',
								'value':'customer.newsletter'
							},
							{
								'name':'customer - orderCount',
								'value':'customer.orderCount'
							},
							{
								'name':'customer - password',
								'value':'customer.password'
							},
							{
								'name':'customer - remoteAddress',
								'value':'customer.remoteAddress'
							},
							{
								'name':'customer - requestedGroupId',
								'value':'customer.requestedGroupId'
							},
							{
								'name':'customer - salesChannelId',
								'value':'customer.salesChannelId'
							},
							{
								'name':'customer - salutationId',
								'value':'customer.salutationId'
							},
							{
								'name':'customer - tagIds',
								'value':'customer.tagIds'
							},
							{
								'name':'customer - title',
								'value':'customer.title'
							},
							{
								'name':'customer - updatedAt',
								'value':'customer.updatedAt'
							},
							{
								'name':'customer_address - additionalAddressLine1',
								'value':'customer_address.additionalAddressLine1'
							},
							{
								'name':'customer_address - additionalAddressLine2',
								'value':'customer_address.additionalAddressLine2'
							},
							{
								'name':'customer_address - city',
								'value':'customer_address.city'
							},
							{
								'name':'customer_address - company',
								'value':'customer_address.company'
							},
							{
								'name':'customer_address - countryId',
								'value':'customer_address.countryId'
							},
							{
								'name':'customer_address - countryStateId',
								'value':'customer_address.countryStateId'
							},
							{
								'name':'customer_address - createdAt',
								'value':'customer_address.createdAt'
							},
							{
								'name':'customer_address - customFields',
								'value':'customer_address.customFields'
							},
							{
								'name':'customer_address - customerId',
								'value':'customer_address.customerId'
							},
							{
								'name':'customer_address - department',
								'value':'customer_address.department'
							},
							{
								'name':'customer_address - firstName',
								'value':'customer_address.firstName'
							},
							{
								'name':'customer_address - id',
								'value':'customer_address.id'
							},
							{
								'name':'customer_address - lastName',
								'value':'customer_address.lastName'
							},
							{
								'name':'customer_address - phoneNumber',
								'value':'customer_address.phoneNumber'
							},
							{
								'name':'customer_address - salutationId',
								'value':'customer_address.salutationId'
							},
							{
								'name':'customer_address - street',
								'value':'customer_address.street'
							},
							{
								'name':'customer_address - title',
								'value':'customer_address.title'
							},
							{
								'name':'customer_address - updatedAt',
								'value':'customer_address.updatedAt'
							},
							{
								'name':'customer_address - vatId',
								'value':'customer_address.vatId'
							},
							{
								'name':'customer_address - zipcode',
								'value':'customer_address.zipcode'
							},
							{
								'name':'customer_group - createdAt',
								'value':'customer_group.createdAt'
							},
							{
								'name':'customer_group - customFields',
								'value':'customer_group.customFields'
							},
							{
								'name':'customer_group - displayGross',
								'value':'customer_group.displayGross'
							},
							{
								'name':'customer_group - id',
								'value':'customer_group.id'
							},
							{
								'name':'customer_group - name',
								'value':'customer_group.name'
							},
							{
								'name':'customer_group - registrationActive',
								'value':'customer_group.registrationActive'
							},
							{
								'name':'customer_group - registrationIntroduction',
								'value':'customer_group.registrationIntroduction'
							},
							{
								'name':'customer_group - registrationOnlyCompanyRegistration',
								'value':'customer_group.registrationOnlyCompanyRegistration'
							},
							{
								'name':'customer_group - registrationSeoMetaDescription',
								'value':'customer_group.registrationSeoMetaDescription'
							},
							{
								'name':'customer_group - registrationTitle',
								'value':'customer_group.registrationTitle'
							},
							{
								'name':'customer_group - translated',
								'value':'customer_group.translated'
							},
							{
								'name':'customer_group - updatedAt',
								'value':'customer_group.updatedAt'
							},
							{
								'name':'customer_group_registration_sales_channels - createdAt',
								'value':'customer_group_registration_sales_channels.createdAt'
							},
							{
								'name':'customer_group_registration_sales_channels - customerGroupId',
								'value':'customer_group_registration_sales_channels.customerGroupId'
							},
							{
								'name':'customer_group_registration_sales_channels - salesChannelId',
								'value':'customer_group_registration_sales_channels.salesChannelId'
							},
							{
								'name':'customer_group_translation - createdAt',
								'value':'customer_group_translation.createdAt'
							},
							{
								'name':'customer_group_translation - customFields',
								'value':'customer_group_translation.customFields'
							},
							{
								'name':'customer_group_translation - customerGroupId',
								'value':'customer_group_translation.customerGroupId'
							},
							{
								'name':'customer_group_translation - languageId',
								'value':'customer_group_translation.languageId'
							},
							{
								'name':'customer_group_translation - name',
								'value':'customer_group_translation.name'
							},
							{
								'name':'customer_group_translation - registrationIntroduction',
								'value':'customer_group_translation.registrationIntroduction'
							},
							{
								'name':'customer_group_translation - registrationOnlyCompanyRegistration',
								'value':'customer_group_translation.registrationOnlyCompanyRegistration'
							},
							{
								'name':'customer_group_translation - registrationSeoMetaDescription',
								'value':'customer_group_translation.registrationSeoMetaDescription'
							},
							{
								'name':'customer_group_translation - registrationTitle',
								'value':'customer_group_translation.registrationTitle'
							},
							{
								'name':'customer_group_translation - updatedAt',
								'value':'customer_group_translation.updatedAt'
							},
							{
								'name':'customer_recovery - createdAt',
								'value':'customer_recovery.createdAt'
							},
							{
								'name':'customer_recovery - customerId',
								'value':'customer_recovery.customerId'
							},
							{
								'name':'customer_recovery - hash',
								'value':'customer_recovery.hash'
							},
							{
								'name':'customer_recovery - id',
								'value':'customer_recovery.id'
							},
							{
								'name':'customer_recovery - updatedAt',
								'value':'customer_recovery.updatedAt'
							},
							{
								'name':'customer_tag - customerId',
								'value':'customer_tag.customerId'
							},
							{
								'name':'customer_tag - tagId',
								'value':'customer_tag.tagId'
							},
							{
								'name':'dead_message - createdAt',
								'value':'dead_message.createdAt'
							},
							{
								'name':'dead_message - encrypted',
								'value':'dead_message.encrypted'
							},
							{
								'name':'dead_message - errorCount',
								'value':'dead_message.errorCount'
							},
							{
								'name':'dead_message - exception',
								'value':'dead_message.exception'
							},
							{
								'name':'dead_message - exceptionFile',
								'value':'dead_message.exceptionFile'
							},
							{
								'name':'dead_message - exceptionLine',
								'value':'dead_message.exceptionLine'
							},
							{
								'name':'dead_message - exceptionMessage',
								'value':'dead_message.exceptionMessage'
							},
							{
								'name':'dead_message - handlerClass',
								'value':'dead_message.handlerClass'
							},
							{
								'name':'dead_message - id',
								'value':'dead_message.id'
							},
							{
								'name':'dead_message - nextExecutionTime',
								'value':'dead_message.nextExecutionTime'
							},
							{
								'name':'dead_message - originalMessageClass',
								'value':'dead_message.originalMessageClass'
							},
							{
								'name':'dead_message - scheduledTaskId',
								'value':'dead_message.scheduledTaskId'
							},
							{
								'name':'dead_message - serializedOriginalMessage',
								'value':'dead_message.serializedOriginalMessage'
							},
							{
								'name':'dead_message - updatedAt',
								'value':'dead_message.updatedAt'
							},
							{
								'name':'delivery_time - createdAt',
								'value':'delivery_time.createdAt'
							},
							{
								'name':'delivery_time - customFields',
								'value':'delivery_time.customFields'
							},
							{
								'name':'delivery_time - id',
								'value':'delivery_time.id'
							},
							{
								'name':'delivery_time - max',
								'value':'delivery_time.max'
							},
							{
								'name':'delivery_time - min',
								'value':'delivery_time.min'
							},
							{
								'name':'delivery_time - name',
								'value':'delivery_time.name'
							},
							{
								'name':'delivery_time - translated',
								'value':'delivery_time.translated'
							},
							{
								'name':'delivery_time - unit',
								'value':'delivery_time.unit'
							},
							{
								'name':'delivery_time - updatedAt',
								'value':'delivery_time.updatedAt'
							},
							{
								'name':'delivery_time_translation - createdAt',
								'value':'delivery_time_translation.createdAt'
							},
							{
								'name':'delivery_time_translation - customFields',
								'value':'delivery_time_translation.customFields'
							},
							{
								'name':'delivery_time_translation - deliveryTimeId',
								'value':'delivery_time_translation.deliveryTimeId'
							},
							{
								'name':'delivery_time_translation - languageId',
								'value':'delivery_time_translation.languageId'
							},
							{
								'name':'delivery_time_translation - name',
								'value':'delivery_time_translation.name'
							},
							{
								'name':'delivery_time_translation - updatedAt',
								'value':'delivery_time_translation.updatedAt'
							},
							{
								'name':'document - config',
								'value':'document.config'
							},
							{
								'name':'document - createdAt',
								'value':'document.createdAt'
							},
							{
								'name':'document - customFields',
								'value':'document.customFields'
							},
							{
								'name':'document - deepLinkCode',
								'value':'document.deepLinkCode'
							},
							{
								'name':'document - documentMediaFileId',
								'value':'document.documentMediaFileId'
							},
							{
								'name':'document - documentTypeId',
								'value':'document.documentTypeId'
							},
							{
								'name':'document - fileType',
								'value':'document.fileType'
							},
							{
								'name':'document - id',
								'value':'document.id'
							},
							{
								'name':'document - orderId',
								'value':'document.orderId'
							},
							{
								'name':'document - orderVersionId',
								'value':'document.orderVersionId'
							},
							{
								'name':'document - referencedDocumentId',
								'value':'document.referencedDocumentId'
							},
							{
								'name':'document - sent',
								'value':'document.sent'
							},
							{
								'name':'document - static',
								'value':'document.static'
							},
							{
								'name':'document - updatedAt',
								'value':'document.updatedAt'
							},
							{
								'name':'document_base_config - config',
								'value':'document_base_config.config'
							},
							{
								'name':'document_base_config - createdAt',
								'value':'document_base_config.createdAt'
							},
							{
								'name':'document_base_config - documentNumber',
								'value':'document_base_config.documentNumber'
							},
							{
								'name':'document_base_config - documentTypeId',
								'value':'document_base_config.documentTypeId'
							},
							{
								'name':'document_base_config - filenamePrefix',
								'value':'document_base_config.filenamePrefix'
							},
							{
								'name':'document_base_config - filenameSuffix',
								'value':'document_base_config.filenameSuffix'
							},
							{
								'name':'document_base_config - global',
								'value':'document_base_config.global'
							},
							{
								'name':'document_base_config - id',
								'value':'document_base_config.id'
							},
							{
								'name':'document_base_config - logoId',
								'value':'document_base_config.logoId'
							},
							{
								'name':'document_base_config - name',
								'value':'document_base_config.name'
							},
							{
								'name':'document_base_config - updatedAt',
								'value':'document_base_config.updatedAt'
							},
							{
								'name':'document_base_config_sales_channel - createdAt',
								'value':'document_base_config_sales_channel.createdAt'
							},
							{
								'name':'document_base_config_sales_channel - documentBaseConfigId',
								'value':'document_base_config_sales_channel.documentBaseConfigId'
							},
							{
								'name':'document_base_config_sales_channel - documentTypeId',
								'value':'document_base_config_sales_channel.documentTypeId'
							},
							{
								'name':'document_base_config_sales_channel - id',
								'value':'document_base_config_sales_channel.id'
							},
							{
								'name':'document_base_config_sales_channel - salesChannelId',
								'value':'document_base_config_sales_channel.salesChannelId'
							},
							{
								'name':'document_base_config_sales_channel - updatedAt',
								'value':'document_base_config_sales_channel.updatedAt'
							},
							{
								'name':'document_type - createdAt',
								'value':'document_type.createdAt'
							},
							{
								'name':'document_type - customFields',
								'value':'document_type.customFields'
							},
							{
								'name':'document_type - id',
								'value':'document_type.id'
							},
							{
								'name':'document_type - name',
								'value':'document_type.name'
							},
							{
								'name':'document_type - technicalName',
								'value':'document_type.technicalName'
							},
							{
								'name':'document_type - translated',
								'value':'document_type.translated'
							},
							{
								'name':'document_type - updatedAt',
								'value':'document_type.updatedAt'
							},
							{
								'name':'document_type_translation - createdAt',
								'value':'document_type_translation.createdAt'
							},
							{
								'name':'document_type_translation - customFields',
								'value':'document_type_translation.customFields'
							},
							{
								'name':'document_type_translation - documentTypeId',
								'value':'document_type_translation.documentTypeId'
							},
							{
								'name':'document_type_translation - languageId',
								'value':'document_type_translation.languageId'
							},
							{
								'name':'document_type_translation - name',
								'value':'document_type_translation.name'
							},
							{
								'name':'document_type_translation - updatedAt',
								'value':'document_type_translation.updatedAt'
							},
							{
								'name':'event_action - actionName',
								'value':'event_action.actionName'
							},
							{
								'name':'event_action - active',
								'value':'event_action.active'
							},
							{
								'name':'event_action - config',
								'value':'event_action.config'
							},
							{
								'name':'event_action - createdAt',
								'value':'event_action.createdAt'
							},
							{
								'name':'event_action - eventName',
								'value':'event_action.eventName'
							},
							{
								'name':'event_action - id',
								'value':'event_action.id'
							},
							{
								'name':'event_action - title',
								'value':'event_action.title'
							},
							{
								'name':'event_action - updatedAt',
								'value':'event_action.updatedAt'
							},
							{
								'name':'event_action_rule - eventActionId',
								'value':'event_action_rule.eventActionId'
							},
							{
								'name':'event_action_rule - ruleId',
								'value':'event_action_rule.ruleId'
							},
							{
								'name':'event_action_sales_channel - eventActionId',
								'value':'event_action_sales_channel.eventActionId'
							},
							{
								'name':'event_action_sales_channel - salesChannelId',
								'value':'event_action_sales_channel.salesChannelId'
							},
							{
								'name':'import_export_file - accessToken',
								'value':'import_export_file.accessToken'
							},
							{
								'name':'import_export_file - createdAt',
								'value':'import_export_file.createdAt'
							},
							{
								'name':'import_export_file - expireDate',
								'value':'import_export_file.expireDate'
							},
							{
								'name':'import_export_file - id',
								'value':'import_export_file.id'
							},
							{
								'name':'import_export_file - originalName',
								'value':'import_export_file.originalName'
							},
							{
								'name':'import_export_file - path',
								'value':'import_export_file.path'
							},
							{
								'name':'import_export_file - size',
								'value':'import_export_file.size'
							},
							{
								'name':'import_export_file - updatedAt',
								'value':'import_export_file.updatedAt'
							},
							{
								'name':'import_export_log - activity',
								'value':'import_export_log.activity'
							},
							{
								'name':'import_export_log - config',
								'value':'import_export_log.config'
							},
							{
								'name':'import_export_log - createdAt',
								'value':'import_export_log.createdAt'
							},
							{
								'name':'import_export_log - fileId',
								'value':'import_export_log.fileId'
							},
							{
								'name':'import_export_log - id',
								'value':'import_export_log.id'
							},
							{
								'name':'import_export_log - invalidRecordsLogId',
								'value':'import_export_log.invalidRecordsLogId'
							},
							{
								'name':'import_export_log - profileId',
								'value':'import_export_log.profileId'
							},
							{
								'name':'import_export_log - profileName',
								'value':'import_export_log.profileName'
							},
							{
								'name':'import_export_log - records',
								'value':'import_export_log.records'
							},
							{
								'name':'import_export_log - state',
								'value':'import_export_log.state'
							},
							{
								'name':'import_export_log - updatedAt',
								'value':'import_export_log.updatedAt'
							},
							{
								'name':'import_export_log - userId',
								'value':'import_export_log.userId'
							},
							{
								'name':'import_export_log - username',
								'value':'import_export_log.username'
							},
							{
								'name':'import_export_profile - config',
								'value':'import_export_profile.config'
							},
							{
								'name':'import_export_profile - createdAt',
								'value':'import_export_profile.createdAt'
							},
							{
								'name':'import_export_profile - delimiter',
								'value':'import_export_profile.delimiter'
							},
							{
								'name':'import_export_profile - enclosure',
								'value':'import_export_profile.enclosure'
							},
							{
								'name':'import_export_profile - fileType',
								'value':'import_export_profile.fileType'
							},
							{
								'name':'import_export_profile - id',
								'value':'import_export_profile.id'
							},
							{
								'name':'import_export_profile - label',
								'value':'import_export_profile.label'
							},
							{
								'name':'import_export_profile - mapping',
								'value':'import_export_profile.mapping'
							},
							{
								'name':'import_export_profile - name',
								'value':'import_export_profile.name'
							},
							{
								'name':'import_export_profile - sourceEntity',
								'value':'import_export_profile.sourceEntity'
							},
							{
								'name':'import_export_profile - systemDefault',
								'value':'import_export_profile.systemDefault'
							},
							{
								'name':'import_export_profile - translated',
								'value':'import_export_profile.translated'
							},
							{
								'name':'import_export_profile - updatedAt',
								'value':'import_export_profile.updatedAt'
							},
							{
								'name':'import_export_profile_translation - createdAt',
								'value':'import_export_profile_translation.createdAt'
							},
							{
								'name':'import_export_profile_translation - importExportProfileId',
								'value':'import_export_profile_translation.importExportProfileId'
							},
							{
								'name':'import_export_profile_translation - label',
								'value':'import_export_profile_translation.label'
							},
							{
								'name':'import_export_profile_translation - languageId',
								'value':'import_export_profile_translation.languageId'
							},
							{
								'name':'import_export_profile_translation - updatedAt',
								'value':'import_export_profile_translation.updatedAt'
							},
							{
								'name':'integration - accessKey',
								'value':'integration.accessKey'
							},
							{
								'name':'integration - admin',
								'value':'integration.admin'
							},
							{
								'name':'integration - createdAt',
								'value':'integration.createdAt'
							},
							{
								'name':'integration - customFields',
								'value':'integration.customFields'
							},
							{
								'name':'integration - id',
								'value':'integration.id'
							},
							{
								'name':'integration - label',
								'value':'integration.label'
							},
							{
								'name':'integration - lastUsageAt',
								'value':'integration.lastUsageAt'
							},
							{
								'name':'integration - secretAccessKey',
								'value':'integration.secretAccessKey'
							},
							{
								'name':'integration - updatedAt',
								'value':'integration.updatedAt'
							},
							{
								'name':'integration - writeAccess',
								'value':'integration.writeAccess'
							},
							{
								'name':'integration_role - aclRoleId',
								'value':'integration_role.aclRoleId'
							},
							{
								'name':'integration_role - integrationId',
								'value':'integration_role.integrationId'
							},
							{
								'name':'language - createdAt',
								'value':'language.createdAt'
							},
							{
								'name':'language - customFields',
								'value':'language.customFields'
							},
							{
								'name':'language - id',
								'value':'language.id'
							},
							{
								'name':'language - localeId',
								'value':'language.localeId'
							},
							{
								'name':'language - name',
								'value':'language.name'
							},
							{
								'name':'language - parentId',
								'value':'language.parentId'
							},
							{
								'name':'language - translationCodeId',
								'value':'language.translationCodeId'
							},
							{
								'name':'language - updatedAt',
								'value':'language.updatedAt'
							},
							{
								'name':'locale - code',
								'value':'locale.code'
							},
							{
								'name':'locale - createdAt',
								'value':'locale.createdAt'
							},
							{
								'name':'locale - customFields',
								'value':'locale.customFields'
							},
							{
								'name':'locale - id',
								'value':'locale.id'
							},
							{
								'name':'locale - name',
								'value':'locale.name'
							},
							{
								'name':'locale - territory',
								'value':'locale.territory'
							},
							{
								'name':'locale - translated',
								'value':'locale.translated'
							},
							{
								'name':'locale - updatedAt',
								'value':'locale.updatedAt'
							},
							{
								'name':'locale_translation - createdAt',
								'value':'locale_translation.createdAt'
							},
							{
								'name':'locale_translation - customFields',
								'value':'locale_translation.customFields'
							},
							{
								'name':'locale_translation - languageId',
								'value':'locale_translation.languageId'
							},
							{
								'name':'locale_translation - localeId',
								'value':'locale_translation.localeId'
							},
							{
								'name':'locale_translation - name',
								'value':'locale_translation.name'
							},
							{
								'name':'locale_translation - territory',
								'value':'locale_translation.territory'
							},
							{
								'name':'locale_translation - updatedAt',
								'value':'locale_translation.updatedAt'
							},
							{
								'name':'log_entry - channel',
								'value':'log_entry.channel'
							},
							{
								'name':'log_entry - context',
								'value':'log_entry.context'
							},
							{
								'name':'log_entry - createdAt',
								'value':'log_entry.createdAt'
							},
							{
								'name':'log_entry - extra',
								'value':'log_entry.extra'
							},
							{
								'name':'log_entry - id',
								'value':'log_entry.id'
							},
							{
								'name':'log_entry - level',
								'value':'log_entry.level'
							},
							{
								'name':'log_entry - message',
								'value':'log_entry.message'
							},
							{
								'name':'log_entry - updatedAt',
								'value':'log_entry.updatedAt'
							},
							{
								'name':'mail_header_footer - createdAt',
								'value':'mail_header_footer.createdAt'
							},
							{
								'name':'mail_header_footer - description',
								'value':'mail_header_footer.description'
							},
							{
								'name':'mail_header_footer - footerHtml',
								'value':'mail_header_footer.footerHtml'
							},
							{
								'name':'mail_header_footer - footerPlain',
								'value':'mail_header_footer.footerPlain'
							},
							{
								'name':'mail_header_footer - headerHtml',
								'value':'mail_header_footer.headerHtml'
							},
							{
								'name':'mail_header_footer - headerPlain',
								'value':'mail_header_footer.headerPlain'
							},
							{
								'name':'mail_header_footer - id',
								'value':'mail_header_footer.id'
							},
							{
								'name':'mail_header_footer - name',
								'value':'mail_header_footer.name'
							},
							{
								'name':'mail_header_footer - systemDefault',
								'value':'mail_header_footer.systemDefault'
							},
							{
								'name':'mail_header_footer - translated',
								'value':'mail_header_footer.translated'
							},
							{
								'name':'mail_header_footer - updatedAt',
								'value':'mail_header_footer.updatedAt'
							},
							{
								'name':'mail_header_footer_translation - createdAt',
								'value':'mail_header_footer_translation.createdAt'
							},
							{
								'name':'mail_header_footer_translation - description',
								'value':'mail_header_footer_translation.description'
							},
							{
								'name':'mail_header_footer_translation - footerHtml',
								'value':'mail_header_footer_translation.footerHtml'
							},
							{
								'name':'mail_header_footer_translation - footerPlain',
								'value':'mail_header_footer_translation.footerPlain'
							},
							{
								'name':'mail_header_footer_translation - headerHtml',
								'value':'mail_header_footer_translation.headerHtml'
							},
							{
								'name':'mail_header_footer_translation - headerPlain',
								'value':'mail_header_footer_translation.headerPlain'
							},
							{
								'name':'mail_header_footer_translation - languageId',
								'value':'mail_header_footer_translation.languageId'
							},
							{
								'name':'mail_header_footer_translation - mailHeaderFooterId',
								'value':'mail_header_footer_translation.mailHeaderFooterId'
							},
							{
								'name':'mail_header_footer_translation - name',
								'value':'mail_header_footer_translation.name'
							},
							{
								'name':'mail_header_footer_translation - updatedAt',
								'value':'mail_header_footer_translation.updatedAt'
							},
							{
								'name':'mail_template - contentHtml',
								'value':'mail_template.contentHtml'
							},
							{
								'name':'mail_template - contentPlain',
								'value':'mail_template.contentPlain'
							},
							{
								'name':'mail_template - createdAt',
								'value':'mail_template.createdAt'
							},
							{
								'name':'mail_template - customFields',
								'value':'mail_template.customFields'
							},
							{
								'name':'mail_template - description',
								'value':'mail_template.description'
							},
							{
								'name':'mail_template - id',
								'value':'mail_template.id'
							},
							{
								'name':'mail_template - mailTemplateTypeId',
								'value':'mail_template.mailTemplateTypeId'
							},
							{
								'name':'mail_template - senderName',
								'value':'mail_template.senderName'
							},
							{
								'name':'mail_template - subject',
								'value':'mail_template.subject'
							},
							{
								'name':'mail_template - systemDefault',
								'value':'mail_template.systemDefault'
							},
							{
								'name':'mail_template - translated',
								'value':'mail_template.translated'
							},
							{
								'name':'mail_template - updatedAt',
								'value':'mail_template.updatedAt'
							},
							{
								'name':'mail_template_media - id',
								'value':'mail_template_media.id'
							},
							{
								'name':'mail_template_media - languageId',
								'value':'mail_template_media.languageId'
							},
							{
								'name':'mail_template_media - mailTemplateId',
								'value':'mail_template_media.mailTemplateId'
							},
							{
								'name':'mail_template_media - mediaId',
								'value':'mail_template_media.mediaId'
							},
							{
								'name':'mail_template_media - position',
								'value':'mail_template_media.position'
							},
							{
								'name':'mail_template_sales_channel - createdAt',
								'value':'mail_template_sales_channel.createdAt'
							},
							{
								'name':'mail_template_sales_channel - id',
								'value':'mail_template_sales_channel.id'
							},
							{
								'name':'mail_template_sales_channel - mailTemplateId',
								'value':'mail_template_sales_channel.mailTemplateId'
							},
							{
								'name':'mail_template_sales_channel - mailTemplateTypeId',
								'value':'mail_template_sales_channel.mailTemplateTypeId'
							},
							{
								'name':'mail_template_sales_channel - salesChannelId',
								'value':'mail_template_sales_channel.salesChannelId'
							},
							{
								'name':'mail_template_sales_channel - updatedAt',
								'value':'mail_template_sales_channel.updatedAt'
							},
							{
								'name':'mail_template_translation - contentHtml',
								'value':'mail_template_translation.contentHtml'
							},
							{
								'name':'mail_template_translation - contentPlain',
								'value':'mail_template_translation.contentPlain'
							},
							{
								'name':'mail_template_translation - createdAt',
								'value':'mail_template_translation.createdAt'
							},
							{
								'name':'mail_template_translation - customFields',
								'value':'mail_template_translation.customFields'
							},
							{
								'name':'mail_template_translation - description',
								'value':'mail_template_translation.description'
							},
							{
								'name':'mail_template_translation - languageId',
								'value':'mail_template_translation.languageId'
							},
							{
								'name':'mail_template_translation - mailTemplateId',
								'value':'mail_template_translation.mailTemplateId'
							},
							{
								'name':'mail_template_translation - senderName',
								'value':'mail_template_translation.senderName'
							},
							{
								'name':'mail_template_translation - subject',
								'value':'mail_template_translation.subject'
							},
							{
								'name':'mail_template_translation - updatedAt',
								'value':'mail_template_translation.updatedAt'
							},
							{
								'name':'mail_template_type - availableEntities',
								'value':'mail_template_type.availableEntities'
							},
							{
								'name':'mail_template_type - createdAt',
								'value':'mail_template_type.createdAt'
							},
							{
								'name':'mail_template_type - customFields',
								'value':'mail_template_type.customFields'
							},
							{
								'name':'mail_template_type - id',
								'value':'mail_template_type.id'
							},
							{
								'name':'mail_template_type - name',
								'value':'mail_template_type.name'
							},
							{
								'name':'mail_template_type - technicalName',
								'value':'mail_template_type.technicalName'
							},
							{
								'name':'mail_template_type - translated',
								'value':'mail_template_type.translated'
							},
							{
								'name':'mail_template_type - updatedAt',
								'value':'mail_template_type.updatedAt'
							},
							{
								'name':'mail_template_type_translation - createdAt',
								'value':'mail_template_type_translation.createdAt'
							},
							{
								'name':'mail_template_type_translation - customFields',
								'value':'mail_template_type_translation.customFields'
							},
							{
								'name':'mail_template_type_translation - languageId',
								'value':'mail_template_type_translation.languageId'
							},
							{
								'name':'mail_template_type_translation - mailTemplateTypeId',
								'value':'mail_template_type_translation.mailTemplateTypeId'
							},
							{
								'name':'mail_template_type_translation - name',
								'value':'mail_template_type_translation.name'
							},
							{
								'name':'mail_template_type_translation - updatedAt',
								'value':'mail_template_type_translation.updatedAt'
							},
							{
								'name':'main_category - categoryId',
								'value':'main_category.categoryId'
							},
							{
								'name':'main_category - categoryVersionId',
								'value':'main_category.categoryVersionId'
							},
							{
								'name':'main_category - createdAt',
								'value':'main_category.createdAt'
							},
							{
								'name':'main_category - id',
								'value':'main_category.id'
							},
							{
								'name':'main_category - productId',
								'value':'main_category.productId'
							},
							{
								'name':'main_category - productVersionId',
								'value':'main_category.productVersionId'
							},
							{
								'name':'main_category - salesChannelId',
								'value':'main_category.salesChannelId'
							},
							{
								'name':'main_category - updatedAt',
								'value':'main_category.updatedAt'
							},
							{
								'name':'media - alt',
								'value':'media.alt'
							},
							{
								'name':'media - createdAt',
								'value':'media.createdAt'
							},
							{
								'name':'media - customFields',
								'value':'media.customFields'
							},
							{
								'name':'media - fileExtension',
								'value':'media.fileExtension'
							},
							{
								'name':'media - fileName',
								'value':'media.fileName'
							},
							{
								'name':'media - fileSize',
								'value':'media.fileSize'
							},
							{
								'name':'media - hasFile',
								'value':'media.hasFile'
							},
							{
								'name':'media - id',
								'value':'media.id'
							},
							{
								'name':'media - mediaFolderId',
								'value':'media.mediaFolderId'
							},
							{
								'name':'media - mediaType',
								'value':'media.mediaType'
							},
							{
								'name':'media - mediaTypeRaw',
								'value':'media.mediaTypeRaw'
							},
							{
								'name':'media - metaData',
								'value':'media.metaData'
							},
							{
								'name':'media - mimeType',
								'value':'media.mimeType'
							},
							{
								'name':'media - private',
								'value':'media.private'
							},
							{
								'name':'media - thumbnailsRo',
								'value':'media.thumbnailsRo'
							},
							{
								'name':'media - title',
								'value':'media.title'
							},
							{
								'name':'media - translated',
								'value':'media.translated'
							},
							{
								'name':'media - updatedAt',
								'value':'media.updatedAt'
							},
							{
								'name':'media - uploadedAt',
								'value':'media.uploadedAt'
							},
							{
								'name':'media - url',
								'value':'media.url'
							},
							{
								'name':'media - userId',
								'value':'media.userId'
							},
							{
								'name':'media_default_folder - associationFields',
								'value':'media_default_folder.associationFields'
							},
							{
								'name':'media_default_folder - createdAt',
								'value':'media_default_folder.createdAt'
							},
							{
								'name':'media_default_folder - customFields',
								'value':'media_default_folder.customFields'
							},
							{
								'name':'media_default_folder - entity',
								'value':'media_default_folder.entity'
							},
							{
								'name':'media_default_folder - id',
								'value':'media_default_folder.id'
							},
							{
								'name':'media_default_folder - updatedAt',
								'value':'media_default_folder.updatedAt'
							},
							{
								'name':'media_folder - childCount',
								'value':'media_folder.childCount'
							},
							{
								'name':'media_folder - configurationId',
								'value':'media_folder.configurationId'
							},
							{
								'name':'media_folder - createdAt',
								'value':'media_folder.createdAt'
							},
							{
								'name':'media_folder - customFields',
								'value':'media_folder.customFields'
							},
							{
								'name':'media_folder - defaultFolderId',
								'value':'media_folder.defaultFolderId'
							},
							{
								'name':'media_folder - id',
								'value':'media_folder.id'
							},
							{
								'name':'media_folder - name',
								'value':'media_folder.name'
							},
							{
								'name':'media_folder - parentId',
								'value':'media_folder.parentId'
							},
							{
								'name':'media_folder - updatedAt',
								'value':'media_folder.updatedAt'
							},
							{
								'name':'media_folder - useParentConfiguration',
								'value':'media_folder.useParentConfiguration'
							},
							{
								'name':'media_folder_configuration - createThumbnails',
								'value':'media_folder_configuration.createThumbnails'
							},
							{
								'name':'media_folder_configuration - createdAt',
								'value':'media_folder_configuration.createdAt'
							},
							{
								'name':'media_folder_configuration - customFields',
								'value':'media_folder_configuration.customFields'
							},
							{
								'name':'media_folder_configuration - id',
								'value':'media_folder_configuration.id'
							},
							{
								'name':'media_folder_configuration - keepAspectRatio',
								'value':'media_folder_configuration.keepAspectRatio'
							},
							{
								'name':'media_folder_configuration - mediaThumbnailSizesRo',
								'value':'media_folder_configuration.mediaThumbnailSizesRo'
							},
							{
								'name':'media_folder_configuration - noAssociation',
								'value':'media_folder_configuration.noAssociation'
							},
							{
								'name':'media_folder_configuration - private',
								'value':'media_folder_configuration.private'
							},
							{
								'name':'media_folder_configuration - thumbnailQuality',
								'value':'media_folder_configuration.thumbnailQuality'
							},
							{
								'name':'media_folder_configuration - updatedAt',
								'value':'media_folder_configuration.updatedAt'
							},
							{
								'name':'media_folder_configuration_media_thumbnail_size - mediaFolderConfigurationId',
								'value':'media_folder_configuration_media_thumbnail_size.mediaFolderConfigurationId'
							},
							{
								'name':'media_folder_configuration_media_thumbnail_size - mediaThumbnailSizeId',
								'value':'media_folder_configuration_media_thumbnail_size.mediaThumbnailSizeId'
							},
							{
								'name':'media_tag - mediaId',
								'value':'media_tag.mediaId'
							},
							{
								'name':'media_tag - tagId',
								'value':'media_tag.tagId'
							},
							{
								'name':'media_thumbnail - createdAt',
								'value':'media_thumbnail.createdAt'
							},
							{
								'name':'media_thumbnail - customFields',
								'value':'media_thumbnail.customFields'
							},
							{
								'name':'media_thumbnail - height',
								'value':'media_thumbnail.height'
							},
							{
								'name':'media_thumbnail - id',
								'value':'media_thumbnail.id'
							},
							{
								'name':'media_thumbnail - mediaId',
								'value':'media_thumbnail.mediaId'
							},
							{
								'name':'media_thumbnail - updatedAt',
								'value':'media_thumbnail.updatedAt'
							},
							{
								'name':'media_thumbnail - url',
								'value':'media_thumbnail.url'
							},
							{
								'name':'media_thumbnail - width',
								'value':'media_thumbnail.width'
							},
							{
								'name':'media_thumbnail_size - createdAt',
								'value':'media_thumbnail_size.createdAt'
							},
							{
								'name':'media_thumbnail_size - customFields',
								'value':'media_thumbnail_size.customFields'
							},
							{
								'name':'media_thumbnail_size - height',
								'value':'media_thumbnail_size.height'
							},
							{
								'name':'media_thumbnail_size - id',
								'value':'media_thumbnail_size.id'
							},
							{
								'name':'media_thumbnail_size - updatedAt',
								'value':'media_thumbnail_size.updatedAt'
							},
							{
								'name':'media_thumbnail_size - width',
								'value':'media_thumbnail_size.width'
							},
							{
								'name':'media_translation - alt',
								'value':'media_translation.alt'
							},
							{
								'name':'media_translation - createdAt',
								'value':'media_translation.createdAt'
							},
							{
								'name':'media_translation - customFields',
								'value':'media_translation.customFields'
							},
							{
								'name':'media_translation - languageId',
								'value':'media_translation.languageId'
							},
							{
								'name':'media_translation - mediaId',
								'value':'media_translation.mediaId'
							},
							{
								'name':'media_translation - title',
								'value':'media_translation.title'
							},
							{
								'name':'media_translation - updatedAt',
								'value':'media_translation.updatedAt'
							},
							{
								'name':'message_queue_stats - createdAt',
								'value':'message_queue_stats.createdAt'
							},
							{
								'name':'message_queue_stats - id',
								'value':'message_queue_stats.id'
							},
							{
								'name':'message_queue_stats - name',
								'value':'message_queue_stats.name'
							},
							{
								'name':'message_queue_stats - size',
								'value':'message_queue_stats.size'
							},
							{
								'name':'message_queue_stats - updatedAt',
								'value':'message_queue_stats.updatedAt'
							},
							{
								'name':'newsletter_recipient - city',
								'value':'newsletter_recipient.city'
							},
							{
								'name':'newsletter_recipient - confirmedAt',
								'value':'newsletter_recipient.confirmedAt'
							},
							{
								'name':'newsletter_recipient - createdAt',
								'value':'newsletter_recipient.createdAt'
							},
							{
								'name':'newsletter_recipient - customFields',
								'value':'newsletter_recipient.customFields'
							},
							{
								'name':'newsletter_recipient - email',
								'value':'newsletter_recipient.email'
							},
							{
								'name':'newsletter_recipient - firstName',
								'value':'newsletter_recipient.firstName'
							},
							{
								'name':'newsletter_recipient - hash',
								'value':'newsletter_recipient.hash'
							},
							{
								'name':'newsletter_recipient - id',
								'value':'newsletter_recipient.id'
							},
							{
								'name':'newsletter_recipient - languageId',
								'value':'newsletter_recipient.languageId'
							},
							{
								'name':'newsletter_recipient - lastName',
								'value':'newsletter_recipient.lastName'
							},
							{
								'name':'newsletter_recipient - salesChannelId',
								'value':'newsletter_recipient.salesChannelId'
							},
							{
								'name':'newsletter_recipient - salutationId',
								'value':'newsletter_recipient.salutationId'
							},
							{
								'name':'newsletter_recipient - status',
								'value':'newsletter_recipient.status'
							},
							{
								'name':'newsletter_recipient - street',
								'value':'newsletter_recipient.street'
							},
							{
								'name':'newsletter_recipient - title',
								'value':'newsletter_recipient.title'
							},
							{
								'name':'newsletter_recipient - updatedAt',
								'value':'newsletter_recipient.updatedAt'
							},
							{
								'name':'newsletter_recipient - zipCode',
								'value':'newsletter_recipient.zipCode'
							},
							{
								'name':'newsletter_recipient_tag - newsletterRecipientId',
								'value':'newsletter_recipient_tag.newsletterRecipientId'
							},
							{
								'name':'newsletter_recipient_tag - tagId',
								'value':'newsletter_recipient_tag.tagId'
							},
							{
								'name':'number_range - createdAt',
								'value':'number_range.createdAt'
							},
							{
								'name':'number_range - customFields',
								'value':'number_range.customFields'
							},
							{
								'name':'number_range - description',
								'value':'number_range.description'
							},
							{
								'name':'number_range - global',
								'value':'number_range.global'
							},
							{
								'name':'number_range - id',
								'value':'number_range.id'
							},
							{
								'name':'number_range - name',
								'value':'number_range.name'
							},
							{
								'name':'number_range - pattern',
								'value':'number_range.pattern'
							},
							{
								'name':'number_range - start',
								'value':'number_range.start'
							},
							{
								'name':'number_range - translated',
								'value':'number_range.translated'
							},
							{
								'name':'number_range - typeId',
								'value':'number_range.typeId'
							},
							{
								'name':'number_range - updatedAt',
								'value':'number_range.updatedAt'
							},
							{
								'name':'number_range_sales_channel - createdAt',
								'value':'number_range_sales_channel.createdAt'
							},
							{
								'name':'number_range_sales_channel - id',
								'value':'number_range_sales_channel.id'
							},
							{
								'name':'number_range_sales_channel - numberRangeId',
								'value':'number_range_sales_channel.numberRangeId'
							},
							{
								'name':'number_range_sales_channel - numberRangeTypeId',
								'value':'number_range_sales_channel.numberRangeTypeId'
							},
							{
								'name':'number_range_sales_channel - salesChannelId',
								'value':'number_range_sales_channel.salesChannelId'
							},
							{
								'name':'number_range_sales_channel - updatedAt',
								'value':'number_range_sales_channel.updatedAt'
							},
							{
								'name':'number_range_state - createdAt',
								'value':'number_range_state.createdAt'
							},
							{
								'name':'number_range_state - id',
								'value':'number_range_state.id'
							},
							{
								'name':'number_range_state - lastValue',
								'value':'number_range_state.lastValue'
							},
							{
								'name':'number_range_state - numberRangeId',
								'value':'number_range_state.numberRangeId'
							},
							{
								'name':'number_range_state - updatedAt',
								'value':'number_range_state.updatedAt'
							},
							{
								'name':'number_range_translation - createdAt',
								'value':'number_range_translation.createdAt'
							},
							{
								'name':'number_range_translation - customFields',
								'value':'number_range_translation.customFields'
							},
							{
								'name':'number_range_translation - description',
								'value':'number_range_translation.description'
							},
							{
								'name':'number_range_translation - languageId',
								'value':'number_range_translation.languageId'
							},
							{
								'name':'number_range_translation - name',
								'value':'number_range_translation.name'
							},
							{
								'name':'number_range_translation - numberRangeId',
								'value':'number_range_translation.numberRangeId'
							},
							{
								'name':'number_range_translation - updatedAt',
								'value':'number_range_translation.updatedAt'
							},
							{
								'name':'number_range_type - createdAt',
								'value':'number_range_type.createdAt'
							},
							{
								'name':'number_range_type - customFields',
								'value':'number_range_type.customFields'
							},
							{
								'name':'number_range_type - global',
								'value':'number_range_type.global'
							},
							{
								'name':'number_range_type - id',
								'value':'number_range_type.id'
							},
							{
								'name':'number_range_type - technicalName',
								'value':'number_range_type.technicalName'
							},
							{
								'name':'number_range_type - translated',
								'value':'number_range_type.translated'
							},
							{
								'name':'number_range_type - typeName',
								'value':'number_range_type.typeName'
							},
							{
								'name':'number_range_type - updatedAt',
								'value':'number_range_type.updatedAt'
							},
							{
								'name':'number_range_type_translation - createdAt',
								'value':'number_range_type_translation.createdAt'
							},
							{
								'name':'number_range_type_translation - customFields',
								'value':'number_range_type_translation.customFields'
							},
							{
								'name':'number_range_type_translation - languageId',
								'value':'number_range_type_translation.languageId'
							},
							{
								'name':'number_range_type_translation - numberRangeTypeId',
								'value':'number_range_type_translation.numberRangeTypeId'
							},
							{
								'name':'number_range_type_translation - typeName',
								'value':'number_range_type_translation.typeName'
							},
							{
								'name':'number_range_type_translation - updatedAt',
								'value':'number_range_type_translation.updatedAt'
							},
							{
								'name':'order - affiliateCode',
								'value':'order.affiliateCode'
							},
							{
								'name':'order - amountNet',
								'value':'order.amountNet'
							},
							{
								'name':'order - amountTotal',
								'value':'order.amountTotal'
							},
							{
								'name':'order - autoIncrement',
								'value':'order.autoIncrement'
							},
							{
								'name':'order - billingAddressId',
								'value':'order.billingAddressId'
							},
							{
								'name':'order - billingAddressVersionId',
								'value':'order.billingAddressVersionId'
							},
							{
								'name':'order - campaignCode',
								'value':'order.campaignCode'
							},
							{
								'name':'order - createdAt',
								'value':'order.createdAt'
							},
							{
								'name':'order - currencyFactor',
								'value':'order.currencyFactor'
							},
							{
								'name':'order - currencyId',
								'value':'order.currencyId'
							},
							{
								'name':'order - customFields',
								'value':'order.customFields'
							},
							{
								'name':'order - customerComment',
								'value':'order.customerComment'
							},
							{
								'name':'order - deepLinkCode',
								'value':'order.deepLinkCode'
							},
							{
								'name':'order - id',
								'value':'order.id'
							},
							{
								'name':'order - languageId',
								'value':'order.languageId'
							},
							{
								'name':'order - orderDate',
								'value':'order.orderDate'
							},
							{
								'name':'order - orderDateTime',
								'value':'order.orderDateTime'
							},
							{
								'name':'order - orderNumber',
								'value':'order.orderNumber'
							},
							{
								'name':'order - positionPrice',
								'value':'order.positionPrice'
							},
							{
								'name':'order - price',
								'value':'order.price'
							},
							{
								'name':'order - ruleIds',
								'value':'order.ruleIds'
							},
							{
								'name':'order - salesChannelId',
								'value':'order.salesChannelId'
							},
							{
								'name':'order - scShippingInfo',
								'value':'order.scShippingInfo'
							},
							{
								'name':'order - shippingCosts',
								'value':'order.shippingCosts'
							},
							{
								'name':'order - shippingTotal',
								'value':'order.shippingTotal'
							},
							{
								'name':'order - stateId',
								'value':'order.stateId'
							},
							{
								'name':'order - taxStatus',
								'value':'order.taxStatus'
							},
							{
								'name':'order - updatedAt',
								'value':'order.updatedAt'
							},
							{
								'name':'order - versionId',
								'value':'order.versionId'
							},
							{
								'name':'order_address - additionalAddressLine1',
								'value':'order_address.additionalAddressLine1'
							},
							{
								'name':'order_address - additionalAddressLine2',
								'value':'order_address.additionalAddressLine2'
							},
							{
								'name':'order_address - city',
								'value':'order_address.city'
							},
							{
								'name':'order_address - company',
								'value':'order_address.company'
							},
							{
								'name':'order_address - countryId',
								'value':'order_address.countryId'
							},
							{
								'name':'order_address - countryStateId',
								'value':'order_address.countryStateId'
							},
							{
								'name':'order_address - createdAt',
								'value':'order_address.createdAt'
							},
							{
								'name':'order_address - customFields',
								'value':'order_address.customFields'
							},
							{
								'name':'order_address - department',
								'value':'order_address.department'
							},
							{
								'name':'order_address - firstName',
								'value':'order_address.firstName'
							},
							{
								'name':'order_address - id',
								'value':'order_address.id'
							},
							{
								'name':'order_address - lastName',
								'value':'order_address.lastName'
							},
							{
								'name':'order_address - orderId',
								'value':'order_address.orderId'
							},
							{
								'name':'order_address - orderVersionId',
								'value':'order_address.orderVersionId'
							},
							{
								'name':'order_address - phoneNumber',
								'value':'order_address.phoneNumber'
							},
							{
								'name':'order_address - salutationId',
								'value':'order_address.salutationId'
							},
							{
								'name':'order_address - street',
								'value':'order_address.street'
							},
							{
								'name':'order_address - title',
								'value':'order_address.title'
							},
							{
								'name':'order_address - updatedAt',
								'value':'order_address.updatedAt'
							},
							{
								'name':'order_address - vatId',
								'value':'order_address.vatId'
							},
							{
								'name':'order_address - versionId',
								'value':'order_address.versionId'
							},
							{
								'name':'order_address - zipcode',
								'value':'order_address.zipcode'
							},
							{
								'name':'order_customer - company',
								'value':'order_customer.company'
							},
							{
								'name':'order_customer - createdAt',
								'value':'order_customer.createdAt'
							},
							{
								'name':'order_customer - customFields',
								'value':'order_customer.customFields'
							},
							{
								'name':'order_customer - customerId',
								'value':'order_customer.customerId'
							},
							{
								'name':'order_customer - customerNumber',
								'value':'order_customer.customerNumber'
							},
							{
								'name':'order_customer - email',
								'value':'order_customer.email'
							},
							{
								'name':'order_customer - firstName',
								'value':'order_customer.firstName'
							},
							{
								'name':'order_customer - id',
								'value':'order_customer.id'
							},
							{
								'name':'order_customer - lastName',
								'value':'order_customer.lastName'
							},
							{
								'name':'order_customer - orderId',
								'value':'order_customer.orderId'
							},
							{
								'name':'order_customer - orderVersionId',
								'value':'order_customer.orderVersionId'
							},
							{
								'name':'order_customer - remoteAddress',
								'value':'order_customer.remoteAddress'
							},
							{
								'name':'order_customer - salutationId',
								'value':'order_customer.salutationId'
							},
							{
								'name':'order_customer - title',
								'value':'order_customer.title'
							},
							{
								'name':'order_customer - updatedAt',
								'value':'order_customer.updatedAt'
							},
							{
								'name':'order_customer - versionId',
								'value':'order_customer.versionId'
							},
							{
								'name':'order_delivery - createdAt',
								'value':'order_delivery.createdAt'
							},
							{
								'name':'order_delivery - customFields',
								'value':'order_delivery.customFields'
							},
							{
								'name':'order_delivery - id',
								'value':'order_delivery.id'
							},
							{
								'name':'order_delivery - orderId',
								'value':'order_delivery.orderId'
							},
							{
								'name':'order_delivery - orderVersionId',
								'value':'order_delivery.orderVersionId'
							},
							{
								'name':'order_delivery - shippingCosts',
								'value':'order_delivery.shippingCosts'
							},
							{
								'name':'order_delivery - shippingDateEarliest',
								'value':'order_delivery.shippingDateEarliest'
							},
							{
								'name':'order_delivery - shippingDateLatest',
								'value':'order_delivery.shippingDateLatest'
							},
							{
								'name':'order_delivery - shippingMethodId',
								'value':'order_delivery.shippingMethodId'
							},
							{
								'name':'order_delivery - shippingOrderAddressId',
								'value':'order_delivery.shippingOrderAddressId'
							},
							{
								'name':'order_delivery - shippingOrderAddressVersionId',
								'value':'order_delivery.shippingOrderAddressVersionId'
							},
							{
								'name':'order_delivery - stateId',
								'value':'order_delivery.stateId'
							},
							{
								'name':'order_delivery - trackingCodes',
								'value':'order_delivery.trackingCodes'
							},
							{
								'name':'order_delivery - updatedAt',
								'value':'order_delivery.updatedAt'
							},
							{
								'name':'order_delivery - versionId',
								'value':'order_delivery.versionId'
							},
							{
								'name':'order_delivery_position - createdAt',
								'value':'order_delivery_position.createdAt'
							},
							{
								'name':'order_delivery_position - customFields',
								'value':'order_delivery_position.customFields'
							},
							{
								'name':'order_delivery_position - id',
								'value':'order_delivery_position.id'
							},
							{
								'name':'order_delivery_position - orderDeliveryId',
								'value':'order_delivery_position.orderDeliveryId'
							},
							{
								'name':'order_delivery_position - orderDeliveryVersionId',
								'value':'order_delivery_position.orderDeliveryVersionId'
							},
							{
								'name':'order_delivery_position - orderLineItemId',
								'value':'order_delivery_position.orderLineItemId'
							},
							{
								'name':'order_delivery_position - orderLineItemVersionId',
								'value':'order_delivery_position.orderLineItemVersionId'
							},
							{
								'name':'order_delivery_position - price',
								'value':'order_delivery_position.price'
							},
							{
								'name':'order_delivery_position - quantity',
								'value':'order_delivery_position.quantity'
							},
							{
								'name':'order_delivery_position - totalPrice',
								'value':'order_delivery_position.totalPrice'
							},
							{
								'name':'order_delivery_position - unitPrice',
								'value':'order_delivery_position.unitPrice'
							},
							{
								'name':'order_delivery_position - updatedAt',
								'value':'order_delivery_position.updatedAt'
							},
							{
								'name':'order_delivery_position - versionId',
								'value':'order_delivery_position.versionId'
							},
							{
								'name':'order_line_item - coverId',
								'value':'order_line_item.coverId'
							},
							{
								'name':'order_line_item - createdAt',
								'value':'order_line_item.createdAt'
							},
							{
								'name':'order_line_item - customFields',
								'value':'order_line_item.customFields'
							},
							{
								'name':'order_line_item - description',
								'value':'order_line_item.description'
							},
							{
								'name':'order_line_item - good',
								'value':'order_line_item.good'
							},
							{
								'name':'order_line_item - id',
								'value':'order_line_item.id'
							},
							{
								'name':'order_line_item - identifier',
								'value':'order_line_item.identifier'
							},
							{
								'name':'order_line_item - label',
								'value':'order_line_item.label'
							},
							{
								'name':'order_line_item - orderId',
								'value':'order_line_item.orderId'
							},
							{
								'name':'order_line_item - orderVersionId',
								'value':'order_line_item.orderVersionId'
							},
							{
								'name':'order_line_item - parentId',
								'value':'order_line_item.parentId'
							},
							{
								'name':'order_line_item - parentVersionId',
								'value':'order_line_item.parentVersionId'
							},
							{
								'name':'order_line_item - payload',
								'value':'order_line_item.payload'
							},
							{
								'name':'order_line_item - position',
								'value':'order_line_item.position'
							},
							{
								'name':'order_line_item - price',
								'value':'order_line_item.price'
							},
							{
								'name':'order_line_item - priceDefinition',
								'value':'order_line_item.priceDefinition'
							},
							{
								'name':'order_line_item - productId',
								'value':'order_line_item.productId'
							},
							{
								'name':'order_line_item - productVersionId',
								'value':'order_line_item.productVersionId'
							},
							{
								'name':'order_line_item - quantity',
								'value':'order_line_item.quantity'
							},
							{
								'name':'order_line_item - referencedId',
								'value':'order_line_item.referencedId'
							},
							{
								'name':'order_line_item - removable',
								'value':'order_line_item.removable'
							},
							{
								'name':'order_line_item - stackable',
								'value':'order_line_item.stackable'
							},
							{
								'name':'order_line_item - totalPrice',
								'value':'order_line_item.totalPrice'
							},
							{
								'name':'order_line_item - type',
								'value':'order_line_item.type'
							},
							{
								'name':'order_line_item - unitPrice',
								'value':'order_line_item.unitPrice'
							},
							{
								'name':'order_line_item - updatedAt',
								'value':'order_line_item.updatedAt'
							},
							{
								'name':'order_line_item - versionId',
								'value':'order_line_item.versionId'
							},
							{
								'name':'order_tag - orderId',
								'value':'order_tag.orderId'
							},
							{
								'name':'order_tag - orderVersionId',
								'value':'order_tag.orderVersionId'
							},
							{
								'name':'order_tag - tagId',
								'value':'order_tag.tagId'
							},
							{
								'name':'order_transaction - amount',
								'value':'order_transaction.amount'
							},
							{
								'name':'order_transaction - createdAt',
								'value':'order_transaction.createdAt'
							},
							{
								'name':'order_transaction - customFields',
								'value':'order_transaction.customFields'
							},
							{
								'name':'order_transaction - id',
								'value':'order_transaction.id'
							},
							{
								'name':'order_transaction - orderId',
								'value':'order_transaction.orderId'
							},
							{
								'name':'order_transaction - orderVersionId',
								'value':'order_transaction.orderVersionId'
							},
							{
								'name':'order_transaction - paymentMethodId',
								'value':'order_transaction.paymentMethodId'
							},
							{
								'name':'order_transaction - stateId',
								'value':'order_transaction.stateId'
							},
							{
								'name':'order_transaction - updatedAt',
								'value':'order_transaction.updatedAt'
							},
							{
								'name':'order_transaction - versionId',
								'value':'order_transaction.versionId'
							},
							{
								'name':'payment_method - active',
								'value':'payment_method.active'
							},
							{
								'name':'payment_method - afterOrderEnabled',
								'value':'payment_method.afterOrderEnabled'
							},
							{
								'name':'payment_method - availabilityRuleId',
								'value':'payment_method.availabilityRuleId'
							},
							{
								'name':'payment_method - createdAt',
								'value':'payment_method.createdAt'
							},
							{
								'name':'payment_method - customFields',
								'value':'payment_method.customFields'
							},
							{
								'name':'payment_method - description',
								'value':'payment_method.description'
							},
							{
								'name':'payment_method - formattedHandlerIdentifier',
								'value':'payment_method.formattedHandlerIdentifier'
							},
							{
								'name':'payment_method - handlerIdentifier',
								'value':'payment_method.handlerIdentifier'
							},
							{
								'name':'payment_method - id',
								'value':'payment_method.id'
							},
							{
								'name':'payment_method - mediaId',
								'value':'payment_method.mediaId'
							},
							{
								'name':'payment_method - name',
								'value':'payment_method.name'
							},
							{
								'name':'payment_method - pluginId',
								'value':'payment_method.pluginId'
							},
							{
								'name':'payment_method - position',
								'value':'payment_method.position'
							},
							{
								'name':'payment_method - translated',
								'value':'payment_method.translated'
							},
							{
								'name':'payment_method - updatedAt',
								'value':'payment_method.updatedAt'
							},
							{
								'name':'payment_method_translation - createdAt',
								'value':'payment_method_translation.createdAt'
							},
							{
								'name':'payment_method_translation - customFields',
								'value':'payment_method_translation.customFields'
							},
							{
								'name':'payment_method_translation - description',
								'value':'payment_method_translation.description'
							},
							{
								'name':'payment_method_translation - languageId',
								'value':'payment_method_translation.languageId'
							},
							{
								'name':'payment_method_translation - name',
								'value':'payment_method_translation.name'
							},
							{
								'name':'payment_method_translation - paymentMethodId',
								'value':'payment_method_translation.paymentMethodId'
							},
							{
								'name':'payment_method_translation - updatedAt',
								'value':'payment_method_translation.updatedAt'
							},
							{
								'name':'plugin - active',
								'value':'plugin.active'
							},
							{
								'name':'plugin - author',
								'value':'plugin.author'
							},
							{
								'name':'plugin - autoload',
								'value':'plugin.autoload'
							},
							{
								'name':'plugin - baseClass',
								'value':'plugin.baseClass'
							},
							{
								'name':'plugin - changelog',
								'value':'plugin.changelog'
							},
							{
								'name':'plugin - composerName',
								'value':'plugin.composerName'
							},
							{
								'name':'plugin - copyright',
								'value':'plugin.copyright'
							},
							{
								'name':'plugin - createdAt',
								'value':'plugin.createdAt'
							},
							{
								'name':'plugin - customFields',
								'value':'plugin.customFields'
							},
							{
								'name':'plugin - description',
								'value':'plugin.description'
							},
							{
								'name':'plugin - icon',
								'value':'plugin.icon'
							},
							{
								'name':'plugin - iconRaw',
								'value':'plugin.iconRaw'
							},
							{
								'name':'plugin - id',
								'value':'plugin.id'
							},
							{
								'name':'plugin - installedAt',
								'value':'plugin.installedAt'
							},
							{
								'name':'plugin - label',
								'value':'plugin.label'
							},
							{
								'name':'plugin - license',
								'value':'plugin.license'
							},
							{
								'name':'plugin - managedByComposer',
								'value':'plugin.managedByComposer'
							},
							{
								'name':'plugin - manufacturerLink',
								'value':'plugin.manufacturerLink'
							},
							{
								'name':'plugin - name',
								'value':'plugin.name'
							},
							{
								'name':'plugin - path',
								'value':'plugin.path'
							},
							{
								'name':'plugin - supportLink',
								'value':'plugin.supportLink'
							},
							{
								'name':'plugin - translated',
								'value':'plugin.translated'
							},
							{
								'name':'plugin - updatedAt',
								'value':'plugin.updatedAt'
							},
							{
								'name':'plugin - upgradeVersion',
								'value':'plugin.upgradeVersion'
							},
							{
								'name':'plugin - upgradedAt',
								'value':'plugin.upgradedAt'
							},
							{
								'name':'plugin - version',
								'value':'plugin.version'
							},
							{
								'name':'plugin_translation - changelog',
								'value':'plugin_translation.changelog'
							},
							{
								'name':'plugin_translation - createdAt',
								'value':'plugin_translation.createdAt'
							},
							{
								'name':'plugin_translation - customFields',
								'value':'plugin_translation.customFields'
							},
							{
								'name':'plugin_translation - description',
								'value':'plugin_translation.description'
							},
							{
								'name':'plugin_translation - label',
								'value':'plugin_translation.label'
							},
							{
								'name':'plugin_translation - languageId',
								'value':'plugin_translation.languageId'
							},
							{
								'name':'plugin_translation - manufacturerLink',
								'value':'plugin_translation.manufacturerLink'
							},
							{
								'name':'plugin_translation - pluginId',
								'value':'plugin_translation.pluginId'
							},
							{
								'name':'plugin_translation - supportLink',
								'value':'plugin_translation.supportLink'
							},
							{
								'name':'plugin_translation - updatedAt',
								'value':'plugin_translation.updatedAt'
							},
							{
								'name':'product - active',
								'value':'product.active'
							},
							{
								'name':'product - autoIncrement',
								'value':'product.autoIncrement'
							},
							{
								'name':'product - available',
								'value':'product.available'
							},
							{
								'name':'product - availableStock',
								'value':'product.availableStock'
							},
							{
								'name':'product - blacklistIds',
								'value':'product.blacklistIds'
							},
							{
								'name':'product - categoryTree',
								'value':'product.categoryTree'
							},
							{
								'name':'product - childCount',
								'value':'product.childCount'
							},
							{
								'name':'product - configuratorGroupConfig',
								'value':'product.configuratorGroupConfig'
							},
							{
								'name':'product - coverId',
								'value':'product.coverId'
							},
							{
								'name':'product - createdAt',
								'value':'product.createdAt'
							},
							{
								'name':'product - customFieldSetSelectionActive',
								'value':'product.customFieldSetSelectionActive'
							},
							{
								'name':'product - customFields',
								'value':'product.customFields'
							},
							{
								'name':'product - customSearchKeywords',
								'value':'product.customSearchKeywords'
							},
							{
								'name':'product - deliveryTimeId',
								'value':'product.deliveryTimeId'
							},
							{
								'name':'product - description',
								'value':'product.description'
							},
							{
								'name':'product - displayGroup',
								'value':'product.displayGroup'
							},
							{
								'name':'product - ean',
								'value':'product.ean'
							},
							{
								'name':'product - featureSetId',
								'value':'product.featureSetId'
							},
							{
								'name':'product - height',
								'value':'product.height'
							},
							{
								'name':'product - id',
								'value':'product.id'
							},
							{
								'name':'product - isCloseout',
								'value':'product.isCloseout'
							},
							{
								'name':'product - keywords',
								'value':'product.keywords'
							},
							{
								'name':'product - length',
								'value':'product.length'
							},
							{
								'name':'product - listingPrices',
								'value':'product.listingPrices'
							},
							{
								'name':'product - mainVariantId',
								'value':'product.mainVariantId'
							},
							{
								'name':'product - manufacturerId',
								'value':'product.manufacturerId'
							},
							{
								'name':'product - manufacturerNumber',
								'value':'product.manufacturerNumber'
							},
							{
								'name':'product - markAsTopseller',
								'value':'product.markAsTopseller'
							},
							{
								'name':'product - maxPurchase',
								'value':'product.maxPurchase'
							},
							{
								'name':'product - metaDescription',
								'value':'product.metaDescription'
							},
							{
								'name':'product - metaTitle',
								'value':'product.metaTitle'
							},
							{
								'name':'product - minPurchase',
								'value':'product.minPurchase'
							},
							{
								'name':'product - name',
								'value':'product.name'
							},
							{
								'name':'product - optionIds',
								'value':'product.optionIds'
							},
							{
								'name':'product - packUnit',
								'value':'product.packUnit'
							},
							{
								'name':'product - packUnitPlural',
								'value':'product.packUnitPlural'
							},
							{
								'name':'product - parentId',
								'value':'product.parentId'
							},
							{
								'name':'product - parentVersionId',
								'value':'product.parentVersionId'
							},
							{
								'name':'product - price',
								'value':'product.price'
							},
							{
								'name':'product - productManufacturerVersionId',
								'value':'product.productManufacturerVersionId'
							},
							{
								'name':'product - productMediaVersionId',
								'value':'product.productMediaVersionId'
							},
							{
								'name':'product - productNumber',
								'value':'product.productNumber'
							},
							{
								'name':'product - propertyIds',
								'value':'product.propertyIds'
							},
							{
								'name':'product - purchasePrice',
								'value':'product.purchasePrice'
							},
							{
								'name':'product - purchasePrices',
								'value':'product.purchasePrices'
							},
							{
								'name':'product - purchaseSteps',
								'value':'product.purchaseSteps'
							},
							{
								'name':'product - purchaseUnit',
								'value':'product.purchaseUnit'
							},
							{
								'name':'product - ratingAverage',
								'value':'product.ratingAverage'
							},
							{
								'name':'product - referenceUnit',
								'value':'product.referenceUnit'
							},
							{
								'name':'product - releaseDate',
								'value':'product.releaseDate'
							},
							{
								'name':'product - restockTime',
								'value':'product.restockTime'
							},
							{
								'name':'product - sales',
								'value':'product.sales'
							},
							{
								'name':'product - shippingFree',
								'value':'product.shippingFree'
							},
							{
								'name':'product - stock',
								'value':'product.stock'
							},
							{
								'name':'product - swagCustomizedProductsTemplateId',
								'value':'product.swagCustomizedProductsTemplateId'
							},
							{
								'name':'product - swagCustomizedProductsTemplateVersionId',
								'value':'product.swagCustomizedProductsTemplateVersionId'
							},
							{
								'name':'product - tagIds',
								'value':'product.tagIds'
							},
							{
								'name':'product - taxId',
								'value':'product.taxId'
							},
							{
								'name':'product - translated',
								'value':'product.translated'
							},
							{
								'name':'product - unitId',
								'value':'product.unitId'
							},
							{
								'name':'product - updatedAt',
								'value':'product.updatedAt'
							},
							{
								'name':'product - variantRestrictions',
								'value':'product.variantRestrictions'
							},
							{
								'name':'product - variation',
								'value':'product.variation'
							},
							{
								'name':'product - versionId',
								'value':'product.versionId'
							},
							{
								'name':'product - weight',
								'value':'product.weight'
							},
							{
								'name':'product - whitelistIds',
								'value':'product.whitelistIds'
							},
							{
								'name':'product - width',
								'value':'product.width'
							},
							{
								'name':'product_category - categoryId',
								'value':'product_category.categoryId'
							},
							{
								'name':'product_category - categoryVersionId',
								'value':'product_category.categoryVersionId'
							},
							{
								'name':'product_category - productId',
								'value':'product_category.productId'
							},
							{
								'name':'product_category - productVersionId',
								'value':'product_category.productVersionId'
							},
							{
								'name':'product_category_tree - categoryId',
								'value':'product_category_tree.categoryId'
							},
							{
								'name':'product_category_tree - categoryVersionId',
								'value':'product_category_tree.categoryVersionId'
							},
							{
								'name':'product_category_tree - productId',
								'value':'product_category_tree.productId'
							},
							{
								'name':'product_category_tree - productVersionId',
								'value':'product_category_tree.productVersionId'
							},
							{
								'name':'product_configurator_setting - createdAt',
								'value':'product_configurator_setting.createdAt'
							},
							{
								'name':'product_configurator_setting - customFields',
								'value':'product_configurator_setting.customFields'
							},
							{
								'name':'product_configurator_setting - id',
								'value':'product_configurator_setting.id'
							},
							{
								'name':'product_configurator_setting - mediaId',
								'value':'product_configurator_setting.mediaId'
							},
							{
								'name':'product_configurator_setting - optionId',
								'value':'product_configurator_setting.optionId'
							},
							{
								'name':'product_configurator_setting - position',
								'value':'product_configurator_setting.position'
							},
							{
								'name':'product_configurator_setting - price',
								'value':'product_configurator_setting.price'
							},
							{
								'name':'product_configurator_setting - productId',
								'value':'product_configurator_setting.productId'
							},
							{
								'name':'product_configurator_setting - productVersionId',
								'value':'product_configurator_setting.productVersionId'
							},
							{
								'name':'product_configurator_setting - updatedAt',
								'value':'product_configurator_setting.updatedAt'
							},
							{
								'name':'product_configurator_setting - versionId',
								'value':'product_configurator_setting.versionId'
							},
							{
								'name':'product_cross_selling - active',
								'value':'product_cross_selling.active'
							},
							{
								'name':'product_cross_selling - createdAt',
								'value':'product_cross_selling.createdAt'
							},
							{
								'name':'product_cross_selling - id',
								'value':'product_cross_selling.id'
							},
							{
								'name':'product_cross_selling - limit',
								'value':'product_cross_selling.limit'
							},
							{
								'name':'product_cross_selling - name',
								'value':'product_cross_selling.name'
							},
							{
								'name':'product_cross_selling - position',
								'value':'product_cross_selling.position'
							},
							{
								'name':'product_cross_selling - productId',
								'value':'product_cross_selling.productId'
							},
							{
								'name':'product_cross_selling - productStreamId',
								'value':'product_cross_selling.productStreamId'
							},
							{
								'name':'product_cross_selling - productVersionId',
								'value':'product_cross_selling.productVersionId'
							},
							{
								'name':'product_cross_selling - sortBy',
								'value':'product_cross_selling.sortBy'
							},
							{
								'name':'product_cross_selling - sortDirection',
								'value':'product_cross_selling.sortDirection'
							},
							{
								'name':'product_cross_selling - translated',
								'value':'product_cross_selling.translated'
							},
							{
								'name':'product_cross_selling - type',
								'value':'product_cross_selling.type'
							},
							{
								'name':'product_cross_selling - updatedAt',
								'value':'product_cross_selling.updatedAt'
							},
							{
								'name':'product_cross_selling_assigned_products - createdAt',
								'value':'product_cross_selling_assigned_products.createdAt'
							},
							{
								'name':'product_cross_selling_assigned_products - crossSellingId',
								'value':'product_cross_selling_assigned_products.crossSellingId'
							},
							{
								'name':'product_cross_selling_assigned_products - id',
								'value':'product_cross_selling_assigned_products.id'
							},
							{
								'name':'product_cross_selling_assigned_products - position',
								'value':'product_cross_selling_assigned_products.position'
							},
							{
								'name':'product_cross_selling_assigned_products - productId',
								'value':'product_cross_selling_assigned_products.productId'
							},
							{
								'name':'product_cross_selling_assigned_products - productVersionId',
								'value':'product_cross_selling_assigned_products.productVersionId'
							},
							{
								'name':'product_cross_selling_assigned_products - updatedAt',
								'value':'product_cross_selling_assigned_products.updatedAt'
							},
							{
								'name':'product_cross_selling_translation - createdAt',
								'value':'product_cross_selling_translation.createdAt'
							},
							{
								'name':'product_cross_selling_translation - languageId',
								'value':'product_cross_selling_translation.languageId'
							},
							{
								'name':'product_cross_selling_translation - name',
								'value':'product_cross_selling_translation.name'
							},
							{
								'name':'product_cross_selling_translation - productCrossSellingId',
								'value':'product_cross_selling_translation.productCrossSellingId'
							},
							{
								'name':'product_cross_selling_translation - updatedAt',
								'value':'product_cross_selling_translation.updatedAt'
							},
							{
								'name':'product_custom_field_set - customFieldSetId',
								'value':'product_custom_field_set.customFieldSetId'
							},
							{
								'name':'product_custom_field_set - productId',
								'value':'product_custom_field_set.productId'
							},
							{
								'name':'product_custom_field_set - productVersionId',
								'value':'product_custom_field_set.productVersionId'
							},
							{
								'name':'product_export - accessKey',
								'value':'product_export.accessKey'
							},
							{
								'name':'product_export - bodyTemplate',
								'value':'product_export.bodyTemplate'
							},
							{
								'name':'product_export - createdAt',
								'value':'product_export.createdAt'
							},
							{
								'name':'product_export - currencyId',
								'value':'product_export.currencyId'
							},
							{
								'name':'product_export - encoding',
								'value':'product_export.encoding'
							},
							{
								'name':'product_export - fileFormat',
								'value':'product_export.fileFormat'
							},
							{
								'name':'product_export - fileName',
								'value':'product_export.fileName'
							},
							{
								'name':'product_export - footerTemplate',
								'value':'product_export.footerTemplate'
							},
							{
								'name':'product_export - generateByCronjob',
								'value':'product_export.generateByCronjob'
							},
							{
								'name':'product_export - generatedAt',
								'value':'product_export.generatedAt'
							},
							{
								'name':'product_export - headerTemplate',
								'value':'product_export.headerTemplate'
							},
							{
								'name':'product_export - id',
								'value':'product_export.id'
							},
							{
								'name':'product_export - includeVariants',
								'value':'product_export.includeVariants'
							},
							{
								'name':'product_export - interval',
								'value':'product_export.interval'
							},
							{
								'name':'product_export - pausedSchedule',
								'value':'product_export.pausedSchedule'
							},
							{
								'name':'product_export - productStreamId',
								'value':'product_export.productStreamId'
							},
							{
								'name':'product_export - salesChannelDomainId',
								'value':'product_export.salesChannelDomainId'
							},
							{
								'name':'product_export - salesChannelId',
								'value':'product_export.salesChannelId'
							},
							{
								'name':'product_export - storefrontSalesChannelId',
								'value':'product_export.storefrontSalesChannelId'
							},
							{
								'name':'product_export - updatedAt',
								'value':'product_export.updatedAt'
							},
							{
								'name':'product_feature_set - createdAt',
								'value':'product_feature_set.createdAt'
							},
							{
								'name':'product_feature_set - description',
								'value':'product_feature_set.description'
							},
							{
								'name':'product_feature_set - features',
								'value':'product_feature_set.features'
							},
							{
								'name':'product_feature_set - id',
								'value':'product_feature_set.id'
							},
							{
								'name':'product_feature_set - name',
								'value':'product_feature_set.name'
							},
							{
								'name':'product_feature_set - translated',
								'value':'product_feature_set.translated'
							},
							{
								'name':'product_feature_set - updatedAt',
								'value':'product_feature_set.updatedAt'
							},
							{
								'name':'product_feature_set_translation - createdAt',
								'value':'product_feature_set_translation.createdAt'
							},
							{
								'name':'product_feature_set_translation - description',
								'value':'product_feature_set_translation.description'
							},
							{
								'name':'product_feature_set_translation - languageId',
								'value':'product_feature_set_translation.languageId'
							},
							{
								'name':'product_feature_set_translation - name',
								'value':'product_feature_set_translation.name'
							},
							{
								'name':'product_feature_set_translation - productFeatureSetId',
								'value':'product_feature_set_translation.productFeatureSetId'
							},
							{
								'name':'product_feature_set_translation - updatedAt',
								'value':'product_feature_set_translation.updatedAt'
							},
							{
								'name':'product_keyword_dictionary - id',
								'value':'product_keyword_dictionary.id'
							},
							{
								'name':'product_keyword_dictionary - keyword',
								'value':'product_keyword_dictionary.keyword'
							},
							{
								'name':'product_keyword_dictionary - languageId',
								'value':'product_keyword_dictionary.languageId'
							},
							{
								'name':'product_keyword_dictionary - reversed',
								'value':'product_keyword_dictionary.reversed'
							},
							{
								'name':'product_manufacturer - createdAt',
								'value':'product_manufacturer.createdAt'
							},
							{
								'name':'product_manufacturer - customFields',
								'value':'product_manufacturer.customFields'
							},
							{
								'name':'product_manufacturer - description',
								'value':'product_manufacturer.description'
							},
							{
								'name':'product_manufacturer - id',
								'value':'product_manufacturer.id'
							},
							{
								'name':'product_manufacturer - link',
								'value':'product_manufacturer.link'
							},
							{
								'name':'product_manufacturer - mediaId',
								'value':'product_manufacturer.mediaId'
							},
							{
								'name':'product_manufacturer - name',
								'value':'product_manufacturer.name'
							},
							{
								'name':'product_manufacturer - translated',
								'value':'product_manufacturer.translated'
							},
							{
								'name':'product_manufacturer - updatedAt',
								'value':'product_manufacturer.updatedAt'
							},
							{
								'name':'product_manufacturer - versionId',
								'value':'product_manufacturer.versionId'
							},
							{
								'name':'product_manufacturer_translation - createdAt',
								'value':'product_manufacturer_translation.createdAt'
							},
							{
								'name':'product_manufacturer_translation - customFields',
								'value':'product_manufacturer_translation.customFields'
							},
							{
								'name':'product_manufacturer_translation - description',
								'value':'product_manufacturer_translation.description'
							},
							{
								'name':'product_manufacturer_translation - languageId',
								'value':'product_manufacturer_translation.languageId'
							},
							{
								'name':'product_manufacturer_translation - name',
								'value':'product_manufacturer_translation.name'
							},
							{
								'name':'product_manufacturer_translation - productManufacturerId',
								'value':'product_manufacturer_translation.productManufacturerId'
							},
							{
								'name':'product_manufacturer_translation - productManufacturerVersionId',
								'value':'product_manufacturer_translation.productManufacturerVersionId'
							},
							{
								'name':'product_manufacturer_translation - updatedAt',
								'value':'product_manufacturer_translation.updatedAt'
							},
							{
								'name':'product_media - createdAt',
								'value':'product_media.createdAt'
							},
							{
								'name':'product_media - customFields',
								'value':'product_media.customFields'
							},
							{
								'name':'product_media - id',
								'value':'product_media.id'
							},
							{
								'name':'product_media - mediaId',
								'value':'product_media.mediaId'
							},
							{
								'name':'product_media - position',
								'value':'product_media.position'
							},
							{
								'name':'product_media - productId',
								'value':'product_media.productId'
							},
							{
								'name':'product_media - productVersionId',
								'value':'product_media.productVersionId'
							},
							{
								'name':'product_media - updatedAt',
								'value':'product_media.updatedAt'
							},
							{
								'name':'product_media - versionId',
								'value':'product_media.versionId'
							},
							{
								'name':'product_option - optionId',
								'value':'product_option.optionId'
							},
							{
								'name':'product_option - productId',
								'value':'product_option.productId'
							},
							{
								'name':'product_option - productVersionId',
								'value':'product_option.productVersionId'
							},
							{
								'name':'product_price - createdAt',
								'value':'product_price.createdAt'
							},
							{
								'name':'product_price - customFields',
								'value':'product_price.customFields'
							},
							{
								'name':'product_price - id',
								'value':'product_price.id'
							},
							{
								'name':'product_price - price',
								'value':'product_price.price'
							},
							{
								'name':'product_price - productId',
								'value':'product_price.productId'
							},
							{
								'name':'product_price - productVersionId',
								'value':'product_price.productVersionId'
							},
							{
								'name':'product_price - quantityEnd',
								'value':'product_price.quantityEnd'
							},
							{
								'name':'product_price - quantityStart',
								'value':'product_price.quantityStart'
							},
							{
								'name':'product_price - ruleId',
								'value':'product_price.ruleId'
							},
							{
								'name':'product_price - updatedAt',
								'value':'product_price.updatedAt'
							},
							{
								'name':'product_price - versionId',
								'value':'product_price.versionId'
							},
							{
								'name':'product_property - optionId',
								'value':'product_property.optionId'
							},
							{
								'name':'product_property - productId',
								'value':'product_property.productId'
							},
							{
								'name':'product_property - productVersionId',
								'value':'product_property.productVersionId'
							},
							{
								'name':'product_review - comment',
								'value':'product_review.comment'
							},
							{
								'name':'product_review - content',
								'value':'product_review.content'
							},
							{
								'name':'product_review - createdAt',
								'value':'product_review.createdAt'
							},
							{
								'name':'product_review - customerId',
								'value':'product_review.customerId'
							},
							{
								'name':'product_review - externalEmail',
								'value':'product_review.externalEmail'
							},
							{
								'name':'product_review - externalUser',
								'value':'product_review.externalUser'
							},
							{
								'name':'product_review - id',
								'value':'product_review.id'
							},
							{
								'name':'product_review - languageId',
								'value':'product_review.languageId'
							},
							{
								'name':'product_review - points',
								'value':'product_review.points'
							},
							{
								'name':'product_review - productId',
								'value':'product_review.productId'
							},
							{
								'name':'product_review - productVersionId',
								'value':'product_review.productVersionId'
							},
							{
								'name':'product_review - salesChannelId',
								'value':'product_review.salesChannelId'
							},
							{
								'name':'product_review - status',
								'value':'product_review.status'
							},
							{
								'name':'product_review - title',
								'value':'product_review.title'
							},
							{
								'name':'product_review - updatedAt',
								'value':'product_review.updatedAt'
							},
							{
								'name':'product_search_keyword - createdAt',
								'value':'product_search_keyword.createdAt'
							},
							{
								'name':'product_search_keyword - id',
								'value':'product_search_keyword.id'
							},
							{
								'name':'product_search_keyword - keyword',
								'value':'product_search_keyword.keyword'
							},
							{
								'name':'product_search_keyword - languageId',
								'value':'product_search_keyword.languageId'
							},
							{
								'name':'product_search_keyword - productId',
								'value':'product_search_keyword.productId'
							},
							{
								'name':'product_search_keyword - productVersionId',
								'value':'product_search_keyword.productVersionId'
							},
							{
								'name':'product_search_keyword - ranking',
								'value':'product_search_keyword.ranking'
							},
							{
								'name':'product_search_keyword - updatedAt',
								'value':'product_search_keyword.updatedAt'
							},
							{
								'name':'product_search_keyword - versionId',
								'value':'product_search_keyword.versionId'
							},
							{
								'name':'product_sorting - active',
								'value':'product_sorting.active'
							},
							{
								'name':'product_sorting - createdAt',
								'value':'product_sorting.createdAt'
							},
							{
								'name':'product_sorting - fields',
								'value':'product_sorting.fields'
							},
							{
								'name':'product_sorting - id',
								'value':'product_sorting.id'
							},
							{
								'name':'product_sorting - key',
								'value':'product_sorting.key'
							},
							{
								'name':'product_sorting - label',
								'value':'product_sorting.label'
							},
							{
								'name':'product_sorting - locked',
								'value':'product_sorting.locked'
							},
							{
								'name':'product_sorting - priority',
								'value':'product_sorting.priority'
							},
							{
								'name':'product_sorting - translated',
								'value':'product_sorting.translated'
							},
							{
								'name':'product_sorting - updatedAt',
								'value':'product_sorting.updatedAt'
							},
							{
								'name':'product_sorting_translation - createdAt',
								'value':'product_sorting_translation.createdAt'
							},
							{
								'name':'product_sorting_translation - label',
								'value':'product_sorting_translation.label'
							},
							{
								'name':'product_sorting_translation - languageId',
								'value':'product_sorting_translation.languageId'
							},
							{
								'name':'product_sorting_translation - productSortingId',
								'value':'product_sorting_translation.productSortingId'
							},
							{
								'name':'product_sorting_translation - updatedAt',
								'value':'product_sorting_translation.updatedAt'
							},
							{
								'name':'product_stream - apiFilter',
								'value':'product_stream.apiFilter'
							},
							{
								'name':'product_stream - createdAt',
								'value':'product_stream.createdAt'
							},
							{
								'name':'product_stream - customFields',
								'value':'product_stream.customFields'
							},
							{
								'name':'product_stream - description',
								'value':'product_stream.description'
							},
							{
								'name':'product_stream - id',
								'value':'product_stream.id'
							},
							{
								'name':'product_stream - invalid',
								'value':'product_stream.invalid'
							},
							{
								'name':'product_stream - name',
								'value':'product_stream.name'
							},
							{
								'name':'product_stream - translated',
								'value':'product_stream.translated'
							},
							{
								'name':'product_stream - updatedAt',
								'value':'product_stream.updatedAt'
							},
							{
								'name':'product_stream_filter - createdAt',
								'value':'product_stream_filter.createdAt'
							},
							{
								'name':'product_stream_filter - customFields',
								'value':'product_stream_filter.customFields'
							},
							{
								'name':'product_stream_filter - field',
								'value':'product_stream_filter.field'
							},
							{
								'name':'product_stream_filter - id',
								'value':'product_stream_filter.id'
							},
							{
								'name':'product_stream_filter - operator',
								'value':'product_stream_filter.operator'
							},
							{
								'name':'product_stream_filter - parameters',
								'value':'product_stream_filter.parameters'
							},
							{
								'name':'product_stream_filter - parentId',
								'value':'product_stream_filter.parentId'
							},
							{
								'name':'product_stream_filter - position',
								'value':'product_stream_filter.position'
							},
							{
								'name':'product_stream_filter - productStreamId',
								'value':'product_stream_filter.productStreamId'
							},
							{
								'name':'product_stream_filter - type',
								'value':'product_stream_filter.type'
							},
							{
								'name':'product_stream_filter - updatedAt',
								'value':'product_stream_filter.updatedAt'
							},
							{
								'name':'product_stream_filter - value',
								'value':'product_stream_filter.value'
							},
							{
								'name':'product_stream_translation - createdAt',
								'value':'product_stream_translation.createdAt'
							},
							{
								'name':'product_stream_translation - customFields',
								'value':'product_stream_translation.customFields'
							},
							{
								'name':'product_stream_translation - description',
								'value':'product_stream_translation.description'
							},
							{
								'name':'product_stream_translation - languageId',
								'value':'product_stream_translation.languageId'
							},
							{
								'name':'product_stream_translation - name',
								'value':'product_stream_translation.name'
							},
							{
								'name':'product_stream_translation - productStreamId',
								'value':'product_stream_translation.productStreamId'
							},
							{
								'name':'product_stream_translation - updatedAt',
								'value':'product_stream_translation.updatedAt'
							},
							{
								'name':'product_tag - productId',
								'value':'product_tag.productId'
							},
							{
								'name':'product_tag - productVersionId',
								'value':'product_tag.productVersionId'
							},
							{
								'name':'product_tag - tagId',
								'value':'product_tag.tagId'
							},
							{
								'name':'product_translation - createdAt',
								'value':'product_translation.createdAt'
							},
							{
								'name':'product_translation - customFields',
								'value':'product_translation.customFields'
							},
							{
								'name':'product_translation - customSearchKeywords',
								'value':'product_translation.customSearchKeywords'
							},
							{
								'name':'product_translation - description',
								'value':'product_translation.description'
							},
							{
								'name':'product_translation - keywords',
								'value':'product_translation.keywords'
							},
							{
								'name':'product_translation - languageId',
								'value':'product_translation.languageId'
							},
							{
								'name':'product_translation - metaDescription',
								'value':'product_translation.metaDescription'
							},
							{
								'name':'product_translation - metaTitle',
								'value':'product_translation.metaTitle'
							},
							{
								'name':'product_translation - name',
								'value':'product_translation.name'
							},
							{
								'name':'product_translation - packUnit',
								'value':'product_translation.packUnit'
							},
							{
								'name':'product_translation - packUnitPlural',
								'value':'product_translation.packUnitPlural'
							},
							{
								'name':'product_translation - productId',
								'value':'product_translation.productId'
							},
							{
								'name':'product_translation - productVersionId',
								'value':'product_translation.productVersionId'
							},
							{
								'name':'product_translation - updatedAt',
								'value':'product_translation.updatedAt'
							},
							{
								'name':'product_visibility - createdAt',
								'value':'product_visibility.createdAt'
							},
							{
								'name':'product_visibility - id',
								'value':'product_visibility.id'
							},
							{
								'name':'product_visibility - productId',
								'value':'product_visibility.productId'
							},
							{
								'name':'product_visibility - productVersionId',
								'value':'product_visibility.productVersionId'
							},
							{
								'name':'product_visibility - salesChannelId',
								'value':'product_visibility.salesChannelId'
							},
							{
								'name':'product_visibility - updatedAt',
								'value':'product_visibility.updatedAt'
							},
							{
								'name':'product_visibility - visibility',
								'value':'product_visibility.visibility'
							},
							{
								'name':'promotion - active',
								'value':'promotion.active'
							},
							{
								'name':'promotion - code',
								'value':'promotion.code'
							},
							{
								'name':'promotion - createdAt',
								'value':'promotion.createdAt'
							},
							{
								'name':'promotion - customerRestriction',
								'value':'promotion.customerRestriction'
							},
							{
								'name':'promotion - exclusionIds',
								'value':'promotion.exclusionIds'
							},
							{
								'name':'promotion - exclusive',
								'value':'promotion.exclusive'
							},
							{
								'name':'promotion - id',
								'value':'promotion.id'
							},
							{
								'name':'promotion - individualCodePattern',
								'value':'promotion.individualCodePattern'
							},
							{
								'name':'promotion - maxRedemptionsGlobal',
								'value':'promotion.maxRedemptionsGlobal'
							},
							{
								'name':'promotion - maxRedemptionsPerCustomer',
								'value':'promotion.maxRedemptionsPerCustomer'
							},
							{
								'name':'promotion - name',
								'value':'promotion.name'
							},
							{
								'name':'promotion - orderCount',
								'value':'promotion.orderCount'
							},
							{
								'name':'promotion - ordersPerCustomerCount',
								'value':'promotion.ordersPerCustomerCount'
							},
							{
								'name':'promotion - translated',
								'value':'promotion.translated'
							},
							{
								'name':'promotion - updatedAt',
								'value':'promotion.updatedAt'
							},
							{
								'name':'promotion - useCodes',
								'value':'promotion.useCodes'
							},
							{
								'name':'promotion - useIndividualCodes',
								'value':'promotion.useIndividualCodes'
							},
							{
								'name':'promotion - useSetGroups',
								'value':'promotion.useSetGroups'
							},
							{
								'name':'promotion - validFrom',
								'value':'promotion.validFrom'
							},
							{
								'name':'promotion - validUntil',
								'value':'promotion.validUntil'
							},
							{
								'name':'promotion_cart_rule - promotionId',
								'value':'promotion_cart_rule.promotionId'
							},
							{
								'name':'promotion_cart_rule - ruleId',
								'value':'promotion_cart_rule.ruleId'
							},
							{
								'name':'promotion_discount - applierKey',
								'value':'promotion_discount.applierKey'
							},
							{
								'name':'promotion_discount - considerAdvancedRules',
								'value':'promotion_discount.considerAdvancedRules'
							},
							{
								'name':'promotion_discount - createdAt',
								'value':'promotion_discount.createdAt'
							},
							{
								'name':'promotion_discount - id',
								'value':'promotion_discount.id'
							},
							{
								'name':'promotion_discount - maxValue',
								'value':'promotion_discount.maxValue'
							},
							{
								'name':'promotion_discount - promotionId',
								'value':'promotion_discount.promotionId'
							},
							{
								'name':'promotion_discount - scope',
								'value':'promotion_discount.scope'
							},
							{
								'name':'promotion_discount - sorterKey',
								'value':'promotion_discount.sorterKey'
							},
							{
								'name':'promotion_discount - type',
								'value':'promotion_discount.type'
							},
							{
								'name':'promotion_discount - updatedAt',
								'value':'promotion_discount.updatedAt'
							},
							{
								'name':'promotion_discount - usageKey',
								'value':'promotion_discount.usageKey'
							},
							{
								'name':'promotion_discount - value',
								'value':'promotion_discount.value'
							},
							{
								'name':'promotion_discount_prices - createdAt',
								'value':'promotion_discount_prices.createdAt'
							},
							{
								'name':'promotion_discount_prices - currencyId',
								'value':'promotion_discount_prices.currencyId'
							},
							{
								'name':'promotion_discount_prices - discountId',
								'value':'promotion_discount_prices.discountId'
							},
							{
								'name':'promotion_discount_prices - id',
								'value':'promotion_discount_prices.id'
							},
							{
								'name':'promotion_discount_prices - price',
								'value':'promotion_discount_prices.price'
							},
							{
								'name':'promotion_discount_prices - updatedAt',
								'value':'promotion_discount_prices.updatedAt'
							},
							{
								'name':'promotion_discount_rule - discountId',
								'value':'promotion_discount_rule.discountId'
							},
							{
								'name':'promotion_discount_rule - ruleId',
								'value':'promotion_discount_rule.ruleId'
							},
							{
								'name':'promotion_individual_code - code',
								'value':'promotion_individual_code.code'
							},
							{
								'name':'promotion_individual_code - createdAt',
								'value':'promotion_individual_code.createdAt'
							},
							{
								'name':'promotion_individual_code - id',
								'value':'promotion_individual_code.id'
							},
							{
								'name':'promotion_individual_code - payload',
								'value':'promotion_individual_code.payload'
							},
							{
								'name':'promotion_individual_code - promotionId',
								'value':'promotion_individual_code.promotionId'
							},
							{
								'name':'promotion_individual_code - updatedAt',
								'value':'promotion_individual_code.updatedAt'
							},
							{
								'name':'promotion_order_rule - promotionId',
								'value':'promotion_order_rule.promotionId'
							},
							{
								'name':'promotion_order_rule - ruleId',
								'value':'promotion_order_rule.ruleId'
							},
							{
								'name':'promotion_persona_customer - customerId',
								'value':'promotion_persona_customer.customerId'
							},
							{
								'name':'promotion_persona_customer - promotionId',
								'value':'promotion_persona_customer.promotionId'
							},
							{
								'name':'promotion_persona_rule - promotionId',
								'value':'promotion_persona_rule.promotionId'
							},
							{
								'name':'promotion_persona_rule - ruleId',
								'value':'promotion_persona_rule.ruleId'
							},
							{
								'name':'promotion_sales_channel - createdAt',
								'value':'promotion_sales_channel.createdAt'
							},
							{
								'name':'promotion_sales_channel - id',
								'value':'promotion_sales_channel.id'
							},
							{
								'name':'promotion_sales_channel - priority',
								'value':'promotion_sales_channel.priority'
							},
							{
								'name':'promotion_sales_channel - promotionId',
								'value':'promotion_sales_channel.promotionId'
							},
							{
								'name':'promotion_sales_channel - salesChannelId',
								'value':'promotion_sales_channel.salesChannelId'
							},
							{
								'name':'promotion_sales_channel - updatedAt',
								'value':'promotion_sales_channel.updatedAt'
							},
							{
								'name':'promotion_setgroup - createdAt',
								'value':'promotion_setgroup.createdAt'
							},
							{
								'name':'promotion_setgroup - id',
								'value':'promotion_setgroup.id'
							},
							{
								'name':'promotion_setgroup - packagerKey',
								'value':'promotion_setgroup.packagerKey'
							},
							{
								'name':'promotion_setgroup - promotionId',
								'value':'promotion_setgroup.promotionId'
							},
							{
								'name':'promotion_setgroup - sorterKey',
								'value':'promotion_setgroup.sorterKey'
							},
							{
								'name':'promotion_setgroup - updatedAt',
								'value':'promotion_setgroup.updatedAt'
							},
							{
								'name':'promotion_setgroup - value',
								'value':'promotion_setgroup.value'
							},
							{
								'name':'promotion_setgroup_rule - ruleId',
								'value':'promotion_setgroup_rule.ruleId'
							},
							{
								'name':'promotion_setgroup_rule - setgroupId',
								'value':'promotion_setgroup_rule.setgroupId'
							},
							{
								'name':'promotion_translation - createdAt',
								'value':'promotion_translation.createdAt'
							},
							{
								'name':'promotion_translation - languageId',
								'value':'promotion_translation.languageId'
							},
							{
								'name':'promotion_translation - name',
								'value':'promotion_translation.name'
							},
							{
								'name':'promotion_translation - promotionId',
								'value':'promotion_translation.promotionId'
							},
							{
								'name':'promotion_translation - updatedAt',
								'value':'promotion_translation.updatedAt'
							},
							{
								'name':'property_group - createdAt',
								'value':'property_group.createdAt'
							},
							{
								'name':'property_group - customFields',
								'value':'property_group.customFields'
							},
							{
								'name':'property_group - description',
								'value':'property_group.description'
							},
							{
								'name':'property_group - displayType',
								'value':'property_group.displayType'
							},
							{
								'name':'property_group - filterable',
								'value':'property_group.filterable'
							},
							{
								'name':'property_group - id',
								'value':'property_group.id'
							},
							{
								'name':'property_group - name',
								'value':'property_group.name'
							},
							{
								'name':'property_group - position',
								'value':'property_group.position'
							},
							{
								'name':'property_group - sortingType',
								'value':'property_group.sortingType'
							},
							{
								'name':'property_group - translated',
								'value':'property_group.translated'
							},
							{
								'name':'property_group - updatedAt',
								'value':'property_group.updatedAt'
							},
							{
								'name':'property_group_option - colorHexCode',
								'value':'property_group_option.colorHexCode'
							},
							{
								'name':'property_group_option - createdAt',
								'value':'property_group_option.createdAt'
							},
							{
								'name':'property_group_option - customFields',
								'value':'property_group_option.customFields'
							},
							{
								'name':'property_group_option - groupId',
								'value':'property_group_option.groupId'
							},
							{
								'name':'property_group_option - id',
								'value':'property_group_option.id'
							},
							{
								'name':'property_group_option - mediaId',
								'value':'property_group_option.mediaId'
							},
							{
								'name':'property_group_option - name',
								'value':'property_group_option.name'
							},
							{
								'name':'property_group_option - position',
								'value':'property_group_option.position'
							},
							{
								'name':'property_group_option - translated',
								'value':'property_group_option.translated'
							},
							{
								'name':'property_group_option - updatedAt',
								'value':'property_group_option.updatedAt'
							},
							{
								'name':'property_group_option_translation - createdAt',
								'value':'property_group_option_translation.createdAt'
							},
							{
								'name':'property_group_option_translation - customFields',
								'value':'property_group_option_translation.customFields'
							},
							{
								'name':'property_group_option_translation - languageId',
								'value':'property_group_option_translation.languageId'
							},
							{
								'name':'property_group_option_translation - name',
								'value':'property_group_option_translation.name'
							},
							{
								'name':'property_group_option_translation - position',
								'value':'property_group_option_translation.position'
							},
							{
								'name':'property_group_option_translation - propertyGroupOptionId',
								'value':'property_group_option_translation.propertyGroupOptionId'
							},
							{
								'name':'property_group_option_translation - updatedAt',
								'value':'property_group_option_translation.updatedAt'
							},
							{
								'name':'property_group_translation - createdAt',
								'value':'property_group_translation.createdAt'
							},
							{
								'name':'property_group_translation - customFields',
								'value':'property_group_translation.customFields'
							},
							{
								'name':'property_group_translation - description',
								'value':'property_group_translation.description'
							},
							{
								'name':'property_group_translation - languageId',
								'value':'property_group_translation.languageId'
							},
							{
								'name':'property_group_translation - name',
								'value':'property_group_translation.name'
							},
							{
								'name':'property_group_translation - position',
								'value':'property_group_translation.position'
							},
							{
								'name':'property_group_translation - propertyGroupId',
								'value':'property_group_translation.propertyGroupId'
							},
							{
								'name':'property_group_translation - updatedAt',
								'value':'property_group_translation.updatedAt'
							},
							{
								'name':'rule - createdAt',
								'value':'rule.createdAt'
							},
							{
								'name':'rule - customFields',
								'value':'rule.customFields'
							},
							{
								'name':'rule - description',
								'value':'rule.description'
							},
							{
								'name':'rule - id',
								'value':'rule.id'
							},
							{
								'name':'rule - invalid',
								'value':'rule.invalid'
							},
							{
								'name':'rule - moduleTypes',
								'value':'rule.moduleTypes'
							},
							{
								'name':'rule - name',
								'value':'rule.name'
							},
							{
								'name':'rule - payload',
								'value':'rule.payload'
							},
							{
								'name':'rule - priority',
								'value':'rule.priority'
							},
							{
								'name':'rule - updatedAt',
								'value':'rule.updatedAt'
							},
							{
								'name':'rule_condition - createdAt',
								'value':'rule_condition.createdAt'
							},
							{
								'name':'rule_condition - customFields',
								'value':'rule_condition.customFields'
							},
							{
								'name':'rule_condition - id',
								'value':'rule_condition.id'
							},
							{
								'name':'rule_condition - parentId',
								'value':'rule_condition.parentId'
							},
							{
								'name':'rule_condition - position',
								'value':'rule_condition.position'
							},
							{
								'name':'rule_condition - ruleId',
								'value':'rule_condition.ruleId'
							},
							{
								'name':'rule_condition - type',
								'value':'rule_condition.type'
							},
							{
								'name':'rule_condition - updatedAt',
								'value':'rule_condition.updatedAt'
							},
							{
								'name':'rule_condition - value',
								'value':'rule_condition.value'
							},
							{
								'name':'saas_app_storefront_config - appId',
								'value':'saas_app_storefront_config.appId'
							},
							{
								'name':'saas_app_storefront_config - appVersion',
								'value':'saas_app_storefront_config.appVersion'
							},
							{
								'name':'saas_app_storefront_config - assetPaths',
								'value':'saas_app_storefront_config.assetPaths'
							},
							{
								'name':'saas_app_storefront_config - author',
								'value':'saas_app_storefront_config.author'
							},
							{
								'name':'saas_app_storefront_config - basePath',
								'value':'saas_app_storefront_config.basePath'
							},
							{
								'name':'saas_app_storefront_config - createdAt',
								'value':'saas_app_storefront_config.createdAt'
							},
							{
								'name':'saas_app_storefront_config - id',
								'value':'saas_app_storefront_config.id'
							},
							{
								'name':'saas_app_storefront_config - isTheme',
								'value':'saas_app_storefront_config.isTheme'
							},
							{
								'name':'saas_app_storefront_config - name',
								'value':'saas_app_storefront_config.name'
							},
							{
								'name':'saas_app_storefront_config - previewMedia',
								'value':'saas_app_storefront_config.previewMedia'
							},
							{
								'name':'saas_app_storefront_config - scriptFiles',
								'value':'saas_app_storefront_config.scriptFiles'
							},
							{
								'name':'saas_app_storefront_config - storefrontEntryPath',
								'value':'saas_app_storefront_config.storefrontEntryPath'
							},
							{
								'name':'saas_app_storefront_config - styleFiles',
								'value':'saas_app_storefront_config.styleFiles'
							},
							{
								'name':'saas_app_storefront_config - technicalName',
								'value':'saas_app_storefront_config.technicalName'
							},
							{
								'name':'saas_app_storefront_config - themeConfig',
								'value':'saas_app_storefront_config.themeConfig'
							},
							{
								'name':'saas_app_storefront_config - updatedAt',
								'value':'saas_app_storefront_config.updatedAt'
							},
							{
								'name':'saas_app_storefront_config - viewInheritance',
								'value':'saas_app_storefront_config.viewInheritance'
							},
							{
								'name':'saas_sbp_user_data - createdAt',
								'value':'saas_sbp_user_data.createdAt'
							},
							{
								'name':'saas_sbp_user_data - id',
								'value':'saas_sbp_user_data.id'
							},
							{
								'name':'saas_sbp_user_data - lastSbpStatusChange',
								'value':'saas_sbp_user_data.lastSbpStatusChange'
							},
							{
								'name':'saas_sbp_user_data - sbpAccessToken',
								'value':'saas_sbp_user_data.sbpAccessToken'
							},
							{
								'name':'saas_sbp_user_data - sbpStatus',
								'value':'saas_sbp_user_data.sbpStatus'
							},
							{
								'name':'saas_sbp_user_data - sbpUserId',
								'value':'saas_sbp_user_data.sbpUserId'
							},
							{
								'name':'saas_sbp_user_data - updatedAt',
								'value':'saas_sbp_user_data.updatedAt'
							},
							{
								'name':'saas_sbp_user_data - userId',
								'value':'saas_sbp_user_data.userId'
							},
							{
								'name':'saas_storefront_demo_token - createdAt',
								'value':'saas_storefront_demo_token.createdAt'
							},
							{
								'name':'saas_storefront_demo_token - expiresAt',
								'value':'saas_storefront_demo_token.expiresAt'
							},
							{
								'name':'saas_storefront_demo_token - id',
								'value':'saas_storefront_demo_token.id'
							},
							{
								'name':'saas_storefront_demo_token - token',
								'value':'saas_storefront_demo_token.token'
							},
							{
								'name':'saas_storefront_demo_token - updatedAt',
								'value':'saas_storefront_demo_token.updatedAt'
							},
							{
								'name':'saas_storefront_demo_token - userId',
								'value':'saas_storefront_demo_token.userId'
							},
							{
								'name':'saas_user_login_token - createdAt',
								'value':'saas_user_login_token.createdAt'
							},
							{
								'name':'saas_user_login_token - expiresAt',
								'value':'saas_user_login_token.expiresAt'
							},
							{
								'name':'saas_user_login_token - id',
								'value':'saas_user_login_token.id'
							},
							{
								'name':'saas_user_login_token - token',
								'value':'saas_user_login_token.token'
							},
							{
								'name':'saas_user_login_token - updatedAt',
								'value':'saas_user_login_token.updatedAt'
							},
							{
								'name':'saas_user_login_token - userId',
								'value':'saas_user_login_token.userId'
							},
							{
								'name':'sales_channel - accessKey',
								'value':'sales_channel.accessKey'
							},
							{
								'name':'sales_channel - active',
								'value':'sales_channel.active'
							},
							{
								'name':'sales_channel - analyticsId',
								'value':'sales_channel.analyticsId'
							},
							{
								'name':'sales_channel - configuration',
								'value':'sales_channel.configuration'
							},
							{
								'name':'sales_channel - countryId',
								'value':'sales_channel.countryId'
							},
							{
								'name':'sales_channel - createdAt',
								'value':'sales_channel.createdAt'
							},
							{
								'name':'sales_channel - currencyId',
								'value':'sales_channel.currencyId'
							},
							{
								'name':'sales_channel - customFields',
								'value':'sales_channel.customFields'
							},
							{
								'name':'sales_channel - customerGroupId',
								'value':'sales_channel.customerGroupId'
							},
							{
								'name':'sales_channel - footerCategoryId',
								'value':'sales_channel.footerCategoryId'
							},
							{
								'name':'sales_channel - footerCategoryVersionId',
								'value':'sales_channel.footerCategoryVersionId'
							},
							{
								'name':'sales_channel - hreflangActive',
								'value':'sales_channel.hreflangActive'
							},
							{
								'name':'sales_channel - hreflangDefaultDomainId',
								'value':'sales_channel.hreflangDefaultDomainId'
							},
							{
								'name':'sales_channel - id',
								'value':'sales_channel.id'
							},
							{
								'name':'sales_channel - languageId',
								'value':'sales_channel.languageId'
							},
							{
								'name':'sales_channel - mailHeaderFooterId',
								'value':'sales_channel.mailHeaderFooterId'
							},
							{
								'name':'sales_channel - maintenance',
								'value':'sales_channel.maintenance'
							},
							{
								'name':'sales_channel - maintenanceIpWhitelist',
								'value':'sales_channel.maintenanceIpWhitelist'
							},
							{
								'name':'sales_channel - name',
								'value':'sales_channel.name'
							},
							{
								'name':'sales_channel - navigationCategoryDepth',
								'value':'sales_channel.navigationCategoryDepth'
							},
							{
								'name':'sales_channel - navigationCategoryId',
								'value':'sales_channel.navigationCategoryId'
							},
							{
								'name':'sales_channel - navigationCategoryVersionId',
								'value':'sales_channel.navigationCategoryVersionId'
							},
							{
								'name':'sales_channel - paymentMethodId',
								'value':'sales_channel.paymentMethodId'
							},
							{
								'name':'sales_channel - paymentMethodIds',
								'value':'sales_channel.paymentMethodIds'
							},
							{
								'name':'sales_channel - serviceCategoryId',
								'value':'sales_channel.serviceCategoryId'
							},
							{
								'name':'sales_channel - serviceCategoryVersionId',
								'value':'sales_channel.serviceCategoryVersionId'
							},
							{
								'name':'sales_channel - shippingMethodId',
								'value':'sales_channel.shippingMethodId'
							},
							{
								'name':'sales_channel - shortName',
								'value':'sales_channel.shortName'
							},
							{
								'name':'sales_channel - taxCalculationType',
								'value':'sales_channel.taxCalculationType'
							},
							{
								'name':'sales_channel - translated',
								'value':'sales_channel.translated'
							},
							{
								'name':'sales_channel - typeId',
								'value':'sales_channel.typeId'
							},
							{
								'name':'sales_channel - updatedAt',
								'value':'sales_channel.updatedAt'
							},
							{
								'name':'sales_channel_analytics - active',
								'value':'sales_channel_analytics.active'
							},
							{
								'name':'sales_channel_analytics - anonymizeIp',
								'value':'sales_channel_analytics.anonymizeIp'
							},
							{
								'name':'sales_channel_analytics - createdAt',
								'value':'sales_channel_analytics.createdAt'
							},
							{
								'name':'sales_channel_analytics - id',
								'value':'sales_channel_analytics.id'
							},
							{
								'name':'sales_channel_analytics - trackOrders',
								'value':'sales_channel_analytics.trackOrders'
							},
							{
								'name':'sales_channel_analytics - trackingId',
								'value':'sales_channel_analytics.trackingId'
							},
							{
								'name':'sales_channel_analytics - updatedAt',
								'value':'sales_channel_analytics.updatedAt'
							},
							{
								'name':'sales_channel_country - countryId',
								'value':'sales_channel_country.countryId'
							},
							{
								'name':'sales_channel_country - salesChannelId',
								'value':'sales_channel_country.salesChannelId'
							},
							{
								'name':'sales_channel_currency - currencyId',
								'value':'sales_channel_currency.currencyId'
							},
							{
								'name':'sales_channel_currency - salesChannelId',
								'value':'sales_channel_currency.salesChannelId'
							},
							{
								'name':'sales_channel_domain - createdAt',
								'value':'sales_channel_domain.createdAt'
							},
							{
								'name':'sales_channel_domain - currencyId',
								'value':'sales_channel_domain.currencyId'
							},
							{
								'name':'sales_channel_domain - customFields',
								'value':'sales_channel_domain.customFields'
							},
							{
								'name':'sales_channel_domain - hreflangUseOnlyLocale',
								'value':'sales_channel_domain.hreflangUseOnlyLocale'
							},
							{
								'name':'sales_channel_domain - id',
								'value':'sales_channel_domain.id'
							},
							{
								'name':'sales_channel_domain - languageId',
								'value':'sales_channel_domain.languageId'
							},
							{
								'name':'sales_channel_domain - salesChannelId',
								'value':'sales_channel_domain.salesChannelId'
							},
							{
								'name':'sales_channel_domain - snippetSetId',
								'value':'sales_channel_domain.snippetSetId'
							},
							{
								'name':'sales_channel_domain - updatedAt',
								'value':'sales_channel_domain.updatedAt'
							},
							{
								'name':'sales_channel_domain - url',
								'value':'sales_channel_domain.url'
							},
							{
								'name':'sales_channel_language - languageId',
								'value':'sales_channel_language.languageId'
							},
							{
								'name':'sales_channel_language - salesChannelId',
								'value':'sales_channel_language.salesChannelId'
							},
							{
								'name':'sales_channel_payment_method - paymentMethodId',
								'value':'sales_channel_payment_method.paymentMethodId'
							},
							{
								'name':'sales_channel_payment_method - salesChannelId',
								'value':'sales_channel_payment_method.salesChannelId'
							},
							{
								'name':'sales_channel_shipping_method - salesChannelId',
								'value':'sales_channel_shipping_method.salesChannelId'
							},
							{
								'name':'sales_channel_shipping_method - shippingMethodId',
								'value':'sales_channel_shipping_method.shippingMethodId'
							},
							{
								'name':'sales_channel_translation - createdAt',
								'value':'sales_channel_translation.createdAt'
							},
							{
								'name':'sales_channel_translation - customFields',
								'value':'sales_channel_translation.customFields'
							},
							{
								'name':'sales_channel_translation - languageId',
								'value':'sales_channel_translation.languageId'
							},
							{
								'name':'sales_channel_translation - name',
								'value':'sales_channel_translation.name'
							},
							{
								'name':'sales_channel_translation - salesChannelId',
								'value':'sales_channel_translation.salesChannelId'
							},
							{
								'name':'sales_channel_translation - updatedAt',
								'value':'sales_channel_translation.updatedAt'
							},
							{
								'name':'sales_channel_type - coverUrl',
								'value':'sales_channel_type.coverUrl'
							},
							{
								'name':'sales_channel_type - createdAt',
								'value':'sales_channel_type.createdAt'
							},
							{
								'name':'sales_channel_type - customFields',
								'value':'sales_channel_type.customFields'
							},
							{
								'name':'sales_channel_type - description',
								'value':'sales_channel_type.description'
							},
							{
								'name':'sales_channel_type - descriptionLong',
								'value':'sales_channel_type.descriptionLong'
							},
							{
								'name':'sales_channel_type - iconName',
								'value':'sales_channel_type.iconName'
							},
							{
								'name':'sales_channel_type - id',
								'value':'sales_channel_type.id'
							},
							{
								'name':'sales_channel_type - manufacturer',
								'value':'sales_channel_type.manufacturer'
							},
							{
								'name':'sales_channel_type - name',
								'value':'sales_channel_type.name'
							},
							{
								'name':'sales_channel_type - screenshotUrls',
								'value':'sales_channel_type.screenshotUrls'
							},
							{
								'name':'sales_channel_type - translated',
								'value':'sales_channel_type.translated'
							},
							{
								'name':'sales_channel_type - updatedAt',
								'value':'sales_channel_type.updatedAt'
							},
							{
								'name':'sales_channel_type_translation - createdAt',
								'value':'sales_channel_type_translation.createdAt'
							},
							{
								'name':'sales_channel_type_translation - customFields',
								'value':'sales_channel_type_translation.customFields'
							},
							{
								'name':'sales_channel_type_translation - description',
								'value':'sales_channel_type_translation.description'
							},
							{
								'name':'sales_channel_type_translation - descriptionLong',
								'value':'sales_channel_type_translation.descriptionLong'
							},
							{
								'name':'sales_channel_type_translation - languageId',
								'value':'sales_channel_type_translation.languageId'
							},
							{
								'name':'sales_channel_type_translation - manufacturer',
								'value':'sales_channel_type_translation.manufacturer'
							},
							{
								'name':'sales_channel_type_translation - name',
								'value':'sales_channel_type_translation.name'
							},
							{
								'name':'sales_channel_type_translation - salesChannelTypeId',
								'value':'sales_channel_type_translation.salesChannelTypeId'
							},
							{
								'name':'sales_channel_type_translation - updatedAt',
								'value':'sales_channel_type_translation.updatedAt'
							},
							{
								'name':'salutation - createdAt',
								'value':'salutation.createdAt'
							},
							{
								'name':'salutation - displayName',
								'value':'salutation.displayName'
							},
							{
								'name':'salutation - id',
								'value':'salutation.id'
							},
							{
								'name':'salutation - letterName',
								'value':'salutation.letterName'
							},
							{
								'name':'salutation - salutationKey',
								'value':'salutation.salutationKey'
							},
							{
								'name':'salutation - translated',
								'value':'salutation.translated'
							},
							{
								'name':'salutation - updatedAt',
								'value':'salutation.updatedAt'
							},
							{
								'name':'salutation_translation - createdAt',
								'value':'salutation_translation.createdAt'
							},
							{
								'name':'salutation_translation - displayName',
								'value':'salutation_translation.displayName'
							},
							{
								'name':'salutation_translation - languageId',
								'value':'salutation_translation.languageId'
							},
							{
								'name':'salutation_translation - letterName',
								'value':'salutation_translation.letterName'
							},
							{
								'name':'salutation_translation - salutationId',
								'value':'salutation_translation.salutationId'
							},
							{
								'name':'salutation_translation - updatedAt',
								'value':'salutation_translation.updatedAt'
							},
							{
								'name':'scheduled_task - createdAt',
								'value':'scheduled_task.createdAt'
							},
							{
								'name':'scheduled_task - id',
								'value':'scheduled_task.id'
							},
							{
								'name':'scheduled_task - lastExecutionTime',
								'value':'scheduled_task.lastExecutionTime'
							},
							{
								'name':'scheduled_task - name',
								'value':'scheduled_task.name'
							},
							{
								'name':'scheduled_task - nextExecutionTime',
								'value':'scheduled_task.nextExecutionTime'
							},
							{
								'name':'scheduled_task - runInterval',
								'value':'scheduled_task.runInterval'
							},
							{
								'name':'scheduled_task - scheduledTaskClass',
								'value':'scheduled_task.scheduledTaskClass'
							},
							{
								'name':'scheduled_task - status',
								'value':'scheduled_task.status'
							},
							{
								'name':'scheduled_task - updatedAt',
								'value':'scheduled_task.updatedAt'
							},
							{
								'name':'sendcloud_api_requests_cache - createdAt',
								'value':'sendcloud_api_requests_cache.createdAt'
							},
							{
								'name':'sendcloud_api_requests_cache - data',
								'value':'sendcloud_api_requests_cache.data'
							},
							{
								'name':'sendcloud_api_requests_cache - id',
								'value':'sendcloud_api_requests_cache.id'
							},
							{
								'name':'sendcloud_api_requests_cache - key',
								'value':'sendcloud_api_requests_cache.key'
							},
							{
								'name':'sendcloud_api_requests_cache - updatedAt',
								'value':'sendcloud_api_requests_cache.updatedAt'
							},
							{
								'name':'sendcloud_parcels - id',
								'value':'sendcloud_parcels.id'
							},
							{
								'name':'sendcloud_parcels - orderNumber',
								'value':'sendcloud_parcels.orderNumber'
							},
							{
								'name':'sendcloud_parcels - parcelId',
								'value':'sendcloud_parcels.parcelId'
							},
							{
								'name':'sendcloud_parcels - sendcloudShippingMethodId',
								'value':'sendcloud_parcels.sendcloudShippingMethodId'
							},
							{
								'name':'sendcloud_parcels - sendcloudShippingMethodName',
								'value':'sendcloud_parcels.sendcloudShippingMethodName'
							},
							{
								'name':'sendcloud_parcels - sendcloudStatus',
								'value':'sendcloud_parcels.sendcloudStatus'
							},
							{
								'name':'sendcloud_parcels - sendcloudStatusId',
								'value':'sendcloud_parcels.sendcloudStatusId'
							},
							{
								'name':'sendcloud_parcels - servicePointId',
								'value':'sendcloud_parcels.servicePointId'
							},
							{
								'name':'sendcloud_parcels - trackingNumber',
								'value':'sendcloud_parcels.trackingNumber'
							},
							{
								'name':'sendcloud_parcels - trackingUrl',
								'value':'sendcloud_parcels.trackingUrl'
							},
							{
								'name':'sendcloud_queues - createTimestamp',
								'value':'sendcloud_queues.createTimestamp'
							},
							{
								'name':'sendcloud_queues - failTimestamp',
								'value':'sendcloud_queues.failTimestamp'
							},
							{
								'name':'sendcloud_queues - failureDescription',
								'value':'sendcloud_queues.failureDescription'
							},
							{
								'name':'sendcloud_queues - finishTimestamp',
								'value':'sendcloud_queues.finishTimestamp'
							},
							{
								'name':'sendcloud_queues - id',
								'value':'sendcloud_queues.id'
							},
							{
								'name':'sendcloud_queues - internalId',
								'value':'sendcloud_queues.internalId'
							},
							{
								'name':'sendcloud_queues - lastExecutionProgress',
								'value':'sendcloud_queues.lastExecutionProgress'
							},
							{
								'name':'sendcloud_queues - lastUpdateTimestamp',
								'value':'sendcloud_queues.lastUpdateTimestamp'
							},
							{
								'name':'sendcloud_queues - progress',
								'value':'sendcloud_queues.progress'
							},
							{
								'name':'sendcloud_queues - queueName',
								'value':'sendcloud_queues.queueName'
							},
							{
								'name':'sendcloud_queues - queueTimestamp',
								'value':'sendcloud_queues.queueTimestamp'
							},
							{
								'name':'sendcloud_queues - retries',
								'value':'sendcloud_queues.retries'
							},
							{
								'name':'sendcloud_queues - serializedTask',
								'value':'sendcloud_queues.serializedTask'
							},
							{
								'name':'sendcloud_queues - startTimestamp',
								'value':'sendcloud_queues.startTimestamp'
							},
							{
								'name':'sendcloud_queues - status',
								'value':'sendcloud_queues.status'
							},
							{
								'name':'sendcloud_queues - type',
								'value':'sendcloud_queues.type'
							},
							{
								'name':'sendcloud_servicepoints - customerNumber',
								'value':'sendcloud_servicepoints.customerNumber'
							},
							{
								'name':'sendcloud_servicepoints - id',
								'value':'sendcloud_servicepoints.id'
							},
							{
								'name':'sendcloud_servicepoints - servicePointInfo',
								'value':'sendcloud_servicepoints.servicePointInfo'
							},
							{
								'name':'sendcloud_shipments - id',
								'value':'sendcloud_shipments.id'
							},
							{
								'name':'sendcloud_shipments - orderNumber',
								'value':'sendcloud_shipments.orderNumber'
							},
							{
								'name':'sendcloud_shipments - sendcloudShippingMethodId',
								'value':'sendcloud_shipments.sendcloudShippingMethodId'
							},
							{
								'name':'sendcloud_shipments - sendcloudStatus',
								'value':'sendcloud_shipments.sendcloudStatus'
							},
							{
								'name':'sendcloud_shipments - servicePointId',
								'value':'sendcloud_shipments.servicePointId'
							},
							{
								'name':'sendcloud_shipments - servicePointInfo',
								'value':'sendcloud_shipments.servicePointInfo'
							},
							{
								'name':'seo_url - createdAt',
								'value':'seo_url.createdAt'
							},
							{
								'name':'seo_url - customFields',
								'value':'seo_url.customFields'
							},
							{
								'name':'seo_url - foreignKey',
								'value':'seo_url.foreignKey'
							},
							{
								'name':'seo_url - id',
								'value':'seo_url.id'
							},
							{
								'name':'seo_url - isCanonical',
								'value':'seo_url.isCanonical'
							},
							{
								'name':'seo_url - isDeleted',
								'value':'seo_url.isDeleted'
							},
							{
								'name':'seo_url - isModified',
								'value':'seo_url.isModified'
							},
							{
								'name':'seo_url - languageId',
								'value':'seo_url.languageId'
							},
							{
								'name':'seo_url - pathInfo',
								'value':'seo_url.pathInfo'
							},
							{
								'name':'seo_url - routeName',
								'value':'seo_url.routeName'
							},
							{
								'name':'seo_url - salesChannelId',
								'value':'seo_url.salesChannelId'
							},
							{
								'name':'seo_url - seoPathInfo',
								'value':'seo_url.seoPathInfo'
							},
							{
								'name':'seo_url - updatedAt',
								'value':'seo_url.updatedAt'
							},
							{
								'name':'seo_url - url',
								'value':'seo_url.url'
							},
							{
								'name':'seo_url_template - createdAt',
								'value':'seo_url_template.createdAt'
							},
							{
								'name':'seo_url_template - customFields',
								'value':'seo_url_template.customFields'
							},
							{
								'name':'seo_url_template - entityName',
								'value':'seo_url_template.entityName'
							},
							{
								'name':'seo_url_template - id',
								'value':'seo_url_template.id'
							},
							{
								'name':'seo_url_template - isValid',
								'value':'seo_url_template.isValid'
							},
							{
								'name':'seo_url_template - routeName',
								'value':'seo_url_template.routeName'
							},
							{
								'name':'seo_url_template - salesChannelId',
								'value':'seo_url_template.salesChannelId'
							},
							{
								'name':'seo_url_template - template',
								'value':'seo_url_template.template'
							},
							{
								'name':'seo_url_template - updatedAt',
								'value':'seo_url_template.updatedAt'
							},
							{
								'name':'shipping_method - active',
								'value':'shipping_method.active'
							},
							{
								'name':'shipping_method - availabilityRuleId',
								'value':'shipping_method.availabilityRuleId'
							},
							{
								'name':'shipping_method - createdAt',
								'value':'shipping_method.createdAt'
							},
							{
								'name':'shipping_method - customFields',
								'value':'shipping_method.customFields'
							},
							{
								'name':'shipping_method - deliveryTimeId',
								'value':'shipping_method.deliveryTimeId'
							},
							{
								'name':'shipping_method - description',
								'value':'shipping_method.description'
							},
							{
								'name':'shipping_method - id',
								'value':'shipping_method.id'
							},
							{
								'name':'shipping_method - mediaId',
								'value':'shipping_method.mediaId'
							},
							{
								'name':'shipping_method - name',
								'value':'shipping_method.name'
							},
							{
								'name':'shipping_method - trackingUrl',
								'value':'shipping_method.trackingUrl'
							},
							{
								'name':'shipping_method - translated',
								'value':'shipping_method.translated'
							},
							{
								'name':'shipping_method - updatedAt',
								'value':'shipping_method.updatedAt'
							},
							{
								'name':'shipping_method_price - calculation',
								'value':'shipping_method_price.calculation'
							},
							{
								'name':'shipping_method_price - calculationRuleId',
								'value':'shipping_method_price.calculationRuleId'
							},
							{
								'name':'shipping_method_price - createdAt',
								'value':'shipping_method_price.createdAt'
							},
							{
								'name':'shipping_method_price - currencyPrice',
								'value':'shipping_method_price.currencyPrice'
							},
							{
								'name':'shipping_method_price - customFields',
								'value':'shipping_method_price.customFields'
							},
							{
								'name':'shipping_method_price - id',
								'value':'shipping_method_price.id'
							},
							{
								'name':'shipping_method_price - quantityEnd',
								'value':'shipping_method_price.quantityEnd'
							},
							{
								'name':'shipping_method_price - quantityStart',
								'value':'shipping_method_price.quantityStart'
							},
							{
								'name':'shipping_method_price - ruleId',
								'value':'shipping_method_price.ruleId'
							},
							{
								'name':'shipping_method_price - shippingMethodId',
								'value':'shipping_method_price.shippingMethodId'
							},
							{
								'name':'shipping_method_price - updatedAt',
								'value':'shipping_method_price.updatedAt'
							},
							{
								'name':'shipping_method_tag - shippingMethodId',
								'value':'shipping_method_tag.shippingMethodId'
							},
							{
								'name':'shipping_method_tag - tagId',
								'value':'shipping_method_tag.tagId'
							},
							{
								'name':'shipping_method_translation - createdAt',
								'value':'shipping_method_translation.createdAt'
							},
							{
								'name':'shipping_method_translation - customFields',
								'value':'shipping_method_translation.customFields'
							},
							{
								'name':'shipping_method_translation - description',
								'value':'shipping_method_translation.description'
							},
							{
								'name':'shipping_method_translation - languageId',
								'value':'shipping_method_translation.languageId'
							},
							{
								'name':'shipping_method_translation - name',
								'value':'shipping_method_translation.name'
							},
							{
								'name':'shipping_method_translation - shippingMethodId',
								'value':'shipping_method_translation.shippingMethodId'
							},
							{
								'name':'shipping_method_translation - trackingUrl',
								'value':'shipping_method_translation.trackingUrl'
							},
							{
								'name':'shipping_method_translation - updatedAt',
								'value':'shipping_method_translation.updatedAt'
							},
							{
								'name':'snippet - author',
								'value':'snippet.author'
							},
							{
								'name':'snippet - createdAt',
								'value':'snippet.createdAt'
							},
							{
								'name':'snippet - customFields',
								'value':'snippet.customFields'
							},
							{
								'name':'snippet - id',
								'value':'snippet.id'
							},
							{
								'name':'snippet - setId',
								'value':'snippet.setId'
							},
							{
								'name':'snippet - translationKey',
								'value':'snippet.translationKey'
							},
							{
								'name':'snippet - updatedAt',
								'value':'snippet.updatedAt'
							},
							{
								'name':'snippet - value',
								'value':'snippet.value'
							},
							{
								'name':'snippet_set - baseFile',
								'value':'snippet_set.baseFile'
							},
							{
								'name':'snippet_set - createdAt',
								'value':'snippet_set.createdAt'
							},
							{
								'name':'snippet_set - customFields',
								'value':'snippet_set.customFields'
							},
							{
								'name':'snippet_set - id',
								'value':'snippet_set.id'
							},
							{
								'name':'snippet_set - iso',
								'value':'snippet_set.iso'
							},
							{
								'name':'snippet_set - name',
								'value':'snippet_set.name'
							},
							{
								'name':'snippet_set - updatedAt',
								'value':'snippet_set.updatedAt'
							},
							{
								'name':'state_machine - createdAt',
								'value':'state_machine.createdAt'
							},
							{
								'name':'state_machine - customFields',
								'value':'state_machine.customFields'
							},
							{
								'name':'state_machine - id',
								'value':'state_machine.id'
							},
							{
								'name':'state_machine - initialStateId',
								'value':'state_machine.initialStateId'
							},
							{
								'name':'state_machine - name',
								'value':'state_machine.name'
							},
							{
								'name':'state_machine - technicalName',
								'value':'state_machine.technicalName'
							},
							{
								'name':'state_machine - translated',
								'value':'state_machine.translated'
							},
							{
								'name':'state_machine - updatedAt',
								'value':'state_machine.updatedAt'
							},
							{
								'name':'state_machine_history - createdAt',
								'value':'state_machine_history.createdAt'
							},
							{
								'name':'state_machine_history - entityId',
								'value':'state_machine_history.entityId'
							},
							{
								'name':'state_machine_history - entityName',
								'value':'state_machine_history.entityName'
							},
							{
								'name':'state_machine_history - fromStateId',
								'value':'state_machine_history.fromStateId'
							},
							{
								'name':'state_machine_history - id',
								'value':'state_machine_history.id'
							},
							{
								'name':'state_machine_history - stateMachineId',
								'value':'state_machine_history.stateMachineId'
							},
							{
								'name':'state_machine_history - toStateId',
								'value':'state_machine_history.toStateId'
							},
							{
								'name':'state_machine_history - transitionActionName',
								'value':'state_machine_history.transitionActionName'
							},
							{
								'name':'state_machine_history - updatedAt',
								'value':'state_machine_history.updatedAt'
							},
							{
								'name':'state_machine_history - userId',
								'value':'state_machine_history.userId'
							},
							{
								'name':'state_machine_state - createdAt',
								'value':'state_machine_state.createdAt'
							},
							{
								'name':'state_machine_state - customFields',
								'value':'state_machine_state.customFields'
							},
							{
								'name':'state_machine_state - id',
								'value':'state_machine_state.id'
							},
							{
								'name':'state_machine_state - name',
								'value':'state_machine_state.name'
							},
							{
								'name':'state_machine_state - stateMachineId',
								'value':'state_machine_state.stateMachineId'
							},
							{
								'name':'state_machine_state - technicalName',
								'value':'state_machine_state.technicalName'
							},
							{
								'name':'state_machine_state - translated',
								'value':'state_machine_state.translated'
							},
							{
								'name':'state_machine_state - updatedAt',
								'value':'state_machine_state.updatedAt'
							},
							{
								'name':'state_machine_state_translation - createdAt',
								'value':'state_machine_state_translation.createdAt'
							},
							{
								'name':'state_machine_state_translation - customFields',
								'value':'state_machine_state_translation.customFields'
							},
							{
								'name':'state_machine_state_translation - languageId',
								'value':'state_machine_state_translation.languageId'
							},
							{
								'name':'state_machine_state_translation - name',
								'value':'state_machine_state_translation.name'
							},
							{
								'name':'state_machine_state_translation - stateMachineStateId',
								'value':'state_machine_state_translation.stateMachineStateId'
							},
							{
								'name':'state_machine_state_translation - updatedAt',
								'value':'state_machine_state_translation.updatedAt'
							},
							{
								'name':'state_machine_transition - actionName',
								'value':'state_machine_transition.actionName'
							},
							{
								'name':'state_machine_transition - createdAt',
								'value':'state_machine_transition.createdAt'
							},
							{
								'name':'state_machine_transition - customFields',
								'value':'state_machine_transition.customFields'
							},
							{
								'name':'state_machine_transition - fromStateId',
								'value':'state_machine_transition.fromStateId'
							},
							{
								'name':'state_machine_transition - id',
								'value':'state_machine_transition.id'
							},
							{
								'name':'state_machine_transition - stateMachineId',
								'value':'state_machine_transition.stateMachineId'
							},
							{
								'name':'state_machine_transition - toStateId',
								'value':'state_machine_transition.toStateId'
							},
							{
								'name':'state_machine_transition - updatedAt',
								'value':'state_machine_transition.updatedAt'
							},
							{
								'name':'state_machine_translation - createdAt',
								'value':'state_machine_translation.createdAt'
							},
							{
								'name':'state_machine_translation - customFields',
								'value':'state_machine_translation.customFields'
							},
							{
								'name':'state_machine_translation - languageId',
								'value':'state_machine_translation.languageId'
							},
							{
								'name':'state_machine_translation - name',
								'value':'state_machine_translation.name'
							},
							{
								'name':'state_machine_translation - stateMachineId',
								'value':'state_machine_translation.stateMachineId'
							},
							{
								'name':'state_machine_translation - updatedAt',
								'value':'state_machine_translation.updatedAt'
							},
							{
								'name':'swag_cms_extensions_quickview - active',
								'value':'swag_cms_extensions_quickview.active'
							},
							{
								'name':'swag_cms_extensions_quickview - cmsBlockId',
								'value':'swag_cms_extensions_quickview.cmsBlockId'
							},
							{
								'name':'swag_cms_extensions_quickview - createdAt',
								'value':'swag_cms_extensions_quickview.createdAt'
							},
							{
								'name':'swag_cms_extensions_quickview - id',
								'value':'swag_cms_extensions_quickview.id'
							},
							{
								'name':'swag_cms_extensions_quickview - updatedAt',
								'value':'swag_cms_extensions_quickview.updatedAt'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation - active',
								'value':'swag_cms_extensions_scroll_navigation.active'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation - cmsSectionId',
								'value':'swag_cms_extensions_scroll_navigation.cmsSectionId'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation - createdAt',
								'value':'swag_cms_extensions_scroll_navigation.createdAt'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation - displayName',
								'value':'swag_cms_extensions_scroll_navigation.displayName'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation - id',
								'value':'swag_cms_extensions_scroll_navigation.id'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation - translated',
								'value':'swag_cms_extensions_scroll_navigation.translated'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation - updatedAt',
								'value':'swag_cms_extensions_scroll_navigation.updatedAt'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_page_settings - active',
								'value':'swag_cms_extensions_scroll_navigation_page_settings.active'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_page_settings - bouncy',
								'value':'swag_cms_extensions_scroll_navigation_page_settings.bouncy'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_page_settings - cmsPageId',
								'value':'swag_cms_extensions_scroll_navigation_page_settings.cmsPageId'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_page_settings - createdAt',
								'value':'swag_cms_extensions_scroll_navigation_page_settings.createdAt'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_page_settings - duration',
								'value':'swag_cms_extensions_scroll_navigation_page_settings.duration'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_page_settings - easing',
								'value':'swag_cms_extensions_scroll_navigation_page_settings.easing'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_page_settings - easingDegree',
								'value':'swag_cms_extensions_scroll_navigation_page_settings.easingDegree'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_page_settings - id',
								'value':'swag_cms_extensions_scroll_navigation_page_settings.id'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_page_settings - updatedAt',
								'value':'swag_cms_extensions_scroll_navigation_page_settings.updatedAt'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_translation - createdAt',
								'value':'swag_cms_extensions_scroll_navigation_translation.createdAt'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_translation - displayName',
								'value':'swag_cms_extensions_scroll_navigation_translation.displayName'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_translation - languageId',
								'value':'swag_cms_extensions_scroll_navigation_translation.languageId'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_translation - swagCmsExtensionsScrollNavigationId',
								'value':'swag_cms_extensions_scroll_navigation_translation.swagCmsExtensionsScrollNavigationId'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_translation - updatedAt',
								'value':'swag_cms_extensions_scroll_navigation_translation.updatedAt'
							},
							{
								'name':'swag_customized_products_template - active',
								'value':'swag_customized_products_template.active'
							},
							{
								'name':'swag_customized_products_template - confirmInput',
								'value':'swag_customized_products_template.confirmInput'
							},
							{
								'name':'swag_customized_products_template - createdAt',
								'value':'swag_customized_products_template.createdAt'
							},
							{
								'name':'swag_customized_products_template - decisionTree',
								'value':'swag_customized_products_template.decisionTree'
							},
							{
								'name':'swag_customized_products_template - description',
								'value':'swag_customized_products_template.description'
							},
							{
								'name':'swag_customized_products_template - displayName',
								'value':'swag_customized_products_template.displayName'
							},
							{
								'name':'swag_customized_products_template - id',
								'value':'swag_customized_products_template.id'
							},
							{
								'name':'swag_customized_products_template - internalName',
								'value':'swag_customized_products_template.internalName'
							},
							{
								'name':'swag_customized_products_template - mediaId',
								'value':'swag_customized_products_template.mediaId'
							},
							{
								'name':'swag_customized_products_template - optionsAutoCollapse',
								'value':'swag_customized_products_template.optionsAutoCollapse'
							},
							{
								'name':'swag_customized_products_template - parentVersionId',
								'value':'swag_customized_products_template.parentVersionId'
							},
							{
								'name':'swag_customized_products_template - stepByStep',
								'value':'swag_customized_products_template.stepByStep'
							},
							{
								'name':'swag_customized_products_template - translated',
								'value':'swag_customized_products_template.translated'
							},
							{
								'name':'swag_customized_products_template - updatedAt',
								'value':'swag_customized_products_template.updatedAt'
							},
							{
								'name':'swag_customized_products_template - versionId',
								'value':'swag_customized_products_template.versionId'
							},
							{
								'name':'swag_customized_products_template_configuration - configuration',
								'value':'swag_customized_products_template_configuration.configuration'
							},
							{
								'name':'swag_customized_products_template_configuration - createdAt',
								'value':'swag_customized_products_template_configuration.createdAt'
							},
							{
								'name':'swag_customized_products_template_configuration - hash',
								'value':'swag_customized_products_template_configuration.hash'
							},
							{
								'name':'swag_customized_products_template_configuration - id',
								'value':'swag_customized_products_template_configuration.id'
							},
							{
								'name':'swag_customized_products_template_configuration - templateId',
								'value':'swag_customized_products_template_configuration.templateId'
							},
							{
								'name':'swag_customized_products_template_configuration - templateVersionId',
								'value':'swag_customized_products_template_configuration.templateVersionId'
							},
							{
								'name':'swag_customized_products_template_configuration - updatedAt',
								'value':'swag_customized_products_template_configuration.updatedAt'
							},
							{
								'name':'swag_customized_products_template_configuration - versionId',
								'value':'swag_customized_products_template_configuration.versionId'
							},
							{
								'name':'swag_customized_products_template_configuration_share - createdAt',
								'value':'swag_customized_products_template_configuration_share.createdAt'
							},
							{
								'name':'swag_customized_products_template_configuration_share - id',
								'value':'swag_customized_products_template_configuration_share.id'
							},
							{
								'name':'swag_customized_products_template_configuration_share - oneTime',
								'value':'swag_customized_products_template_configuration_share.oneTime'
							},
							{
								'name':'swag_customized_products_template_configuration_share - templateConfigurationId',
								'value':'swag_customized_products_template_configuration_share.templateConfigurationId'
							},
							{
								'name':'swag_customized_products_template_configuration_share - templateConfigurationVersionId',
								'value':'swag_customized_products_template_configuration_share.templateConfigurationVersionId'
							},
							{
								'name':'swag_customized_products_template_configuration_share - updatedAt',
								'value':'swag_customized_products_template_configuration_share.updatedAt'
							},
							{
								'name':'swag_customized_products_template_configuration_share - versionId',
								'value':'swag_customized_products_template_configuration_share.versionId'
							},
							{
								'name':'swag_customized_products_template_exclusion - createdAt',
								'value':'swag_customized_products_template_exclusion.createdAt'
							},
							{
								'name':'swag_customized_products_template_exclusion - id',
								'value':'swag_customized_products_template_exclusion.id'
							},
							{
								'name':'swag_customized_products_template_exclusion - name',
								'value':'swag_customized_products_template_exclusion.name'
							},
							{
								'name':'swag_customized_products_template_exclusion - templateId',
								'value':'swag_customized_products_template_exclusion.templateId'
							},
							{
								'name':'swag_customized_products_template_exclusion - templateVersionId',
								'value':'swag_customized_products_template_exclusion.templateVersionId'
							},
							{
								'name':'swag_customized_products_template_exclusion - updatedAt',
								'value':'swag_customized_products_template_exclusion.updatedAt'
							},
							{
								'name':'swag_customized_products_template_exclusion - versionId',
								'value':'swag_customized_products_template_exclusion.versionId'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - createdAt',
								'value':'swag_customized_products_template_exclusion_condition.createdAt'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - id',
								'value':'swag_customized_products_template_exclusion_condition.id'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - templateExclusionId',
								'value':'swag_customized_products_template_exclusion_condition.templateExclusionId'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - templateExclusionOperatorId',
								'value':'swag_customized_products_template_exclusion_condition.templateExclusionOperatorId'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - templateExclusionVersionId',
								'value':'swag_customized_products_template_exclusion_condition.templateExclusionVersionId'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - templateOptionId',
								'value':'swag_customized_products_template_exclusion_condition.templateOptionId'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - templateOptionVersionId',
								'value':'swag_customized_products_template_exclusion_condition.templateOptionVersionId'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - updatedAt',
								'value':'swag_customized_products_template_exclusion_condition.updatedAt'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - versionId',
								'value':'swag_customized_products_template_exclusion_condition.versionId'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition_values - createdAt',
								'value':'swag_customized_products_template_exclusion_condition_values.createdAt'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition_values - swagCustomizedProductsTemplateExclusionConditionVersionId',
								'value':'swag_customized_products_template_exclusion_condition_values.swagCustomizedProductsTemplateExclusionConditionVersionId'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition_values - swagCustomizedProductsTemplateOptionValueVersionId',
								'value':'swag_customized_products_template_exclusion_condition_values.swagCustomizedProductsTemplateOptionValueVersionId'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition_values - templateExclusionConditionId',
								'value':'swag_customized_products_template_exclusion_condition_values.templateExclusionConditionId'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition_values - templateOptionValueId',
								'value':'swag_customized_products_template_exclusion_condition_values.templateOptionValueId'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition_values - updatedAt',
								'value':'swag_customized_products_template_exclusion_condition_values.updatedAt'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator - createdAt',
								'value':'swag_customized_products_template_exclusion_operator.createdAt'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator - id',
								'value':'swag_customized_products_template_exclusion_operator.id'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator - label',
								'value':'swag_customized_products_template_exclusion_operator.label'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator - operator',
								'value':'swag_customized_products_template_exclusion_operator.operator'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator - templateOptionType',
								'value':'swag_customized_products_template_exclusion_operator.templateOptionType'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator - translated',
								'value':'swag_customized_products_template_exclusion_operator.translated'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator - updatedAt',
								'value':'swag_customized_products_template_exclusion_operator.updatedAt'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator_translation - createdAt',
								'value':'swag_customized_products_template_exclusion_operator_translation.createdAt'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator_translation - label',
								'value':'swag_customized_products_template_exclusion_operator_translation.label'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator_translation - languageId',
								'value':'swag_customized_products_template_exclusion_operator_translation.languageId'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator_translation - swagCustomizedProductsTemplateExclusionOperatorId',
								'value':'swag_customized_products_template_exclusion_operator_translation.swagCustomizedProductsTemplateExclusionOperatorId'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator_translation - updatedAt',
								'value':'swag_customized_products_template_exclusion_operator_translation.updatedAt'
							},
							{
								'name':'swag_customized_products_template_option - advancedSurcharge',
								'value':'swag_customized_products_template_option.advancedSurcharge'
							},
							{
								'name':'swag_customized_products_template_option - calculatedPrice',
								'value':'swag_customized_products_template_option.calculatedPrice'
							},
							{
								'name':'swag_customized_products_template_option - createdAt',
								'value':'swag_customized_products_template_option.createdAt'
							},
							{
								'name':'swag_customized_products_template_option - description',
								'value':'swag_customized_products_template_option.description'
							},
							{
								'name':'swag_customized_products_template_option - displayName',
								'value':'swag_customized_products_template_option.displayName'
							},
							{
								'name':'swag_customized_products_template_option - id',
								'value':'swag_customized_products_template_option.id'
							},
							{
								'name':'swag_customized_products_template_option - itemNumber',
								'value':'swag_customized_products_template_option.itemNumber'
							},
							{
								'name':'swag_customized_products_template_option - oneTimeSurcharge',
								'value':'swag_customized_products_template_option.oneTimeSurcharge'
							},
							{
								'name':'swag_customized_products_template_option - percentageSurcharge',
								'value':'swag_customized_products_template_option.percentageSurcharge'
							},
							{
								'name':'swag_customized_products_template_option - position',
								'value':'swag_customized_products_template_option.position'
							},
							{
								'name':'swag_customized_products_template_option - price',
								'value':'swag_customized_products_template_option.price'
							},
							{
								'name':'swag_customized_products_template_option - relativeSurcharge',
								'value':'swag_customized_products_template_option.relativeSurcharge'
							},
							{
								'name':'swag_customized_products_template_option - required',
								'value':'swag_customized_products_template_option.required'
							},
							{
								'name':'swag_customized_products_template_option - taxId',
								'value':'swag_customized_products_template_option.taxId'
							},
							{
								'name':'swag_customized_products_template_option - templateId',
								'value':'swag_customized_products_template_option.templateId'
							},
							{
								'name':'swag_customized_products_template_option - templateVersionId',
								'value':'swag_customized_products_template_option.templateVersionId'
							},
							{
								'name':'swag_customized_products_template_option - translated',
								'value':'swag_customized_products_template_option.translated'
							},
							{
								'name':'swag_customized_products_template_option - type',
								'value':'swag_customized_products_template_option.type'
							},
							{
								'name':'swag_customized_products_template_option - typeProperties',
								'value':'swag_customized_products_template_option.typeProperties'
							},
							{
								'name':'swag_customized_products_template_option - updatedAt',
								'value':'swag_customized_products_template_option.updatedAt'
							},
							{
								'name':'swag_customized_products_template_option - versionId',
								'value':'swag_customized_products_template_option.versionId'
							},
							{
								'name':'swag_customized_products_template_option_price - createdAt',
								'value':'swag_customized_products_template_option_price.createdAt'
							},
							{
								'name':'swag_customized_products_template_option_price - id',
								'value':'swag_customized_products_template_option_price.id'
							},
							{
								'name':'swag_customized_products_template_option_price - percentageSurcharge',
								'value':'swag_customized_products_template_option_price.percentageSurcharge'
							},
							{
								'name':'swag_customized_products_template_option_price - price',
								'value':'swag_customized_products_template_option_price.price'
							},
							{
								'name':'swag_customized_products_template_option_price - ruleId',
								'value':'swag_customized_products_template_option_price.ruleId'
							},
							{
								'name':'swag_customized_products_template_option_price - templateOptionId',
								'value':'swag_customized_products_template_option_price.templateOptionId'
							},
							{
								'name':'swag_customized_products_template_option_price - templateOptionVersionId',
								'value':'swag_customized_products_template_option_price.templateOptionVersionId'
							},
							{
								'name':'swag_customized_products_template_option_price - updatedAt',
								'value':'swag_customized_products_template_option_price.updatedAt'
							},
							{
								'name':'swag_customized_products_template_option_price - versionId',
								'value':'swag_customized_products_template_option_price.versionId'
							},
							{
								'name':'swag_customized_products_template_option_translation - createdAt',
								'value':'swag_customized_products_template_option_translation.createdAt'
							},
							{
								'name':'swag_customized_products_template_option_translation - description',
								'value':'swag_customized_products_template_option_translation.description'
							},
							{
								'name':'swag_customized_products_template_option_translation - displayName',
								'value':'swag_customized_products_template_option_translation.displayName'
							},
							{
								'name':'swag_customized_products_template_option_translation - languageId',
								'value':'swag_customized_products_template_option_translation.languageId'
							},
							{
								'name':'swag_customized_products_template_option_translation - swagCustomizedProductsTemplateOptionId',
								'value':'swag_customized_products_template_option_translation.swagCustomizedProductsTemplateOptionId'
							},
							{
								'name':'swag_customized_products_template_option_translation - swagCustomizedProductsTemplateOptionVersionId',
								'value':'swag_customized_products_template_option_translation.swagCustomizedProductsTemplateOptionVersionId'
							},
							{
								'name':'swag_customized_products_template_option_translation - updatedAt',
								'value':'swag_customized_products_template_option_translation.updatedAt'
							},
							{
								'name':'swag_customized_products_template_option_value - advancedSurcharge',
								'value':'swag_customized_products_template_option_value.advancedSurcharge'
							},
							{
								'name':'swag_customized_products_template_option_value - createdAt',
								'value':'swag_customized_products_template_option_value.createdAt'
							},
							{
								'name':'swag_customized_products_template_option_value - default',
								'value':'swag_customized_products_template_option_value.default'
							},
							{
								'name':'swag_customized_products_template_option_value - displayName',
								'value':'swag_customized_products_template_option_value.displayName'
							},
							{
								'name':'swag_customized_products_template_option_value - id',
								'value':'swag_customized_products_template_option_value.id'
							},
							{
								'name':'swag_customized_products_template_option_value - itemNumber',
								'value':'swag_customized_products_template_option_value.itemNumber'
							},
							{
								'name':'swag_customized_products_template_option_value - oneTimeSurcharge',
								'value':'swag_customized_products_template_option_value.oneTimeSurcharge'
							},
							{
								'name':'swag_customized_products_template_option_value - percentageSurcharge',
								'value':'swag_customized_products_template_option_value.percentageSurcharge'
							},
							{
								'name':'swag_customized_products_template_option_value - position',
								'value':'swag_customized_products_template_option_value.position'
							},
							{
								'name':'swag_customized_products_template_option_value - price',
								'value':'swag_customized_products_template_option_value.price'
							},
							{
								'name':'swag_customized_products_template_option_value - relativeSurcharge',
								'value':'swag_customized_products_template_option_value.relativeSurcharge'
							},
							{
								'name':'swag_customized_products_template_option_value - taxId',
								'value':'swag_customized_products_template_option_value.taxId'
							},
							{
								'name':'swag_customized_products_template_option_value - templateOptionId',
								'value':'swag_customized_products_template_option_value.templateOptionId'
							},
							{
								'name':'swag_customized_products_template_option_value - templateOptionVersionId',
								'value':'swag_customized_products_template_option_value.templateOptionVersionId'
							},
							{
								'name':'swag_customized_products_template_option_value - translated',
								'value':'swag_customized_products_template_option_value.translated'
							},
							{
								'name':'swag_customized_products_template_option_value - updatedAt',
								'value':'swag_customized_products_template_option_value.updatedAt'
							},
							{
								'name':'swag_customized_products_template_option_value - value',
								'value':'swag_customized_products_template_option_value.value'
							},
							{
								'name':'swag_customized_products_template_option_value - versionId',
								'value':'swag_customized_products_template_option_value.versionId'
							},
							{
								'name':'swag_customized_products_template_option_value_price - createdAt',
								'value':'swag_customized_products_template_option_value_price.createdAt'
							},
							{
								'name':'swag_customized_products_template_option_value_price - id',
								'value':'swag_customized_products_template_option_value_price.id'
							},
							{
								'name':'swag_customized_products_template_option_value_price - percentageSurcharge',
								'value':'swag_customized_products_template_option_value_price.percentageSurcharge'
							},
							{
								'name':'swag_customized_products_template_option_value_price - price',
								'value':'swag_customized_products_template_option_value_price.price'
							},
							{
								'name':'swag_customized_products_template_option_value_price - ruleId',
								'value':'swag_customized_products_template_option_value_price.ruleId'
							},
							{
								'name':'swag_customized_products_template_option_value_price - templateOptionValueId',
								'value':'swag_customized_products_template_option_value_price.templateOptionValueId'
							},
							{
								'name':'swag_customized_products_template_option_value_price - templateOptionValueVersionId',
								'value':'swag_customized_products_template_option_value_price.templateOptionValueVersionId'
							},
							{
								'name':'swag_customized_products_template_option_value_price - updatedAt',
								'value':'swag_customized_products_template_option_value_price.updatedAt'
							},
							{
								'name':'swag_customized_products_template_option_value_price - versionId',
								'value':'swag_customized_products_template_option_value_price.versionId'
							},
							{
								'name':'swag_customized_products_template_option_value_translation - createdAt',
								'value':'swag_customized_products_template_option_value_translation.createdAt'
							},
							{
								'name':'swag_customized_products_template_option_value_translation - displayName',
								'value':'swag_customized_products_template_option_value_translation.displayName'
							},
							{
								'name':'swag_customized_products_template_option_value_translation - languageId',
								'value':'swag_customized_products_template_option_value_translation.languageId'
							},
							{
								'name':'swag_customized_products_template_option_value_translation - swagCustomizedProductsTemplateOptionValueId',
								'value':'swag_customized_products_template_option_value_translation.swagCustomizedProductsTemplateOptionValueId'
							},
							{
								'name':'swag_customized_products_template_option_value_translation - swagCustomizedProductsTemplateOptionValueVersionId',
								'value':'swag_customized_products_template_option_value_translation.swagCustomizedProductsTemplateOptionValueVersionId'
							},
							{
								'name':'swag_customized_products_template_option_value_translation - updatedAt',
								'value':'swag_customized_products_template_option_value_translation.updatedAt'
							},
							{
								'name':'swag_customized_products_template_translation - createdAt',
								'value':'swag_customized_products_template_translation.createdAt'
							},
							{
								'name':'swag_customized_products_template_translation - description',
								'value':'swag_customized_products_template_translation.description'
							},
							{
								'name':'swag_customized_products_template_translation - displayName',
								'value':'swag_customized_products_template_translation.displayName'
							},
							{
								'name':'swag_customized_products_template_translation - languageId',
								'value':'swag_customized_products_template_translation.languageId'
							},
							{
								'name':'swag_customized_products_template_translation - swagCustomizedProductsTemplateId',
								'value':'swag_customized_products_template_translation.swagCustomizedProductsTemplateId'
							},
							{
								'name':'swag_customized_products_template_translation - swagCustomizedProductsTemplateVersionId',
								'value':'swag_customized_products_template_translation.swagCustomizedProductsTemplateVersionId'
							},
							{
								'name':'swag_customized_products_template_translation - updatedAt',
								'value':'swag_customized_products_template_translation.updatedAt'
							},
							{
								'name':'swag_migration_connection - createdAt',
								'value':'swag_migration_connection.createdAt'
							},
							{
								'name':'swag_migration_connection - credentialFields',
								'value':'swag_migration_connection.credentialFields'
							},
							{
								'name':'swag_migration_connection - gatewayName',
								'value':'swag_migration_connection.gatewayName'
							},
							{
								'name':'swag_migration_connection - id',
								'value':'swag_migration_connection.id'
							},
							{
								'name':'swag_migration_connection - name',
								'value':'swag_migration_connection.name'
							},
							{
								'name':'swag_migration_connection - premapping',
								'value':'swag_migration_connection.premapping'
							},
							{
								'name':'swag_migration_connection - profileName',
								'value':'swag_migration_connection.profileName'
							},
							{
								'name':'swag_migration_connection - updatedAt',
								'value':'swag_migration_connection.updatedAt'
							},
							{
								'name':'swag_migration_data - autoIncrement',
								'value':'swag_migration_data.autoIncrement'
							},
							{
								'name':'swag_migration_data - convertFailure',
								'value':'swag_migration_data.convertFailure'
							},
							{
								'name':'swag_migration_data - converted',
								'value':'swag_migration_data.converted'
							},
							{
								'name':'swag_migration_data - createdAt',
								'value':'swag_migration_data.createdAt'
							},
							{
								'name':'swag_migration_data - entity',
								'value':'swag_migration_data.entity'
							},
							{
								'name':'swag_migration_data - id',
								'value':'swag_migration_data.id'
							},
							{
								'name':'swag_migration_data - mappingUuid',
								'value':'swag_migration_data.mappingUuid'
							},
							{
								'name':'swag_migration_data - raw',
								'value':'swag_migration_data.raw'
							},
							{
								'name':'swag_migration_data - runId',
								'value':'swag_migration_data.runId'
							},
							{
								'name':'swag_migration_data - unmapped',
								'value':'swag_migration_data.unmapped'
							},
							{
								'name':'swag_migration_data - updatedAt',
								'value':'swag_migration_data.updatedAt'
							},
							{
								'name':'swag_migration_data - writeFailure',
								'value':'swag_migration_data.writeFailure'
							},
							{
								'name':'swag_migration_data - written',
								'value':'swag_migration_data.written'
							},
							{
								'name':'swag_migration_general_setting - createdAt',
								'value':'swag_migration_general_setting.createdAt'
							},
							{
								'name':'swag_migration_general_setting - id',
								'value':'swag_migration_general_setting.id'
							},
							{
								'name':'swag_migration_general_setting - isReset',
								'value':'swag_migration_general_setting.isReset'
							},
							{
								'name':'swag_migration_general_setting - selectedConnectionId',
								'value':'swag_migration_general_setting.selectedConnectionId'
							},
							{
								'name':'swag_migration_general_setting - updatedAt',
								'value':'swag_migration_general_setting.updatedAt'
							},
							{
								'name':'swag_migration_logging - code',
								'value':'swag_migration_logging.code'
							},
							{
								'name':'swag_migration_logging - createdAt',
								'value':'swag_migration_logging.createdAt'
							},
							{
								'name':'swag_migration_logging - description',
								'value':'swag_migration_logging.description'
							},
							{
								'name':'swag_migration_logging - descriptionSnippet',
								'value':'swag_migration_logging.descriptionSnippet'
							},
							{
								'name':'swag_migration_logging - entity',
								'value':'swag_migration_logging.entity'
							},
							{
								'name':'swag_migration_logging - id',
								'value':'swag_migration_logging.id'
							},
							{
								'name':'swag_migration_logging - level',
								'value':'swag_migration_logging.level'
							},
							{
								'name':'swag_migration_logging - parameters',
								'value':'swag_migration_logging.parameters'
							},
							{
								'name':'swag_migration_logging - runId',
								'value':'swag_migration_logging.runId'
							},
							{
								'name':'swag_migration_logging - sourceId',
								'value':'swag_migration_logging.sourceId'
							},
							{
								'name':'swag_migration_logging - title',
								'value':'swag_migration_logging.title'
							},
							{
								'name':'swag_migration_logging - titleSnippet',
								'value':'swag_migration_logging.titleSnippet'
							},
							{
								'name':'swag_migration_logging - updatedAt',
								'value':'swag_migration_logging.updatedAt'
							},
							{
								'name':'swag_migration_mapping - additionalData',
								'value':'swag_migration_mapping.additionalData'
							},
							{
								'name':'swag_migration_mapping - checksum',
								'value':'swag_migration_mapping.checksum'
							},
							{
								'name':'swag_migration_mapping - connectionId',
								'value':'swag_migration_mapping.connectionId'
							},
							{
								'name':'swag_migration_mapping - createdAt',
								'value':'swag_migration_mapping.createdAt'
							},
							{
								'name':'swag_migration_mapping - entity',
								'value':'swag_migration_mapping.entity'
							},
							{
								'name':'swag_migration_mapping - entityUuid',
								'value':'swag_migration_mapping.entityUuid'
							},
							{
								'name':'swag_migration_mapping - entityValue',
								'value':'swag_migration_mapping.entityValue'
							},
							{
								'name':'swag_migration_mapping - id',
								'value':'swag_migration_mapping.id'
							},
							{
								'name':'swag_migration_mapping - oldIdentifier',
								'value':'swag_migration_mapping.oldIdentifier'
							},
							{
								'name':'swag_migration_mapping - updatedAt',
								'value':'swag_migration_mapping.updatedAt'
							},
							{
								'name':'swag_migration_media_file - createdAt',
								'value':'swag_migration_media_file.createdAt'
							},
							{
								'name':'swag_migration_media_file - entity',
								'value':'swag_migration_media_file.entity'
							},
							{
								'name':'swag_migration_media_file - fileName',
								'value':'swag_migration_media_file.fileName'
							},
							{
								'name':'swag_migration_media_file - fileSize',
								'value':'swag_migration_media_file.fileSize'
							},
							{
								'name':'swag_migration_media_file - id',
								'value':'swag_migration_media_file.id'
							},
							{
								'name':'swag_migration_media_file - mediaId',
								'value':'swag_migration_media_file.mediaId'
							},
							{
								'name':'swag_migration_media_file - processFailure',
								'value':'swag_migration_media_file.processFailure'
							},
							{
								'name':'swag_migration_media_file - processed',
								'value':'swag_migration_media_file.processed'
							},
							{
								'name':'swag_migration_media_file - runId',
								'value':'swag_migration_media_file.runId'
							},
							{
								'name':'swag_migration_media_file - updatedAt',
								'value':'swag_migration_media_file.updatedAt'
							},
							{
								'name':'swag_migration_media_file - uri',
								'value':'swag_migration_media_file.uri'
							},
							{
								'name':'swag_migration_media_file - written',
								'value':'swag_migration_media_file.written'
							},
							{
								'name':'swag_migration_run - accessToken',
								'value':'swag_migration_run.accessToken'
							},
							{
								'name':'swag_migration_run - connectionId',
								'value':'swag_migration_run.connectionId'
							},
							{
								'name':'swag_migration_run - createdAt',
								'value':'swag_migration_run.createdAt'
							},
							{
								'name':'swag_migration_run - environmentInformation',
								'value':'swag_migration_run.environmentInformation'
							},
							{
								'name':'swag_migration_run - id',
								'value':'swag_migration_run.id'
							},
							{
								'name':'swag_migration_run - premapping',
								'value':'swag_migration_run.premapping'
							},
							{
								'name':'swag_migration_run - progress',
								'value':'swag_migration_run.progress'
							},
							{
								'name':'swag_migration_run - status',
								'value':'swag_migration_run.status'
							},
							{
								'name':'swag_migration_run - updatedAt',
								'value':'swag_migration_run.updatedAt'
							},
							{
								'name':'swag_migration_run - userId',
								'value':'swag_migration_run.userId'
							},
							{
								'name':'swag_social_shopping_product_error - createdAt',
								'value':'swag_social_shopping_product_error.createdAt'
							},
							{
								'name':'swag_social_shopping_product_error - errors',
								'value':'swag_social_shopping_product_error.errors'
							},
							{
								'name':'swag_social_shopping_product_error - id',
								'value':'swag_social_shopping_product_error.id'
							},
							{
								'name':'swag_social_shopping_product_error - productId',
								'value':'swag_social_shopping_product_error.productId'
							},
							{
								'name':'swag_social_shopping_product_error - productVersionId',
								'value':'swag_social_shopping_product_error.productVersionId'
							},
							{
								'name':'swag_social_shopping_product_error - salesChannelId',
								'value':'swag_social_shopping_product_error.salesChannelId'
							},
							{
								'name':'swag_social_shopping_product_error - updatedAt',
								'value':'swag_social_shopping_product_error.updatedAt'
							},
							{
								'name':'swag_social_shopping_sales_channel - configuration',
								'value':'swag_social_shopping_sales_channel.configuration'
							},
							{
								'name':'swag_social_shopping_sales_channel - createdAt',
								'value':'swag_social_shopping_sales_channel.createdAt'
							},
							{
								'name':'swag_social_shopping_sales_channel - currencyId',
								'value':'swag_social_shopping_sales_channel.currencyId'
							},
							{
								'name':'swag_social_shopping_sales_channel - id',
								'value':'swag_social_shopping_sales_channel.id'
							},
							{
								'name':'swag_social_shopping_sales_channel - isValidating',
								'value':'swag_social_shopping_sales_channel.isValidating'
							},
							{
								'name':'swag_social_shopping_sales_channel - lastValidation',
								'value':'swag_social_shopping_sales_channel.lastValidation'
							},
							{
								'name':'swag_social_shopping_sales_channel - network',
								'value':'swag_social_shopping_sales_channel.network'
							},
							{
								'name':'swag_social_shopping_sales_channel - productStreamId',
								'value':'swag_social_shopping_sales_channel.productStreamId'
							},
							{
								'name':'swag_social_shopping_sales_channel - salesChannelDomainId',
								'value':'swag_social_shopping_sales_channel.salesChannelDomainId'
							},
							{
								'name':'swag_social_shopping_sales_channel - salesChannelId',
								'value':'swag_social_shopping_sales_channel.salesChannelId'
							},
							{
								'name':'swag_social_shopping_sales_channel - updatedAt',
								'value':'swag_social_shopping_sales_channel.updatedAt'
							},
							{
								'name':'system_config - configurationKey',
								'value':'system_config.configurationKey'
							},
							{
								'name':'system_config - configurationValue',
								'value':'system_config.configurationValue'
							},
							{
								'name':'system_config - createdAt',
								'value':'system_config.createdAt'
							},
							{
								'name':'system_config - id',
								'value':'system_config.id'
							},
							{
								'name':'system_config - salesChannelId',
								'value':'system_config.salesChannelId'
							},
							{
								'name':'system_config - updatedAt',
								'value':'system_config.updatedAt'
							},
							{
								'name':'tag - createdAt',
								'value':'tag.createdAt'
							},
							{
								'name':'tag - id',
								'value':'tag.id'
							},
							{
								'name':'tag - name',
								'value':'tag.name'
							},
							{
								'name':'tag - updatedAt',
								'value':'tag.updatedAt'
							},
							{
								'name':'tax - createdAt',
								'value':'tax.createdAt'
							},
							{
								'name':'tax - customFields',
								'value':'tax.customFields'
							},
							{
								'name':'tax - id',
								'value':'tax.id'
							},
							{
								'name':'tax - name',
								'value':'tax.name'
							},
							{
								'name':'tax - taxRate',
								'value':'tax.taxRate'
							},
							{
								'name':'tax - updatedAt',
								'value':'tax.updatedAt'
							},
							{
								'name':'tax_rule - countryId',
								'value':'tax_rule.countryId'
							},
							{
								'name':'tax_rule - createdAt',
								'value':'tax_rule.createdAt'
							},
							{
								'name':'tax_rule - data',
								'value':'tax_rule.data'
							},
							{
								'name':'tax_rule - id',
								'value':'tax_rule.id'
							},
							{
								'name':'tax_rule - taxId',
								'value':'tax_rule.taxId'
							},
							{
								'name':'tax_rule - taxRate',
								'value':'tax_rule.taxRate'
							},
							{
								'name':'tax_rule - taxRuleTypeId',
								'value':'tax_rule.taxRuleTypeId'
							},
							{
								'name':'tax_rule - updatedAt',
								'value':'tax_rule.updatedAt'
							},
							{
								'name':'tax_rule_type - createdAt',
								'value':'tax_rule_type.createdAt'
							},
							{
								'name':'tax_rule_type - id',
								'value':'tax_rule_type.id'
							},
							{
								'name':'tax_rule_type - position',
								'value':'tax_rule_type.position'
							},
							{
								'name':'tax_rule_type - technicalName',
								'value':'tax_rule_type.technicalName'
							},
							{
								'name':'tax_rule_type - translated',
								'value':'tax_rule_type.translated'
							},
							{
								'name':'tax_rule_type - typeName',
								'value':'tax_rule_type.typeName'
							},
							{
								'name':'tax_rule_type - updatedAt',
								'value':'tax_rule_type.updatedAt'
							},
							{
								'name':'tax_rule_type_translation - createdAt',
								'value':'tax_rule_type_translation.createdAt'
							},
							{
								'name':'tax_rule_type_translation - languageId',
								'value':'tax_rule_type_translation.languageId'
							},
							{
								'name':'tax_rule_type_translation - taxRuleTypeId',
								'value':'tax_rule_type_translation.taxRuleTypeId'
							},
							{
								'name':'tax_rule_type_translation - typeName',
								'value':'tax_rule_type_translation.typeName'
							},
							{
								'name':'tax_rule_type_translation - updatedAt',
								'value':'tax_rule_type_translation.updatedAt'
							},
							{
								'name':'theme - active',
								'value':'theme.active'
							},
							{
								'name':'theme - author',
								'value':'theme.author'
							},
							{
								'name':'theme - baseConfig',
								'value':'theme.baseConfig'
							},
							{
								'name':'theme - configValues',
								'value':'theme.configValues'
							},
							{
								'name':'theme - createdAt',
								'value':'theme.createdAt'
							},
							{
								'name':'theme - customFields',
								'value':'theme.customFields'
							},
							{
								'name':'theme - description',
								'value':'theme.description'
							},
							{
								'name':'theme - helpTexts',
								'value':'theme.helpTexts'
							},
							{
								'name':'theme - id',
								'value':'theme.id'
							},
							{
								'name':'theme - labels',
								'value':'theme.labels'
							},
							{
								'name':'theme - name',
								'value':'theme.name'
							},
							{
								'name':'theme - parentThemeId',
								'value':'theme.parentThemeId'
							},
							{
								'name':'theme - previewMediaId',
								'value':'theme.previewMediaId'
							},
							{
								'name':'theme - technicalName',
								'value':'theme.technicalName'
							},
							{
								'name':'theme - translated',
								'value':'theme.translated'
							},
							{
								'name':'theme - updatedAt',
								'value':'theme.updatedAt'
							},
							{
								'name':'theme_media - mediaId',
								'value':'theme_media.mediaId'
							},
							{
								'name':'theme_media - themeId',
								'value':'theme_media.themeId'
							},
							{
								'name':'theme_sales_channel - salesChannelId',
								'value':'theme_sales_channel.salesChannelId'
							},
							{
								'name':'theme_sales_channel - themeId',
								'value':'theme_sales_channel.themeId'
							},
							{
								'name':'theme_translation - createdAt',
								'value':'theme_translation.createdAt'
							},
							{
								'name':'theme_translation - customFields',
								'value':'theme_translation.customFields'
							},
							{
								'name':'theme_translation - description',
								'value':'theme_translation.description'
							},
							{
								'name':'theme_translation - helpTexts',
								'value':'theme_translation.helpTexts'
							},
							{
								'name':'theme_translation - labels',
								'value':'theme_translation.labels'
							},
							{
								'name':'theme_translation - languageId',
								'value':'theme_translation.languageId'
							},
							{
								'name':'theme_translation - themeId',
								'value':'theme_translation.themeId'
							},
							{
								'name':'theme_translation - updatedAt',
								'value':'theme_translation.updatedAt'
							},
							{
								'name':'unit - createdAt',
								'value':'unit.createdAt'
							},
							{
								'name':'unit - customFields',
								'value':'unit.customFields'
							},
							{
								'name':'unit - id',
								'value':'unit.id'
							},
							{
								'name':'unit - name',
								'value':'unit.name'
							},
							{
								'name':'unit - shortCode',
								'value':'unit.shortCode'
							},
							{
								'name':'unit - translated',
								'value':'unit.translated'
							},
							{
								'name':'unit - updatedAt',
								'value':'unit.updatedAt'
							},
							{
								'name':'unit_translation - createdAt',
								'value':'unit_translation.createdAt'
							},
							{
								'name':'unit_translation - customFields',
								'value':'unit_translation.customFields'
							},
							{
								'name':'unit_translation - languageId',
								'value':'unit_translation.languageId'
							},
							{
								'name':'unit_translation - name',
								'value':'unit_translation.name'
							},
							{
								'name':'unit_translation - shortCode',
								'value':'unit_translation.shortCode'
							},
							{
								'name':'unit_translation - unitId',
								'value':'unit_translation.unitId'
							},
							{
								'name':'unit_translation - updatedAt',
								'value':'unit_translation.updatedAt'
							},
							{
								'name':'user - active',
								'value':'user.active'
							},
							{
								'name':'user - admin',
								'value':'user.admin'
							},
							{
								'name':'user - avatarId',
								'value':'user.avatarId'
							},
							{
								'name':'user - createdAt',
								'value':'user.createdAt'
							},
							{
								'name':'user - customFields',
								'value':'user.customFields'
							},
							{
								'name':'user - email',
								'value':'user.email'
							},
							{
								'name':'user - firstName',
								'value':'user.firstName'
							},
							{
								'name':'user - id',
								'value':'user.id'
							},
							{
								'name':'user - lastName',
								'value':'user.lastName'
							},
							{
								'name':'user - localeId',
								'value':'user.localeId'
							},
							{
								'name':'user - password',
								'value':'user.password'
							},
							{
								'name':'user - storeToken',
								'value':'user.storeToken'
							},
							{
								'name':'user - title',
								'value':'user.title'
							},
							{
								'name':'user - updatedAt',
								'value':'user.updatedAt'
							},
							{
								'name':'user - username',
								'value':'user.username'
							},
							{
								'name':'user_access_key - accessKey',
								'value':'user_access_key.accessKey'
							},
							{
								'name':'user_access_key - createdAt',
								'value':'user_access_key.createdAt'
							},
							{
								'name':'user_access_key - customFields',
								'value':'user_access_key.customFields'
							},
							{
								'name':'user_access_key - id',
								'value':'user_access_key.id'
							},
							{
								'name':'user_access_key - lastUsageAt',
								'value':'user_access_key.lastUsageAt'
							},
							{
								'name':'user_access_key - secretAccessKey',
								'value':'user_access_key.secretAccessKey'
							},
							{
								'name':'user_access_key - updatedAt',
								'value':'user_access_key.updatedAt'
							},
							{
								'name':'user_access_key - userId',
								'value':'user_access_key.userId'
							},
							{
								'name':'user_access_key - writeAccess',
								'value':'user_access_key.writeAccess'
							},
							{
								'name':'user_recovery - createdAt',
								'value':'user_recovery.createdAt'
							},
							{
								'name':'user_recovery - hash',
								'value':'user_recovery.hash'
							},
							{
								'name':'user_recovery - id',
								'value':'user_recovery.id'
							},
							{
								'name':'user_recovery - updatedAt',
								'value':'user_recovery.updatedAt'
							},
							{
								'name':'user_recovery - userId',
								'value':'user_recovery.userId'
							},
							{
								'name':'version - createdAt',
								'value':'version.createdAt'
							},
							{
								'name':'version - id',
								'value':'version.id'
							},
							{
								'name':'version - name',
								'value':'version.name'
							},
							{
								'name':'version - updatedAt',
								'value':'version.updatedAt'
							},
							{
								'name':'version_commit - autoIncrement',
								'value':'version_commit.autoIncrement'
							},
							{
								'name':'version_commit - createdAt',
								'value':'version_commit.createdAt'
							},
							{
								'name':'version_commit - id',
								'value':'version_commit.id'
							},
							{
								'name':'version_commit - integrationId',
								'value':'version_commit.integrationId'
							},
							{
								'name':'version_commit - isMerge',
								'value':'version_commit.isMerge'
							},
							{
								'name':'version_commit - message',
								'value':'version_commit.message'
							},
							{
								'name':'version_commit - updatedAt',
								'value':'version_commit.updatedAt'
							},
							{
								'name':'version_commit - userId',
								'value':'version_commit.userId'
							},
							{
								'name':'version_commit - versionId',
								'value':'version_commit.versionId'
							},
							{
								'name':'version_commit_data - action',
								'value':'version_commit_data.action'
							},
							{
								'name':'version_commit_data - autoIncrement',
								'value':'version_commit_data.autoIncrement'
							},
							{
								'name':'version_commit_data - createdAt',
								'value':'version_commit_data.createdAt'
							},
							{
								'name':'version_commit_data - entityId',
								'value':'version_commit_data.entityId'
							},
							{
								'name':'version_commit_data - entityName',
								'value':'version_commit_data.entityName'
							},
							{
								'name':'version_commit_data - id',
								'value':'version_commit_data.id'
							},
							{
								'name':'version_commit_data - integrationId',
								'value':'version_commit_data.integrationId'
							},
							{
								'name':'version_commit_data - payload',
								'value':'version_commit_data.payload'
							},
							{
								'name':'version_commit_data - updatedAt',
								'value':'version_commit_data.updatedAt'
							},
							{
								'name':'version_commit_data - userId',
								'value':'version_commit_data.userId'
							},
							{
								'name':'version_commit_data - versionCommitId',
								'value':'version_commit_data.versionCommitId'
							},
							{
								'name':'webhook - appId',
								'value':'webhook.appId'
							},
							{
								'name':'webhook - createdAt',
								'value':'webhook.createdAt'
							},
							{
								'name':'webhook - eventName',
								'value':'webhook.eventName'
							},
							{
								'name':'webhook - id',
								'value':'webhook.id'
							},
							{
								'name':'webhook - name',
								'value':'webhook.name'
							},
							{
								'name':'webhook - updatedAt',
								'value':'webhook.updatedAt'
							},
							{
								'name':'webhook - url',
								'value':'webhook.url'
							}
						],
						default: '',
					},
					{
						displayName: 'Technical Fields',
						name: 'technicalFields',
						type: 'string',
						default: '',
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
								'name':'acl_role - app',
								'value':'acl_role.app'
							},
							{
								'name':'acl_role - integrations',
								'value':'acl_role.integrations'
							},
							{
								'name':'acl_role - users',
								'value':'acl_role.users'
							},
							{
								'name':'acl_user_role - aclRole',
								'value':'acl_user_role.aclRole'
							},
							{
								'name':'acl_user_role - user',
								'value':'acl_user_role.user'
							},
							{
								'name':'app - aclRole',
								'value':'app.aclRole'
							},
							{
								'name':'app - actionButtons',
								'value':'app.actionButtons'
							},
							{
								'name':'app - customFieldSets',
								'value':'app.customFieldSets'
							},
							{
								'name':'app - integration',
								'value':'app.integration'
							},
							{
								'name':'app - storefrontConfig',
								'value':'app.storefrontConfig'
							},
							{
								'name':'app - templates',
								'value':'app.templates'
							},
							{
								'name':'app - translations',
								'value':'app.translations'
							},
							{
								'name':'app - webhooks',
								'value':'app.webhooks'
							},
							{
								'name':'app_action_button - app',
								'value':'app_action_button.app'
							},
							{
								'name':'app_action_button - translations',
								'value':'app_action_button.translations'
							},
							{
								'name':'app_action_button_translation - appActionButton',
								'value':'app_action_button_translation.appActionButton'
							},
							{
								'name':'app_action_button_translation - language',
								'value':'app_action_button_translation.language'
							},
							{
								'name':'app_template - app',
								'value':'app_template.app'
							},
							{
								'name':'app_translation - app',
								'value':'app_translation.app'
							},
							{
								'name':'app_translation - language',
								'value':'app_translation.language'
							},
							{
								'name':'category - children',
								'value':'category.children'
							},
							{
								'name':'category - cmsPage',
								'value':'category.cmsPage'
							},
							{
								'name':'category - footerSalesChannels',
								'value':'category.footerSalesChannels'
							},
							{
								'name':'category - mainCategories',
								'value':'category.mainCategories'
							},
							{
								'name':'category - media',
								'value':'category.media'
							},
							{
								'name':'category - navigationSalesChannels',
								'value':'category.navigationSalesChannels'
							},
							{
								'name':'category - nestedProducts',
								'value':'category.nestedProducts'
							},
							{
								'name':'category - parent',
								'value':'category.parent'
							},
							{
								'name':'category - productStream',
								'value':'category.productStream'
							},
							{
								'name':'category - products',
								'value':'category.products'
							},
							{
								'name':'category - seoUrls',
								'value':'category.seoUrls'
							},
							{
								'name':'category - serviceSalesChannels',
								'value':'category.serviceSalesChannels'
							},
							{
								'name':'category - tags',
								'value':'category.tags'
							},
							{
								'name':'category - translations',
								'value':'category.translations'
							},
							{
								'name':'category_tag - category',
								'value':'category_tag.category'
							},
							{
								'name':'category_tag - tag',
								'value':'category_tag.tag'
							},
							{
								'name':'category_translation - category',
								'value':'category_translation.category'
							},
							{
								'name':'category_translation - language',
								'value':'category_translation.language'
							},
							{
								'name':'cms_block - backgroundMedia',
								'value':'cms_block.backgroundMedia'
							},
							{
								'name':'cms_block - section',
								'value':'cms_block.section'
							},
							{
								'name':'cms_block - slots',
								'value':'cms_block.slots'
							},
							{
								'name':'cms_block - swagCmsExtensionsQuickview',
								'value':'cms_block.swagCmsExtensionsQuickview'
							},
							{
								'name':'cms_page - categories',
								'value':'cms_page.categories'
							},
							{
								'name':'cms_page - previewMedia',
								'value':'cms_page.previewMedia'
							},
							{
								'name':'cms_page - sections',
								'value':'cms_page.sections'
							},
							{
								'name':'cms_page - swagCmsExtensionsScrollNavigationPageSettings',
								'value':'cms_page.swagCmsExtensionsScrollNavigationPageSettings'
							},
							{
								'name':'cms_page - translations',
								'value':'cms_page.translations'
							},
							{
								'name':'cms_page_translation - cmsPage',
								'value':'cms_page_translation.cmsPage'
							},
							{
								'name':'cms_page_translation - language',
								'value':'cms_page_translation.language'
							},
							{
								'name':'cms_section - backgroundMedia',
								'value':'cms_section.backgroundMedia'
							},
							{
								'name':'cms_section - blocks',
								'value':'cms_section.blocks'
							},
							{
								'name':'cms_section - page',
								'value':'cms_section.page'
							},
							{
								'name':'cms_section - swagCmsExtensionsScrollNavigation',
								'value':'cms_section.swagCmsExtensionsScrollNavigation'
							},
							{
								'name':'cms_slot - block',
								'value':'cms_slot.block'
							},
							{
								'name':'cms_slot - translations',
								'value':'cms_slot.translations'
							},
							{
								'name':'cms_slot_translation - cmsSlot',
								'value':'cms_slot_translation.cmsSlot'
							},
							{
								'name':'cms_slot_translation - language',
								'value':'cms_slot_translation.language'
							},
							{
								'name':'country - customerAddresses',
								'value':'country.customerAddresses'
							},
							{
								'name':'country - orderAddresses',
								'value':'country.orderAddresses'
							},
							{
								'name':'country - salesChannelDefaultAssignments',
								'value':'country.salesChannelDefaultAssignments'
							},
							{
								'name':'country - salesChannels',
								'value':'country.salesChannels'
							},
							{
								'name':'country - states',
								'value':'country.states'
							},
							{
								'name':'country - taxRules',
								'value':'country.taxRules'
							},
							{
								'name':'country - translations',
								'value':'country.translations'
							},
							{
								'name':'country_state - country',
								'value':'country_state.country'
							},
							{
								'name':'country_state - customerAddresses',
								'value':'country_state.customerAddresses'
							},
							{
								'name':'country_state - orderAddresses',
								'value':'country_state.orderAddresses'
							},
							{
								'name':'country_state - translations',
								'value':'country_state.translations'
							},
							{
								'name':'country_state_translation - countryState',
								'value':'country_state_translation.countryState'
							},
							{
								'name':'country_state_translation - language',
								'value':'country_state_translation.language'
							},
							{
								'name':'country_translation - country',
								'value':'country_translation.country'
							},
							{
								'name':'country_translation - language',
								'value':'country_translation.language'
							},
							{
								'name':'currency - customizedProductsTemplateOptionPrices',
								'value':'currency.customizedProductsTemplateOptionPrices'
							},
							{
								'name':'currency - customizedProductsTemplateOptionValuePrices',
								'value':'currency.customizedProductsTemplateOptionValuePrices'
							},
							{
								'name':'currency - orders',
								'value':'currency.orders'
							},
							{
								'name':'currency - productExports',
								'value':'currency.productExports'
							},
							{
								'name':'currency - promotionDiscountPrices',
								'value':'currency.promotionDiscountPrices'
							},
							{
								'name':'currency - salesChannelDefaultAssignments',
								'value':'currency.salesChannelDefaultAssignments'
							},
							{
								'name':'currency - salesChannelDomains',
								'value':'currency.salesChannelDomains'
							},
							{
								'name':'currency - salesChannels',
								'value':'currency.salesChannels'
							},
							{
								'name':'currency - translations',
								'value':'currency.translations'
							},
							{
								'name':'currency_translation - currency',
								'value':'currency_translation.currency'
							},
							{
								'name':'currency_translation - language',
								'value':'currency_translation.language'
							},
							{
								'name':'custom_field - customFieldSet',
								'value':'custom_field.customFieldSet'
							},
							{
								'name':'custom_field_set - app',
								'value':'custom_field_set.app'
							},
							{
								'name':'custom_field_set - customFields',
								'value':'custom_field_set.customFields'
							},
							{
								'name':'custom_field_set - products',
								'value':'custom_field_set.products'
							},
							{
								'name':'custom_field_set - relations',
								'value':'custom_field_set.relations'
							},
							{
								'name':'custom_field_set_relation - customFieldSet',
								'value':'custom_field_set_relation.customFieldSet'
							},
							{
								'name':'customer - addresses',
								'value':'customer.addresses'
							},
							{
								'name':'customer - defaultBillingAddress',
								'value':'customer.defaultBillingAddress'
							},
							{
								'name':'customer - defaultPaymentMethod',
								'value':'customer.defaultPaymentMethod'
							},
							{
								'name':'customer - defaultShippingAddress',
								'value':'customer.defaultShippingAddress'
							},
							{
								'name':'customer - group',
								'value':'customer.group'
							},
							{
								'name':'customer - language',
								'value':'customer.language'
							},
							{
								'name':'customer - lastPaymentMethod',
								'value':'customer.lastPaymentMethod'
							},
							{
								'name':'customer - orderCustomers',
								'value':'customer.orderCustomers'
							},
							{
								'name':'customer - productReviews',
								'value':'customer.productReviews'
							},
							{
								'name':'customer - promotions',
								'value':'customer.promotions'
							},
							{
								'name':'customer - recoveryCustomer',
								'value':'customer.recoveryCustomer'
							},
							{
								'name':'customer - requestedGroup',
								'value':'customer.requestedGroup'
							},
							{
								'name':'customer - salesChannel',
								'value':'customer.salesChannel'
							},
							{
								'name':'customer - salutation',
								'value':'customer.salutation'
							},
							{
								'name':'customer - tags',
								'value':'customer.tags'
							},
							{
								'name':'customer_address - country',
								'value':'customer_address.country'
							},
							{
								'name':'customer_address - countryState',
								'value':'customer_address.countryState'
							},
							{
								'name':'customer_address - customer',
								'value':'customer_address.customer'
							},
							{
								'name':'customer_address - salutation',
								'value':'customer_address.salutation'
							},
							{
								'name':'customer_group - customers',
								'value':'customer_group.customers'
							},
							{
								'name':'customer_group - registrationSalesChannels',
								'value':'customer_group.registrationSalesChannels'
							},
							{
								'name':'customer_group - salesChannels',
								'value':'customer_group.salesChannels'
							},
							{
								'name':'customer_group - translations',
								'value':'customer_group.translations'
							},
							{
								'name':'customer_group_registration_sales_channels - customerGroup',
								'value':'customer_group_registration_sales_channels.customerGroup'
							},
							{
								'name':'customer_group_registration_sales_channels - salesChannel',
								'value':'customer_group_registration_sales_channels.salesChannel'
							},
							{
								'name':'customer_group_translation - customerGroup',
								'value':'customer_group_translation.customerGroup'
							},
							{
								'name':'customer_group_translation - language',
								'value':'customer_group_translation.language'
							},
							{
								'name':'customer_recovery - customer',
								'value':'customer_recovery.customer'
							},
							{
								'name':'customer_tag - customer',
								'value':'customer_tag.customer'
							},
							{
								'name':'customer_tag - tag',
								'value':'customer_tag.tag'
							},
							{
								'name':'dead_message - scheduledTask',
								'value':'dead_message.scheduledTask'
							},
							{
								'name':'delivery_time - products',
								'value':'delivery_time.products'
							},
							{
								'name':'delivery_time - shippingMethods',
								'value':'delivery_time.shippingMethods'
							},
							{
								'name':'delivery_time - translations',
								'value':'delivery_time.translations'
							},
							{
								'name':'delivery_time_translation - deliveryTime',
								'value':'delivery_time_translation.deliveryTime'
							},
							{
								'name':'delivery_time_translation - language',
								'value':'delivery_time_translation.language'
							},
							{
								'name':'document - dependentDocuments',
								'value':'document.dependentDocuments'
							},
							{
								'name':'document - documentMediaFile',
								'value':'document.documentMediaFile'
							},
							{
								'name':'document - documentType',
								'value':'document.documentType'
							},
							{
								'name':'document - order',
								'value':'document.order'
							},
							{
								'name':'document - referencedDocument',
								'value':'document.referencedDocument'
							},
							{
								'name':'document_base_config - documentType',
								'value':'document_base_config.documentType'
							},
							{
								'name':'document_base_config - logo',
								'value':'document_base_config.logo'
							},
							{
								'name':'document_base_config - salesChannels',
								'value':'document_base_config.salesChannels'
							},
							{
								'name':'document_base_config_sales_channel - documentBaseConfig',
								'value':'document_base_config_sales_channel.documentBaseConfig'
							},
							{
								'name':'document_base_config_sales_channel - documentType',
								'value':'document_base_config_sales_channel.documentType'
							},
							{
								'name':'document_base_config_sales_channel - salesChannel',
								'value':'document_base_config_sales_channel.salesChannel'
							},
							{
								'name':'document_type - documentBaseConfigSalesChannels',
								'value':'document_type.documentBaseConfigSalesChannels'
							},
							{
								'name':'document_type - documentBaseConfigs',
								'value':'document_type.documentBaseConfigs'
							},
							{
								'name':'document_type - documents',
								'value':'document_type.documents'
							},
							{
								'name':'document_type - translations',
								'value':'document_type.translations'
							},
							{
								'name':'document_type_translation - documentType',
								'value':'document_type_translation.documentType'
							},
							{
								'name':'document_type_translation - language',
								'value':'document_type_translation.language'
							},
							{
								'name':'event_action - rules',
								'value':'event_action.rules'
							},
							{
								'name':'event_action - salesChannels',
								'value':'event_action.salesChannels'
							},
							{
								'name':'event_action_rule - eventAction',
								'value':'event_action_rule.eventAction'
							},
							{
								'name':'event_action_rule - rule',
								'value':'event_action_rule.rule'
							},
							{
								'name':'event_action_sales_channel - eventAction',
								'value':'event_action_sales_channel.eventAction'
							},
							{
								'name':'event_action_sales_channel - salesChannel',
								'value':'event_action_sales_channel.salesChannel'
							},
							{
								'name':'import_export_file - log',
								'value':'import_export_file.log'
							},
							{
								'name':'import_export_log - failedImportLog',
								'value':'import_export_log.failedImportLog'
							},
							{
								'name':'import_export_log - file',
								'value':'import_export_log.file'
							},
							{
								'name':'import_export_log - invalidRecordsLog',
								'value':'import_export_log.invalidRecordsLog'
							},
							{
								'name':'import_export_log - profile',
								'value':'import_export_log.profile'
							},
							{
								'name':'import_export_log - user',
								'value':'import_export_log.user'
							},
							{
								'name':'import_export_profile - importExportLogs',
								'value':'import_export_profile.importExportLogs'
							},
							{
								'name':'import_export_profile - translations',
								'value':'import_export_profile.translations'
							},
							{
								'name':'import_export_profile_translation - importExportProfile',
								'value':'import_export_profile_translation.importExportProfile'
							},
							{
								'name':'import_export_profile_translation - language',
								'value':'import_export_profile_translation.language'
							},
							{
								'name':'integration - aclRoles',
								'value':'integration.aclRoles'
							},
							{
								'name':'integration - app',
								'value':'integration.app'
							},
							{
								'name':'integration_role - integration',
								'value':'integration_role.integration'
							},
							{
								'name':'integration_role - role',
								'value':'integration_role.role'
							},
							{
								'name':'language - actionButtonTranslations',
								'value':'language.actionButtonTranslations'
							},
							{
								'name':'language - appTranslations',
								'value':'language.appTranslations'
							},
							{
								'name':'language - categoryTranslations',
								'value':'language.categoryTranslations'
							},
							{
								'name':'language - children',
								'value':'language.children'
							},
							{
								'name':'language - cmsExtensionsScrollNavigationTranslations',
								'value':'language.cmsExtensionsScrollNavigationTranslations'
							},
							{
								'name':'language - cmsPageTranslations',
								'value':'language.cmsPageTranslations'
							},
							{
								'name':'language - cmsSlotTranslations',
								'value':'language.cmsSlotTranslations'
							},
							{
								'name':'language - countryStateTranslations',
								'value':'language.countryStateTranslations'
							},
							{
								'name':'language - countryTranslations',
								'value':'language.countryTranslations'
							},
							{
								'name':'language - currencyTranslations',
								'value':'language.currencyTranslations'
							},
							{
								'name':'language - customerGroupTranslations',
								'value':'language.customerGroupTranslations'
							},
							{
								'name':'language - customers',
								'value':'language.customers'
							},
							{
								'name':'language - customizedProductsTemplateExclusionOperatorTranslations',
								'value':'language.customizedProductsTemplateExclusionOperatorTranslations'
							},
							{
								'name':'language - customizedProductsTemplateOptionTranslations',
								'value':'language.customizedProductsTemplateOptionTranslations'
							},
							{
								'name':'language - customizedProductsTemplateOptionValueTranslations',
								'value':'language.customizedProductsTemplateOptionValueTranslations'
							},
							{
								'name':'language - customizedProductsTemplateTranslations',
								'value':'language.customizedProductsTemplateTranslations'
							},
							{
								'name':'language - deliveryTimeTranslations',
								'value':'language.deliveryTimeTranslations'
							},
							{
								'name':'language - documentTypeTranslations',
								'value':'language.documentTypeTranslations'
							},
							{
								'name':'language - importExportProfileTranslations',
								'value':'language.importExportProfileTranslations'
							},
							{
								'name':'language - locale',
								'value':'language.locale'
							},
							{
								'name':'language - localeTranslations',
								'value':'language.localeTranslations'
							},
							{
								'name':'language - mailHeaderFooterTranslations',
								'value':'language.mailHeaderFooterTranslations'
							},
							{
								'name':'language - mailTemplateTranslations',
								'value':'language.mailTemplateTranslations'
							},
							{
								'name':'language - mailTemplateTypeTranslations',
								'value':'language.mailTemplateTypeTranslations'
							},
							{
								'name':'language - mediaTranslations',
								'value':'language.mediaTranslations'
							},
							{
								'name':'language - newsletterRecipients',
								'value':'language.newsletterRecipients'
							},
							{
								'name':'language - numberRangeTranslations',
								'value':'language.numberRangeTranslations'
							},
							{
								'name':'language - numberRangeTypeTranslations',
								'value':'language.numberRangeTypeTranslations'
							},
							{
								'name':'language - orders',
								'value':'language.orders'
							},
							{
								'name':'language - parent',
								'value':'language.parent'
							},
							{
								'name':'language - paymentMethodTranslations',
								'value':'language.paymentMethodTranslations'
							},
							{
								'name':'language - pluginTranslations',
								'value':'language.pluginTranslations'
							},
							{
								'name':'language - productCrossSellingTranslations',
								'value':'language.productCrossSellingTranslations'
							},
							{
								'name':'language - productFeatureSetTranslations',
								'value':'language.productFeatureSetTranslations'
							},
							{
								'name':'language - productKeywordDictionaries',
								'value':'language.productKeywordDictionaries'
							},
							{
								'name':'language - productManufacturerTranslations',
								'value':'language.productManufacturerTranslations'
							},
							{
								'name':'language - productReviews',
								'value':'language.productReviews'
							},
							{
								'name':'language - productSearchKeywords',
								'value':'language.productSearchKeywords'
							},
							{
								'name':'language - productSortingTranslations',
								'value':'language.productSortingTranslations'
							},
							{
								'name':'language - productStreamTranslations',
								'value':'language.productStreamTranslations'
							},
							{
								'name':'language - productTranslations',
								'value':'language.productTranslations'
							},
							{
								'name':'language - promotionTranslations',
								'value':'language.promotionTranslations'
							},
							{
								'name':'language - propertyGroupOptionTranslations',
								'value':'language.propertyGroupOptionTranslations'
							},
							{
								'name':'language - propertyGroupTranslations',
								'value':'language.propertyGroupTranslations'
							},
							{
								'name':'language - salesChannelDefaultAssignments',
								'value':'language.salesChannelDefaultAssignments'
							},
							{
								'name':'language - salesChannelDomains',
								'value':'language.salesChannelDomains'
							},
							{
								'name':'language - salesChannelTranslations',
								'value':'language.salesChannelTranslations'
							},
							{
								'name':'language - salesChannelTypeTranslations',
								'value':'language.salesChannelTypeTranslations'
							},
							{
								'name':'language - salesChannels',
								'value':'language.salesChannels'
							},
							{
								'name':'language - salutationTranslations',
								'value':'language.salutationTranslations'
							},
							{
								'name':'language - seoUrlTranslations',
								'value':'language.seoUrlTranslations'
							},
							{
								'name':'language - shippingMethodTranslations',
								'value':'language.shippingMethodTranslations'
							},
							{
								'name':'language - stateMachineStateTranslations',
								'value':'language.stateMachineStateTranslations'
							},
							{
								'name':'language - stateMachineTranslations',
								'value':'language.stateMachineTranslations'
							},
							{
								'name':'language - taxRuleTypeTranslations',
								'value':'language.taxRuleTypeTranslations'
							},
							{
								'name':'language - themeTranslations',
								'value':'language.themeTranslations'
							},
							{
								'name':'language - translationCode',
								'value':'language.translationCode'
							},
							{
								'name':'language - unitTranslations',
								'value':'language.unitTranslations'
							},
							{
								'name':'locale - languages',
								'value':'locale.languages'
							},
							{
								'name':'locale - translations',
								'value':'locale.translations'
							},
							{
								'name':'locale - users',
								'value':'locale.users'
							},
							{
								'name':'locale_translation - language',
								'value':'locale_translation.language'
							},
							{
								'name':'locale_translation - locale',
								'value':'locale_translation.locale'
							},
							{
								'name':'mail_header_footer - salesChannels',
								'value':'mail_header_footer.salesChannels'
							},
							{
								'name':'mail_header_footer - translations',
								'value':'mail_header_footer.translations'
							},
							{
								'name':'mail_header_footer_translation - language',
								'value':'mail_header_footer_translation.language'
							},
							{
								'name':'mail_header_footer_translation - mailHeaderFooter',
								'value':'mail_header_footer_translation.mailHeaderFooter'
							},
							{
								'name':'mail_template - mailTemplateType',
								'value':'mail_template.mailTemplateType'
							},
							{
								'name':'mail_template - media',
								'value':'mail_template.media'
							},
							{
								'name':'mail_template - salesChannels',
								'value':'mail_template.salesChannels'
							},
							{
								'name':'mail_template - translations',
								'value':'mail_template.translations'
							},
							{
								'name':'mail_template_media - mailTemplate',
								'value':'mail_template_media.mailTemplate'
							},
							{
								'name':'mail_template_media - media',
								'value':'mail_template_media.media'
							},
							{
								'name':'mail_template_sales_channel - mailTemplate',
								'value':'mail_template_sales_channel.mailTemplate'
							},
							{
								'name':'mail_template_sales_channel - mailTemplateType',
								'value':'mail_template_sales_channel.mailTemplateType'
							},
							{
								'name':'mail_template_sales_channel - salesChannel',
								'value':'mail_template_sales_channel.salesChannel'
							},
							{
								'name':'mail_template_translation - language',
								'value':'mail_template_translation.language'
							},
							{
								'name':'mail_template_translation - mailTemplate',
								'value':'mail_template_translation.mailTemplate'
							},
							{
								'name':'mail_template_type - mailTemplates',
								'value':'mail_template_type.mailTemplates'
							},
							{
								'name':'mail_template_type - salesChannels',
								'value':'mail_template_type.salesChannels'
							},
							{
								'name':'mail_template_type - translations',
								'value':'mail_template_type.translations'
							},
							{
								'name':'mail_template_type_translation - language',
								'value':'mail_template_type_translation.language'
							},
							{
								'name':'mail_template_type_translation - mailTemplateType',
								'value':'mail_template_type_translation.mailTemplateType'
							},
							{
								'name':'main_category - category',
								'value':'main_category.category'
							},
							{
								'name':'main_category - product',
								'value':'main_category.product'
							},
							{
								'name':'main_category - salesChannel',
								'value':'main_category.salesChannel'
							},
							{
								'name':'media - avatarUser',
								'value':'media.avatarUser'
							},
							{
								'name':'media - categories',
								'value':'media.categories'
							},
							{
								'name':'media - cmsBlocks',
								'value':'media.cmsBlocks'
							},
							{
								'name':'media - cmsPages',
								'value':'media.cmsPages'
							},
							{
								'name':'media - cmsSections',
								'value':'media.cmsSections'
							},
							{
								'name':'media - documentBaseConfigs',
								'value':'media.documentBaseConfigs'
							},
							{
								'name':'media - documents',
								'value':'media.documents'
							},
							{
								'name':'media - mailTemplateMedia',
								'value':'media.mailTemplateMedia'
							},
							{
								'name':'media - mediaFolder',
								'value':'media.mediaFolder'
							},
							{
								'name':'media - orderLineItems',
								'value':'media.orderLineItems'
							},
							{
								'name':'media - paymentMethods',
								'value':'media.paymentMethods'
							},
							{
								'name':'media - productConfiguratorSettings',
								'value':'media.productConfiguratorSettings'
							},
							{
								'name':'media - productManufacturers',
								'value':'media.productManufacturers'
							},
							{
								'name':'media - productMedia',
								'value':'media.productMedia'
							},
							{
								'name':'media - propertyGroupOptions',
								'value':'media.propertyGroupOptions'
							},
							{
								'name':'media - shippingMethods',
								'value':'media.shippingMethods'
							},
							{
								'name':'media - swagCustomizedProductsTemplate',
								'value':'media.swagCustomizedProductsTemplate'
							},
							{
								'name':'media - tags',
								'value':'media.tags'
							},
							{
								'name':'media - themeMedia',
								'value':'media.themeMedia'
							},
							{
								'name':'media - themes',
								'value':'media.themes'
							},
							{
								'name':'media - thumbnails',
								'value':'media.thumbnails'
							},
							{
								'name':'media - translations',
								'value':'media.translations'
							},
							{
								'name':'media - user',
								'value':'media.user'
							},
							{
								'name':'media_default_folder - folder',
								'value':'media_default_folder.folder'
							},
							{
								'name':'media_folder - children',
								'value':'media_folder.children'
							},
							{
								'name':'media_folder - configuration',
								'value':'media_folder.configuration'
							},
							{
								'name':'media_folder - defaultFolder',
								'value':'media_folder.defaultFolder'
							},
							{
								'name':'media_folder - media',
								'value':'media_folder.media'
							},
							{
								'name':'media_folder - parent',
								'value':'media_folder.parent'
							},
							{
								'name':'media_folder_configuration - mediaFolders',
								'value':'media_folder_configuration.mediaFolders'
							},
							{
								'name':'media_folder_configuration - mediaThumbnailSizes',
								'value':'media_folder_configuration.mediaThumbnailSizes'
							},
							{
								'name':'media_folder_configuration_media_thumbnail_size - mediaFolderConfiguration',
								'value':'media_folder_configuration_media_thumbnail_size.mediaFolderConfiguration'
							},
							{
								'name':'media_folder_configuration_media_thumbnail_size - mediaThumbnailSize',
								'value':'media_folder_configuration_media_thumbnail_size.mediaThumbnailSize'
							},
							{
								'name':'media_tag - media',
								'value':'media_tag.media'
							},
							{
								'name':'media_tag - tag',
								'value':'media_tag.tag'
							},
							{
								'name':'media_thumbnail - media',
								'value':'media_thumbnail.media'
							},
							{
								'name':'media_thumbnail_size - mediaFolderConfigurations',
								'value':'media_thumbnail_size.mediaFolderConfigurations'
							},
							{
								'name':'media_translation - language',
								'value':'media_translation.language'
							},
							{
								'name':'media_translation - media',
								'value':'media_translation.media'
							},
							{
								'name':'newsletter_recipient - language',
								'value':'newsletter_recipient.language'
							},
							{
								'name':'newsletter_recipient - salesChannel',
								'value':'newsletter_recipient.salesChannel'
							},
							{
								'name':'newsletter_recipient - salutation',
								'value':'newsletter_recipient.salutation'
							},
							{
								'name':'newsletter_recipient - tags',
								'value':'newsletter_recipient.tags'
							},
							{
								'name':'newsletter_recipient_tag - newsletterRecipient',
								'value':'newsletter_recipient_tag.newsletterRecipient'
							},
							{
								'name':'newsletter_recipient_tag - tag',
								'value':'newsletter_recipient_tag.tag'
							},
							{
								'name':'number_range - numberRangeSalesChannels',
								'value':'number_range.numberRangeSalesChannels'
							},
							{
								'name':'number_range - state',
								'value':'number_range.state'
							},
							{
								'name':'number_range - translations',
								'value':'number_range.translations'
							},
							{
								'name':'number_range - type',
								'value':'number_range.type'
							},
							{
								'name':'number_range_sales_channel - numberRange',
								'value':'number_range_sales_channel.numberRange'
							},
							{
								'name':'number_range_sales_channel - numberRangeType',
								'value':'number_range_sales_channel.numberRangeType'
							},
							{
								'name':'number_range_sales_channel - salesChannel',
								'value':'number_range_sales_channel.salesChannel'
							},
							{
								'name':'number_range_state - numberRange',
								'value':'number_range_state.numberRange'
							},
							{
								'name':'number_range_translation - language',
								'value':'number_range_translation.language'
							},
							{
								'name':'number_range_translation - numberRange',
								'value':'number_range_translation.numberRange'
							},
							{
								'name':'number_range_type - numberRangeSalesChannels',
								'value':'number_range_type.numberRangeSalesChannels'
							},
							{
								'name':'number_range_type - numberRanges',
								'value':'number_range_type.numberRanges'
							},
							{
								'name':'number_range_type - translations',
								'value':'number_range_type.translations'
							},
							{
								'name':'number_range_type_translation - language',
								'value':'number_range_type_translation.language'
							},
							{
								'name':'number_range_type_translation - numberRangeType',
								'value':'number_range_type_translation.numberRangeType'
							},
							{
								'name':'order - addresses',
								'value':'order.addresses'
							},
							{
								'name':'order - currency',
								'value':'order.currency'
							},
							{
								'name':'order - deliveries',
								'value':'order.deliveries'
							},
							{
								'name':'order - documents',
								'value':'order.documents'
							},
							{
								'name':'order - language',
								'value':'order.language'
							},
							{
								'name':'order - lineItems',
								'value':'order.lineItems'
							},
							{
								'name':'order - orderCustomer',
								'value':'order.orderCustomer'
							},
							{
								'name':'order - salesChannel',
								'value':'order.salesChannel'
							},
							{
								'name':'order - stateMachineState',
								'value':'order.stateMachineState'
							},
							{
								'name':'order - tags',
								'value':'order.tags'
							},
							{
								'name':'order - transactions',
								'value':'order.transactions'
							},
							{
								'name':'order_address - country',
								'value':'order_address.country'
							},
							{
								'name':'order_address - countryState',
								'value':'order_address.countryState'
							},
							{
								'name':'order_address - order',
								'value':'order_address.order'
							},
							{
								'name':'order_address - orderDeliveries',
								'value':'order_address.orderDeliveries'
							},
							{
								'name':'order_address - salutation',
								'value':'order_address.salutation'
							},
							{
								'name':'order_customer - customer',
								'value':'order_customer.customer'
							},
							{
								'name':'order_customer - order',
								'value':'order_customer.order'
							},
							{
								'name':'order_customer - salutation',
								'value':'order_customer.salutation'
							},
							{
								'name':'order_delivery - order',
								'value':'order_delivery.order'
							},
							{
								'name':'order_delivery - positions',
								'value':'order_delivery.positions'
							},
							{
								'name':'order_delivery - shippingMethod',
								'value':'order_delivery.shippingMethod'
							},
							{
								'name':'order_delivery - shippingOrderAddress',
								'value':'order_delivery.shippingOrderAddress'
							},
							{
								'name':'order_delivery - stateMachineState',
								'value':'order_delivery.stateMachineState'
							},
							{
								'name':'order_delivery_position - orderDelivery',
								'value':'order_delivery_position.orderDelivery'
							},
							{
								'name':'order_delivery_position - orderLineItem',
								'value':'order_delivery_position.orderLineItem'
							},
							{
								'name':'order_line_item - cover',
								'value':'order_line_item.cover'
							},
							{
								'name':'order_line_item - order',
								'value':'order_line_item.order'
							},
							{
								'name':'order_line_item - orderDeliveryPositions',
								'value':'order_line_item.orderDeliveryPositions'
							},
							{
								'name':'order_line_item - product',
								'value':'order_line_item.product'
							},
							{
								'name':'order_tag - order',
								'value':'order_tag.order'
							},
							{
								'name':'order_tag - tag',
								'value':'order_tag.tag'
							},
							{
								'name':'order_transaction - order',
								'value':'order_transaction.order'
							},
							{
								'name':'order_transaction - paymentMethod',
								'value':'order_transaction.paymentMethod'
							},
							{
								'name':'order_transaction - stateMachineState',
								'value':'order_transaction.stateMachineState'
							},
							{
								'name':'payment_method - availabilityRule',
								'value':'payment_method.availabilityRule'
							},
							{
								'name':'payment_method - customers',
								'value':'payment_method.customers'
							},
							{
								'name':'payment_method - media',
								'value':'payment_method.media'
							},
							{
								'name':'payment_method - orderTransactions',
								'value':'payment_method.orderTransactions'
							},
							{
								'name':'payment_method - plugin',
								'value':'payment_method.plugin'
							},
							{
								'name':'payment_method - salesChannelDefaultAssignments',
								'value':'payment_method.salesChannelDefaultAssignments'
							},
							{
								'name':'payment_method - salesChannels',
								'value':'payment_method.salesChannels'
							},
							{
								'name':'payment_method - translations',
								'value':'payment_method.translations'
							},
							{
								'name':'payment_method_translation - language',
								'value':'payment_method_translation.language'
							},
							{
								'name':'payment_method_translation - paymentMethod',
								'value':'payment_method_translation.paymentMethod'
							},
							{
								'name':'plugin - paymentMethods',
								'value':'plugin.paymentMethods'
							},
							{
								'name':'plugin - translations',
								'value':'plugin.translations'
							},
							{
								'name':'plugin_translation - language',
								'value':'plugin_translation.language'
							},
							{
								'name':'plugin_translation - plugin',
								'value':'plugin_translation.plugin'
							},
							{
								'name':'product - categories',
								'value':'product.categories'
							},
							{
								'name':'product - categoriesRo',
								'value':'product.categoriesRo'
							},
							{
								'name':'product - children',
								'value':'product.children'
							},
							{
								'name':'product - configuratorSettings',
								'value':'product.configuratorSettings'
							},
							{
								'name':'product - cover',
								'value':'product.cover'
							},
							{
								'name':'product - crossSellingAssignedProducts',
								'value':'product.crossSellingAssignedProducts'
							},
							{
								'name':'product - crossSellings',
								'value':'product.crossSellings'
							},
							{
								'name':'product - customFieldSets',
								'value':'product.customFieldSets'
							},
							{
								'name':'product - deliveryTime',
								'value':'product.deliveryTime'
							},
							{
								'name':'product - featureSet',
								'value':'product.featureSet'
							},
							{
								'name':'product - mainCategories',
								'value':'product.mainCategories'
							},
							{
								'name':'product - manufacturer',
								'value':'product.manufacturer'
							},
							{
								'name':'product - media',
								'value':'product.media'
							},
							{
								'name':'product - options',
								'value':'product.options'
							},
							{
								'name':'product - orderLineItems',
								'value':'product.orderLineItems'
							},
							{
								'name':'product - parent',
								'value':'product.parent'
							},
							{
								'name':'product - prices',
								'value':'product.prices'
							},
							{
								'name':'product - productReviews',
								'value':'product.productReviews'
							},
							{
								'name':'product - properties',
								'value':'product.properties'
							},
							{
								'name':'product - searchKeywords',
								'value':'product.searchKeywords'
							},
							{
								'name':'product - seoUrls',
								'value':'product.seoUrls'
							},
							{
								'name':'product - swagCustomizedProductsTemplate',
								'value':'product.swagCustomizedProductsTemplate'
							},
							{
								'name':'product - tags',
								'value':'product.tags'
							},
							{
								'name':'product - tax',
								'value':'product.tax'
							},
							{
								'name':'product - translations',
								'value':'product.translations'
							},
							{
								'name':'product - unit',
								'value':'product.unit'
							},
							{
								'name':'product - visibilities',
								'value':'product.visibilities'
							},
							{
								'name':'product_category - category',
								'value':'product_category.category'
							},
							{
								'name':'product_category - product',
								'value':'product_category.product'
							},
							{
								'name':'product_category_tree - category',
								'value':'product_category_tree.category'
							},
							{
								'name':'product_category_tree - product',
								'value':'product_category_tree.product'
							},
							{
								'name':'product_configurator_setting - media',
								'value':'product_configurator_setting.media'
							},
							{
								'name':'product_configurator_setting - option',
								'value':'product_configurator_setting.option'
							},
							{
								'name':'product_configurator_setting - product',
								'value':'product_configurator_setting.product'
							},
							{
								'name':'product_cross_selling - assignedProducts',
								'value':'product_cross_selling.assignedProducts'
							},
							{
								'name':'product_cross_selling - product',
								'value':'product_cross_selling.product'
							},
							{
								'name':'product_cross_selling - productStream',
								'value':'product_cross_selling.productStream'
							},
							{
								'name':'product_cross_selling - translations',
								'value':'product_cross_selling.translations'
							},
							{
								'name':'product_cross_selling_assigned_products - crossSelling',
								'value':'product_cross_selling_assigned_products.crossSelling'
							},
							{
								'name':'product_cross_selling_assigned_products - product',
								'value':'product_cross_selling_assigned_products.product'
							},
							{
								'name':'product_cross_selling_translation - language',
								'value':'product_cross_selling_translation.language'
							},
							{
								'name':'product_cross_selling_translation - productCrossSelling',
								'value':'product_cross_selling_translation.productCrossSelling'
							},
							{
								'name':'product_custom_field_set - customFieldSet',
								'value':'product_custom_field_set.customFieldSet'
							},
							{
								'name':'product_custom_field_set - product',
								'value':'product_custom_field_set.product'
							},
							{
								'name':'product_export - currency',
								'value':'product_export.currency'
							},
							{
								'name':'product_export - productStream',
								'value':'product_export.productStream'
							},
							{
								'name':'product_export - salesChannel',
								'value':'product_export.salesChannel'
							},
							{
								'name':'product_export - salesChannelDomain',
								'value':'product_export.salesChannelDomain'
							},
							{
								'name':'product_export - storefrontSalesChannel',
								'value':'product_export.storefrontSalesChannel'
							},
							{
								'name':'product_feature_set - products',
								'value':'product_feature_set.products'
							},
							{
								'name':'product_feature_set - translations',
								'value':'product_feature_set.translations'
							},
							{
								'name':'product_feature_set_translation - language',
								'value':'product_feature_set_translation.language'
							},
							{
								'name':'product_feature_set_translation - productFeatureSet',
								'value':'product_feature_set_translation.productFeatureSet'
							},
							{
								'name':'product_keyword_dictionary - language',
								'value':'product_keyword_dictionary.language'
							},
							{
								'name':'product_manufacturer - media',
								'value':'product_manufacturer.media'
							},
							{
								'name':'product_manufacturer - products',
								'value':'product_manufacturer.products'
							},
							{
								'name':'product_manufacturer - translations',
								'value':'product_manufacturer.translations'
							},
							{
								'name':'product_manufacturer_translation - language',
								'value':'product_manufacturer_translation.language'
							},
							{
								'name':'product_manufacturer_translation - productManufacturer',
								'value':'product_manufacturer_translation.productManufacturer'
							},
							{
								'name':'product_media - media',
								'value':'product_media.media'
							},
							{
								'name':'product_media - product',
								'value':'product_media.product'
							},
							{
								'name':'product_option - option',
								'value':'product_option.option'
							},
							{
								'name':'product_option - product',
								'value':'product_option.product'
							},
							{
								'name':'product_price - product',
								'value':'product_price.product'
							},
							{
								'name':'product_price - rule',
								'value':'product_price.rule'
							},
							{
								'name':'product_property - option',
								'value':'product_property.option'
							},
							{
								'name':'product_property - product',
								'value':'product_property.product'
							},
							{
								'name':'product_review - customer',
								'value':'product_review.customer'
							},
							{
								'name':'product_review - language',
								'value':'product_review.language'
							},
							{
								'name':'product_review - product',
								'value':'product_review.product'
							},
							{
								'name':'product_review - salesChannel',
								'value':'product_review.salesChannel'
							},
							{
								'name':'product_search_keyword - language',
								'value':'product_search_keyword.language'
							},
							{
								'name':'product_search_keyword - product',
								'value':'product_search_keyword.product'
							},
							{
								'name':'product_sorting - translations',
								'value':'product_sorting.translations'
							},
							{
								'name':'product_sorting_translation - language',
								'value':'product_sorting_translation.language'
							},
							{
								'name':'product_sorting_translation - productSorting',
								'value':'product_sorting_translation.productSorting'
							},
							{
								'name':'product_stream - categories',
								'value':'product_stream.categories'
							},
							{
								'name':'product_stream - filters',
								'value':'product_stream.filters'
							},
							{
								'name':'product_stream - productCrossSellings',
								'value':'product_stream.productCrossSellings'
							},
							{
								'name':'product_stream - productExports',
								'value':'product_stream.productExports'
							},
							{
								'name':'product_stream - translations',
								'value':'product_stream.translations'
							},
							{
								'name':'product_stream_filter - parent',
								'value':'product_stream_filter.parent'
							},
							{
								'name':'product_stream_filter - productStream',
								'value':'product_stream_filter.productStream'
							},
							{
								'name':'product_stream_filter - queries',
								'value':'product_stream_filter.queries'
							},
							{
								'name':'product_stream_translation - language',
								'value':'product_stream_translation.language'
							},
							{
								'name':'product_stream_translation - productStream',
								'value':'product_stream_translation.productStream'
							},
							{
								'name':'product_tag - product',
								'value':'product_tag.product'
							},
							{
								'name':'product_tag - tag',
								'value':'product_tag.tag'
							},
							{
								'name':'product_translation - language',
								'value':'product_translation.language'
							},
							{
								'name':'product_translation - product',
								'value':'product_translation.product'
							},
							{
								'name':'product_visibility - product',
								'value':'product_visibility.product'
							},
							{
								'name':'product_visibility - salesChannel',
								'value':'product_visibility.salesChannel'
							},
							{
								'name':'promotion - cartRules',
								'value':'promotion.cartRules'
							},
							{
								'name':'promotion - discounts',
								'value':'promotion.discounts'
							},
							{
								'name':'promotion - individualCodes',
								'value':'promotion.individualCodes'
							},
							{
								'name':'promotion - orderRules',
								'value':'promotion.orderRules'
							},
							{
								'name':'promotion - personaCustomers',
								'value':'promotion.personaCustomers'
							},
							{
								'name':'promotion - personaRules',
								'value':'promotion.personaRules'
							},
							{
								'name':'promotion - salesChannels',
								'value':'promotion.salesChannels'
							},
							{
								'name':'promotion - setgroups',
								'value':'promotion.setgroups'
							},
							{
								'name':'promotion - translations',
								'value':'promotion.translations'
							},
							{
								'name':'promotion_cart_rule - promotion',
								'value':'promotion_cart_rule.promotion'
							},
							{
								'name':'promotion_cart_rule - rule',
								'value':'promotion_cart_rule.rule'
							},
							{
								'name':'promotion_discount - discountRules',
								'value':'promotion_discount.discountRules'
							},
							{
								'name':'promotion_discount - promotion',
								'value':'promotion_discount.promotion'
							},
							{
								'name':'promotion_discount - promotionDiscountPrices',
								'value':'promotion_discount.promotionDiscountPrices'
							},
							{
								'name':'promotion_discount_prices - currency',
								'value':'promotion_discount_prices.currency'
							},
							{
								'name':'promotion_discount_prices - promotionDiscount',
								'value':'promotion_discount_prices.promotionDiscount'
							},
							{
								'name':'promotion_discount_rule - discount',
								'value':'promotion_discount_rule.discount'
							},
							{
								'name':'promotion_discount_rule - rule',
								'value':'promotion_discount_rule.rule'
							},
							{
								'name':'promotion_individual_code - promotion',
								'value':'promotion_individual_code.promotion'
							},
							{
								'name':'promotion_order_rule - promotion',
								'value':'promotion_order_rule.promotion'
							},
							{
								'name':'promotion_order_rule - rule',
								'value':'promotion_order_rule.rule'
							},
							{
								'name':'promotion_persona_customer - customer',
								'value':'promotion_persona_customer.customer'
							},
							{
								'name':'promotion_persona_customer - promotion',
								'value':'promotion_persona_customer.promotion'
							},
							{
								'name':'promotion_persona_rule - promotion',
								'value':'promotion_persona_rule.promotion'
							},
							{
								'name':'promotion_persona_rule - rule',
								'value':'promotion_persona_rule.rule'
							},
							{
								'name':'promotion_sales_channel - promotion',
								'value':'promotion_sales_channel.promotion'
							},
							{
								'name':'promotion_sales_channel - salesChannel',
								'value':'promotion_sales_channel.salesChannel'
							},
							{
								'name':'promotion_setgroup - promotion',
								'value':'promotion_setgroup.promotion'
							},
							{
								'name':'promotion_setgroup - setGroupRules',
								'value':'promotion_setgroup.setGroupRules'
							},
							{
								'name':'promotion_setgroup_rule - rule',
								'value':'promotion_setgroup_rule.rule'
							},
							{
								'name':'promotion_setgroup_rule - setgroup',
								'value':'promotion_setgroup_rule.setgroup'
							},
							{
								'name':'promotion_translation - language',
								'value':'promotion_translation.language'
							},
							{
								'name':'promotion_translation - promotion',
								'value':'promotion_translation.promotion'
							},
							{
								'name':'property_group - options',
								'value':'property_group.options'
							},
							{
								'name':'property_group - translations',
								'value':'property_group.translations'
							},
							{
								'name':'property_group_option - group',
								'value':'property_group_option.group'
							},
							{
								'name':'property_group_option - media',
								'value':'property_group_option.media'
							},
							{
								'name':'property_group_option - productConfiguratorSettings',
								'value':'property_group_option.productConfiguratorSettings'
							},
							{
								'name':'property_group_option - productOptions',
								'value':'property_group_option.productOptions'
							},
							{
								'name':'property_group_option - productProperties',
								'value':'property_group_option.productProperties'
							},
							{
								'name':'property_group_option - translations',
								'value':'property_group_option.translations'
							},
							{
								'name':'property_group_option_translation - language',
								'value':'property_group_option_translation.language'
							},
							{
								'name':'property_group_option_translation - propertyGroupOption',
								'value':'property_group_option_translation.propertyGroupOption'
							},
							{
								'name':'property_group_translation - language',
								'value':'property_group_translation.language'
							},
							{
								'name':'property_group_translation - propertyGroup',
								'value':'property_group_translation.propertyGroup'
							},
							{
								'name':'rule - cartPromotions',
								'value':'rule.cartPromotions'
							},
							{
								'name':'rule - conditions',
								'value':'rule.conditions'
							},
							{
								'name':'rule - customizedProductsTemplateOptionPrices',
								'value':'rule.customizedProductsTemplateOptionPrices'
							},
							{
								'name':'rule - customizedProductsTemplateOptionValuePrices',
								'value':'rule.customizedProductsTemplateOptionValuePrices'
							},
							{
								'name':'rule - eventActions',
								'value':'rule.eventActions'
							},
							{
								'name':'rule - orderPromotions',
								'value':'rule.orderPromotions'
							},
							{
								'name':'rule - paymentMethods',
								'value':'rule.paymentMethods'
							},
							{
								'name':'rule - personaPromotions',
								'value':'rule.personaPromotions'
							},
							{
								'name':'rule - productPrices',
								'value':'rule.productPrices'
							},
							{
								'name':'rule - promotionDiscounts',
								'value':'rule.promotionDiscounts'
							},
							{
								'name':'rule - promotionSetGroups',
								'value':'rule.promotionSetGroups'
							},
							{
								'name':'rule - shippingMethodPriceCalculations',
								'value':'rule.shippingMethodPriceCalculations'
							},
							{
								'name':'rule - shippingMethodPrices',
								'value':'rule.shippingMethodPrices'
							},
							{
								'name':'rule - shippingMethods',
								'value':'rule.shippingMethods'
							},
							{
								'name':'rule_condition - children',
								'value':'rule_condition.children'
							},
							{
								'name':'rule_condition - parent',
								'value':'rule_condition.parent'
							},
							{
								'name':'rule_condition - rule',
								'value':'rule_condition.rule'
							},
							{
								'name':'saas_app_storefront_config - app',
								'value':'saas_app_storefront_config.app'
							},
							{
								'name':'saas_sbp_user_data - user',
								'value':'saas_sbp_user_data.user'
							},
							{
								'name':'saas_storefront_demo_token - user',
								'value':'saas_storefront_demo_token.user'
							},
							{
								'name':'saas_user_login_token - user',
								'value':'saas_user_login_token.user'
							},
							{
								'name':'sales_channel - analytics',
								'value':'sales_channel.analytics'
							},
							{
								'name':'sales_channel - countries',
								'value':'sales_channel.countries'
							},
							{
								'name':'sales_channel - country',
								'value':'sales_channel.country'
							},
							{
								'name':'sales_channel - currencies',
								'value':'sales_channel.currencies'
							},
							{
								'name':'sales_channel - currency',
								'value':'sales_channel.currency'
							},
							{
								'name':'sales_channel - customerGroup',
								'value':'sales_channel.customerGroup'
							},
							{
								'name':'sales_channel - customerGroupsRegistrations',
								'value':'sales_channel.customerGroupsRegistrations'
							},
							{
								'name':'sales_channel - customers',
								'value':'sales_channel.customers'
							},
							{
								'name':'sales_channel - documentBaseConfigSalesChannels',
								'value':'sales_channel.documentBaseConfigSalesChannels'
							},
							{
								'name':'sales_channel - domains',
								'value':'sales_channel.domains'
							},
							{
								'name':'sales_channel - eventActions',
								'value':'sales_channel.eventActions'
							},
							{
								'name':'sales_channel - footerCategory',
								'value':'sales_channel.footerCategory'
							},
							{
								'name':'sales_channel - hreflangDefaultDomain',
								'value':'sales_channel.hreflangDefaultDomain'
							},
							{
								'name':'sales_channel - language',
								'value':'sales_channel.language'
							},
							{
								'name':'sales_channel - languages',
								'value':'sales_channel.languages'
							},
							{
								'name':'sales_channel - mailHeaderFooter',
								'value':'sales_channel.mailHeaderFooter'
							},
							{
								'name':'sales_channel - mailTemplates',
								'value':'sales_channel.mailTemplates'
							},
							{
								'name':'sales_channel - mainCategories',
								'value':'sales_channel.mainCategories'
							},
							{
								'name':'sales_channel - navigationCategory',
								'value':'sales_channel.navigationCategory'
							},
							{
								'name':'sales_channel - newsletterRecipients',
								'value':'sales_channel.newsletterRecipients'
							},
							{
								'name':'sales_channel - numberRangeSalesChannels',
								'value':'sales_channel.numberRangeSalesChannels'
							},
							{
								'name':'sales_channel - orders',
								'value':'sales_channel.orders'
							},
							{
								'name':'sales_channel - paymentMethod',
								'value':'sales_channel.paymentMethod'
							},
							{
								'name':'sales_channel - paymentMethods',
								'value':'sales_channel.paymentMethods'
							},
							{
								'name':'sales_channel - productExports',
								'value':'sales_channel.productExports'
							},
							{
								'name':'sales_channel - productReviews',
								'value':'sales_channel.productReviews'
							},
							{
								'name':'sales_channel - productVisibilities',
								'value':'sales_channel.productVisibilities'
							},
							{
								'name':'sales_channel - promotionSalesChannels',
								'value':'sales_channel.promotionSalesChannels'
							},
							{
								'name':'sales_channel - seoUrlTemplates',
								'value':'sales_channel.seoUrlTemplates'
							},
							{
								'name':'sales_channel - seoUrls',
								'value':'sales_channel.seoUrls'
							},
							{
								'name':'sales_channel - serviceCategory',
								'value':'sales_channel.serviceCategory'
							},
							{
								'name':'sales_channel - shippingMethod',
								'value':'sales_channel.shippingMethod'
							},
							{
								'name':'sales_channel - shippingMethods',
								'value':'sales_channel.shippingMethods'
							},
							{
								'name':'sales_channel - socialShoppingSalesChannel',
								'value':'sales_channel.socialShoppingSalesChannel'
							},
							{
								'name':'sales_channel - systemConfigs',
								'value':'sales_channel.systemConfigs'
							},
							{
								'name':'sales_channel - themes',
								'value':'sales_channel.themes'
							},
							{
								'name':'sales_channel - translations',
								'value':'sales_channel.translations'
							},
							{
								'name':'sales_channel - type',
								'value':'sales_channel.type'
							},
							{
								'name':'sales_channel_analytics - salesChannel',
								'value':'sales_channel_analytics.salesChannel'
							},
							{
								'name':'sales_channel_country - country',
								'value':'sales_channel_country.country'
							},
							{
								'name':'sales_channel_country - salesChannel',
								'value':'sales_channel_country.salesChannel'
							},
							{
								'name':'sales_channel_currency - currency',
								'value':'sales_channel_currency.currency'
							},
							{
								'name':'sales_channel_currency - salesChannel',
								'value':'sales_channel_currency.salesChannel'
							},
							{
								'name':'sales_channel_domain - currency',
								'value':'sales_channel_domain.currency'
							},
							{
								'name':'sales_channel_domain - language',
								'value':'sales_channel_domain.language'
							},
							{
								'name':'sales_channel_domain - productExports',
								'value':'sales_channel_domain.productExports'
							},
							{
								'name':'sales_channel_domain - salesChannel',
								'value':'sales_channel_domain.salesChannel'
							},
							{
								'name':'sales_channel_domain - salesChannelDefaultHreflang',
								'value':'sales_channel_domain.salesChannelDefaultHreflang'
							},
							{
								'name':'sales_channel_domain - snippetSet',
								'value':'sales_channel_domain.snippetSet'
							},
							{
								'name':'sales_channel_language - language',
								'value':'sales_channel_language.language'
							},
							{
								'name':'sales_channel_language - salesChannel',
								'value':'sales_channel_language.salesChannel'
							},
							{
								'name':'sales_channel_payment_method - paymentMethod',
								'value':'sales_channel_payment_method.paymentMethod'
							},
							{
								'name':'sales_channel_payment_method - salesChannel',
								'value':'sales_channel_payment_method.salesChannel'
							},
							{
								'name':'sales_channel_shipping_method - salesChannel',
								'value':'sales_channel_shipping_method.salesChannel'
							},
							{
								'name':'sales_channel_shipping_method - shippingMethod',
								'value':'sales_channel_shipping_method.shippingMethod'
							},
							{
								'name':'sales_channel_translation - language',
								'value':'sales_channel_translation.language'
							},
							{
								'name':'sales_channel_translation - salesChannel',
								'value':'sales_channel_translation.salesChannel'
							},
							{
								'name':'sales_channel_type - salesChannels',
								'value':'sales_channel_type.salesChannels'
							},
							{
								'name':'sales_channel_type - translations',
								'value':'sales_channel_type.translations'
							},
							{
								'name':'sales_channel_type_translation - language',
								'value':'sales_channel_type_translation.language'
							},
							{
								'name':'sales_channel_type_translation - salesChannelType',
								'value':'sales_channel_type_translation.salesChannelType'
							},
							{
								'name':'salutation - customerAddresses',
								'value':'salutation.customerAddresses'
							},
							{
								'name':'salutation - customers',
								'value':'salutation.customers'
							},
							{
								'name':'salutation - newsletterRecipients',
								'value':'salutation.newsletterRecipients'
							},
							{
								'name':'salutation - orderAddresses',
								'value':'salutation.orderAddresses'
							},
							{
								'name':'salutation - orderCustomers',
								'value':'salutation.orderCustomers'
							},
							{
								'name':'salutation - translations',
								'value':'salutation.translations'
							},
							{
								'name':'salutation_translation - language',
								'value':'salutation_translation.language'
							},
							{
								'name':'salutation_translation - salutation',
								'value':'salutation_translation.salutation'
							},
							{
								'name':'scheduled_task - deadMessages',
								'value':'scheduled_task.deadMessages'
							},
							{
								'name':'seo_url - language',
								'value':'seo_url.language'
							},
							{
								'name':'seo_url - salesChannel',
								'value':'seo_url.salesChannel'
							},
							{
								'name':'seo_url_template - salesChannel',
								'value':'seo_url_template.salesChannel'
							},
							{
								'name':'shipping_method - availabilityRule',
								'value':'shipping_method.availabilityRule'
							},
							{
								'name':'shipping_method - deliveryTime',
								'value':'shipping_method.deliveryTime'
							},
							{
								'name':'shipping_method - media',
								'value':'shipping_method.media'
							},
							{
								'name':'shipping_method - orderDeliveries',
								'value':'shipping_method.orderDeliveries'
							},
							{
								'name':'shipping_method - prices',
								'value':'shipping_method.prices'
							},
							{
								'name':'shipping_method - salesChannelDefaultAssignments',
								'value':'shipping_method.salesChannelDefaultAssignments'
							},
							{
								'name':'shipping_method - salesChannels',
								'value':'shipping_method.salesChannels'
							},
							{
								'name':'shipping_method - tags',
								'value':'shipping_method.tags'
							},
							{
								'name':'shipping_method - translations',
								'value':'shipping_method.translations'
							},
							{
								'name':'shipping_method_price - calculationRule',
								'value':'shipping_method_price.calculationRule'
							},
							{
								'name':'shipping_method_price - rule',
								'value':'shipping_method_price.rule'
							},
							{
								'name':'shipping_method_price - shippingMethod',
								'value':'shipping_method_price.shippingMethod'
							},
							{
								'name':'shipping_method_tag - shippingMethod',
								'value':'shipping_method_tag.shippingMethod'
							},
							{
								'name':'shipping_method_tag - tag',
								'value':'shipping_method_tag.tag'
							},
							{
								'name':'shipping_method_translation - language',
								'value':'shipping_method_translation.language'
							},
							{
								'name':'shipping_method_translation - shippingMethod',
								'value':'shipping_method_translation.shippingMethod'
							},
							{
								'name':'snippet - set',
								'value':'snippet.set'
							},
							{
								'name':'snippet_set - salesChannelDomains',
								'value':'snippet_set.salesChannelDomains'
							},
							{
								'name':'snippet_set - snippets',
								'value':'snippet_set.snippets'
							},
							{
								'name':'state_machine - historyEntries',
								'value':'state_machine.historyEntries'
							},
							{
								'name':'state_machine - states',
								'value':'state_machine.states'
							},
							{
								'name':'state_machine - transitions',
								'value':'state_machine.transitions'
							},
							{
								'name':'state_machine - translations',
								'value':'state_machine.translations'
							},
							{
								'name':'state_machine_history - fromStateMachineState',
								'value':'state_machine_history.fromStateMachineState'
							},
							{
								'name':'state_machine_history - stateMachine',
								'value':'state_machine_history.stateMachine'
							},
							{
								'name':'state_machine_history - toStateMachineState',
								'value':'state_machine_history.toStateMachineState'
							},
							{
								'name':'state_machine_history - user',
								'value':'state_machine_history.user'
							},
							{
								'name':'state_machine_state - fromStateMachineHistoryEntries',
								'value':'state_machine_state.fromStateMachineHistoryEntries'
							},
							{
								'name':'state_machine_state - fromStateMachineTransitions',
								'value':'state_machine_state.fromStateMachineTransitions'
							},
							{
								'name':'state_machine_state - orderDeliveries',
								'value':'state_machine_state.orderDeliveries'
							},
							{
								'name':'state_machine_state - orderTransactions',
								'value':'state_machine_state.orderTransactions'
							},
							{
								'name':'state_machine_state - orders',
								'value':'state_machine_state.orders'
							},
							{
								'name':'state_machine_state - stateMachine',
								'value':'state_machine_state.stateMachine'
							},
							{
								'name':'state_machine_state - toStateMachineHistoryEntries',
								'value':'state_machine_state.toStateMachineHistoryEntries'
							},
							{
								'name':'state_machine_state - toStateMachineTransitions',
								'value':'state_machine_state.toStateMachineTransitions'
							},
							{
								'name':'state_machine_state - translations',
								'value':'state_machine_state.translations'
							},
							{
								'name':'state_machine_state_translation - language',
								'value':'state_machine_state_translation.language'
							},
							{
								'name':'state_machine_state_translation - stateMachineState',
								'value':'state_machine_state_translation.stateMachineState'
							},
							{
								'name':'state_machine_transition - fromStateMachineState',
								'value':'state_machine_transition.fromStateMachineState'
							},
							{
								'name':'state_machine_transition - stateMachine',
								'value':'state_machine_transition.stateMachine'
							},
							{
								'name':'state_machine_transition - toStateMachineState',
								'value':'state_machine_transition.toStateMachineState'
							},
							{
								'name':'state_machine_translation - language',
								'value':'state_machine_translation.language'
							},
							{
								'name':'state_machine_translation - stateMachine',
								'value':'state_machine_translation.stateMachine'
							},
							{
								'name':'swag_cms_extensions_quickview - cmsBlock',
								'value':'swag_cms_extensions_quickview.cmsBlock'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation - cmsSection',
								'value':'swag_cms_extensions_scroll_navigation.cmsSection'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation - translations',
								'value':'swag_cms_extensions_scroll_navigation.translations'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_page_settings - cmsPage',
								'value':'swag_cms_extensions_scroll_navigation_page_settings.cmsPage'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_translation - language',
								'value':'swag_cms_extensions_scroll_navigation_translation.language'
							},
							{
								'name':'swag_cms_extensions_scroll_navigation_translation - swagCmsExtensionsScrollNavigation',
								'value':'swag_cms_extensions_scroll_navigation_translation.swagCmsExtensionsScrollNavigation'
							},
							{
								'name':'swag_customized_products_template - configurations',
								'value':'swag_customized_products_template.configurations'
							},
							{
								'name':'swag_customized_products_template - exclusions',
								'value':'swag_customized_products_template.exclusions'
							},
							{
								'name':'swag_customized_products_template - media',
								'value':'swag_customized_products_template.media'
							},
							{
								'name':'swag_customized_products_template - options',
								'value':'swag_customized_products_template.options'
							},
							{
								'name':'swag_customized_products_template - products',
								'value':'swag_customized_products_template.products'
							},
							{
								'name':'swag_customized_products_template - translations',
								'value':'swag_customized_products_template.translations'
							},
							{
								'name':'swag_customized_products_template_configuration - template',
								'value':'swag_customized_products_template_configuration.template'
							},
							{
								'name':'swag_customized_products_template_configuration - templateConfigurationShares',
								'value':'swag_customized_products_template_configuration.templateConfigurationShares'
							},
							{
								'name':'swag_customized_products_template_configuration_share - templateConfiguration',
								'value':'swag_customized_products_template_configuration_share.templateConfiguration'
							},
							{
								'name':'swag_customized_products_template_exclusion - conditions',
								'value':'swag_customized_products_template_exclusion.conditions'
							},
							{
								'name':'swag_customized_products_template_exclusion - template',
								'value':'swag_customized_products_template_exclusion.template'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - templateExclusion',
								'value':'swag_customized_products_template_exclusion_condition.templateExclusion'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - templateExclusionOperator',
								'value':'swag_customized_products_template_exclusion_condition.templateExclusionOperator'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - templateOption',
								'value':'swag_customized_products_template_exclusion_condition.templateOption'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition - templateOptionValues',
								'value':'swag_customized_products_template_exclusion_condition.templateOptionValues'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition_values - templateExclusionCondition',
								'value':'swag_customized_products_template_exclusion_condition_values.templateExclusionCondition'
							},
							{
								'name':'swag_customized_products_template_exclusion_condition_values - templateOptionValue',
								'value':'swag_customized_products_template_exclusion_condition_values.templateOptionValue'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator - templateExclusionConditions',
								'value':'swag_customized_products_template_exclusion_operator.templateExclusionConditions'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator - translations',
								'value':'swag_customized_products_template_exclusion_operator.translations'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator_translation - language',
								'value':'swag_customized_products_template_exclusion_operator_translation.language'
							},
							{
								'name':'swag_customized_products_template_exclusion_operator_translation - swagCustomizedProductsTemplateExclusionOperator',
								'value':'swag_customized_products_template_exclusion_operator_translation.swagCustomizedProductsTemplateExclusionOperator'
							},
							{
								'name':'swag_customized_products_template_option - prices',
								'value':'swag_customized_products_template_option.prices'
							},
							{
								'name':'swag_customized_products_template_option - tax',
								'value':'swag_customized_products_template_option.tax'
							},
							{
								'name':'swag_customized_products_template_option - template',
								'value':'swag_customized_products_template_option.template'
							},
							{
								'name':'swag_customized_products_template_option - templateExclusionConditions',
								'value':'swag_customized_products_template_option.templateExclusionConditions'
							},
							{
								'name':'swag_customized_products_template_option - translations',
								'value':'swag_customized_products_template_option.translations'
							},
							{
								'name':'swag_customized_products_template_option - values',
								'value':'swag_customized_products_template_option.values'
							},
							{
								'name':'swag_customized_products_template_option_price - rule',
								'value':'swag_customized_products_template_option_price.rule'
							},
							{
								'name':'swag_customized_products_template_option_price - templateOption',
								'value':'swag_customized_products_template_option_price.templateOption'
							},
							{
								'name':'swag_customized_products_template_option_translation - language',
								'value':'swag_customized_products_template_option_translation.language'
							},
							{
								'name':'swag_customized_products_template_option_translation - swagCustomizedProductsTemplateOption',
								'value':'swag_customized_products_template_option_translation.swagCustomizedProductsTemplateOption'
							},
							{
								'name':'swag_customized_products_template_option_value - prices',
								'value':'swag_customized_products_template_option_value.prices'
							},
							{
								'name':'swag_customized_products_template_option_value - tax',
								'value':'swag_customized_products_template_option_value.tax'
							},
							{
								'name':'swag_customized_products_template_option_value - templateExclusionConditions',
								'value':'swag_customized_products_template_option_value.templateExclusionConditions'
							},
							{
								'name':'swag_customized_products_template_option_value - templateOption',
								'value':'swag_customized_products_template_option_value.templateOption'
							},
							{
								'name':'swag_customized_products_template_option_value - translations',
								'value':'swag_customized_products_template_option_value.translations'
							},
							{
								'name':'swag_customized_products_template_option_value_price - rule',
								'value':'swag_customized_products_template_option_value_price.rule'
							},
							{
								'name':'swag_customized_products_template_option_value_price - templateOptionValue',
								'value':'swag_customized_products_template_option_value_price.templateOptionValue'
							},
							{
								'name':'swag_customized_products_template_option_value_translation - language',
								'value':'swag_customized_products_template_option_value_translation.language'
							},
							{
								'name':'swag_customized_products_template_option_value_translation - swagCustomizedProductsTemplateOptionValue',
								'value':'swag_customized_products_template_option_value_translation.swagCustomizedProductsTemplateOptionValue'
							},
							{
								'name':'swag_customized_products_template_translation - language',
								'value':'swag_customized_products_template_translation.language'
							},
							{
								'name':'swag_customized_products_template_translation - swagCustomizedProductsTemplate',
								'value':'swag_customized_products_template_translation.swagCustomizedProductsTemplate'
							},
							{
								'name':'swag_migration_connection - mappings',
								'value':'swag_migration_connection.mappings'
							},
							{
								'name':'swag_migration_connection - runs',
								'value':'swag_migration_connection.runs'
							},
							{
								'name':'swag_migration_connection - settings',
								'value':'swag_migration_connection.settings'
							},
							{
								'name':'swag_migration_data - run',
								'value':'swag_migration_data.run'
							},
							{
								'name':'swag_migration_general_setting - selectedConnection',
								'value':'swag_migration_general_setting.selectedConnection'
							},
							{
								'name':'swag_migration_logging - run',
								'value':'swag_migration_logging.run'
							},
							{
								'name':'swag_migration_mapping - connection',
								'value':'swag_migration_mapping.connection'
							},
							{
								'name':'swag_migration_media_file - run',
								'value':'swag_migration_media_file.run'
							},
							{
								'name':'swag_migration_run - connection',
								'value':'swag_migration_run.connection'
							},
							{
								'name':'swag_migration_run - data',
								'value':'swag_migration_run.data'
							},
							{
								'name':'swag_migration_run - logs',
								'value':'swag_migration_run.logs'
							},
							{
								'name':'swag_migration_run - mediaFiles',
								'value':'swag_migration_run.mediaFiles'
							},
							{
								'name':'swag_social_shopping_product_error - product',
								'value':'swag_social_shopping_product_error.product'
							},
							{
								'name':'swag_social_shopping_product_error - salesChannel',
								'value':'swag_social_shopping_product_error.salesChannel'
							},
							{
								'name':'swag_social_shopping_sales_channel - currency',
								'value':'swag_social_shopping_sales_channel.currency'
							},
							{
								'name':'swag_social_shopping_sales_channel - productStream',
								'value':'swag_social_shopping_sales_channel.productStream'
							},
							{
								'name':'swag_social_shopping_sales_channel - salesChannel',
								'value':'swag_social_shopping_sales_channel.salesChannel'
							},
							{
								'name':'swag_social_shopping_sales_channel - salesChannelDomain',
								'value':'swag_social_shopping_sales_channel.salesChannelDomain'
							},
							{
								'name':'system_config - salesChannel',
								'value':'system_config.salesChannel'
							},
							{
								'name':'tag - categories',
								'value':'tag.categories'
							},
							{
								'name':'tag - customers',
								'value':'tag.customers'
							},
							{
								'name':'tag - media',
								'value':'tag.media'
							},
							{
								'name':'tag - newsletterRecipients',
								'value':'tag.newsletterRecipients'
							},
							{
								'name':'tag - orders',
								'value':'tag.orders'
							},
							{
								'name':'tag - products',
								'value':'tag.products'
							},
							{
								'name':'tag - shippingMethods',
								'value':'tag.shippingMethods'
							},
							{
								'name':'tax - customizedProductsOptionValues',
								'value':'tax.customizedProductsOptionValues'
							},
							{
								'name':'tax - customizedProductsOptions',
								'value':'tax.customizedProductsOptions'
							},
							{
								'name':'tax - products',
								'value':'tax.products'
							},
							{
								'name':'tax - rules',
								'value':'tax.rules'
							},
							{
								'name':'tax_rule - country',
								'value':'tax_rule.country'
							},
							{
								'name':'tax_rule - tax',
								'value':'tax_rule.tax'
							},
							{
								'name':'tax_rule - type',
								'value':'tax_rule.type'
							},
							{
								'name':'tax_rule_type - rules',
								'value':'tax_rule_type.rules'
							},
							{
								'name':'tax_rule_type - translations',
								'value':'tax_rule_type.translations'
							},
							{
								'name':'tax_rule_type_translation - language',
								'value':'tax_rule_type_translation.language'
							},
							{
								'name':'tax_rule_type_translation - taxRuleType',
								'value':'tax_rule_type_translation.taxRuleType'
							},
							{
								'name':'theme - childThemes',
								'value':'theme.childThemes'
							},
							{
								'name':'theme - media',
								'value':'theme.media'
							},
							{
								'name':'theme - previewMedia',
								'value':'theme.previewMedia'
							},
							{
								'name':'theme - salesChannels',
								'value':'theme.salesChannels'
							},
							{
								'name':'theme - translations',
								'value':'theme.translations'
							},
							{
								'name':'theme_media - media',
								'value':'theme_media.media'
							},
							{
								'name':'theme_media - theme',
								'value':'theme_media.theme'
							},
							{
								'name':'theme_sales_channel - salesChannel',
								'value':'theme_sales_channel.salesChannel'
							},
							{
								'name':'theme_sales_channel - theme',
								'value':'theme_sales_channel.theme'
							},
							{
								'name':'theme_translation - language',
								'value':'theme_translation.language'
							},
							{
								'name':'theme_translation - theme',
								'value':'theme_translation.theme'
							},
							{
								'name':'unit - products',
								'value':'unit.products'
							},
							{
								'name':'unit - translations',
								'value':'unit.translations'
							},
							{
								'name':'unit_translation - language',
								'value':'unit_translation.language'
							},
							{
								'name':'unit_translation - unit',
								'value':'unit_translation.unit'
							},
							{
								'name':'user - accessKeys',
								'value':'user.accessKeys'
							},
							{
								'name':'user - aclRoles',
								'value':'user.aclRoles'
							},
							{
								'name':'user - avatarMedia',
								'value':'user.avatarMedia'
							},
							{
								'name':'user - demoToken',
								'value':'user.demoToken'
							},
							{
								'name':'user - importExportLogEntries',
								'value':'user.importExportLogEntries'
							},
							{
								'name':'user - locale',
								'value':'user.locale'
							},
							{
								'name':'user - loginToken',
								'value':'user.loginToken'
							},
							{
								'name':'user - media',
								'value':'user.media'
							},
							{
								'name':'user - recoveryUser',
								'value':'user.recoveryUser'
							},
							{
								'name':'user - sbpUserData',
								'value':'user.sbpUserData'
							},
							{
								'name':'user - stateMachineHistoryEntries',
								'value':'user.stateMachineHistoryEntries'
							},
							{
								'name':'user_access_key - user',
								'value':'user_access_key.user'
							},
							{
								'name':'user_recovery - user',
								'value':'user_recovery.user'
							},
							{
								'name':'version - commits',
								'value':'version.commits'
							},
							{
								'name':'version_commit - data',
								'value':'version_commit.data'
							},
							{
								'name':'version_commit - version',
								'value':'version_commit.version'
							},
							{
								'name':'version_commit_data - commit',
								'value':'version_commit_data.commit'
							},
							{
								'name':'webhook - app',
								'value':'webhook.app'
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