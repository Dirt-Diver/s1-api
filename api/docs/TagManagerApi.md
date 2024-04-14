# S1MgmtApi.TagManagerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiTagManagerDelete**](TagManagerApi.md#webApiTagManagerDelete) | **DELETE** /web/api/v2.1/tag-manager | Delete tags
[**webApiTagManagerPost**](TagManagerApi.md#webApiTagManagerPost) | **POST** /web/api/v2.1/tag-manager | Create a new endpoint tag
[**webApiTagManagertagIdPut**](TagManagerApi.md#webApiTagManagertagIdPut) | **PUT** /web/api/v2.1/tag-manager/{tag_id} | Edit an existing tag


<a name="webApiTagManagerDelete"></a>
# **webApiTagManagerDelete**
> AffectedResultsSchema200 webApiTagManagerDelete(opts)

Delete tags

Delete all tags that match the filters.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.TagManagerApi();

var opts = { 
  'body': new S1MgmtApi.V21MgmtTagManagerSchemasTagsDeleteSchema() // V21MgmtTagManagerSchemasTagsDeleteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiTagManagerDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21MgmtTagManagerSchemasTagsDeleteSchema**](V21MgmtTagManagerSchemasTagsDeleteSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiTagManagerPost"></a>
# **webApiTagManagerPost**
> V21MgmtTagManagerSchemasTagsViewSchema200 webApiTagManagerPost(opts)

Create a new endpoint tag

Each tag must contain a type (endpoints) and key, Value is optional but recommended. A description is optional.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.TagManagerApi();

var opts = { 
  'body': new S1MgmtApi.V21MgmtTagManagerSchemasPostTagSchema() // V21MgmtTagManagerSchemasPostTagSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiTagManagerPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21MgmtTagManagerSchemasPostTagSchema**](V21MgmtTagManagerSchemasPostTagSchema.md)|  | [optional] 

### Return type

[**V21MgmtTagManagerSchemasTagsViewSchema200**](V21MgmtTagManagerSchemasTagsViewSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiTagManagertagIdPut"></a>
# **webApiTagManagertagIdPut**
> V21MgmtTagManagerSchemasTagsViewSchema200 webApiTagManagertagIdPut(tagId, opts)

Edit an existing tag

Change the key, value, or description of a tag.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.TagManagerApi();

var tagId = "tagId_example"; // String | Tag ID. You can get the ID from the Get Tag-Manager command. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.V21MgmtTagManagerSchemasPutTagSchema() // V21MgmtTagManagerSchemasPutTagSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiTagManagertagIdPut(tagId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| Tag ID. You can get the ID from the Get Tag-Manager command. Example: \"225494730938493804\". | 
 **body** | [**V21MgmtTagManagerSchemasPutTagSchema**](V21MgmtTagManagerSchemasPutTagSchema.md)|  | [optional] 

### Return type

[**V21MgmtTagManagerSchemasTagsViewSchema200**](V21MgmtTagManagerSchemasTagsViewSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

