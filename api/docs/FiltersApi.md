# S1MgmtApi.FiltersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiFiltersCsvFilterPost**](FiltersApi.md#webApiFiltersCsvFilterPost) | **POST** /web/api/v2.1/filters/csv-filter | Upload CSV file
[**webApiFiltersDvGet**](FiltersApi.md#webApiFiltersDvGet) | **GET** /web/api/v2.1/filters/dv | Get Deep Visibility Filters
[**webApiFiltersDvPost**](FiltersApi.md#webApiFiltersDvPost) | **POST** /web/api/v2.1/filters/dv | Save Deep Visibility Filter
[**webApiFiltersDvfilterIdDelete**](FiltersApi.md#webApiFiltersDvfilterIdDelete) | **DELETE** /web/api/v2.1/filters/dv/{filter_id} | Delete Deep Visibility Filter
[**webApiFiltersDvfilterIdPut**](FiltersApi.md#webApiFiltersDvfilterIdPut) | **PUT** /web/api/v2.1/filters/dv/{filter_id} | Update Deep Visibility Filter
[**webApiFiltersGet**](FiltersApi.md#webApiFiltersGet) | **GET** /web/api/v2.1/filters | Get Filters
[**webApiFiltersPost**](FiltersApi.md#webApiFiltersPost) | **POST** /web/api/v2.1/filters | Save Filter
[**webApiFiltersfilterIdDelete**](FiltersApi.md#webApiFiltersfilterIdDelete) | **DELETE** /web/api/v2.1/filters/{filter_id} | Delete Filter
[**webApiFiltersfilterIdPut**](FiltersApi.md#webApiFiltersfilterIdPut) | **PUT** /web/api/v2.1/filters/{filter_id} | Update Filter


<a name="webApiFiltersCsvFilterPost"></a>
# **webApiFiltersCsvFilterPost**
> FiltersSchemasCsvFilterViewSchema200 webApiFiltersCsvFilterPost(excludeHeader, agentFilterField, file)

Upload CSV file

Upload CSV file

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.FiltersApi();

var excludeHeader = true; // Boolean | Set to True to exclude the column header

var agentFilterField = "agentFilterField_example"; // String | The property of the endpoint to filter by

var file = "/path/to/file.txt"; // File | File


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFiltersCsvFilterPost(excludeHeader, agentFilterField, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **excludeHeader** | **Boolean**| Set to True to exclude the column header | 
 **agentFilterField** | **String**| The property of the endpoint to filter by | 
 **file** | **File**| File | 

### Return type

[**FiltersSchemasCsvFilterViewSchema200**](FiltersSchemasCsvFilterViewSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="webApiFiltersDvGet"></a>
# **webApiFiltersDvGet**
> webApiFiltersDvGet(opts)

Get Deep Visibility Filters

Get saved Deep Visibility queries with full data. See Save Deep Visibility Filters.The response includes the ID of the filter, which you can use in other commands. 

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.FiltersApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'includeParents': false, // Boolean | Return filters from parent scope levels (Default: false)
  'includeChildren': false, // Boolean | Return filters from children scope levels (Default: false)
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'ids': ["ids_example"], // [String] | A list of Filter IDs. Example: \"225494730938493804,225494730938493915\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'includeGlobal': false, // Boolean | [DEPRECATED] Return global filters even when specific sites are selected
  'query': "query_example", // String | Text query for filter's name. Example: \"MyFilter\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10 // Number | Limit number of returned items (1-1000). Example: \"10\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiFiltersDvGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **includeParents** | **Boolean**| Return filters from parent scope levels (Default: false) | [optional] [default to false]
 **includeChildren** | **Boolean**| Return filters from children scope levels (Default: false) | [optional] [default to false]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **ids** | [**[String]**](String.md)| A list of Filter IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **includeGlobal** | **Boolean**| [DEPRECATED] Return global filters even when specific sites are selected | [optional] [default to false]
 **query** | **String**| Text query for filter's name. Example: \"MyFilter\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiFiltersDvPost"></a>
# **webApiFiltersDvPost**
> webApiFiltersDvPost(opts)

Save Deep Visibility Filter

Save a Deep Visibility query with data as a filter, to get notifications of specific events sent to named recipients on a given frequency. The recipients must be Console users with permissions on the scope of the query. Notifications are sent through email: you must have an SMTP server configured in the SentinelOne solution (/settings/smtp see Set SMTP Settings).  Deep Visibility requires a Complete SKU.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.FiltersApi();

var opts = { 
  'body': new S1MgmtApi.FiltersFiltersNewDeepVisibilityFilterSchema() // FiltersFiltersNewDeepVisibilityFilterSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiFiltersDvPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FiltersFiltersNewDeepVisibilityFilterSchema**](FiltersFiltersNewDeepVisibilityFilterSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiFiltersDvfilterIdDelete"></a>
# **webApiFiltersDvfilterIdDelete**
> SuccessResponseSchema200 webApiFiltersDvfilterIdDelete(filterId)

Delete Deep Visibility Filter

Delete a saved Deep Visibility query.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.FiltersApi();

var filterId = "filterId_example"; // String | Filter ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFiltersDvfilterIdDelete(filterId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | **String**| Filter ID. Example: \"225494730938493804\". | 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiFiltersDvfilterIdPut"></a>
# **webApiFiltersDvfilterIdPut**
> FiltersFiltersDeepVisibilityFilterViewSchema200 webApiFiltersDvfilterIdPut(filterId, opts)

Update Deep Visibility Filter

Change a saved Deep Visibility filter. To get the ID and fields to change, run Get Deep Visibility Filters.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.FiltersApi();

var filterId = "filterId_example"; // String | Filter ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.FiltersFiltersNewDeepVisibilityFilterSchema() // FiltersFiltersNewDeepVisibilityFilterSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFiltersDvfilterIdPut(filterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | **String**| Filter ID. Example: \"225494730938493804\". | 
 **body** | [**FiltersFiltersNewDeepVisibilityFilterSchema**](FiltersFiltersNewDeepVisibilityFilterSchema.md)|  | [optional] 

### Return type

[**FiltersFiltersDeepVisibilityFilterViewSchema200**](FiltersFiltersDeepVisibilityFilterViewSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiFiltersGet"></a>
# **webApiFiltersGet**
> FiltersFiltersFilterViewSchemaMany200 webApiFiltersGet(opts)

Get Filters

Get the list of saved filters. See Save Filter. The response includes the ID of the filter, which you can use in other commands.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.FiltersApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'includeParents': false, // Boolean | Return filters from parent scope levels (Default: false)
  'includeChildren': false, // Boolean | Return filters from children scope levels (Default: false)
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'ids': ["ids_example"], // [String] | A list of Filter IDs. Example: \"225494730938493804,225494730938493915\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'includeGlobal': false, // Boolean | [DEPRECATED] Return global filters even when specific sites are selected
  'query': "query_example", // String | Text query for filter's name. Example: \"MyFilter\".
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
apiInstance.webApiFiltersGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **includeParents** | **Boolean**| Return filters from parent scope levels (Default: false) | [optional] [default to false]
 **includeChildren** | **Boolean**| Return filters from children scope levels (Default: false) | [optional] [default to false]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **ids** | [**[String]**](String.md)| A list of Filter IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **includeGlobal** | **Boolean**| [DEPRECATED] Return global filters even when specific sites are selected | [optional] [default to false]
 **query** | **String**| Text query for filter's name. Example: \"MyFilter\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]

### Return type

[**FiltersFiltersFilterViewSchemaMany200**](FiltersFiltersFilterViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiFiltersPost"></a>
# **webApiFiltersPost**
> FiltersFiltersFilterViewSchema200 webApiFiltersPost(opts)

Save Filter

Save a new filter to get a list of matching endpoints. When you save a filter, you can run actions on the Agents as a set of objects or create a dynamic group (automatically adds new Agents that match the filter and drops Agents if they change to not match).  For example, you can save a filter with {\"data\":{\"filterFields\":{\"infected\":true}}} to run kill and quarantine commands on all the Agents at once, or to create a group that holds currently infected endpoints. Best Practice: Set a scope for the new Saved Filter. Run \"accounts\", \"sites\", or \"groups\" to get the IDs for the scope.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.FiltersApi();

var opts = { 
  'body': new S1MgmtApi.FiltersFiltersNewFilterSchema() // FiltersFiltersNewFilterSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFiltersPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FiltersFiltersNewFilterSchema**](FiltersFiltersNewFilterSchema.md)|  | [optional] 

### Return type

[**FiltersFiltersFilterViewSchema200**](FiltersFiltersFilterViewSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiFiltersfilterIdDelete"></a>
# **webApiFiltersfilterIdDelete**
> SuccessResponseSchema200 webApiFiltersfilterIdDelete(filterId)

Delete Filter

Delete a saved filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.FiltersApi();

var filterId = "filterId_example"; // String | Filter ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFiltersfilterIdDelete(filterId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | **String**| Filter ID. Example: \"225494730938493804\". | 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiFiltersfilterIdPut"></a>
# **webApiFiltersfilterIdPut**
> FiltersFiltersFilterViewSchema200 webApiFiltersfilterIdPut(filterId, opts)

Update Filter

Update an existing filter

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.FiltersApi();

var filterId = "filterId_example"; // String | Filter ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.FiltersFiltersUpdateFilterSchema() // FiltersFiltersUpdateFilterSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiFiltersfilterIdPut(filterId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | **String**| Filter ID. Example: \"225494730938493804\". | 
 **body** | [**FiltersFiltersUpdateFilterSchema**](FiltersFiltersUpdateFilterSchema.md)|  | [optional] 

### Return type

[**FiltersFiltersFilterViewSchema200**](FiltersFiltersFilterViewSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

