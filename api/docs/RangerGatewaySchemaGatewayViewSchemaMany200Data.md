# S1MgmtApi.RangerGatewaySchemaGatewayViewSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snmpScan** | **Boolean** | SNMP scan enabled | [optional] 
**accountId** | **Number** | The Account Id | [optional] 
**icmpScan** | **Boolean** | ICMP scan enabled | [optional] 
**tcpPorts** | **[Number]** | Allowed TCP ports | [optional] 
**scanOnlyLocalSubnets** | **Boolean** | Allow remote tasks form this network | [optional] 
**siteId** | **Number** | The Site Id | [optional] 
**archived** | **Boolean** | Archived network | [optional] 
**smbScan** | **Boolean** | SMB scan enabled | [optional] 
**accountName** | **String** | Account name | [optional] 
**agentPercentage** | **Number** | Percentage of agents of the account in this network calculated as numberOfAgents/totalAgents * 100 | [optional] 
**id** | **String** | The gateway id | [optional] 
**udpPortScan** | **Boolean** | UDP Port scan enabled | [optional] 
**udpPorts** | **[Number]** | Allowed UDP ports | [optional] 
**externalIp** | **String** | The gateway external Ip | [optional] 
**rdnsScan** | **Boolean** | RDNS scan enabled | [optional] 
**totalAgents** | **Number** | The total of non decommissioned agents in the account | [optional] 
**allowScan** | **Boolean** | Do we allow scanning in this network | [optional] 
**multiScanSsdp** | **Boolean** | Multicast SSDP scan enabled | [optional] 
**_new** | **Boolean** | True if this is network was first seen some days ago, 3 by default | [optional] 
**macAddress** | **String** | The gateway mac address | [optional] 
**discoveryMethod** | **String** | Discovery method | [optional] 
**manufacturer** | **String** | The gateway manufacturer obtained from the mac address | [optional] 
**createdAt** | **Date** | Created at | [optional] 
**ip** | **String** | The gateway local ip | [optional] 
**tcpPortScan** | **Boolean** | TCP Port scan enabled | [optional] 
**connectedRangers** | **Number** | The number of active rangers | [optional] 
**numberOfRangers** | **Number** | The number of rangers in this network | [optional] 
**networkName** | **String** | The network name | [optional] 
**numberOfAgents** | **Number** | The number of non decommissioned agents in this network | [optional] 
**restrictions** | [**[SchemasRangerSettingsSchema200DataRestrictions]**](SchemasRangerSettingsSchema200DataRestrictions.md) | A set of IP addresses that should not be scanned in the specific network | [optional] 
**inheritSettings** | **Boolean** | True if inherited values are taken from account settings | [optional] 
**mdnsScan** | **Boolean** | MDNS scan enabled | [optional] 
**expiryDate** | **Date** | Date when this network will expire, null if it won't expire | [optional] 


<a name="DiscoveryMethodEnum"></a>
## Enum: DiscoveryMethodEnum


* `automatic` (value: `"Automatic"`)

* `user` (value: `"User"`)




