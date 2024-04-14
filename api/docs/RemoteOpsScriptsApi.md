# S1MgmtApi.RemoteOpsScriptsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiRemoteScriptsDelete**](RemoteOpsScriptsApi.md#webApiRemoteScriptsDelete) | **DELETE** /web/api/v2.1/remote-scripts | Delete Scripts
[**webApiRemoteScriptsEditscriptIdPut**](RemoteOpsScriptsApi.md#webApiRemoteScriptsEditscriptIdPut) | **PUT** /web/api/v2.1/remote-scripts/edit/{script_id} | Update a Script
[**webApiRemoteScriptsExecutePost**](RemoteOpsScriptsApi.md#webApiRemoteScriptsExecutePost) | **POST** /web/api/v2.1/remote-scripts/execute | Run Remote Script
[**webApiRemoteScriptsFetchFilesPost**](RemoteOpsScriptsApi.md#webApiRemoteScriptsFetchFilesPost) | **POST** /web/api/v2.1/remote-scripts/fetch-files | Get Script Results
[**webApiRemoteScriptsGet**](RemoteOpsScriptsApi.md#webApiRemoteScriptsGet) | **GET** /web/api/v2.1/remote-scripts | Get Scripts
[**webApiRemoteScriptsGuardrailsCheckPost**](RemoteOpsScriptsApi.md#webApiRemoteScriptsGuardrailsCheckPost) | **POST** /web/api/v2.1/remote-scripts/guardrails/check | Check whether guardrail applies to an execution
[**webApiRemoteScriptsGuardrailsConfigurationDelete**](RemoteOpsScriptsApi.md#webApiRemoteScriptsGuardrailsConfigurationDelete) | **DELETE** /web/api/v2.1/remote-scripts/guardrails/configuration | Deletes a specific  guardrails configuration
[**webApiRemoteScriptsGuardrailsConfigurationGet**](RemoteOpsScriptsApi.md#webApiRemoteScriptsGuardrailsConfigurationGet) | **GET** /web/api/v2.1/remote-scripts/guardrails/configuration | Gets a guardrails configuration for a given scope
[**webApiRemoteScriptsGuardrailsConfigurationPost**](RemoteOpsScriptsApi.md#webApiRemoteScriptsGuardrailsConfigurationPost) | **POST** /web/api/v2.1/remote-scripts/guardrails/configuration | Updates or inserts (if record does not exist) a guardrails configuration
[**webApiRemoteScriptsPendingExecutionsGet**](RemoteOpsScriptsApi.md#webApiRemoteScriptsPendingExecutionsGet) | **GET** /web/api/v2.1/remote-scripts/pending-executions | Get paginated pending executions
[**webApiRemoteScriptsPendingExecutionspendingExecutionIdPut**](RemoteOpsScriptsApi.md#webApiRemoteScriptsPendingExecutionspendingExecutionIdPut) | **PUT** /web/api/v2.1/remote-scripts/pending-executions/{pending_execution_id} | Approve/decline pending execution
[**webApiRemoteScriptsPost**](RemoteOpsScriptsApi.md#webApiRemoteScriptsPost) | **POST** /web/api/v2.1/remote-scripts | Upload New Script
[**webApiRemoteScriptsScriptContentGet**](RemoteOpsScriptsApi.md#webApiRemoteScriptsScriptContentGet) | **GET** /web/api/v2.1/remote-scripts/script-content | Get script content
[**webApiRemoteScriptsStatusGet**](RemoteOpsScriptsApi.md#webApiRemoteScriptsStatusGet) | **GET** /web/api/v2.1/remote-scripts/status | Get Remote Scripts Tasks Status
[**webApiRemoteScriptsscriptIdPut**](RemoteOpsScriptsApi.md#webApiRemoteScriptsscriptIdPut) | **PUT** /web/api/v2.1/remote-scripts/{script_id} | Update a Script


<a name="webApiRemoteScriptsDelete"></a>
# **webApiRemoteScriptsDelete**
> V21RsoSchemasEnrichedScriptSchemaMany200 webApiRemoteScriptsDelete(opts)

Delete Scripts

Deletes scripts that match a filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var opts = { 
  'body': new S1MgmtApi.V21RsoSchemasScriptDeleteSchema() // V21RsoSchemasScriptDeleteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21RsoSchemasScriptDeleteSchema**](V21RsoSchemasScriptDeleteSchema.md)|  | [optional] 

### Return type

[**V21RsoSchemasEnrichedScriptSchemaMany200**](V21RsoSchemasEnrichedScriptSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteScriptsEditscriptIdPut"></a>
# **webApiRemoteScriptsEditscriptIdPut**
> V21RsoSchemasEnrichedScriptSchema200 webApiRemoteScriptsEditscriptIdPut(scriptId, inputRequired, inputInstructions, scriptName, inputExample, scriptType, scriptRuntimeTimeoutSeconds, osTypes, opts)

Update a Script

Change the properties of a given script: runtime timeout, name, and whether input is required (if true, input example and instructions are requried),or  script content itselt. <br>This command requires the script ID, which you can get from the Get Scripts API.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var scriptId = "scriptId_example"; // String | Script ID. Example: \"225494730938493804\".

var inputRequired = true; // Boolean | Is input required

var inputInstructions = "inputInstructions_example"; // String | Input instructions

var scriptName = "scriptName_example"; // String | Script name

var inputExample = "inputExample_example"; // String | Input example

var scriptType = "scriptType_example"; // String | Script type. Example: \"artifactCollection\".

var scriptRuntimeTimeoutSeconds = 56; // Number | Script runtime timeout in seconds

var osTypes = ["osTypes_example"]; // [String] | Os types. Example: \"m,a,c,o,s,,,l,i,n,u,x\".

var opts = { 
  'sendActivity': false, // Boolean | Send activity
  'scriptContent': "scriptContent_example", // String | Filled out with a new content of a script if the script content was changedon an already previously uploaded script
  'packageMaxSize': "209715200", // String | Package max size
  'scriptDescription': "scriptDescription_example", // String | Script description
  'consoleData': "consoleData_example", // String | Console data
  'packageRemoved': true, // Boolean | Was package removed during edit of the script?
  'packageEndpointExpirationSeconds': 56, // Number | Package expiration time on endpoint
  'packageEndpointExpiration': "None", // String | Package expiration option on endpoint. Example: \"None\".
  'isScriptContentEncoded': true, // Boolean | Is the script content base64 encoded?
  'packageFile': "/path/to/file.txt", // File | Package file
  'scriptFile': "/path/to/file.txt" // File | Script file
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsEditscriptIdPut(scriptId, inputRequired, inputInstructions, scriptName, inputExample, scriptType, scriptRuntimeTimeoutSeconds, osTypes, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scriptId** | **String**| Script ID. Example: \"225494730938493804\". | 
 **inputRequired** | **Boolean**| Is input required | 
 **inputInstructions** | **String**| Input instructions | 
 **scriptName** | **String**| Script name | 
 **inputExample** | **String**| Input example | 
 **scriptType** | **String**| Script type. Example: \"artifactCollection\". | 
 **scriptRuntimeTimeoutSeconds** | **Number**| Script runtime timeout in seconds | 
 **osTypes** | [**[String]**](String.md)| Os types. Example: \"m,a,c,o,s,,,l,i,n,u,x\". | 
 **sendActivity** | **Boolean**| Send activity | [optional] [default to false]
 **scriptContent** | **String**| Filled out with a new content of a script if the script content was changedon an already previously uploaded script | [optional] 
 **packageMaxSize** | **String**| Package max size | [optional] [default to 209715200]
 **scriptDescription** | **String**| Script description | [optional] 
 **consoleData** | **String**| Console data | [optional] 
 **packageRemoved** | **Boolean**| Was package removed during edit of the script? | [optional] 
 **packageEndpointExpirationSeconds** | **Number**| Package expiration time on endpoint | [optional] 
 **packageEndpointExpiration** | **String**| Package expiration option on endpoint. Example: \"None\". | [optional] [default to None]
 **isScriptContentEncoded** | **Boolean**| Is the script content base64 encoded? | [optional] 
 **packageFile** | **File**| Package file | [optional] 
 **scriptFile** | **File**| Script file | [optional] 

### Return type

[**V21RsoSchemasEnrichedScriptSchema200**](V21RsoSchemasEnrichedScriptSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="webApiRemoteScriptsExecutePost"></a>
# **webApiRemoteScriptsExecutePost**
> RemoteScriptsExecuteSchema200 webApiRemoteScriptsExecutePost(opts)

Run Remote Script

Run a remote script that was uploaded to the SentinelOne Script Library.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var opts = { 
  'body': new S1MgmtApi.CloudProxyRemoteScriptsExecuteScriptSchema() // CloudProxyRemoteScriptsExecuteScriptSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsExecutePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CloudProxyRemoteScriptsExecuteScriptSchema**](CloudProxyRemoteScriptsExecuteScriptSchema.md)|  | [optional] 

### Return type

[**RemoteScriptsExecuteSchema200**](RemoteScriptsExecuteSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteScriptsFetchFilesPost"></a>
# **webApiRemoteScriptsFetchFilesPost**
> DownloadMultipleScriptsResultsSchema200 webApiRemoteScriptsFetchFilesPost(opts)

Get Script Results

Get scripts results URLs. Accessible via API only

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var opts = { 
  'body': new S1MgmtApi.FetchScriptsResultsSchema() // FetchScriptsResultsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsFetchFilesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FetchScriptsResultsSchema**](FetchScriptsResultsSchema.md)|  | [optional] 

### Return type

[**DownloadMultipleScriptsResultsSchema200**](DownloadMultipleScriptsResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteScriptsGet"></a>
# **webApiRemoteScriptsGet**
> V21RsoSchemasEnrichedScriptSchemaMany200 webApiRemoteScriptsGet(opts)

Get Scripts

Get data of the scripts in the SentinelOne Script Library. <br>The SentinelOne Script Library, used for the Remote Script Orchestration feature, gives you a wide range of scripts to collect various forensic artifacts, parse them, and show them in formats that are easy to analyze. Use the scripts to collect information such as hardware and software inventory and configuration, running applications and processes, files and directories, network connections, and more. 

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var opts = { 
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'osTypes': ["osTypes_example"], // [String] | List of the script OS types. Example: \"linux\".
  'scriptType': ["scriptType_example"], // [String] | List of the script types. Example: \"artifactCollection\".
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'isAvailableForArs': true, // Boolean | Is the script runnable in Advanced Response Scripts
  'query': "query_example", // String | Query
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'ids': ["ids_example"], // [String] | A list of script IDs. Example: \"225494730938493804,225494730938493915\".
  'groupIds': ["groupIds_example"] // [String] | List of group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **osTypes** | [**[String]**](String.md)| List of the script OS types. Example: \"linux\". | [optional] 
 **scriptType** | [**[String]**](String.md)| List of the script types. Example: \"artifactCollection\". | [optional] 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **isAvailableForArs** | **Boolean**| Is the script runnable in Advanced Response Scripts | [optional] 
 **query** | **String**| Query | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **ids** | [**[String]**](String.md)| A list of script IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21RsoSchemasEnrichedScriptSchemaMany200**](V21RsoSchemasEnrichedScriptSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteScriptsGuardrailsCheckPost"></a>
# **webApiRemoteScriptsGuardrailsCheckPost**
> V21RsoSchemasPostGuardrailCheckResponseSchema200 webApiRemoteScriptsGuardrailsCheckPost(opts)

Check whether guardrail applies to an execution

Check whether guardrail applies to an execution

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var opts = { 
  'body': new S1MgmtApi.V21RsoSchemasEncapsulatedPostGuardrailCheckSchema() // V21RsoSchemasEncapsulatedPostGuardrailCheckSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsGuardrailsCheckPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21RsoSchemasEncapsulatedPostGuardrailCheckSchema**](V21RsoSchemasEncapsulatedPostGuardrailCheckSchema.md)|  | [optional] 

### Return type

[**V21RsoSchemasPostGuardrailCheckResponseSchema200**](V21RsoSchemasPostGuardrailCheckResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteScriptsGuardrailsConfigurationDelete"></a>
# **webApiRemoteScriptsGuardrailsConfigurationDelete**
> V21RsoSchemasOperationResultStatusSchema200 webApiRemoteScriptsGuardrailsConfigurationDelete(opts)

Deletes a specific  guardrails configuration

Deletes a specific  guardrails configuration

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var opts = { 
  'body': new S1MgmtApi.V21RsoSchemasEncapsulatedDeleteGuardrailsSchema() // V21RsoSchemasEncapsulatedDeleteGuardrailsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsGuardrailsConfigurationDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21RsoSchemasEncapsulatedDeleteGuardrailsSchema**](V21RsoSchemasEncapsulatedDeleteGuardrailsSchema.md)|  | [optional] 

### Return type

[**V21RsoSchemasOperationResultStatusSchema200**](V21RsoSchemasOperationResultStatusSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteScriptsGuardrailsConfigurationGet"></a>
# **webApiRemoteScriptsGuardrailsConfigurationGet**
> V21RsoSchemasGetGuardrailsResponseSchema200 webApiRemoteScriptsGuardrailsConfigurationGet(scopeLevel, scopeId)

Gets a guardrails configuration for a given scope

Gets a guardrails configuration for a given scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var scopeLevel = "scopeLevel_example"; // String | Scope level. Example: \"account\".

var scopeId = "scopeId_example"; // String | Scope ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsGuardrailsConfigurationGet(scopeLevel, scopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scopeLevel** | **String**| Scope level. Example: \"account\". | 
 **scopeId** | **String**| Scope ID. Example: \"225494730938493804\". | 

### Return type

[**V21RsoSchemasGetGuardrailsResponseSchema200**](V21RsoSchemasGetGuardrailsResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteScriptsGuardrailsConfigurationPost"></a>
# **webApiRemoteScriptsGuardrailsConfigurationPost**
> V21RsoSchemasOperationResultStatusSchema200 webApiRemoteScriptsGuardrailsConfigurationPost(opts)

Updates or inserts (if record does not exist) a guardrails configuration

Updates or inserts (if record does not exist) a guardrails configuration

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var opts = { 
  'body': new S1MgmtApi.V21RsoSchemasEncapsulatedPostGuardrailsSchema() // V21RsoSchemasEncapsulatedPostGuardrailsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsGuardrailsConfigurationPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21RsoSchemasEncapsulatedPostGuardrailsSchema**](V21RsoSchemasEncapsulatedPostGuardrailsSchema.md)|  | [optional] 

### Return type

[**V21RsoSchemasOperationResultStatusSchema200**](V21RsoSchemasOperationResultStatusSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteScriptsPendingExecutionsGet"></a>
# **webApiRemoteScriptsPendingExecutionsGet**
> V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200 webApiRemoteScriptsPendingExecutionsGet(opts)

Get paginated pending executions

Get paginated pending executions

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var opts = { 
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'groupIds': ["groupIds_example"] // [String] | List of group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsPendingExecutionsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200**](V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteScriptsPendingExecutionspendingExecutionIdPut"></a>
# **webApiRemoteScriptsPendingExecutionspendingExecutionIdPut**
> V21RsoSchemasOperationResultStatusSchema200 webApiRemoteScriptsPendingExecutionspendingExecutionIdPut(pendingExecutionId, opts)

Approve/decline pending execution

Approve/decline pending execution

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var pendingExecutionId = "pendingExecutionId_example"; // String | Pending execution ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.V21RsoSchemasApproveDeclinePendingExecutionRequestSchema() // V21RsoSchemasApproveDeclinePendingExecutionRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsPendingExecutionspendingExecutionIdPut(pendingExecutionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pendingExecutionId** | **String**| Pending execution ID. Example: \"225494730938493804\". | 
 **body** | [**V21RsoSchemasApproveDeclinePendingExecutionRequestSchema**](V21RsoSchemasApproveDeclinePendingExecutionRequestSchema.md)|  | [optional] 

### Return type

[**V21RsoSchemasOperationResultStatusSchema200**](V21RsoSchemasOperationResultStatusSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteScriptsPost"></a>
# **webApiRemoteScriptsPost**
> V21RsoSchemasEnrichedScriptSchema200 webApiRemoteScriptsPost(scriptType, osTypes, inputRequired, scriptName, scopeLevel, opts)

Upload New Script

Upload a new script file. The file and various properties are required. To see the mandatory and optional parameters and their valid values, see the Body Schema or click Run On Console.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var scriptType = "scriptType_example"; // String | Script type. Example: \"artifactCollection\".

var osTypes = ["osTypes_example"]; // [String] | Os types. Example: \"m,a,c,o,s,,,l,i,n,u,x\".

var inputRequired = true; // Boolean | Is input required

var scriptName = "scriptName_example"; // String | Script name

var scopeLevel = "scopeLevel_example"; // String | Scope level. Example: \"site\".

var opts = { 
  'isDuplication': false, // Boolean | True if script/package files should be taken from an existing script specified in original_script_id
  'inputInstructions': "inputInstructions_example", // String | Input instructions
  'inputExample': "inputExample_example", // String | Input example
  'consoleData': "consoleData_example", // String | Console data
  'scopeId': "scopeId_example", // String | Scope ID. Example: \"225494730938493804\".
  'sendActivity': false, // Boolean | Send activity
  'scriptContent': "null", // String | Content of the script file, applicable only if is_duplication is true
  'packageMaxSize': "209715200", // String | Package max size
  'packageEndpointExpiration': "packageEndpointExpiration_example", // String | Package expiration option on endpoint. Example: \"None\".
  'scriptDescription': "scriptDescription_example", // String | Script description
  'originalScriptId': "originalScriptId_example", // String | ID of script, from which the script/package files will becopied, applicable ony if is_duplication is true. Example: \"225494730938493804\".
  'packageEndpointExpirationSeconds': 56, // Number | Package expiration time on endpoint
  'isScriptContentEncoded': false, // Boolean | True if script content is encoded
  'packageRemoved': false, // Boolean | True if package should file should not be copied, applicable only if is_duplication is true
  'scriptRuntimeTimeoutSeconds': 3600, // Number | Script runtime timeout in seconds
  'file': "/path/to/file.txt", // File | File
  'packageFile': "/path/to/file.txt" // File | Package file
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsPost(scriptType, osTypes, inputRequired, scriptName, scopeLevel, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scriptType** | **String**| Script type. Example: \"artifactCollection\". | 
 **osTypes** | [**[String]**](String.md)| Os types. Example: \"m,a,c,o,s,,,l,i,n,u,x\". | 
 **inputRequired** | **Boolean**| Is input required | 
 **scriptName** | **String**| Script name | 
 **scopeLevel** | **String**| Scope level. Example: \"site\". | 
 **isDuplication** | **Boolean**| True if script/package files should be taken from an existing script specified in original_script_id | [optional] [default to false]
 **inputInstructions** | **String**| Input instructions | [optional] 
 **inputExample** | **String**| Input example | [optional] 
 **consoleData** | **String**| Console data | [optional] 
 **scopeId** | **String**| Scope ID. Example: \"225494730938493804\". | [optional] 
 **sendActivity** | **Boolean**| Send activity | [optional] [default to false]
 **scriptContent** | **String**| Content of the script file, applicable only if is_duplication is true | [optional] [default to null]
 **packageMaxSize** | **String**| Package max size | [optional] [default to 209715200]
 **packageEndpointExpiration** | **String**| Package expiration option on endpoint. Example: \"None\". | [optional] 
 **scriptDescription** | **String**| Script description | [optional] 
 **originalScriptId** | **String**| ID of script, from which the script/package files will becopied, applicable ony if is_duplication is true. Example: \"225494730938493804\". | [optional] 
 **packageEndpointExpirationSeconds** | **Number**| Package expiration time on endpoint | [optional] 
 **isScriptContentEncoded** | **Boolean**| True if script content is encoded | [optional] [default to false]
 **packageRemoved** | **Boolean**| True if package should file should not be copied, applicable only if is_duplication is true | [optional] [default to false]
 **scriptRuntimeTimeoutSeconds** | **Number**| Script runtime timeout in seconds | [optional] [default to 3600]
 **file** | **File**| File | [optional] 
 **packageFile** | **File**| Package file | [optional] 

### Return type

[**V21RsoSchemasEnrichedScriptSchema200**](V21RsoSchemasEnrichedScriptSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="webApiRemoteScriptsScriptContentGet"></a>
# **webApiRemoteScriptsScriptContentGet**
> V21RsoSchemasScriptContentSchema200 webApiRemoteScriptsScriptContentGet(opts)

Get script content

Get Script content by script id

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var opts = { 
  'scriptId': "scriptId_example" // String | Script ID. Example: \"225494730938493804\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsScriptContentGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scriptId** | **String**| Script ID. Example: \"225494730938493804\". | [optional] 

### Return type

[**V21RsoSchemasScriptContentSchema200**](V21RsoSchemasScriptContentSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteScriptsStatusGet"></a>
# **webApiRemoteScriptsStatusGet**
> TasksSchemasTaskSchemaMany200 webApiRemoteScriptsStatusGet(opts)

Get Remote Scripts Tasks Status

Get remote scripts tasks using a variety of filters. Accessible via API only<br>parent_task_id or parent_task_id__in query parameter is mandatory

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
  'detailedStatusContains': ["detailedStatusContains_example"], // [String] | Only include tasks with specific detailed status
  'initiatedByContains': ["initiatedByContains_example"], // [String] | Only include tasks from specific initiating user
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
  'ids': ["ids_example"], // [String] | List of IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | Query
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'status': ["status_example"], // [String] | Status in. Example: \"created\".
  'computerNameContains': ["computerNameContains_example"], // [String] | Free-text filter by agent computer name (supports multiple values)
  'type': "type_example", // String | Type
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'parentTaskId': "parentTaskId_example", // String | parent task id to fetch the status by. Example: \"225494730938493804\".
  'parentTaskIdIn': ["parentTaskIdIn_example"], // [String] | List of IDs to filter by
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'descriptionContains': ["descriptionContains_example"], // [String] | Only include tasks with specific description
  'uuidContains': ["uuidContains_example"], // [String] | Free-text filter by agent UUID (supports multiple values)
  'types': ["types_example"] // [String] | Type in
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsStatusGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **createdAtGt** | **Date**| Created at greater than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **detailedStatusContains** | [**[String]**](String.md)| Only include tasks with specific detailed status | [optional] 
 **initiatedByContains** | [**[String]**](String.md)| Only include tasks from specific initiating user | [optional] 
 **updatedAtLt** | **Date**| Updated at lesser than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **ids** | [**[String]**](String.md)| List of IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| Query | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **createdAtLt** | **Date**| Created at lesser than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **updatedAtGte** | **Date**| Updated at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **updatedAtGt** | **Date**| Updated at greater than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **createdAtLte** | **Date**| Created at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **status** | [**[String]**](String.md)| Status in. Example: \"created\". | [optional] 
 **computerNameContains** | [**[String]**](String.md)| Free-text filter by agent computer name (supports multiple values) | [optional] 
 **type** | **String**| Type | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **updatedAtLte** | **Date**| Updated at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **parentTaskId** | **String**| parent task id to fetch the status by. Example: \"225494730938493804\". | [optional] 
 **parentTaskIdIn** | [**[String]**](String.md)| List of IDs to filter by | [optional] 
 **createdAtGte** | **Date**| Created at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **descriptionContains** | [**[String]**](String.md)| Only include tasks with specific description | [optional] 
 **uuidContains** | [**[String]**](String.md)| Free-text filter by agent UUID (supports multiple values) | [optional] 
 **types** | [**[String]**](String.md)| Type in | [optional] 

### Return type

[**TasksSchemasTaskSchemaMany200**](TasksSchemasTaskSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteScriptsscriptIdPut"></a>
# **webApiRemoteScriptsscriptIdPut**
> V21RsoSchemasEnrichedScriptSchema200 webApiRemoteScriptsscriptIdPut(scriptId, opts)

Update a Script

Change the properties of a given script: runtime timeout, name, and whether input is required (if true, input example and instructions are requried). <br>This command requires the script ID, which you can get from the Get Scripts API.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsScriptsApi();

var scriptId = "scriptId_example"; // String | Script ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.V21RsoSchemasUpdateScript() // V21RsoSchemasUpdateScript | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteScriptsscriptIdPut(scriptId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scriptId** | **String**| Script ID. Example: \"225494730938493804\". | 
 **body** | [**V21RsoSchemasUpdateScript**](V21RsoSchemasUpdateScript.md)|  | [optional] 

### Return type

[**V21RsoSchemasEnrichedScriptSchema200**](V21RsoSchemasEnrichedScriptSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

