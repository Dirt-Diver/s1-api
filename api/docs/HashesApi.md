# S1MgmtApi.HashesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiHasheshashClassificationGet**](HashesApi.md#webApiHasheshashClassificationGet) | **GET** /web/api/v2.1/hashes/{hash}/classification | Hash classification
[**webApiHasheshashReputationGet**](HashesApi.md#webApiHasheshashReputationGet) | **GET** /web/api/v2.1/hashes/{hash}/reputation | Hash Reputation Rank
[**webApiHasheshashVerdictGet**](HashesApi.md#webApiHasheshashVerdictGet) | **GET** /web/api/v2.1/hashes/{hash}/verdict | Hash Reputation verdict


<a name="webApiHasheshashClassificationGet"></a>
# **webApiHasheshashClassificationGet**
> HashesSchemasHashClassificationSchema200 webApiHasheshashClassificationGet(hash)

Hash classification

[DEPRECATED] Returns hash classification.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.HashesApi();

var hash = "hash_example"; // String | Hash


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiHasheshashClassificationGet(hash, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Hash | 

### Return type

[**HashesSchemasHashClassificationSchema200**](HashesSchemasHashClassificationSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiHasheshashReputationGet"></a>
# **webApiHasheshashReputationGet**
> HashesSchemasHashReputationSchema200 webApiHasheshashReputationGet(hash)

Hash Reputation Rank

[DEPRECATED] Please use the /verdict endpoint.  Get the reputation rank of the of a hash, given the required SHA1. To get a hash, run \"threats\" (best if filtered for a Group or Site) and take the fileContentHash value.  Rank is a number measured on a scale of 1-10, where 10 is definitely malicious and 1 is definitely not malicious. 5-10 shows a status of malicious. 1-4 shows a status of not malicious. 0 is status unknown. Example response for a malicious hash looks like this: {\"data\": {\"rank\": \"5\"}}.  Important: This endpoint only returns the rank of the hash if it is known to the management (stored in mgmt DB). For unknown hashes it returns an empty response {\"data\": {}}

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.HashesApi();

var hash = "hash_example"; // String | Hash


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiHasheshashReputationGet(hash, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Hash | 

### Return type

[**HashesSchemasHashReputationSchema200**](HashesSchemasHashReputationSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiHasheshashVerdictGet"></a>
# **webApiHasheshashVerdictGet**
> HashesSchemasHashVerdictSchema200 webApiHasheshashVerdictGet(hash)

Hash Reputation verdict

Get the verdict of the of a hash, given the required SHA1.  A hash, either malicious or non-malicious, means it has been marked as such by the Reputation's sources.  An unknown answer is given for hashes that are not yet known by Reputation.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.HashesApi();

var hash = "hash_example"; // String | Hash


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiHasheshashVerdictGet(hash, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| Hash | 

### Return type

[**HashesSchemasHashVerdictSchema200**](HashesSchemasHashVerdictSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

