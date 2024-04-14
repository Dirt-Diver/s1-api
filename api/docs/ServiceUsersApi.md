# S1MgmtApi.ServiceUsersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiExportServiceUsersGet**](ServiceUsersApi.md#webApiExportServiceUsersGet) | **GET** /web/api/v2.1/export/service-users | Export Service Users
[**webApiServiceUsersDeleteServiceUsersPost**](ServiceUsersApi.md#webApiServiceUsersDeleteServiceUsersPost) | **POST** /web/api/v2.1/service-users/delete-service-users | Bulk Delete Service Users
[**webApiServiceUsersGet**](ServiceUsersApi.md#webApiServiceUsersGet) | **GET** /web/api/v2.1/service-users | Get Service Users
[**webApiServiceUsersPost**](ServiceUsersApi.md#webApiServiceUsersPost) | **POST** /web/api/v2.1/service-users | Create Service User
[**webApiServiceUsersserviceUserIdDelete**](ServiceUsersApi.md#webApiServiceUsersserviceUserIdDelete) | **DELETE** /web/api/v2.1/service-users/{service_user_id} | Delete Service User
[**webApiServiceUsersserviceUserIdGet**](ServiceUsersApi.md#webApiServiceUsersserviceUserIdGet) | **GET** /web/api/v2.1/service-users/{service_user_id} | Get Service User
[**webApiServiceUsersserviceUserIdPut**](ServiceUsersApi.md#webApiServiceUsersserviceUserIdPut) | **PUT** /web/api/v2.1/service-users/{service_user_id} | Update Service User


<a name="webApiExportServiceUsersGet"></a>
# **webApiExportServiceUsersGet**
> webApiExportServiceUsersGet(opts)

Export Service Users

Export Service User data to a CSV, for Service Users that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ServiceUsersApi();

var opts = { 
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | Full text search for fields: full_name, email, description
  'ids': ["ids_example"], // [String] | List of service user IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'roleIds': ["roleIds_example"] // [String] | List of rbac roles to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExportServiceUsersGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| Full text search for fields: full_name, email, description | [optional] 
 **ids** | [**[String]**](String.md)| List of service user IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **roleIds** | [**[String]**](String.md)| List of rbac roles to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiServiceUsersDeleteServiceUsersPost"></a>
# **webApiServiceUsersDeleteServiceUsersPost**
> AffectedResultsSchema200 webApiServiceUsersDeleteServiceUsersPost(opts)

Bulk Delete Service Users

Delete all service users that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ServiceUsersApi();

var opts = { 
  'body': new S1MgmtApi.ServiceUsersSchemasBulkDeleteServiceUsersSchema() // ServiceUsersSchemasBulkDeleteServiceUsersSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiServiceUsersDeleteServiceUsersPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ServiceUsersSchemasBulkDeleteServiceUsersSchema**](ServiceUsersSchemasBulkDeleteServiceUsersSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiServiceUsersGet"></a>
# **webApiServiceUsersGet**
> ServiceUsersSchemasGetServiceUserSchemaMany200 webApiServiceUsersGet(opts)

Get Service Users

Get a list of service users.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ServiceUsersApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | Full text search for fields: full_name, email, description
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'roleIds': ["roleIds_example"], // [String] | List of rbac roles to filter by. Example: \"225494730938493804,225494730938493915\".
  'ids': ["ids_example"], // [String] | List of service user IDs to filter by. Example: \"225494730938493804,225494730938493915\".
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
apiInstance.webApiServiceUsersGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| Full text search for fields: full_name, email, description | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **roleIds** | [**[String]**](String.md)| List of rbac roles to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **ids** | [**[String]**](String.md)| List of service user IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]

### Return type

[**ServiceUsersSchemasGetServiceUserSchemaMany200**](ServiceUsersSchemasGetServiceUserSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiServiceUsersPost"></a>
# **webApiServiceUsersPost**
> ServiceUsersSchemasCreatedServiceUserSchema200 webApiServiceUsersPost(opts)

Create Service User

Create a new service user.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ServiceUsersApi();

var opts = { 
  'body': new S1MgmtApi.ServiceUsersSchemasCreateServiceUserSchema() // ServiceUsersSchemasCreateServiceUserSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiServiceUsersPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ServiceUsersSchemasCreateServiceUserSchema**](ServiceUsersSchemasCreateServiceUserSchema.md)|  | [optional] 

### Return type

[**ServiceUsersSchemasCreatedServiceUserSchema200**](ServiceUsersSchemasCreatedServiceUserSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiServiceUsersserviceUserIdDelete"></a>
# **webApiServiceUsersserviceUserIdDelete**
> SuccessResponseSchema200 webApiServiceUsersserviceUserIdDelete(serviceUserId)

Delete Service User

Delete a service user by ID.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ServiceUsersApi();

var serviceUserId = "serviceUserId_example"; // String | Service User ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiServiceUsersserviceUserIdDelete(serviceUserId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceUserId** | **String**| Service User ID. Example: \"225494730938493804\". | 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiServiceUsersserviceUserIdGet"></a>
# **webApiServiceUsersserviceUserIdGet**
> ServiceUsersSchemasGetServiceUserSchema200 webApiServiceUsersserviceUserIdGet(serviceUserId)

Get Service User

Get a specific service user by ID.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ServiceUsersApi();

var serviceUserId = "serviceUserId_example"; // String | Service User ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiServiceUsersserviceUserIdGet(serviceUserId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceUserId** | **String**| Service User ID. Example: \"225494730938493804\". | 

### Return type

[**ServiceUsersSchemasGetServiceUserSchema200**](ServiceUsersSchemasGetServiceUserSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiServiceUsersserviceUserIdPut"></a>
# **webApiServiceUsersserviceUserIdPut**
> ServiceUsersSchemasGetServiceUserSchema200 webApiServiceUsersserviceUserIdPut(serviceUserId, opts)

Update Service User

Change properties of the service user with the given ID.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ServiceUsersApi();

var serviceUserId = "serviceUserId_example"; // String | Service User ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.ServiceUsersSchemasUpdateServiceUserSchema() // ServiceUsersSchemasUpdateServiceUserSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiServiceUsersserviceUserIdPut(serviceUserId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceUserId** | **String**| Service User ID. Example: \"225494730938493804\". | 
 **body** | [**ServiceUsersSchemasUpdateServiceUserSchema**](ServiceUsersSchemasUpdateServiceUserSchema.md)|  | [optional] 

### Return type

[**ServiceUsersSchemasGetServiceUserSchema200**](ServiceUsersSchemasGetServiceUserSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

