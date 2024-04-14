# S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryStatusResponseSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queryModeInfo** | [**DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200DataQueryModeInfo**](DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200DataQueryModeInfo.md) |  | [optional] 
**warnings** | **String** | Warnings | [optional] 
**responseState** | **String** | Response state | 
**responseError** | **String** | Relevant only for FAILED and FAILED_CLIENT DV errors | [optional] 
**progressStatus** | **Number** | Query loading status in percentage | 


<a name="ResponseStateEnum"></a>
## Enum: ResponseStateEnum


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




