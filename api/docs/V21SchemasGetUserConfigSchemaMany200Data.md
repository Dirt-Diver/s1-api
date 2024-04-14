# S1MgmtApi.V21SchemasGetUserConfigSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scopeId** | **String** | The group/site/account id depending on the scope_level. | [optional] 
**updatedAt** | **Date** | The time at which the user config was last updated in SentinelOne DB | 
**createdAt** | **Date** | The time at which the user config was created in SentinelOne DB | 
**scopeLevel** | **String** | Scope level of the user config | [optional] 
**description** | **String** | User defined description of the user config. | [optional] 
**disableThreat** | **Boolean** | The flag to disable Threat Intelligence Indicator based Threat creation for the entire account. | [optional] 
**excludeTii** | **[String]** | Exclude tii | [optional] 


<a name="ScopeLevelEnum"></a>
## Enum: ScopeLevelEnum


* `site` (value: `"site"`)

* `group` (value: `"group"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)




