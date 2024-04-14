# S1MgmtApi.ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description | [optional] 
**targetScope** | **String** | Scope to be used for Exclusions | 
**note** | **String** | Note | [optional] [default to 'null']
**mode** | **String** | Exclusion mode (path exclusion only) | [optional] 
**type** | **String** | Selected Exclusion type | 
**externalTicketId** | **String** | External ticket id | [optional] [default to 'null']
**value** | **String** | Optional. If not provided, the relevant value from the Threat will be used | [optional] 
**pathExclusionType** | **String** | Excluded path for a path exclusion list | [optional] 
**actions** | **[String]** | Actions to perform | [optional] 
**macroModules** | [**ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaDataMacroModules**](ThreatsSchemasThreatsAddToExclusionsWithTargetSchemaDataMacroModules.md) |  | [optional] 


<a name="TargetScopeEnum"></a>
## Enum: TargetScopeEnum


* `group` (value: `"group"`)

* `site` (value: `"site"`)

* `account` (value: `"account"`)

* `tenant` (value: `"tenant"`)




<a name="ModeEnum"></a>
## Enum: ModeEnum


* `suppress` (value: `"suppress"`)

* `suppressDynamicOnly` (value: `"suppress_dynamic_only"`)

* `suppressDfiOnly` (value: `"suppress_dfi_only"`)

* `disableInProcessMonitor` (value: `"disable_in_process_monitor"`)

* `disableInProcessMonitorDeep` (value: `"disable_in_process_monitor_deep"`)

* `disableAllMonitors` (value: `"disable_all_monitors"`)

* `disableAllMonitorsDeep` (value: `"disable_all_monitors_deep"`)

* `suppressAppControl` (value: `"suppress_app_control"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `hash` (value: `"hash"`)

* `path` (value: `"path"`)

* `certificate` (value: `"certificate"`)

* `browser` (value: `"browser"`)

* `fileType` (value: `"file_type"`)




<a name="[ActionsEnum]"></a>
## Enum: [ActionsEnum]


* `upload` (value: `"upload"`)

* `detect` (value: `"detect"`)




