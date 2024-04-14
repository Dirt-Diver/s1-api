# S1MgmtApi.ApplicationRiskApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiExportInstalledApplicationsGet**](ApplicationRiskApi.md#webApiExportInstalledApplicationsGet) | **GET** /web/api/v2.1/export/installed-applications | Export Applications
[**webApiInstalledApplicationsCvesGet**](ApplicationRiskApi.md#webApiInstalledApplicationsCvesGet) | **GET** /web/api/v2.1/installed-applications/cves | Get CVEs
[**webApiInstalledApplicationsGet**](ApplicationRiskApi.md#webApiInstalledApplicationsGet) | **GET** /web/api/v2.1/installed-applications | Get Applications


<a name="webApiExportInstalledApplicationsGet"></a>
# **webApiExportInstalledApplicationsGet**
> webApiExportInstalledApplicationsGet(opts)

Export Applications

Export the list of applications installed on endpoints with Application Risk-enabled Agents and their properties, including the CVEs for each application that requires a patch. The CSV file is stored on the Management. Application Risk requires Complete SKU. <br>This feature is in EA. To join the EA program, contact your SentinelOne Sales Rep.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ApplicationRiskApi();

var opts = { 
  'typesNin': ["typesNin_example"], // [String] | Filter not by application types. Example: \"app\".
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by application name (supports multiple values). Example: \"calc\".
  'agentIsDecommissioned': [[false]], // [Boolean] | Include active agents, decommissioned or both. Example: \"True,False\".
  'ids': ["ids_example"], // [String] | Filter by application IDs. Example: \"225494730938493804,225494730938493915\".
  'riskLevels': ["riskLevels_example"], // [String] | Filter by risk. Example: \"none\".
  'osTypes': ["osTypes_example"], // [String] | Filter by OS types. Example: \"windows\".
  'agentMachineTypes': ["agentMachineTypes_example"], // [String] | Filter by endpoint machine types. Example: \"unknown\".
  'agentOsVersionContains': ["agentOsVersionContains_example"], // [String] | Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
  'agentMachineTypesNin': ["agentMachineTypesNin_example"], // [String] | Filter not by endpoint machine types. Example: \"unknown\".
  'installedAtBetween': "installedAtBetween_example", // String | Filter by installation date range
  'publisherContains': ["publisherContains_example"], // [String] | Free-text filter by application publisher (supports multiple values). Example: \"Sentinel\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'sizeBetween': "sizeBetween_example", // String | Filter by application size range (bytes). Example: \"1024-104856\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'agentComputerNameContains': ["agentComputerNameContains_example"], // [String] | Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\".
  'riskLevelsNin': ["riskLevelsNin_example"], // [String] | Filter not by risk. Example: \"none\".
  'agentUuidContains': ["agentUuidContains_example"], // [String] | Free-text filter by agent UUID (supports multiple values). Example: \"e92-01928,b055\".
  'versionContains': ["versionContains_example"], // [String] | Free-text filter by application version (supports multiple values). Example: \"1.22.333,build\".
  'types': ["types_example"], // [String] | Filter by application types. Example: \"app\".
  'osTypesNin': ["osTypesNin_example"] // [String] | Filter not by OS types. Example: \"windows\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExportInstalledApplicationsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typesNin** | [**[String]**](String.md)| Filter not by application types. Example: \"app\". | [optional] 
 **nameContains** | [**[String]**](String.md)| Free-text filter by application name (supports multiple values). Example: \"calc\". | [optional] 
 **agentIsDecommissioned** | [**[Boolean]**](Boolean.md)| Include active agents, decommissioned or both. Example: \"True,False\". | [optional] [default to [false]]
 **ids** | [**[String]**](String.md)| Filter by application IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **riskLevels** | [**[String]**](String.md)| Filter by risk. Example: \"none\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Filter by OS types. Example: \"windows\". | [optional] 
 **agentMachineTypes** | [**[String]**](String.md)| Filter by endpoint machine types. Example: \"unknown\". | [optional] 
 **agentOsVersionContains** | [**[String]**](String.md)| Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **agentMachineTypesNin** | [**[String]**](String.md)| Filter not by endpoint machine types. Example: \"unknown\". | [optional] 
 **installedAtBetween** | **String**| Filter by installation date range | [optional] 
 **publisherContains** | [**[String]**](String.md)| Free-text filter by application publisher (supports multiple values). Example: \"Sentinel\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **sizeBetween** | **String**| Filter by application size range (bytes). Example: \"1024-104856\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **agentComputerNameContains** | [**[String]**](String.md)| Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\". | [optional] 
 **riskLevelsNin** | [**[String]**](String.md)| Filter not by risk. Example: \"none\". | [optional] 
 **agentUuidContains** | [**[String]**](String.md)| Free-text filter by agent UUID (supports multiple values). Example: \"e92-01928,b055\". | [optional] 
 **versionContains** | [**[String]**](String.md)| Free-text filter by application version (supports multiple values). Example: \"1.22.333,build\". | [optional] 
 **types** | [**[String]**](String.md)| Filter by application types. Example: \"app\". | [optional] 
 **osTypesNin** | [**[String]**](String.md)| Filter not by OS types. Example: \"windows\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiInstalledApplicationsCvesGet"></a>
# **webApiInstalledApplicationsCvesGet**
> ApplicationsSchemasCveViewSchemaMany200 webApiInstalledApplicationsCvesGet(opts)

Get CVEs

Get known CVEs for applications that are installed on endpoints with Application Risk-enabled Agents. <br>Application Risk requires Complete SKU. This feature is in EA. To join the EA program, contact your SentinelOne Sales Rep.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ApplicationRiskApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
  'ids': ["ids_example"], // [String] | Filter by internal CVE IDs. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'cveIds': ["cveIds_example"], // [String] | Filter by global CVE ids. Example: \"CVE-2018-3182,CVE-2018-1087\".
  'applicationIds': ["applicationIds_example"], // [String] | Filter by application IDs. Example: \"225494730938493804,225494730938493915\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiInstalledApplicationsCvesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **createdAtGt** | **Date**| Created at greater than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **updatedAtLt** | **Date**| Updated at lesser than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **ids** | [**[String]**](String.md)| Filter by internal CVE IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **createdAtLt** | **Date**| Created at lesser than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **updatedAtGte** | **Date**| Updated at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **updatedAtGt** | **Date**| Updated at greater than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **createdAtLte** | **Date**| Created at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **cveIds** | [**[String]**](String.md)| Filter by global CVE ids. Example: \"CVE-2018-3182,CVE-2018-1087\". | [optional] 
 **applicationIds** | [**[String]**](String.md)| Filter by application IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **updatedAtLte** | **Date**| Updated at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **createdAtGte** | **Date**| Created at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**ApplicationsSchemasCveViewSchemaMany200**](ApplicationsSchemasCveViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiInstalledApplicationsGet"></a>
# **webApiInstalledApplicationsGet**
> ApplicationsSchemasApplicationViewSchemaMany200 webApiInstalledApplicationsGet(opts)

Get Applications

Get the applications, and their data (such as risk level), installed on endpoints with Application Risk-enabled Agents that match the filter. SentinelOne Application Risk lets you monitor applications installed on endpoints. Applications not updated with the latest patches are vulnerable to exploits. With SentinelOne Application Risk you can see all applications to be patched, on all endpoints or on a specific endpoint. The Agent takes a snapshot of the endpoint application data and checks for vulnerabilities in the SentinelOne Cloud. When the Agent detects a change to the application data, it sends a diff to the Management.<br>Application Risk requires Complete SKU. This feature is in EA. To join the EA program, contact your SentinelOne Sales Rep.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ApplicationRiskApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'typesNin': ["typesNin_example"], // [String] | Filter not by application types. Example: \"app\".
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by application name (supports multiple values). Example: \"calc\".
  'agentIsDecommissioned': [[false]], // [Boolean] | Include active agents, decommissioned or both. Example: \"True,False\".
  'ids': ["ids_example"], // [String] | Filter by application IDs. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'riskLevels': ["riskLevels_example"], // [String] | Filter by risk. Example: \"none\".
  'osTypes': ["osTypes_example"], // [String] | Filter by OS types. Example: \"windows\".
  'agentMachineTypes': ["agentMachineTypes_example"], // [String] | Filter by endpoint machine types. Example: \"unknown\".
  'agentOsVersionContains': ["agentOsVersionContains_example"], // [String] | Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'agentMachineTypesNin': ["agentMachineTypesNin_example"], // [String] | Filter not by endpoint machine types. Example: \"unknown\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'installedAtBetween': "installedAtBetween_example", // String | Filter by installation date range
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'publisherContains': ["publisherContains_example"], // [String] | Free-text filter by application publisher (supports multiple values). Example: \"Sentinel\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'sizeBetween': "sizeBetween_example", // String | Filter by application size range (bytes). Example: \"1024-104856\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'agentComputerNameContains': ["agentComputerNameContains_example"], // [String] | Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\".
  'riskLevelsNin': ["riskLevelsNin_example"], // [String] | Filter not by risk. Example: \"none\".
  'agentUuidContains': ["agentUuidContains_example"], // [String] | Free-text filter by agent UUID (supports multiple values). Example: \"e92-01928,b055\".
  'versionContains': ["versionContains_example"], // [String] | Free-text filter by application version (supports multiple values). Example: \"1.22.333,build\".
  'types': ["types_example"], // [String] | Filter by application types. Example: \"app\".
  'osTypesNin': ["osTypesNin_example"] // [String] | Filter not by OS types. Example: \"windows\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiInstalledApplicationsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **typesNin** | [**[String]**](String.md)| Filter not by application types. Example: \"app\". | [optional] 
 **nameContains** | [**[String]**](String.md)| Free-text filter by application name (supports multiple values). Example: \"calc\". | [optional] 
 **agentIsDecommissioned** | [**[Boolean]**](Boolean.md)| Include active agents, decommissioned or both. Example: \"True,False\". | [optional] [default to [false]]
 **ids** | [**[String]**](String.md)| Filter by application IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **riskLevels** | [**[String]**](String.md)| Filter by risk. Example: \"none\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Filter by OS types. Example: \"windows\". | [optional] 
 **agentMachineTypes** | [**[String]**](String.md)| Filter by endpoint machine types. Example: \"unknown\". | [optional] 
 **agentOsVersionContains** | [**[String]**](String.md)| Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **agentMachineTypesNin** | [**[String]**](String.md)| Filter not by endpoint machine types. Example: \"unknown\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **installedAtBetween** | **String**| Filter by installation date range | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **publisherContains** | [**[String]**](String.md)| Free-text filter by application publisher (supports multiple values). Example: \"Sentinel\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **sizeBetween** | **String**| Filter by application size range (bytes). Example: \"1024-104856\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **agentComputerNameContains** | [**[String]**](String.md)| Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\". | [optional] 
 **riskLevelsNin** | [**[String]**](String.md)| Filter not by risk. Example: \"none\". | [optional] 
 **agentUuidContains** | [**[String]**](String.md)| Free-text filter by agent UUID (supports multiple values). Example: \"e92-01928,b055\". | [optional] 
 **versionContains** | [**[String]**](String.md)| Free-text filter by application version (supports multiple values). Example: \"1.22.333,build\". | [optional] 
 **types** | [**[String]**](String.md)| Filter by application types. Example: \"app\". | [optional] 
 **osTypesNin** | [**[String]**](String.md)| Filter not by OS types. Example: \"windows\". | [optional] 

### Return type

[**ApplicationsSchemasApplicationViewSchemaMany200**](ApplicationsSchemasApplicationViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

