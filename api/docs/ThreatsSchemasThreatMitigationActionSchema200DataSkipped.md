# S1MgmtApi.ThreatsSchemasThreatMitigationActionSchema200DataSkipped

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Reason | [optional] 
**description** | **String** | Description | [optional] 
**action** | **String** | Action | [optional] 


<a name="ReasonEnum"></a>
## Enum: ReasonEnum


* `permissions` (value: `"permissions"`)

* `notSupported` (value: `"not_supported"`)

* `precondition` (value: `"precondition"`)

* `triggered` (value: `"triggered"`)




<a name="ActionEnum"></a>
## Enum: ActionEnum


* `kill` (value: `"kill"`)

* `remediate` (value: `"remediate"`)

* `rollback` (value: `"rollback"`)

* `quarantine` (value: `"quarantine"`)

* `unquarantine` (value: `"unquarantine"`)

* `networkQuarantine` (value: `"network_quarantine"`)

* `removeMacros` (value: `"remove_macros"`)

* `restoreMacros` (value: `"restore_macros"`)




