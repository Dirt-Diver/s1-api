# S1MgmtApi.V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalEndpoints** | **Number** | Total endpoints | 
**scriptData** | [**V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ScriptData**](V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ScriptData.md) |  | 
**endpointsByScope** | [**[V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200EndpointsByScope]**](V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200EndpointsByScope.md) | Endpoints by scope | 
**pendingExecutionId** | **String** | Pending execution id | 
**state** | **String** | State | 
**executionData** | [**V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData**](V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData.md) |  | 
**reviewer** | **String** | Reviewer | 
**creator** | **String** | Creator | 
**creatorId** | **String** | Creator id | 
**reviewerId** | **String** | Reviewer id | 
**canApproveOrDecline** | **Boolean** | Can approve or decline | 
**scheduledTaskId** | **String** | Scheduled task id | [optional] 
**createdAt** | **Date** | Created at | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `waiting` (value: `"waiting"`)

* `approved` (value: `"approved"`)

* `declined` (value: `"declined"`)

* `expired` (value: `"expired"`)




