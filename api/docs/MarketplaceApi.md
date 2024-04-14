# S1MgmtApi.MarketplaceApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiPrivateSingularityMarketplaceAvailabilityGet**](MarketplaceApi.md#webApiPrivateSingularityMarketplaceAvailabilityGet) | **GET** /web/api/v2.1/private/singularity-marketplace/availability | Get Singularity Marketplace availability
[**webApiSingularityMarketplaceApplicationsCatalogGet**](MarketplaceApi.md#webApiSingularityMarketplaceApplicationsCatalogGet) | **GET** /web/api/v2.1/singularity-marketplace/applications-catalog | Get Applications Catalog
[**webApiSingularityMarketplaceApplicationsCatalogapplicationCatalogIdConfigGet**](MarketplaceApi.md#webApiSingularityMarketplaceApplicationsCatalogapplicationCatalogIdConfigGet) | **GET** /web/api/v2.1/singularity-marketplace/applications-catalog/{application_catalog_id}/config | Get Configuration Fields
[**webApiSingularityMarketplaceApplicationsDelete**](MarketplaceApi.md#webApiSingularityMarketplaceApplicationsDelete) | **DELETE** /web/api/v2.1/singularity-marketplace/applications | Delete Application
[**webApiSingularityMarketplaceApplicationsGet**](MarketplaceApi.md#webApiSingularityMarketplaceApplicationsGet) | **GET** /web/api/v2.1/singularity-marketplace/applications | Get Installed Applications
[**webApiSingularityMarketplaceApplicationsPost**](MarketplaceApi.md#webApiSingularityMarketplaceApplicationsPost) | **POST** /web/api/v2.1/singularity-marketplace/applications | Install Applications
[**webApiSingularityMarketplaceApplicationsPut**](MarketplaceApi.md#webApiSingularityMarketplaceApplicationsPut) | **PUT** /web/api/v2.1/singularity-marketplace/applications | Update Application Configuration
[**webApiSingularityMarketplaceApplicationsapplicationIdConfigGet**](MarketplaceApi.md#webApiSingularityMarketplaceApplicationsapplicationIdConfigGet) | **GET** /web/api/v2.1/singularity-marketplace/applications/{application_id}/config | Get Configuration fields for Catalog Application
[**webApiSingularityMarketplaceApplicationsmodePost**](MarketplaceApi.md#webApiSingularityMarketplaceApplicationsmodePost) | **POST** /web/api/v2.1/singularity-marketplace/applications/{mode} | Enable or Disable application


<a name="webApiPrivateSingularityMarketplaceAvailabilityGet"></a>
# **webApiPrivateSingularityMarketplaceAvailabilityGet**
> V21MarketplaceSchemaAvailabilityResponseSchema200 webApiPrivateSingularityMarketplaceAvailabilityGet(opts)

Get Singularity Marketplace availability

Returns Singularity Marketplace availability.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MarketplaceApi();

var opts = { 
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'scopes': ["scopes_example"], // [String] | Filter results by scope. Example: \"global\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiPrivateSingularityMarketplaceAvailabilityGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **scopes** | [**[String]**](String.md)| Filter results by scope. Example: \"global\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21MarketplaceSchemaAvailabilityResponseSchema200**](V21MarketplaceSchemaAvailabilityResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSingularityMarketplaceApplicationsCatalogGet"></a>
# **webApiSingularityMarketplaceApplicationsCatalogGet**
> V21MarketplaceSchemaApplicationsCatalogResponseSchemaMany200 webApiSingularityMarketplaceApplicationsCatalogGet(opts)

Get Applications Catalog

Get the Marketplace Application Catalog.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MarketplaceApi();

var opts = { 
  'categoryContains': ["categoryContains_example"], // [String] | Free-text filter by catalog application category (supports multiple values). Example: \"Service Pack 1\".
  'descriptionContains': ["descriptionContains_example"], // [String] | Free-text filter by catalog application description (supports multiple values). Example: \"Service Pack 1\".
  'query': ["query_example"], // [String] | Free-text filter by S1 query (supports multiple values). Example: \"Service Pack 1\".
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by catalog application name (supports multiple values). Example: \"Service Pack 1\".
  'id': ["id_example"] // [String] | Filter results by application catalog id. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSingularityMarketplaceApplicationsCatalogGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryContains** | [**[String]**](String.md)| Free-text filter by catalog application category (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **descriptionContains** | [**[String]**](String.md)| Free-text filter by catalog application description (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **query** | [**[String]**](String.md)| Free-text filter by S1 query (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **nameContains** | [**[String]**](String.md)| Free-text filter by catalog application name (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **id** | [**[String]**](String.md)| Filter results by application catalog id. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21MarketplaceSchemaApplicationsCatalogResponseSchemaMany200**](V21MarketplaceSchemaApplicationsCatalogResponseSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSingularityMarketplaceApplicationsCatalogapplicationCatalogIdConfigGet"></a>
# **webApiSingularityMarketplaceApplicationsCatalogapplicationCatalogIdConfigGet**
> V21MarketplaceSchemaApplicationCatalogConfigResponseSchema200 webApiSingularityMarketplaceApplicationsCatalogapplicationCatalogIdConfigGet(applicationCatalogId)

Get Configuration Fields

Get the Catalog Application Configuration Fields.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MarketplaceApi();

var applicationCatalogId = "applicationCatalogId_example"; // String | Application Catalog ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSingularityMarketplaceApplicationsCatalogapplicationCatalogIdConfigGet(applicationCatalogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationCatalogId** | **String**| Application Catalog ID. Example: \"225494730938493804\". | 

### Return type

[**V21MarketplaceSchemaApplicationCatalogConfigResponseSchema200**](V21MarketplaceSchemaApplicationCatalogConfigResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSingularityMarketplaceApplicationsDelete"></a>
# **webApiSingularityMarketplaceApplicationsDelete**
> AffectedResultsSchema200 webApiSingularityMarketplaceApplicationsDelete(opts)

Delete Application

Delete application integration from your Marketplace.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MarketplaceApi();

var opts = { 
  'body': new S1MgmtApi.V21MarketplaceSchemaApplicationDeleteSchema() // V21MarketplaceSchemaApplicationDeleteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSingularityMarketplaceApplicationsDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21MarketplaceSchemaApplicationDeleteSchema**](V21MarketplaceSchemaApplicationDeleteSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSingularityMarketplaceApplicationsGet"></a>
# **webApiSingularityMarketplaceApplicationsGet**
> V21MarketplaceSchemaApplicationViewSchemaMany200 webApiSingularityMarketplaceApplicationsGet(opts)

Get Installed Applications

Get the installed Marketplace applications for a scope specified.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MarketplaceApi();

var opts = { 
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'disablePagination': true, // Boolean | If true, all installed applications for requested scope will be returned
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'applicationCatalogId': ["applicationCatalogId_example"], // [String] | A list of catalog applications IDs. Example: \"225494730938493804,225494730938493915\".
  'query': ["query_example"], // [String] | Free-text filter by S1 query (supports multiple values). Example: \"Service Pack 1\".
  'cursor': "null", // String | Cursor position returned by the last request. Should be used for iterating over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'skip': 56, // Number | Skip first number of items (0-1000). For iterating over more than a 1000 items please use \"cursor\" instead. Example: \"150\".
  'creatorContains': ["creatorContains_example"], // [String] | Free-text filter by application creator (supports multiple values). Example: \"Service Pack 1\".
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by application name (supports multiple values). Example: \"Service Pack 1\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'scopes': ["scopes_example"], // [String] | Filter results by scope. Example: \"global\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'id': ["id_example"], // [String] | A list of applications IDs. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSingularityMarketplaceApplicationsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **disablePagination** | **Boolean**| If true, all installed applications for requested scope will be returned | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **applicationCatalogId** | [**[String]**](String.md)| A list of catalog applications IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | [**[String]**](String.md)| Free-text filter by S1 query (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **cursor** | **String**| Cursor position returned by the last request. Should be used for iterating over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). For iterating over more than a 1000 items please use \"cursor\" instead. Example: \"150\". | [optional] 
 **creatorContains** | [**[String]**](String.md)| Free-text filter by application creator (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **nameContains** | [**[String]**](String.md)| Free-text filter by application name (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **scopes** | [**[String]**](String.md)| Filter results by scope. Example: \"global\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time | [optional] [default to null]
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **id** | [**[String]**](String.md)| A list of applications IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21MarketplaceSchemaApplicationViewSchemaMany200**](V21MarketplaceSchemaApplicationViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSingularityMarketplaceApplicationsPost"></a>
# **webApiSingularityMarketplaceApplicationsPost**
> AffectedResultsSchema200 webApiSingularityMarketplaceApplicationsPost(opts)

Install Applications

Install application from the Application Catalog.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MarketplaceApi();

var opts = { 
  'body': new S1MgmtApi.V21MarketplaceSchemaPostApplicationSchema() // V21MarketplaceSchemaPostApplicationSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSingularityMarketplaceApplicationsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21MarketplaceSchemaPostApplicationSchema**](V21MarketplaceSchemaPostApplicationSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSingularityMarketplaceApplicationsPut"></a>
# **webApiSingularityMarketplaceApplicationsPut**
> AffectedResultsSchema200 webApiSingularityMarketplaceApplicationsPut(opts)

Update Application Configuration

Update installed application configuration.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MarketplaceApi();

var opts = { 
  'body': new S1MgmtApi.V21MarketplaceSchemaApplicationUpdateConfigSchema() // V21MarketplaceSchemaApplicationUpdateConfigSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSingularityMarketplaceApplicationsPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21MarketplaceSchemaApplicationUpdateConfigSchema**](V21MarketplaceSchemaApplicationUpdateConfigSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSingularityMarketplaceApplicationsapplicationIdConfigGet"></a>
# **webApiSingularityMarketplaceApplicationsapplicationIdConfigGet**
> V21MarketplaceSchemaApplicationConfigResponseSchema200 webApiSingularityMarketplaceApplicationsapplicationIdConfigGet(applicationId)

Get Configuration fields for Catalog Application

Returns The configuration schema for a requested Application Catalog.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MarketplaceApi();

var applicationId = "applicationId_example"; // String | Application ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSingularityMarketplaceApplicationsapplicationIdConfigGet(applicationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | **String**| Application ID. Example: \"225494730938493804\". | 

### Return type

[**V21MarketplaceSchemaApplicationConfigResponseSchema200**](V21MarketplaceSchemaApplicationConfigResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSingularityMarketplaceApplicationsmodePost"></a>
# **webApiSingularityMarketplaceApplicationsmodePost**
> AffectedResultsSchema200 webApiSingularityMarketplaceApplicationsmodePost(mode, opts)

Enable or Disable application

Use this command to enable or disable application integrations that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MarketplaceApi();

var mode = "mode_example"; // String | Mode

var opts = { 
  'body': new S1MgmtApi.V21MarketplaceSchemaEnableDisableApplicationSchema() // V21MarketplaceSchemaEnableDisableApplicationSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSingularityMarketplaceApplicationsmodePost(mode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| Mode | 
 **body** | [**V21MarketplaceSchemaEnableDisableApplicationSchema**](V21MarketplaceSchemaEnableDisableApplicationSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

