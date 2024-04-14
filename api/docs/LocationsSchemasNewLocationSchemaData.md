# S1MgmtApi.LocationsSchemasNewLocationSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Location description | [optional] 
**operator** | **String** | Logical operator to apply between the set of identifiers | 
**dnsLookup** | [**LocationsSchemasNewLocationSchemaDataDnsLookup**](LocationsSchemasNewLocationSchemaDataDnsLookup.md) |  | [optional] 
**serverConnectivity** | [**LocationsSchemasNewLocationSchemaDataServerConnectivity**](LocationsSchemasNewLocationSchemaDataServerConnectivity.md) |  | [optional] 
**name** | **String** | Location name (should be unique per scope) | 
**dnsServers** | [**LocationsSchemasNewLocationSchemaDataDnsServers**](LocationsSchemasNewLocationSchemaDataDnsServers.md) |  | [optional] 
**networkInterfaces** | [**LocationsSchemasNewLocationSchemaDataNetworkInterfaces**](LocationsSchemasNewLocationSchemaDataNetworkInterfaces.md) |  | [optional] 
**ipAddresses** | [**LocationsSchemasNewLocationSchemaDataIpAddresses**](LocationsSchemasNewLocationSchemaDataIpAddresses.md) |  | [optional] 
**registryKeys** | [**LocationsSchemasNewLocationSchemaDataRegistryKeys**](LocationsSchemasNewLocationSchemaDataRegistryKeys.md) |  | [optional] 


<a name="OperatorEnum"></a>
## Enum: OperatorEnum


* `all` (value: `"all"`)

* `any` (value: `"any"`)

* `none` (value: `"none"`)




