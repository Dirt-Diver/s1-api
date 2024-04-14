# S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityPowerQueriesResponseSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queryId** | **String** | Query Id | 
**externalId** | **String** | External Query Id | [optional] 
**recommendations** | **[String]** | possible action items to improve query results | [optional] 
**columns** | **[Object]** | includes the name of the column and its type | [optional] 
**status** | **String** | Status | 
**progress** | **Number** | Query loading status in percentage | 
**data** | **[[Object]]** | Includes actual searched data | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `PROCESS_RUNNING` (value: `"PROCESS_RUNNING"`)

* `EVENTS_RUNNING` (value: `"EVENTS_RUNNING"`)

* `FAILED` (value: `"FAILED"`)

* `FAILED_CLIENT` (value: `"FAILED_CLIENT"`)

* `FINISHED` (value: `"FINISHED"`)

* `RUNNING` (value: `"RUNNING"`)

* `ERROR` (value: `"ERROR"`)

* `QUERY_CANCELLED` (value: `"QUERY_CANCELLED"`)

* `TIMED_OUT` (value: `"TIMED_OUT"`)

* `QUERY_EXPIRED` (value: `"QUERY_EXPIRED"`)




