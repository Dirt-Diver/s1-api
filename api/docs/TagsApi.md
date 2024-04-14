# S1MgmtApi.TagsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiTagsDelete**](TagsApi.md#webApiTagsDelete) | **DELETE** /web/api/v2.1/tags | Delete Tags
[**webApiTagsGet**](TagsApi.md#webApiTagsGet) | **GET** /web/api/v2.1/tags | Get Tags
[**webApiTagsPost**](TagsApi.md#webApiTagsPost) | **POST** /web/api/v2.1/tags | Create Tags
[**webApiTagstagIdDelete**](TagsApi.md#webApiTagstagIdDelete) | **DELETE** /web/api/v2.1/tags/{tag_id} | Delete Tag by ID
[**webApiTagstagIdPut**](TagsApi.md#webApiTagstagIdPut) | **PUT** /web/api/v2.1/tags/{tag_id} | Edit Tag


<a name="webApiTagsDelete"></a>
# **webApiTagsDelete**
> AffectedResultsSchema200 webApiTagsDelete(opts)

Delete Tags

Delete tags by given filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.TagsApi();

var opts = { 
  'body': new S1MgmtApi.TagsSchemasTagDeleteSchema() // TagsSchemasTagDeleteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiTagsDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TagsSchemasTagDeleteSchema**](TagsSchemasTagDeleteSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiTagsGet"></a>
# **webApiTagsGet**
> TagsSchemasGetTagSchemaMany200 webApiTagsGet(type, opts)

Get Tags

Get tags.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.TagsApi();

var type = ["type_example"]; // [String] | Type in. Example: \"firewall\".

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by tag name. Example: \"tag_name,tag_na\".
  'kind': "kind_example", // String | Returns tags of this specific kind
  'query': "query_example", // String | Free text search on tag name
  'ids': ["ids_example"], // [String] | List of IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'disablePagination': true, // Boolean | If true, all tags for requested filters will be returned
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'scope': "scope_example", // String | Return tags from given scope level. Example: \"site\".
  'onlyParents': false, // Boolean | If true returns all tags possible to inherit from parent scopes, otherwise returns all tags already inherited and tags from this scope.
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiTagsGet(type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**[String]**](String.md)| Type in. Example: \"firewall\". | 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **nameContains** | [**[String]**](String.md)| Free-text filter by tag name. Example: \"tag_name,tag_na\". | [optional] 
 **kind** | **String**| Returns tags of this specific kind | [optional] 
 **query** | **String**| Free text search on tag name | [optional] 
 **ids** | [**[String]**](String.md)| List of IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **disablePagination** | **Boolean**| If true, all tags for requested filters will be returned | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **scope** | **String**| Return tags from given scope level. Example: \"site\". | [optional] 
 **onlyParents** | **Boolean**| If true returns all tags possible to inherit from parent scopes, otherwise returns all tags already inherited and tags from this scope. | [optional] [default to false]
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**TagsSchemasGetTagSchemaMany200**](TagsSchemasGetTagSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiTagsPost"></a>
# **webApiTagsPost**
> TagsSchemasGetTagSchema200 webApiTagsPost(opts)

Create Tags

Add tags to create user-defined logical groups.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.TagsApi();

var opts = { 
  'body': new S1MgmtApi.TagsSchemasPostTagSchema() // TagsSchemasPostTagSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiTagsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TagsSchemasPostTagSchema**](TagsSchemasPostTagSchema.md)|  | [optional] 

### Return type

[**TagsSchemasGetTagSchema200**](TagsSchemasGetTagSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiTagstagIdDelete"></a>
# **webApiTagstagIdDelete**
> AffectedResultsSchema200 webApiTagstagIdDelete(tagId)

Delete Tag by ID

Delete tag by ID.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.TagsApi();

var tagId = "tagId_example"; // String | Rule ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiTagstagIdDelete(tagId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Rule ID. Example: \"225494730938493804\". | 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiTagstagIdPut"></a>
# **webApiTagstagIdPut**
> TagsSchemasGetTagSchema200 webApiTagstagIdPut(tagId, opts)

Edit Tag

Edit tag

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.TagsApi();

var tagId = "tagId_example"; // String | Rule ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.TagsSchemasPutTagSchema() // TagsSchemasPutTagSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiTagstagIdPut(tagId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Rule ID. Example: \"225494730938493804\". | 
 **body** | [**TagsSchemasPutTagSchema**](TagsSchemasPutTagSchema.md)|  | [optional] 

### Return type

[**TagsSchemasGetTagSchema200**](TagsSchemasGetTagSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

