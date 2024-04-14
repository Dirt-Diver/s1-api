# S1MgmtApi.V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationProfileKeyword** | **String** | Destination profile keyword | [optional] 
**taskDescription** | **String** | Task description | 
**singularityxdrKeyword** | **String** | Singularityxdr keyword | [optional] 
**outputDirectory** | **String** | Output directory | [optional] 
**requiresApproval** | **Boolean** | If set to true, execution will require approval | [optional] 
**password** | **String** | Password | [optional] 
**passwordFromScope** | [**V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionDataPasswordFromScope**](V21RsoSchemasPendingExecutionsPaginatedResponseSchemaMany200ExecutionDataPasswordFromScope.md) |  | [optional] 
**inputParams** | **String** | Input params | [optional] 
**destinationProfileId** | **String** | Id of destination profile to use | [optional] 
**apiKey** | **String** | Api key | [optional] 
**outputFilePaths** | **[String]** | Output file paths | [optional] 
**scriptRuntimeTimeoutSeconds** | **Number** | Script runtime timout in seconds for current execution | [optional] 
**scriptId** | **String** | Script id | 
**outputDestination** | **String** | Output destination | 
**singularityxdrUrl** | **String** | Singularityxdr url | [optional] 


<a name="OutputDestinationEnum"></a>
## Enum: OutputDestinationEnum


* `none` (value: `"None"`)

* `local` (value: `"Local"`)

* `sentinelCloud` (value: `"SentinelCloud"`)

* `singularityXDR` (value: `"SingularityXDR"`)




