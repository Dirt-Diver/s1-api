# S1MgmtApi.SchemasRangerSettingsSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snmpScan** | **Boolean** | SNMP scan enabled | [optional] 
**accountId** | **String** | Account id | [optional] 
**useFullDnsScan** | **Boolean** | DNS Full scan enabled | [optional] 
**icmpScan** | **Boolean** | ICMP scan enabled | [optional] 
**tcpPorts** | **[Number]** | TCP Ports | [optional] 
**scopeId** | **String** | Scope id | [optional] 
**scanOnlyLocalSubnets** | **Boolean** | Scan only local subnets | [optional] 
**minAgentsInNetworkToScan** | **Number** | Minimum agents required in a network to be listed as selectable for scan | [optional] 
**smbScan** | **Boolean** | SMB scan enabled | [optional] 
**combineDevices** | **Boolean** | Combine devices as one among multiple networks | [optional] 
**udpPortScan** | **Boolean** | UDP Port scan enabled | [optional] 
**udpPorts** | **[Number]** | UDP Ports | [optional] 
**specificPorts** | [**[SchemasRangerSettingsSchema200DataSpecificPorts]**](SchemasRangerSettingsSchema200DataSpecificPorts.md) | [FUTURE] A set of specific ports allowed to be used as source ports for an active scan | [optional] 
**enabled** | **Boolean** | Is the ranger collection enabled for the account | [optional] 
**usePeriodicSnapshots** | **Boolean** | Ranger views are generated periodically by the snapshot period | [optional] 
**rdnsScan** | **Boolean** | RDNS scan enabled | [optional] 
**newNetworkInHours** | **Number** | Networks are going to be marked as new for this period | [optional] 
**multiScanSsdp** | **Boolean** | SSDP Multicast scan enabled | [optional] 
**autoEnableNetworks** | **Boolean** | All networks that match the min agents configuration will be enabled automatically | [optional] 
**snapshotPeriod** | **Number** | Period in minutes for each snapshot | [optional] 
**networkDecommissionValue** | **Number** | The number of days to archive a network which was not enabled for scan | [optional] 
**tcpPortScan** | **Boolean** | TCP Port scan enabled | [optional] 
**restrictions** | [**[SchemasRangerSettingsSchema200DataRestrictions]**](SchemasRangerSettingsSchema200DataRestrictions.md) | A set of IP addresses that should not be scanned in the specific network | [optional] 
**mdnsScan** | **Boolean** | MDNS scan enabled | [optional] 
**useSpecificPorts** | **Boolean** | [FUTURE] Use only specific ports defined in specific ports as source ports of active scans | [optional] 


