import {
	INodeProperties
} from 'n8n-workflow';

export const ShopwareTriggerTopics = [{
		displayName: 'Topic',
		name: 'topic',
		type: 'options',
		default: '',
		description: 'Event that triggers the webhook',
		options: [
			{
			   'name':'category deleted',
			   'value':'category.deleted'
			},
			{
			   'name':'category written',
			   'value':'category.written'
			},
			{
			   'name':'category_translation deleted',
			   'value':'category_translation.deleted'
			},
			{
			   'name':'category_translation written',
			   'value':'category_translation.written'
			},
			{
			   'name':'checkout customer.before.login',
			   'value':'checkout.customer.before.login'
			},
			{
			   'name':'checkout customer.changed-payment-method',
			   'value':'checkout.customer.changed-payment-method'
			},
			{
			   'name':'checkout customer.login',
			   'value':'checkout.customer.login'
			},
			{
			   'name':'checkout customer.logout',
			   'value':'checkout.customer.logout'
			},
			{
			   'name':'checkout customer.register',
			   'value':'checkout.customer.register'
			},
			{
			   'name':'checkout customer.sales_channel.address.create',
			   'value':'checkout.customer.sales_channel.address.create'
			},
			{
			   'name':'checkout customer.sales_channel.profile.update',
			   'value':'checkout.customer.sales_channel.profile.update'
			},
			{
			   'name':'checkout customer.sales_channel.register.billing_address',
			   'value':'checkout.customer.sales_channel.register.billing_address'
			},
			{
			   'name':'checkout customer.sales_channel.register.customer',
			   'value':'checkout.customer.sales_channel.register.customer'
			},
			{
			   'name':'checkout customer.sales_channel.register.shipping_address',
			   'value':'checkout.customer.sales_channel.register.shipping_address'
			},
			{
			   'name':'checkout order.placed',
			   'value':'checkout.order.placed'
			},
			{
			   'name':'cms_block deleted',
			   'value':'cms_block.deleted'
			},
			{
			   'name':'cms_block written',
			   'value':'cms_block.written'
			},
			{
			   'name':'cms_page deleted',
			   'value':'cms_page.deleted'
			},
			{
			   'name':'cms_page written',
			   'value':'cms_page.written'
			},
			{
			   'name':'cms_slot deleted',
			   'value':'cms_slot.deleted'
			},
			{
			   'name':'cms_slot written',
			   'value':'cms_slot.written'
			},
			{
			   'name':'country deleted',
			   'value':'country.deleted'
			},
			{
			   'name':'country written',
			   'value':'country.written'
			},
			{
			   'name':'country_area deleted',
			   'value':'country_area.deleted'
			},
			{
			   'name':'country_area written',
			   'value':'country_area.written'
			},
			{
			   'name':'country_area_translation deleted',
			   'value':'country_area_translation.deleted'
			},
			{
			   'name':'country_area_translation written',
			   'value':'country_area_translation.written'
			},
			{
			   'name':'country_state deleted',
			   'value':'country_state.deleted'
			},
			{
			   'name':'country_state written',
			   'value':'country_state.written'
			},
			{
			   'name':'country_state_translation deleted',
			   'value':'country_state_translation.deleted'
			},
			{
			   'name':'country_state_translation written',
			   'value':'country_state_translation.written'
			},
			{
			   'name':'country_translation deleted',
			   'value':'country_translation.deleted'
			},
			{
			   'name':'country_translation written',
			   'value':'country_translation.written'
			},
			{
			   'name':'currency deleted',
			   'value':'currency.deleted'
			},
			{
			   'name':'currency written',
			   'value':'currency.written'
			},
			{
			   'name':'currency_translation deleted',
			   'value':'currency_translation.deleted'
			},
			{
			   'name':'currency_translation written',
			   'value':'currency_translation.written'
			},
			{
			   'name':'custom_field deleted',
			   'value':'custom_field.deleted'
			},
			{
			   'name':'custom_field written',
			   'value':'custom_field.written'
			},
			{
			   'name':'custom_field_set deleted',
			   'value':'custom_field_set.deleted'
			},
			{
			   'name':'custom_field_set written',
			   'value':'custom_field_set.written'
			},
			{
			   'name':'custom_field_set_relation deleted',
			   'value':'custom_field_set_relation.deleted'
			},
			{
			   'name':'custom_field_set_relation written',
			   'value':'custom_field_set_relation.written'
			},
			{
			   'name':'customer deleted',
			   'value':'customer.deleted'
			},
			{
			   'name':'customer written',
			   'value':'customer.written'
			},
			{
			   'name':'customer_address deleted',
			   'value':'customer_address.deleted'
			},
			{
			   'name':'customer_address written',
			   'value':'customer_address.written'
			},
			{
			   'name':'customer_group deleted',
			   'value':'customer_group.deleted'
			},
			{
			   'name':'customer_group written',
			   'value':'customer_group.written'
			},
			{
			   'name':'customer_group_discount deleted',
			   'value':'customer_group_discount.deleted'
			},
			{
			   'name':'customer_group_discount written',
			   'value':'customer_group_discount.written'
			},
			{
			   'name':'customer_group_translation deleted',
			   'value':'customer_group_translation.deleted'
			},
			{
			   'name':'customer_group_translation written',
			   'value':'customer_group_translation.written'
			},
			{
			   'name':'import_export_file deleted',
			   'value':'import_export_file.deleted'
			},
			{
			   'name':'import_export_file written',
			   'value':'import_export_file.written'
			},
			{
			   'name':'import_export_log deleted',
			   'value':'import_export_log.deleted'
			},
			{
			   'name':'import_export_log written',
			   'value':'import_export_log.written'
			},
			{
			   'name':'import_export_profile deleted',
			   'value':'import_export_profile.deleted'
			},
			{
			   'name':'import_export_profile written',
			   'value':'import_export_profile.written'
			},
			{
			   'name':'integration deleted',
			   'value':'integration.deleted'
			},
			{
			   'name':'integration written',
			   'value':'integration.written'
			},
			{
			   'name':'language deleted',
			   'value':'language.deleted'
			},
			{
			   'name':'language written',
			   'value':'language.written'
			},
			{
			   'name':'locale deleted',
			   'value':'locale.deleted'
			},
			{
			   'name':'locale written',
			   'value':'locale.written'
			},
			{
			   'name':'locale_translation deleted',
			   'value':'locale_translation.deleted'
			},
			{
			   'name':'locale_translation written',
			   'value':'locale_translation.written'
			},
			{
			   'name':'mail_header_footer deleted',
			   'value':'mail_header_footer.deleted'
			},
			{
			   'name':'mail_header_footer written',
			   'value':'mail_header_footer.written'
			},
			{
			   'name':'mail_header_footer_sales_channel deleted',
			   'value':'mail_header_footer_sales_channel.deleted'
			},
			{
			   'name':'mail_header_footer_sales_channel written',
			   'value':'mail_header_footer_sales_channel.written'
			},
			{
			   'name':'mail_header_footer_translation deleted',
			   'value':'mail_header_footer_translation.deleted'
			},
			{
			   'name':'mail_header_footer_translation written',
			   'value':'mail_header_footer_translation.written'
			},
			{
			   'name':'mail_template deleted',
			   'value':'mail_template.deleted'
			},
			{
			   'name':'mail_template written',
			   'value':'mail_template.written'
			},
			{
			   'name':'mail_template_media deleted',
			   'value':'mail_template_media.deleted'
			},
			{
			   'name':'mail_template_media written',
			   'value':'mail_template_media.written'
			},
			{
			   'name':'mail_template_sales_channel deleted',
			   'value':'mail_template_sales_channel.deleted'
			},
			{
			   'name':'mail_template_sales_channel written',
			   'value':'mail_template_sales_channel.written'
			},
			{
			   'name':'mail_template_translation deleted',
			   'value':'mail_template_translation.deleted'
			},
			{
			   'name':'mail_template_translation written',
			   'value':'mail_template_translation.written'
			},
			{
			   'name':'media deleted',
			   'value':'media.deleted'
			},
			{
			   'name':'media written',
			   'value':'media.written'
			},
			{
			   'name':'media_translation deleted',
			   'value':'media_translation.deleted'
			},
			{
			   'name':'media_translation written',
			   'value':'media_translation.written'
			},
			{
			   'name':'newsletter confirm',
			   'value':'newsletter.confirm'
			},
			{
			   'name':'newsletter update',
			   'value':'newsletter.update'
			},
			{
			   'name':'newsletter_recipient deleted',
			   'value':'newsletter_recipient.deleted'
			},
			{
			   'name':'newsletter_recipient written',
			   'value':'newsletter_recipient.written'
			},
			{
			   'name':'number_range deleted',
			   'value':'number_range.deleted'
			},
			{
			   'name':'number_range generated',
			   'value':'number_range.generated'
			},
			{
			   'name':'number_range written',
			   'value':'number_range.written'
			},
			{
			   'name':'number_range_state deleted',
			   'value':'number_range_state.deleted'
			},
			{
			   'name':'number_range_state written',
			   'value':'number_range_state.written'
			},
			{
			   'name':'order deleted',
			   'value':'order.deleted'
			},
			{
			   'name':'order written',
			   'value':'order.written'
			},
			{
			   'name':'order_address deleted',
			   'value':'order_address.deleted'
			},
			{
			   'name':'order_address written',
			   'value':'order_address.written'
			},
			{
			   'name':'order_delivery deleted',
			   'value':'order_delivery.deleted'
			},
			{
			   'name':'order_delivery written',
			   'value':'order_delivery.written'
			},
			{
			   'name':'order_delivery_position deleted',
			   'value':'order_delivery_position.deleted'
			},
			{
			   'name':'order_delivery_position written',
			   'value':'order_delivery_position.written'
			},
			{
			   'name':'order_line_item deleted',
			   'value':'order_line_item.deleted'
			},
			{
			   'name':'order_line_item written',
			   'value':'order_line_item.written'
			},
			{
			   'name':'order_state deleted',
			   'value':'order_state.deleted'
			},
			{
			   'name':'order_state written',
			   'value':'order_state.written'
			},
			{
			   'name':'order_state_translation deleted',
			   'value':'order_state_translation.deleted'
			},
			{
			   'name':'order_state_translation written',
			   'value':'order_state_translation.written'
			},
			{
			   'name':'order_transaction deleted',
			   'value':'order_transaction.deleted'
			},
			{
			   'name':'order_transaction written',
			   'value':'order_transaction.written'
			},
			{
			   'name':'order_transaction_state deleted',
			   'value':'order_transaction_state.deleted'
			},
			{
			   'name':'order_transaction_state written',
			   'value':'order_transaction_state.written'
			},
			{
			   'name':'order_transaction_state_translation deleted',
			   'value':'order_transaction_state_translation.deleted'
			},
			{
			   'name':'order_transaction_state_translation written',
			   'value':'order_transaction_state_translation.written'
			},
			{
			   'name':'payment_method deleted',
			   'value':'payment_method.deleted'
			},
			{
			   'name':'payment_method written',
			   'value':'payment_method.written'
			},
			{
			   'name':'payment_method_translation deleted',
			   'value':'payment_method_translation.deleted'
			},
			{
			   'name':'payment_method_translation written',
			   'value':'payment_method_translation.written'
			},
			{
			   'name':'plugin deleted',
			   'value':'plugin.deleted'
			},
			{
			   'name':'plugin written',
			   'value':'plugin.written'
			},
			{
			   'name':'product deleted',
			   'value':'product.deleted'
			},
			{
			   'name':'product written',
			   'value':'product.written'
			},
			{
			   'name':'product_category deleted',
			   'value':'product_category.deleted'
			},
			{
			   'name':'product_category written',
			   'value':'product_category.written'
			},
			{
			   'name':'product_category_tree deleted',
			   'value':'product_category_tree.deleted'
			},
			{
			   'name':'product_category_tree written',
			   'value':'product_category_tree.written'
			},
			{
			   'name':'product_configurator_setting deleted',
			   'value':'product_configurator_setting.deleted'
			},
			{
			   'name':'product_configurator_setting written',
			   'value':'product_configurator_setting.written'
			},
			{
			   'name':'product_manufacturer deleted',
			   'value':'product_manufacturer.deleted'
			},
			{
			   'name':'product_manufacturer written',
			   'value':'product_manufacturer.written'
			},
			{
			   'name':'product_manufacturer_translation deleted',
			   'value':'product_manufacturer_translation.deleted'
			},
			{
			   'name':'product_manufacturer_translation written',
			   'value':'product_manufacturer_translation.written'
			},
			{
			   'name':'product_media deleted',
			   'value':'product_media.deleted'
			},
			{
			   'name':'product_media written',
			   'value':'product_media.written'
			},
			{
			   'name':'product_option deleted',
			   'value':'product_option.deleted'
			},
			{
			   'name':'product_option written',
			   'value':'product_option.written'
			},
			{
			   'name':'product_price deleted',
			   'value':'product_price.deleted'
			},
			{
			   'name':'product_price written',
			   'value':'product_price.written'
			},
			{
			   'name':'product_property deleted',
			   'value':'product_property.deleted'
			},
			{
			   'name':'product_property written',
			   'value':'product_property.written'
			},
			{
			   'name':'product_review deleted',
			   'value':'product_review.deleted'
			},
			{
			   'name':'product_review written',
			   'value':'product_review.written'
			},
			{
			   'name':'product_search_keyword deleted',
			   'value':'product_search_keyword.deleted'
			},
			{
			   'name':'product_search_keyword written',
			   'value':'product_search_keyword.written'
			},
			{
			   'name':'product_seo_category deleted',
			   'value':'product_seo_category.deleted'
			},
			{
			   'name':'product_seo_category written',
			   'value':'product_seo_category.written'
			},
			{
			   'name':'product_service deleted',
			   'value':'product_service.deleted'
			},
			{
			   'name':'product_service written',
			   'value':'product_service.written'
			},
			{
			   'name':'product_stream deleted',
			   'value':'product_stream.deleted'
			},
			{
			   'name':'product_stream written',
			   'value':'product_stream.written'
			},
			{
			   'name':'product_stream_assignment deleted',
			   'value':'product_stream_assignment.deleted'
			},
			{
			   'name':'product_stream_assignment written',
			   'value':'product_stream_assignment.written'
			},
			{
			   'name':'product_stream_tab deleted',
			   'value':'product_stream_tab.deleted'
			},
			{
			   'name':'product_stream_tab written',
			   'value':'product_stream_tab.written'
			},
			{
			   'name':'product_translation deleted',
			   'value':'product_translation.deleted'
			},
			{
			   'name':'product_translation written',
			   'value':'product_translation.written'
			},
			{
			   'name':'property_group deleted',
			   'value':'property_group.deleted'
			},
			{
			   'name':'property_group written',
			   'value':'property_group.written'
			},
			{
			   'name':'property_group_option deleted',
			   'value':'property_group_option.deleted'
			},
			{
			   'name':'property_group_option written',
			   'value':'property_group_option.written'
			},
			{
			   'name':'property_group_option_translation deleted',
			   'value':'property_group_option_translation.deleted'
			},
			{
			   'name':'property_group_option_translation written',
			   'value':'property_group_option_translation.written'
			},
			{
			   'name':'property_group_translation deleted',
			   'value':'property_group_translation.deleted'
			},
			{
			   'name':'property_group_translation written',
			   'value':'property_group_translation.written'
			},
			{
			   'name':'rule deleted',
			   'value':'rule.deleted'
			},
			{
			   'name':'rule written',
			   'value':'rule.written'
			},
			{
			   'name':'sales_channel deleted',
			   'value':'sales_channel.deleted'
			},
			{
			   'name':'sales_channel written',
			   'value':'sales_channel.written'
			},
			{
			   'name':'sales_channel_translation deleted',
			   'value':'sales_channel_translation.deleted'
			},
			{
			   'name':'sales_channel_translation written',
			   'value':'sales_channel_translation.written'
			},
			{
			   'name':'sales_channel_type deleted',
			   'value':'sales_channel_type.deleted'
			},
			{
			   'name':'sales_channel_type written',
			   'value':'sales_channel_type.written'
			},
			{
			   'name':'sales_channel_type_translation deleted',
			   'value':'sales_channel_type_translation.deleted'
			},
			{
			   'name':'sales_channel_type_translation written',
			   'value':'sales_channel_type_translation.written'
			},
			{
			   'name':'seo_url deleted',
			   'value':'seo_url.deleted'
			},
			{
			   'name':'seo_url written',
			   'value':'seo_url.written'
			},
			{
			   'name':'seo_url_template deleted',
			   'value':'seo_url_template.deleted'
			},
			{
			   'name':'seo_url_template written',
			   'value':'seo_url_template.written'
			},
			{
			   'name':'shipping_method deleted',
			   'value':'shipping_method.deleted'
			},
			{
			   'name':'shipping_method written',
			   'value':'shipping_method.written'
			},
			{
			   'name':'shipping_method_price deleted',
			   'value':'shipping_method_price.deleted'
			},
			{
			   'name':'shipping_method_price written',
			   'value':'shipping_method_price.written'
			},
			{
			   'name':'shipping_method_translation deleted',
			   'value':'shipping_method_translation.deleted'
			},
			{
			   'name':'shipping_method_translation written',
			   'value':'shipping_method_translation.written'
			},
			{
			   'name':'shopware global_business_event',
			   'value':'shopware.global_business_event'
			},
			{
			   'name':'shopware global_business_event',
			   'value':'shopware.global_business_event'
			},
			{
			   'name':'snippet deleted',
			   'value':'snippet.deleted'
			},
			{
			   'name':'snippet written',
			   'value':'snippet.written'
			},
			{
			   'name':'snippet_set deleted',
			   'value':'snippet_set.deleted'
			},
			{
			   'name':'snippet_set written',
			   'value':'snippet_set.written'
			},
			{
			   'name':'tax deleted',
			   'value':'tax.deleted'
			},
			{
			   'name':'tax written',
			   'value':'tax.written'
			},
			{
			   'name':'tax_area_rule deleted',
			   'value':'tax_area_rule.deleted'
			},
			{
			   'name':'tax_area_rule written',
			   'value':'tax_area_rule.written'
			},
			{
			   'name':'tax_area_rule_translation deleted',
			   'value':'tax_area_rule_translation.deleted'
			},
			{
			   'name':'tax_area_rule_translation written',
			   'value':'tax_area_rule_translation.written'
			},
			{
			   'name':'unit deleted',
			   'value':'unit.deleted'
			},
			{
			   'name':'unit written',
			   'value':'unit.written'
			},
			{
			   'name':'unit_translation deleted',
			   'value':'unit_translation.deleted'
			},
			{
			   'name':'unit_translation written',
			   'value':'unit_translation.written'
			},
			{
			   'name':'user deleted',
			   'value':'user.deleted'
			},
			{
			   'name':'user written',
			   'value':'user.written'
			},
			{
			   'name':'user_access_key deleted',
			   'value':'user_access_key.deleted'
			},
			{
			   'name':'user_access_key written',
			   'value':'user_access_key.written'
			},
			{
			   'name':'version deleted',
			   'value':'version.deleted'
			},
			{
			   'name':'version written',
			   'value':'version.written'
			},
			{
			   'name':'version_commit deleted',
			   'value':'version_commit.deleted'
			},
			{
			   'name':'version_commit written',
			   'value':'version_commit.written'
			},
			{
			   'name':'version_commit_data deleted',
			   'value':'version_commit_data.deleted'
			},
			{
			   'name':'version_commit_data written',
			   'value':'version_commit_data.written'
			}
		 ],
	},
] as INodeProperties[];
