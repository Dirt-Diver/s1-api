# S1MgmtApi.CloudProxyRemoteScriptsExecuteScriptSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outputDestination** | **String** | Output destination | 
**requiresApproval** | **Boolean** | If set to true, execution will require approval | [optional] 
**outputFilePaths** | **[String]** | Output file paths | [optional] 
**inputParams** | **String** | Input params | [optional] 
**destinationProfileId** | **String** | Id of destination profile to use | [optional] 
**scriptId** | **String** | Script id | 
**outputDirectory** | **String** | Output directory | [optional] 
**destinationProfileKeyword** | **String** | Destination profile keyword | [optional] 
**taskDescription** | **String** | Task description | 
**scriptRuntimeTimeoutSeconds** | **Number** | Script runtime timout in seconds for current execution | [optional] 
**singularityxdrKeyword** | **String** | Singularityxdr keyword | [optional] 
**apiKey** | **String** | Api key | [optional] 
**singularityxdrUrl** | **String** | Singularityxdr url | [optional] 
**passwordFromScope** | [**AgentsSchemasStartRemoteShellSchemaDataPasswordFromScope**](AgentsSchemasStartRemoteShellSchemaDataPasswordFromScope.md) |  | [optional] 
**password** | **String** | Password | [optional] 


<a name="OutputDestinationEnum"></a>
## Enum: OutputDestinationEnum


* `sentinelCloud` (value: `"SentinelCloud"`)

* `local` (value: `"Local"`)

* `none` (value: `"None"`)

* `singularityXDR` (value: `"SingularityXDR"`)




