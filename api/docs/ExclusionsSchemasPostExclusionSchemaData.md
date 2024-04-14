# S1MgmtApi.ExclusionsSchemasPostExclusionSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description | [optional] 
**osType** | **String** | OS type | 
**mode** | **String** | Exclusion mode (path exclusion only) | [optional] 
**type** | **String** | Exclusion item type | 
**source** | **String** | Source | [optional] 
**value** | **Object** | Valid values depend on the item type | 
**pathExclusionType** | **String** | Excluded path for a path exclusion list | [optional] 
**actions** | **[String]** | Actions to perform | [optional] 
**inject** | **Boolean** | [DEPRECATED] Path exclusion monitor mode | [optional] 


<a name="OsTypeEnum"></a>
## Enum: OsTypeEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




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


* `path` (value: `"path"`)

* `certificate` (value: `"certificate"`)

* `browser` (value: `"browser"`)

* `fileType` (value: `"file_type"`)

* `whiteHash` (value: `"white_hash"`)




<a name="[ActionsEnum]"></a>
## Enum: [ActionsEnum]


* `upload` (value: `"upload"`)

* `detect` (value: `"detect"`)




