# S1MgmtApi.GatewaysApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiRangerGatewaysGet**](GatewaysApi.md#webApiRangerGatewaysGet) | **GET** /web/api/v2.1/ranger/gateways | Get Gateways
[**webApiRangerGatewaysUpdatePost**](GatewaysApi.md#webApiRangerGatewaysUpdatePost) | **POST** /web/api/v2.1/ranger/gateways/update | Update Gateways
[**webApiRangerGatewaysgatewayIdPut**](GatewaysApi.md#webApiRangerGatewaysgatewayIdPut) | **PUT** /web/api/v2.1/ranger/gateways/{gateway_id} | Update Gateway


<a name="webApiRangerGatewaysGet"></a>
# **webApiRangerGatewaysGet**
> RangerGatewaySchemaGatewayViewSchemaMany200 webApiRangerGatewaysGet(opts)

Get Gateways

Get the gateways in your deployment that match the filter from a Ranger scan.   Ranger requires a Ranger license.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GatewaysApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'numberOfAgentsGte': 56, // Number | Agent count (more than or equal)
  'numberOfRangersLte': 56, // Number | Ranger count (less than or equal)
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Gateway created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'numberOfRangersBetween': "numberOfRangersBetween_example", // String | The number of non decommissioned agents in this network. Example: \"2-8\".
  'snmpScan': true, // Boolean | SNMP scan enabled
  'icmpScan': true, // Boolean | ICMP scan enabled
  'externalIp': "externalIp_example", // String | Search external ip using a CIDR expression or exact IP
  'scanOnlyLocalSubnets': true, // Boolean | Allow remote tasks form this network
  'connectedRangersGt': 56, // Number | Total agents (more than)
  'udpPortsContains': [3.4], // [Number] | Free-text filter by udp port (supports multiple values). Example: \"137,2002\".
  'connectedRangersBetween': "connectedRangersBetween_example", // String | The total of non decommissioned agents in the account. Example: \"2-8\".
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Gateway updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'archived': true, // Boolean | Archived network
  'ids': ["ids_example"], // [String] | List of gateway ids. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | Free text query
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'numberOfRangersGt': 56, // Number | Ranger count (more than)
  'agentPercentageLt': 3.4, // Number | Agent percentage (less than)
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'totalAgentsLte': 56, // Number | Total agents (less than or equal)
  'connectedRangersGte': 56, // Number | Total agents (more than or equal)
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Gateway created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'agentPercentageBetween': "agentPercentageBetween_example", // String | Percentage of agents of the account in this network calculated as numberOfAgents/totalAgents * 100. Example: \"70-80\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Gateway updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'smbScan': true, // Boolean | SMB scan enabled
  'externalIpContains': ["externalIpContains_example"], // [String] | Free-text filter by visible IP (supports multiple values). Example: \"192.168.0.1/24,10.1\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'agentPercentageGt': 3.4, // Number | Agent percentage (more than)
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Gateway updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'connectedRangersLte': 56, // Number | Total agents (less than or equal)
  'numberOfRangersLt': 56, // Number | Ranger count (less than)
  'manufacturerContains': ["manufacturerContains_example"], // [String] | Free-text filter by manufacturer (supports multiple values). Example: \"Company\".
  'networkNameContains': ["networkNameContains_example"], // [String] | Free-text filter by network name (supports multiple values). Example: \"Network1\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Gateway created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'rdnsScan': true, // Boolean | RDNS scan enabled
  'totalAgentsGte': 56, // Number | Total agents (more than or equal)
  'agentPercentageLte': 3.4, // Number | Agent percentage (less than or equal)
  'allowScan': "allowScan_example", // String | Do we allow scanning in this network
  'numberOfAgentsLt': 56, // Number | Agent count (less than)
  '_new': true, // Boolean | True if this is network was first seen some days ago, 3 by default
  'totalAgentsBetween': "totalAgentsBetween_example", // String | The total of non decommissioned agents in the account. Example: \"2-8\".
  'tcpPortsContains': [3.4], // [Number] | Free-text filter by tcp port (supports multiple values). Example: \"80,24\".
  'totalAgentsLt': 56, // Number | Total agents (less than)
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'numberOfAgentsLte': 56, // Number | Agent count (less than or equal)
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Gateway updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'createdAtBetween': "createdAtBetween_example", // String | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'ipContains': ["ipContains_example"], // [String] | Free-text filter by IP Address (supports multiple values). Example: \"192.168.0.1/24,10.1\".
  'numberOfAgentsBetween': "numberOfAgentsBetween_example", // String | The number of non decommissioned agents in this network. Example: \"2-8\".
  'ip': "ip_example", // String | Search ip using a CIDR expression exact IP
  'manufacturer': "manufacturer_example", // String | The gateway manufacturer obtained from the mac address
  'updatedAtBetween': "updatedAtBetween_example", // String | Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Gateway created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'numberOfAgentsGt': 56, // Number | Agent count (more than)
  'numberOfRangersGte': 56, // Number | Ranger count (more than or equal)
  'macAddressContains': ["macAddressContains_example"], // [String] | Free-text filter by mac address (supports multiple values). Example: \"aa:ee:b1\".
  'macAddress': "macAddress_example", // String | The gateway mac address
  'agentPercentageGte': 3.4, // Number | Agent percentage (more than or equal)
  'mdnsScan': true, // Boolean | MDNS scan enabled
  'connectedRangersLt': 56, // Number | Total agents (less than)
  'totalAgentsGt': 56 // Number | Total agents (more than)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerGatewaysGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **numberOfAgentsGte** | **Number**| Agent count (more than or equal) | [optional] 
 **numberOfRangersLte** | **Number**| Ranger count (less than or equal) | [optional] 
 **createdAtGt** | **Date**| Gateway created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **numberOfRangersBetween** | **String**| The number of non decommissioned agents in this network. Example: \"2-8\". | [optional] 
 **snmpScan** | **Boolean**| SNMP scan enabled | [optional] 
 **icmpScan** | **Boolean**| ICMP scan enabled | [optional] 
 **externalIp** | **String**| Search external ip using a CIDR expression or exact IP | [optional] 
 **scanOnlyLocalSubnets** | **Boolean**| Allow remote tasks form this network | [optional] 
 **connectedRangersGt** | **Number**| Total agents (more than) | [optional] 
 **udpPortsContains** | [**[Number]**](Number.md)| Free-text filter by udp port (supports multiple values). Example: \"137,2002\". | [optional] 
 **connectedRangersBetween** | **String**| The total of non decommissioned agents in the account. Example: \"2-8\". | [optional] 
 **updatedAtLt** | **Date**| Gateway updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **archived** | **Boolean**| Archived network | [optional] 
 **ids** | [**[String]**](String.md)| List of gateway ids. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| Free text query | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **numberOfRangersGt** | **Number**| Ranger count (more than) | [optional] 
 **agentPercentageLt** | **Number**| Agent percentage (less than) | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **totalAgentsLte** | **Number**| Total agents (less than or equal) | [optional] 
 **connectedRangersGte** | **Number**| Total agents (more than or equal) | [optional] 
 **createdAtLt** | **Date**| Gateway created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **agentPercentageBetween** | **String**| Percentage of agents of the account in this network calculated as numberOfAgents/totalAgents * 100. Example: \"70-80\". | [optional] 
 **updatedAtGte** | **Date**| Gateway updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **smbScan** | **Boolean**| SMB scan enabled | [optional] 
 **externalIpContains** | [**[String]**](String.md)| Free-text filter by visible IP (supports multiple values). Example: \"192.168.0.1/24,10.1\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **agentPercentageGt** | **Number**| Agent percentage (more than) | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **updatedAtGt** | **Date**| Gateway updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **connectedRangersLte** | **Number**| Total agents (less than or equal) | [optional] 
 **numberOfRangersLt** | **Number**| Ranger count (less than) | [optional] 
 **manufacturerContains** | [**[String]**](String.md)| Free-text filter by manufacturer (supports multiple values). Example: \"Company\". | [optional] 
 **networkNameContains** | [**[String]**](String.md)| Free-text filter by network name (supports multiple values). Example: \"Network1\". | [optional] 
 **createdAtLte** | **Date**| Gateway created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **rdnsScan** | **Boolean**| RDNS scan enabled | [optional] 
 **totalAgentsGte** | **Number**| Total agents (more than or equal) | [optional] 
 **agentPercentageLte** | **Number**| Agent percentage (less than or equal) | [optional] 
 **allowScan** | **String**| Do we allow scanning in this network | [optional] 
 **numberOfAgentsLt** | **Number**| Agent count (less than) | [optional] 
 **_new** | **Boolean**| True if this is network was first seen some days ago, 3 by default | [optional] 
 **totalAgentsBetween** | **String**| The total of non decommissioned agents in the account. Example: \"2-8\". | [optional] 
 **tcpPortsContains** | [**[Number]**](Number.md)| Free-text filter by tcp port (supports multiple values). Example: \"80,24\". | [optional] 
 **totalAgentsLt** | **Number**| Total agents (less than) | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **numberOfAgentsLte** | **Number**| Agent count (less than or equal) | [optional] 
 **updatedAtLte** | **Date**| Gateway updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **createdAtBetween** | **String**| Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **ipContains** | [**[String]**](String.md)| Free-text filter by IP Address (supports multiple values). Example: \"192.168.0.1/24,10.1\". | [optional] 
 **numberOfAgentsBetween** | **String**| The number of non decommissioned agents in this network. Example: \"2-8\". | [optional] 
 **ip** | **String**| Search ip using a CIDR expression exact IP | [optional] 
 **manufacturer** | **String**| The gateway manufacturer obtained from the mac address | [optional] 
 **updatedAtBetween** | **String**| Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **createdAtGte** | **Date**| Gateway created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **numberOfAgentsGt** | **Number**| Agent count (more than) | [optional] 
 **numberOfRangersGte** | **Number**| Ranger count (more than or equal) | [optional] 
 **macAddressContains** | [**[String]**](String.md)| Free-text filter by mac address (supports multiple values). Example: \"aa:ee:b1\". | [optional] 
 **macAddress** | **String**| The gateway mac address | [optional] 
 **agentPercentageGte** | **Number**| Agent percentage (more than or equal) | [optional] 
 **mdnsScan** | **Boolean**| MDNS scan enabled | [optional] 
 **connectedRangersLt** | **Number**| Total agents (less than) | [optional] 
 **totalAgentsGt** | **Number**| Total agents (more than) | [optional] 

### Return type

[**RangerGatewaySchemaGatewayViewSchemaMany200**](RangerGatewaySchemaGatewayViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRangerGatewaysUpdatePost"></a>
# **webApiRangerGatewaysUpdatePost**
> AffectedResultsSchema200 webApiRangerGatewaysUpdatePost(opts)

Update Gateways

Change the status of filtered gateways discovered by Ranger. You can set the archived status, whether the network behind the gateway may be scanned by Ranger, and whether Ranger will scan only local networks.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GatewaysApi();

var opts = { 
  'body': new S1MgmtApi.RangerGatewaySchemaPostUpdateGatewayData() // RangerGatewaySchemaPostUpdateGatewayData | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerGatewaysUpdatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RangerGatewaySchemaPostUpdateGatewayData**](RangerGatewaySchemaPostUpdateGatewayData.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRangerGatewaysgatewayIdPut"></a>
# **webApiRangerGatewaysgatewayIdPut**
> RangerGatewaySchemaGatewayViewSchema200 webApiRangerGatewaysgatewayIdPut(gatewayId, opts)

Update Gateway

Change the Ranger scan configuration for a gateway that Ranger discovered

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GatewaysApi();

var gatewayId = "gatewayId_example"; // String | Gateway ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.RangerGatewaySchemaPutGatewayData() // RangerGatewaySchemaPutGatewayData | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRangerGatewaysgatewayIdPut(gatewayId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gatewayId** | **String**| Gateway ID. Example: \"225494730938493804\". | 
 **body** | [**RangerGatewaySchemaPutGatewayData**](RangerGatewaySchemaPutGatewayData.md)|  | [optional] 

### Return type

[**RangerGatewaySchemaGatewayViewSchema200**](RangerGatewaySchemaGatewayViewSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

