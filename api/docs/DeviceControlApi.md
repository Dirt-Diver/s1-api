# S1MgmtApi.DeviceControlApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiDeviceControlConfigurationGet**](DeviceControlApi.md#webApiDeviceControlConfigurationGet) | **GET** /web/api/v2.1/device-control/configuration | Get Configuration
[**webApiDeviceControlConfigurationPut**](DeviceControlApi.md#webApiDeviceControlConfigurationPut) | **PUT** /web/api/v2.1/device-control/configuration | Update Configuration
[**webApiDeviceControlCopyRulesPost**](DeviceControlApi.md#webApiDeviceControlCopyRulesPost) | **POST** /web/api/v2.1/device-control/copy-rules | Copy Rules
[**webApiDeviceControlDelete**](DeviceControlApi.md#webApiDeviceControlDelete) | **DELETE** /web/api/v2.1/device-control | Delete Rules
[**webApiDeviceControlEnablePut**](DeviceControlApi.md#webApiDeviceControlEnablePut) | **PUT** /web/api/v2.1/device-control/enable | Enable/Disable Rules
[**webApiDeviceControlEventsGet**](DeviceControlApi.md#webApiDeviceControlEventsGet) | **GET** /web/api/v2.1/device-control/events | Get Device Control Events
[**webApiDeviceControlExportGet**](DeviceControlApi.md#webApiDeviceControlExportGet) | **GET** /web/api/v2.1/device-control/export | Export Rules
[**webApiDeviceControlGet**](DeviceControlApi.md#webApiDeviceControlGet) | **GET** /web/api/v2.1/device-control | Get Device Rules
[**webApiDeviceControlMoveRulesPost**](DeviceControlApi.md#webApiDeviceControlMoveRulesPost) | **POST** /web/api/v2.1/device-control/move-rules | Move rules
[**webApiDeviceControlPost**](DeviceControlApi.md#webApiDeviceControlPost) | **POST** /web/api/v2.1/device-control | Create Device Control Rule
[**webApiDeviceControlReorderPut**](DeviceControlApi.md#webApiDeviceControlReorderPut) | **PUT** /web/api/v2.1/device-control/reorder | Reorder Rules
[**webApiDeviceControlruleIdPut**](DeviceControlApi.md#webApiDeviceControlruleIdPut) | **PUT** /web/api/v2.1/device-control/{rule_id} | Update Device Rule


<a name="webApiDeviceControlConfigurationGet"></a>
# **webApiDeviceControlConfigurationGet**
> DeviceControlSchemasDeviceSettingsSchema200 webApiDeviceControlConfigurationGet(opts)

Get Configuration

Get Device Control configuration for a given scope.<br>To filter the results for a scope:<br>* Global - Make sure \"tenant\" is \"true\" and no other scope ID is given.<br>* Account - Make sure \"tenant\" is \"false\" and at least one Account ID is given.<br>* Site - Make sure \"tenant\" is \"false\" and at least one Site ID is given.<brDevice Control requires Control SKU. It is not supported on Linux.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeviceControlApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDeviceControlConfigurationGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**DeviceControlSchemasDeviceSettingsSchema200**](DeviceControlSchemasDeviceSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiDeviceControlConfigurationPut"></a>
# **webApiDeviceControlConfigurationPut**
> DeviceControlSchemasDeviceSettingsSchema200 webApiDeviceControlConfigurationPut(opts)

Update Configuration

Use this command to change the Device Control configuration. Enter a Group ID, Site ID, Account ID, or \"tenant = true\". If you select only tenant, and the other scopes are empty, the change is applied to the Global policy.  Device Control requires Control SKU. It is not supported on Linux.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeviceControlApi();

var opts = { 
  'body': new S1MgmtApi.DeviceControlSchemasPostDeviceSettingsSchema() // DeviceControlSchemasPostDeviceSettingsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDeviceControlConfigurationPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeviceControlSchemasPostDeviceSettingsSchema**](DeviceControlSchemasPostDeviceSettingsSchema.md)|  | [optional] 

### Return type

[**DeviceControlSchemasDeviceSettingsSchema200**](DeviceControlSchemasDeviceSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiDeviceControlCopyRulesPost"></a>
# **webApiDeviceControlCopyRulesPost**
> AffectedResultsSchema200 webApiDeviceControlCopyRulesPost(opts)

Copy Rules

You can copy a set of Device Control rules to use in other Accounts, Sites, or Groups. Copy the rules from a source Group, Site, or Account to target Groups, Sites, or Accounts. <br>Define the rules to copy with the filters. To get the values for devices, run \"unscoped\". To get Account IDs, run \"accounts\". To get Site IDs, run \"sites\". <br>Device Control requires Control SKU. Linux Agents do not support Device Control.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeviceControlApi();

var opts = { 
  'body': new S1MgmtApi.DeviceControlSchemasCopyRuleSchema() // DeviceControlSchemasCopyRuleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDeviceControlCopyRulesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeviceControlSchemasCopyRuleSchema**](DeviceControlSchemasCopyRuleSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiDeviceControlDelete"></a>
# **webApiDeviceControlDelete**
> AffectedResultsSchema200 webApiDeviceControlDelete(opts)

Delete Rules

Delete Device Control rules that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeviceControlApi();

var opts = { 
  'body': new S1MgmtApi.DeviceControlSchemasRuleDeleteSchema() // DeviceControlSchemasRuleDeleteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDeviceControlDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeviceControlSchemasRuleDeleteSchema**](DeviceControlSchemasRuleDeleteSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiDeviceControlEnablePut"></a>
# **webApiDeviceControlEnablePut**
> AffectedResultsSchema200 webApiDeviceControlEnablePut(opts)

Enable/Disable Rules

It is best practice to disable a rule rather than delete it. Use this command to change the status of a rule between Enabled and Disabled. <br>Note: On Windows, if a USB device is already connected to an endpoint, new rules and rule changes do not affect it. USB rules will apply the next time the device connects to the endpoint. For Windows Bluetooth rules, the device and endpoint must be paired after the SentinelOne Agent that supports Bluetooth is installed or upgraded. If the endpoint and device were already paired before the Agent supported bluetooth, reboot the endpoint to activate the rule, or re-pair the endpoint and device.<br>On macOS, changes apply to devices that are already connected to an endpoint. 

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeviceControlApi();

var opts = { 
  'body': new S1MgmtApi.DeviceControlSchemasEnableRuleSchema() // DeviceControlSchemasEnableRuleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDeviceControlEnablePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeviceControlSchemasEnableRuleSchema**](DeviceControlSchemasEnableRuleSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiDeviceControlEventsGet"></a>
# **webApiDeviceControlEventsGet**
> DeviceControlSchemasDeviceEventResponseSchemaMany200 webApiDeviceControlEventsGet(opts)

Get Device Control Events

Get the data of Device Control events on Windows and macOS endpoints with Device Control-enabled Agents that match the filter.  Device Control requires Control SKU. Linux Agents do not support Device Control.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeviceControlApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'agentIds': ["agentIds_example"], // [String] | List of agent Ids to filter by
  'uids': ["uids_example"], // [String] | List of uIds to filter by.
  'interfaces': ["interfaces_example"], // [String] | List of interfaces to filter by. Example: \"USB\".
  'deviceClasses': ["deviceClasses_example"], // [String] | List of device classes to filter by. Example: \"02h\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes.
  'ids': ["ids_example"], // [String] | List of IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'eventTypes': ["eventTypes_example"], // [String] | List of event types to filter by.
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'accessPermissions': ["accessPermissions_example"], // [String] | Access permission in. Example: \"Read-Only\".
  'deviceIds': ["deviceIds_example"], // [String] | List of device IDs to filter by
  'eventTimeGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return events generated after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'productIds': ["productIds_example"], // [String] | List of product IDs to filter by. Example: \"02\".
  'eventTimeBetween': "eventTimeBetween_example", // String | Return events created within this range (inclusive). Example: \"1514978764288-1514978999999\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'eventTimeLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return events generated before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'vendorIds': ["vendorIds_example"], // [String] | List of vendor IDs to filter by.
  'tenant': true, // Boolean | Indicates a tenant scope request
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'eventTimeGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return events generated after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'eventIds': ["eventIds_example"], // [String] | List of event IDs to filter by
  'eventTimeLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return events generated before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'serviceClasses': ["serviceClasses_example"] // [String] | List of service classes to filter by. Example: \"02\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDeviceControlEventsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **agentIds** | [**[String]**](String.md)| List of agent Ids to filter by | [optional] 
 **uids** | [**[String]**](String.md)| List of uIds to filter by. | [optional] 
 **interfaces** | [**[String]**](String.md)| List of interfaces to filter by. Example: \"USB\". | [optional] 
 **deviceClasses** | [**[String]**](String.md)| List of device classes to filter by. Example: \"02h\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes. | [optional] 
 **ids** | [**[String]**](String.md)| List of IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **eventTypes** | [**[String]**](String.md)| List of event types to filter by. | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **accessPermissions** | [**[String]**](String.md)| Access permission in. Example: \"Read-Only\". | [optional] 
 **deviceIds** | [**[String]**](String.md)| List of device IDs to filter by | [optional] 
 **eventTimeGte** | **Date**| Return events generated after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **productIds** | [**[String]**](String.md)| List of product IDs to filter by. Example: \"02\". | [optional] 
 **eventTimeBetween** | **String**| Return events created within this range (inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **eventTimeLt** | **Date**| Return events generated before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **vendorIds** | [**[String]**](String.md)| List of vendor IDs to filter by. | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **eventTimeGt** | **Date**| Return events generated after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **eventIds** | [**[String]**](String.md)| List of event IDs to filter by | [optional] 
 **eventTimeLte** | **Date**| Return events generated before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **serviceClasses** | [**[String]**](String.md)| List of service classes to filter by. Example: \"02\". | [optional] 

### Return type

[**DeviceControlSchemasDeviceEventResponseSchemaMany200**](DeviceControlSchemasDeviceEventResponseSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiDeviceControlExportGet"></a>
# **webApiDeviceControlExportGet**
> webApiDeviceControlExportGet(opts)

Export Rules

Export Device Control rules to a CSV file.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeviceControlApi();

var opts = { 
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return device rules created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'versions': ["versions_example"], // [String] | Return device rules with the filtered versions.
  'uids': ["uids_example"], // [String] | Return device rules with the filtered uId.
  'actions': ["actions_example"], // [String] | Return device rules with the filtered action. Example: \"Allow\".
  'deviceNames': ["deviceNames_example"], // [String] | Return device rules with the filtered device names.
  'interfaces': ["interfaces_example"], // [String] | Return device rules with the filtered interface. Example: \"USB\".
  'deviceClasses': ["deviceClasses_example"], // [String] | Return device rules with the filtered device class. Example: \"02h\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes.
  'ids': ["ids_example"], // [String] | List of ids to filter by. Example: \"225494730938493804,225494730938493915\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return device rules created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return device rules created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'accessPermissions': ["accessPermissions_example"], // [String] | Access permission in. Example: \"Read-Only\".
  'scopes': ["scopes_example"], // [String] | Return only device rules in this scope. Example: \"site\".
  'statuses': ["statuses_example"], // [String] | Return device rules with the filtered status. Example: \"Enabled\".
  'deviceIds': ["deviceIds_example"], // [String] | Return device rules with the filtered device id. Example: \"02\".
  'productIds': ["productIds_example"], // [String] | Return device rules with the filtered product id. Example: \"02\".
  'ruleName': "ruleName_example", // String | Return device rules with the filtered rule name.
  'bluetoothAddresses': ["bluetoothAddresses_example"], // [String] | Return device rules with the filtered bluetooth addresses.
  'vendorIds': ["vendorIds_example"], // [String] | Return device rules with the filtered vendor id.
  'tenant': true, // Boolean | Indicates a tenant scope request
  'createdAtBetween': "createdAtBetween_example", // String | Return device rules created within this range (inclusive). Example: \"1514978764288-1514978999999\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'gattServices': ["gattServices_example"], // [String] | Return device rules with the filtered GATT services.
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return device rules created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'deviceInformationServiceInfoKeys': ["deviceInformationServiceInfoKeys_example"], // [String] | Return device rules with the filtered device information service info keys.
  'manufacturerNames': ["manufacturerNames_example"], // [String] | Return device rules with the filtered manufacturer names.
  'serviceClasses': ["serviceClasses_example"], // [String] | Return device rules with the filtered service class. Example: \"02\".
  'minorClasses': ["minorClasses_example"] // [String] | Return device rules with the filtered minor classes.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiDeviceControlExportGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAtGt** | **Date**| Return device rules created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **versions** | [**[String]**](String.md)| Return device rules with the filtered versions. | [optional] 
 **uids** | [**[String]**](String.md)| Return device rules with the filtered uId. | [optional] 
 **actions** | [**[String]**](String.md)| Return device rules with the filtered action. Example: \"Allow\". | [optional] 
 **deviceNames** | [**[String]**](String.md)| Return device rules with the filtered device names. | [optional] 
 **interfaces** | [**[String]**](String.md)| Return device rules with the filtered interface. Example: \"USB\". | [optional] 
 **deviceClasses** | [**[String]**](String.md)| Return device rules with the filtered device class. Example: \"02h\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes. | [optional] 
 **ids** | [**[String]**](String.md)| List of ids to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **createdAtLt** | **Date**| Return device rules created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **createdAtLte** | **Date**| Return device rules created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **accessPermissions** | [**[String]**](String.md)| Access permission in. Example: \"Read-Only\". | [optional] 
 **scopes** | [**[String]**](String.md)| Return only device rules in this scope. Example: \"site\". | [optional] 
 **statuses** | [**[String]**](String.md)| Return device rules with the filtered status. Example: \"Enabled\". | [optional] 
 **deviceIds** | [**[String]**](String.md)| Return device rules with the filtered device id. Example: \"02\". | [optional] 
 **productIds** | [**[String]**](String.md)| Return device rules with the filtered product id. Example: \"02\". | [optional] 
 **ruleName** | **String**| Return device rules with the filtered rule name. | [optional] 
 **bluetoothAddresses** | [**[String]**](String.md)| Return device rules with the filtered bluetooth addresses. | [optional] 
 **vendorIds** | [**[String]**](String.md)| Return device rules with the filtered vendor id. | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **createdAtBetween** | **String**| Return device rules created within this range (inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **gattServices** | [**[String]**](String.md)| Return device rules with the filtered GATT services. | [optional] 
 **createdAtGte** | **Date**| Return device rules created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **deviceInformationServiceInfoKeys** | [**[String]**](String.md)| Return device rules with the filtered device information service info keys. | [optional] 
 **manufacturerNames** | [**[String]**](String.md)| Return device rules with the filtered manufacturer names. | [optional] 
 **serviceClasses** | [**[String]**](String.md)| Return device rules with the filtered service class. Example: \"02\". | [optional] 
 **minorClasses** | [**[String]**](String.md)| Return device rules with the filtered minor classes. | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiDeviceControlGet"></a>
# **webApiDeviceControlGet**
> DeviceControlSchemasDeviceSchemaMany200 webApiDeviceControlGet(opts)

Get Device Rules

Get the Device Control rules of a specified Account, Site, Group or Global (tenant) that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeviceControlApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return device rules created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'versions': ["versions_example"], // [String] | Return device rules with the filtered versions.
  'uids': ["uids_example"], // [String] | Return device rules with the filtered uId.
  'actions': ["actions_example"], // [String] | Return device rules with the filtered action. Example: \"Allow\".
  'deviceNames': ["deviceNames_example"], // [String] | Return device rules with the filtered device names.
  'interfaces': ["interfaces_example"], // [String] | Return device rules with the filtered interface. Example: \"USB\".
  'deviceClasses': ["deviceClasses_example"], // [String] | Return device rules with the filtered device class. Example: \"02h\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes.
  'ids': ["ids_example"], // [String] | List of ids to filter by. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return device rules created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return device rules created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'accessPermissions': ["accessPermissions_example"], // [String] | Access permission in. Example: \"Read-Only\".
  'scopes': ["scopes_example"], // [String] | Return only device rules in this scope. Example: \"site\".
  'statuses': ["statuses_example"], // [String] | Return device rules with the filtered status. Example: \"Enabled\".
  'deviceIds': ["deviceIds_example"], // [String] | Return device rules with the filtered device id. Example: \"02\".
  'productIds': ["productIds_example"], // [String] | Return device rules with the filtered product id. Example: \"02\".
  'disablePagination': true, // Boolean | If true, all rules for requested scope will be returned
  'ruleName': "ruleName_example", // String | Return device rules with the filtered rule name.
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'bluetoothAddresses': ["bluetoothAddresses_example"], // [String] | Return device rules with the filtered bluetooth addresses.
  'vendorIds': ["vendorIds_example"], // [String] | Return device rules with the filtered vendor id.
  'tenant': true, // Boolean | Indicates a tenant scope request
  'createdAtBetween': "createdAtBetween_example", // String | Return device rules created within this range (inclusive). Example: \"1514978764288-1514978999999\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'gattServices': ["gattServices_example"], // [String] | Return device rules with the filtered GATT services.
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return device rules created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'deviceInformationServiceInfoKeys': ["deviceInformationServiceInfoKeys_example"], // [String] | Return device rules with the filtered device information service info keys.
  'manufacturerNames': ["manufacturerNames_example"], // [String] | Return device rules with the filtered manufacturer names.
  'serviceClasses': ["serviceClasses_example"], // [String] | Return device rules with the filtered service class. Example: \"02\".
  'minorClasses': ["minorClasses_example"] // [String] | Return device rules with the filtered minor classes.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDeviceControlGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **createdAtGt** | **Date**| Return device rules created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **versions** | [**[String]**](String.md)| Return device rules with the filtered versions. | [optional] 
 **uids** | [**[String]**](String.md)| Return device rules with the filtered uId. | [optional] 
 **actions** | [**[String]**](String.md)| Return device rules with the filtered action. Example: \"Allow\". | [optional] 
 **deviceNames** | [**[String]**](String.md)| Return device rules with the filtered device names. | [optional] 
 **interfaces** | [**[String]**](String.md)| Return device rules with the filtered interface. Example: \"USB\". | [optional] 
 **deviceClasses** | [**[String]**](String.md)| Return device rules with the filtered device class. Example: \"02h\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes. | [optional] 
 **ids** | [**[String]**](String.md)| List of ids to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **createdAtLt** | **Date**| Return device rules created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **createdAtLte** | **Date**| Return device rules created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **accessPermissions** | [**[String]**](String.md)| Access permission in. Example: \"Read-Only\". | [optional] 
 **scopes** | [**[String]**](String.md)| Return only device rules in this scope. Example: \"site\". | [optional] 
 **statuses** | [**[String]**](String.md)| Return device rules with the filtered status. Example: \"Enabled\". | [optional] 
 **deviceIds** | [**[String]**](String.md)| Return device rules with the filtered device id. Example: \"02\". | [optional] 
 **productIds** | [**[String]**](String.md)| Return device rules with the filtered product id. Example: \"02\". | [optional] 
 **disablePagination** | **Boolean**| If true, all rules for requested scope will be returned | [optional] 
 **ruleName** | **String**| Return device rules with the filtered rule name. | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **bluetoothAddresses** | [**[String]**](String.md)| Return device rules with the filtered bluetooth addresses. | [optional] 
 **vendorIds** | [**[String]**](String.md)| Return device rules with the filtered vendor id. | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **createdAtBetween** | **String**| Return device rules created within this range (inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **gattServices** | [**[String]**](String.md)| Return device rules with the filtered GATT services. | [optional] 
 **createdAtGte** | **Date**| Return device rules created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **deviceInformationServiceInfoKeys** | [**[String]**](String.md)| Return device rules with the filtered device information service info keys. | [optional] 
 **manufacturerNames** | [**[String]**](String.md)| Return device rules with the filtered manufacturer names. | [optional] 
 **serviceClasses** | [**[String]**](String.md)| Return device rules with the filtered service class. Example: \"02\". | [optional] 
 **minorClasses** | [**[String]**](String.md)| Return device rules with the filtered minor classes. | [optional] 

### Return type

[**DeviceControlSchemasDeviceSchemaMany200**](DeviceControlSchemasDeviceSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiDeviceControlMoveRulesPost"></a>
# **webApiDeviceControlMoveRulesPost**
> AffectedResultsSchema200 webApiDeviceControlMoveRulesPost(opts)

Move rules

You can move a set of Device Control rules to other Accounts, Sites, or Groups. This command removes the rule from the source and copies to the targets.   Define the rules to copy with the filters. To get the values for devices, run \"unscoped\". To get Account IDs, run \"accounts\". To get Site IDs, run \"sites\".  Device Control requires Control SKU. Linux Agents do not support Device Control.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeviceControlApi();

var opts = { 
  'body': new S1MgmtApi.DeviceControlSchemasCopyRuleSchema() // DeviceControlSchemasCopyRuleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDeviceControlMoveRulesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeviceControlSchemasCopyRuleSchema**](DeviceControlSchemasCopyRuleSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiDeviceControlPost"></a>
# **webApiDeviceControlPost**
> DeviceControlSchemasDeviceSchema200 webApiDeviceControlPost(opts)

Create Device Control Rule

Use this command to create a new Device Control rule. These rules allow or block devices, based on device identifiers. Rules apply to a scope: Global (tenant), Account, Site, or Group. To learn details of the fields, see https://support.sentinelone.com/hc/en-us/articles/360023338494. <br>Recommended: Before you begin, see Device Control Known Limitations: https://support.sentinelone.com/hc/en-us/articles/360021104114.<br>Device Control requires Control SKU. Linux Agents do not support Device Control.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeviceControlApi();

var opts = { 
  'body': new S1MgmtApi.DeviceControlSchemasPostDeviceSchema() // DeviceControlSchemasPostDeviceSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDeviceControlPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeviceControlSchemasPostDeviceSchema**](DeviceControlSchemasPostDeviceSchema.md)|  | [optional] 

### Return type

[**DeviceControlSchemasDeviceSchema200**](DeviceControlSchemasDeviceSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiDeviceControlReorderPut"></a>
# **webApiDeviceControlReorderPut**
> SuccessResponseSchema200 webApiDeviceControlReorderPut(opts)

Reorder Rules

When an external device connects to an endpoint, the SentinelOne Agent looks at the rules based on their order in the Device Control policy, from the top to the bottom. When the Agent finds a rule that matches the device identifiers of a connected device, that rule is applied. The Agent does not continue to the lower rules in the list.  Use this command to change the order of rules for a specific scope.   Device Control requires Control SKU. Linux Agents do not support Device Control.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeviceControlApi();

var opts = { 
  'body': new S1MgmtApi.DeviceControlSchemasReorderSchema() // DeviceControlSchemasReorderSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDeviceControlReorderPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeviceControlSchemasReorderSchema**](DeviceControlSchemasReorderSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiDeviceControlruleIdPut"></a>
# **webApiDeviceControlruleIdPut**
> DeviceControlSchemasDeviceSchema200 webApiDeviceControlruleIdPut(ruleId, opts)

Update Device Rule

Change the Device Control rule that matches the filter. To learn more about the fields, see https://support.sentinelone.com/hc/en-us/articles/360023338494.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeviceControlApi();

var ruleId = "ruleId_example"; // String | Rule ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.DeviceControlSchemasPutDeviceSchema() // DeviceControlSchemasPutDeviceSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDeviceControlruleIdPut(ruleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **String**| Rule ID. Example: \"225494730938493804\". | 
 **body** | [**DeviceControlSchemasPutDeviceSchema**](DeviceControlSchemasPutDeviceSchema.md)|  | [optional] 

### Return type

[**DeviceControlSchemasDeviceSchema200**](DeviceControlSchemasDeviceSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

