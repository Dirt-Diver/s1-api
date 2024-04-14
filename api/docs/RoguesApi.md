# S1MgmtApi.RoguesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiRoguesReportCsvGet**](RoguesApi.md#webApiRoguesReportCsvGet) | **GET** /web/api/v2.1/rogues/report/csv | Export Rogues Data
[**webApiRoguesSettingsGet**](RoguesApi.md#webApiRoguesSettingsGet) | **GET** /web/api/v2.1/rogues/settings | Get Rogues Settings
[**webApiRoguesSettingsPut**](RoguesApi.md#webApiRoguesSettingsPut) | **PUT** /web/api/v2.1/rogues/settings | Update Rogues Settings
[**webApiRoguesTableViewGet**](RoguesApi.md#webApiRoguesTableViewGet) | **GET** /web/api/v2.1/rogues/table-view | Get Rogues Table


<a name="webApiRoguesReportCsvGet"></a>
# **webApiRoguesReportCsvGet**
> webApiRoguesReportCsvGet(opts)

Export Rogues Data

Export Rogues data to CSV. You can set filters to get only relevant data. The response sends the CSV data as text.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RoguesApi();

var opts = { 
  'externalIp': "externalIp_example", // String | Search using external IP
  'hostnamesContains': ["hostnamesContains_example"], // [String] | Free-text filter by hostanem (supports multiple values). Example: \"s1_host,SomeHost\".
  'osVersion': "osVersion_example", // String | Os version
  'deviceTypes': ["deviceTypes_example"], // [String] | Device types
  'ids': ["ids_example"], // [String] | List of device ids. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | Query
  'osVersionContains': ["osVersionContains_example"], // [String] | Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
  'externalIpContains': ["externalIpContains_example"], // [String] | Free-text filter by visible IP (supports multiple values). Example: \"192.168.0.1/24,10.1\".
  'firstSeenLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types
  'lastSeenGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'manufacturerContains': ["manufacturerContains_example"], // [String] | Free-text filter by manufacturer (supports multiple values). Example: \"Company\".
  'firstSeenBetween': "firstSeenBetween_example", // String | Date range refor first seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'hostnames': ["hostnames_example"], // [String] | Hostnames
  'localIpContains': ["localIpContains_example"], // [String] | Free-text filter by IP Address (supports multiple values). Example: \"192.168.0.1/24,10.1\".
  'lastSeenLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'firstSeenGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'macAddress': "macAddress_example", // String | A mac address to search for
  'tenant': true, // Boolean | Indicates a tenant scope request
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'firstSeenLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'localIp': "localIp_example", // String | Search using local IP
  'lastSeenGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'manufacturer': "manufacturer_example", // String | Manufacturer of the device or network interface
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'osType': "osType_example", // String | OS type
  'firstSeenGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'macAddressContains': ["macAddressContains_example"], // [String] | Free-text filter by mac address (supports multiple values). Example: \"aa:ee:b1\".
  'lastSeenBetween': "lastSeenBetween_example", // String | Date range for last seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'deviceType': "deviceType_example", // String | Device type. Example: \"Server/Workstation/...\".
  'lastSeenLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'osName': "osName_example" // String | Os name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiRoguesReportCsvGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalIp** | **String**| Search using external IP | [optional] 
 **hostnamesContains** | [**[String]**](String.md)| Free-text filter by hostanem (supports multiple values). Example: \"s1_host,SomeHost\". | [optional] 
 **osVersion** | **String**| Os version | [optional] 
 **deviceTypes** | [**[String]**](String.md)| Device types | [optional] 
 **ids** | [**[String]**](String.md)| List of device ids. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| Query | [optional] 
 **osVersionContains** | [**[String]**](String.md)| Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **externalIpContains** | [**[String]**](String.md)| Free-text filter by visible IP (supports multiple values). Example: \"192.168.0.1/24,10.1\". | [optional] 
 **firstSeenLte** | **Date**| Devices first seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types | [optional] 
 **lastSeenGt** | **Date**| Devices last seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **manufacturerContains** | [**[String]**](String.md)| Free-text filter by manufacturer (supports multiple values). Example: \"Company\". | [optional] 
 **firstSeenBetween** | **String**| Date range refor first seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **hostnames** | [**[String]**](String.md)| Hostnames | [optional] 
 **localIpContains** | [**[String]**](String.md)| Free-text filter by IP Address (supports multiple values). Example: \"192.168.0.1/24,10.1\". | [optional] 
 **lastSeenLte** | **Date**| Devices last seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **firstSeenGt** | **Date**| Devices first seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **macAddress** | **String**| A mac address to search for | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **firstSeenLt** | **Date**| Devices first seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **localIp** | **String**| Search using local IP | [optional] 
 **lastSeenGte** | **Date**| Devices last seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **manufacturer** | **String**| Manufacturer of the device or network interface | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **osType** | **String**| OS type | [optional] 
 **firstSeenGte** | **Date**| Devices first seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **macAddressContains** | [**[String]**](String.md)| Free-text filter by mac address (supports multiple values). Example: \"aa:ee:b1\". | [optional] 
 **lastSeenBetween** | **String**| Date range for last seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **deviceType** | **String**| Device type. Example: \"Server/Workstation/...\". | [optional] 
 **lastSeenLt** | **Date**| Devices last seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osName** | **String**| Os name | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRoguesSettingsGet"></a>
# **webApiRoguesSettingsGet**
> RogueSchemasRoguesSettingsSchema200 webApiRoguesSettingsGet(opts)

Get Rogues Settings

Rogues gives full visibility of all unsecured devices connected to your network. Rogues scans your corporate environment to identify and manage connected devices, even those not protected by or supported by SentinelOne. Rogues identifies devices as:<BR> * UnSecured - End-user computer or laptop, or server, without a SentinelOne Agent.<BR> When you install Windows Agents with Rogues, the Agents can become scanners. Selected scanners from networks that you enable for scanning find connected devices with passive and active scan techniques. The scanners send the collected data to Rogues on the Management. Rogues then runs fingerprinting to identify and classify unique devices and to update the Device Inventory Table in the Management Console. With port scanning, it is important that you understand the legal and ethical considerations and that you document a Rogues plan and implementation. See Legal Considerations and Proper Implementation in the Console Help.<BR> * minAgentsInNetworkToScan - To help you determine which networks are corporate, Rogues looks at the number of secured endpoints (Agents) in a network. If there are not enough Agents in a network - set by this parameter value - Rogues considers the network to be non-corporate and will not scan it.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RoguesApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRoguesSettingsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**RogueSchemasRoguesSettingsSchema200**](RogueSchemasRoguesSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRoguesSettingsPut"></a>
# **webApiRoguesSettingsPut**
> RogueSchemasRoguesSettingsSchema200 webApiRoguesSettingsPut(opts)

Update Rogues Settings

Change the Rogues Settings. Best Practice: Get the current settings before you change them. See: Get Rogues Settings.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RoguesApi();

var opts = { 
  'body': new S1MgmtApi.RogueSchemasPutRoguesSchema() // RogueSchemasPutRoguesSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRoguesSettingsPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RogueSchemasPutRoguesSchema**](RogueSchemasPutRoguesSchema.md)|  | [optional] 

### Return type

[**RogueSchemasRoguesSettingsSchema200**](RogueSchemasRoguesSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRoguesTableViewGet"></a>
# **webApiRoguesTableViewGet**
> RogueSchemasRoguesTableViewSchemaMany200 webApiRoguesTableViewGet(opts)

Get Rogues Table

Get the data for each row in the Rogues Device Inventory Table. <BR>Best practice: Set filters. Each row is a set of parameters that quickly fills the pagination limits.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RoguesApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'externalIp': "externalIp_example", // String | Search using external IP
  'hostnamesContains': ["hostnamesContains_example"], // [String] | Free-text filter by hostanem (supports multiple values). Example: \"s1_host,SomeHost\".
  'osVersion': "osVersion_example", // String | Os version
  'ids': ["ids_example"], // [String] | List of device ids. Example: \"225494730938493804,225494730938493915\".
  'deviceTypes': ["deviceTypes_example"], // [String] | Device types
  'query': "query_example", // String | Query
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'osVersionContains': ["osVersionContains_example"], // [String] | Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
  'externalIpContains': ["externalIpContains_example"], // [String] | Free-text filter by visible IP (supports multiple values). Example: \"192.168.0.1/24,10.1\".
  'firstSeenLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'lastSeenGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'manufacturerContains': ["manufacturerContains_example"], // [String] | Free-text filter by manufacturer (supports multiple values). Example: \"Company\".
  'firstSeenBetween': "firstSeenBetween_example", // String | Date range refor first seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'hostnames': ["hostnames_example"], // [String] | Hostnames
  'localIpContains': ["localIpContains_example"], // [String] | Free-text filter by IP Address (supports multiple values). Example: \"192.168.0.1/24,10.1\".
  'lastSeenLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'firstSeenGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'macAddress': "macAddress_example", // String | A mac address to search for
  'tenant': true, // Boolean | Indicates a tenant scope request
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'firstSeenLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'localIp': "localIp_example", // String | Search using local IP
  'lastSeenGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'manufacturer': "manufacturer_example", // String | Manufacturer of the device or network interface
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'osType': "osType_example", // String | OS type
  'firstSeenGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'macAddressContains': ["macAddressContains_example"], // [String] | Free-text filter by mac address (supports multiple values). Example: \"aa:ee:b1\".
  'lastSeenBetween': "lastSeenBetween_example", // String | Date range for last seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'deviceType': "deviceType_example", // String | Device type. Example: \"Server/Workstation/...\".
  'lastSeenLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'osName': "osName_example" // String | Os name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRoguesTableViewGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **externalIp** | **String**| Search using external IP | [optional] 
 **hostnamesContains** | [**[String]**](String.md)| Free-text filter by hostanem (supports multiple values). Example: \"s1_host,SomeHost\". | [optional] 
 **osVersion** | **String**| Os version | [optional] 
 **ids** | [**[String]**](String.md)| List of device ids. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **deviceTypes** | [**[String]**](String.md)| Device types | [optional] 
 **query** | **String**| Query | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **osVersionContains** | [**[String]**](String.md)| Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **externalIpContains** | [**[String]**](String.md)| Free-text filter by visible IP (supports multiple values). Example: \"192.168.0.1/24,10.1\". | [optional] 
 **firstSeenLte** | **Date**| Devices first seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **lastSeenGt** | **Date**| Devices last seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **manufacturerContains** | [**[String]**](String.md)| Free-text filter by manufacturer (supports multiple values). Example: \"Company\". | [optional] 
 **firstSeenBetween** | **String**| Date range refor first seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **hostnames** | [**[String]**](String.md)| Hostnames | [optional] 
 **localIpContains** | [**[String]**](String.md)| Free-text filter by IP Address (supports multiple values). Example: \"192.168.0.1/24,10.1\". | [optional] 
 **lastSeenLte** | **Date**| Devices last seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **firstSeenGt** | **Date**| Devices first seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **macAddress** | **String**| A mac address to search for | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **firstSeenLt** | **Date**| Devices first seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **localIp** | **String**| Search using local IP | [optional] 
 **lastSeenGte** | **Date**| Devices last seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **manufacturer** | **String**| Manufacturer of the device or network interface | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **osType** | **String**| OS type | [optional] 
 **firstSeenGte** | **Date**| Devices first seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **macAddressContains** | [**[String]**](String.md)| Free-text filter by mac address (supports multiple values). Example: \"aa:ee:b1\". | [optional] 
 **lastSeenBetween** | **String**| Date range for last seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **deviceType** | **String**| Device type. Example: \"Server/Workstation/...\". | [optional] 
 **lastSeenLt** | **Date**| Devices last seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osName** | **String**| Os name | [optional] 

### Return type

[**RogueSchemasRoguesTableViewSchemaMany200**](RogueSchemasRoguesTableViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

