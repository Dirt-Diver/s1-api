# S1MgmtApi.UsersSchemasUpdateUserSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowRemoteShell** | **Boolean** | [DEPRECATED] Unused field. The user's role will determine if it is allowed to use remote_shell. | [optional] 
**scopeRoles** | [**[UsersSchemasCreateUserSchemaDataScopeRoles]**](UsersSchemasCreateUserSchemaDataScopeRoles.md) | List of id and role id, id is mandatory for user in scope account/site. Role name is deprecated and will work only for predefined roles, please use role id. User in tenant (global) role does not need to provide an id. | [optional] 
**id** | **String** | Id | [optional] 
**canGenerateApiToken** | **Boolean** | Can generate api token | [optional] 
**siteRoles** | [**[UsersSchemasCreateUserSchemaDataSiteRoles]**](UsersSchemasCreateUserSchemaDataSiteRoles.md) | [DEPRECATED] Please use scopeRoles instead. | [optional] 
**twoFaCode** | **String** | Two-Factor Authorization code | [optional] 
**fullName** | **String** | Full name of the user | [optional] 
**password** | **String** | User password | [optional] 
**tenantRoles** | **[String]** | [DEPRECATED] Use roles instead. List of tenant roles. | [optional] 
**twoFaEnabled** | **Boolean** | Two fa enabled | [optional] 
**currentPassword** | **String** | User password, new name for backward compatibility | [optional] 
**email** | **String** | [DEPRECATED] The email of the user | [optional] 
**scope** | **String** | User scope | 


<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `tenant` (value: `"tenant"`)

* `account` (value: `"account"`)

* `site` (value: `"site"`)




