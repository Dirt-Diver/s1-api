# S1MgmtApi.TasksSchemasTaskSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailedStatus** | **String** | Detailed status | [optional] 
**agentUuid** | **String** | Agent uuid | [optional] 
**accountId** | **String** | Account id | [optional] 
**agentMachineType** | **String** | Agent machine type | [optional] 
**updatedAt** | **Date** | Timestamp of last update | [optional] 
**siteId** | **String** | Site id | [optional] 
**scriptResultsPath** | **String** | Script results path | [optional] 
**accountName** | **String** | Account name | [optional] 
**id** | **String** | Task id | [optional] 
**agentIsActive** | **Boolean** | Agent is active | [optional] 
**scriptResultsSignature** | **String** | Script results signature | [optional] 
**groupName** | **String** | Group name | [optional] 
**initiatedById** | **String** | Initiated by id | [optional] 
**statusCode** | **Number** | Status code | [optional] 
**agentId** | **String** | Agent id | [optional] 
**agentIsDecommissioned** | **Boolean** | Agent is decommissioned | [optional] 
**type** | **String** | Type | [optional] 
**agentOsType** | **String** | OS type | [optional] 
**parentTaskId** | **String** | Parent task id | [optional] 
**description** | **String** | Description | [optional] 
**groupId** | **String** | Group id | [optional] 
**siteName** | **String** | Site name | [optional] 
**statusDescription** | **Object** | Status description | [optional] 
**createdAt** | **Date** | Timestamp of date creation | [optional] 
**initiatedBy** | **String** | Initiated by | [optional] 
**scriptResultsBucket** | **String** | Script results bucket | [optional] 
**agentComputerName** | **String** | Agent computer name | [optional] 
**status** | **String** | Status | [optional] 


<a name="AgentOsTypeEnum"></a>
## Enum: AgentOsTypeEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `created` (value: `"created"`)

* `scheduled` (value: `"scheduled"`)

* `pending` (value: `"pending"`)

* `pendingUserAction` (value: `"pending_user_action"`)

* `inProgress` (value: `"in_progress"`)

* `failed` (value: `"failed"`)

* `completed` (value: `"completed"`)

* `canceled` (value: `"canceled"`)

* `expired` (value: `"expired"`)

* `partiallyCompleted` (value: `"partially_completed"`)




