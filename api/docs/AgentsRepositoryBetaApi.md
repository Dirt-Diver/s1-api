# S1MgmtApi.AgentsRepositoryBetaApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiAgentArtifactsTokenDelete**](AgentsRepositoryBetaApi.md#webApiAgentArtifactsTokenDelete) | **DELETE** /web/api/v2.1/agent-artifacts/token | Delete Access Token
[**webApiAgentArtifactsTokenGet**](AgentsRepositoryBetaApi.md#webApiAgentArtifactsTokenGet) | **GET** /web/api/v2.1/agent-artifacts/token | List Access Tokens
[**webApiAgentArtifactsTokenPost**](AgentsRepositoryBetaApi.md#webApiAgentArtifactsTokenPost) | **POST** /web/api/v2.1/agent-artifacts/token | Create Access Token


<a name="webApiAgentArtifactsTokenDelete"></a>
# **webApiAgentArtifactsTokenDelete**
> webApiAgentArtifactsTokenDelete(opts)

Delete Access Token

Deletes an access token for the S1 Agent Artifacts Repository

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsRepositoryBetaApi();

var opts = { 
  'scopeLevel': "scopeLevel_example", // String | Scope level to list the tokens for. Possible values: 'site', 'account'
  'scopeId': 56, // Number | Scope id to list the tokens for, example: '983604236220743370'
  'tokenId': 56 // Number | token id of the token to be deleted, example: '42'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiAgentArtifactsTokenDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scopeLevel** | **String**| Scope level to list the tokens for. Possible values: 'site', 'account' | [optional] 
 **scopeId** | **Number**| Scope id to list the tokens for, example: '983604236220743370' | [optional] 
 **tokenId** | **Number**| token id of the token to be deleted, example: '42' | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiAgentArtifactsTokenGet"></a>
# **webApiAgentArtifactsTokenGet**
> HandlersListTokensResponse webApiAgentArtifactsTokenGet(opts)

List Access Tokens

Lists valid access tokens for the S1 Agent Artifacts Repository, with the option to filter by scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsRepositoryBetaApi();

var opts = { 
  'scopeLevel': "scopeLevel_example", // String | Scope level to list the tokens for. Possible values: 'site', 'account'
  'scopeId': 56 // Number | Scope id to list the tokens for, example: '983604236220743370'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAgentArtifactsTokenGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scopeLevel** | **String**| Scope level to list the tokens for. Possible values: 'site', 'account' | [optional] 
 **scopeId** | **Number**| Scope id to list the tokens for, example: '983604236220743370' | [optional] 

### Return type

[**HandlersListTokensResponse**](HandlersListTokensResponse.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiAgentArtifactsTokenPost"></a>
# **webApiAgentArtifactsTokenPost**
> HandlersTokenResponse webApiAgentArtifactsTokenPost(request)

Create Access Token

Creates an access token for the S1 Agent Artifacts Repository, which is needed for pulling artifacts

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsRepositoryBetaApi();

var request = new S1MgmtApi.HandlersTokenRequest(); // HandlersTokenRequest | expected request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAgentArtifactsTokenPost(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**HandlersTokenRequest**](HandlersTokenRequest.md)| expected request body | 

### Return type

[**HandlersTokenResponse**](HandlersTokenResponse.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

