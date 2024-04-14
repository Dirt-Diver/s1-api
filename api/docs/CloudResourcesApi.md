# S1MgmtApi.CloudResourcesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiCloudnativeCloudRoguesExportGet**](CloudResourcesApi.md#webApiCloudnativeCloudRoguesExportGet) | **GET** /web/api/v2.1/cloudnative/cloud-rogues/export | Export cloud rogue resources to csv
[**webApiCloudnativeCloudRoguesGet**](CloudResourcesApi.md#webApiCloudnativeCloudRoguesGet) | **GET** /web/api/v2.1/cloudnative/cloud-rogues | Get cloud rogue resources


<a name="webApiCloudnativeCloudRoguesExportGet"></a>
# **webApiCloudnativeCloudRoguesExportGet**
> webApiCloudnativeCloudRoguesExportGet(exportFormat, opts)

Export cloud rogue resources to csv

Returns the results for given cloud rogues filter in a csv format

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.CloudResourcesApi();

var exportFormat = "exportFormat_example"; // String | Export format. Example: \"csv\".

var opts = { 
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types. Example: \"macos\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'cloudProviderName': ["cloudProviderName_example"], // [String] | Filter by cloud provider name (supports multiple values)
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'idContains': ["idContains_example"], // [String] | Free-text filter by id (supports multiple values)
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'cloudProviderAccountIdContains': ["cloudProviderAccountIdContains_example"], // [String] | Free-text filter by cloud account id (supports multiple values)
  'virtualNetworkIdContains': ["virtualNetworkIdContains_example"], // [String] | Free-text filter by network id (supports multiple values)
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by resource name (supports multiple values)
  'cloudProviderAccountNameContains': ["cloudProviderAccountNameContains_example"], // [String] | Free-text filter by cloud account (supports multiple values)
  'cloudProviderAccountName': ["cloudProviderAccountName_example"], // [String] | Filter by cloud account (supports multiple values)
  'region': ["region_example"], // [String] | Filter by region (supports multiple values)
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'imageContains': ["imageContains_example"], // [String] | Free-text filter by image (supports multiple values)
  'regionContains': ["regionContains_example"], // [String] | Free-text filter by region (supports multiple values)
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiCloudnativeCloudRoguesExportGet(exportFormat, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportFormat** | **String**| Export format. Example: \"csv\". | 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types. Example: \"macos\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **cloudProviderName** | [**[String]**](String.md)| Filter by cloud provider name (supports multiple values) | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **idContains** | [**[String]**](String.md)| Free-text filter by id (supports multiple values) | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **cloudProviderAccountIdContains** | [**[String]**](String.md)| Free-text filter by cloud account id (supports multiple values) | [optional] 
 **virtualNetworkIdContains** | [**[String]**](String.md)| Free-text filter by network id (supports multiple values) | [optional] 
 **nameContains** | [**[String]**](String.md)| Free-text filter by resource name (supports multiple values) | [optional] 
 **cloudProviderAccountNameContains** | [**[String]**](String.md)| Free-text filter by cloud account (supports multiple values) | [optional] 
 **cloudProviderAccountName** | [**[String]**](String.md)| Filter by cloud account (supports multiple values) | [optional] 
 **region** | [**[String]**](String.md)| Filter by region (supports multiple values) | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **imageContains** | [**[String]**](String.md)| Free-text filter by image (supports multiple values) | [optional] 
 **regionContains** | [**[String]**](String.md)| Free-text filter by region (supports multiple values) | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiCloudnativeCloudRoguesGet"></a>
# **webApiCloudnativeCloudRoguesGet**
> V21RoguesSchemasCloudResourcesSchema200 webApiCloudnativeCloudRoguesGet(opts)

Get cloud rogue resources

Returns the cloud rogue resources for given filter

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.CloudResourcesApi();

var opts = { 
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types. Example: \"macos\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'cloudProviderName': ["cloudProviderName_example"], // [String] | Filter by cloud provider name (supports multiple values)
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'idContains': ["idContains_example"], // [String] | Free-text filter by id (supports multiple values)
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'cloudProviderAccountIdContains': ["cloudProviderAccountIdContains_example"], // [String] | Free-text filter by cloud account id (supports multiple values)
  'virtualNetworkIdContains': ["virtualNetworkIdContains_example"], // [String] | Free-text filter by network id (supports multiple values)
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by resource name (supports multiple values)
  'cloudProviderAccountNameContains': ["cloudProviderAccountNameContains_example"], // [String] | Free-text filter by cloud account (supports multiple values)
  'cloudProviderAccountName': ["cloudProviderAccountName_example"], // [String] | Filter by cloud account (supports multiple values)
  'region': ["region_example"], // [String] | Filter by region (supports multiple values)
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'imageContains': ["imageContains_example"], // [String] | Free-text filter by image (supports multiple values)
  'regionContains': ["regionContains_example"], // [String] | Free-text filter by region (supports multiple values)
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiCloudnativeCloudRoguesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types. Example: \"macos\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **cloudProviderName** | [**[String]**](String.md)| Filter by cloud provider name (supports multiple values) | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **idContains** | [**[String]**](String.md)| Free-text filter by id (supports multiple values) | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **cloudProviderAccountIdContains** | [**[String]**](String.md)| Free-text filter by cloud account id (supports multiple values) | [optional] 
 **virtualNetworkIdContains** | [**[String]**](String.md)| Free-text filter by network id (supports multiple values) | [optional] 
 **nameContains** | [**[String]**](String.md)| Free-text filter by resource name (supports multiple values) | [optional] 
 **cloudProviderAccountNameContains** | [**[String]**](String.md)| Free-text filter by cloud account (supports multiple values) | [optional] 
 **cloudProviderAccountName** | [**[String]**](String.md)| Filter by cloud account (supports multiple values) | [optional] 
 **region** | [**[String]**](String.md)| Filter by region (supports multiple values) | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **imageContains** | [**[String]**](String.md)| Free-text filter by image (supports multiple values) | [optional] 
 **regionContains** | [**[String]**](String.md)| Free-text filter by region (supports multiple values) | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21RoguesSchemasCloudResourcesSchema200**](V21RoguesSchemasCloudResourcesSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

