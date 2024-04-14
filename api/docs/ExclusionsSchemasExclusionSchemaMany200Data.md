# S1MgmtApi.ExclusionsSchemasExclusionSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description | [optional] 
**inject** | **Boolean** | [DEPRECATED] Path exclusion monitor mode | [optional] 
**id** | **String** | Id | [optional] 
**createdAt** | **Date** | Timestamp of exclusion item creation | [optional] 
**mode** | **String** | Exclusion mode (path exclusion only) | [optional] 
**osType** | **String** | OS type | [optional] 
**scopeName** | **String** | Scope name | [optional] 
**updatedAt** | **Date** | Timestamp of exclusion item update | [optional] 
**type** | **String** | Type | [optional] 
**source** | **String** | Source: cloud, user, action_from_threat, or catalog | [optional] 
**value** | **String** | Sha1 if hash type or value according to the exclusion list type | [optional] 
**userId** | **String** | ID of the creating user | [optional] 
**pathExclusionType** | **String** | Excluded path for a path exclusion list | [optional] 
**userName** | **String** | Name of the creating user | [optional] 
**actions** | **[String]** | Actions to perform | [optional] 
**notRecommended** | **String** | Not recommended | [optional] 
**scope** | [**ExclusionsSchemasExclusionSchemaGetMany200Scope**](ExclusionsSchemasExclusionSchemaGetMany200Scope.md) |  | 


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




<a name="OsTypeEnum"></a>
## Enum: OsTypeEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="SourceEnum"></a>
## Enum: SourceEnum


* `user` (value: `"user"`)

* `cloud` (value: `"cloud"`)

* `actionFromThreat` (value: `"action_from_threat"`)

* `catalog` (value: `"catalog"`)




<a name="PathExclusionTypeEnum"></a>
## Enum: PathExclusionTypeEnum


* `file` (value: `"file"`)

* `folder` (value: `"folder"`)

* `subfolders` (value: `"subfolders"`)




<a name="[ActionsEnum]"></a>
## Enum: [ActionsEnum]


* `upload` (value: `"upload"`)

* `detect` (value: `"detect"`)




