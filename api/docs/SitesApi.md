# S1MgmtApi.SitesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiExportSitesGet**](SitesApi.md#webApiExportSitesGet) | **GET** /web/api/v2.1/export/sites | Export Sites
[**webApiSiteWithAdminPost**](SitesApi.md#webApiSiteWithAdminPost) | **POST** /web/api/v2.1/site-with-admin | Create Site and User
[**webApiSitesDuplicateSitePost**](SitesApi.md#webApiSitesDuplicateSitePost) | **POST** /web/api/v2.1/sites/duplicate-site | Create duplicate site
[**webApiSitesGet**](SitesApi.md#webApiSitesGet) | **GET** /web/api/v2.1/sites | Get Sites
[**webApiSitesPost**](SitesApi.md#webApiSitesPost) | **POST** /web/api/v2.1/sites | Create Site
[**webApiSitesUpdateBulkPut**](SitesApi.md#webApiSitesUpdateBulkPut) | **PUT** /web/api/v2.1/sites/update-bulk | Update Sites
[**webApiSitessiteIdDelete**](SitesApi.md#webApiSitessiteIdDelete) | **DELETE** /web/api/v2.1/sites/{site_id} | Delete Site
[**webApiSitessiteIdExpireNowPost**](SitesApi.md#webApiSitessiteIdExpireNowPost) | **POST** /web/api/v2.1/sites/{site_id}/expire-now | Expire Site
[**webApiSitessiteIdGet**](SitesApi.md#webApiSitessiteIdGet) | **GET** /web/api/v2.1/sites/{site_id} | Get Site by ID
[**webApiSitessiteIdLocalAuthorizationGet**](SitesApi.md#webApiSitessiteIdLocalAuthorizationGet) | **GET** /web/api/v2.1/sites/{site_id}/local-authorization | Get local upgrade site authorization
[**webApiSitessiteIdLocalAuthorizationPut**](SitesApi.md#webApiSitessiteIdLocalAuthorizationPut) | **PUT** /web/api/v2.1/sites/{site_id}/local-authorization | Edit local upgrade site authorization
[**webApiSitessiteIdLocalUpgradeApprovedAgentsCsvGet**](SitesApi.md#webApiSitessiteIdLocalUpgradeApprovedAgentsCsvGet) | **GET** /web/api/v2.1/sites/{site_id}/local-upgrade-approved-agents-csv | Get a CSV file of local upgrade site authorization data
[**webApiSitessiteIdPut**](SitesApi.md#webApiSitessiteIdPut) | **PUT** /web/api/v2.1/sites/{site_id} | Update Site
[**webApiSitessiteIdReactivatePut**](SitesApi.md#webApiSitessiteIdReactivatePut) | **PUT** /web/api/v2.1/sites/{site_id}/reactivate | Reactivate Site
[**webApiSitessiteIdRegenerateKeyPut**](SitesApi.md#webApiSitessiteIdRegenerateKeyPut) | **PUT** /web/api/v2.1/sites/{site_id}/regenerate-key | Regenerate Site Key
[**webApiSitessiteIdRevertPolicyPut**](SitesApi.md#webApiSitessiteIdRevertPolicyPut) | **PUT** /web/api/v2.1/sites/{site_id}/revert-policy | Revert Policy
[**webApiSitessiteIdTokenGet**](SitesApi.md#webApiSitessiteIdTokenGet) | **GET** /web/api/v2.1/sites/{site_id}/token | Get Site registration token by ID


<a name="webApiExportSitesGet"></a>
# **webApiExportSitesGet**
> webApiExportSitesGet(opts)

Export Sites

Export Sites data to a CSV, for Sites that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var opts = { 
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by site name (supports multiple values)
  'accountId': "accountId_example", // String | Account id. Example: \"225494730938493804\".
  'availableMoveSites': true, // Boolean | Only return sites the user can move agents to
  'healthStatus': true, // Boolean | Health status
  'updatedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Timestamp of last update. Example: \"2018-02-27T04:49:26.257525Z\".
  'features': ["features_example"], // [String] | If sent return only sites that support this features. Example: \"firewall-control\".
  'expiration': new Date("2013-10-20T19:20:30+01:00"), // Date | Expiration. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteType': "siteType_example", // String | Site type. Example: \"Trial\".
  'adminOnly': true, // Boolean | Show sites the user has Admin privileges to
  'query': "query_example", // String | Full text search for fields: name, account_name, description. (Note: on single-account consoles account name will not be matched)
  'isDefault': true, // Boolean | Is default
  'state': "state_example", // String | Site state. Example: \"active\".
  'activeLicenses': 56, // Number | Active licenses
  'totalLicenses': 56, // Number | Total licenses
  'states': ["states_example"], // [String] | List of states to filter
  'externalId': "externalId_example", // String | Id in a CRM external system
  'suite': "suite_example", // String | [DEPRECATED] Use sku instead. Example: \"Core\".
  'accountNameContains': ["accountNameContains_example"], // [String] | Free-text filter by account name (supports multiple values)
  'registrationToken': "registrationToken_example", // String | Registration token. Example: \"eyJ1cmwiOiAiaHR0cHM6Ly9jb25zb2xlLnNlbnRpbmVsb25lLm5ldCIsICJzaXRlX2tleSI6ICIwNzhkYjliMWUyOTA1Y2NhIn0=\".
  'module': "module_example", // String | Module. Example: \"star,rso\".
  'description': "description_example", // String | The description for the Site
  'name': "name_example", // String | Name. Example: \"My Site\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'createdAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Timestamp of site creation. Example: \"2018-02-27T04:49:26.257525Z\".
  'sku': "sku_example", // String | Sku. Example: \"core\".
  'descriptionContains': ["descriptionContains_example"] // [String] | Free-text filter by site description (supports multiple values)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExportSitesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameContains** | [**[String]**](String.md)| Free-text filter by site name (supports multiple values) | [optional] 
 **accountId** | **String**| Account id. Example: \"225494730938493804\". | [optional] 
 **availableMoveSites** | **Boolean**| Only return sites the user can move agents to | [optional] 
 **healthStatus** | **Boolean**| Health status | [optional] 
 **updatedAt** | **Date**| Timestamp of last update. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **features** | [**[String]**](String.md)| If sent return only sites that support this features. Example: \"firewall-control\". | [optional] 
 **expiration** | **Date**| Expiration. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteType** | **String**| Site type. Example: \"Trial\". | [optional] 
 **adminOnly** | **Boolean**| Show sites the user has Admin privileges to | [optional] 
 **query** | **String**| Full text search for fields: name, account_name, description. (Note: on single-account consoles account name will not be matched) | [optional] 
 **isDefault** | **Boolean**| Is default | [optional] 
 **state** | **String**| Site state. Example: \"active\". | [optional] 
 **activeLicenses** | **Number**| Active licenses | [optional] 
 **totalLicenses** | **Number**| Total licenses | [optional] 
 **states** | [**[String]**](String.md)| List of states to filter | [optional] 
 **externalId** | **String**| Id in a CRM external system | [optional] 
 **suite** | **String**| [DEPRECATED] Use sku instead. Example: \"Core\". | [optional] 
 **accountNameContains** | [**[String]**](String.md)| Free-text filter by account name (supports multiple values) | [optional] 
 **registrationToken** | **String**| Registration token. Example: \"eyJ1cmwiOiAiaHR0cHM6Ly9jb25zb2xlLnNlbnRpbmVsb25lLm5ldCIsICJzaXRlX2tleSI6ICIwNzhkYjliMWUyOTA1Y2NhIn0=\". | [optional] 
 **module** | **String**| Module. Example: \"star,rso\". | [optional] 
 **description** | **String**| The description for the Site | [optional] 
 **name** | **String**| Name. Example: \"My Site\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **createdAt** | **Date**| Timestamp of site creation. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **sku** | **String**| Sku. Example: \"core\". | [optional] 
 **descriptionContains** | [**[String]**](String.md)| Free-text filter by site description (supports multiple values) | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSiteWithAdminPost"></a>
# **webApiSiteWithAdminPost**
> SitesSiteWithUserSchema200 webApiSiteWithAdminPost(opts)

Create Site and User

Create a Site and an Admin role user. This requires an Admin role with a Global scope or Account scope that has permissions over the Account to which the Site will belong. <br>You must have a license for a new Site. <br>In the body of this request, include the policy and user properties.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var opts = { 
  'body': new S1MgmtApi.SitesSiteDataWithUserSchema() // SitesSiteDataWithUserSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSiteWithAdminPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SitesSiteDataWithUserSchema**](SitesSiteDataWithUserSchema.md)|  | [optional] 

### Return type

[**SitesSiteWithUserSchema200**](SitesSiteWithUserSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSitesDuplicateSitePost"></a>
# **webApiSitesDuplicateSitePost**
> SitesSiteSchema200 webApiSitesDuplicateSitePost(opts)

Create duplicate site

[DEPRECATED] Create duplicate site.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var opts = { 
  'body': new S1MgmtApi.SitesDuplicateSiteSchema() // SitesDuplicateSiteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitesDuplicateSitePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SitesDuplicateSiteSchema**](SitesDuplicateSiteSchema.md)|  | [optional] 

### Return type

[**SitesSiteSchema200**](SitesSiteSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSitesGet"></a>
# **webApiSitesGet**
> SitesSiteResponseSchema200 webApiSitesGet(opts)

Get Sites

Get the Sites that match the filters. <br>The response includes the IDs of Sites, which you can use in other commands.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by site name (supports multiple values)
  'accountId': "accountId_example", // String | Account id. Example: \"225494730938493804\".
  'availableMoveSites': true, // Boolean | Only return sites the user can move agents to
  'healthStatus': true, // Boolean | Health status
  'updatedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Timestamp of last update. Example: \"2018-02-27T04:49:26.257525Z\".
  'features': ["features_example"], // [String] | If sent return only sites that support this features. Example: \"firewall-control\".
  'expiration': new Date("2013-10-20T19:20:30+01:00"), // Date | Expiration. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteType': "siteType_example", // String | Site type. Example: \"Trial\".
  'adminOnly': true, // Boolean | Show sites the user has Admin privileges to
  'query': "query_example", // String | Full text search for fields: name, account_name, description. (Note: on single-account consoles account name will not be matched)
  'isDefault': true, // Boolean | Is default
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'state': "state_example", // String | Site state. Example: \"active\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'activeLicenses': 56, // Number | Active licenses
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'totalLicenses': 56, // Number | Total licenses
  'states': ["states_example"], // [String] | List of states to filter
  'externalId': "externalId_example", // String | Id in a CRM external system
  'suite': "suite_example", // String | [DEPRECATED] Use sku instead. Example: \"Core\".
  'accountNameContains': ["accountNameContains_example"], // [String] | Free-text filter by account name (supports multiple values)
  'registrationToken': "registrationToken_example", // String | Registration token. Example: \"eyJ1cmwiOiAiaHR0cHM6Ly9jb25zb2xlLnNlbnRpbmVsb25lLm5ldCIsICJzaXRlX2tleSI6ICIwNzhkYjliMWUyOTA1Y2NhIn0=\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'module': "module_example", // String | Module. Example: \"star,rso\".
  'description': "description_example", // String | The description for the Site
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'name': "name_example", // String | Name. Example: \"My Site\".
  'createdAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Timestamp of site creation. Example: \"2018-02-27T04:49:26.257525Z\".
  'sku': "sku_example", // String | Sku. Example: \"core\".
  'descriptionContains': ["descriptionContains_example"] // [String] | Free-text filter by site description (supports multiple values)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **nameContains** | [**[String]**](String.md)| Free-text filter by site name (supports multiple values) | [optional] 
 **accountId** | **String**| Account id. Example: \"225494730938493804\". | [optional] 
 **availableMoveSites** | **Boolean**| Only return sites the user can move agents to | [optional] 
 **healthStatus** | **Boolean**| Health status | [optional] 
 **updatedAt** | **Date**| Timestamp of last update. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **features** | [**[String]**](String.md)| If sent return only sites that support this features. Example: \"firewall-control\". | [optional] 
 **expiration** | **Date**| Expiration. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteType** | **String**| Site type. Example: \"Trial\". | [optional] 
 **adminOnly** | **Boolean**| Show sites the user has Admin privileges to | [optional] 
 **query** | **String**| Full text search for fields: name, account_name, description. (Note: on single-account consoles account name will not be matched) | [optional] 
 **isDefault** | **Boolean**| Is default | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **state** | **String**| Site state. Example: \"active\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **activeLicenses** | **Number**| Active licenses | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **totalLicenses** | **Number**| Total licenses | [optional] 
 **states** | [**[String]**](String.md)| List of states to filter | [optional] 
 **externalId** | **String**| Id in a CRM external system | [optional] 
 **suite** | **String**| [DEPRECATED] Use sku instead. Example: \"Core\". | [optional] 
 **accountNameContains** | [**[String]**](String.md)| Free-text filter by account name (supports multiple values) | [optional] 
 **registrationToken** | **String**| Registration token. Example: \"eyJ1cmwiOiAiaHR0cHM6Ly9jb25zb2xlLnNlbnRpbmVsb25lLm5ldCIsICJzaXRlX2tleSI6ICIwNzhkYjliMWUyOTA1Y2NhIn0=\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **module** | **String**| Module. Example: \"star,rso\". | [optional] 
 **description** | **String**| The description for the Site | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **name** | **String**| Name. Example: \"My Site\". | [optional] 
 **createdAt** | **Date**| Timestamp of site creation. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **sku** | **String**| Sku. Example: \"core\". | [optional] 
 **descriptionContains** | [**[String]**](String.md)| Free-text filter by site description (supports multiple values) | [optional] 

### Return type

[**SitesSiteResponseSchema200**](SitesSiteResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSitesPost"></a>
# **webApiSitesPost**
> SitesSiteSchema200 webApiSitesPost(opts)

Create Site

Create a Site. This requires an Admin role with a Global scope or Account scope that has permissions over the Account to which the Site will belong. <br>You must have a license for a new Site. <br>In the body of this request, include the policy. 

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var opts = { 
  'body': new S1MgmtApi.SitesPostSiteSchema() // SitesPostSiteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SitesPostSiteSchema**](SitesPostSiteSchema.md)|  | [optional] 

### Return type

[**SitesSiteSchema200**](SitesSiteSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSitesUpdateBulkPut"></a>
# **webApiSitesUpdateBulkPut**
> AffectedResultsSchema200 webApiSitesUpdateBulkPut(opts)

Update Sites

Change the properties of the Sites given by IDs. <br>To get the IDs, run 'sites'.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var opts = { 
  'body': new S1MgmtApi.SitesSiteBulkPutSchema() // SitesSiteBulkPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitesUpdateBulkPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SitesSiteBulkPutSchema**](SitesSiteBulkPutSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSitessiteIdDelete"></a>
# **webApiSitessiteIdDelete**
> SuccessResponseSchema200 webApiSitessiteIdDelete(siteId)

Delete Site

Delete the Site of the given ID. To get the ID, run \"sites\". <br>You must have an Admin role with scope access that includes the Site.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitessiteIdDelete(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSitessiteIdExpireNowPost"></a>
# **webApiSitessiteIdExpireNowPost**
> SitesSiteSchema200 webApiSitessiteIdExpireNowPost(siteId)

Expire Site

Expire the Site of the given ID (run \"sites\" to get the ID). <br>You must have an Admin role with scope access that includes this Site.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitessiteIdExpireNowPost(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 

### Return type

[**SitesSiteSchema200**](SitesSiteSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSitessiteIdGet"></a>
# **webApiSitessiteIdGet**
> SitesSiteViewSchema200 webApiSitessiteIdGet(siteId)

Get Site by ID

Get the data of the Site of the ID. To get the ID, run \"sites\". <br>The response shows the Site expiration date, SKU, licenses (total and active), token, Account name and ID, who and when it was created and changed, and its status.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitessiteIdGet(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 

### Return type

[**SitesSiteViewSchema200**](SitesSiteViewSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSitessiteIdLocalAuthorizationGet"></a>
# **webApiSitessiteIdLocalAuthorizationGet**
> SitesGetSiteApprovalResponse200 webApiSitessiteIdLocalAuthorizationGet(siteId)

Get local upgrade site authorization

Get the time when authorization of local upgrades expires, and the number of Agents authorized for local upgrade, in this Site.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitessiteIdLocalAuthorizationGet(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 

### Return type

[**SitesGetSiteApprovalResponse200**](SitesGetSiteApprovalResponse200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSitessiteIdLocalAuthorizationPut"></a>
# **webApiSitessiteIdLocalAuthorizationPut**
> SitesPutSiteApprovalResponse200 webApiSitessiteIdLocalAuthorizationPut(siteId, opts)

Edit local upgrade site authorization

Edit when authorization of local upgrades expires. Returns the number of Agents authorized for local upgrade, in this Site.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.SitesPutSiteApprovalJsonSchema() // SitesPutSiteApprovalJsonSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitessiteIdLocalAuthorizationPut(siteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 
 **body** | [**SitesPutSiteApprovalJsonSchema**](SitesPutSiteApprovalJsonSchema.md)|  | [optional] 

### Return type

[**SitesPutSiteApprovalResponse200**](SitesPutSiteApprovalResponse200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSitessiteIdLocalUpgradeApprovedAgentsCsvGet"></a>
# **webApiSitessiteIdLocalUpgradeApprovedAgentsCsvGet**
> SitesGetSiteApprovalResponse200 webApiSitessiteIdLocalUpgradeApprovedAgentsCsvGet(siteId)

Get a CSV file of local upgrade site authorization data

Get a CSV file containing the Agents authorized for local upgrade, in this Site.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitessiteIdLocalUpgradeApprovedAgentsCsvGet(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 

### Return type

[**SitesGetSiteApprovalResponse200**](SitesGetSiteApprovalResponse200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSitessiteIdPut"></a>
# **webApiSitessiteIdPut**
> SitesSiteSchema200 webApiSitessiteIdPut(siteId, opts)

Update Site

Change the policy and properties of the Site given by ID. <br>To get the ID, run 'sites'.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.SitesSitePutSchema() // SitesSitePutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitessiteIdPut(siteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 
 **body** | [**SitesSitePutSchema**](SitesSitePutSchema.md)|  | [optional] 

### Return type

[**SitesSiteSchema200**](SitesSiteSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSitessiteIdReactivatePut"></a>
# **webApiSitessiteIdReactivatePut**
> SuccessResponseSchema200 webApiSitessiteIdReactivatePut(siteId, opts)

Reactivate Site

Reactivate an expired Site. <br>You must have an Admin role with scope access that includes this Site, and you must have a license for the Site. <br>To get the site_id, run \"sites\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.SitesReactivateSiteSchema() // SitesReactivateSiteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitessiteIdReactivatePut(siteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 
 **body** | [**SitesReactivateSiteSchema**](SitesReactivateSiteSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSitessiteIdRegenerateKeyPut"></a>
# **webApiSitessiteIdRegenerateKeyPut**
> SitesRegenerateKeySchema200 webApiSitessiteIdRegenerateKeyPut(siteId)

Regenerate Site Key

Regenerate the key for the given Site. <br>To get the site_id, use \"sites\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitessiteIdRegenerateKeyPut(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 

### Return type

[**SitesRegenerateKeySchema200**](SitesRegenerateKeySchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSitessiteIdRevertPolicyPut"></a>
# **webApiSitessiteIdRevertPolicyPut**
> SuccessResponseSchema200 webApiSitessiteIdRevertPolicyPut(siteId, opts)

Revert Policy

When a Site is created through the Console, it gets the Global policy. <br>If you change the policy and later want it set to the Global policy, use this command. <br>The site_id is required. You can get it from \"sites\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".

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
apiInstance.webApiSitessiteIdRevertPolicyPut(siteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 
 **body** | [**PoliciesSchemasRevertPolicySchema**](PoliciesSchemasRevertPolicySchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSitessiteIdTokenGet"></a>
# **webApiSitessiteIdTokenGet**
> SitesSiteTokenGenerationSchema200 webApiSitessiteIdTokenGet(siteId)

Get Site registration token by ID

Get the registration token of the Site of the ID.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SitesApi();

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSitessiteIdTokenGet(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 

### Return type

[**SitesSiteTokenGenerationSchema200**](SitesSiteTokenGenerationSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

