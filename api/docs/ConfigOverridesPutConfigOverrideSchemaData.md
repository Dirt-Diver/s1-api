# S1MgmtApi.ConfigOverridesPutConfigOverrideSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description | [optional] 
**agentVersion** | **String** | Agent version | [optional] 
**group** | [**ConfigOverridesConfigOverrideSchemaMany200Group**](ConfigOverridesConfigOverrideSchemaMany200Group.md) |  | [optional] 
**versionOption** | **String** | Version option | [optional] [default to 'SPECIFIC']
**account** | [**ConfigOverridesConfigOverrideSchemaMany200Account**](ConfigOverridesConfigOverrideSchemaMany200Account.md) |  | [optional] 
**name** | **String** | Name | [optional] 
**scope** | **String** | Scope level | [optional] 
**osType** | **String** | OS type | [optional] 
**config** | **Object** | Config | [optional] 
**site** | [**ConfigOverridesConfigOverrideSchemaMany200Site**](ConfigOverridesConfigOverrideSchemaMany200Site.md) |  | [optional] 


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




