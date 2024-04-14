# S1MgmtApi.RangerSelfEnablementApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiRangerEnableSelfManagementPost**](RangerSelfEnablementApi.md#webApiRangerEnableSelfManagementPost) | **POST** /web/api/v2.1/ranger/enable-self-management | Change the Self-Enablement for Accounts
[**webApiRangerEnablementDefaultsGet**](RangerSelfEnablementApi.md#webApiRangerEnablementDefaultsGet) | **GET** /web/api/v2.1/ranger/enablement/defaults | Features Configuration for New Sites
[**webApiRangerEnablementDefaultsPost**](RangerSelfEnablementApi.md#webApiRangerEnablementDefaultsPost) | **POST** /web/api/v2.1/ranger/enablement/defaults | Change Feature Defaults for New Sites
[**webApiRangerEnablementGet**](RangerSelfEnablementApi.md#webApiRangerEnablementGet) | **GET** /web/api/v2.1/ranger/enablement | Get Self Enablement
[**webApiRangerEnablementPost**](RangerSelfEnablementApi.md#webApiRangerEnablementPost) | **POST** /web/api/v2.1/ranger/enablement | Change Ranger or Rogues Features


<a name="webApiRangerEnableSelfManagementPost"></a>
# **webApiRangerEnableSelfManagementPost**
> webApiRangerEnableSelfManagementPost(opts)

Change the Self-Enablement for Accounts

[DEPRECATED] Use the Update Account, Get Account, Get Sites, or the Update Site Add-ons APIs instead.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerSelfEnablementApi();

var opts = { 
  'body': new S1MgmtApi.RangerEnablementSchemasUpdateEnablementPostSchema() // RangerEnablementSchemasUpdateEnablementPostSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiRangerEnableSelfManagementPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RangerEnablementSchemasUpdateEnablementPostSchema**](RangerEnablementSchemasUpdateEnablementPostSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRangerEnablementDefaultsGet"></a>
# **webApiRangerEnablementDefaultsGet**
> webApiRangerEnablementDefaultsGet(opts)

Features Configuration for New Sites

[DEPRECATED] Use the Update Account, Get Account, Get Sites, or the Update Site Add-ons APIs instead..

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerSelfEnablementApi();

var opts = { 
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiRangerEnablementDefaultsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRangerEnablementDefaultsPost"></a>
# **webApiRangerEnablementDefaultsPost**
> webApiRangerEnablementDefaultsPost(opts)

Change Feature Defaults for New Sites

[DEPRECATED] Use the Update Account, Get Account, Get Sites, or the Update Site Add-ons APIs instead.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerSelfEnablementApi();

var opts = { 
  'body': new S1MgmtApi.RangerEnablementSchemasUpdateSelfEnablementFeaturesSchema() // RangerEnablementSchemasUpdateSelfEnablementFeaturesSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiRangerEnablementDefaultsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RangerEnablementSchemasUpdateSelfEnablementFeaturesSchema**](RangerEnablementSchemasUpdateSelfEnablementFeaturesSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRangerEnablementGet"></a>
# **webApiRangerEnablementGet**
> webApiRangerEnablementGet(opts)

Get Self Enablement

[DEPRECATED] Use the Update Account, Get Account, Get Sites, or the Update Site Add-ons APIs instead.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerSelfEnablementApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'activeAgentsLte': 56, // Number | Agent count (less than or equal)
  'activeAgentsGte': 56, // Number | Agent count (more than or equal)
  'ids': ["ids_example"], // [String] | A list of ids to get. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'activeAgentsGt': 56, // Number | Agent count (more than)
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'id': "id_example", // String | The enablement id. Example: \"225494730938493804\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'siteNameContains': ["siteNameContains_example"], // [String] | Free-text filter by site name (supports multiple values)
  'activeAgents': 56, // Number | The number of non-decommissioned agents in the site
  'activeAgentsLt': 56, // Number | Agent count (less than)
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'siteName': "siteName_example", // String | The site name
  'tenant': true, // Boolean | Indicates a tenant scope request
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'rangerProEnabled': true, // Boolean | [DEPRECATED]. Use rangerEnabled instead. Ranger Pro Enabled true/false
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'roguesEnabled': true, // Boolean | Rogues Enabled true/false
  'activeAgentsBetween': "activeAgentsBetween_example", // String | Agent count (between). Example: \"2-8\".
  'rangerEnabled': true // Boolean | Ranger Enabled true/false
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiRangerEnablementGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **activeAgentsLte** | **Number**| Agent count (less than or equal) | [optional] 
 **activeAgentsGte** | **Number**| Agent count (more than or equal) | [optional] 
 **ids** | [**[String]**](String.md)| A list of ids to get. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **activeAgentsGt** | **Number**| Agent count (more than) | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **id** | **String**| The enablement id. Example: \"225494730938493804\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **siteNameContains** | [**[String]**](String.md)| Free-text filter by site name (supports multiple values) | [optional] 
 **activeAgents** | **Number**| The number of non-decommissioned agents in the site | [optional] 
 **activeAgentsLt** | **Number**| Agent count (less than) | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **siteName** | **String**| The site name | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **rangerProEnabled** | **Boolean**| [DEPRECATED]. Use rangerEnabled instead. Ranger Pro Enabled true/false | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **roguesEnabled** | **Boolean**| Rogues Enabled true/false | [optional] 
 **activeAgentsBetween** | **String**| Agent count (between). Example: \"2-8\". | [optional] 
 **rangerEnabled** | **Boolean**| Ranger Enabled true/false | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRangerEnablementPost"></a>
# **webApiRangerEnablementPost**
> webApiRangerEnablementPost(opts)

Change Ranger or Rogues Features

[DEPRECATED] Use the Update Account, Get Account, Get Sites, or the Update Site Add-ons APIs instead.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerSelfEnablementApi();

var opts = { 
  'body': new S1MgmtApi.RangerEnablementSchemasUpdateSelfEnablementFeaturesSchema() // RangerEnablementSchemasUpdateSelfEnablementFeaturesSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiRangerEnablementPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RangerEnablementSchemasUpdateSelfEnablementFeaturesSchema**](RangerEnablementSchemasUpdateSelfEnablementFeaturesSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

