# S1MgmtApi.RogueSchemasRoguesSettingsSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | Account id | [optional] 
**specificPorts** | [**[SchemasRangerSettingsSchema200DataSpecificPorts]**](SchemasRangerSettingsSchema200DataSpecificPorts.md) | [FUTURE] A set of specific ports allowed to be used as source ports for an active scan | [optional] 
**restrictions** | [**[SchemasRangerSettingsSchema200DataRestrictions]**](SchemasRangerSettingsSchema200DataRestrictions.md) | A set of IP addresses that should not be scanned in the specific network | [optional] 
**enabled** | **Boolean** | Is the ranger collection enabled for the account | [optional] 
**minAgentsInNetworkToScan** | **Number** | Minimum agents required in a network to be listed as selectable for scan.Valid values are 2, 10 and 100 if rogues is enabled | [optional] 
**useSpecificPorts** | **Boolean** | [FUTURE] Use only specific ports defined in specific ports as source ports of active scans | [optional] 


