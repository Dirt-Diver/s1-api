# S1MgmtApi.UpdatesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiUpdateAgentDownloadpackageIdGet**](UpdatesApi.md#webApiUpdateAgentDownloadpackageIdGet) | **GET** /web/api/v2.1/update/agent/download/{package_id} | Download Agent Package
[**webApiUpdateAgentDownloadsiteIdpackageIdGet**](UpdatesApi.md#webApiUpdateAgentDownloadsiteIdpackageIdGet) | **GET** /web/api/v2.1/update/agent/download/{site_id}/{package_id} | Download Package
[**webApiUpdateAgentLatestPackagesGet**](UpdatesApi.md#webApiUpdateAgentLatestPackagesGet) | **GET** /web/api/v2.1/update/agent/latest-packages | Latest Packages by OS
[**webApiUpdateAgentPackagesDelete**](UpdatesApi.md#webApiUpdateAgentPackagesDelete) | **DELETE** /web/api/v2.1/update/agent/packages | Delete Packages
[**webApiUpdateAgentPackagesGet**](UpdatesApi.md#webApiUpdateAgentPackagesGet) | **GET** /web/api/v2.1/update/agent/packages | Get Latest Packages
[**webApiUpdateAgentPackagespackageIdPut**](UpdatesApi.md#webApiUpdateAgentPackagespackageIdPut) | **PUT** /web/api/v2.1/update/agent/packages/{package_id} | Update package
[**webApiUploadAgentSoftwarePost**](UpdatesApi.md#webApiUploadAgentSoftwarePost) | **POST** /web/api/v2.1/upload/agent/software | Upload Agent Package
[**webApiUploadSoftwareDeployPost**](UpdatesApi.md#webApiUploadSoftwareDeployPost) | **POST** /web/api/v2.1/upload/software/deploy | Deploy System Package
[**webApiUploadSoftwarePost**](UpdatesApi.md#webApiUploadSoftwarePost) | **POST** /web/api/v2.1/upload/software | Upload System Package


<a name="webApiUpdateAgentDownloadpackageIdGet"></a>
# **webApiUpdateAgentDownloadpackageIdGet**
> webApiUpdateAgentDownloadpackageIdGet(packageId)

Download Agent Package

[DEPRECATED] Download an agent package by package ID.Rate limit: 2 call per minute for each different user token

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UpdatesApi();

var packageId = "packageId_example"; // String | Package ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiUpdateAgentDownloadpackageIdGet(packageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packageId** | **String**| Package ID. Example: \"225494730938493804\". | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUpdateAgentDownloadsiteIdpackageIdGet"></a>
# **webApiUpdateAgentDownloadsiteIdpackageIdGet**
> webApiUpdateAgentDownloadsiteIdpackageIdGet(packageId, siteId)

Download Package

Download a package by site_id (\"sites\") and filename. <br>Rate limit: 2 call per minute for each user token. <br>Use this command to manually deploy Agent updates that cannot be deployed with the update-software command (see Agent Actions > Update Software) or through the Console.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UpdatesApi();

var packageId = "packageId_example"; // String | Package ID. Example: \"225494730938493804\".

var siteId = "siteId_example"; // String | Site ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiUpdateAgentDownloadsiteIdpackageIdGet(packageId, siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packageId** | **String**| Package ID. Example: \"225494730938493804\". | 
 **siteId** | **String**| Site ID. Example: \"225494730938493804\". | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUpdateAgentLatestPackagesGet"></a>
# **webApiUpdateAgentLatestPackagesGet**
> PackagesSchemasLatestPackagesSchema200 webApiUpdateAgentLatestPackagesGet(opts)

Latest Packages by OS

[DEPRECATED] Use \"Latest packages\" API call instead (\"GET /web/api/v2.1/update/agent/packages\").

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UpdatesApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'packageType': "packageType_example", // String | Package type. Example: \"Agent\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpdateAgentLatestPackagesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **packageType** | **String**| Package type. Example: \"Agent\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**PackagesSchemasLatestPackagesSchema200**](PackagesSchemasLatestPackagesSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUpdateAgentPackagesDelete"></a>
# **webApiUpdateAgentPackagesDelete**
> AffectedResultsSchema200 webApiUpdateAgentPackagesDelete(opts)

Delete Packages

Delete Agent packages from your Management. Use the IDs from Get Latest Packages.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UpdatesApi();

var opts = { 
  'body': new S1MgmtApi.PackagesSchemasDeletePackagesSchema() // PackagesSchemasDeletePackagesSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpdateAgentPackagesDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PackagesSchemasDeletePackagesSchema**](PackagesSchemasDeletePackagesSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUpdateAgentPackagesGet"></a>
# **webApiUpdateAgentPackagesGet**
> PackagesSchemasVersionUploadListSchemaMany200 webApiUpdateAgentPackagesGet(opts)

Get Latest Packages

Get the Agent packages that are uploaded to your Management. <br>The response shows the data of each package, including the IDs, which you can use in other commands.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UpdatesApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'fileNameContains': ["fileNameContains_example"], // [String] | Free-text filter by file name
  'majorVersions': ["majorVersions_example"], // [String] | Package major versions
  'platformType': "platformType_example", // String | Platform type. Example: \"sdk\".
  'sha1Contains': ["sha1Contains_example"], // [String] | Free-text filter by SHA1 hash
  'ids': ["ids_example"], // [String] | Package ID list. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'osTypes': ["osTypes_example"], // [String] | Os type in. Example: \"sdk\".
  'rangerVersion': "rangerVersion_example", // String | Ranger version. Example: \"2.5.1.1320\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'rangerVersionContains': ["rangerVersionContains_example"], // [String] | Free-text filter by ranger version
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'fileExtension': "fileExtension_example", // String | File extension. Example: \".msi\".
  'versionStrContains': ["versionStrContains_example"], // [String] | Free-text filter by version string
  'siteNameContains': ["siteNameContains_example"], // [String] | Free-text filter by site name
  'sha1': "sha1_example", // String | Package hash. Example: \"2fd4e1c67a2d28fced849ee1bb76e7391b93eb12\".
  'status': ["status_example"], // [String] | Status in. Example: \"ga\".
  'minorVersions': ["minorVersions_example"], // [String] | Package minor versions
  'fileSizeContains': ["fileSizeContains_example"], // [String] | Free-text filter by file size
  'version': "version_example", // String | Agent version. Example: \"2.5.1.1320\".
  'platformTypes': ["platformTypes_example"], // [String] | Platform type in. Example: \"sdk\".
  'accountNameContains': ["accountNameContains_example"], // [String] | Free-text filter by account name
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'packageTypes': ["packageTypes_example"], // [String] | Package type in. Example: \"Agent\".
  'packageType': "packageType_example", // String | Package type. Example: \"Agent\".
  'minorVersion': "minorVersion_example", // String | Package minor version
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'osRevision': "osRevision_example", // String | Agent os revision
  'fileExtensions': ["fileExtensions_example"], // [String] | File extension. Example: \".msi\".
  'osArches': ["osArches_example"] // [String] | Package OS architecture (32/64 bit), applicable to Windows packages only. Example: \"32 bit\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpdateAgentPackagesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **fileNameContains** | [**[String]**](String.md)| Free-text filter by file name | [optional] 
 **majorVersions** | [**[String]**](String.md)| Package major versions | [optional] 
 **platformType** | **String**| Platform type. Example: \"sdk\". | [optional] 
 **sha1Contains** | [**[String]**](String.md)| Free-text filter by SHA1 hash | [optional] 
 **ids** | [**[String]**](String.md)| Package ID list. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **osTypes** | [**[String]**](String.md)| Os type in. Example: \"sdk\". | [optional] 
 **rangerVersion** | **String**| Ranger version. Example: \"2.5.1.1320\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **rangerVersionContains** | [**[String]**](String.md)| Free-text filter by ranger version | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **fileExtension** | **String**| File extension. Example: \".msi\". | [optional] 
 **versionStrContains** | [**[String]**](String.md)| Free-text filter by version string | [optional] 
 **siteNameContains** | [**[String]**](String.md)| Free-text filter by site name | [optional] 
 **sha1** | **String**| Package hash. Example: \"2fd4e1c67a2d28fced849ee1bb76e7391b93eb12\". | [optional] 
 **status** | [**[String]**](String.md)| Status in. Example: \"ga\". | [optional] 
 **minorVersions** | [**[String]**](String.md)| Package minor versions | [optional] 
 **fileSizeContains** | [**[String]**](String.md)| Free-text filter by file size | [optional] 
 **version** | **String**| Agent version. Example: \"2.5.1.1320\". | [optional] 
 **platformTypes** | [**[String]**](String.md)| Platform type in. Example: \"sdk\". | [optional] 
 **accountNameContains** | [**[String]**](String.md)| Free-text filter by account name | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **packageTypes** | [**[String]**](String.md)| Package type in. Example: \"Agent\". | [optional] 
 **packageType** | **String**| Package type. Example: \"Agent\". | [optional] 
 **minorVersion** | **String**| Package minor version | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **osRevision** | **String**| Agent os revision | [optional] 
 **fileExtensions** | [**[String]**](String.md)| File extension. Example: \".msi\". | [optional] 
 **osArches** | [**[String]**](String.md)| Package OS architecture (32/64 bit), applicable to Windows packages only. Example: \"32 bit\". | [optional] 

### Return type

[**PackagesSchemasVersionUploadListSchemaMany200**](PackagesSchemasVersionUploadListSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUpdateAgentPackagespackageIdPut"></a>
# **webApiUpdateAgentPackagespackageIdPut**
> PackagesSchemasVersionUploadSchema200 webApiUpdateAgentPackagespackageIdPut(packageId, opts)

Update package

Update the metadata for an existing package.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UpdatesApi();

var packageId = "packageId_example"; // String | Package ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.PackagesSchemasPutPackageSchema() // PackagesSchemasPutPackageSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUpdateAgentPackagespackageIdPut(packageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **packageId** | **String**| Package ID. Example: \"225494730938493804\". | 
 **body** | [**PackagesSchemasPutPackageSchema**](PackagesSchemasPutPackageSchema.md)|  | [optional] 

### Return type

[**PackagesSchemasVersionUploadSchema200**](PackagesSchemasVersionUploadSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUploadAgentSoftwarePost"></a>
# **webApiUploadAgentSoftwarePost**
> PackagesSchemasVersionUploadSchemaMany200 webApiUploadAgentSoftwarePost(status, file, opts)

Upload Agent Package

If you have an On-Prem Management or you are a participant in the Beta program, you can use this command to upload an Agent package to the Management. Then you can deploy the Agent to update endpoints.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UpdatesApi();

var status = "status_example"; // String | Status. Example: \"ga\".

var file = "/path/to/file.txt"; // File | File

var opts = { 
  'minorVersion': "minorVersion_example", // String | Package minor version. Example: \"SP1\".
  'version': "null", // String | Version. Example: \"2.5.1.1320\".
  'accountIds': ["accountIds_example"], // [String] | List of accounts to make the package available in. Applicable only if scopeLevel is set to \"account\". Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"], // [String] | List of sites to make the package available in. Applicable only if scopeLevel is set to \"site\". Example: \"225494730938493804,225494730938493915\".
  'osType': "null", // String | Platform type. Example: \"sdk\".
  'platformType': "null", // String | Platform type. Example: \"sdk\".
  'scopeLevel': "global" // String | Package scope. If \"global\", it will be available in all sites. Otherwise, it will only be available to the sites/accounts specified in\"siteIds\"/\"accountIds\" attribute. Example: \"site\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUploadAgentSoftwarePost(status, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Status. Example: \"ga\". | 
 **file** | **File**| File | 
 **minorVersion** | **String**| Package minor version. Example: \"SP1\". | [optional] 
 **version** | **String**| Version. Example: \"2.5.1.1320\". | [optional] [default to null]
 **accountIds** | [**[String]**](String.md)| List of accounts to make the package available in. Applicable only if scopeLevel is set to \"account\". Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of sites to make the package available in. Applicable only if scopeLevel is set to \"site\". Example: \"225494730938493804,225494730938493915\". | [optional] 
 **osType** | **String**| Platform type. Example: \"sdk\". | [optional] [default to null]
 **platformType** | **String**| Platform type. Example: \"sdk\". | [optional] [default to null]
 **scopeLevel** | **String**| Package scope. If \"global\", it will be available in all sites. Otherwise, it will only be available to the sites/accounts specified in\"siteIds\"/\"accountIds\" attribute. Example: \"site\". | [optional] [default to global]

### Return type

[**PackagesSchemasVersionUploadSchemaMany200**](PackagesSchemasVersionUploadSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="webApiUploadSoftwareDeployPost"></a>
# **webApiUploadSoftwareDeployPost**
> SuccessResponseSchema200 webApiUploadSoftwareDeployPost()

Deploy System Package

If you have an On-Prem Management or you are a participant in the Beta program, you can upload a Management package and then use this command to deploy the new Management. You must first upload the package (see Upload System Package).

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UpdatesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUploadSoftwareDeployPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUploadSoftwarePost"></a>
# **webApiUploadSoftwarePost**
> SuccessResponseSchema200 webApiUploadSoftwarePost(file)

Upload System Package

If you have an On-Prem Management or otherwise require a manual package upload, use this command to upload an Agent package or a Management package. Then you can deploy the update (see Deploy System Package).

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UpdatesApi();

var file = "/path/to/file.txt"; // File | File


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUploadSoftwarePost(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| File | 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

