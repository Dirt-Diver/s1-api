# S1MgmtApi.RangerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiRangerDeviceReviewPost**](RangerApi.md#webApiRangerDeviceReviewPost) | **POST** /web/api/v2.1/ranger/device-review | Change Device Review in Bulk
[**webApiRangerDeviceReviewinventoryIdPut**](RangerApi.md#webApiRangerDeviceReviewinventoryIdPut) | **PUT** /web/api/v2.1/ranger/device-review/{inventory_id} | Change Device Review
[**webApiRangerReportCsvGet**](RangerApi.md#webApiRangerReportCsvGet) | **GET** /web/api/v2.1/ranger/report/csv | Export Ranger Data
[**webApiRangerSettingsGet**](RangerApi.md#webApiRangerSettingsGet) | **GET** /web/api/v2.1/ranger/settings | Get Ranger Settings
[**webApiRangerSettingsPut**](RangerApi.md#webApiRangerSettingsPut) | **PUT** /web/api/v2.1/ranger/settings | Update Ranger Settings
[**webApiRangerTableViewGet**](RangerApi.md#webApiRangerTableViewGet) | **GET** /web/api/v2.1/ranger/table-view | Get Ranger Table
[**webApiRangerTagsPost**](RangerApi.md#webApiRangerTagsPost) | **POST** /web/api/v2.1/ranger/tags | Change Device Tags
[**webApiRangerinventoryIdJsonExportGet**](RangerApi.md#webApiRangerinventoryIdJsonExportGet) | **GET** /web/api/v2.1/ranger/{inventory_id}/json/export | Export JSON Raw Data
[**webApiRangerinventoryIdJsonGet**](RangerApi.md#webApiRangerinventoryIdJsonGet) | **GET** /web/api/v2.1/ranger/{inventory_id}/json | JSON Raw Data


<a name="webApiRangerDeviceReviewPost"></a>
# **webApiRangerDeviceReviewPost**
> AffectedResultsSchema200 webApiRangerDeviceReviewPost(opts)

Change Device Review in Bulk

Change the review state of more than one device.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerApi();

var opts = { 
  'body': new S1MgmtApi.SchemasDeviceReviewSchema() // SchemasDeviceReviewSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerDeviceReviewPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SchemasDeviceReviewSchema**](SchemasDeviceReviewSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRangerDeviceReviewinventoryIdPut"></a>
# **webApiRangerDeviceReviewinventoryIdPut**
> SchemasRangerTableViewSchema200 webApiRangerDeviceReviewinventoryIdPut(inventoryId, opts)

Change Device Review

Change the review state of one device.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerApi();

var inventoryId = "inventoryId_example"; // String | Inventory ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.SchemasDeviceReviewSchemaPut() // SchemasDeviceReviewSchemaPut | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerDeviceReviewinventoryIdPut(inventoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| Inventory ID. Example: \"225494730938493804\". | 
 **body** | [**SchemasDeviceReviewSchemaPut**](SchemasDeviceReviewSchemaPut.md)|  | [optional] 

### Return type

[**SchemasRangerTableViewSchema200**](SchemasRangerTableViewSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRangerReportCsvGet"></a>
# **webApiRangerReportCsvGet**
> webApiRangerReportCsvGet(opts)

Export Ranger Data

Export Ranger data to csv. You can set filters to get only relevant data. The response sends the csv data as text.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerApi();

var opts = { 
  'agentIds': ["agentIds_example"], // [String] | List of agent ids. Example: \"225494730938493804,225494730938493915\".
  'externalIp': "externalIp_example", // String | Search using external IP
  'managedState': "managedState_example", // String | Is the device managed
  'discoveryMethods': ["discoveryMethods_example"], // [String] | Discovery methods
  'udpPortsContains': [3.4], // [Number] | Free-text filter by udp port (supports multiple values). Example: \"137,2002\".
  'hostnamesContains': ["hostnamesContains_example"], // [String] | Free-text filter by hostname (supports multiple values). Example: \"s1_host,SomeHost\".
  'osVersion': "osVersion_example", // String | Os version
  'deviceTypes': ["deviceTypes_example"], // [String] | Device types
  'ids': ["ids_example"], // [String] | List of device ids. Example: \"225494730938493804,225494730938493915\".
  'networkNameContains': ["networkNameContains_example"], // [String] | Free-text filter by network name (supports multiple values). Example: \"Office\".
  'query': "query_example", // String | Query
  'networkName': "networkName_example", // String | Search using network name
  'osVersionContains': ["osVersionContains_example"], // [String] | Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
  'externalIpContains': ["externalIpContains_example"], // [String] | Free-text filter by visible IP (supports multiple values). Example: \"192.168.0.1/24,10.1\".
  'firstSeenLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types
  'deviceReviews': ["deviceReviews_example"], // [String] | The device review state
  'gatewayMacAddress': "gatewayMacAddress_example", // String | A gateway mac address to search for
  'osName': "osName_example", // String | Os name
  'lastSeenGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'manufacturerContains': ["manufacturerContains_example"], // [String] | Free-text filter by manufacturer (supports multiple values). Example: \"Company\".
  'period': "latest", // String | Period. Example: \"latest\".
  'firstSeenBetween': "firstSeenBetween_example", // String | Date range refor first seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'hostnames': ["hostnames_example"], // [String] | Hostnames
  'localIpContains': ["localIpContains_example"], // [String] | Free-text filter by IP Address (supports multiple values). Example: \"192.168.0.1/24,10.1\".
  'deviceFunctionContains': ["deviceFunctionContains_example"], // [String] | Free-text filter by device function (supports multiple values). Example: \"security,mobile\".
  'tcpPortsContains': [3.4], // [Number] | Free-text filter by tcp port (supports multiple values). Example: \"80,24\".
  'lastSeenLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'knownFingerprintingData': ["knownFingerprintingData_example"], // [String] | Known fingerprinting data. Example: \"Manufacturer\".
  'firstSeenGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'macAddress': "macAddress_example", // String | A mac address to search for
  'firstSeenLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'localIp': "localIp_example", // String | Search using local IP
  'managedStates': ["managedStates_example"], // [String] | Is the device managed
  'lastSeenGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'manufacturer': "manufacturer_example", // String | Manufacturer of the device or network interface
  'subnetAddressContains': ["subnetAddressContains_example"], // [String] | Free-text filter by Subnet Address (supports multiple values). Example: \"192.168.0.1/24,10.1\".
  'siteIds': ["siteIds_example"], // [String] | Single Site ID to filter by. Example: \"225494730938493804\".
  'accountIds': ["accountIds_example"], // [String] | Single Account ID to filter by. Example: \"225494730938493804\".
  'gatewayMacAddressContains': ["gatewayMacAddressContains_example"], // [String] | Free-text filter by gateway mac address (supports multiple values). Example: \"aa:ee:b1\".
  'osType': "osType_example", // String | OS type
  'firstSeenGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'macAddressContains': ["macAddressContains_example"], // [String] | Free-text filter by mac address (supports multiple values). Example: \"aa:ee:b1\".
  'lastSeenBetween': "lastSeenBetween_example", // String | Date range for last seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'deviceType': "deviceType_example", // String | Device type. Example: \"Server/Workstation/...\".
  'lastSeenLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'tagNameContains': ["tagNameContains_example"], // [String] | Free-text filter by tag name (supports multiple values). Example: \"iot\".
  'domains': ["domains_example"], // [String] | Included network domains. Example: \"mybusiness,workgroup\".
  'siteNames': ["siteNames_example"] // [String] | Included site names. Example: \"Office,Test\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiRangerReportCsvGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentIds** | [**[String]**](String.md)| List of agent ids. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **externalIp** | **String**| Search using external IP | [optional] 
 **managedState** | **String**| Is the device managed | [optional] 
 **discoveryMethods** | [**[String]**](String.md)| Discovery methods | [optional] 
 **udpPortsContains** | [**[Number]**](Number.md)| Free-text filter by udp port (supports multiple values). Example: \"137,2002\". | [optional] 
 **hostnamesContains** | [**[String]**](String.md)| Free-text filter by hostname (supports multiple values). Example: \"s1_host,SomeHost\". | [optional] 
 **osVersion** | **String**| Os version | [optional] 
 **deviceTypes** | [**[String]**](String.md)| Device types | [optional] 
 **ids** | [**[String]**](String.md)| List of device ids. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **networkNameContains** | [**[String]**](String.md)| Free-text filter by network name (supports multiple values). Example: \"Office\". | [optional] 
 **query** | **String**| Query | [optional] 
 **networkName** | **String**| Search using network name | [optional] 
 **osVersionContains** | [**[String]**](String.md)| Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **externalIpContains** | [**[String]**](String.md)| Free-text filter by visible IP (supports multiple values). Example: \"192.168.0.1/24,10.1\". | [optional] 
 **firstSeenLte** | **Date**| Devices first seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types | [optional] 
 **deviceReviews** | [**[String]**](String.md)| The device review state | [optional] 
 **gatewayMacAddress** | **String**| A gateway mac address to search for | [optional] 
 **osName** | **String**| Os name | [optional] 
 **lastSeenGt** | **Date**| Devices last seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **manufacturerContains** | [**[String]**](String.md)| Free-text filter by manufacturer (supports multiple values). Example: \"Company\". | [optional] 
 **period** | **String**| Period. Example: \"latest\". | [optional] [default to latest]
 **firstSeenBetween** | **String**| Date range refor first seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **hostnames** | [**[String]**](String.md)| Hostnames | [optional] 
 **localIpContains** | [**[String]**](String.md)| Free-text filter by IP Address (supports multiple values). Example: \"192.168.0.1/24,10.1\". | [optional] 
 **deviceFunctionContains** | [**[String]**](String.md)| Free-text filter by device function (supports multiple values). Example: \"security,mobile\". | [optional] 
 **tcpPortsContains** | [**[Number]**](Number.md)| Free-text filter by tcp port (supports multiple values). Example: \"80,24\". | [optional] 
 **lastSeenLte** | **Date**| Devices last seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **knownFingerprintingData** | [**[String]**](String.md)| Known fingerprinting data. Example: \"Manufacturer\". | [optional] 
 **firstSeenGt** | **Date**| Devices first seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **macAddress** | **String**| A mac address to search for | [optional] 
 **firstSeenLt** | **Date**| Devices first seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **localIp** | **String**| Search using local IP | [optional] 
 **managedStates** | [**[String]**](String.md)| Is the device managed | [optional] 
 **lastSeenGte** | **Date**| Devices last seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **manufacturer** | **String**| Manufacturer of the device or network interface | [optional] 
 **subnetAddressContains** | [**[String]**](String.md)| Free-text filter by Subnet Address (supports multiple values). Example: \"192.168.0.1/24,10.1\". | [optional] 
 **siteIds** | [**[String]**](String.md)| Single Site ID to filter by. Example: \"225494730938493804\". | [optional] 
 **accountIds** | [**[String]**](String.md)| Single Account ID to filter by. Example: \"225494730938493804\". | [optional] 
 **gatewayMacAddressContains** | [**[String]**](String.md)| Free-text filter by gateway mac address (supports multiple values). Example: \"aa:ee:b1\". | [optional] 
 **osType** | **String**| OS type | [optional] 
 **firstSeenGte** | **Date**| Devices first seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **macAddressContains** | [**[String]**](String.md)| Free-text filter by mac address (supports multiple values). Example: \"aa:ee:b1\". | [optional] 
 **lastSeenBetween** | **String**| Date range for last seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **deviceType** | **String**| Device type. Example: \"Server/Workstation/...\". | [optional] 
 **lastSeenLt** | **Date**| Devices last seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **tagNameContains** | [**[String]**](String.md)| Free-text filter by tag name (supports multiple values). Example: \"iot\". | [optional] 
 **domains** | [**[String]**](String.md)| Included network domains. Example: \"mybusiness,workgroup\". | [optional] 
 **siteNames** | [**[String]**](String.md)| Included site names. Example: \"Office,Test\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRangerSettingsGet"></a>
# **webApiRangerSettingsGet**
> SchemasRangerSettingsSchema200 webApiRangerSettingsGet(opts)

Get Ranger Settings

Ranger gives full visibility of all devices connected to your network. Ranger scans your corporate environment to identify and manage connected devices, even those not protected by or supported by SentinelOne. Ranger identifies devices as:<br>* Secured - End-user computer or laptop, or server, with a SentinelOne Agent.<br>* Unsecured - Endpoint of supported hardware and OS, without an Agent.<br>* Unsupported - Hardware or software that are not compatible with the SentinelOne Agent.<br>* Unknown - Ranger cannot determine if the device is Unsecured or Unsupported.<br>When you install Windows Agents with Ranger, the Agents can become scanners. Selected scanners from networks that you enable for scanning find connected devices with passive and active scan techniques. The scanners send the collected data to Ranger on the Management. Ranger then runs fingerprinting to identify and classify unique devices and to update the Device Inventory Table in the Management Console. With port scanning, it is important that you understand the legal and ethical considerations and that you document a Ranger plan and implementation. See https://support.sentinelone.com/hc/en-us/articles/360041484913 > Legal Considerations and Proper Implementation.<br>Requirements:  Ranger license, Cloud-based Management (not supported for On-Prem), Global user or Account user with scope access to the Account with a Ranger license.<br>Use this command to get the Ranger Settings for the Account of the given ID (run \"accounts\" to get an Account ID). The Response shows if Ranger is enabled on the Account, the protocols and ports of the scans, and more:<br>* minAgentsInNetworkToScan - To help you determine which networks are corporate, Ranger looks at the number of secured endpoints (Agents) in a network. If there are not enough Agents in a network - set by this parameter value - Ranger considers the network to be non-corporate and will not scan it.<br>* scanOnlyLocalSubnets - If false, Ranger scans remote subnets that do not have online Ranger scanners. This will create network traffic through the corporate firewall (and between different corporate locations), which can impact network performance.<br>* usePeriodicSnapshots - A complete scan includes scanner port scanning and Ranger AI analysis of the scanner data to update the Device Inventory Snapshot. If this setting is true, Ranger runs a new scan on an interval. If snapshotPeriod is shorter, the data is more accurate. If longer, there is better performance.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerApi();

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
apiInstance.webApiRangerSettingsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**SchemasRangerSettingsSchema200**](SchemasRangerSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRangerSettingsPut"></a>
# **webApiRangerSettingsPut**
> SchemasRangerSettingsSchema200 webApiRangerSettingsPut(opts)

Update Ranger Settings

Change the Ranger Settings. Best Practice: Get the current settings before you change them. See: Get Ranger Settings.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerApi();

var opts = { 
  'body': new S1MgmtApi.SchemasPutRangerSchema() // SchemasPutRangerSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerSettingsPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SchemasPutRangerSchema**](SchemasPutRangerSchema.md)|  | [optional] 

### Return type

[**SchemasRangerSettingsSchema200**](SchemasRangerSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRangerTableViewGet"></a>
# **webApiRangerTableViewGet**
> SchemasRangerTableViewSchemaMany200 webApiRangerTableViewGet(opts)

Get Ranger Table

Get the data for each row in the Ranger Device Inventory Table. Best practice: Set filters. Each row is a set of parameters that quickly fills the pagination limits.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'agentIds': ["agentIds_example"], // [String] | List of agent ids. Example: \"225494730938493804,225494730938493915\".
  'externalIp': "externalIp_example", // String | Search using external IP
  'managedState': "managedState_example", // String | Is the device managed
  'discoveryMethods': ["discoveryMethods_example"], // [String] | Discovery methods
  'udpPortsContains': [3.4], // [Number] | Free-text filter by udp port (supports multiple values). Example: \"137,2002\".
  'hostnamesContains': ["hostnamesContains_example"], // [String] | Free-text filter by hostname (supports multiple values). Example: \"s1_host,SomeHost\".
  'osVersion': "osVersion_example", // String | Os version
  'ids': ["ids_example"], // [String] | List of device ids. Example: \"225494730938493804,225494730938493915\".
  'deviceTypes': ["deviceTypes_example"], // [String] | Device types
  'networkNameContains': ["networkNameContains_example"], // [String] | Free-text filter by network name (supports multiple values). Example: \"Office\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'query': "query_example", // String | Query
  'networkName': "networkName_example", // String | Search using network name
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'externalIpContains': ["externalIpContains_example"], // [String] | Free-text filter by visible IP (supports multiple values). Example: \"192.168.0.1/24,10.1\".
  'firstSeenLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'osVersionContains': ["osVersionContains_example"], // [String] | Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'deviceReviews': ["deviceReviews_example"], // [String] | The device review state
  'gatewayMacAddress': "gatewayMacAddress_example", // String | A gateway mac address to search for
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'lastSeenGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'manufacturerContains': ["manufacturerContains_example"], // [String] | Free-text filter by manufacturer (supports multiple values). Example: \"Company\".
  'period': "latest", // String | Period. Example: \"latest\".
  'firstSeenBetween': "firstSeenBetween_example", // String | Date range refor first seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'hostnames': ["hostnames_example"], // [String] | Hostnames
  'localIpContains': ["localIpContains_example"], // [String] | Free-text filter by IP Address (supports multiple values). Example: \"192.168.0.1/24,10.1\".
  'deviceFunctionContains': ["deviceFunctionContains_example"], // [String] | Free-text filter by device function (supports multiple values). Example: \"security,mobile\".
  'tcpPortsContains': [3.4], // [Number] | Free-text filter by tcp port (supports multiple values). Example: \"80,24\".
  'lastSeenLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'knownFingerprintingData': ["knownFingerprintingData_example"], // [String] | Known fingerprinting data. Example: \"Manufacturer\".
  'firstSeenGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'macAddress': "macAddress_example", // String | A mac address to search for
  'firstSeenLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'localIp': "localIp_example", // String | Search using local IP
  'managedStates': ["managedStates_example"], // [String] | Is the device managed
  'lastSeenGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'manufacturer': "manufacturer_example", // String | Manufacturer of the device or network interface
  'subnetAddressContains': ["subnetAddressContains_example"], // [String] | Free-text filter by Subnet Address (supports multiple values). Example: \"192.168.0.1/24,10.1\".
  'siteNames': ["siteNames_example"], // [String] | Included site names. Example: \"Office,Test\".
  'siteIds': ["siteIds_example"], // [String] | Single Site ID to filter by. Example: \"225494730938493804\".
  'accountIds': ["accountIds_example"], // [String] | Single Account ID to filter by. Example: \"225494730938493804\".
  'gatewayMacAddressContains': ["gatewayMacAddressContains_example"], // [String] | Free-text filter by gateway mac address (supports multiple values). Example: \"aa:ee:b1\".
  'osType': "osType_example", // String | OS type
  'firstSeenGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices first seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'macAddressContains': ["macAddressContains_example"], // [String] | Free-text filter by mac address (supports multiple values). Example: \"aa:ee:b1\".
  'lastSeenBetween': "lastSeenBetween_example", // String | Date range for last seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'deviceType': "deviceType_example", // String | Device type. Example: \"Server/Workstation/...\".
  'lastSeenLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Devices last seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'tagNameContains': ["tagNameContains_example"], // [String] | Free-text filter by tag name (supports multiple values). Example: \"iot\".
  'domains': ["domains_example"], // [String] | Included network domains. Example: \"mybusiness,workgroup\".
  'osName': "osName_example" // String | Os name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerTableViewGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **agentIds** | [**[String]**](String.md)| List of agent ids. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **externalIp** | **String**| Search using external IP | [optional] 
 **managedState** | **String**| Is the device managed | [optional] 
 **discoveryMethods** | [**[String]**](String.md)| Discovery methods | [optional] 
 **udpPortsContains** | [**[Number]**](Number.md)| Free-text filter by udp port (supports multiple values). Example: \"137,2002\". | [optional] 
 **hostnamesContains** | [**[String]**](String.md)| Free-text filter by hostname (supports multiple values). Example: \"s1_host,SomeHost\". | [optional] 
 **osVersion** | **String**| Os version | [optional] 
 **ids** | [**[String]**](String.md)| List of device ids. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **deviceTypes** | [**[String]**](String.md)| Device types | [optional] 
 **networkNameContains** | [**[String]**](String.md)| Free-text filter by network name (supports multiple values). Example: \"Office\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **query** | **String**| Query | [optional] 
 **networkName** | **String**| Search using network name | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **externalIpContains** | [**[String]**](String.md)| Free-text filter by visible IP (supports multiple values). Example: \"192.168.0.1/24,10.1\". | [optional] 
 **firstSeenLte** | **Date**| Devices first seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osVersionContains** | [**[String]**](String.md)| Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **deviceReviews** | [**[String]**](String.md)| The device review state | [optional] 
 **gatewayMacAddress** | **String**| A gateway mac address to search for | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **lastSeenGt** | **Date**| Devices last seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **manufacturerContains** | [**[String]**](String.md)| Free-text filter by manufacturer (supports multiple values). Example: \"Company\". | [optional] 
 **period** | **String**| Period. Example: \"latest\". | [optional] [default to latest]
 **firstSeenBetween** | **String**| Date range refor first seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **hostnames** | [**[String]**](String.md)| Hostnames | [optional] 
 **localIpContains** | [**[String]**](String.md)| Free-text filter by IP Address (supports multiple values). Example: \"192.168.0.1/24,10.1\". | [optional] 
 **deviceFunctionContains** | [**[String]**](String.md)| Free-text filter by device function (supports multiple values). Example: \"security,mobile\". | [optional] 
 **tcpPortsContains** | [**[Number]**](Number.md)| Free-text filter by tcp port (supports multiple values). Example: \"80,24\". | [optional] 
 **lastSeenLte** | **Date**| Devices last seen before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **knownFingerprintingData** | [**[String]**](String.md)| Known fingerprinting data. Example: \"Manufacturer\". | [optional] 
 **firstSeenGt** | **Date**| Devices first seen after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **macAddress** | **String**| A mac address to search for | [optional] 
 **firstSeenLt** | **Date**| Devices first seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **localIp** | **String**| Search using local IP | [optional] 
 **managedStates** | [**[String]**](String.md)| Is the device managed | [optional] 
 **lastSeenGte** | **Date**| Devices last seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **manufacturer** | **String**| Manufacturer of the device or network interface | [optional] 
 **subnetAddressContains** | [**[String]**](String.md)| Free-text filter by Subnet Address (supports multiple values). Example: \"192.168.0.1/24,10.1\". | [optional] 
 **siteNames** | [**[String]**](String.md)| Included site names. Example: \"Office,Test\". | [optional] 
 **siteIds** | [**[String]**](String.md)| Single Site ID to filter by. Example: \"225494730938493804\". | [optional] 
 **accountIds** | [**[String]**](String.md)| Single Account ID to filter by. Example: \"225494730938493804\". | [optional] 
 **gatewayMacAddressContains** | [**[String]**](String.md)| Free-text filter by gateway mac address (supports multiple values). Example: \"aa:ee:b1\". | [optional] 
 **osType** | **String**| OS type | [optional] 
 **firstSeenGte** | **Date**| Devices first seen after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **macAddressContains** | [**[String]**](String.md)| Free-text filter by mac address (supports multiple values). Example: \"aa:ee:b1\". | [optional] 
 **lastSeenBetween** | **String**| Date range for last seen(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **deviceType** | **String**| Device type. Example: \"Server/Workstation/...\". | [optional] 
 **lastSeenLt** | **Date**| Devices last seen before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **tagNameContains** | [**[String]**](String.md)| Free-text filter by tag name (supports multiple values). Example: \"iot\". | [optional] 
 **domains** | [**[String]**](String.md)| Included network domains. Example: \"mybusiness,workgroup\". | [optional] 
 **osName** | **String**| Os name | [optional] 

### Return type

[**SchemasRangerTableViewSchemaMany200**](SchemasRangerTableViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRangerTagsPost"></a>
# **webApiRangerTagsPost**
> AffectedResultsSchema200 webApiRangerTagsPost(opts)

Change Device Tags

Change the device tags.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerApi();

var opts = { 
  'body': new S1MgmtApi.SchemasDeviceTagsSchema() // SchemasDeviceTagsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerTagsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SchemasDeviceTagsSchema**](SchemasDeviceTagsSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRangerinventoryIdJsonExportGet"></a>
# **webApiRangerinventoryIdJsonExportGet**
> webApiRangerinventoryIdJsonExportGet(inventoryId)

Export JSON Raw Data

Export the raw data for one device, by its ID in the Device Inventory Data. To get the ID, run ranger/table-view (see Get Ranger Table). Use this command to get data for Support.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerApi();

var inventoryId = "inventoryId_example"; // String | Inventory ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiRangerinventoryIdJsonExportGet(inventoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| Inventory ID. Example: \"225494730938493804\". | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRangerinventoryIdJsonGet"></a>
# **webApiRangerinventoryIdJsonGet**
> RawDataSchema200 webApiRangerinventoryIdJsonGet(inventoryId)

JSON Raw Data

Get a json string with the Ranger data for one device, by ID in the Device Inventory Data.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RangerApi();

var inventoryId = "inventoryId_example"; // String | Inventory ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerinventoryIdJsonGet(inventoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| Inventory ID. Example: \"225494730938493804\". | 

### Return type

[**RawDataSchema200**](RawDataSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

