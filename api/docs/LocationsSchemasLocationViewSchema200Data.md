# S1MgmtApi.LocationsSchemasLocationViewSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** | **String** | Logical operator to apply between the set of identifiers | 
**dnsLookup** | [**LocationsSchemasNewLocationSchemaDataDnsLookup**](LocationsSchemasNewLocationSchemaDataDnsLookup.md) |  | [optional] 
**updatedAt** | **Date** | Updated at | [optional] 
**scopeId** | **String** | Scope id | [optional] 
**updaterId** | **String** | Location updater | [optional] 
**id** | **String** | Id | [optional] 
**creatorId** | **String** | Location creator ID | [optional] 
**reportingAgents** | **Number** | Number of agents in the location | [optional] 
**updater** | **String** | Location updater name | [optional] 
**scopeName** | **String** | Scope name | [optional] 
**dnsServers** | [**LocationsSchemasNewLocationSchemaDataDnsServers**](LocationsSchemasNewLocationSchemaDataDnsServers.md) |  | [optional] 
**networkInterfaces** | [**LocationsSchemasNewLocationSchemaDataNetworkInterfaces**](LocationsSchemasNewLocationSchemaDataNetworkInterfaces.md) |  | [optional] 
**ipAddresses** | [**LocationsSchemasNewLocationSchemaDataIpAddresses**](LocationsSchemasNewLocationSchemaDataIpAddresses.md) |  | [optional] 
**registryKeys** | [**LocationsSchemasNewLocationSchemaDataRegistryKeys**](LocationsSchemasNewLocationSchemaDataRegistryKeys.md) |  | [optional] 
**scope** | **String** | Scope | [optional] 
**description** | **String** | Location description | [optional] 
**activeFirewallRules** | **Number** | Number of active firewall rules defined in the location | [optional] 
**serverConnectivity** | [**LocationsSchemasNewLocationSchemaDataServerConnectivity**](LocationsSchemasNewLocationSchemaDataServerConnectivity.md) |  | [optional] 
**name** | **String** | Location name (should be unique per scope) | 
**createdAt** | **Date** | Created at | [optional] 
**creator** | **String** | Location creator name | [optional] 
**editable** | **Boolean** | Is location editable in current scope | [optional] 
**isFallback** | **Boolean** | Is fallback | [optional] 


<a name="OperatorEnum"></a>
## Enum: OperatorEnum


* `all` (value: `"all"`)

* `any` (value: `"any"`)

* `none` (value: `"none"`)




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `site` (value: `"site"`)

* `group` (value: `"group"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)




