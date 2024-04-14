# S1MgmtApi.TasksSchemasPutTaskSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**taskType** | **String** | Defines task's type and priority | 
**tenant** | **Boolean** | Indicates a tenant scope request | [optional] 
**groupIds** | **[String]** | List of Group IDs to filter by | [optional] 


<a name="TaskTypeEnum"></a>
## Enum: TaskTypeEnum


* `agentsUpgrade` (value: `"agents_upgrade"`)

* `agentVersionChange` (value: `"agent_version_change"`)

* `autoDeploy` (value: `"auto_deploy"`)

* `scriptExecution` (value: `"script_execution"`)

* `cisScan` (value: `"cis_scan"`)

* `gad` (value: `"gad"`)

* `forensicsCollection` (value: `"forensics_collection"`)




