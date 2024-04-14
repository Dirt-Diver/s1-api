# S1MgmtApi.UpdateExclusionApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiUnifiedExclusionsPut**](UpdateExclusionApi.md#webApiUnifiedExclusionsPut) | **PUT** /web/api/v2.1/unified-exclusions | Update Exclusions


<a name="webApiUnifiedExclusionsPut"></a>
# **webApiUnifiedExclusionsPut**
> ExclusionsGetSchemaUnifiedExclusionSchema200 webApiUnifiedExclusionsPut(opts)

Update Exclusions

Change the properties of an Exclusion through the data fields. To get the original data, run \"exclusions\" with a filter to give the item you want.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UpdateExclusionApi();

var opts = { 
  'body': new S1MgmtApi.ExclusionsPutSchemaPutUnifiedExclusionSchema() // ExclusionsPutSchemaPutUnifiedExclusionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUnifiedExclusionsPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExclusionsPutSchemaPutUnifiedExclusionSchema**](ExclusionsPutSchemaPutUnifiedExclusionSchema.md)|  | [optional] 

### Return type

[**ExclusionsGetSchemaUnifiedExclusionSchema200**](ExclusionsGetSchemaUnifiedExclusionSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

