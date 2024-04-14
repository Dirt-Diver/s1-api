# S1MgmtApi.ConfigOverridesCreateConfigOverrideSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description | [optional] 
**agentVersion** | **String** | Agent version | [optional] 
**account** | [**ConfigOverridesCreateConfigOverrideSchemaDataAccount**](ConfigOverridesCreateConfigOverrideSchemaDataAccount.md) |  | [optional] 
**versionOption** | **String** | Version option | [optional] [default to 'SPECIFIC']
**group** | [**ConfigOverridesCreateConfigOverrideSchemaDataGroup**](ConfigOverridesCreateConfigOverrideSchemaDataGroup.md) |  | [optional] 
**name** | **String** | Name | 
**scope** | **String** | Scope level | 
**osType** | **String** | OS type | 
**config** | **Object** | Config | 
**site** | [**ConfigOverridesCreateConfigOverrideSchemaDataSite**](ConfigOverridesCreateConfigOverrideSchemaDataSite.md) |  | [optional] 


<a name="VersionOptionEnum"></a>
## Enum: VersionOptionEnum


* `ALL` (value: `"ALL"`)

* `SPECIFIC` (value: `"SPECIFIC"`)




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `group` (value: `"group"`)

* `site` (value: `"site"`)

* `account` (value: `"account"`)

* `tenant` (value: `"tenant"`)




<a name="OsTypeEnum"></a>
## Enum: OsTypeEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




