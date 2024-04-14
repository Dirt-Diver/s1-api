# S1MgmtApi.ThreatAnalysisSchemasTimelineViewSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupId** | **String** | Related group (If applicable) | [optional] 
**id** | **String** | Activity ID | [optional] 
**createdAt** | **Date** | Activity creation time (UTC) | [optional] 
**secondaryDescription** | **String** | Secondary description | [optional] 
**agentUpdatedVersion** | **String** | Agent's new version (If applicable) | [optional] 
**osFamily** | **String** | Agent's OS type (if applicable) | [optional] 
**accountId** | **String** | Related account (If applicable) | [optional] 
**updatedAt** | **Date** | Activity last updated time (UTC) | [optional] 
**hash** | **String** | Threat file hash (If applicable) | [optional] 
**activityType** | **Number** | Activity type | [optional] 
**threatId** | **String** | Related threat (If applicable) | [optional] 
**siteId** | **String** | Related site (If applicable) | [optional] 
**userId** | **String** | The user who invoked the activity (If applicable) | [optional] 
**primaryDescription** | **String** | Primary description | [optional] 
**agentId** | **String** | Related Agent (If applicable) | [optional] 
**data** | **Object** | Extra activity specific data | [optional] 


<a name="OsFamilyEnum"></a>
## Enum: OsFamilyEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




