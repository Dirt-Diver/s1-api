# S1MgmtApi.LicensesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiLicensesUpdateSitesModulesPut**](LicensesApi.md#webApiLicensesUpdateSitesModulesPut) | **PUT** /web/api/v2.1/licenses/update-sites-modules | Update sites add-ons


<a name="webApiLicensesUpdateSitesModulesPut"></a>
# **webApiLicensesUpdateSitesModulesPut**
> AffectedResultsSchema200 webApiLicensesUpdateSitesModulesPut(opts)

Update sites add-ons

Change the add-ons of the sites by a given filter

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.LicensesApi();

var opts = { 
  'body': new S1MgmtApi.LicensesSchemasSiteBulkModulesSchema() // LicensesSchemasSiteBulkModulesSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiLicensesUpdateSitesModulesPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LicensesSchemasSiteBulkModulesSchema**](LicensesSchemasSiteBulkModulesSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

