# S1MgmtApi.FiltersFiltersDeepVisibilityFilterViewSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Id | 
**createdAt** | **Date** | Created at | 
**name** | **String** | Name | 
**recipients** | **[String]** | List of recipients | [optional] 
**scopeId** | **String** | Associated site/account | [optional] 
**siteId** | **String** | [DEPRECATED] Use scopeId instead | [optional] 
**updatedAt** | **Date** | Updated at | 
**scopeLevelName** | **String** | Filter scope name | [optional] 
**filterFields** | [**FiltersFiltersDeepVisibilityFilterViewSchema200DataFilterFields**](FiltersFiltersDeepVisibilityFilterViewSchema200DataFilterFields.md) |  | [optional] 
**scopeLevel** | **String** | Filter scope | 
**frequency** | **Number** | Frequency | [optional] 
**notifications** | **Boolean** | Notifications | [optional] 


<a name="ScopeLevelEnum"></a>
## Enum: ScopeLevelEnum


* `site` (value: `"site"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)

* `group` (value: `"group"`)

* `tenant` (value: `"tenant"`)




