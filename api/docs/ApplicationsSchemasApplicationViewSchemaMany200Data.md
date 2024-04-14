# S1MgmtApi.ApplicationsSchemasApplicationViewSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentInfected** | **Boolean** | Agent infected | [optional] 
**agentUuid** | **String** | Agent uuid | [optional] 
**agentMachineType** | **String** | Agent machine type | [optional] 
**size** | **Number** | Application size (bytes) | [optional] 
**updatedAt** | **Date** | Updated at | [optional] 
**agentNetworkStatus** | **String** | Agent network status | [optional] 
**id** | **String** | Application ID | [optional] 
**agentIsActive** | **Boolean** | Agent is active | [optional] 
**agentOperationalState** | **String** | Agent operational state | [optional] 
**signed** | **Boolean** | Signed | [optional] 
**agentId** | **String** | Agent id | [optional] 
**publisher** | **String** | Publisher | [optional] 
**version** | **String** | Version | [optional] 
**agentIsDecommissioned** | **Boolean** | Agent is decommissioned | [optional] 
**type** | **String** | Type | [optional] 
**agentOsType** | **String** | OS type | [optional] 
**agentVersion** | **String** | Agent version | [optional] 
**name** | **String** | Name | [optional] 
**createdAt** | **Date** | Created at | [optional] 
**osType** | **String** | OS type | [optional] 
**agentComputerName** | **String** | Agent computer name | [optional] 
**riskLevel** | **String** | Risk level | [optional] 
**installedAt** | **Date** | Installed at | [optional] 
**agentDomain** | **String** | Agent domain | [optional] 


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




<a name="AgentNetworkStatusEnum"></a>
## Enum: AgentNetworkStatusEnum


* `connected` (value: `"connected"`)

* `disconnected` (value: `"disconnected"`)

* `connecting` (value: `"connecting"`)

* `disconnecting` (value: `"disconnecting"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `app` (value: `"app"`)

* `kb` (value: `"kb"`)

* `patch` (value: `"patch"`)

* `chromeExtension` (value: `"chromeExtension"`)

* `edgeExtension` (value: `"edgeExtension"`)

* `firefoxExtension` (value: `"firefoxExtension"`)

* `safariExtension` (value: `"safariExtension"`)




<a name="AgentOsTypeEnum"></a>
## Enum: AgentOsTypeEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="OsTypeEnum"></a>
## Enum: OsTypeEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="RiskLevelEnum"></a>
## Enum: RiskLevelEnum


* `none` (value: `"none"`)

* `low` (value: `"low"`)

* `medium` (value: `"medium"`)

* `high` (value: `"high"`)

* `critical` (value: `"critical"`)




