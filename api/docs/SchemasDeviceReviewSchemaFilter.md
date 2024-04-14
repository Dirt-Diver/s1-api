# S1MgmtApi.SchemasDeviceReviewSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hasUserLabel** | **Boolean** |  | [optional] 
**agentIds** | **[String]** | List of agent ids | [optional] 
**externalIp** | **String** | Search using external IP | [optional] 
**managedState** | **String** | Is the device managed | [optional] 
**discoveryMethods** | **[String]** | Discovery methods | [optional] 
**udpPortsContains** | **[Number]** | Free-text filter by udp port (supports multiple values) | [optional] 
**hostnamesContains** | **[String]** | Free-text filter by hostname (supports multiple values) | [optional] 
**osVersion** | **String** | Os version | [optional] 
**deviceTypes** | **[String]** | Device types | [optional] 
**ids** | **[String]** | List of device ids | [optional] 
**networkNameContains** | **[String]** | Free-text filter by network name (supports multiple values) | [optional] 
**query** | **String** | Query | [optional] 
**networkName** | **String** | Search using network name | [optional] 
**osVersionContains** | **[String]** | Free-text filter by OS full name and version (supports multiple values) | [optional] 
**externalIpContains** | **[String]** | Free-text filter by visible IP (supports multiple values) | [optional] 
**firstSeenLte** | **Date** | Devices first seen before or at this timestamp | [optional] 
**osTypes** | **[String]** | Included OS types | [optional] 
**deviceReviews** | **[String]** | The device review state | [optional] 
**gatewayMacAddress** | **String** | A gateway mac address to search for | [optional] 
**osName** | **String** | Os name | [optional] 
**lastSeenGt** | **Date** | Devices last seen after this timestamp | [optional] 
**manufacturerContains** | **[String]** | Free-text filter by manufacturer (supports multiple values) | [optional] 
**period** | **String** | Period | [optional] [default to 'latest']
**firstSeenBetween** | **String** | Date range refor first seen(format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**hostnames** | **[String]** | Hostnames | [optional] 
**localIpContains** | **[String]** | Free-text filter by IP Address (supports multiple values) | [optional] 
**deviceFunctionContains** | **[String]** | Free-text filter by device function (supports multiple values) | [optional] 
**tcpPortsContains** | **[Number]** | Free-text filter by tcp port (supports multiple values) | [optional] 
**lastSeenLte** | **Date** | Devices last seen before or at this timestamp | [optional] 
**knownFingerprintingData** | **[String]** | Known fingerprinting data | [optional] 
**firstSeenGt** | **Date** | Devices first seen after this timestamp | [optional] 
**macAddress** | **String** | A mac address to search for | [optional] 
**firstSeenLt** | **Date** | Devices first seen before this timestamp | [optional] 
**localIp** | **String** | Search using local IP | [optional] 
**managedStates** | **[String]** | Is the device managed | [optional] 
**lastSeenGte** | **Date** | Devices last seen after or at this timestamp | [optional] 
**manufacturer** | **String** | Manufacturer of the device or network interface | [optional] 
**subnetAddressContains** | **[String]** | Free-text filter by Subnet Address (supports multiple values) | [optional] 
**siteIds** | **[String]** | Single Site ID to filter by | [optional] 
**accountIds** | **[String]** | Single Account ID to filter by | [optional] 
**gatewayMacAddressContains** | **[String]** | Free-text filter by gateway mac address (supports multiple values) | [optional] 
**osType** | **String** | OS type | [optional] 
**firstSeenGte** | **Date** | Devices first seen after or at this timestamp | [optional] 
**macAddressContains** | **[String]** | Free-text filter by mac address (supports multiple values) | [optional] 
**lastSeenBetween** | **String** | Date range for last seen(format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**deviceType** | **String** | Device type | [optional] 
**lastSeenLt** | **Date** | Devices last seen before this timestamp | [optional] 
**tagNameContains** | **[String]** | Free-text filter by tag name (supports multiple values) | [optional] 
**domains** | **[String]** | Included network domains | [optional] 
**siteNames** | **[String]** | Included site names | [optional] 


<a name="PeriodEnum"></a>
## Enum: PeriodEnum


* `latest` (value: `"latest"`)

* `last12h` (value: `"last12h"`)

* `last24h` (value: `"last24h"`)

* `last3d` (value: `"last3d"`)

* `last7d` (value: `"last7d"`)




<a name="[KnownFingerprintingDataEnum]"></a>
## Enum: [KnownFingerprintingDataEnum]


* `manufacturer` (value: `"Manufacturer"`)

* `hostname` (value: `"Hostname"`)

* `oSVersion` (value: `"OS version"`)

* `mACAddress` (value: `"MAC Address"`)




