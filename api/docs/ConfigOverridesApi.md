# S1MgmtApi.ConfigOverridesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiConfigOverrideDelete**](ConfigOverridesApi.md#webApiConfigOverrideDelete) | **DELETE** /web/api/v2.1/config-override | Delete Config Overrides
[**webApiConfigOverrideGet**](ConfigOverridesApi.md#webApiConfigOverrideGet) | **GET** /web/api/v2.1/config-override | Get Config Overrides
[**webApiConfigOverridePost**](ConfigOverridesApi.md#webApiConfigOverridePost) | **POST** /web/api/v2.1/config-override | Create Config Override
[**webApiConfigOverrideoverrideIdDelete**](ConfigOverridesApi.md#webApiConfigOverrideoverrideIdDelete) | **DELETE** /web/api/v2.1/config-override/{override_id} | Delete Config Override
[**webApiConfigOverrideoverrideIdPut**](ConfigOverridesApi.md#webApiConfigOverrideoverrideIdPut) | **PUT** /web/api/v2.1/config-override/{override_id} | Update Config Override


<a name="webApiConfigOverrideDelete"></a>
# **webApiConfigOverrideDelete**
> AffectedResultsSchema200 webApiConfigOverrideDelete(opts)

Delete Config Overrides

Delete overrides value. To get the required IDs, run \"config-override\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ConfigOverridesApi();

var opts = { 
  'body': new S1MgmtApi.ConfigOverridesConfigOverrideDeleteSchema() // ConfigOverridesConfigOverrideDeleteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiConfigOverrideDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ConfigOverridesConfigOverrideDeleteSchema**](ConfigOverridesConfigOverrideDeleteSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiConfigOverrideGet"></a>
# **webApiConfigOverrideGet**
> ConfigOverridesConfigOverrideSchemaMany200 webApiConfigOverrideGet(opts)

Get Config Overrides

There are different ways to override the configuration of an Agent, and the priority of changes depends on the endpoint OS and the version of the installed Agent. Use this command to see the configuration values that are changed for each Agent that matches the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ConfigOverridesApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Config Overrides created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'agentIds': ["agentIds_example"], // [String] | List of Agent IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'ids': ["ids_example"], // [String] | List of ids to filter by. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | Free text search on fields name, description, agent_version, os_type, config
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Config Overrides created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types. Example: \"windows\".
  'versionOption': "versionOption_example", // String | Version option. Example: \"ALL\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Config Overrides created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'descriptionLike': "descriptionLike_example", // String | Match description partially (substring)
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'createdAtBetween': "createdAtBetween_example", // String | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'agentVersions': ["agentVersions_example"], // [String] | Included agent versions. Example: \"2.5.1.1320\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Config Overrides created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'nameLike': "nameLike_example" // String | Match name partially (substring)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiConfigOverrideGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **createdAtGt** | **Date**| Config Overrides created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **agentIds** | [**[String]**](String.md)| List of Agent IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **ids** | [**[String]**](String.md)| List of ids to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| Free text search on fields name, description, agent_version, os_type, config | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **createdAtLt** | **Date**| Config Overrides created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **osTypes** | [**[String]**](String.md)| Included OS types. Example: \"windows\". | [optional] 
 **versionOption** | **String**| Version option. Example: \"ALL\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **createdAtLte** | **Date**| Config Overrides created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **descriptionLike** | **String**| Match description partially (substring) | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **createdAtBetween** | **String**| Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **agentVersions** | [**[String]**](String.md)| Included agent versions. Example: \"2.5.1.1320\". | [optional] 
 **createdAtGte** | **Date**| Config Overrides created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **nameLike** | **String**| Match name partially (substring) | [optional] 

### Return type

[**ConfigOverridesConfigOverrideSchemaMany200**](ConfigOverridesConfigOverrideSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiConfigOverridePost"></a>
# **webApiConfigOverridePost**
> ConfigOverridesConfigOverrideSchema200 webApiConfigOverridePost(opts)

Create Config Override

Override the configuration of Agents that match the filter. Best practice:  Run \"support-actions/config\" to get the complete syntax. This command requires a Global user or Support.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ConfigOverridesApi();

var opts = { 
  'body': new S1MgmtApi.ConfigOverridesCreateConfigOverrideSchema() // ConfigOverridesCreateConfigOverrideSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiConfigOverridePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ConfigOverridesCreateConfigOverrideSchema**](ConfigOverridesCreateConfigOverrideSchema.md)|  | [optional] 

### Return type

[**ConfigOverridesConfigOverrideSchema200**](ConfigOverridesConfigOverrideSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiConfigOverrideoverrideIdDelete"></a>
# **webApiConfigOverrideoverrideIdDelete**
> SuccessResponseSchema200 webApiConfigOverrideoverrideIdDelete(overrideId)

Delete Config Override

Delete an override value. To get the required ID, run \"config-override\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ConfigOverridesApi();

var overrideId = "overrideId_example"; // String | Config override object ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiConfigOverrideoverrideIdDelete(overrideId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **overrideId** | **String**| Config override object ID. Example: \"225494730938493804\". | 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiConfigOverrideoverrideIdPut"></a>
# **webApiConfigOverrideoverrideIdPut**
> ConfigOverridesConfigOverrideSchema200 webApiConfigOverrideoverrideIdPut(overrideId, opts)

Update Config Override

Use this command to change the value of one configuration value. To get the required ID, run \"config-override\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ConfigOverridesApi();

var overrideId = "overrideId_example"; // String | Config override object ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.ConfigOverridesPutConfigOverrideSchema() // ConfigOverridesPutConfigOverrideSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiConfigOverrideoverrideIdPut(overrideId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **overrideId** | **String**| Config override object ID. Example: \"225494730938493804\". | 
 **body** | [**ConfigOverridesPutConfigOverrideSchema**](ConfigOverridesPutConfigOverrideSchema.md)|  | [optional] 

### Return type

[**ConfigOverridesConfigOverrideSchema200**](ConfigOverridesConfigOverrideSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

