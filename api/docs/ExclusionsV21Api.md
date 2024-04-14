# S1MgmtApi.ExclusionsV21Api

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiUnifiedExclusionsDelete**](ExclusionsV21Api.md#webApiUnifiedExclusionsDelete) | **DELETE** /web/api/v2.1/unified-exclusions | Delete Exclusions
[**webApiUnifiedExclusionsGet**](ExclusionsV21Api.md#webApiUnifiedExclusionsGet) | **GET** /web/api/v2.1/unified-exclusions | Get Exclusions


<a name="webApiUnifiedExclusionsDelete"></a>
# **webApiUnifiedExclusionsDelete**
> ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteResponse200 webApiUnifiedExclusionsDelete(opts)

Delete Exclusions

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ExclusionsV21Api();

var opts = { 
  'body': new S1MgmtApi.ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequest() // ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUnifiedExclusionsDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequest**](ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteRequest.md)|  | [optional] 

### Return type

[**ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteResponse200**](ExclusionsDeleteSchemaUnifiedExclusionSchemaDeleteResponse200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUnifiedExclusionsGet"></a>
# **webApiUnifiedExclusionsGet**
> ExclusionsGetSchemaUnifiedExclusionSchemaMany200 webApiUnifiedExclusionsGet(opts)

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

var apiInstance = new S1MgmtApi.ExclusionsV21Api();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'includeChildren': true, // Boolean | Return filters from children scope levels (Default: false)
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'scopePathContains': ["scopePathContains_example"], // [String] | Free-text filter by scope path
  'ids': ["ids_example"], // [String] | List of IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'valueContains': ["valueContains_example"], // [String] | Free-text filter by value
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'source': ["source_example"], // [String] | List sources to filter by. Example: \"user\".
  'osTypes': ["osTypes_example"], // [String] | List of Os types to filter by. Example: \"windows\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'notRecommended': ["notRecommended_example"], // [String] | List of recommendations to filter by. Example: \"Not recommended\".
  'engines': ["engines_example"], // [String] | List of engines to filter by. Example: \"suppress\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'pathExclusionTypes': ["pathExclusionTypes_example"], // [String] | List of excluded paths in an exclusion (Path exclusions only). Example: \"file\".
  'imported': true, // Boolean | indication whether the exclusion was imported by a bulk operation or not
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'exclusionNameContains': ["exclusionNameContains_example"], // [String] | Free-text filter by exclusion name
  'conditions': ["conditions_example"], // [String] | List of conditions to filter by. Example: \"white_hash\".
  'includeParents': true, // Boolean | Return filters from parent scope levels (Default: false)
  'userContains': ["userContains_example"], // [String] | Free-text filter by user name
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'createdAtBetween': "createdAtBetween_example", // String | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'interactionLevel': ["interactionLevel_example"], // [String] | List of interaction levels to filter by. Example: \"disable_all_monitors\".
  'threatType': ["threatType_example"], // [String] | List of threat types to filter by. Example: \"EDR\".
  'updatedAtBetween': "updatedAtBetween_example", // String | Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'descriptionContains': ["descriptionContains_example"], // [String] | Free-text filter by description
  'userIds': ["userIds_example"], // [String] | List of user ids to filter by. Example: \"225494730938493804,225494730938493915\".
  'applicationNameContains': ["applicationNameContains_example"], // [String] | Free-text filter by application name
  'modeType': "modeType_example" // String | Agent interaction \\ Suppression. Example: \"suppression\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUnifiedExclusionsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **createdAtGt** | **Date**| Created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **includeChildren** | **Boolean**| Return filters from children scope levels (Default: false) | [optional] 
 **updatedAtLt** | **Date**| Updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **scopePathContains** | [**[String]**](String.md)| Free-text filter by scope path | [optional] 
 **ids** | [**[String]**](String.md)| List of IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **createdAtLt** | **Date**| Created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **valueContains** | [**[String]**](String.md)| Free-text filter by value | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **updatedAtGte** | **Date**| Updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **source** | [**[String]**](String.md)| List sources to filter by. Example: \"user\". | [optional] 
 **osTypes** | [**[String]**](String.md)| List of Os types to filter by. Example: \"windows\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **notRecommended** | [**[String]**](String.md)| List of recommendations to filter by. Example: \"Not recommended\". | [optional] 
 **engines** | [**[String]**](String.md)| List of engines to filter by. Example: \"suppress\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **updatedAtGt** | **Date**| Updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **pathExclusionTypes** | [**[String]**](String.md)| List of excluded paths in an exclusion (Path exclusions only). Example: \"file\". | [optional] 
 **imported** | **Boolean**| indication whether the exclusion was imported by a bulk operation or not | [optional] 
 **createdAtLte** | **Date**| Created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **exclusionNameContains** | [**[String]**](String.md)| Free-text filter by exclusion name | [optional] 
 **conditions** | [**[String]**](String.md)| List of conditions to filter by. Example: \"white_hash\". | [optional] 
 **includeParents** | **Boolean**| Return filters from parent scope levels (Default: false) | [optional] 
 **userContains** | [**[String]**](String.md)| Free-text filter by user name | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **updatedAtLte** | **Date**| Updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **createdAtBetween** | **String**| Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **interactionLevel** | [**[String]**](String.md)| List of interaction levels to filter by. Example: \"disable_all_monitors\". | [optional] 
 **threatType** | [**[String]**](String.md)| List of threat types to filter by. Example: \"EDR\". | [optional] 
 **updatedAtBetween** | **String**| Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **createdAtGte** | **Date**| Created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **descriptionContains** | [**[String]**](String.md)| Free-text filter by description | [optional] 
 **userIds** | [**[String]**](String.md)| List of user ids to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **applicationNameContains** | [**[String]**](String.md)| Free-text filter by application name | [optional] 
 **modeType** | **String**| Agent interaction \\ Suppression. Example: \"suppression\". | [optional] 

### Return type

[**ExclusionsGetSchemaUnifiedExclusionSchemaMany200**](ExclusionsGetSchemaUnifiedExclusionSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

