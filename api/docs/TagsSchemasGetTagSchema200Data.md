# S1MgmtApi.TagsSchemasGetTagSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description | [optional] 
**updaterId** | **String** | Location updater | [optional] 
**linkedRules** | **Number** | Linked rules | [optional] 
**id** | **String** | Id | [optional] 
**name** | **String** | Name | [optional] 
**createdAt** | **Date** | Timestamp of site creation | [optional] 
**creator** | **String** | Location creator name | [optional] 
**creatorId** | **String** | Location creator ID | [optional] 
**affectedScopes** | **Number** | Affected scopes | [optional] 
**kind** | **String** | Kind is a MGMT side indication to categorize special tags like `vulnerability` | [optional] 
**updatedAt** | **Date** | Timestamp of last update | [optional] 
**type** | **String** | Type | 
**scopeId** | **String** | Scope id | [optional] 
**scopeName** | **String** | Scope name | [optional] 
**updater** | **String** | Location updater name | [optional] 
**scope** | **String** | Scope | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `firewall` (value: `"firewall"`)

* `networkQuarantine` (value: `"network-quarantine"`)

* `deviceInventory` (value: `"device-inventory"`)




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `site` (value: `"site"`)

* `group` (value: `"group"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)




