# S1MgmtApi.AutoUpgradePolicyApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiUpgradePolicyAvailablePackagesGet**](AutoUpgradePolicyApi.md#webApiUpgradePolicyAvailablePackagesGet) | **GET** /web/api/v2.1/upgrade-policy/available-packages | Get Available Packages
[**webApiUpgradePolicyHasPolicyPost**](AutoUpgradePolicyApi.md#webApiUpgradePolicyHasPolicyPost) | **POST** /web/api/v2.1/upgrade-policy/has-policy | Has Policy
[**webApiUpgradePolicyParentPoliciesGet**](AutoUpgradePolicyApi.md#webApiUpgradePolicyParentPoliciesGet) | **GET** /web/api/v2.1/upgrade-policy/parent-policies | Get Parent Policies
[**webApiUpgradePolicyPoliciesCountGet**](AutoUpgradePolicyApi.md#webApiUpgradePolicyPoliciesCountGet) | **GET** /web/api/v2.1/upgrade-policy/policies-count | Policies OS Count
[**webApiUpgradePolicyPoliciesGet**](AutoUpgradePolicyApi.md#webApiUpgradePolicyPoliciesGet) | **GET** /web/api/v2.1/upgrade-policy/policies | Get Policies
[**webApiUpgradePolicyPoliciesPost**](AutoUpgradePolicyApi.md#webApiUpgradePolicyPoliciesPost) | **POST** /web/api/v2.1/upgrade-policy/policies | Deactivate Policies
[**webApiUpgradePolicyPolicyPolicyidPost**](AutoUpgradePolicyApi.md#webApiUpgradePolicyPolicyPolicyidPost) | **POST** /web/api/v2.1/upgrade-policy/policy/:policyid | Policy Action
[**webApiUpgradePolicyPolicyPolicyidPut**](AutoUpgradePolicyApi.md#webApiUpgradePolicyPolicyPolicyidPut) | **PUT** /web/api/v2.1/upgrade-policy/policy/:policyid | Update Policy
[**webApiUpgradePolicyPolicyPost**](AutoUpgradePolicyApi.md#webApiUpgradePolicyPolicyPost) | **POST** /web/api/v2.1/upgrade-policy/policy | Create Policy
[**webApiUpgradePolicyReorderPut**](AutoUpgradePolicyApi.md#webApiUpgradePolicyReorderPut) | **PUT** /web/api/v2.1/upgrade-policy/reorder | Reorder Policies
[**webApiUpgradePolicySetInheritingPut**](AutoUpgradePolicyApi.md#webApiUpgradePolicySetInheritingPut) | **PUT** /web/api/v2.1/upgrade-policy/set-inheriting | Set Scope Inheriting


<a name="webApiUpgradePolicyAvailablePackagesGet"></a>
# **webApiUpgradePolicyAvailablePackagesGet**
> V21ModelsGetAvailablePackagesResponse webApiUpgradePolicyAvailablePackagesGet(scopeLevel, osType, opts)

Get Available Packages

Get Available Packages

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AutoUpgradePolicyApi();

var scopeLevel = "scopeLevel_example"; // String | Scope level, one of 'account', 'group', 'site' or 'tenant'

var osType = "osType_example"; // String | OS type, one of 'linux', 'macos' or 'windows'

var opts = { 
  'scopeId': "scopeId_example", // String | Scope ID
  'displayNameContains': "displayNameContains_example" // String | Partially match the name of the package, e.g. '22.1 GA'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpgradePolicyAvailablePackagesGet(scopeLevel, osType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scopeLevel** | **String**| Scope level, one of 'account', 'group', 'site' or 'tenant' | 
 **osType** | **String**| OS type, one of 'linux', 'macos' or 'windows' | 
 **scopeId** | **String**| Scope ID | [optional] 
 **displayNameContains** | **String**| Partially match the name of the package, e.g. '22.1 GA' | [optional] 

### Return type

[**V21ModelsGetAvailablePackagesResponse**](V21ModelsGetAvailablePackagesResponse.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="webApiUpgradePolicyHasPolicyPost"></a>
# **webApiUpgradePolicyHasPolicyPost**
> V21ModelsHasPoliciesResponse webApiUpgradePolicyHasPolicyPost(payload)

Has Policy

Has policy

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AutoUpgradePolicyApi();

var payload = new S1MgmtApi.V21ModelsHasPoliciesRequest(); // V21ModelsHasPoliciesRequest | Policy payload


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpgradePolicyHasPolicyPost(payload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**V21ModelsHasPoliciesRequest**](V21ModelsHasPoliciesRequest.md)| Policy payload | 

### Return type

[**V21ModelsHasPoliciesResponse**](V21ModelsHasPoliciesResponse.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUpgradePolicyParentPoliciesGet"></a>
# **webApiUpgradePolicyParentPoliciesGet**
> V21ModelsGetPoliciesResponse webApiUpgradePolicyParentPoliciesGet(scopeLevel, osType, limit, skip, sortBy, sortOrder, opts)

Get Parent Policies

Get paginated and ordered parent policies by a given scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AutoUpgradePolicyApi();

var scopeLevel = "scopeLevel_example"; // String | Scope level, one of 'account', 'group', 'site' or 'tenant'

var osType = "osType_example"; // String | OS type, one of 'linux', 'macos' or 'windows'

var limit = 56; // Number | Limit number of returned items. Should be more than 1. Example: '10'.

var skip = 56; // Number | Skip first number of items. Example: '0'.

var sortBy = "sortBy_example"; // String | The column to sort the results by. Example: 'priority'.

var sortOrder = "sortOrder_example"; // String | Sort direction. Could be 'asc' or 'desc'.

var opts = { 
  'scopeId': "scopeId_example" // String | Scope ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpgradePolicyParentPoliciesGet(scopeLevel, osType, limit, skip, sortBy, sortOrder, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scopeLevel** | **String**| Scope level, one of 'account', 'group', 'site' or 'tenant' | 
 **osType** | **String**| OS type, one of 'linux', 'macos' or 'windows' | 
 **limit** | **Number**| Limit number of returned items. Should be more than 1. Example: '10'. | 
 **skip** | **Number**| Skip first number of items. Example: '0'. | 
 **sortBy** | **String**| The column to sort the results by. Example: 'priority'. | 
 **sortOrder** | **String**| Sort direction. Could be 'asc' or 'desc'. | 
 **scopeId** | **String**| Scope ID | [optional] 

### Return type

[**V21ModelsGetPoliciesResponse**](V21ModelsGetPoliciesResponse.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUpgradePolicyPoliciesCountGet"></a>
# **webApiUpgradePolicyPoliciesCountGet**
> V21ModelsOsCountResult webApiUpgradePolicyPoliciesCountGet(scopeLevel, opts)

Policies OS Count

Get the number of policies for each OS, for a given scope level and id

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AutoUpgradePolicyApi();

var scopeLevel = "scopeLevel_example"; // String | Scope level, one of 'account', 'group', 'site' or 'tenant'

var opts = { 
  'scopeId': "scopeId_example" // String | Scope ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpgradePolicyPoliciesCountGet(scopeLevel, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scopeLevel** | **String**| Scope level, one of 'account', 'group', 'site' or 'tenant' | 
 **scopeId** | **String**| Scope ID | [optional] 

### Return type

[**V21ModelsOsCountResult**](V21ModelsOsCountResult.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUpgradePolicyPoliciesGet"></a>
# **webApiUpgradePolicyPoliciesGet**
> V21ModelsGetPoliciesResponse webApiUpgradePolicyPoliciesGet(scopeLevel, osType, limit, skip, sortBy, sortOrder, opts)

Get Policies

Get paginated and ordered policies by a given scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AutoUpgradePolicyApi();

var scopeLevel = "scopeLevel_example"; // String | Scope level, one of 'account', 'group', 'site' or 'tenant'

var osType = "osType_example"; // String | OS type, one of 'linux', 'macos' or 'windows'

var limit = 56; // Number | Limit number of returned items. Should be more than 1. Example: '10'

var skip = 56; // Number | Skip first number of items. Example: '0'.

var sortBy = "sortBy_example"; // String | The column to sort the results by. Example: 'priority'.

var sortOrder = "sortOrder_example"; // String | Sort direction. Could be 'asc' or 'desc'.

var opts = { 
  'scopeId': "scopeId_example" // String | Scope ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpgradePolicyPoliciesGet(scopeLevel, osType, limit, skip, sortBy, sortOrder, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scopeLevel** | **String**| Scope level, one of 'account', 'group', 'site' or 'tenant' | 
 **osType** | **String**| OS type, one of 'linux', 'macos' or 'windows' | 
 **limit** | **Number**| Limit number of returned items. Should be more than 1. Example: '10' | 
 **skip** | **Number**| Skip first number of items. Example: '0'. | 
 **sortBy** | **String**| The column to sort the results by. Example: 'priority'. | 
 **sortOrder** | **String**| Sort direction. Could be 'asc' or 'desc'. | 
 **scopeId** | **String**| Scope ID | [optional] 

### Return type

[**V21ModelsGetPoliciesResponse**](V21ModelsGetPoliciesResponse.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUpgradePolicyPoliciesPost"></a>
# **webApiUpgradePolicyPoliciesPost**
> V21ModelsEmptyResponse webApiUpgradePolicyPoliciesPost(scopeLevel, osType, opts)

Deactivate Policies

Deactivate all policies

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AutoUpgradePolicyApi();

var scopeLevel = "scopeLevel_example"; // String | Scope level, one of 'account', 'group', 'site' or 'tenant'

var osType = "osType_example"; // String | OS type, one of 'linux', 'macos' or 'windows'

var opts = { 
  'scopeId': "scopeId_example" // String | Scope ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpgradePolicyPoliciesPost(scopeLevel, osType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scopeLevel** | **String**| Scope level, one of 'account', 'group', 'site' or 'tenant' | 
 **osType** | **String**| OS type, one of 'linux', 'macos' or 'windows' | 
 **scopeId** | **String**| Scope ID | [optional] 

### Return type

[**V21ModelsEmptyResponse**](V21ModelsEmptyResponse.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="webApiUpgradePolicyPolicyPolicyidPost"></a>
# **webApiUpgradePolicyPolicyPolicyidPost**
> V21ModelsEmptyResponse webApiUpgradePolicyPolicyPolicyidPost(payload, policyid)

Policy Action

Perform action on a certain policy

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AutoUpgradePolicyApi();

var payload = new S1MgmtApi.V21ModelsEndpointActionRequest(); // V21ModelsEndpointActionRequest | Policy payload

var policyid = "policyid_example"; // String | Policy id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpgradePolicyPolicyPolicyidPost(payload, policyid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**V21ModelsEndpointActionRequest**](V21ModelsEndpointActionRequest.md)| Policy payload | 
 **policyid** | **String**| Policy id | 

### Return type

[**V21ModelsEmptyResponse**](V21ModelsEmptyResponse.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="webApiUpgradePolicyPolicyPolicyidPut"></a>
# **webApiUpgradePolicyPolicyPolicyidPut**
> V21ModelsEmptyResponse webApiUpgradePolicyPolicyPolicyidPut(payload, policyid)

Update Policy

Update existing policy

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AutoUpgradePolicyApi();

var payload = new S1MgmtApi.V21ModelsCreatePolicyRequest(); // V21ModelsCreatePolicyRequest | Policy payload

var policyid = "policyid_example"; // String | Policy id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpgradePolicyPolicyPolicyidPut(payload, policyid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**V21ModelsCreatePolicyRequest**](V21ModelsCreatePolicyRequest.md)| Policy payload | 
 **policyid** | **String**| Policy id | 

### Return type

[**V21ModelsEmptyResponse**](V21ModelsEmptyResponse.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="webApiUpgradePolicyPolicyPost"></a>
# **webApiUpgradePolicyPolicyPost**
> V21ModelsEmptyResponse webApiUpgradePolicyPolicyPost(payload)

Create Policy

Add policy

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AutoUpgradePolicyApi();

var payload = new S1MgmtApi.V21ModelsCreatePolicyRequest(); // V21ModelsCreatePolicyRequest | Policy payload


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpgradePolicyPolicyPost(payload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**V21ModelsCreatePolicyRequest**](V21ModelsCreatePolicyRequest.md)| Policy payload | 

### Return type

[**V21ModelsEmptyResponse**](V21ModelsEmptyResponse.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="webApiUpgradePolicyReorderPut"></a>
# **webApiUpgradePolicyReorderPut**
> V21ModelsEmptyResponse webApiUpgradePolicyReorderPut(payload)

Reorder Policies

Reorder policies

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AutoUpgradePolicyApi();

var payload = new S1MgmtApi.V21ModelsReorderPolicyRequest(); // V21ModelsReorderPolicyRequest | Policy payload


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpgradePolicyReorderPut(payload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**V21ModelsReorderPolicyRequest**](V21ModelsReorderPolicyRequest.md)| Policy payload | 

### Return type

[**V21ModelsEmptyResponse**](V21ModelsEmptyResponse.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="webApiUpgradePolicySetInheritingPut"></a>
# **webApiUpgradePolicySetInheritingPut**
> V21ModelsEmptyResponse webApiUpgradePolicySetInheritingPut(payload)

Set Scope Inheriting

Set Scope Inheriting

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AutoUpgradePolicyApi();

var payload = new S1MgmtApi.V21ModelsScopeInheritanceRequest(); // V21ModelsScopeInheritanceRequest | payload


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpgradePolicySetInheritingPut(payload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**V21ModelsScopeInheritanceRequest**](V21ModelsScopeInheritanceRequest.md)| payload | 

### Return type

[**V21ModelsEmptyResponse**](V21ModelsEmptyResponse.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

