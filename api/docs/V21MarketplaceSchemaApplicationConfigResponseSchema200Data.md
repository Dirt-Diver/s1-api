# S1MgmtApi.V21MarketplaceSchemaApplicationConfigResponseSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | Account ID of the scope the application was installed for | [optional] 
**id** | **String** | Application ID | [optional] 
**lastEntityCreatedAt** | **String** | Date of the last entity processed by the application | [optional] 
**fields** | [**[V21MarketplaceSchemaApplicationCatalogConfigResponseSchema200DataFields]**](V21MarketplaceSchemaApplicationCatalogConfigResponseSchema200DataFields.md) | Fields | [optional] 
**alertMessage** | **String** | Application's alert message, in case of an alert | [optional] 
**scopeLevel** | **String** | Scope the application was installed for | [optional] 
**creatorId** | **String** | The ID of the user who installed the application | [optional] 
**siteId** | **String** | Site ID of the scope the application was installed for | [optional] 
**desiredStatus** | **String** | Desired status | 
**scopeId** | **String** | Scope ID of the scope the application was installed for | [optional] 
**creator** | **String** | Application's creator name | [optional] 
**site** | **String** | Application's scope site name | [optional] 
**modifier** | **String** | Application's last modifier name | [optional] 
**status** | **String** | Status | 
**groupId** | **String** | Group ID of the scope the application was installed for | [optional] 
**group** | **String** | Application's scope group name | [optional] 
**modifierId** | **String** | The ID of the user who modified last the application | [optional] 
**hasAlert** | **Boolean** | True if the application has any issues | [optional] 
**account** | **String** | Application's scope account name | [optional] 
**retryUntil** | **Date** | In case the application receives errors, the field will be populated with the last date and time the application can retry | [optional] 
**createdAt** | **String** | Date application was installed | [optional] 
**updatedAt** | **String** | Date of last update | [optional] 


<a name="ScopeLevelEnum"></a>
## Enum: ScopeLevelEnum


* `global` (value: `"global"`)

* `account` (value: `"account"`)

* `group` (value: `"group"`)

* `site` (value: `"site"`)




<a name="DesiredStatusEnum"></a>
## Enum: DesiredStatusEnum


* `draft` (value: `"draft"`)

* `draft_2` (value: `"Draft"`)

* `active` (value: `"active"`)

* `active_2` (value: `"Active"`)

* `disabled` (value: `"disabled"`)

* `disabled_2` (value: `"Disabled"`)

* `deleted` (value: `"deleted"`)

* `deleted_2` (value: `"Deleted"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `active` (value: `"active"`)

* `active_2` (value: `"Active"`)

* `activating` (value: `"activating"`)

* `activating_2` (value: `"Activating"`)

* `disabled` (value: `"disabled"`)

* `disabled_2` (value: `"Disabled"`)

* `disabling` (value: `"disabling"`)

* `disabling_2` (value: `"Disabling"`)

* `deleting` (value: `"deleting"`)

* `deleting_2` (value: `"Deleting"`)

* `deleted` (value: `"deleted"`)

* `deleted_2` (value: `"Deleted"`)

* `error` (value: `"error"`)

* `error_2` (value: `"Error"`)




