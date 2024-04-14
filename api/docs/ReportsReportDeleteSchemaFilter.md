# S1MgmtApi.ReportsReportDeleteSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**toDate** | **Date** | To date | [optional] 
**createdAtGte** | **Date** | Created at gte | [optional] 
**scheduleType** | **String** | Report type | [optional] 
**id** | **String** | Id | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**name** | **String** | Name | [optional] 
**interval** | **String** | Interval | [optional] 
**ids** | **[String]** | Id in | [optional] 
**createdAtLte** | **Date** | Created at lte | [optional] 
**query** | **String** | Query | [optional] 
**frequency** | **String** | Frequency | [optional] 
**groupIds** | **[String]** | List of Group IDs to filter by | [optional] 
**fromDate** | **Date** | From date | [optional] 
**scope** | **String** | Scope | [optional] 


<a name="ScheduleTypeEnum"></a>
## Enum: ScheduleTypeEnum


* `manually` (value: `"manually"`)

* `scheduled` (value: `"scheduled"`)




<a name="FrequencyEnum"></a>
## Enum: FrequencyEnum


* `manually` (value: `"manually"`)

* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `group` (value: `"group"`)

* `site` (value: `"site"`)

* `account` (value: `"account"`)

* `tenant` (value: `"tenant"`)




