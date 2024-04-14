# S1MgmtApi.SettingsSsoSettingFields200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultUserRole** | **String** | The role name of the default role for a new user logging in via SSO for the first time | [optional] 
**ssoElevatedSessionReauthType** | **String** | Type of re-authentication used for session elevation. | [optional] 
**autoProvisioning** | **Boolean** | True if the user should be auto provisioned | [optional] 
**ssoElevatedSessionReauthTypeEnabled** | **Boolean** | Marks whether re-auth type choice should be available in SSO settings | [optional] 
**spEntityId** | **String** | Identifier the Management console creates to dialogue with the SSO provider. | [optional] 
**domains** | **[String]** | A list of domain names associated with the scope | [optional] 
**idpEntityId** | **String** | Identity provider's Entity ID (a.k.a. Issuer) | [optional] 
**idpSsoUrl** | **String** | The SSO URL of the Identity Provider (Login URL) | [optional] 
**ssoInheritableDomains** | **Object** | A dictionary of inheritable domains | [optional] 
**enabled** | **Boolean** | Indicates if SSO is enabled | [optional] 
**signRequest** | **Boolean** | Indicates if SAML Request Signing is enabled | [optional] 
**defaultUserRoleId** | **String** | The role name of the default role for a new user logging in via SSO for the first time | [optional] 
**spAcsUrl** | **String** | Management console Assertion Consumer Service (ACS) URL. This is were IDP should send the authentication request | [optional] 
**ssoPropagateDomainsToChildren** | **Boolean** | True if the domains should be propagated to children scopes | [optional] 
**ssoInheritDomainsFrom** | **[String]** | Scope(s) to inherit domains from | [optional] 
**idpCertName** | **String** | Identity provider's certificate file name (If not provided, cert name and content will stay untouched in the DB) | [optional] 


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




