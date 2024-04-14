# S1MgmtApi.ExclusionsSchemasRestrictionSchemaGetMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description | [optional] 
**id** | **String** | Id | [optional] 
**createdAt** | **Date** | Timestamp of item creation | [optional] 
**includeParents** | **Boolean** | Return filters from parent scope levels (Default: false) | [optional] [default to false]
**osType** | **String** | os_type | [optional] 
**scopeName** | **String** | Scope name | [optional] 
**includeChildren** | **Boolean** | Return filters from children scope levels (Default: false) | [optional] [default to false]
**updatedAt** | **Date** | Timestamp of item update | [optional] 
**type** | **String** | type | [optional] 
**source** | **String** | Source: cloud, user, or action_from_threat | [optional] 
**imported** | **Boolean** | indication whether the exclusion was imported by a bulk operation or not | [optional] 
**scopePath** | **String** | Scope path | [optional] 
**userId** | **String** | ID of the creating user | [optional] 
**value** | **String** | SHA1 hash | [optional] 
**userName** | **String** | Name of the creating user | [optional] 
**notRecommended** | **String** | Not recommended | [optional] 
**scope** | [**ExclusionsSchemasExclusionSchemaGetMany200Scope**](ExclusionsSchemasExclusionSchemaGetMany200Scope.md) |  | [optional] 


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




