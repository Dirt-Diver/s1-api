# S1MgmtApi.SystemApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiSystemConfigurationGet**](SystemApi.md#webApiSystemConfigurationGet) | **GET** /web/api/v2.1/system/configuration | Get System Config
[**webApiSystemConfigurationPut**](SystemApi.md#webApiSystemConfigurationPut) | **PUT** /web/api/v2.1/system/configuration | Set System Config
[**webApiSystemEnvGet**](SystemApi.md#webApiSystemEnvGet) | **GET** /web/api/v2.1/system/env | System Environment
[**webApiSystemInfoGet**](SystemApi.md#webApiSystemInfoGet) | **GET** /web/api/v2.1/system/info | System Info
[**webApiSystemStatusCacheGet**](SystemApi.md#webApiSystemStatusCacheGet) | **GET** /web/api/v2.1/system/status/cache | Cache Status
[**webApiSystemStatusDbGet**](SystemApi.md#webApiSystemStatusDbGet) | **GET** /web/api/v2.1/system/status/db | Database Status
[**webApiSystemStatusGet**](SystemApi.md#webApiSystemStatusGet) | **GET** /web/api/v2.1/system/status | System Status


<a name="webApiSystemConfigurationGet"></a>
# **webApiSystemConfigurationGet**
> SystemSystemConfigurationSchema200 webApiSystemConfigurationGet(opts)

Get System Config

Get the configuration of your SentinelOne system. <br>The response shows basic information of the deployed SKUs and licenses, 2FA, and the Management URL.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SystemApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSystemConfigurationGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**SystemSystemConfigurationSchema200**](SystemSystemConfigurationSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSystemConfigurationPut"></a>
# **webApiSystemConfigurationPut**
> SystemSystemConfigurationSchema200 webApiSystemConfigurationPut(opts)

Set System Config

Change the system configuration. <br>Before you run this, see Get System Config. <br>This command requires a Global Admin user or Support. 

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SystemApi();

var opts = { 
  'body': new S1MgmtApi.SystemPutSystemConfiguration() // SystemPutSystemConfiguration | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSystemConfigurationPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SystemPutSystemConfiguration**](SystemPutSystemConfiguration.md)|  | [optional] 

### Return type

[**SystemSystemConfigurationSchema200**](SystemSystemConfigurationSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSystemEnvGet"></a>
# **webApiSystemEnvGet**
> SystemSystemEnvSchema200 webApiSystemEnvGet()

System Environment

Get environment details of the system

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SystemApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSystemEnvGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemSystemEnvSchema200**](SystemSystemEnvSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSystemInfoGet"></a>
# **webApiSystemInfoGet**
> SystemSystemInfoSchema200 webApiSystemInfoGet()

System Info

Get the Console build, version, patch, and release information.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SystemApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSystemInfoGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemSystemInfoSchema200**](SystemSystemInfoSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSystemStatusCacheGet"></a>
# **webApiSystemStatusCacheGet**
> SystemSystemStatusSchema200 webApiSystemStatusCacheGet()

Cache Status

[DEPRECATED] Works the same way as \"System Status\" endpoint.<br>This command does not require authentication. <br>Rate limit: 1 call per second for each IP address that communicates with the Console.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SystemApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSystemStatusCacheGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemSystemStatusSchema200**](SystemSystemStatusSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSystemStatusDbGet"></a>
# **webApiSystemStatusDbGet**
> SystemSystemStatusSchema200 webApiSystemStatusDbGet()

Database Status

[DEPRECATED] Works the same way as \"System Status\" endpoint.<br>This command does not require authentication. <br>Rate limit: 1 call per second for each IP address that communicates with the Console.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SystemApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSystemStatusDbGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemSystemStatusSchema200**](SystemSystemStatusSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSystemStatusGet"></a>
# **webApiSystemStatusGet**
> SystemSystemStatusSchema200 webApiSystemStatusGet()

System Status

Get an indication of the system's health status. <br>This command returns a positive response when the Management Console and API server are up and running. This command does not require authentication.<br>Rate limit: 1 call per second for each IP address that communicates with the Console.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SystemApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSystemStatusGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemSystemStatusSchema200**](SystemSystemStatusSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

