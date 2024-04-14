# S1MgmtApi.AccountsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiAccountsGet**](AccountsApi.md#webApiAccountsGet) | **GET** /web/api/v2.1/accounts | Get Accounts
[**webApiAccountsPost**](AccountsApi.md#webApiAccountsPost) | **POST** /web/api/v2.1/accounts | Create Account
[**webApiAccountsaccountIdExpireNowPost**](AccountsApi.md#webApiAccountsaccountIdExpireNowPost) | **POST** /web/api/v2.1/accounts/{account_id}/expire-now | Expire an Account
[**webApiAccountsaccountIdGet**](AccountsApi.md#webApiAccountsaccountIdGet) | **GET** /web/api/v2.1/accounts/{account_id} | Get Account by ID
[**webApiAccountsaccountIdPut**](AccountsApi.md#webApiAccountsaccountIdPut) | **PUT** /web/api/v2.1/accounts/{account_id} | Update Account
[**webApiAccountsaccountIdReactivatePut**](AccountsApi.md#webApiAccountsaccountIdReactivatePut) | **PUT** /web/api/v2.1/accounts/{account_id}/reactivate | Reactivate Account
[**webApiAccountsaccountIdRevertPolicyPut**](AccountsApi.md#webApiAccountsaccountIdRevertPolicyPut) | **PUT** /web/api/v2.1/accounts/{account_id}/revert-policy | Revert Policy
[**webApiAccountsaccountIdUninstallPasswordGeneratePost**](AccountsApi.md#webApiAccountsaccountIdUninstallPasswordGeneratePost) | **POST** /web/api/v2.1/accounts/{account_id}/uninstall-password/generate | Generate/Regenerate Uninstall Password
[**webApiAccountsaccountIdUninstallPasswordMetadataGet**](AccountsApi.md#webApiAccountsaccountIdUninstallPasswordMetadataGet) | **GET** /web/api/v2.1/accounts/{account_id}/uninstall-password/metadata | Get Uninstall Password Metadata
[**webApiAccountsaccountIdUninstallPasswordRevokePost**](AccountsApi.md#webApiAccountsaccountIdUninstallPasswordRevokePost) | **POST** /web/api/v2.1/accounts/{account_id}/uninstall-password/revoke | Revoke Uninstall Password
[**webApiAccountsaccountIdUninstallPasswordViewGet**](AccountsApi.md#webApiAccountsaccountIdUninstallPasswordViewGet) | **GET** /web/api/v2.1/accounts/{account_id}/uninstall-password/view | Get Uninstall Password
[**webApiExportAccountsGet**](AccountsApi.md#webApiExportAccountsGet) | **GET** /web/api/v2.1/export/accounts | Export Accounts


<a name="webApiAccountsGet"></a>
# **webApiAccountsGet**
> AccountsSchemasAccountViewSchemaMany200 webApiAccountsGet(opts)

Get Accounts

Get the Accounts, and their data, that match the filter. This command gives the Account IDs, which other commands require. <br>Accounts are created by a Global User or by SentinelOne. Each Account contains Sites, which can inherit assets and settings. Each Account has one or more SKUs, that you assign to the Sites. To have both Core and Complete Sites in an Account, the Account must have both SKUs.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AccountsApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'features': ["features_example"], // [String] | Filter the list of Accounts for those that support this feature. Example: \"firewall-control\".
  'updatedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Timestamp of last update. Example: \"2018-02-27T04:49:26.257525Z\".
  'expiration': new Date("2013-10-20T19:20:30+01:00"), // Date | Expiration. Example: \"2018-02-27T04:49:26.257525Z\".
  'query': "query_example", // String | Full text search for fields: name. (Note: on single-Account Consoles, the Account name will not be matched)
  'ids': ["ids_example"], // [String] | A list of Account IDs. Example: \"225494730938493804,225494730938493915\".
  'isDefault': true, // Boolean | Is default
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'activeLicenses': 56, // Number | Active licenses
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'accountType': "accountType_example", // String | Account type. Example: \"Trial\".
  'totalLicenses': 56, // Number | Total licenses
  'usageType': "usageType_example", // String | Usage type. Example: \"customer\".
  'states': ["states_example"], // [String] | Filter by state, such as active or expired.
  'billingMode': "billingMode_example", // String | Billing mode. Example: \"subscription\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'name': "name_example", // String | Name. Example: \"My Account\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to search for. Example: \"225494730938493804,225494730938493915\".
  'createdAt': new Date("2013-10-20T19:20:30+01:00") // Date | Timestamp of Account creation. Example: \"2018-02-27T04:49:26.257525Z\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAccountsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **features** | [**[String]**](String.md)| Filter the list of Accounts for those that support this feature. Example: \"firewall-control\". | [optional] 
 **updatedAt** | **Date**| Timestamp of last update. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **expiration** | **Date**| Expiration. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **query** | **String**| Full text search for fields: name. (Note: on single-Account Consoles, the Account name will not be matched) | [optional] 
 **ids** | [**[String]**](String.md)| A list of Account IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **isDefault** | **Boolean**| Is default | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **activeLicenses** | **Number**| Active licenses | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **accountType** | **String**| Account type. Example: \"Trial\". | [optional] 
 **totalLicenses** | **Number**| Total licenses | [optional] 
 **usageType** | **String**| Usage type. Example: \"customer\". | [optional] 
 **states** | [**[String]**](String.md)| Filter by state, such as active or expired. | [optional] 
 **billingMode** | **String**| Billing mode. Example: \"subscription\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **name** | **String**| Name. Example: \"My Account\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to search for. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **createdAt** | **Date**| Timestamp of Account creation. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 

### Return type

[**AccountsSchemasAccountViewSchemaMany200**](AccountsSchemasAccountViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAccountsPost"></a>
# **webApiAccountsPost**
> webApiAccountsPost(opts)

Create Account

Create a new Account. This command requires Global permissions and an MSSP deployment. Consult with your SE before you run this command. An Account is a logical segment with permissions to configure features for specific Sites. Multiple Accounts can be useful for deployments with multiple Sites for third-parties (such as MSSP). Each Account has one or more SKUs, that you assign to Sites. If an Account has the Complete SKU, and you create a new Site in the Account, it will automatically have the Complete SKU. Best practice: Run \"name-available\" first, to make sure the name is unique in your deployment.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AccountsApi();

var opts = { 
  'body': new S1MgmtApi.AccountsSchemasPostAccountSchema() // AccountsSchemasPostAccountSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiAccountsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AccountsSchemasPostAccountSchema**](AccountsSchemasPostAccountSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiAccountsaccountIdExpireNowPost"></a>
# **webApiAccountsaccountIdExpireNowPost**
> AccountsSchemasAccountGetSchema200 webApiAccountsaccountIdExpireNowPost(accountId)

Expire an Account

Expire an Account immediately. The user must have Global access or Account acces with permissions for the Account. Best practice: Consult with Support before you use this command.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AccountsApi();

var accountId = "accountId_example"; // String | Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAccountsaccountIdExpireNowPost(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\". | 

### Return type

[**AccountsSchemasAccountGetSchema200**](AccountsSchemasAccountGetSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAccountsaccountIdGet"></a>
# **webApiAccountsaccountIdGet**
> AccountsSchemasAccountViewSchema200 webApiAccountsaccountIdGet(accountId)

Get Account by ID

Get Account data from a given Account ID. To get an Account ID, run \"accounts\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AccountsApi();

var accountId = "accountId_example"; // String | Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAccountsaccountIdGet(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\". | 

### Return type

[**AccountsSchemasAccountViewSchema200**](AccountsSchemasAccountViewSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAccountsaccountIdPut"></a>
# **webApiAccountsaccountIdPut**
> AccountsSchemasAccountGetSchema200 webApiAccountsaccountIdPut(accountId, opts)

Update Account

Change the data of an Account. This command requires a Global user or an Account user and Admin role. Use this command to change the name, ID, SKUs and how they are distributed among Sites and Agents, and more. (See the Body sample.) Best practice:  Consult with your SentinelOne SE. 

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AccountsApi();

var accountId = "accountId_example"; // String | Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.AccountsSchemasAccountPutSchema() // AccountsSchemasAccountPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAccountsaccountIdPut(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\". | 
 **body** | [**AccountsSchemasAccountPutSchema**](AccountsSchemasAccountPutSchema.md)|  | [optional] 

### Return type

[**AccountsSchemasAccountGetSchema200**](AccountsSchemasAccountGetSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiAccountsaccountIdReactivatePut"></a>
# **webApiAccountsaccountIdReactivatePut**
> SuccessResponseSchema200 webApiAccountsaccountIdReactivatePut(accountId, opts)

Reactivate Account

Reactivate an expired Account. This command requires a Global user or Support. Consult with your SentinelOne SE.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AccountsApi();

var accountId = "accountId_example"; // String | Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.AccountsSchemasReactivateAccountSchema() // AccountsSchemasReactivateAccountSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAccountsaccountIdReactivatePut(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\". | 
 **body** | [**AccountsSchemasReactivateAccountSchema**](AccountsSchemasReactivateAccountSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiAccountsaccountIdRevertPolicyPut"></a>
# **webApiAccountsaccountIdRevertPolicyPut**
> SuccessResponseSchema200 webApiAccountsaccountIdRevertPolicyPut(accountId, opts)

Revert Policy

The policy of the Account is based on the default Global policy and is enforced by all endpoints in the Sites and Groups of the Account (if you did not change the Site or Group policies). If you change the Account policy, you can use this command to revert it to the default Global policy.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AccountsApi();

var accountId = "accountId_example"; // String | Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.PoliciesSchemasRevertPolicySchema() // PoliciesSchemasRevertPolicySchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAccountsaccountIdRevertPolicyPut(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\". | 
 **body** | [**PoliciesSchemasRevertPolicySchema**](PoliciesSchemasRevertPolicySchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiAccountsaccountIdUninstallPasswordGeneratePost"></a>
# **webApiAccountsaccountIdUninstallPasswordGeneratePost**
> AccountsSchemasUninstallPasswordMetadataResponseSchema200 webApiAccountsaccountIdUninstallPasswordGeneratePost(accountId, opts)

Generate/Regenerate Uninstall Password

You can uninstall all Agents of one Account with one command that requires a password. This command sets a new account-level uninstall password.<br>To enable this feature, submit a ticket with Support.<br>Best Practice: After you uninstall the Agents and install again, revoke the passphrase.<br>Applicable on Windows (versions 4.4+) and Linux (versions 21.7+) Agents.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AccountsApi();

var accountId = "accountId_example"; // String | Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.AccountsSchemasUninstallPasswordGenerateRequestSchema() // AccountsSchemasUninstallPasswordGenerateRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAccountsaccountIdUninstallPasswordGeneratePost(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\". | 
 **body** | [**AccountsSchemasUninstallPasswordGenerateRequestSchema**](AccountsSchemasUninstallPasswordGenerateRequestSchema.md)|  | [optional] 

### Return type

[**AccountsSchemasUninstallPasswordMetadataResponseSchema200**](AccountsSchemasUninstallPasswordMetadataResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiAccountsaccountIdUninstallPasswordMetadataGet"></a>
# **webApiAccountsaccountIdUninstallPasswordMetadataGet**
> AccountsSchemasUninstallPasswordMetadataResponseSchema200 webApiAccountsaccountIdUninstallPasswordMetadataGet(accountId)

Get Uninstall Password Metadata

Get the uninstall password metadata, such as which user created and revoked it and when.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AccountsApi();

var accountId = "accountId_example"; // String | Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAccountsaccountIdUninstallPasswordMetadataGet(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\". | 

### Return type

[**AccountsSchemasUninstallPasswordMetadataResponseSchema200**](AccountsSchemasUninstallPasswordMetadataResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAccountsaccountIdUninstallPasswordRevokePost"></a>
# **webApiAccountsaccountIdUninstallPasswordRevokePost**
> AccountsSchemasUninstallPasswordMetadataResponseSchema200 webApiAccountsaccountIdUninstallPasswordRevokePost(accountId)

Revoke Uninstall Password

Delete the account-level uninstall password. If you do not delete it, you or another Console user can mistakenly use the Account passphrase (and uninstall all Agents) when you mean to uninstall one Agent.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AccountsApi();

var accountId = "accountId_example"; // String | Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAccountsaccountIdUninstallPasswordRevokePost(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\". | 

### Return type

[**AccountsSchemasUninstallPasswordMetadataResponseSchema200**](AccountsSchemasUninstallPasswordMetadataResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAccountsaccountIdUninstallPasswordViewGet"></a>
# **webApiAccountsaccountIdUninstallPasswordViewGet**
> AccountsSchemasUninstallPasswordGenerateResponseSchema200 webApiAccountsaccountIdUninstallPasswordViewGet(accountId)

Get Uninstall Password

Get the uninstall password to uninstall several Agents of one Account with one command.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AccountsApi();

var accountId = "accountId_example"; // String | Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAccountsaccountIdUninstallPasswordViewGet(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account ID. You can get the ID from the Get accounts command. Example: \"225494730938493804\". | 

### Return type

[**AccountsSchemasUninstallPasswordGenerateResponseSchema200**](AccountsSchemasUninstallPasswordGenerateResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiExportAccountsGet"></a>
# **webApiExportAccountsGet**
> webApiExportAccountsGet(opts)

Export Accounts

Export Accounts data to a CSV, for Accounts that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AccountsApi();

var opts = { 
  'name': "name_example", // String | Name. Example: \"My Account\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to search for. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | Full text search for fields: name. (Note: on single-Account Consoles, the Account name will not be matched)
  'createdAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Timestamp of Account creation. Example: \"2018-02-27T04:49:26.257525Z\".
  'activeLicenses': 56, // Number | Active licenses
  'states': ["states_example"], // [String] | Filter by state, such as active or expired.
  'updatedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Timestamp of last update. Example: \"2018-02-27T04:49:26.257525Z\".
  'accountType': "accountType_example", // String | Account type. Example: \"Trial\".
  'features': ["features_example"], // [String] | Filter the list of Accounts for those that support this feature. Example: \"firewall-control\".
  'expiration': new Date("2013-10-20T19:20:30+01:00"), // Date | Expiration. Example: \"2018-02-27T04:49:26.257525Z\".
  'totalLicenses': 56, // Number | Total licenses
  'usageType': "usageType_example", // String | Usage type. Example: \"customer\".
  'ids': ["ids_example"], // [String] | A list of Account IDs. Example: \"225494730938493804,225494730938493915\".
  'isDefault': true, // Boolean | Is default
  'billingMode': "billingMode_example" // String | Billing mode. Example: \"subscription\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExportAccountsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name. Example: \"My Account\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to search for. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| Full text search for fields: name. (Note: on single-Account Consoles, the Account name will not be matched) | [optional] 
 **createdAt** | **Date**| Timestamp of Account creation. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **activeLicenses** | **Number**| Active licenses | [optional] 
 **states** | [**[String]**](String.md)| Filter by state, such as active or expired. | [optional] 
 **updatedAt** | **Date**| Timestamp of last update. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **accountType** | **String**| Account type. Example: \"Trial\". | [optional] 
 **features** | [**[String]**](String.md)| Filter the list of Accounts for those that support this feature. Example: \"firewall-control\". | [optional] 
 **expiration** | **Date**| Expiration. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **totalLicenses** | **Number**| Total licenses | [optional] 
 **usageType** | **String**| Usage type. Example: \"customer\". | [optional] 
 **ids** | [**[String]**](String.md)| A list of Account IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **isDefault** | **Boolean**| Is default | [optional] 
 **billingMode** | **String**| Billing mode. Example: \"subscription\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

