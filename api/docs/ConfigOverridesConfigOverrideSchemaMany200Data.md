# S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description | 
**agentVersion** | **String** | Agent version | [optional] 
**group** | [**ConfigOverridesConfigOverrideSchemaMany200Group**](ConfigOverridesConfigOverrideSchemaMany200Group.md) |  | [optional] 
**versionOption** | **String** | Version option | [optional] 
**account** | [**ConfigOverridesConfigOverrideSchemaMany200Account**](ConfigOverridesConfigOverrideSchemaMany200Account.md) |  | [optional] 
**name** | **String** | Name | 
**id** | **String** | Id | [optional] 
**scope** | **String** | Scope level | [optional] 
**agent** | [**ConfigOverridesConfigOverrideSchemaMany200Agent**](ConfigOverridesConfigOverrideSchemaMany200Agent.md) |  | [optional] 
**osType** | **String** | OS type | [optional] 
**config** | **Object** | Config | 
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




