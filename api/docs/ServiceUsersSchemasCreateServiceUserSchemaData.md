# S1MgmtApi.ServiceUsersSchemasCreateServiceUserSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description | [optional] 
**scopeRoles** | [**[UsersSchemasCreateUserSchemaDataScopeRoles]**](UsersSchemasCreateUserSchemaDataScopeRoles.md) | List of id and role id, id is mandatory for user in scope account/site. User in tenant (global) role does not need to provide an id. | [optional] 
**expirationDate** | **Date** | Date when the generated token expires | 
**name** | **String** | Name of the service user | 
**forceLegacy** | **Boolean** | Temporary attribute for WA: If the flag is set to True the legacy token will be generated even if the auth_tokens global switch is turned on | [optional] 
**scope** | **String** | User scope | 


<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `tenant` (value: `"tenant"`)

* `account` (value: `"account"`)

* `site` (value: `"site"`)




