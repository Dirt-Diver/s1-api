# S1MgmtApi.UsersSchemasBulkUsersActionSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAtGt** | **Date** | User was created after this timestamp | [optional] 
**emailVerified** | **Boolean** | Return only verified/unverified users | [optional] 
**canGenerateApiToken** | **Boolean** | Can generate api token | [optional] 
**lastActivationBetween** | **String** | Date range for when the user was last active (format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**ids** | **[String]** | List of user IDs to filter by | [optional] 
**query** | **String** | Full text search for fields: full_name, email, description | [optional] 
**apiTokenExpiresAtLte** | **Date** | API token expires before or at this timestamp | [optional] 
**createdAtLt** | **Date** | User was created before this timestamp | [optional] 
**lastActivationLte** | **Date** | User was last active before or at this timestamp | [optional] 
**sources** | **[String]** | Source in | [optional] 
**primaryTwoFaMethod** | **String** | Primary two fa method | [optional] 
**lastLogin** | **Date** | Last login | [optional] 
**lastActivationLt** | **Date** | User was last active before this timestamp | [optional] 
**hasValidApiToken** | **Boolean** | Has valid api token | [optional] 
**source** | **String** | User Source | [optional] 
**createdAtLte** | **Date** | User was created before or at this timestamp | [optional] 
**dateJoined** | **Date** | Date joined | [optional] 
**roleIds** | **[String]** | List of rbac roles to filter by | [optional] 
**fullNameContains** | **[String]** | Match full name partially (substring) | [optional] 
**email** | **String** | Email | [optional] 
**apiTokenExpiresAtGt** | **Date** | API token expires after this timestamp | [optional] 
**twoFaStatuses** | **[String]** | Two fa status in | [optional] 
**fullNameReadOnly** | **Boolean** | True if full name cannot be changed | [optional] 
**twoFaStatus** | **String** | Two fa status | [optional] 
**apiTokenExpiresAtGte** | **Date** | API token expires after or at this timestamp | [optional] 
**fullName** | **String** | Full name | [optional] 
**groupsReadOnly** | **Boolean** | [DEPRECATED] True if permissions cannot be changed | [optional] 
**apiTokenExpiresAtBetween** | **String** | Date range for when the API token expires (format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**createdAtBetween** | **String** | Date range for when the user was created (format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**firstLogin** | **Date** | First login | [optional] 
**emailReadOnly** | **Boolean** | True if email cannot be changed | [optional] 
**createdAtGte** | **Date** | User was created after or at this timestamp | [optional] 
**lastActivationGt** | **Date** | User was last active after this timestamp | [optional] 
**apiTokenExpiresAtLt** | **Date** | API token expires before this timestamp | [optional] 
**emailContains** | **[String]** | Match email partially (substring) | [optional] 
**lastActivationGte** | **Date** | User was last active after or at this timestamp | [optional] 
**twoFaEnabled** | **Boolean** | Two fa enabled | [optional] 


<a name="[SourcesEnum]"></a>
## Enum: [SourcesEnum]


* `mgmt` (value: `"mgmt"`)

* `ssoSaml` (value: `"sso_saml"`)

* `activeDirectory` (value: `"active_directory"`)




<a name="SourceEnum"></a>
## Enum: SourceEnum


* `mgmt` (value: `"mgmt"`)

* `ssoSaml` (value: `"sso_saml"`)

* `activeDirectory` (value: `"active_directory"`)




