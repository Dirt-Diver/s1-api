# S1MgmtApi.ThreatsSchemasThreatSchemaMany200MitigationStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportId** | **String** | ID of the mitigation report | [optional] 
**action** | **String** | Action | [optional] 
**actionsCounters** | [**ThreatsSchemasThreatSchemaMany200ActionsCounters**](ThreatsSchemasThreatSchemaMany200ActionsCounters.md) |  | [optional] 
**groupNotFound** | **Boolean** | Agent could not find the threat | [optional] 
**mitigationEndedAt** | **Date** | The time the Agent finished the mitigation | [optional] 
**lastUpdate** | **Date** | Timestamp of last mitigation status update | [optional] 
**agentSupportsReport** | **Boolean** | The Agent generates a full mitigation report | [optional] 
**status** | **String** | Status | [optional] 
**mitigationStartedAt** | **Date** | The time the Agent started the mitigation | [optional] 
**latestReport** | **String** | Report download URL. If None, there is no report | [optional] 


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




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `success` (value: `"success"`)

* `failed` (value: `"failed"`)

* `pendingReboot` (value: `"pending-reboot"`)

* `pending` (value: `"pending"`)

* `sent` (value: `"sent"`)

* `partial` (value: `"partial"`)




