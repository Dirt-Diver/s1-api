# S1MgmtApi.ReportsReportTasksPostSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduleType** | **String** | Schedule type | 
**name** | **String** | Name of the report | 
**recipients** | **[String]** | List of recipients for the report | [optional] 
**day** | **String** | Day of the week for Weekly report. | [optional] 
**insightTypes** | **[Object]** | List of reports. | 
**frequency** | **String** | Report Period | [optional] 
**attachmentTypes** | **[String]** | Type of attachments for the report. Must be supplied if recipients are added | [optional] 
**fromDate** | **Date** | From date | [optional] 
**toDate** | **Date** | To date | [optional] 
**isTrend** | **Boolean** | If is trend is true then the period will be last month | [optional] 


<a name="ScheduleTypeEnum"></a>
## Enum: ScheduleTypeEnum


* `manually` (value: `"manually"`)

* `scheduled` (value: `"scheduled"`)




<a name="DayEnum"></a>
## Enum: DayEnum


* `sunday` (value: `"sunday"`)

* `monday` (value: `"monday"`)

* `tuesday` (value: `"tuesday"`)

* `wednesday` (value: `"wednesday"`)

* `thursday` (value: `"thursday"`)

* `friday` (value: `"friday"`)

* `saturday` (value: `"saturday"`)




<a name="FrequencyEnum"></a>
## Enum: FrequencyEnum


* `manually` (value: `"manually"`)

* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)




