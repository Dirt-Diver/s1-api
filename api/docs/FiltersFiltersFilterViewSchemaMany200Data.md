# S1MgmtApi.FiltersFiltersFilterViewSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Id | 
**createdAt** | **Date** | Created at | 
**name** | **String** | Name | 
**scopeId** | **String** | Associated site/account | [optional] 
**siteId** | **String** | [DEPRECATED] Use scopeId instead | [optional] 
**updatedAt** | **Date** | Updated at | 
**filterFields** | [**FiltersFiltersFilterViewSchemaMany200FilterFields**](FiltersFiltersFilterViewSchemaMany200FilterFields.md) |  | [optional] 
**scopeLevel** | **String** | Filter scope | 


<a name="ScopeLevelEnum"></a>
## Enum: ScopeLevelEnum


* `site` (value: `"site"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)




