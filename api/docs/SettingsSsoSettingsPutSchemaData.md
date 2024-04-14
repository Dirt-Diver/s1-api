# S1MgmtApi.SettingsSsoSettingsPutSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultUserRole** | **String** | The name of the default role for a new user who logs in with SSO. Sending it without default_user_role_id will search only in global scope | [optional] 
**ssoElevatedSessionReauthType** | **String** | Type of re-authentication used for session elevation. | [optional] [default to 'null']
**autoProvisioning** | **Boolean** | True if the user should be auto provisioned | [optional] 
**idpCertContent** | **String** | Identity provider's certificate file content (Base64 encoded string) | [optional] 
**domains** | **[String]** | A list of domain names associated with the scope | [optional] 
**idpEntityId** | **String** | Identity provider's Entity ID (a.k.a. Issuer) | [optional] 
**idpSsoUrl** | **String** | The SSO URL of the Identity Provider (Login URL) | [optional] 
**signRequest** | **Boolean** | Indicates if SAML Request Signing is enabled | [optional] [default to false]
**enabled** | **Boolean** | If True, other arguments must also be supplied, if False, other arguments stay untouched in the DB | 
**defaultUserRoleId** | **String** | The role name of the default role for a new user logging in via SSO for the first time | [optional] 
**ssoPropagateDomainsToChildren** | **Boolean** | True if the domains should be propagated to children scopes | [optional] [default to false]
**ssoInheritDomainsFrom** | **[String]** | Scope(s) to inherit domains from | [optional] 
**idpCertName** | **String** | Identity provider's certificate file name (If not provided, cert name and content will stay untouched in the DB) | [optional] [default to 'null']


<a name="SsoElevatedSessionReauthTypeEnum"></a>
## Enum: SsoElevatedSessionReauthTypeEnum


* `totp` (value: `"totp"`)

* `idp` (value: `"idp"`)




<a name="[SsoInheritDomainsFromEnum]"></a>
## Enum: [SsoInheritDomainsFromEnum]


* `group` (value: `"group"`)

* `site` (value: `"site"`)

* `account` (value: `"account"`)

* `tenant` (value: `"tenant"`)




