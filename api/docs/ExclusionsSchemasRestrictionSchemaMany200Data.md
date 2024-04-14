# S1MgmtApi.ExclusionsSchemasRestrictionSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description | [optional] 
**id** | **String** | Id | [optional] 
**createdAt** | **Date** | Timestamp of blocklist item creation | [optional] 
**osType** | **String** | OS type | [optional] 
**scopeName** | **String** | Scope name | [optional] 
**updatedAt** | **Date** | Timestamp of blocklist item update | [optional] 
**type** | **String** | Type | [optional] 
**source** | **String** | Source: cloud, user, or action_from_threat | [optional] 
**value** | **String** | SHA1 hash | [optional] 
**userId** | **String** | ID of the creating user | [optional] 
**userName** | **String** | Name of the creating user | [optional] 
**notRecommended** | **String** | Not recommended | [optional] 
**scope** | [**ExclusionsSchemasExclusionSchemaGetMany200Scope**](ExclusionsSchemasExclusionSchemaGetMany200Scope.md) |  | 


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




