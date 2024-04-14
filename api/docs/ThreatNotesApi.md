# S1MgmtApi.ThreatNotesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiThreatsNotesPost**](ThreatNotesApi.md#webApiThreatsNotesPost) | **POST** /web/api/v2.1/threats/notes | Add Note to Multiple
[**webApiThreatsthreatIdNotesGet**](ThreatNotesApi.md#webApiThreatsthreatIdNotesGet) | **GET** /web/api/v2.1/threats/{threat_id}/notes | Get Threat Notes
[**webApiThreatsthreatIdNotesnoteIdDelete**](ThreatNotesApi.md#webApiThreatsthreatIdNotesnoteIdDelete) | **DELETE** /web/api/v2.1/threats/{threat_id}/notes/{note_id} | Delete Threat Note
[**webApiThreatsthreatIdNotesnoteIdPut**](ThreatNotesApi.md#webApiThreatsthreatIdNotesnoteIdPut) | **PUT** /web/api/v2.1/threats/{threat_id}/notes/{note_id} | Update Threat Note


<a name="webApiThreatsNotesPost"></a>
# **webApiThreatsNotesPost**
> AffectedResultsSchema200 webApiThreatsNotesPost(opts)

Add Note to Multiple

Add a threat note to multiple threats.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatNotesApi();

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasThreatsNoteCreateSchema() // ThreatsSchemasThreatsNoteCreateSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsNotesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThreatsSchemasThreatsNoteCreateSchema**](ThreatsSchemasThreatsNoteCreateSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsthreatIdNotesGet"></a>
# **webApiThreatsthreatIdNotesGet**
> ThreatsSchemasThreatNoteSchemaMany200 webApiThreatsthreatIdNotesGet(threatId, opts)

Get Threat Notes

Get the threat notes that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatNotesApi();

var threatId = "threatId_example"; // String | Threat ID. Example: \"225494730938493804\".

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'creatorLike': "creatorLike_example", // String | Threat Note creator name (partially or full). Example: \"John\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'creatorId': "creatorId_example", // String | Threat Note creator ID. Example: \"225494730938493804\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10 // Number | Limit number of returned items (1-1000). Example: \"10\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsthreatIdNotesGet(threatId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threatId** | **String**| Threat ID. Example: \"225494730938493804\". | 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **creatorLike** | **String**| Threat Note creator name (partially or full). Example: \"John\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **creatorId** | **String**| Threat Note creator ID. Example: \"225494730938493804\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]

### Return type

[**ThreatsSchemasThreatNoteSchemaMany200**](ThreatsSchemasThreatNoteSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiThreatsthreatIdNotesnoteIdDelete"></a>
# **webApiThreatsthreatIdNotesnoteIdDelete**
> SuccessResponseSchema200 webApiThreatsthreatIdNotesnoteIdDelete(noteId, threatId)

Delete Threat Note

Delete a threat note.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatNotesApi();

var noteId = "noteId_example"; // String | Threat Note ID. Example: \"225494730938493804\".

var threatId = "threatId_example"; // String | Threat ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsthreatIdNotesnoteIdDelete(noteId, threatId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**| Threat Note ID. Example: \"225494730938493804\". | 
 **threatId** | **String**| Threat ID. Example: \"225494730938493804\". | 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiThreatsthreatIdNotesnoteIdPut"></a>
# **webApiThreatsthreatIdNotesnoteIdPut**
> ThreatsSchemasThreatNoteSchema200 webApiThreatsthreatIdNotesnoteIdPut(noteId, threatId, opts)

Update Threat Note

Change the text of a threat note.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatNotesApi();

var noteId = "noteId_example"; // String | Threat Note ID. Example: \"225494730938493804\".

var threatId = "threatId_example"; // String | Threat ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasPostThreatNoteDataSchema() // ThreatsSchemasPostThreatNoteDataSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsthreatIdNotesnoteIdPut(noteId, threatId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**| Threat Note ID. Example: \"225494730938493804\". | 
 **threatId** | **String**| Threat ID. Example: \"225494730938493804\". | 
 **body** | [**ThreatsSchemasPostThreatNoteDataSchema**](ThreatsSchemasPostThreatNoteDataSchema.md)|  | [optional] 

### Return type

[**ThreatsSchemasThreatNoteSchema200**](ThreatsSchemasThreatNoteSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

