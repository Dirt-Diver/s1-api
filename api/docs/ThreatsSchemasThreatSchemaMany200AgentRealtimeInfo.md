# S1MgmtApi.ThreatsSchemasThreatSchemaMany200AgentRealtimeInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentIsActive** | **Boolean** | Is active | [optional] 
**scanFinishedAt** | **Date** | Finish time of last scan (If applicable) | [optional] 
**agentMitigationMode** | **String** | Agent mitigation mode policy | [optional] 
**agentInfected** | **Boolean** | Agent infected | [optional] 
**operationalState** | **String** | Agent operational state | [optional] 
**accountId** | **String** | Account id | [optional] 
**agentMachineType** | **String** | Machine type | [optional] 
**siteId** | **String** | Site id | [optional] 
**storageType** | **String** | Storage Type | [optional] 
**userActionsNeeded** | **[String]** | A list of pending user actions. List items possible values: \"none, user_action_needed, reboot_needed, upgrade_needed, incompatible_os, unprotected, rebootless_without_dynamic_detection, extended_exclusions_partially_accepted, reboot_required, pending_deprecation, ne_not_running, ne_cf_not_active\". | [optional] 
**rebootRequired** | **Boolean** | A reboot is required on the endpoint for at least one threat | [optional] 
**agentComputerName** | **String** | Computer name | [optional] 
**agentUuid** | **String** | Uuid | [optional] 
**accountName** | **String** | Account name | [optional] 
**agentId** | **String** | Id | [optional] 
**agentDecommissionedAt** | **Boolean** | Decommissioned at | [optional] 
**groupName** | **String** | Group name | [optional] 
**agentIsDecommissioned** | **Boolean** | Is decommissioned | [optional] 
**activeThreats** | **Number** | Active threats | [optional] 
**agentOsName** | **String** | Os name | [optional] 
**agentNetworkStatus** | **String** | Network status | [optional] 
**scanStatus** | **String** | Scan status | [optional] 
**networkInterfaces** | [**[ThreatsSchemasThreatSchemaMany200AgentRealtimeInfoNetworkInterfaces]**](ThreatsSchemasThreatSchemaMany200AgentRealtimeInfoNetworkInterfaces.md) | Device's network interfaces | [optional] 
**scanStartedAt** | **Date** | Start time of last scan | [optional] 
**groupId** | **String** | Group id | [optional] 
**siteName** | **String** | Site name | [optional] 
**agentVersion** | **String** | Agent version | [optional] 
**storageName** | **String** | Storage Name | [optional] 
**agentOsType** | **String** | OS type | [optional] 
**agentDomain** | **String** | Domain | [optional] 
**scanAbortedAt** | **Date** | Abort time of last scan (If applicable) | [optional] 
**agentOsRevision** | **String** | Os revision | [optional] 


<a name="AgentMitigationModeEnum"></a>
## Enum: AgentMitigationModeEnum


* `detect` (value: `"detect"`)

* `protect` (value: `"protect"`)




<a name="AgentMachineTypeEnum"></a>
## Enum: AgentMachineTypeEnum


* `unknown` (value: `"unknown"`)

* `desktop` (value: `"desktop"`)

* `laptop` (value: `"laptop"`)

* `server` (value: `"server"`)

* `kubernetesNode` (value: `"kubernetes node"`)

* `storage` (value: `"storage"`)

* `kubernetesPod` (value: `"kubernetes pod"`)

* `ecsTask` (value: `"ecs task"`)




<a name="[UserActionsNeededEnum]"></a>
## Enum: [UserActionsNeededEnum]


* `none` (value: `"none"`)

* `userActionNeeded` (value: `"user_action_needed"`)

* `rebootNeeded` (value: `"reboot_needed"`)

* `upgradeNeeded` (value: `"upgrade_needed"`)

* `incompatibleOs` (value: `"incompatible_os"`)

* `unprotected` (value: `"unprotected"`)

* `rebootlessWithoutDynamicDetection` (value: `"rebootless_without_dynamic_detection"`)

* `extendedExclusionsPartiallyAccepted` (value: `"extended_exclusions_partially_accepted"`)

* `rebootRequired` (value: `"reboot_required"`)

* `pendingDeprecation` (value: `"pending_deprecation"`)

* `neNotRunning` (value: `"ne_not_running"`)

* `neCfNotActive` (value: `"ne_cf_not_active"`)




<a name="AgentNetworkStatusEnum"></a>
## Enum: AgentNetworkStatusEnum


* `connected` (value: `"connected"`)

* `disconnected` (value: `"disconnected"`)

* `connecting` (value: `"connecting"`)

* `disconnecting` (value: `"disconnecting"`)




<a name="ScanStatusEnum"></a>
## Enum: ScanStatusEnum


* `none` (value: `"none"`)

* `started` (value: `"started"`)

* `aborted` (value: `"aborted"`)

* `finished` (value: `"finished"`)




<a name="AgentOsTypeEnum"></a>
## Enum: AgentOsTypeEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




