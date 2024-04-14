# S1MgmtApi.PoliciesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiAccountsaccountIdPolicyGet**](PoliciesApi.md#webApiAccountsaccountIdPolicyGet) | **GET** /web/api/v2.1/accounts/{account_id}/policy | Account Policy
[**webApiAccountsaccountIdPolicyPut**](PoliciesApi.md#webApiAccountsaccountIdPolicyPut) | **PUT** /web/api/v2.1/accounts/{account_id}/policy | Update Account Policy
[**webApiGroupsgroupIdPolicyGet**](PoliciesApi.md#webApiGroupsgroupIdPolicyGet) | **GET** /web/api/v2.1/groups/{group_id}/policy | Group Policy
[**webApiGroupsgroupIdPolicyPut**](PoliciesApi.md#webApiGroupsgroupIdPolicyPut) | **PUT** /web/api/v2.1/groups/{group_id}/policy | Update Group Policy
[**webApiSitessiteIdPolicyGet**](PoliciesApi.md#webApiSitessiteIdPolicyGet) | **GET** /web/api/v2.1/sites/{site_id}/policy | Site Policy
[**webApiSitessiteIdPolicyPut**](PoliciesApi.md#webApiSitessiteIdPolicyPut) | **PUT** /web/api/v2.1/sites/{site_id}/policy | Update Site Policy
[**webApiTenantPolicyGet**](PoliciesApi.md#webApiTenantPolicyGet) | **GET** /web/api/v2.1/tenant/policy | Global Policy
[**webApiTenantPolicyPut**](PoliciesApi.md#webApiTenantPolicyPut) | **PUT** /web/api/v2.1/tenant/policy | Update Global Policy


<a name="webApiAccountsaccountIdPolicyGet"></a>
# **webApiAccountsaccountIdPolicyGet**
> PoliciesSchemasEnrichedPolicySchema200 webApiAccountsaccountIdPolicyGet(accountId)

Account Policy

Get the policy for the Account given by ID. To get the ID of an Account, run \"accounts\". See also: Get Policy.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.PoliciesApi();

var accountId = "accountId_example"; // String | Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAccountsaccountIdPolicyGet(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\". | 

### Return type

[**PoliciesSchemasEnrichedPolicySchema200**](PoliciesSchemasEnrichedPolicySchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAccountsaccountIdPolicyPut"></a>
# **webApiAccountsaccountIdPolicyPut**
> PoliciesSchemasEnrichedPolicySchema200 webApiAccountsaccountIdPolicyPut(accountId, opts)

Update Account Policy

Change the policy for the Account given by ID. Best practice: Get the policy of the Account before you attempt to change it. See also:  Get Policy.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.PoliciesApi();

var accountId = "accountId_example"; // String | Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.PoliciesTenantPolicySchema() // PoliciesTenantPolicySchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAccountsaccountIdPolicyPut(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\". | 
 **body** | [**PoliciesTenantPolicySchema**](PoliciesTenantPolicySchema.md)|  | [optional] 

### Return type

[**PoliciesSchemasEnrichedPolicySchema200**](PoliciesSchemasEnrichedPolicySchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiGroupsgroupIdPolicyGet"></a>
# **webApiGroupsgroupIdPolicyGet**
> PoliciesSchemasEnrichedPolicySchema200 webApiGroupsgroupIdPolicyGet(groupId)

Group Policy

Get the policy of the Group given by ID. To get the ID of a Group, run \"groups\". See also: Get Policy.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.PoliciesApi();

var groupId = "groupId_example"; // String | Group ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiGroupsgroupIdPolicyGet(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group ID. Example: \"225494730938493804\". | 

### Return type

[**PoliciesSchemasEnrichedPolicySchema200**](PoliciesSchemasEnrichedPolicySchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiGroupsgroupIdPolicyPut"></a>
# **webApiGroupsgroupIdPolicyPut**
> PoliciesSchemasEnrichedPolicySchema200 webApiGroupsgroupIdPolicyPut(groupId, opts)

Update Group Policy

Change the policy for the Group given by ID. Best practice: Get the policy of the Group before you attempt to change it. See also:  Get Policy.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.PoliciesApi();

var groupId = "groupId_example"; // String | Group ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.PoliciesTenantPolicySchema() // PoliciesTenantPolicySchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiGroupsgroupIdPolicyPut(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group ID. Example: \"225494730938493804\". | 
 **body** | [**PoliciesTenantPolicySchema**](PoliciesTenantPolicySchema.md)|  | [optional] 

### Return type

[**PoliciesSchemasEnrichedPolicySchema200**](PoliciesSchemasEnrichedPolicySchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSitessiteIdPolicyGet"></a>
# **webApiSitessiteIdPolicyGet**
> PoliciesSchemasEnrichedPolicySchema200 webApiSitessiteIdPolicyGet(siteId)

Site Policy

Get the policy of the Site given by ID. To get the ID of a Site, run \"sites\". See also: Get Policy.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.PoliciesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitessiteIdPolicyGet(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 

### Return type

[**PoliciesSchemasEnrichedPolicySchema200**](PoliciesSchemasEnrichedPolicySchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSitessiteIdPolicyPut"></a>
# **webApiSitessiteIdPolicyPut**
> PoliciesSchemasEnrichedPolicySchema200 webApiSitessiteIdPolicyPut(siteId, opts)

Update Site Policy

Change the policy for the Site given by ID. Best practice: Get the policy of the Site before you attempt to change it. See also:  Get Policy.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.PoliciesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.PoliciesTenantPolicySchema() // PoliciesTenantPolicySchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitessiteIdPolicyPut(siteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 
 **body** | [**PoliciesTenantPolicySchema**](PoliciesTenantPolicySchema.md)|  | [optional] 

### Return type

[**PoliciesSchemasEnrichedPolicySchema200**](PoliciesSchemasEnrichedPolicySchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiTenantPolicyGet"></a>
# **webApiTenantPolicyGet**
> PoliciesSchemasEnrichedPolicySchema200 webApiTenantPolicyGet()

Global Policy

Get the Global policy. This is the default policy for your deployment. See also: Get Policy.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.PoliciesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiTenantPolicyGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PoliciesSchemasEnrichedPolicySchema200**](PoliciesSchemasEnrichedPolicySchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiTenantPolicyPut"></a>
# **webApiTenantPolicyPut**
> PoliciesSchemasEnrichedPolicySchema200 webApiTenantPolicyPut(opts)

Update Global Policy

Change the policy of your deployment. Best practice: Get the Global policy before you attempt to change it. See also:  Get Policy.    You must be a Global Admin user to change the Global Policy.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.PoliciesApi();

var opts = { 
  'body': new S1MgmtApi.PoliciesTenantPolicySchema() // PoliciesTenantPolicySchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiTenantPolicyPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PoliciesTenantPolicySchema**](PoliciesTenantPolicySchema.md)|  | [optional] 

### Return type

[**PoliciesSchemasEnrichedPolicySchema200**](PoliciesSchemasEnrichedPolicySchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

