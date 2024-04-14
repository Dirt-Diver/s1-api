# S1MgmtApi.UsersSchemasGetUserListSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emailVerified** | **Boolean** | True if user verification completed successfully | [optional] 
**canGenerateApiToken** | **Boolean** | Can generate api token | [optional] 
**apiToken** | [**UsersSchemasUserSchema200DataApiToken**](UsersSchemasUserSchema200DataApiToken.md) |  | [optional] 
**isSystem** | **Boolean** |  | [optional] 
**scopeRoles** | [**[UsersSchemasUserSchema200DataScopeRoles]**](UsersSchemasUserSchema200DataScopeRoles.md) | Roles of the scope user | [optional] 
**primaryTwoFaMethod** | **String** | Primary two fa method | [optional] 
**id** | **String** | Id | [optional] 
**lastLogin** | **Date** | Last login | [optional] 
**twoFaEnabledReadOnly** | **Boolean** | True if two fa option cannot be modified | [optional] 
**siteRoles** | [**[UsersSchemasUserSchema200DataSiteRoles]**](UsersSchemasUserSchema200DataSiteRoles.md) | [DEPRECATED] Role and site ids for the user. Using scopeRoles is more consistent. | [optional] 
**source** | **String** | Source | [optional] 
**dateJoined** | **Date** | Date joined | [optional] 
**email** | **String** | Email | [optional] [default to 'null']
**allowRemoteShell** | **Boolean** | [DEPRECATED] Unused field. The user's role will determine if it is allowed to use remote_shell. | [optional] 
**fullNameReadOnly** | **Boolean** | True if full name cannot be modified | [optional] 
**twoFaStatus** | **String** | State of 2FA setup | [optional] 
**twoFaConfigured** | **Boolean** | User 2FA Auth is configured | [optional] 
**fullName** | **String** | Full name | [optional] [default to 'null']
**groupsReadOnly** | **Boolean** | [Deprecated] | [optional] 
**agreedEula** | **Boolean** | True if EULA was agreed for user's sites | [optional] 
**tenantRoles** | **[Object]** | [DEPRECATED] Role ids for the tenant user. Using scopeRoles is more consistent. | [optional] 
**firstLogin** | **Date** | First login | [optional] 
**scope** | **String** | User Scope | 
**emailReadOnly** | **Boolean** | True if email cannot be modified | [optional] 
**agreementUrl** | **String** | Link to EULA agreement if it was not agreed yet | [optional] 
**lowestRole** | **String** | [DEPRECATED] in RBAC there's no 'lowest' role. Returns Admin if user has admin permission on all sites, otherwise a different role. | [optional] 
**twoFaEnabled** | **Boolean** | Two fa enabled | [optional] 


<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `tenant` (value: `"tenant"`)

* `account` (value: `"account"`)

* `site` (value: `"site"`)




