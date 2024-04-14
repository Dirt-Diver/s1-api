# S1MgmtApi.CreateExclusionApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiUnifiedExclusionsPost**](CreateExclusionApi.md#webApiUnifiedExclusionsPost) | **POST** /web/api/v2.1/unified-exclusions | Create Unified Exclusion
[**webApiUnifiedExclusionsValidatePost**](CreateExclusionApi.md#webApiUnifiedExclusionsValidatePost) | **POST** /web/api/v2.1/unified-exclusions/validate | Validate Exclusion Item


<a name="webApiUnifiedExclusionsPost"></a>
# **webApiUnifiedExclusionsPost**
> ExclusionsGetSchemaUnifiedExclusionSchemaMany200 webApiUnifiedExclusionsPost(opts)

Create Unified Exclusion

Create Exclusions to make your Agents suppress alerts and mitigation for items that you consider to be benign or which you require for interoperability.<br>IMPORTANT! Every Exclusion is a possible security hole. Do not create Exclusions unless you are sure this hash, path, certificate signer, file type, or browser is always benign.<br>Of course, if you can make the Exclusion by its hash or path, that is much more secure than excluding all detections of a specific signer, file type, or browser. We do not recommend the last types for Exclusions on production endpoints. These Exclusions might be helpful in a lab or pentester group. When you create an Exclusion, make sure you set the filter to the smallest possible scope. For example, if you can exclude security for this item on a group, do not enter values for siteIds or accountIds.<br>We recommend that you read \"Not Recommended Exclusions: https://support.sentinelone.com/hc/en-us/articles/360007532894<br> and Best Practices for Exclusions: https://support.sentinelone.com/hc/en-us/articles/360008709014

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.CreateExclusionApi();

var opts = { 
  'body': new S1MgmtApi.ExclusionsPostSchemaPostUnifiedExclusionSchema() // ExclusionsPostSchemaPostUnifiedExclusionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUnifiedExclusionsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExclusionsPostSchemaPostUnifiedExclusionSchema**](ExclusionsPostSchemaPostUnifiedExclusionSchema.md)|  | [optional] 

### Return type

[**ExclusionsGetSchemaUnifiedExclusionSchemaMany200**](ExclusionsGetSchemaUnifiedExclusionSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUnifiedExclusionsValidatePost"></a>
# **webApiUnifiedExclusionsValidatePost**
> ExclusionsValidationSchemaValidateExclusionOutputSchema200 webApiUnifiedExclusionsValidatePost(opts)

Validate Exclusion Item

Check if an exclusion is on the list of SentinelOne items that are \"Not Allowed\" or \"Not Recommended\". This API returns one of the following statuses:<br> * Not Recommended: This item is not recommended by SentinelOne because it decreases security. For example, If you accidentally exclude a path that is too broad, malware can enter your environment.<br>* Not Allowed: This exclusion can harm the product and lead to unexpected functionality. From version North Pole SP3 you are prevented from creating Not Allowed exclusions.* None: This item is not on the list of SentinelOne items that are \"Not Allowed\" or \"Not Recommended\".<br>Additionally, the API can return an optional message with a detailing validation error.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.CreateExclusionApi();

var opts = { 
  'body': new S1MgmtApi.ExclusionsValidationSchemaValidateExclusionSchema() // ExclusionsValidationSchemaValidateExclusionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUnifiedExclusionsValidatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExclusionsValidationSchemaValidateExclusionSchema**](ExclusionsValidationSchemaValidateExclusionSchema.md)|  | [optional] 

### Return type

[**ExclusionsValidationSchemaValidateExclusionOutputSchema200**](ExclusionsValidationSchemaValidateExclusionOutputSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

