# S1MgmtApi.CustomDetectionRuleApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiCloudDetectionRulesDelete**](CustomDetectionRuleApi.md#webApiCloudDetectionRulesDelete) | **DELETE** /web/api/v2.1/cloud-detection/rules | Delete Rules
[**webApiCloudDetectionRulesDisablePut**](CustomDetectionRuleApi.md#webApiCloudDetectionRulesDisablePut) | **PUT** /web/api/v2.1/cloud-detection/rules/disable | Disable Rules
[**webApiCloudDetectionRulesEnablePut**](CustomDetectionRuleApi.md#webApiCloudDetectionRulesEnablePut) | **PUT** /web/api/v2.1/cloud-detection/rules/enable | Activate Rules
[**webApiCloudDetectionRulesGet**](CustomDetectionRuleApi.md#webApiCloudDetectionRulesGet) | **GET** /web/api/v2.1/cloud-detection/rules | Get Rules
[**webApiCloudDetectionRulesPost**](CustomDetectionRuleApi.md#webApiCloudDetectionRulesPost) | **POST** /web/api/v2.1/cloud-detection/rules | Create Rule
[**webApiCloudDetectionRulesruleIdPut**](CustomDetectionRuleApi.md#webApiCloudDetectionRulesruleIdPut) | **PUT** /web/api/v2.1/cloud-detection/rules/{rule_id} | Update Rule


<a name="webApiCloudDetectionRulesDelete"></a>
# **webApiCloudDetectionRulesDelete**
> AffectedResultsSchema200 webApiCloudDetectionRulesDelete(opts)

Delete Rules

Deletes Custom Detection Rules that match a filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.CustomDetectionRuleApi();

var opts = { 
  'body': new S1MgmtApi.V21RulesSchemasRuleDeleteSchema() // V21RulesSchemasRuleDeleteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiCloudDetectionRulesDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21RulesSchemasRuleDeleteSchema**](V21RulesSchemasRuleDeleteSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiCloudDetectionRulesDisablePut"></a>
# **webApiCloudDetectionRulesDisablePut**
> AffectedResultsSchema200 webApiCloudDetectionRulesDisablePut(opts)

Disable Rules

Disable Custom Detection Rules based on a filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.CustomDetectionRuleApi();

var opts = { 
  'body': new S1MgmtApi.V21RulesSchemasFilterRuleSchema() // V21RulesSchemasFilterRuleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiCloudDetectionRulesDisablePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21RulesSchemasFilterRuleSchema**](V21RulesSchemasFilterRuleSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiCloudDetectionRulesEnablePut"></a>
# **webApiCloudDetectionRulesEnablePut**
> AffectedResultsSchema200 webApiCloudDetectionRulesEnablePut(opts)

Activate Rules

Activate Custom Detection Rules based on a filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.CustomDetectionRuleApi();

var opts = { 
  'body': new S1MgmtApi.V21RulesSchemasFilterRuleSchema() // V21RulesSchemasFilterRuleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiCloudDetectionRulesEnablePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21RulesSchemasFilterRuleSchema**](V21RulesSchemasFilterRuleSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiCloudDetectionRulesGet"></a>
# **webApiCloudDetectionRulesGet**
> V21RulesSchemasRuleViewSchemaMany200 webApiCloudDetectionRulesGet(opts)

Get Rules

Get a list of Custom Detection Rules for a given scope. <br>Note:  You can create and see rules only for your highest available scope. For example, if your username has an access level of scope Account, you cannot see rules created for the Global scope or rules created for a specific Site.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.CustomDetectionRuleApi();

var opts = { 
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'activeResponse': true, // Boolean | The active response status for the rule.
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'query': ["query_example"], // [String] | Free-text filter by S1 query. You can enter multiple values, separated by commas. Example: \"Service Pack 1\".
  's1qlContains': ["s1qlContains_example"], // [String] | Free-text filter by S1 query. You can enter multiple values, separated by commas. Example: \"Service Pack 1\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'expired': true, // Boolean | Rule expired or not.
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'reachedLimit': true, // Boolean | Rule reached limit or not.
  'expirationMode': "expirationMode_example", // String | The expiration mode. Example: \"Permanent\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'status': ["status_example"], // [String] | To filter by status, enter one or more statuses, separated by commas. Example: \"Draft\".
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by rule name. You can enter multiple values, separated by commas. Example: \"Service Pack 1\".
  'ids': ["ids_example"], // [String] | To filter by Rule ID, enter one or more Rule IDs, separated by commas. Example: \"225494730938493804,225494730938493915\".
  'creatorContains': ["creatorContains_example"], // [String] | Free-text filter by rule creator. You can enter multiple values, separated by commas. Example: \"Service Pack 1\".
  'scopes': ["scopes_example"], // [String] | To filter by scope, enter one or more scopes, separated by commas. Example: \"account\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'queryType': "queryType_example", // String | The query type. Example: \"events\".
  'descriptionContains': ["descriptionContains_example"], // [String] | Free-text filter by rule description. You can enter multiple values, separated by commas. Example: \"Service Pack 1\".
  'disablePagination': true, // Boolean | If True, all rules for the requested scope will be returned.
  'countOnly': false // Boolean | If true, only total number of items will be returned, without any of the actual objects.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiCloudDetectionRulesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **activeResponse** | **Boolean**| The active response status for the rule. | [optional] 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **query** | [**[String]**](String.md)| Free-text filter by S1 query. You can enter multiple values, separated by commas. Example: \"Service Pack 1\". | [optional] 
 **s1qlContains** | [**[String]**](String.md)| Free-text filter by S1 query. You can enter multiple values, separated by commas. Example: \"Service Pack 1\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **expired** | **Boolean**| Rule expired or not. | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **reachedLimit** | **Boolean**| Rule reached limit or not. | [optional] 
 **expirationMode** | **String**| The expiration mode. Example: \"Permanent\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **status** | [**[String]**](String.md)| To filter by status, enter one or more statuses, separated by commas. Example: \"Draft\". | [optional] 
 **nameContains** | [**[String]**](String.md)| Free-text filter by rule name. You can enter multiple values, separated by commas. Example: \"Service Pack 1\". | [optional] 
 **ids** | [**[String]**](String.md)| To filter by Rule ID, enter one or more Rule IDs, separated by commas. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **creatorContains** | [**[String]**](String.md)| Free-text filter by rule creator. You can enter multiple values, separated by commas. Example: \"Service Pack 1\". | [optional] 
 **scopes** | [**[String]**](String.md)| To filter by scope, enter one or more scopes, separated by commas. Example: \"account\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **queryType** | **String**| The query type. Example: \"events\". | [optional] 
 **descriptionContains** | [**[String]**](String.md)| Free-text filter by rule description. You can enter multiple values, separated by commas. Example: \"Service Pack 1\". | [optional] 
 **disablePagination** | **Boolean**| If True, all rules for the requested scope will be returned. | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]

### Return type

[**V21RulesSchemasRuleViewSchemaMany200**](V21RulesSchemasRuleViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiCloudDetectionRulesPost"></a>
# **webApiCloudDetectionRulesPost**
> V21RulesSchemasRuleResponseSchema200 webApiCloudDetectionRulesPost(opts)

Create Rule

Create a Custom Detection Rule for a scope specified by ID. To get the ID, run \"accounts\", \"sites\", \"groups\", or set \"tenant\" to \"true\" for Global.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.CustomDetectionRuleApi();

var opts = { 
  'body': new S1MgmtApi.V21RulesSchemasPostRuleSchema() // V21RulesSchemasPostRuleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiCloudDetectionRulesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21RulesSchemasPostRuleSchema**](V21RulesSchemasPostRuleSchema.md)|  | [optional] 

### Return type

[**V21RulesSchemasRuleResponseSchema200**](V21RulesSchemasRuleResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiCloudDetectionRulesruleIdPut"></a>
# **webApiCloudDetectionRulesruleIdPut**
> V21RulesSchemasRuleResponseSchema200 webApiCloudDetectionRulesruleIdPut(ruleId, opts)

Update Rule

Change a Custom Detection rule. <br>This command requires the rule ID. (See Get Rules).

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.CustomDetectionRuleApi();

var ruleId = "ruleId_example"; // String | The Rule ID in the URL path. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.V21RulesSchemasPostRuleSchema() // V21RulesSchemasPostRuleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiCloudDetectionRulesruleIdPut(ruleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **String**| The Rule ID in the URL path. Example: \"225494730938493804\". | 
 **body** | [**V21RulesSchemasPostRuleSchema**](V21RulesSchemasPostRuleSchema.md)|  | [optional] 

### Return type

[**V21RulesSchemasRuleResponseSchema200**](V21RulesSchemasRuleResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

