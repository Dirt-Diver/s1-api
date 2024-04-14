# S1MgmtApi.ApplicationManagementSettingsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiApplicationManagementSettingsGet**](ApplicationManagementSettingsApi.md#webApiApplicationManagementSettingsGet) | **GET** /web/api/v2.1/application-management/settings | Get Application Management Settings
[**webApiApplicationManagementSettingsPost**](ApplicationManagementSettingsApi.md#webApiApplicationManagementSettingsPost) | **POST** /web/api/v2.1/application-management/settings | Update Application Management Settings


<a name="webApiApplicationManagementSettingsGet"></a>
# **webApiApplicationManagementSettingsGet**
> V21ApplicationManagementSettingsFiltersApplicationManagementSettingsDataSchema200 webApiApplicationManagementSettingsGet(opts)

Get Application Management Settings

Get Application Management settings.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ApplicationManagementSettingsApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | account scope IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"], // [String] | site scope IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'groupIds': ["groupIds_example"] // [String] | group scope to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiApplicationManagementSettingsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| account scope IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| site scope IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **groupIds** | [**[String]**](String.md)| group scope to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21ApplicationManagementSettingsFiltersApplicationManagementSettingsDataSchema200**](V21ApplicationManagementSettingsFiltersApplicationManagementSettingsDataSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiApplicationManagementSettingsPost"></a>
# **webApiApplicationManagementSettingsPost**
> V21ApplicationManagementSettingsFiltersApplicationManagementSettingsDataSchema200 webApiApplicationManagementSettingsPost(opts)

Update Application Management Settings

Update Application Management Settings

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ApplicationManagementSettingsApi();

var opts = { 
  'body': new S1MgmtApi.V21ApplicationManagementSettingsFiltersApplicationManagementSettingsSchema() // V21ApplicationManagementSettingsFiltersApplicationManagementSettingsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiApplicationManagementSettingsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ApplicationManagementSettingsFiltersApplicationManagementSettingsSchema**](V21ApplicationManagementSettingsFiltersApplicationManagementSettingsSchema.md)|  | [optional] 

### Return type

[**V21ApplicationManagementSettingsFiltersApplicationManagementSettingsDataSchema200**](V21ApplicationManagementSettingsFiltersApplicationManagementSettingsDataSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

