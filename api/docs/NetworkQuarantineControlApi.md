# S1MgmtApi.NetworkQuarantineControlApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiFirewallControlfirewallRuleCategoryAddTagsPost**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryAddTagsPost) | **POST** /web/api/v2.1/firewall-control/{firewall_rule_category}/add-tags | Add Rule Tags
[**webApiFirewallControlfirewallRuleCategoryConfigurationGet**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryConfigurationGet) | **GET** /web/api/v2.1/firewall-control/{firewall_rule_category}/configuration | Get Configuration
[**webApiFirewallControlfirewallRuleCategoryConfigurationPut**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryConfigurationPut) | **PUT** /web/api/v2.1/firewall-control/{firewall_rule_category}/configuration | Update Configuration
[**webApiFirewallControlfirewallRuleCategoryCopyRulesPost**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryCopyRulesPost) | **POST** /web/api/v2.1/firewall-control/{firewall_rule_category}/copy-rules | Copy Rules
[**webApiFirewallControlfirewallRuleCategoryDelete**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryDelete) | **DELETE** /web/api/v2.1/firewall-control/{firewall_rule_category} | Delete Rules
[**webApiFirewallControlfirewallRuleCategoryEnablePut**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryEnablePut) | **PUT** /web/api/v2.1/firewall-control/{firewall_rule_category}/enable | Enable/Disable Rules
[**webApiFirewallControlfirewallRuleCategoryExportGet**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryExportGet) | **GET** /web/api/v2.1/firewall-control/{firewall_rule_category}/export | Export Rules
[**webApiFirewallControlfirewallRuleCategoryGet**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryGet) | **GET** /web/api/v2.1/firewall-control/{firewall_rule_category} | Get Firewall Rules
[**webApiFirewallControlfirewallRuleCategoryImportPost**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryImportPost) | **POST** /web/api/v2.1/firewall-control/{firewall_rule_category}/import | Import Rules
[**webApiFirewallControlfirewallRuleCategoryMoveRulesPost**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryMoveRulesPost) | **POST** /web/api/v2.1/firewall-control/{firewall_rule_category}/move-rules | Move Rules
[**webApiFirewallControlfirewallRuleCategoryPost**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryPost) | **POST** /web/api/v2.1/firewall-control/{firewall_rule_category} | Create Firewall Rule
[**webApiFirewallControlfirewallRuleCategoryProtocolsGet**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryProtocolsGet) | **GET** /web/api/v2.1/firewall-control/{firewall_rule_category}/protocols | Get Protocols
[**webApiFirewallControlfirewallRuleCategoryRemoveTagsPost**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryRemoveTagsPost) | **POST** /web/api/v2.1/firewall-control/{firewall_rule_category}/remove-tags | Remove Rule Tags
[**webApiFirewallControlfirewallRuleCategoryReorderPut**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategoryReorderPut) | **PUT** /web/api/v2.1/firewall-control/{firewall_rule_category}/reorder | Reorder Rules
[**webApiFirewallControlfirewallRuleCategorySetLocationPost**](NetworkQuarantineControlApi.md#webApiFirewallControlfirewallRuleCategorySetLocationPost) | **POST** /web/api/v2.1/firewall-control/{firewall_rule_category}/set-location | Set Location


<a name="webApiFirewallControlfirewallRuleCategoryAddTagsPost"></a>
# **webApiFirewallControlfirewallRuleCategoryAddTagsPost**
> AffectedResultsSchema200 webApiFirewallControlfirewallRuleCategoryAddTagsPost(firewallRuleCategory, opts)

Add Rule Tags

Create a Firewall Rule tag. <br>Create tags to represent Firewall policies - a set of rules in a specific order. After you create the tag, add rules to it.<br>Notes:<br>* Tags apply to a scope and cannot be linked to rules from different scopes.<br>* Tags must be 2 to 256 characters.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'body': new S1MgmtApi.FirewallControlSchemasChangeRulesTagsSchema() // FirewallControlSchemasChangeRulesTagsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryAddTagsPost(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **body** | [**FirewallControlSchemasChangeRulesTagsSchema**](FirewallControlSchemasChangeRulesTagsSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryConfigurationGet"></a>
# **webApiFirewallControlfirewallRuleCategoryConfigurationGet**
> FirewallControlSchemasFirewallSettingsSchema200 webApiFirewallControlfirewallRuleCategoryConfigurationGet(firewallRuleCategory, opts)

Get Configuration

Get the Firewall Control configuration for a given scope.<br>To filter the results for a scope:<br>* Global - Make sure \"tenant\" is \"true\" and no other scope ID is given.<br>* Account - Make sure \"tenant\" is \"false\" and at least one Account ID is given.<br>* Site - Make sure \"tenant\" is \"false\" and at least one Site ID is given.<br>The response shows if Firewall Control is enabled for the scope, if Location Awareness is enabled, the higher scope from which this scope inherited the configuration, and whether a lower scope inherits this configuration.<br>Firewall Control requires Control SKU.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryConfigurationGet(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**FirewallControlSchemasFirewallSettingsSchema200**](FirewallControlSchemasFirewallSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryConfigurationPut"></a>
# **webApiFirewallControlfirewallRuleCategoryConfigurationPut**
> FirewallControlSchemasFirewallSettingsSchema200 webApiFirewallControlfirewallRuleCategoryConfigurationPut(firewallRuleCategory, opts)

Update Configuration

Change the Firewall Control configuration for a given scope.  <br>To get the ID of a scope, run \"accounts\", \"sites\", or \"groups\". To change the Global configuration, leave the filters empty and set \"tenant\" to \"true\". In the Body, you can set if Firewall Control is enabled for the scope, if Location Awareness is enabled, the higher scope from which this scope inherits the configuration (\"Global\" or a scope ID), whether the lower scopes inherit this configuration, and whether blocked actions are reported.<br>Firewall Control requires Control SKU.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'body': new S1MgmtApi.FirewallControlSchemasPostFirewallSettingsSchema() // FirewallControlSchemasPostFirewallSettingsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryConfigurationPut(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **body** | [**FirewallControlSchemasPostFirewallSettingsSchema**](FirewallControlSchemasPostFirewallSettingsSchema.md)|  | [optional] 

### Return type

[**FirewallControlSchemasFirewallSettingsSchema200**](FirewallControlSchemasFirewallSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryCopyRulesPost"></a>
# **webApiFirewallControlfirewallRuleCategoryCopyRulesPost**
> AffectedResultsSchema200 webApiFirewallControlfirewallRuleCategoryCopyRulesPost(firewallRuleCategory, opts)

Copy Rules

Copy a set of rules to other scopes. <br>In the filter of the body, enter the properties to define the source. In the data field of the body, define the targets by ID. To get a scope ID, run 'accounts', 'sites', or 'groups'.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'body': new S1MgmtApi.FirewallControlSchemasCopyRuleSchema() // FirewallControlSchemasCopyRuleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryCopyRulesPost(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **body** | [**FirewallControlSchemasCopyRuleSchema**](FirewallControlSchemasCopyRuleSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryDelete"></a>
# **webApiFirewallControlfirewallRuleCategoryDelete**
> AffectedResultsSchema200 webApiFirewallControlfirewallRuleCategoryDelete(firewallRuleCategory, opts)

Delete Rules

Delete Firewall Control rules that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'body': new S1MgmtApi.FirewallControlSchemasRuleDeleteSchema() // FirewallControlSchemasRuleDeleteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryDelete(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **body** | [**FirewallControlSchemasRuleDeleteSchema**](FirewallControlSchemasRuleDeleteSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryEnablePut"></a>
# **webApiFirewallControlfirewallRuleCategoryEnablePut**
> AffectedResultsSchema200 webApiFirewallControlfirewallRuleCategoryEnablePut(firewallRuleCategory, opts)

Enable/Disable Rules

Change the status of a set of Firewall Control rules that match the filter to \"Enabled\" or \"Disabled\". In one request, you can set one status or the other.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'body': new S1MgmtApi.FirewallControlSchemasEnableRuleSchema() // FirewallControlSchemasEnableRuleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryEnablePut(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **body** | [**FirewallControlSchemasEnableRuleSchema**](FirewallControlSchemasEnableRuleSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryExportGet"></a>
# **webApiFirewallControlfirewallRuleCategoryExportGet**
> webApiFirewallControlfirewallRuleCategoryExportGet(firewallRuleCategory, opts)

Export Rules

Export Firewall Control rules that match the filter to a JSON file from a scope specified by ID (run \"accounts\", \"sites\", \"groups\", or leave the scope empty and set \"tenant\" to \"true\") and import them to another scope (with the \"import\" command. <br>Firewall Control requires Control SKU.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return firewall rules created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by the Rule name (supports multiple values)
  'serviceContains': ["serviceContains_example"], // [String] | Free-text filter by service (supports multiple values)
  'actions': ["actions_example"], // [String] | Return firewall rules with the filtered action. Example: \"Allow\".
  'tagIds': ["tagIds_example"], // [String] | Filter by associated tags. Example: \"225494730938493804,225494730938493915\".
  'directions': ["directions_example"], // [String] | Return firewall rules with the filtered directions. Example: \"any\".
  'protocols': ["protocols_example"], // [String] | Return firewall rules with the filtered protocols.
  'ids': ["ids_example"], // [String] | List of ids to filter by. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | Free text search on name, tag, application, protocol
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return firewall rules created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'osTypes': ["osTypes_example"], // [String] | Return firewall rules with the filtered os_type. Example: \"windows\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return firewall rules created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'scopes': ["scopes_example"], // [String] | Return only firewall rules in this scope. Example: \"site\".
  'statuses': ["statuses_example"], // [String] | Return firewall rules with the filtered status. Example: \"Enabled\".
  'protocolContains': ["protocolContains_example"], // [String] | Free-text filter by protocol (supports multiple values)
  'applicationContains': ["applicationContains_example"], // [String] | Free-text filter by application (supports multiple values)
  'locationIds': ["locationIds_example"], // [String] | Filter by associated locations. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'createdAtBetween': "createdAtBetween_example", // String | Return firewall rules created within this range (inclusive). Example: \"1514978764288-1514978999999\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return firewall rules created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'name': "name_example", // String | Return firewall rules with the filtered name.
  'tagNameContains': ["tagNameContains_example"], // [String] | Free-text filter by the Tag name (supports multiple values)
  'applications': ["applications_example"] // [String] | Return firewall rules with the filtered firewall class.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryExportGet(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **createdAtGt** | **Date**| Return firewall rules created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **nameContains** | [**[String]**](String.md)| Free-text filter by the Rule name (supports multiple values) | [optional] 
 **serviceContains** | [**[String]**](String.md)| Free-text filter by service (supports multiple values) | [optional] 
 **actions** | [**[String]**](String.md)| Return firewall rules with the filtered action. Example: \"Allow\". | [optional] 
 **tagIds** | [**[String]**](String.md)| Filter by associated tags. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **directions** | [**[String]**](String.md)| Return firewall rules with the filtered directions. Example: \"any\". | [optional] 
 **protocols** | [**[String]**](String.md)| Return firewall rules with the filtered protocols. | [optional] 
 **ids** | [**[String]**](String.md)| List of ids to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| Free text search on name, tag, application, protocol | [optional] 
 **createdAtLt** | **Date**| Return firewall rules created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Return firewall rules with the filtered os_type. Example: \"windows\". | [optional] 
 **createdAtLte** | **Date**| Return firewall rules created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **scopes** | [**[String]**](String.md)| Return only firewall rules in this scope. Example: \"site\". | [optional] 
 **statuses** | [**[String]**](String.md)| Return firewall rules with the filtered status. Example: \"Enabled\". | [optional] 
 **protocolContains** | [**[String]**](String.md)| Free-text filter by protocol (supports multiple values) | [optional] 
 **applicationContains** | [**[String]**](String.md)| Free-text filter by application (supports multiple values) | [optional] 
 **locationIds** | [**[String]**](String.md)| Filter by associated locations. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **createdAtBetween** | **String**| Return firewall rules created within this range (inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **createdAtGte** | **Date**| Return firewall rules created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **name** | **String**| Return firewall rules with the filtered name. | [optional] 
 **tagNameContains** | [**[String]**](String.md)| Free-text filter by the Tag name (supports multiple values) | [optional] 
 **applications** | [**[String]**](String.md)| Return firewall rules with the filtered firewall class. | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryGet"></a>
# **webApiFirewallControlfirewallRuleCategoryGet**
> FirewallControlSchemasFirewallSchemaMany200 webApiFirewallControlfirewallRuleCategoryGet(firewallRuleCategory, opts)

Get Firewall Rules

Get the Firewall Control rules for a scope specified by ID (run \"accounts\", \"sites, \"groups\", or set \"tenant\" to \"true\") that match the filter. <br>The response will be quite long because it includes all the rule properties, thus at least one of these filters is required: action, status, osType, name, or scope ID.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return firewall rules created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by the Rule name (supports multiple values)
  'serviceContains': ["serviceContains_example"], // [String] | Free-text filter by service (supports multiple values)
  'actions': ["actions_example"], // [String] | Return firewall rules with the filtered action. Example: \"Allow\".
  'tagIds': ["tagIds_example"], // [String] | Filter by associated tags. Example: \"225494730938493804,225494730938493915\".
  'directions': ["directions_example"], // [String] | Return firewall rules with the filtered directions. Example: \"any\".
  'protocols': ["protocols_example"], // [String] | Return firewall rules with the filtered protocols.
  'query': "query_example", // String | Free text search on name, tag, application, protocol
  'ids': ["ids_example"], // [String] | List of ids to filter by. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return firewall rules created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'osTypes': ["osTypes_example"], // [String] | Return firewall rules with the filtered os_type. Example: \"windows\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return firewall rules created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'scopes': ["scopes_example"], // [String] | Return only firewall rules in this scope. Example: \"site\".
  'statuses': ["statuses_example"], // [String] | Return firewall rules with the filtered status. Example: \"Enabled\".
  'protocolContains': ["protocolContains_example"], // [String] | Free-text filter by protocol (supports multiple values)
  'applicationContains': ["applicationContains_example"], // [String] | Free-text filter by application (supports multiple values)
  'disablePagination': true, // Boolean | If true, all rules for requested scope will be returned
  'locationIds': ["locationIds_example"], // [String] | Filter by associated locations. Example: \"225494730938493804,225494730938493915\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'createdAtBetween': "createdAtBetween_example", // String | Return firewall rules created within this range (inclusive). Example: \"1514978764288-1514978999999\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return firewall rules created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'name': "name_example", // String | Return firewall rules with the filtered name.
  'tagNameContains': ["tagNameContains_example"], // [String] | Free-text filter by the Tag name (supports multiple values)
  'applications': ["applications_example"] // [String] | Return firewall rules with the filtered firewall class.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryGet(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **createdAtGt** | **Date**| Return firewall rules created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **nameContains** | [**[String]**](String.md)| Free-text filter by the Rule name (supports multiple values) | [optional] 
 **serviceContains** | [**[String]**](String.md)| Free-text filter by service (supports multiple values) | [optional] 
 **actions** | [**[String]**](String.md)| Return firewall rules with the filtered action. Example: \"Allow\". | [optional] 
 **tagIds** | [**[String]**](String.md)| Filter by associated tags. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **directions** | [**[String]**](String.md)| Return firewall rules with the filtered directions. Example: \"any\". | [optional] 
 **protocols** | [**[String]**](String.md)| Return firewall rules with the filtered protocols. | [optional] 
 **query** | **String**| Free text search on name, tag, application, protocol | [optional] 
 **ids** | [**[String]**](String.md)| List of ids to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **createdAtLt** | **Date**| Return firewall rules created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **osTypes** | [**[String]**](String.md)| Return firewall rules with the filtered os_type. Example: \"windows\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **createdAtLte** | **Date**| Return firewall rules created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **scopes** | [**[String]**](String.md)| Return only firewall rules in this scope. Example: \"site\". | [optional] 
 **statuses** | [**[String]**](String.md)| Return firewall rules with the filtered status. Example: \"Enabled\". | [optional] 
 **protocolContains** | [**[String]**](String.md)| Free-text filter by protocol (supports multiple values) | [optional] 
 **applicationContains** | [**[String]**](String.md)| Free-text filter by application (supports multiple values) | [optional] 
 **disablePagination** | **Boolean**| If true, all rules for requested scope will be returned | [optional] 
 **locationIds** | [**[String]**](String.md)| Filter by associated locations. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **createdAtBetween** | **String**| Return firewall rules created within this range (inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **createdAtGte** | **Date**| Return firewall rules created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **name** | **String**| Return firewall rules with the filtered name. | [optional] 
 **tagNameContains** | [**[String]**](String.md)| Free-text filter by the Tag name (supports multiple values) | [optional] 
 **applications** | [**[String]**](String.md)| Return firewall rules with the filtered firewall class. | [optional] 

### Return type

[**FirewallControlSchemasFirewallSchemaMany200**](FirewallControlSchemasFirewallSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryImportPost"></a>
# **webApiFirewallControlfirewallRuleCategoryImportPost**
> SuccessResponseSchema200 webApiFirewallControlfirewallRuleCategoryImportPost(firewallRuleCategory, file, opts)

Import Rules

Import Firewall Control rules from an exported JSON file to scopes specified by ID (run \"accounts\", \"sites\", \"groups\", or leave the scope empty and set \"tenant\" to \"true\").<br>Firewall Control requires Control SKU, in the target and in the source.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var file = "/path/to/file.txt"; // File | File

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryImportPost(firewallRuleCategory, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **file** | **File**| File | 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryMoveRulesPost"></a>
# **webApiFirewallControlfirewallRuleCategoryMoveRulesPost**
> AffectedResultsSchema200 webApiFirewallControlfirewallRuleCategoryMoveRulesPost(firewallRuleCategory, opts)

Move Rules

Remove Firewall Rules, defined with the ID of the rules (run 'firewall-control'), from scopes specified by ID (run 'accounts', 'sites', or 'groups') and add the rules to the scope IDs in the data field.<br>Firewall Control requires Control SKU.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'body': new S1MgmtApi.FirewallControlSchemasCopyRuleSchema() // FirewallControlSchemasCopyRuleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryMoveRulesPost(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **body** | [**FirewallControlSchemasCopyRuleSchema**](FirewallControlSchemasCopyRuleSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryPost"></a>
# **webApiFirewallControlfirewallRuleCategoryPost**
> FirewallControlSchemasFirewallSchema200 webApiFirewallControlfirewallRuleCategoryPost(firewallRuleCategory, opts)

Create Firewall Rule

Create a Firewall Control rule for a scope specified by ID (run \"accounts\", \"sites\", \"groups\", or set \"tenant\" to \"true\") and specific OS, to allow or block network traffic to matching endpoints.<br>You can create one clean-up rule, with the Action of Allow or Block and with no other parameters defined explicitly. Make this the default rule at the end of your rule list. Traffic that does not match other rules first will match this rule. If you do not have a clean-up rule to match all traffic, the default Firewall Control behavior is to allow traffic that is not explicitly blocked.<br>Firewall Control requires Control SKU.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'body': new S1MgmtApi.FirewallControlSchemasPostFirewallSchema() // FirewallControlSchemasPostFirewallSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryPost(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **body** | [**FirewallControlSchemasPostFirewallSchema**](FirewallControlSchemasPostFirewallSchema.md)|  | [optional] 

### Return type

[**FirewallControlSchemasFirewallSchema200**](FirewallControlSchemasFirewallSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryProtocolsGet"></a>
# **webApiFirewallControlfirewallRuleCategoryProtocolsGet**
> FirewallControlSchemasProtocolSchemaMany200 webApiFirewallControlfirewallRuleCategoryProtocolsGet(firewallRuleCategory, opts)

Get Protocols

Get a list of protocols that can be used in Firewall Control rules.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'disablePagination': true, // Boolean | If true, all rules for requested scope will be returned
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'query': "query_example", // String | Full text search on protocols
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10 // Number | Limit number of returned items (1-1000). Example: \"10\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryProtocolsGet(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **disablePagination** | **Boolean**| If true, all rules for requested scope will be returned | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **query** | **String**| Full text search on protocols | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]

### Return type

[**FirewallControlSchemasProtocolSchemaMany200**](FirewallControlSchemasProtocolSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryRemoveTagsPost"></a>
# **webApiFirewallControlfirewallRuleCategoryRemoveTagsPost**
> AffectedResultsSchema200 webApiFirewallControlfirewallRuleCategoryRemoveTagsPost(firewallRuleCategory, opts)

Remove Rule Tags

Remove firewall tags from rules matching the filter.<br>Tags represent Firewall policies - a set of rules in a specific order. When you remove a rule with a tag, all scopes that subscribe to the tag get the change.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'body': new S1MgmtApi.FirewallControlSchemasChangeRulesTagsSchema() // FirewallControlSchemasChangeRulesTagsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryRemoveTagsPost(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **body** | [**FirewallControlSchemasChangeRulesTagsSchema**](FirewallControlSchemasChangeRulesTagsSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategoryReorderPut"></a>
# **webApiFirewallControlfirewallRuleCategoryReorderPut**
> SuccessResponseSchema200 webApiFirewallControlfirewallRuleCategoryReorderPut(firewallRuleCategory, opts)

Reorder Rules

Change the order of rules for a scope  specified by ID (run \"accounts\", \"sites\", or \"groups\"). <br>The Agent looks at the rules based on their order in the Firewall Control policy, from the top to the bottom. First it goes through the Group rules, then the Site rules, then the Account rules, then the Global rules. When the Agent finds a rule that matches the parameters of the traffic, that rule is applied. The Agent does not continue to the lower rules in the list. Thus, the scope and the order of the rules is important.<br>Firewall Control requires Control SKU.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'body': new S1MgmtApi.FirewallControlSchemasReorderSchema() // FirewallControlSchemasReorderSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategoryReorderPut(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **body** | [**FirewallControlSchemasReorderSchema**](FirewallControlSchemasReorderSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiFirewallControlfirewallRuleCategorySetLocationPost"></a>
# **webApiFirewallControlfirewallRuleCategorySetLocationPost**
> AffectedResultsSchema200 webApiFirewallControlfirewallRuleCategorySetLocationPost(firewallRuleCategory, opts)

Set Location

Set location attributes for a Location Aware Firewall Control rule. These rules are applied by Agents only if the network parameters of the endpoint match the properties of the location definition. To get a Location ID, run \"locations\". <br>Firewall Control requires Control SKU.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.NetworkQuarantineControlApi();

var firewallRuleCategory = "firewallRuleCategory_example"; // String | To affect Network Quarantine use network-quarantine

var opts = { 
  'body': new S1MgmtApi.FirewallControlSchemasSetLocationSchema() // FirewallControlSchemasSetLocationSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFirewallControlfirewallRuleCategorySetLocationPost(firewallRuleCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallRuleCategory** | **String**| To affect Network Quarantine use network-quarantine | 
 **body** | [**FirewallControlSchemasSetLocationSchema**](FirewallControlSchemasSetLocationSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

