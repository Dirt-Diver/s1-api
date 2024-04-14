# S1MgmtApi.CloudProviderAccountApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiCloudnativeAccountManagementActiveHealthEventscloudProviderAccountIdGet**](CloudProviderAccountApi.md#webApiCloudnativeAccountManagementActiveHealthEventscloudProviderAccountIdGet) | **GET** /web/api/v2.1/cloudnative/account-management/active-health-events/{cloud_provider_account_id} | get cloud provider account active health events by cloud provider account id


<a name="webApiCloudnativeAccountManagementActiveHealthEventscloudProviderAccountIdGet"></a>
# **webApiCloudnativeAccountManagementActiveHealthEventscloudProviderAccountIdGet**
> V21AccountManagementSchemasGetCloudProviderAccountErrorMany200 webApiCloudnativeAccountManagementActiveHealthEventscloudProviderAccountIdGet(cloudProviderAccountId, opts)

get cloud provider account active health events by cloud provider account id

get cloud provider account active health events

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.CloudProviderAccountApi();

var cloudProviderAccountId = "cloudProviderAccountId_example"; // String | Cloud provider account id

var opts = { 
  'tenant': true, // Boolean | Indicates a tenant scope request
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
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
apiInstance.webApiCloudnativeAccountManagementActiveHealthEventscloudProviderAccountIdGet(cloudProviderAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudProviderAccountId** | **String**| Cloud provider account id | 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21AccountManagementSchemasGetCloudProviderAccountErrorMany200**](V21AccountManagementSchemasGetCloudProviderAccountErrorMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

