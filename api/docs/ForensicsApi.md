# S1MgmtApi.ForensicsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiApplicationsapplicationIdForensicsConnectionsGet**](ForensicsApi.md#webApiApplicationsapplicationIdForensicsConnectionsGet) | **GET** /web/api/v2.1/applications/{application_id}/forensics/connections | Application Connections
[**webApiApplicationsapplicationIdForensicsDetailsGet**](ForensicsApi.md#webApiApplicationsapplicationIdForensicsDetailsGet) | **GET** /web/api/v2.1/applications/{application_id}/forensics/details | Application Forensics - Detailed
[**webApiApplicationsapplicationIdForensicsExportexportFormatGet**](ForensicsApi.md#webApiApplicationsapplicationIdForensicsExportexportFormatGet) | **GET** /web/api/v2.1/applications/{application_id}/forensics/export/{export_format} | Export Application
[**webApiApplicationsapplicationIdForensicsGet**](ForensicsApi.md#webApiApplicationsapplicationIdForensicsGet) | **GET** /web/api/v2.1/applications/{application_id}/forensics | Application Forensics


<a name="webApiApplicationsapplicationIdForensicsConnectionsGet"></a>
# **webApiApplicationsapplicationIdForensicsConnectionsGet**
> ForensicsConnectionsSchema200 webApiApplicationsapplicationIdForensicsConnectionsGet(applicationId, opts)

Application Connections

[DEPRECATED] Returns an empty array

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ForensicsApi();

var applicationId = "applicationId_example"; // String | Application ID. Example: \"56ee72a79c7e5c62dd36e6b1\".

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'countryCode': "", // String | Country code
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiApplicationsapplicationIdForensicsConnectionsGet(applicationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| Application ID. Example: \"56ee72a79c7e5c62dd36e6b1\". | 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countryCode** | **String**| Country code | [optional] [default to ]
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**ForensicsConnectionsSchema200**](ForensicsConnectionsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiApplicationsapplicationIdForensicsDetailsGet"></a>
# **webApiApplicationsapplicationIdForensicsDetailsGet**
> ForensicsApplicationDetailsContentFields200 webApiApplicationsapplicationIdForensicsDetailsGet(applicationId, opts)

Application Forensics - Detailed

[DEPRECATED] Returns an empty array

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ForensicsApi();

var applicationId = "applicationId_example"; // String | Application ID. Example: \"56ee72a79c7e5c62dd36e6b1\".

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiApplicationsapplicationIdForensicsDetailsGet(applicationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| Application ID. Example: \"56ee72a79c7e5c62dd36e6b1\". | 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**ForensicsApplicationDetailsContentFields200**](ForensicsApplicationDetailsContentFields200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiApplicationsapplicationIdForensicsExportexportFormatGet"></a>
# **webApiApplicationsapplicationIdForensicsExportexportFormatGet**
> webApiApplicationsapplicationIdForensicsExportexportFormatGet(applicationId, exportFormat, opts)

Export Application

[DEPRECATED] Returns an empty array

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ForensicsApi();

var applicationId = "applicationId_example"; // String | Application ID. Example: \"56ee72a79c7e5c62dd36e6b1\".

var exportFormat = "exportFormat_example"; // String | Export format. Example: \"csv\".

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiApplicationsapplicationIdForensicsExportexportFormatGet(applicationId, exportFormat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| Application ID. Example: \"56ee72a79c7e5c62dd36e6b1\". | 
 **exportFormat** | **String**| Export format. Example: \"csv\". | 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiApplicationsapplicationIdForensicsGet"></a>
# **webApiApplicationsapplicationIdForensicsGet**
> ForensicsApplicationContentFields200 webApiApplicationsapplicationIdForensicsGet(applicationId, opts)

Application Forensics

DEPRECATED

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ForensicsApi();

var applicationId = "applicationId_example"; // String | Application ID. Example: \"56ee72a79c7e5c62dd36e6b1\".

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiApplicationsapplicationIdForensicsGet(applicationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| Application ID. Example: \"56ee72a79c7e5c62dd36e6b1\". | 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**ForensicsApplicationContentFields200**](ForensicsApplicationContentFields200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

