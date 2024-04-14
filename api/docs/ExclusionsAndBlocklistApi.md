# S1MgmtApi.ExclusionsAndBlocklistApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiExclusionsDelete**](ExclusionsAndBlocklistApi.md#webApiExclusionsDelete) | **DELETE** /web/api/v2.1/exclusions | Delete Exclusions
[**webApiExclusionsGet**](ExclusionsAndBlocklistApi.md#webApiExclusionsGet) | **GET** /web/api/v2.1/exclusions | Get Exclusions
[**webApiExclusionsImportPost**](ExclusionsAndBlocklistApi.md#webApiExclusionsImportPost) | **POST** /web/api/v2.1/exclusions/import | Import Exclusions
[**webApiExclusionsPost**](ExclusionsAndBlocklistApi.md#webApiExclusionsPost) | **POST** /web/api/v2.1/exclusions | Create Exclusion
[**webApiExclusionsPut**](ExclusionsAndBlocklistApi.md#webApiExclusionsPut) | **PUT** /web/api/v2.1/exclusions | Update Exclusions
[**webApiExclusionsReportreportIdGet**](ExclusionsAndBlocklistApi.md#webApiExclusionsReportreportIdGet) | **GET** /web/api/v2.1/exclusions/report/{report_id} | Get Exclusion Import Validation Report
[**webApiExclusionsValidatePost**](ExclusionsAndBlocklistApi.md#webApiExclusionsValidatePost) | **POST** /web/api/v2.1/exclusions/validate | Validate Exclusion Item
[**webApiExportExclusionsGet**](ExclusionsAndBlocklistApi.md#webApiExportExclusionsGet) | **GET** /web/api/v2.1/export/exclusions | Export Exclusions
[**webApiExportRestrictionsGet**](ExclusionsAndBlocklistApi.md#webApiExportRestrictionsGet) | **GET** /web/api/v2.1/export/restrictions | Export Blocklist
[**webApiRestrictionsDelete**](ExclusionsAndBlocklistApi.md#webApiRestrictionsDelete) | **DELETE** /web/api/v2.1/restrictions | Delete Blocklist Item
[**webApiRestrictionsGet**](ExclusionsAndBlocklistApi.md#webApiRestrictionsGet) | **GET** /web/api/v2.1/restrictions | Get Blocklist
[**webApiRestrictionsImportPost**](ExclusionsAndBlocklistApi.md#webApiRestrictionsImportPost) | **POST** /web/api/v2.1/restrictions/import | Import Blocklist Items
[**webApiRestrictionsPost**](ExclusionsAndBlocklistApi.md#webApiRestrictionsPost) | **POST** /web/api/v2.1/restrictions | Create Blocklist Item
[**webApiRestrictionsPut**](ExclusionsAndBlocklistApi.md#webApiRestrictionsPut) | **PUT** /web/api/v2.1/restrictions | Update Blocklist Item
[**webApiRestrictionsReportreportIdGet**](ExclusionsAndBlocklistApi.md#webApiRestrictionsReportreportIdGet) | **GET** /web/api/v2.1/restrictions/report/{report_id} | Get Blocklist Import Validation Report
[**webApiRestrictionsValidatePost**](ExclusionsAndBlocklistApi.md#webApiRestrictionsValidatePost) | **POST** /web/api/v2.1/restrictions/validate | Validate Blocklist Item


<a name="webApiExclusionsDelete"></a>
# **webApiExclusionsDelete**
> AffectedResultsSchema200 webApiExclusionsDelete(opts)

Delete Exclusions

Every Exclusion opens a possible security hole. If you decide that an Exclusion (or multiple Exclusions) is not required, use this command to delete it. To get the ID of the Exclusion to delete, run the \"exclusions\" command.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var opts = { 
  'body': new S1MgmtApi.ExclusionsSchemasDeleteExclusionSchema() // ExclusionsSchemasDeleteExclusionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiExclusionsDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExclusionsSchemasDeleteExclusionSchema**](ExclusionsSchemasDeleteExclusionSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiExclusionsGet"></a>
# **webApiExclusionsGet**
> ExclusionsSchemasExclusionSchemaGetMany200 webApiExclusionsGet(opts)

Get Exclusions

Get a list of all the Exclusions that match the filter. <br>Note: To filter the results for a scope: <br>* Global - Make sure \"tenant\" is \"true\" and no other scope ID is given.<br>* Account - Make sure \"tenant\" is \"false\" and at least one Account ID is given.<br>* Site - Make sure \"tenant\" is \"false\" and at least one Site ID is given.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'unified': true, // Boolean | Unified
  'includeChildren': true, // Boolean | Return filters from children scope levels (Default: false)
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'ids': ["ids_example"], // [String] | List of IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes
  'inAppInventory': true, // Boolean | Found or Not found - indicates if this exclusion is related to an application found in the scope's Application Inventory.
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'valueContains': ["valueContains_example"], // [String] | Free-text filter by value
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'source': ["source_example"], // [String] | List sources to filter by. Example: \"user\".
  'osTypes': ["osTypes_example"], // [String] | List of Os types to filter by. Example: \"windows\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'recommendations': ["recommendations_example"], // [String] | List of recommendations to filter by. Example: \"Not recommended\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'pathExclusionTypes': ["pathExclusionTypes_example"], // [String] | List of excluded paths in an exclusion (Path exclusions only). Example: \"file\".
  'imported': true, // Boolean | indication whether the exclusion was imported by a bulk operation or not
  'value': "value_example", // String | Value
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'includeParents': true, // Boolean | Return filters from parent scope levels (Default: false)
  'userContains': ["userContains_example"], // [String] | Free-text filter by user name
  'type': "type_example", // String | Type. Example: \"path\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'createdAtBetween': "createdAtBetween_example", // String | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'updatedAtBetween': "updatedAtBetween_example", // String | Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'descriptionContains': ["descriptionContains_example"], // [String] | Free-text filter by description
  'modes': ["modes_example"], // [String] | List of modes to filter by (Path exclusions only). Example: \"suppress\".
  'userIds': ["userIds_example"], // [String] | List of user ids to filter by. Example: \"225494730938493804,225494730938493915\".
  'types': ["types_example"], // [String] | Type in. Example: \"path\".
  'applicationNameContains': ["applicationNameContains_example"], // [String] | Free-text filter by application name
  'modeType': "modeType_example" // String | Agent interaction \\ Suppression. Example: \"all\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiExclusionsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **createdAtGt** | **Date**| Created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **unified** | **Boolean**| Unified | [optional] 
 **includeChildren** | **Boolean**| Return filters from children scope levels (Default: false) | [optional] 
 **updatedAtLt** | **Date**| Updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **ids** | [**[String]**](String.md)| List of IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes | [optional] 
 **inAppInventory** | **Boolean**| Found or Not found - indicates if this exclusion is related to an application found in the scope's Application Inventory. | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **createdAtLt** | **Date**| Created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **valueContains** | [**[String]**](String.md)| Free-text filter by value | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **updatedAtGte** | **Date**| Updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **source** | [**[String]**](String.md)| List sources to filter by. Example: \"user\". | [optional] 
 **osTypes** | [**[String]**](String.md)| List of Os types to filter by. Example: \"windows\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **recommendations** | [**[String]**](String.md)| List of recommendations to filter by. Example: \"Not recommended\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **updatedAtGt** | **Date**| Updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **pathExclusionTypes** | [**[String]**](String.md)| List of excluded paths in an exclusion (Path exclusions only). Example: \"file\". | [optional] 
 **imported** | **Boolean**| indication whether the exclusion was imported by a bulk operation or not | [optional] 
 **value** | **String**| Value | [optional] 
 **createdAtLte** | **Date**| Created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **includeParents** | **Boolean**| Return filters from parent scope levels (Default: false) | [optional] 
 **userContains** | [**[String]**](String.md)| Free-text filter by user name | [optional] 
 **type** | **String**| Type. Example: \"path\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **createdAtBetween** | **String**| Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **updatedAtLte** | **Date**| Updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **updatedAtBetween** | **String**| Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **createdAtGte** | **Date**| Created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **descriptionContains** | [**[String]**](String.md)| Free-text filter by description | [optional] 
 **modes** | [**[String]**](String.md)| List of modes to filter by (Path exclusions only). Example: \"suppress\". | [optional] 
 **userIds** | [**[String]**](String.md)| List of user ids to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **types** | [**[String]**](String.md)| Type in. Example: \"path\". | [optional] 
 **applicationNameContains** | [**[String]**](String.md)| Free-text filter by application name | [optional] 
 **modeType** | **String**| Agent interaction \\ Suppression. Example: \"all\". | [optional] 

### Return type

[**ExclusionsSchemasExclusionSchemaGetMany200**](ExclusionsSchemasExclusionSchemaGetMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiExclusionsImportPost"></a>
# **webApiExclusionsImportPost**
> ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200 webApiExclusionsImportPost(file, opts)

Import Exclusions

Upload a CSV file that contains exclusion entries to import to a scope in your Management

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var file = "/path/to/file.txt"; // File | The input CSV file

var opts = { 
  'filter': "filter_example" // String | The details of the scope where the entities will be imported, for example:  For Global - '{\"tenant\":true}' For an Account - '{\"accountIds\": [\"225494730938493804\"]}' For a Site  - '{\"siteIds\": [\"225494730938493804\"]}' For a Group - '{\"groupIds\": [\"225494730938493804\"]}'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiExclusionsImportPost(file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The input CSV file | 
 **filter** | **String**| The details of the scope where the entities will be imported, for example:  For Global - '{\"tenant\":true}' For an Account - '{\"accountIds\": [\"225494730938493804\"]}' For a Site  - '{\"siteIds\": [\"225494730938493804\"]}' For a Group - '{\"groupIds\": [\"225494730938493804\"]}' | [optional] 

### Return type

[**ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200**](ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="webApiExclusionsPost"></a>
# **webApiExclusionsPost**
> ExclusionsSchemasExclusionSchemaMany200 webApiExclusionsPost(opts)

Create Exclusion

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

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var opts = { 
  'body': new S1MgmtApi.ExclusionsSchemasPostExclusionSchema() // ExclusionsSchemasPostExclusionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiExclusionsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExclusionsSchemasPostExclusionSchema**](ExclusionsSchemasPostExclusionSchema.md)|  | [optional] 

### Return type

[**ExclusionsSchemasExclusionSchemaMany200**](ExclusionsSchemasExclusionSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiExclusionsPut"></a>
# **webApiExclusionsPut**
> ExclusionsSchemasExclusionSchemaMany200 webApiExclusionsPut(opts)

Update Exclusions

Change the properties of an Exclusion through the data fields. To get the original data, run \"exclusions\" with a filter to give the item you want.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var opts = { 
  'body': new S1MgmtApi.ExclusionsSchemasPutExclusionSchema() // ExclusionsSchemasPutExclusionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiExclusionsPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExclusionsSchemasPutExclusionSchema**](ExclusionsSchemasPutExclusionSchema.md)|  | [optional] 

### Return type

[**ExclusionsSchemasExclusionSchemaMany200**](ExclusionsSchemasExclusionSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiExclusionsReportreportIdGet"></a>
# **webApiExclusionsReportreportIdGet**
> webApiExclusionsReportreportIdGet(reportId)

Get Exclusion Import Validation Report

Get the  Validation Report generated for the import to help you fix entries that did not import successfully

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var reportId = "reportId_example"; // String | The ID of the requested Validation Report. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExclusionsReportreportIdGet(reportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| The ID of the requested Validation Report. Example: \"225494730938493804\". | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiExclusionsValidatePost"></a>
# **webApiExclusionsValidatePost**
> ExclusionsSchemasValidateExclusionRestrictionOutputSchema200 webApiExclusionsValidatePost(opts)

Validate Exclusion Item

Check if an exclusion is on the list of SentinelOne items that are \"Not Allowed\" or \"Not Recommended\". This API returns one of the following statuses:<br> * Not Recommended: This item is not recommended by SentinelOne because it decreases security. For example, If you accidentally exclude a path that is too broad, malware can enter your environment.<br>* Not Allowed: This exclusion can harm the product and lead to unexpected functionality. From version North Pole SP3 you are prevented from creating Not Allowed exclusions.* None: This item is not on the list of SentinelOne items that are \"Not Allowed\" or \"Not Recommended\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var opts = { 
  'body': new S1MgmtApi.ExclusionsSchemasValidateExclusionSchema() // ExclusionsSchemasValidateExclusionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiExclusionsValidatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExclusionsSchemasValidateExclusionSchema**](ExclusionsSchemasValidateExclusionSchema.md)|  | [optional] 

### Return type

[**ExclusionsSchemasValidateExclusionRestrictionOutputSchema200**](ExclusionsSchemasValidateExclusionRestrictionOutputSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiExportExclusionsGet"></a>
# **webApiExportExclusionsGet**
> webApiExportExclusionsGet(opts)

Export Exclusions

Get a csv of all the items in the Exclusions that match the filter. <br>Note: To see items from the Global Exclusion scope, make sure \"tenant\" is \"true\" and no other scope ID is given.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var opts = { 
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'unified': true, // Boolean | Unified
  'includeChildren': true, // Boolean | Return filters from children scope levels (Default: false)
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes
  'ids': ["ids_example"], // [String] | List of IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'inAppInventory': true, // Boolean | Found or Not found - indicates if this exclusion is related to an application found in the scope's Application Inventory.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'valueContains': ["valueContains_example"], // [String] | Free-text filter by value
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'source': ["source_example"], // [String] | List sources to filter by. Example: \"user\".
  'osTypes': ["osTypes_example"], // [String] | List of Os types to filter by. Example: \"windows\".
  'recommendations': ["recommendations_example"], // [String] | List of recommendations to filter by. Example: \"Not recommended\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'pathExclusionTypes': ["pathExclusionTypes_example"], // [String] | List of excluded paths in an exclusion (Path exclusions only). Example: \"file\".
  'imported': true, // Boolean | indication whether the exclusion was imported by a bulk operation or not
  'value': "value_example", // String | Value
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'includeParents': true, // Boolean | Return filters from parent scope levels (Default: false)
  'userContains': ["userContains_example"], // [String] | Free-text filter by user name
  'type': "type_example", // String | Type. Example: \"path\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'createdAtBetween': "createdAtBetween_example", // String | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'updatedAtBetween': "updatedAtBetween_example", // String | Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'descriptionContains': ["descriptionContains_example"], // [String] | Free-text filter by description
  'modes': ["modes_example"], // [String] | List of modes to filter by (Path exclusions only). Example: \"suppress\".
  'userIds': ["userIds_example"], // [String] | List of user ids to filter by. Example: \"225494730938493804,225494730938493915\".
  'types': ["types_example"], // [String] | Type in. Example: \"path\".
  'applicationNameContains': ["applicationNameContains_example"], // [String] | Free-text filter by application name
  'modeType': "modeType_example" // String | Agent interaction \\ Suppression. Example: \"all\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExportExclusionsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAtGt** | **Date**| Created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **unified** | **Boolean**| Unified | [optional] 
 **includeChildren** | **Boolean**| Return filters from children scope levels (Default: false) | [optional] 
 **updatedAtLt** | **Date**| Updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes | [optional] 
 **ids** | [**[String]**](String.md)| List of IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **inAppInventory** | **Boolean**| Found or Not found - indicates if this exclusion is related to an application found in the scope's Application Inventory. | [optional] 
 **createdAtLt** | **Date**| Created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **valueContains** | [**[String]**](String.md)| Free-text filter by value | [optional] 
 **updatedAtGte** | **Date**| Updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **source** | [**[String]**](String.md)| List sources to filter by. Example: \"user\". | [optional] 
 **osTypes** | [**[String]**](String.md)| List of Os types to filter by. Example: \"windows\". | [optional] 
 **recommendations** | [**[String]**](String.md)| List of recommendations to filter by. Example: \"Not recommended\". | [optional] 
 **updatedAtGt** | **Date**| Updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **pathExclusionTypes** | [**[String]**](String.md)| List of excluded paths in an exclusion (Path exclusions only). Example: \"file\". | [optional] 
 **imported** | **Boolean**| indication whether the exclusion was imported by a bulk operation or not | [optional] 
 **value** | **String**| Value | [optional] 
 **createdAtLte** | **Date**| Created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **includeParents** | **Boolean**| Return filters from parent scope levels (Default: false) | [optional] 
 **userContains** | [**[String]**](String.md)| Free-text filter by user name | [optional] 
 **type** | **String**| Type. Example: \"path\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **createdAtBetween** | **String**| Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **updatedAtLte** | **Date**| Updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **updatedAtBetween** | **String**| Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **createdAtGte** | **Date**| Created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **descriptionContains** | [**[String]**](String.md)| Free-text filter by description | [optional] 
 **modes** | [**[String]**](String.md)| List of modes to filter by (Path exclusions only). Example: \"suppress\". | [optional] 
 **userIds** | [**[String]**](String.md)| List of user ids to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **types** | [**[String]**](String.md)| Type in. Example: \"path\". | [optional] 
 **applicationNameContains** | [**[String]**](String.md)| Free-text filter by application name | [optional] 
 **modeType** | **String**| Agent interaction \\ Suppression. Example: \"all\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiExportRestrictionsGet"></a>
# **webApiExportRestrictionsGet**
> webApiExportRestrictionsGet(opts)

Export Blocklist

Get a csv of all the items in the Blocklist that match the filter. <br>Note: To see items from the Global Blocklist, make sure \"tenant\" is \"true\" and no other scope ID is given.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var opts = { 
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'unified': true, // Boolean | Unified
  'includeChildren': true, // Boolean | Return filters from children scope levels (Default: false)
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes
  'ids': ["ids_example"], // [String] | List of IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'valueContains': ["valueContains_example"], // [String] | Free-text filter by value
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'source': ["source_example"], // [String] | List sources to filter by. Example: \"user\".
  'osTypes': ["osTypes_example"], // [String] | List of Os types to filter by. Example: \"windows\".
  'recommendations': ["recommendations_example"], // [String] | List of recommendations to filter by. Example: \"Not recommended\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'imported': true, // Boolean | indication whether the hash was imported by a bulk operation or not
  'value': "value_example", // String | Value
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'includeParents': true, // Boolean | Return filters from parent scope levels (Default: false)
  'userContains': ["userContains_example"], // [String] | Free-text filter by user name
  'type': "black_hash", // String | Type. Example: \"black_hash\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'createdAtBetween': "createdAtBetween_example", // String | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'updatedAtBetween': "updatedAtBetween_example", // String | Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'descriptionContains': ["descriptionContains_example"], // [String] | Free-text filter by description
  'userIds': ["userIds_example"], // [String] | List of user ids to filter by. Example: \"225494730938493804,225494730938493915\".
  'types': ["types_example"] // [String] | Type in. Example: \"black_hash\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExportRestrictionsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAtGt** | **Date**| Created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **unified** | **Boolean**| Unified | [optional] 
 **includeChildren** | **Boolean**| Return filters from children scope levels (Default: false) | [optional] 
 **updatedAtLt** | **Date**| Updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes | [optional] 
 **ids** | [**[String]**](String.md)| List of IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **createdAtLt** | **Date**| Created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **valueContains** | [**[String]**](String.md)| Free-text filter by value | [optional] 
 **updatedAtGte** | **Date**| Updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **source** | [**[String]**](String.md)| List sources to filter by. Example: \"user\". | [optional] 
 **osTypes** | [**[String]**](String.md)| List of Os types to filter by. Example: \"windows\". | [optional] 
 **recommendations** | [**[String]**](String.md)| List of recommendations to filter by. Example: \"Not recommended\". | [optional] 
 **updatedAtGt** | **Date**| Updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **imported** | **Boolean**| indication whether the hash was imported by a bulk operation or not | [optional] 
 **value** | **String**| Value | [optional] 
 **createdAtLte** | **Date**| Created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **includeParents** | **Boolean**| Return filters from parent scope levels (Default: false) | [optional] 
 **userContains** | [**[String]**](String.md)| Free-text filter by user name | [optional] 
 **type** | **String**| Type. Example: \"black_hash\". | [optional] [default to black_hash]
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **createdAtBetween** | **String**| Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **updatedAtLte** | **Date**| Updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **updatedAtBetween** | **String**| Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **createdAtGte** | **Date**| Created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **descriptionContains** | [**[String]**](String.md)| Free-text filter by description | [optional] 
 **userIds** | [**[String]**](String.md)| List of user ids to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **types** | [**[String]**](String.md)| Type in. Example: \"black_hash\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRestrictionsDelete"></a>
# **webApiRestrictionsDelete**
> AffectedResultsSchema200 webApiRestrictionsDelete(opts)

Delete Blocklist Item

Agents immediately identify files on the blocklist and block them from executing. Agents identify files on the blocklist before they look at exclusions. If there is a conflict - for example, if a hash is blocklisted from the Cloud Intelligence, and you have an exclusion to run an application that requires this hash - you can delete the hash from the Blocklist. Users with the IT role do not have permissions to run this command.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var opts = { 
  'body': new S1MgmtApi.ExclusionsSchemasDeleteRestrictionSchema() // ExclusionsSchemasDeleteRestrictionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRestrictionsDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExclusionsSchemasDeleteRestrictionSchema**](ExclusionsSchemasDeleteRestrictionSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRestrictionsGet"></a>
# **webApiRestrictionsGet**
> ExclusionsSchemasRestrictionSchemaGetMany200 webApiRestrictionsGet(opts)

Get Blocklist

Get a list of all the items in the Blocklist that match the filter. <br>To filter the results for a scope:<br>* Global - Make sure \"tenant\" is \"true\" and no other scope ID is given.<br>* Account - Make sure \"tenant\" is \"false\" and at least one Account ID is given.<br>* Site - Make sure \"tenant\" is \"false\" and at least one Site ID is given.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'unified': true, // Boolean | Unified
  'includeChildren': true, // Boolean | Return filters from children scope levels (Default: false)
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'ids': ["ids_example"], // [String] | List of IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'valueContains': ["valueContains_example"], // [String] | Free-text filter by value
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'source': ["source_example"], // [String] | List sources to filter by. Example: \"user\".
  'osTypes': ["osTypes_example"], // [String] | List of Os types to filter by. Example: \"windows\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'recommendations': ["recommendations_example"], // [String] | List of recommendations to filter by. Example: \"Not recommended\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'imported': true, // Boolean | indication whether the hash was imported by a bulk operation or not
  'value': "value_example", // String | Value
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'includeParents': true, // Boolean | Return filters from parent scope levels (Default: false)
  'userContains': ["userContains_example"], // [String] | Free-text filter by user name
  'type': "black_hash", // String | Type. Example: \"black_hash\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'createdAtBetween': "createdAtBetween_example", // String | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'updatedAtBetween': "updatedAtBetween_example", // String | Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'descriptionContains': ["descriptionContains_example"], // [String] | Free-text filter by description
  'modes': ["modes_example"], // [String] | List of modes to filter by (Path exclusions only). Example: \"suppress\".
  'userIds': ["userIds_example"], // [String] | List of user ids to filter by. Example: \"225494730938493804,225494730938493915\".
  'types': ["types_example"] // [String] | Type in. Example: \"black_hash\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRestrictionsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **createdAtGt** | **Date**| Created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **unified** | **Boolean**| Unified | [optional] 
 **includeChildren** | **Boolean**| Return filters from children scope levels (Default: false) | [optional] 
 **updatedAtLt** | **Date**| Updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **ids** | [**[String]**](String.md)| List of IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **createdAtLt** | **Date**| Created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **valueContains** | [**[String]**](String.md)| Free-text filter by value | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **updatedAtGte** | **Date**| Updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **source** | [**[String]**](String.md)| List sources to filter by. Example: \"user\". | [optional] 
 **osTypes** | [**[String]**](String.md)| List of Os types to filter by. Example: \"windows\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **recommendations** | [**[String]**](String.md)| List of recommendations to filter by. Example: \"Not recommended\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **updatedAtGt** | **Date**| Updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **imported** | **Boolean**| indication whether the hash was imported by a bulk operation or not | [optional] 
 **value** | **String**| Value | [optional] 
 **createdAtLte** | **Date**| Created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **includeParents** | **Boolean**| Return filters from parent scope levels (Default: false) | [optional] 
 **userContains** | [**[String]**](String.md)| Free-text filter by user name | [optional] 
 **type** | **String**| Type. Example: \"black_hash\". | [optional] [default to black_hash]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **createdAtBetween** | **String**| Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **updatedAtLte** | **Date**| Updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **updatedAtBetween** | **String**| Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **createdAtGte** | **Date**| Created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **descriptionContains** | [**[String]**](String.md)| Free-text filter by description | [optional] 
 **modes** | [**[String]**](String.md)| List of modes to filter by (Path exclusions only). Example: \"suppress\". | [optional] 
 **userIds** | [**[String]**](String.md)| List of user ids to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **types** | [**[String]**](String.md)| Type in. Example: \"black_hash\". | [optional] 

### Return type

[**ExclusionsSchemasRestrictionSchemaGetMany200**](ExclusionsSchemasRestrictionSchemaGetMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRestrictionsImportPost"></a>
# **webApiRestrictionsImportPost**
> ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200 webApiRestrictionsImportPost(file, opts)

Import Blocklist Items

Upload a CSV file that contains blocklist entries to import to a scope in your Management

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var file = "/path/to/file.txt"; // File | The input CSV file

var opts = { 
  'filter': "filter_example" // String | The details of the scope where the entities will be imported, for example:  For Global - '{\"tenant\":true}' For an Account - '{\"accountIds\": [\"225494730938493804\"]}' For a Site  - '{\"siteIds\": [\"225494730938493804\"]}' For a Group - '{\"groupIds\": [\"225494730938493804\"]}'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRestrictionsImportPost(file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The input CSV file | 
 **filter** | **String**| The details of the scope where the entities will be imported, for example:  For Global - '{\"tenant\":true}' For an Account - '{\"accountIds\": [\"225494730938493804\"]}' For a Site  - '{\"siteIds\": [\"225494730938493804\"]}' For a Group - '{\"groupIds\": [\"225494730938493804\"]}' | [optional] 

### Return type

[**ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200**](ExclusionsSchemasImportExclusionsOrBlockListResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="webApiRestrictionsPost"></a>
# **webApiRestrictionsPost**
> ExclusionsSchemasRestrictionSchemaMany200 webApiRestrictionsPost(opts)

Create Blocklist Item

Create a blocklist item for a SHA1 hash, for the scopes you enter in the filter fields. You can add the hash to multiple Groups, Sites, Accounts, and to the Global list. <br> IMPORTANT: The type must be \"black_hash\" - any other value will create an Exclusion rather than a Blocklist item.<br>Users with the IT role do not have permissions to run this.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var opts = { 
  'body': new S1MgmtApi.ExclusionsSchemasPostRestrictionSchema() // ExclusionsSchemasPostRestrictionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRestrictionsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExclusionsSchemasPostRestrictionSchema**](ExclusionsSchemasPostRestrictionSchema.md)|  | [optional] 

### Return type

[**ExclusionsSchemasRestrictionSchemaMany200**](ExclusionsSchemasRestrictionSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRestrictionsPut"></a>
# **webApiRestrictionsPut**
> ExclusionsSchemasRestrictionSchemaMany200 webApiRestrictionsPut(opts)

Update Blocklist Item

Change the properties of a Blocklist item through the data fields. To get the original data, run \"restrictions\" with a filter to give the item you want.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var opts = { 
  'body': new S1MgmtApi.ExclusionsSchemasPutRestrictionSchema() // ExclusionsSchemasPutRestrictionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRestrictionsPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExclusionsSchemasPutRestrictionSchema**](ExclusionsSchemasPutRestrictionSchema.md)|  | [optional] 

### Return type

[**ExclusionsSchemasRestrictionSchemaMany200**](ExclusionsSchemasRestrictionSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRestrictionsReportreportIdGet"></a>
# **webApiRestrictionsReportreportIdGet**
> webApiRestrictionsReportreportIdGet(reportId)

Get Blocklist Import Validation Report

Get the  Validation Report generated for the import to help you fix entries that did not import successfully

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var reportId = "reportId_example"; // String | The ID of the requested Validation Report. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiRestrictionsReportreportIdGet(reportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| The ID of the requested Validation Report. Example: \"225494730938493804\". | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRestrictionsValidatePost"></a>
# **webApiRestrictionsValidatePost**
> ExclusionsSchemasValidateExclusionRestrictionOutputSchema200 webApiRestrictionsValidatePost(opts)

Validate Blocklist Item

Check if a hash is on the list of SentinelOne items that are \"Not Allowed\" or \"Not Recommended\". This API returns one of the following statuses:<br> * Not Recommended: This item is not recommended by SentinelOne because it decreases security. <br>* Not Allowed: This item can harm the product and lead to unexpected functionality. From version North Pole SP3 you are prevented from creating Not Allowed blocklist item. * None: This item is not on the list of SentinelOne items that are \"Not Allowed\" or \"Not Recommended\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsAndBlocklistApi();

var opts = { 
  'body': new S1MgmtApi.ExclusionsSchemasValidateRestrictionSchema() // ExclusionsSchemasValidateRestrictionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRestrictionsValidatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExclusionsSchemasValidateRestrictionSchema**](ExclusionsSchemasValidateRestrictionSchema.md)|  | [optional] 

### Return type

[**ExclusionsSchemasValidateExclusionRestrictionOutputSchema200**](ExclusionsSchemasValidateExclusionRestrictionOutputSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

