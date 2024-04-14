# S1MgmtApi.ReportsReportTaskDataSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachmentTypes** | **[String]** | Type of documents for the report | [optional] 
**toDate** | **Date** | To date | [optional] 
**scheduleType** | **String** | Report type | [optional] 
**name** | **String** | Name | [optional] 
**id** | **String** | Id | [optional] 
**recipients** | **[String]** | Recipients | [optional] 
**day** | **Object** | Day | [optional] 
**creatorId** | **String** | Creator id | [optional] 
**sites** | **String** | Sites associated to the report | [optional] 
**insightTypes** | **[Object]** | Insight types | [optional] 
**frequency** | **String** | Frequency | [optional] 
**creatorName** | **String** | Creator name | [optional] 
**fromDate** | **Date** | From date | [optional] 
**scope** | **String** | Scope | [optional] 
**isTrend** | **Boolean** | Is trend | [optional] 


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


* `site` (value: `"site"`)

* `group` (value: `"group"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)




