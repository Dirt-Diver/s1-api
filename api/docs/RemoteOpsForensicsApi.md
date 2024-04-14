# S1MgmtApi.RemoteOpsForensicsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiRemoteOpsForensicsArtifactTypesGet**](RemoteOpsForensicsApi.md#webApiRemoteOpsForensicsArtifactTypesGet) | **GET** /web/api/v2.1/remote-ops/forensics/artifact-types | Get list of supported artifact types
[**webApiRemoteOpsForensicsCollectionFileUrlGet**](RemoteOpsForensicsApi.md#webApiRemoteOpsForensicsCollectionFileUrlGet) | **GET** /web/api/v2.1/remote-ops/forensics/collection-file-url | Returns collection file download pre-signed url
[**webApiRemoteOpsForensicsCollectionProfilesDelete**](RemoteOpsForensicsApi.md#webApiRemoteOpsForensicsCollectionProfilesDelete) | **DELETE** /web/api/v2.1/remote-ops/forensics/collection-profiles | Delete Collection profiles
[**webApiRemoteOpsForensicsCollectionProfilesGet**](RemoteOpsForensicsApi.md#webApiRemoteOpsForensicsCollectionProfilesGet) | **GET** /web/api/v2.1/remote-ops/forensics/collection-profiles | Get list of available Collection profiles
[**webApiRemoteOpsForensicsCollectionProfilesPost**](RemoteOpsForensicsApi.md#webApiRemoteOpsForensicsCollectionProfilesPost) | **POST** /web/api/v2.1/remote-ops/forensics/collection-profiles | Create new Collection profile
[**webApiRemoteOpsForensicsCollectionProfilesprofileIdGet**](RemoteOpsForensicsApi.md#webApiRemoteOpsForensicsCollectionProfilesprofileIdGet) | **GET** /web/api/v2.1/remote-ops/forensics/collection-profiles/{profile_id} | Get Collection profile by ID
[**webApiRemoteOpsForensicsCollectionProfilesprofileIdPut**](RemoteOpsForensicsApi.md#webApiRemoteOpsForensicsCollectionProfilesprofileIdPut) | **PUT** /web/api/v2.1/remote-ops/forensics/collection-profiles/{profile_id} | Update Collection profile by ID
[**webApiRemoteOpsForensicsIsCollectionFileGet**](RemoteOpsForensicsApi.md#webApiRemoteOpsForensicsIsCollectionFileGet) | **GET** /web/api/v2.1/remote-ops/forensics/is-collection-file | Check if collection file exists for given storyline
[**webApiRemoteOpsForensicsStartCollectionPost**](RemoteOpsForensicsApi.md#webApiRemoteOpsForensicsStartCollectionPost) | **POST** /web/api/v2.1/remote-ops/forensics/start-collection | Start collection of Forensics artifacts according to specified profile
[**webApiRemoteOpsForensicsTaskResultGet**](RemoteOpsForensicsApi.md#webApiRemoteOpsForensicsTaskResultGet) | **GET** /web/api/v2.1/remote-ops/forensics/task-result | Return result of collection task


<a name="webApiRemoteOpsForensicsArtifactTypesGet"></a>
# **webApiRemoteOpsForensicsArtifactTypesGet**
> V21ForensicsSchemaArtifactTypesResponseSchemaMany200 webApiRemoteOpsForensicsArtifactTypesGet()

Get list of supported artifact types

Return a complete list of supported artifact types

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsForensicsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsForensicsArtifactTypesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V21ForensicsSchemaArtifactTypesResponseSchemaMany200**](V21ForensicsSchemaArtifactTypesResponseSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteOpsForensicsCollectionFileUrlGet"></a>
# **webApiRemoteOpsForensicsCollectionFileUrlGet**
> DownloadResultsSchema200 webApiRemoteOpsForensicsCollectionFileUrlGet(signature, siteId, uploadedTimestamp, signatureType, agentId)

Returns collection file download pre-signed url

Returns collection file download pre-signed url

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsForensicsApi();

var signature = "signature_example"; // String | Signature

var siteId = "siteId_example"; // String | Site id. Example: \"225494730938493804\".

var uploadedTimestamp = "uploadedTimestamp_example"; // String | Uploaded timestamp

var signatureType = "signatureType_example"; // String | Signature type

var agentId = "agentId_example"; // String | Agent id. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsForensicsCollectionFileUrlGet(signature, siteId, uploadedTimestamp, signatureType, agentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signature** | **String**| Signature | 
 **siteId** | **String**| Site id. Example: \"225494730938493804\". | 
 **uploadedTimestamp** | **String**| Uploaded timestamp | 
 **signatureType** | **String**| Signature type | 
 **agentId** | **String**| Agent id. Example: \"225494730938493804\". | 

### Return type

[**DownloadResultsSchema200**](DownloadResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteOpsForensicsCollectionProfilesDelete"></a>
# **webApiRemoteOpsForensicsCollectionProfilesDelete**
> V21ForensicsSchemaCollectionProfileResultSchemaMany200 webApiRemoteOpsForensicsCollectionProfilesDelete(opts)

Delete Collection profiles

Delete multiple Forensics Collection profiles. The profiles that are not possible to delete (e.g. bundled profiles by S1, non-existing or user does not have proper permissions) are skipped. Contents of successfully deleted profiles are returned in response.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsForensicsApi();

var opts = { 
  'body': new S1MgmtApi.V21ForensicsSchemaDeleteProfilesRequestSchema() // V21ForensicsSchemaDeleteProfilesRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsForensicsCollectionProfilesDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ForensicsSchemaDeleteProfilesRequestSchema**](V21ForensicsSchemaDeleteProfilesRequestSchema.md)|  | [optional] 

### Return type

[**V21ForensicsSchemaCollectionProfileResultSchemaMany200**](V21ForensicsSchemaCollectionProfileResultSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteOpsForensicsCollectionProfilesGet"></a>
# **webApiRemoteOpsForensicsCollectionProfilesGet**
> V21ForensicsSchemaGetCollectionProfileResultSchemaMany200 webApiRemoteOpsForensicsCollectionProfilesGet(opts)

Get list of available Collection profiles

Get list of available Forensics collection profiles. The list may be narrowed by specifying filter parameter. Profiles are inherited between scopes in both upward and downward directions, e.g. profiles on parent Account and Tenant scopes are returned when querying for a Site scope, and profiles on a Site scopes are returned when querying its parent Account. Bundled profiles are available regardless of requested scqpe. If scope is not specified in filter, the scopes of the requesting user are considered.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsForensicsApi();

var opts = { 
  'query': "query_example", // String | Keyword to search in Collection profile name / description
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'osTypes': ["osTypes_example"], // [String] | Os types. Example: \"linux\".
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'ids': ["ids_example"], // [String] | A list of collection profiles IDs. Example: \"225494730938493804,225494730938493915\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'skip': 56 // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsForensicsCollectionProfilesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Keyword to search in Collection profile name / description | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **osTypes** | [**[String]**](String.md)| Os types. Example: \"linux\". | [optional] 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **ids** | [**[String]**](String.md)| A list of collection profiles IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 

### Return type

[**V21ForensicsSchemaGetCollectionProfileResultSchemaMany200**](V21ForensicsSchemaGetCollectionProfileResultSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteOpsForensicsCollectionProfilesPost"></a>
# **webApiRemoteOpsForensicsCollectionProfilesPost**
> V21ForensicsSchemaCollectionProfileResultSchema200 webApiRemoteOpsForensicsCollectionProfilesPost(opts)

Create new Collection profile

Create a Forensics Collection profile with provided artifacts on the specified scope. The profile name must be unique inside the scope, if the name already exists, Bad request error is returned.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsForensicsApi();

var opts = { 
  'body': new S1MgmtApi.V21ForensicsSchemaCollectionProfileRequestSchema() // V21ForensicsSchemaCollectionProfileRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsForensicsCollectionProfilesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ForensicsSchemaCollectionProfileRequestSchema**](V21ForensicsSchemaCollectionProfileRequestSchema.md)|  | [optional] 

### Return type

[**V21ForensicsSchemaCollectionProfileResultSchema200**](V21ForensicsSchemaCollectionProfileResultSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteOpsForensicsCollectionProfilesprofileIdGet"></a>
# **webApiRemoteOpsForensicsCollectionProfilesprofileIdGet**
> V21ForensicsSchemaCollectionProfileResultSchema200 webApiRemoteOpsForensicsCollectionProfilesprofileIdGet(profileId)

Get Collection profile by ID

Get contents of an existing Forensics Collection profile, including specification of artifacts to be collected and profile metadata.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsForensicsApi();

var profileId = "profileId_example"; // String | Profile ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsForensicsCollectionProfilesprofileIdGet(profileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| Profile ID. Example: \"225494730938493804\". | 

### Return type

[**V21ForensicsSchemaCollectionProfileResultSchema200**](V21ForensicsSchemaCollectionProfileResultSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteOpsForensicsCollectionProfilesprofileIdPut"></a>
# **webApiRemoteOpsForensicsCollectionProfilesprofileIdPut**
> V21ForensicsSchemaCollectionProfileResultSchema200 webApiRemoteOpsForensicsCollectionProfilesprofileIdPut(profileId, opts)

Update Collection profile by ID

Update contents of an existing Forensics Collection profile. All the profile data should be specified, even if the values are not changed. It's not allowed to change scope of profile. The namemust be unique inside the scope, if different profile with specified name already exists, Bad requesterror is returned and no profile data is changed.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsForensicsApi();

var profileId = "profileId_example"; // String | Profile ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.V21ForensicsSchemaPutCollectionProfileRequestSchema() // V21ForensicsSchemaPutCollectionProfileRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsForensicsCollectionProfilesprofileIdPut(profileId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| Profile ID. Example: \"225494730938493804\". | 
 **body** | [**V21ForensicsSchemaPutCollectionProfileRequestSchema**](V21ForensicsSchemaPutCollectionProfileRequestSchema.md)|  | [optional] 

### Return type

[**V21ForensicsSchemaCollectionProfileResultSchema200**](V21ForensicsSchemaCollectionProfileResultSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteOpsForensicsIsCollectionFileGet"></a>
# **webApiRemoteOpsForensicsIsCollectionFileGet**
> V21ForensicsSchemaIsCollectionFileResponseSchema200 webApiRemoteOpsForensicsIsCollectionFileGet(storyline, agentId)

Check if collection file exists for given storyline

Check if collection file exists for given storyline

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsForensicsApi();

var storyline = "storyline_example"; // String | Storyline ID

var agentId = "agentId_example"; // String | Agent's ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsForensicsIsCollectionFileGet(storyline, agentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storyline** | **String**| Storyline ID | 
 **agentId** | **String**| Agent's ID. Example: \"225494730938493804\". | 

### Return type

[**V21ForensicsSchemaIsCollectionFileResponseSchema200**](V21ForensicsSchemaIsCollectionFileResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteOpsForensicsStartCollectionPost"></a>
# **webApiRemoteOpsForensicsStartCollectionPost**
> RemoteOpsSchemasStartCollectionResponseDataSchema202 webApiRemoteOpsForensicsStartCollectionPost(opts)

Start collection of Forensics artifacts according to specified profile

Start collection of Forensics artifacts according to specified profile

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsForensicsApi();

var opts = { 
  'body': new S1MgmtApi.RemoteOpsSchemasStartCollectionSchema() // RemoteOpsSchemasStartCollectionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsForensicsStartCollectionPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RemoteOpsSchemasStartCollectionSchema**](RemoteOpsSchemasStartCollectionSchema.md)|  | [optional] 

### Return type

[**RemoteOpsSchemasStartCollectionResponseDataSchema202**](RemoteOpsSchemasStartCollectionResponseDataSchema202.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteOpsForensicsTaskResultGet"></a>
# **webApiRemoteOpsForensicsTaskResultGet**
> RemoteOpsSchemasGetForensicsTaskResultDataSchema200 webApiRemoteOpsForensicsTaskResultGet(taskId)

Return result of collection task

Return result of collection task

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsForensicsApi();

var taskId = "taskId_example"; // String | Task id. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsForensicsTaskResultGet(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| Task id. Example: \"225494730938493804\". | 

### Return type

[**RemoteOpsSchemasGetForensicsTaskResultDataSchema200**](RemoteOpsSchemasGetForensicsTaskResultDataSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

