# S1MgmtApi.AgentsSchemasAgentsUpdateSoftwareActionSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileName** | **String** | Upgrade with a given uploaded package, locate package by its filename | [optional] 
**osType** | **String** | Filter by specific OS type, can be used in conjunction with \"fileName\" or \"path\" | [optional] 
**path** | **String** | Upgrade from local path at the endpoint | [optional] 
**ignoreConflicts** | **Boolean** | Ignore conflicts that may arise when you upgrade an Agent that has an active Upgrade Policy | [optional] [default to false]
**isScheduled** | **Boolean** | Upgrade according to the defined scheduled in agent upgrade configuration | [optional] 
**packageId** | **String** | Upgrade with a given uploaded package, located package by its ID | [optional] 
**allowDowngrade** | **Boolean** | Allows or disallows downgrading the Agent version | [optional] 
**packageType** | **String** | Package type | [optional] [default to 'AgentAndRanger']


<a name="OsTypeEnum"></a>
## Enum: OsTypeEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)

* `threatDetectionNetapp` (value: `"threat_detection_netapp"`)




<a name="PackageTypeEnum"></a>
## Enum: PackageTypeEnum


* `agent` (value: `"Agent"`)

* `ranger` (value: `"Ranger"`)

* `agentAndRanger` (value: `"AgentAndRanger"`)




