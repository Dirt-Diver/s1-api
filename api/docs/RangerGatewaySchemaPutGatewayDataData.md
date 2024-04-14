# S1MgmtApi.RangerGatewaySchemaPutGatewayDataData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowScan** | **Boolean** | Do we allow scanning in this network | [optional] 
**snmpScan** | **Boolean** | SNMP scan enabled | [optional] 
**accountId** | **Number** | The Account Id | [optional] 
**udpPorts** | **[Number]** | Allowed UDP ports | [optional] 
**udpPortScan** | **Boolean** | UDP Port scan enabled | [optional] 
**icmpScan** | **Boolean** | ICMP scan enabled | [optional] 
**tcpPorts** | **[Number]** | Allowed TCP ports | [optional] 
**tcpPortScan** | **Boolean** | TCP Port scan enabled | [optional] 
**siteId** | **Number** | The Site Id | [optional] 
**scanOnlyLocalSubnets** | **Boolean** | Can we scan remote networks from this gateway | [optional] 
**networkName** | **String** | The network name | [optional] 
**restrictions** | [**[SchemasRangerSettingsSchema200DataRestrictions]**](SchemasRangerSettingsSchema200DataRestrictions.md) | A set of IP addresses that should not be scanned in the specific network | [optional] 
**multiCastSsdpScan** | **Boolean** | Multicast SSDP scan enabled | [optional] 
**rdnsScan** | **Boolean** | RDNS scan enabled | [optional] 
**archived** | **Boolean** | Archived network | [optional] 
**inheritSettings** | **Boolean** | True if inherited values are taken from account settings | [optional] 
**mdnsScan** | **Boolean** | MDNS scan enabled | [optional] 
**smbScan** | **Boolean** | SMB scan enabled | [optional] 


