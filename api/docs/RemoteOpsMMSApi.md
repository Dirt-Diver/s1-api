# S1MgmtApi.RemoteOpsMMSApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiRemoteOpsDataExporterDestinationProfilesDelete**](RemoteOpsMMSApi.md#webApiRemoteOpsDataExporterDestinationProfilesDelete) | **DELETE** /web/api/v2.1/remote-ops/data-exporter/destination-profiles | Delete multiple Destination profiles by ID
[**webApiRemoteOpsDataExporterDestinationProfilesGet**](RemoteOpsMMSApi.md#webApiRemoteOpsDataExporterDestinationProfilesGet) | **GET** /web/api/v2.1/remote-ops/data-exporter/destination-profiles | Get available Destination profiles
[**webApiRemoteOpsDataExporterDestinationProfilesPost**](RemoteOpsMMSApi.md#webApiRemoteOpsDataExporterDestinationProfilesPost) | **POST** /web/api/v2.1/remote-ops/data-exporter/destination-profiles | Create new Destination profile.
[**webApiRemoteOpsDataExporterDestinationProfilesSetDefaultPost**](RemoteOpsMMSApi.md#webApiRemoteOpsDataExporterDestinationProfilesSetDefaultPost) | **POST** /web/api/v2.1/remote-ops/data-exporter/destination-profiles/set-default | Set profile as default profile of the scope
[**webApiRemoteOpsDataExporterDestinationProfilesprofileIdDelete**](RemoteOpsMMSApi.md#webApiRemoteOpsDataExporterDestinationProfilesprofileIdDelete) | **DELETE** /web/api/v2.1/remote-ops/data-exporter/destination-profiles/{profile_id} | Delete Destination profile by ID
[**webApiRemoteOpsDataExporterDestinationProfilesprofileIdGet**](RemoteOpsMMSApi.md#webApiRemoteOpsDataExporterDestinationProfilesprofileIdGet) | **GET** /web/api/v2.1/remote-ops/data-exporter/destination-profiles/{profile_id} | Get Destination profile by ID
[**webApiRemoteOpsDataExporterDestinationProfilesprofileIdPut**](RemoteOpsMMSApi.md#webApiRemoteOpsDataExporterDestinationProfilesprofileIdPut) | **PUT** /web/api/v2.1/remote-ops/data-exporter/destination-profiles/{profile_id} | Update existing Destination profile
[**webApiRemoteOpsDataExporterResultsGet**](RemoteOpsMMSApi.md#webApiRemoteOpsDataExporterResultsGet) | **GET** /web/api/v2.1/remote-ops/data-exporter/results | Get results sent to data exporter


<a name="webApiRemoteOpsDataExporterDestinationProfilesDelete"></a>
# **webApiRemoteOpsDataExporterDestinationProfilesDelete**
> V21DataExporterSchemaDeletedDestinationProfilesResponseSchema200 webApiRemoteOpsDataExporterDestinationProfilesDelete(opts)

Delete multiple Destination profiles by ID

Delete multiple Destination profiles. The profiles that are not possible to delete (e.g.non-existing or user does not have proper permissions) are skipped. IDs of successfully deleted profiles are returned in response.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsMMSApi();

var opts = { 
  'body': new S1MgmtApi.V21DataExporterSchemaDeleteDestinationProfilesRequestSchema() // V21DataExporterSchemaDeleteDestinationProfilesRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsDataExporterDestinationProfilesDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21DataExporterSchemaDeleteDestinationProfilesRequestSchema**](V21DataExporterSchemaDeleteDestinationProfilesRequestSchema.md)|  | [optional] 

### Return type

[**V21DataExporterSchemaDeletedDestinationProfilesResponseSchema200**](V21DataExporterSchemaDeletedDestinationProfilesResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteOpsDataExporterDestinationProfilesGet"></a>
# **webApiRemoteOpsDataExporterDestinationProfilesGet**
> V21DataExporterSchemaGetDestinationProfileResultSchemaMany200 webApiRemoteOpsDataExporterDestinationProfilesGet(opts)

Get available Destination profiles

Get Destination profiles available for the specified scope. The profiles are inherited downwards, e.g. the profiles from parent Account and Tenant scopes are available for a Site. At most one of returned destination profiles will be marked as default for the scope. If the scope does not have default profile defined, it's inherited from the higher scope, unless inheritance was broken

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsMMSApi();

var opts = { 
  'scopeLevel': "scopeLevel_example", // String | Scope level to get Destination profile configuration. Example: \"tenant\".
  'scopeId': "scopeId_example" // String | Scope ID to get Destination profiles configuration. Example: \"225494730938493804\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsDataExporterDestinationProfilesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scopeLevel** | **String**| Scope level to get Destination profile configuration. Example: \"tenant\". | [optional] 
 **scopeId** | **String**| Scope ID to get Destination profiles configuration. Example: \"225494730938493804\". | [optional] 

### Return type

[**V21DataExporterSchemaGetDestinationProfileResultSchemaMany200**](V21DataExporterSchemaGetDestinationProfileResultSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteOpsDataExporterDestinationProfilesPost"></a>
# **webApiRemoteOpsDataExporterDestinationProfilesPost**
> V21DataExporterSchemaProfileIdResponseSchema200 webApiRemoteOpsDataExporterDestinationProfilesPost(opts)

Create new Destination profile.

Create Destination profile inside specified scope. If the created profile is requested to be default, the default profile of the specified scope is overriden.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsMMSApi();

var opts = { 
  'body': new S1MgmtApi.V21DataExporterSchemaPostDestinationProfileRequestSchema() // V21DataExporterSchemaPostDestinationProfileRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsDataExporterDestinationProfilesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21DataExporterSchemaPostDestinationProfileRequestSchema**](V21DataExporterSchemaPostDestinationProfileRequestSchema.md)|  | [optional] 

### Return type

[**V21DataExporterSchemaProfileIdResponseSchema200**](V21DataExporterSchemaProfileIdResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteOpsDataExporterDestinationProfilesSetDefaultPost"></a>
# **webApiRemoteOpsDataExporterDestinationProfilesSetDefaultPost**
> webApiRemoteOpsDataExporterDestinationProfilesSetDefaultPost(opts)

Set profile as default profile of the scope

Set profile as default profile of the scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsMMSApi();

var opts = { 
  'body': new S1MgmtApi.V21DataExporterSchemaSetDefaultDestinationProfile() // V21DataExporterSchemaSetDefaultDestinationProfile | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiRemoteOpsDataExporterDestinationProfilesSetDefaultPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21DataExporterSchemaSetDefaultDestinationProfile**](V21DataExporterSchemaSetDefaultDestinationProfile.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteOpsDataExporterDestinationProfilesprofileIdDelete"></a>
# **webApiRemoteOpsDataExporterDestinationProfilesprofileIdDelete**
> webApiRemoteOpsDataExporterDestinationProfilesprofileIdDelete(profileId)

Delete Destination profile by ID

Delete Destination profile with specified ID. If the profile was used as default for a scope, the last created profile will be marked as default for that scope.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsMMSApi();

var profileId = "profileId_example"; // String | Profile ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiRemoteOpsDataExporterDestinationProfilesprofileIdDelete(profileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| Profile ID. Example: \"225494730938493804\". | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteOpsDataExporterDestinationProfilesprofileIdGet"></a>
# **webApiRemoteOpsDataExporterDestinationProfilesprofileIdGet**
> V21DataExporterSchemaGetDestinationProfileResultSchema200 webApiRemoteOpsDataExporterDestinationProfilesprofileIdGet(profileId, opts)

Get Destination profile by ID

Get Destination profile with specified ID

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsMMSApi();

var profileId = "profileId_example"; // String | Profile ID. Example: \"225494730938493804\".

var opts = { 
  'scopeLevel': "scopeLevel_example", // String | Scope level to get Destination profile configuration. Example: \"tenant\".
  'scopeId': "scopeId_example" // String | Scope ID to get Destination profiles configuration. Example: \"225494730938493804\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsDataExporterDestinationProfilesprofileIdGet(profileId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| Profile ID. Example: \"225494730938493804\". | 
 **scopeLevel** | **String**| Scope level to get Destination profile configuration. Example: \"tenant\". | [optional] 
 **scopeId** | **String**| Scope ID to get Destination profiles configuration. Example: \"225494730938493804\". | [optional] 

### Return type

[**V21DataExporterSchemaGetDestinationProfileResultSchema200**](V21DataExporterSchemaGetDestinationProfileResultSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRemoteOpsDataExporterDestinationProfilesprofileIdPut"></a>
# **webApiRemoteOpsDataExporterDestinationProfilesprofileIdPut**
> V21DataExporterSchemaProfileIdResponseSchema200 webApiRemoteOpsDataExporterDestinationProfilesprofileIdPut(profileId, opts)

Update existing Destination profile

Update contents of existing Destination profile with specified ID. All the profile data should be specified, even if the values are not changed. If the updated profile is requested to be default, the default profile of its scope is modified.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsMMSApi();

var profileId = "profileId_example"; // String | Profile ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.V21DataExporterSchemaPutDestinationProfileRequestSchema() // V21DataExporterSchemaPutDestinationProfileRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsDataExporterDestinationProfilesprofileIdPut(profileId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| Profile ID. Example: \"225494730938493804\". | 
 **body** | [**V21DataExporterSchemaPutDestinationProfileRequestSchema**](V21DataExporterSchemaPutDestinationProfileRequestSchema.md)|  | [optional] 

### Return type

[**V21DataExporterSchemaProfileIdResponseSchema200**](V21DataExporterSchemaProfileIdResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRemoteOpsDataExporterResultsGet"></a>
# **webApiRemoteOpsDataExporterResultsGet**
> V21DataExporterSchemaSkylightUploadResults200 webApiRemoteOpsDataExporterResultsGet(agentId, opts)

Get results sent to data exporter

Get results sent to data exporter

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RemoteOpsMMSApi();

var agentId = "agentId_example"; // String | Id of the agent the data came from

var opts = { 
  'maliciousGroupId': "maliciousGroupId_example", // String | Threat malicious group id
  'taskId': "taskId_example" // String | Task id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRemoteOpsDataExporterResultsGet(agentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| Id of the agent the data came from | 
 **maliciousGroupId** | **String**| Threat malicious group id | [optional] 
 **taskId** | **String**| Task id | [optional] 

### Return type

[**V21DataExporterSchemaSkylightUploadResults200**](V21DataExporterSchemaSkylightUploadResults200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

