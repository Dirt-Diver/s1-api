# S1MgmtApi.ServiceUsersSchemasUpdateServiceUserSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description | [optional] 
**scopeRoles** | [**[UsersSchemasCreateUserSchemaDataScopeRoles]**](UsersSchemasCreateUserSchemaDataScopeRoles.md) | List of id and role id, id is mandatory for user in scope account/site. User in tenant (global) role does not need to provide an id. | [optional] 
**scope** | **String** | User scope | [optional] 


<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `tenant` (value: `"tenant"`)

* `account` (value: `"account"`)

* `site` (value: `"site"`)




