# S1MgmtApi.ConfigOverridesConfigOverrideDeleteSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAtGt** | **Date** | Config Overrides created after this timestamp | [optional] 
**osTypes** | **[String]** | Included OS types | [optional] 
**agentIds** | **[String]** | List of Agent IDs to filter by | [optional] 
**createdAtGte** | **Date** | Config Overrides created after or at this timestamp | [optional] 
**descriptionLike** | **String** | Match description partially (substring) | [optional] 
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**agentVersions** | **[String]** | Included agent versions | [optional] 
**versionOption** | **String** | Version option | [optional] 
**nameLike** | **String** | Match name partially (substring) | [optional] 
**query** | **String** | Free text search on fields name, description, agent_version, os_type, config | [optional] 
**tenant** | **Boolean** | Indicates a tenant scope request | [optional] 
**createdAtLte** | **Date** | Config Overrides created before or at this timestamp | [optional] 
**ids** | **[String]** | List of ids to filter by | [optional] 
**createdAtBetween** | **String** | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**groupIds** | **[String]** | List of Group IDs to filter by | [optional] 
**createdAtLt** | **Date** | Config Overrides created before this timestamp | [optional] 


<a name="[OsTypesEnum]"></a>
## Enum: [OsTypesEnum]


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="VersionOptionEnum"></a>
## Enum: VersionOptionEnum


* `ALL` (value: `"ALL"`)

* `SPECIFIC` (value: `"SPECIFIC"`)




