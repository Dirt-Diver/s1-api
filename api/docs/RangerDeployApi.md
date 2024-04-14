# S1MgmtApi.RangerDeployApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiRangerCredGroupsDetailsGet**](RangerDeployApi.md#webApiRangerCredGroupsDetailsGet) | **GET** /web/api/v2.1/ranger/cred-groups/details | Get Cred group details
[**webApiRangerCredGroupsDetailsPost**](RangerDeployApi.md#webApiRangerCredGroupsDetailsPost) | **POST** /web/api/v2.1/ranger/cred-groups/details | Add cred details
[**webApiRangerCredGroupsDetailsdetailIdDelete**](RangerDeployApi.md#webApiRangerCredGroupsDetailsdetailIdDelete) | **DELETE** /web/api/v2.1/ranger/cred-groups/details/{detail_id} | Delete Cred Group Detail
[**webApiRangerCredGroupsDetailsdetailIdPut**](RangerDeployApi.md#webApiRangerCredGroupsDetailsdetailIdPut) | **PUT** /web/api/v2.1/ranger/cred-groups/details/{detail_id} | Update Cred Group Details
[**webApiRangerCredGroupsGet**](RangerDeployApi.md#webApiRangerCredGroupsGet) | **GET** /web/api/v2.1/ranger/cred-groups | Get Cred groups
[**webApiRangerCredGroupsPost**](RangerDeployApi.md#webApiRangerCredGroupsPost) | **POST** /web/api/v2.1/ranger/cred-groups | Create Cred Group
[**webApiRangerCredGroupscredGroupIdDelete**](RangerDeployApi.md#webApiRangerCredGroupscredGroupIdDelete) | **DELETE** /web/api/v2.1/ranger/cred-groups/{cred_group_id} | Delete Cred Group


<a name="webApiRangerCredGroupsDetailsGet"></a>
# **webApiRangerCredGroupsDetailsGet**
> RangerAutoDeploySchemasCredGroupsDetailsGetSchemaMany200 webApiRangerCredGroupsDetailsGet(opts)

Get Cred group details

Get the data for each row in the Cred Groups details table.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerDeployApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'titleLike': "titleLike_example", // String | Like filter by title
  'credGroupIds': ["credGroupIds_example"], // [String] | A list of ids to get
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'siteIds': ["siteIds_example"], // [String] | Single Site ID to filter by. Example: \"225494730938493804\".
  'accountIds': ["accountIds_example"], // [String] | Single Account ID to filter by. Example: \"225494730938493804\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'ids': ["ids_example"], // [String] | A list of ids to get
  'title': "title_example", // String | Exact filter by title
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'credTypeLike': "credTypeLike_example", // String | The type of the cred group
  'limit': 10 // Number | Limit number of returned items (1-1000). Example: \"10\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerCredGroupsDetailsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **titleLike** | **String**| Like filter by title | [optional] 
 **credGroupIds** | [**[String]**](String.md)| A list of ids to get | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **siteIds** | [**[String]**](String.md)| Single Site ID to filter by. Example: \"225494730938493804\". | [optional] 
 **accountIds** | [**[String]**](String.md)| Single Account ID to filter by. Example: \"225494730938493804\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **ids** | [**[String]**](String.md)| A list of ids to get | [optional] 
 **title** | **String**| Exact filter by title | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **credTypeLike** | **String**| The type of the cred group | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]

### Return type

[**RangerAutoDeploySchemasCredGroupsDetailsGetSchemaMany200**](RangerAutoDeploySchemasCredGroupsDetailsGetSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRangerCredGroupsDetailsPost"></a>
# **webApiRangerCredGroupsDetailsPost**
> SuccessResponseSchema200 webApiRangerCredGroupsDetailsPost(opts)

Add cred details

Add cred details to a cred group.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerDeployApi();

var opts = { 
  'body': new S1MgmtApi.RangerAutoDeploySchemasCredGroupsDetailsPostSchema() // RangerAutoDeploySchemasCredGroupsDetailsPostSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerCredGroupsDetailsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RangerAutoDeploySchemasCredGroupsDetailsPostSchema**](RangerAutoDeploySchemasCredGroupsDetailsPostSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRangerCredGroupsDetailsdetailIdDelete"></a>
# **webApiRangerCredGroupsDetailsdetailIdDelete**
> SuccessResponseSchema200 webApiRangerCredGroupsDetailsdetailIdDelete(detailId)

Delete Cred Group Detail

Delete cred group detail value.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerDeployApi();

var detailId = "detailId_example"; // String | Cred group detail ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerCredGroupsDetailsdetailIdDelete(detailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detailId** | **String**| Cred group detail ID. Example: \"225494730938493804\". | 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRangerCredGroupsDetailsdetailIdPut"></a>
# **webApiRangerCredGroupsDetailsdetailIdPut**
> RangerAutoDeploySchemasCredGroupsDetailsGetSchema200 webApiRangerCredGroupsDetailsdetailIdPut(detailId, opts)

Update Cred Group Details

Update cred group values.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerDeployApi();

var detailId = "detailId_example"; // String | Cred group detail ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.RangerAutoDeploySchemasCredPutDetailsSchema() // RangerAutoDeploySchemasCredPutDetailsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerCredGroupsDetailsdetailIdPut(detailId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detailId** | **String**| Cred group detail ID. Example: \"225494730938493804\". | 
 **body** | [**RangerAutoDeploySchemasCredPutDetailsSchema**](RangerAutoDeploySchemasCredPutDetailsSchema.md)|  | [optional] 

### Return type

[**RangerAutoDeploySchemasCredGroupsDetailsGetSchema200**](RangerAutoDeploySchemasCredGroupsDetailsGetSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRangerCredGroupsGet"></a>
# **webApiRangerCredGroupsGet**
> RangerAutoDeploySchemasCredGroupsGetSchemaMany200 webApiRangerCredGroupsGet(opts)

Get Cred groups

Get the data for each row in the Cred Groups table.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerDeployApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'targetOs': "targetOs_example", // String | The os type for this cred group. Example: \"windows\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'siteIds': ["siteIds_example"], // [String] | Single Site ID to filter by. Example: \"225494730938493804\".
  'accountIds': ["accountIds_example"], // [String] | Single Account ID to filter by. Example: \"225494730938493804\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'groupName': "groupName_example", // String | Group name being searched
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'totalDetailsGt': 56, // Number | Get creds with total details greater than the supplied number
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'groupNameLike': "groupNameLike_example", // String | Group name being searched
  'ids': ["ids_example"], // [String] | A list of ids to get
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
apiInstance.webApiRangerCredGroupsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **targetOs** | **String**| The os type for this cred group. Example: \"windows\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **siteIds** | [**[String]**](String.md)| Single Site ID to filter by. Example: \"225494730938493804\". | [optional] 
 **accountIds** | [**[String]**](String.md)| Single Account ID to filter by. Example: \"225494730938493804\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **groupName** | **String**| Group name being searched | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **totalDetailsGt** | **Number**| Get creds with total details greater than the supplied number | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **groupNameLike** | **String**| Group name being searched | [optional] 
 **ids** | [**[String]**](String.md)| A list of ids to get | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]

### Return type

[**RangerAutoDeploySchemasCredGroupsGetSchemaMany200**](RangerAutoDeploySchemasCredGroupsGetSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRangerCredGroupsPost"></a>
# **webApiRangerCredGroupsPost**
> RangerAutoDeploySchemasCredGroupsGetSchema200 webApiRangerCredGroupsPost(opts)

Create Cred Group

Create a new Cred Group.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerDeployApi();

var opts = { 
  'body': new S1MgmtApi.RangerAutoDeploySchemasCredGroupsPostSchema() // RangerAutoDeploySchemasCredGroupsPostSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerCredGroupsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RangerAutoDeploySchemasCredGroupsPostSchema**](RangerAutoDeploySchemasCredGroupsPostSchema.md)|  | [optional] 

### Return type

[**RangerAutoDeploySchemasCredGroupsGetSchema200**](RangerAutoDeploySchemasCredGroupsGetSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRangerCredGroupscredGroupIdDelete"></a>
# **webApiRangerCredGroupscredGroupIdDelete**
> SuccessResponseSchema200 webApiRangerCredGroupscredGroupIdDelete(credGroupId)

Delete Cred Group

Delete cred group value.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerDeployApi();

var credGroupId = "credGroupId_example"; // String | Cred group ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerCredGroupscredGroupIdDelete(credGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credGroupId** | **String**| Cred group ID. Example: \"225494730938493804\". | 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

