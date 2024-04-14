# S1MgmtApi.ThreatIntelligenceApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiPrivateInternalIocsGlobalExclusionsDelete**](ThreatIntelligenceApi.md#webApiPrivateInternalIocsGlobalExclusionsDelete) | **DELETE** /web/api/v2.1/private/internal/iocs/global-exclusions | 
[**webApiPrivateInternalIocsGlobalExclusionsGet**](ThreatIntelligenceApi.md#webApiPrivateInternalIocsGlobalExclusionsGet) | **GET** /web/api/v2.1/private/internal/iocs/global-exclusions | 
[**webApiPrivateInternalIocsGlobalExclusionsPost**](ThreatIntelligenceApi.md#webApiPrivateInternalIocsGlobalExclusionsPost) | **POST** /web/api/v2.1/private/internal/iocs/global-exclusions | 
[**webApiPrivateThreatIntelligenceAlertsalertIdIocsPost**](ThreatIntelligenceApi.md#webApiPrivateThreatIntelligenceAlertsalertIdIocsPost) | **POST** /web/api/v2.1/private/threat-intelligence/alerts/{alert_id}/iocs | Get IOC enrichment for alert
[**webApiPrivateThreatIntelligenceCustomAppConfigDelete**](ThreatIntelligenceApi.md#webApiPrivateThreatIntelligenceCustomAppConfigDelete) | **DELETE** /web/api/v2.1/private/threat-intelligence/custom-app-config | Delete custom config app
[**webApiPrivateThreatIntelligenceCustomAppConfigPost**](ThreatIntelligenceApi.md#webApiPrivateThreatIntelligenceCustomAppConfigPost) | **POST** /web/api/v2.1/private/threat-intelligence/custom-app-config | Update custom custom app configuration per scope
[**webApiPrivateThreatIntelligenceKnowledgeHuburiGet**](ThreatIntelligenceApi.md#webApiPrivateThreatIntelligenceKnowledgeHuburiGet) | **GET** /web/api/v2.1/private/threat-intelligence/knowledge-hub/{uri} | Get Knowledge hub data
[**webApiPrivateThreatIntelligenceThreatsthreatIdIndicatorsGet**](ThreatIntelligenceApi.md#webApiPrivateThreatIntelligenceThreatsthreatIdIndicatorsGet) | **GET** /web/api/v2.1/private/threat-intelligence/threats/{threat_id}/indicators | Get IOC enrichment for threat
[**webApiThreatIntelligenceIocsDelete**](ThreatIntelligenceApi.md#webApiThreatIntelligenceIocsDelete) | **DELETE** /web/api/v2.1/threat-intelligence/iocs | Delete IOCs
[**webApiThreatIntelligenceIocsGet**](ThreatIntelligenceApi.md#webApiThreatIntelligenceIocsGet) | **GET** /web/api/v2.1/threat-intelligence/iocs | Get IOCs
[**webApiThreatIntelligenceIocsPost**](ThreatIntelligenceApi.md#webApiThreatIntelligenceIocsPost) | **POST** /web/api/v2.1/threat-intelligence/iocs | Create IOCs
[**webApiThreatIntelligenceUserConfigDelete**](ThreatIntelligenceApi.md#webApiThreatIntelligenceUserConfigDelete) | **DELETE** /web/api/v2.1/threat-intelligence/user-config | Delete Threat Intelligence user config
[**webApiThreatIntelligenceUserConfigGet**](ThreatIntelligenceApi.md#webApiThreatIntelligenceUserConfigGet) | **GET** /web/api/v2.1/threat-intelligence/user-config | Get Threat Intelligence user config
[**webApiThreatIntelligenceUserConfigPost**](ThreatIntelligenceApi.md#webApiThreatIntelligenceUserConfigPost) | **POST** /web/api/v2.1/threat-intelligence/user-config | Create Threat Intelligence user config


<a name="webApiPrivateInternalIocsGlobalExclusionsDelete"></a>
# **webApiPrivateInternalIocsGlobalExclusionsDelete**
> AffectedResultsSchema200 webApiPrivateInternalIocsGlobalExclusionsDelete(opts)



Delete IOCs values from iocs_global_exclusions table.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var opts = { 
  'body': new S1MgmtApi.V21SchemasGlobalExclusionsSchema() // V21SchemasGlobalExclusionsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiPrivateInternalIocsGlobalExclusionsDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21SchemasGlobalExclusionsSchema**](V21SchemasGlobalExclusionsSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiPrivateInternalIocsGlobalExclusionsGet"></a>
# **webApiPrivateInternalIocsGlobalExclusionsGet**
> V21SchemasGlobalExclusionsDetailsMany200 webApiPrivateInternalIocsGlobalExclusionsGet()



Get the Threat Intelligence user config that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiPrivateInternalIocsGlobalExclusionsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V21SchemasGlobalExclusionsDetailsMany200**](V21SchemasGlobalExclusionsDetailsMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiPrivateInternalIocsGlobalExclusionsPost"></a>
# **webApiPrivateInternalIocsGlobalExclusionsPost**
> AffectedResultsSchema200 webApiPrivateInternalIocsGlobalExclusionsPost(opts)



Post IOCs values to iocs_global_exclusions table.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var opts = { 
  'body': new S1MgmtApi.V21SchemasGlobalExclusionsSchema() // V21SchemasGlobalExclusionsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiPrivateInternalIocsGlobalExclusionsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21SchemasGlobalExclusionsSchema**](V21SchemasGlobalExclusionsSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiPrivateThreatIntelligenceAlertsalertIdIocsPost"></a>
# **webApiPrivateThreatIntelligenceAlertsalertIdIocsPost**
> webApiPrivateThreatIntelligenceAlertsalertIdIocsPost(alertId, opts)

Get IOC enrichment for alert

Get ioc enrichment of a specified alert and the events associated with the alert.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var alertId = "alertId_example"; // String | UAM Alert ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.V21SchemasPostUamAlertObservablesDataSchema() // V21SchemasPostUamAlertObservablesDataSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiPrivateThreatIntelligenceAlertsalertIdIocsPost(alertId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alertId** | **String**| UAM Alert ID. Example: \"225494730938493804\". | 
 **body** | [**V21SchemasPostUamAlertObservablesDataSchema**](V21SchemasPostUamAlertObservablesDataSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiPrivateThreatIntelligenceCustomAppConfigDelete"></a>
# **webApiPrivateThreatIntelligenceCustomAppConfigDelete**
> AffectedResultsSchema200 webApiPrivateThreatIntelligenceCustomAppConfigDelete(opts)

Delete custom config app

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var opts = { 
  'body': new S1MgmtApi.V21SchemasDeleteCustomAppConfigurationSchema() // V21SchemasDeleteCustomAppConfigurationSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiPrivateThreatIntelligenceCustomAppConfigDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21SchemasDeleteCustomAppConfigurationSchema**](V21SchemasDeleteCustomAppConfigurationSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiPrivateThreatIntelligenceCustomAppConfigPost"></a>
# **webApiPrivateThreatIntelligenceCustomAppConfigPost**
> AffectedResultsSchema200 webApiPrivateThreatIntelligenceCustomAppConfigPost(opts)

Update custom custom app configuration per scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var opts = { 
  'body': new S1MgmtApi.V21SchemasPostCustomAppConfigurationSchema() // V21SchemasPostCustomAppConfigurationSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiPrivateThreatIntelligenceCustomAppConfigPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21SchemasPostCustomAppConfigurationSchema**](V21SchemasPostCustomAppConfigurationSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiPrivateThreatIntelligenceKnowledgeHuburiGet"></a>
# **webApiPrivateThreatIntelligenceKnowledgeHuburiGet**
> webApiPrivateThreatIntelligenceKnowledgeHuburiGet(uri)

Get Knowledge hub data

Get Threat intelligence knowledge hub related data.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var uri = "uri_example"; // String | proxy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiPrivateThreatIntelligenceKnowledgeHuburiGet(uri, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uri** | **String**| proxy | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiPrivateThreatIntelligenceThreatsthreatIdIndicatorsGet"></a>
# **webApiPrivateThreatIntelligenceThreatsthreatIdIndicatorsGet**
> webApiPrivateThreatIntelligenceThreatsthreatIdIndicatorsGet(threatId)

Get IOC enrichment for threat

Get ioc enrichment of a specified threat and the events associated with the threat.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var threatId = "threatId_example"; // String | Threat ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiPrivateThreatIntelligenceThreatsthreatIdIndicatorsGet(threatId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threatId** | **String**| Threat ID. Example: \"225494730938493804\". | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiThreatIntelligenceIocsDelete"></a>
# **webApiThreatIntelligenceIocsDelete**
> AffectedResultsSchema200 webApiThreatIntelligenceIocsDelete(opts)

Delete IOCs

Delete an IoC from the Threat Intelligence database that matches a filter using the accountID and one other field.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var opts = { 
  'body': new S1MgmtApi.V21SchemasIOCDeleteSchema() // V21SchemasIOCDeleteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatIntelligenceIocsDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21SchemasIOCDeleteSchema**](V21SchemasIOCDeleteSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatIntelligenceIocsGet"></a>
# **webApiThreatIntelligenceIocsGet**
> V21SchemasGetIndicatorSchemaMany200 webApiThreatIntelligenceIocsGet(opts)

Get IOCs

Get the IOCs of a specified Account that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var opts = { 
  'descriptionContains': ["descriptionContains_example"], // [String] | Free-text filter by the description of the indicator (supports multiple values). Example: \"Malicious-activity\".
  'uploadTimeGt': new Date("2013-10-20T19:20:30+01:00"), // Date | The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB greater than. Example: \"2022-07-13T20:33:29.007906Z\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | The time at which the indicator was last updated in SentinelOne DB  greater than. Example: \"2021-07-13T20:33:29.007906Z\".
  'categoryIn': "categoryIn_example", // String | The categories of the Threat Intelligence indicator, e.g.  the malware type associated with the IOC
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | The time at which the indicator was last updated in SentinelOne DB  greater or equal than. Example: \"2021-07-13T20:33:29.007906Z\".
  'creatorContains': ["creatorContains_example"], // [String] | Free-text filter by the user uploaded the Threat Intelligence indicator (supports multiple values). Example: \"admin@sentinelone.com\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'creationTimeGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Creation Time as set by the user greater or equal than. Example: \"2021-07-13T20:33:29.007906Z\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'creationTimeGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Creation Time as set by the user greater than. Example: \"2021-07-12T20:33:29.007906Z\".
  'type': "type_example", // String | The type of the Threat Intelligence indicator. Example: \"IPv4\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'creationTimeLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Creation Time as set by the user lesser or equal than. Example: \"2021-07-11T20:33:29.007906Z\".
  'creationTimeLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Creation Time as set by the user lesser than. Example: \"2021-07-13T20:33:29.007906Z\".
  'batchId': "batchId_example", // String | Unique ID of the uploaded indicators batch. Example: \"atmtn000000028a881bcf939dc6d92ab55443\".
  'externalId': "externalId_example", // String | The unique identifier of the indicator as provided by the Threat Intelligence source. Example: \"e277603e-1060-5ad4-9937-c26c97f1ca68\".
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | The time at which the indicator was last updated in SentinelOne DB  lesser than. Example: \"2021-07-13T20:33:29.007906Z\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | The time at which the indicator was last updated in SentinelOne DB  lesser or equal than. Example: \"2021-07-13T20:33:29.007906Z\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"4,2,6,4,1,8,0,3,0,2,1,2,0,7,3,7,6,2\".
  'source': ["source_example"], // [String] | List of the sources of the identified Threat Intelligence indicator. Example: \"AlienVault\".
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'value': "value_example", // String | The value of the Threat Intelligence indicator. Example: \"175.45.176.1\".
  'uploadTimeLte': new Date("2013-10-20T19:20:30+01:00"), // Date | The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB lesser or equal than. Example: \"2022-07-13T20:33:29.007906Z\".
  'uuids': ["uuids_example"], // [String] | A list of unique Ids of the parent process of the indicator of compromise. Example: \"2,c,f,f,a,e,8,7,1,1,9,7,f,2,0,d,8,6,4,f,e,8,3,6,3,e,e,e,6,6,5,1\".
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by the Indicator name (supports multiple values). Example: \"foo.dll\".
  'uploadTimeLt': new Date("2013-10-20T19:20:30+01:00"), // Date | The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB lesser than. Example: \"2021-07-13T20:33:29.007906Z\".
  'uploadTimeGte': new Date("2013-10-20T19:20:30+01:00") // Date | The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB greater or equal than. Example: \"2022-07-13T20:33:29.007906Z\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatIntelligenceIocsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **descriptionContains** | [**[String]**](String.md)| Free-text filter by the description of the indicator (supports multiple values). Example: \"Malicious-activity\". | [optional] 
 **uploadTimeGt** | **Date**| The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB greater than. Example: \"2022-07-13T20:33:29.007906Z\". | [optional] 
 **updatedAtGt** | **Date**| The time at which the indicator was last updated in SentinelOne DB  greater than. Example: \"2021-07-13T20:33:29.007906Z\". | [optional] 
 **categoryIn** | **String**| The categories of the Threat Intelligence indicator, e.g.  the malware type associated with the IOC | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **updatedAtGte** | **Date**| The time at which the indicator was last updated in SentinelOne DB  greater or equal than. Example: \"2021-07-13T20:33:29.007906Z\". | [optional] 
 **creatorContains** | [**[String]**](String.md)| Free-text filter by the user uploaded the Threat Intelligence indicator (supports multiple values). Example: \"admin@sentinelone.com\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **creationTimeGte** | **Date**| Creation Time as set by the user greater or equal than. Example: \"2021-07-13T20:33:29.007906Z\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **creationTimeGt** | **Date**| Creation Time as set by the user greater than. Example: \"2021-07-12T20:33:29.007906Z\". | [optional] 
 **type** | **String**| The type of the Threat Intelligence indicator. Example: \"IPv4\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **creationTimeLte** | **Date**| Creation Time as set by the user lesser or equal than. Example: \"2021-07-11T20:33:29.007906Z\". | [optional] 
 **creationTimeLt** | **Date**| Creation Time as set by the user lesser than. Example: \"2021-07-13T20:33:29.007906Z\". | [optional] 
 **batchId** | **String**| Unique ID of the uploaded indicators batch. Example: \"atmtn000000028a881bcf939dc6d92ab55443\". | [optional] 
 **externalId** | **String**| The unique identifier of the indicator as provided by the Threat Intelligence source. Example: \"e277603e-1060-5ad4-9937-c26c97f1ca68\". | [optional] 
 **updatedAtLt** | **Date**| The time at which the indicator was last updated in SentinelOne DB  lesser than. Example: \"2021-07-13T20:33:29.007906Z\". | [optional] 
 **updatedAtLte** | **Date**| The time at which the indicator was last updated in SentinelOne DB  lesser or equal than. Example: \"2021-07-13T20:33:29.007906Z\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"4,2,6,4,1,8,0,3,0,2,1,2,0,7,3,7,6,2\". | [optional] 
 **source** | [**[String]**](String.md)| List of the sources of the identified Threat Intelligence indicator. Example: \"AlienVault\". | [optional] 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **value** | **String**| The value of the Threat Intelligence indicator. Example: \"175.45.176.1\". | [optional] 
 **uploadTimeLte** | **Date**| The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB lesser or equal than. Example: \"2022-07-13T20:33:29.007906Z\". | [optional] 
 **uuids** | [**[String]**](String.md)| A list of unique Ids of the parent process of the indicator of compromise. Example: \"2,c,f,f,a,e,8,7,1,1,9,7,f,2,0,d,8,6,4,f,e,8,3,6,3,e,e,e,6,6,5,1\". | [optional] 
 **nameContains** | [**[String]**](String.md)| Free-text filter by the Indicator name (supports multiple values). Example: \"foo.dll\". | [optional] 
 **uploadTimeLt** | **Date**| The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB lesser than. Example: \"2021-07-13T20:33:29.007906Z\". | [optional] 
 **uploadTimeGte** | **Date**| The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB greater or equal than. Example: \"2022-07-13T20:33:29.007906Z\". | [optional] 

### Return type

[**V21SchemasGetIndicatorSchemaMany200**](V21SchemasGetIndicatorSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiThreatIntelligenceIocsPost"></a>
# **webApiThreatIntelligenceIocsPost**
> V21SchemasPostIndicatorSchemaMany200 webApiThreatIntelligenceIocsPost(opts)

Create IOCs

Add an IoC to the Threat Intelligence database. <br>These values under data are required fields: \"source\", \"type\", \"value\", and \"method\". <br>\"Type\" and \"method\" must be in upper case.<br>The \"validUntil\" field is mandatory, and must contain a date, for example, 2021-03-20 09:14:47.779000. \"validUntil\" determines when the IOC expires.<br>If the expiration date (\"validUntil\") is left blank, by default it will be the upload date plus a default offset value:<br>- 14 days for IPs<br>- 90 days for URLs and domains<br>- 180 days for file hashes (SHA1, SHA256, and MD5)<br>The maximum offset values allowed are:<br>- 30 days for IPs<br>- 180 days for URLs and Domains<br>- 180 days for hashes (SHA1, SHA256, and MD5)<br>The upload date is when the API gets a request to create an IOC.<br>If the expiration date is later than the upload date plus the the maximum offset value allowed, it will be adjusted to the upload date plus the maximum offset value allowed.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var opts = { 
  'body': new S1MgmtApi.V21SchemasPostThreatIntelligenceSchema() // V21SchemasPostThreatIntelligenceSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatIntelligenceIocsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21SchemasPostThreatIntelligenceSchema**](V21SchemasPostThreatIntelligenceSchema.md)|  | [optional] 

### Return type

[**V21SchemasPostIndicatorSchemaMany200**](V21SchemasPostIndicatorSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatIntelligenceUserConfigDelete"></a>
# **webApiThreatIntelligenceUserConfigDelete**
> AffectedResultsSchema200 webApiThreatIntelligenceUserConfigDelete(opts)

Delete Threat Intelligence user config

Delete Threat Intelligence user config that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var opts = { 
  'body': new S1MgmtApi.V21SchemasUserConfigFilterSchema() // V21SchemasUserConfigFilterSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatIntelligenceUserConfigDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21SchemasUserConfigFilterSchema**](V21SchemasUserConfigFilterSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatIntelligenceUserConfigGet"></a>
# **webApiThreatIntelligenceUserConfigGet**
> V21SchemasGetUserConfigSchemaMany200 webApiThreatIntelligenceUserConfigGet(opts)

Get Threat Intelligence user config

Get the Threat Intelligence user config that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var opts = { 
  'tenant': true, // Boolean | Indicates a tenant scope request
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"4,2,6,4,1,8,0,3,0,2,1,2,0,7,3,7,6,2\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatIntelligenceUserConfigGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"4,2,6,4,1,8,0,3,0,2,1,2,0,7,3,7,6,2\". | [optional] 

### Return type

[**V21SchemasGetUserConfigSchemaMany200**](V21SchemasGetUserConfigSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiThreatIntelligenceUserConfigPost"></a>
# **webApiThreatIntelligenceUserConfigPost**
> V21SchemasGetUserConfigSchemaMany200 webApiThreatIntelligenceUserConfigPost(opts)

Create Threat Intelligence user config

Create Threat Intelligence user config.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatIntelligenceApi();

var opts = { 
  'body': new S1MgmtApi.V21SchemasPostUserConfigSchema() // V21SchemasPostUserConfigSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatIntelligenceUserConfigPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21SchemasPostUserConfigSchema**](V21SchemasPostUserConfigSchema.md)|  | [optional] 

### Return type

[**V21SchemasGetUserConfigSchemaMany200**](V21SchemasGetUserConfigSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

