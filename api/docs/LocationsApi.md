# S1MgmtApi.LocationsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiLocationsDelete**](LocationsApi.md#webApiLocationsDelete) | **DELETE** /web/api/v2.1/locations | Delete Locations
[**webApiLocationsGet**](LocationsApi.md#webApiLocationsGet) | **GET** /web/api/v2.1/locations | Get Locations
[**webApiLocationsPost**](LocationsApi.md#webApiLocationsPost) | **POST** /web/api/v2.1/locations | Create Location
[**webApiLocationslocationIdPut**](LocationsApi.md#webApiLocationslocationIdPut) | **PUT** /web/api/v2.1/locations/{location_id} | Update Location


<a name="webApiLocationsDelete"></a>
# **webApiLocationsDelete**
> AffectedResultsSchema200 webApiLocationsDelete(opts)

Delete Locations

Delete location definitions of a given location. To get location IDs, run \"locations\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.LocationsApi();

var opts = { 
  'body': new S1MgmtApi.LocationsSchemasDeleteLocationsSchema() // LocationsSchemasDeleteLocationsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiLocationsDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationsSchemasDeleteLocationsSchema**](LocationsSchemasDeleteLocationsSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiLocationsGet"></a>
# **webApiLocationsGet**
> LocationsSchemasLocationViewSchemaMany200 webApiLocationsGet(opts)

Get Locations

Get the locations of Agents in a given scope that match the filter.  Agent locations are based on endpoint network parameters (IP, DNS, NIC, Registry Key, or SentinelOne connection set for all true, at least one true, or none true and applied to a Site, Account, or Global). Agents detect their location settings and apply Firewall Control rules that have Location Aware parameters that match the Agent location. Agents can be in multiple locations at the same time. If an Agent that supports Locations does not detect that it is in a defined location, it uses the Firewall rules assigned to the Fallback location. <br>Use this command with a filter for \"hasFirewallRules\" to find Locations that do not have matching Firewall Control rules. The response to this request includes the ID of the location, which you can use in other commands.<br>Firewall Control and Location Awareness require Control SKU.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.LocationsApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'nameContains': ["nameContains_example"], // [String] | Free-text filter by location name (supports multiple values). Example: \"office\".
  'registryKeyContains': ["registryKeyContains_example"], // [String] | Free-text filter by registry key (supports multiple values). Example: \"system\\software,sentinel\".
  'ids': ["ids_example"], // [String] | Filter results by location IDs. Example: \"225494730938493804,225494730938493915\".
  'creatorContains': ["creatorContains_example"], // [String] | Free-text filter by creator of the location (supports multiple values). Example: \"max,mike\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'scopes': ["scopes_example"], // [String] | Filter results by scope. Example: \"site\".
  'hasFirewallRules': true, // Boolean | Filter by locations with/without firewall rules associated to them
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'descriptionContains': ["descriptionContains_example"], // [String] | Free-text filter by description (supports multiple values). Example: \"out of office\".
  'hostnameContains': ["hostnameContains_example"], // [String] | Free-text filter by hostname (supports multiple values). Example: \"sentinelone.com,localhost\".
  'scopeNameContains': ["scopeNameContains_example"], // [String] | Free-text filter by scope name (supports multiple values). Example: \"my_group,my_site\".
  'ipAddressContains': ["ipAddressContains_example"] // [String] | Free-text filter by IP address (supports multiple values). Example: \"29.213.22.17\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiLocationsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **nameContains** | [**[String]**](String.md)| Free-text filter by location name (supports multiple values). Example: \"office\". | [optional] 
 **registryKeyContains** | [**[String]**](String.md)| Free-text filter by registry key (supports multiple values). Example: \"system\\software,sentinel\". | [optional] 
 **ids** | [**[String]**](String.md)| Filter results by location IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **creatorContains** | [**[String]**](String.md)| Free-text filter by creator of the location (supports multiple values). Example: \"max,mike\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **scopes** | [**[String]**](String.md)| Filter results by scope. Example: \"site\". | [optional] 
 **hasFirewallRules** | **Boolean**| Filter by locations with/without firewall rules associated to them | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **descriptionContains** | [**[String]**](String.md)| Free-text filter by description (supports multiple values). Example: \"out of office\". | [optional] 
 **hostnameContains** | [**[String]**](String.md)| Free-text filter by hostname (supports multiple values). Example: \"sentinelone.com,localhost\". | [optional] 
 **scopeNameContains** | [**[String]**](String.md)| Free-text filter by scope name (supports multiple values). Example: \"my_group,my_site\". | [optional] 
 **ipAddressContains** | [**[String]**](String.md)| Free-text filter by IP address (supports multiple values). Example: \"29.213.22.17\". | [optional] 

### Return type

[**LocationsSchemasLocationViewSchemaMany200**](LocationsSchemasLocationViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiLocationsPost"></a>
# **webApiLocationsPost**
> LocationsSchemasLocationViewSchema200 webApiLocationsPost(opts)

Create Location

Create a location that defines parameters of Agents in a scope filter. Parameters include: <br>* ipAddresses - The Agent compares the endpoint active IPv4 or IPv6 addresses to the IP addresses, ranges, and CIDRs defined for the location. <br>* dnsServers - The Agent compares the configured DNS servers of the endpoint to the DNS servers defined for the location.<br>* dnsLookup - The Agent resolves the FQDN of the endpoint to IPv4 or IPv6 addresses and compares them to the addresses configured in the location setting.<br>* networkInterfaces - The Agent determines if the endpoint is connected to the network over a wireless connection. If one connected interface is wireless, the endpoint is considered wireless.<br>* serverConnectivity - The Agent reports if it is connected to its Management.<br>* registryKeys - The Agent compares the endpoint registry keys in HKEY_LOCAL_MACHINE\\SOFTWARE with the registry key of the location definition. <br>When you set a location parameter, also set the operator to ALL, NONE, or at least 1. <br>The serverConnectivity parameter takes \"enabled\" (true or false) and \"value\" (connected or disconnected). <br>The networkInterfaces parameter takes \"enabled\" (true or false) and \"value\" (wired or wireless).

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.LocationsApi();

var opts = { 
  'body': new S1MgmtApi.LocationsSchemasNewLocationSchema() // LocationsSchemasNewLocationSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiLocationsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LocationsSchemasNewLocationSchema**](LocationsSchemasNewLocationSchema.md)|  | [optional] 

### Return type

[**LocationsSchemasLocationViewSchema200**](LocationsSchemasLocationViewSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiLocationslocationIdPut"></a>
# **webApiLocationslocationIdPut**
> LocationsSchemasLocationViewSchema200 webApiLocationslocationIdPut(locationId, opts)

Update Location

Change the parameter values of a location definition. See Create Location.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.LocationsApi();

var locationId = "locationId_example"; // String | Location ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.LocationsSchemasUpdateLocationSchema() // LocationsSchemasUpdateLocationSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiLocationslocationIdPut(locationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| Location ID. Example: \"225494730938493804\". | 
 **body** | [**LocationsSchemasUpdateLocationSchema**](LocationsSchemasUpdateLocationSchema.md)|  | [optional] 

### Return type

[**LocationsSchemasLocationViewSchema200**](LocationsSchemasLocationViewSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

