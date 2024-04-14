# S1MgmtApi.ExclusionsSchemasExclusionSchemaGetMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** | Exclusion mode (path exclusion only) | [optional] 
**includeChildren** | **Boolean** | Return filters from children scope levels (Default: false) | [optional] [default to false]
**updatedAt** | **Date** | Timestamp of item update | [optional] 
**pathExclusionType** | **String** | Excluded path for a path exclusion list | [optional] 
**userId** | **String** | ID of the creating user | [optional] 
**actions** | **[String]** | Actions to perform | [optional] 
**inAppInventory** | **Boolean** | Found or Not found - indicates if this exclusion is related to an application found in the scope's Application Inventory. | [optional] 
**notRecommended** | **String** | Not recommended | [optional] 
**id** | **String** | Id | [optional] 
**source** | **String** | Source: cloud, user, action_from_threat, or catalog | [optional] 
**imported** | **Boolean** | indication whether the exclusion was imported by a bulk operation or not | [optional] 
**scopePath** | **String** | Scope path | [optional] 
**value** | **String** | Sha1 if hash type or value according to the exclusion list type | [optional] 
**inject** | **Boolean** | [DEPRECATED] Path exclusion monitor mode | [optional] 
**userName** | **String** | Name of the creating user | [optional] 
**applicationName** | **String** | The Application name of exclusions created from the Exclusion Catalog. | [optional] 
**includeParents** | **Boolean** | Return filters from parent scope levels (Default: false) | [optional] [default to false]
**scopeName** | **String** | Scope name | [optional] 
**type** | **String** | type | [optional] 
**scope** | [**ExclusionsSchemasExclusionSchemaGetMany200Scope**](ExclusionsSchemasExclusionSchemaGetMany200Scope.md) |  | [optional] 
**description** | **String** | Description | [optional] 
**createdAt** | **Date** | Timestamp of item creation | [optional] 
**osType** | **String** | os_type | [optional] 


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




<a name="PathExclusionTypeEnum"></a>
## Enum: PathExclusionTypeEnum


* `file` (value: `"file"`)

* `folder` (value: `"folder"`)

* `subfolders` (value: `"subfolders"`)




<a name="[ActionsEnum]"></a>
## Enum: [ActionsEnum]


* `upload` (value: `"upload"`)

* `detect` (value: `"detect"`)




<a name="SourceEnum"></a>
## Enum: SourceEnum


* `user` (value: `"user"`)

* `cloud` (value: `"cloud"`)

* `actionFromThreat` (value: `"action_from_threat"`)

* `catalog` (value: `"catalog"`)




<a name="OsTypeEnum"></a>
## Enum: OsTypeEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




