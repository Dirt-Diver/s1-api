# S1MgmtApi.TasksSchemasResponseTaskSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maintenanceWindowsByDay** | **{String: Object}** | Stores the maintenance time for each day | 
**maxConcurrent** | **Number** | Max concurrent | 
**maintenanceConfigUpdatedAt** | **Date** | Timestamp of last maintenance configuration update | [optional] 
**inheritParentMaintenanceConfig** | **Boolean** | Inherit parent's scope Maintenance windows configuration | 
**taskType** | **String** | Defines task's type and priority | [optional] 
**timezoneGmt** | **String** | Timezone gmt | 
**parentMaxConcurrent** | **Number** | scope's parent max concurrent limit, must not exceed | [optional] 
**concurrencyConfigUpdatedAt** | **Date** | Timestamp of last concurrency configuration update | [optional] 
**inheritParentConcurrencyConfig** | **Boolean** | Inherit parent's scope Max Concurrent configuration | 
**concurrencyConfigUpdatedBy** | **String** | User name of last updated concurrency configuration | [optional] 
**maintenanceConfigUpdatedBy** | **String** | User name of last updated maintenance configuration | [optional] 


<a name="TaskTypeEnum"></a>
## Enum: TaskTypeEnum


* `agentsUpgrade` (value: `"agents_upgrade"`)

* `agentVersionChange` (value: `"agent_version_change"`)

* `autoDeploy` (value: `"auto_deploy"`)

* `scriptExecution` (value: `"script_execution"`)

* `cisScan` (value: `"cis_scan"`)

* `gad` (value: `"gad"`)

* `forensicsCollection` (value: `"forensics_collection"`)




