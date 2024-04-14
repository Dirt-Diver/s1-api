# S1MgmtApi.V21ForensicsSchemaCollectionProfileResultSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isBundled** | **Boolean** | Flag indicating if the Collection profile is bundled (provided by S1) | 
**scopeLevel** | **String** | Scope level where the Collection profile is stored | 
**artifacts** | [**[V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts]**](V21ForensicsSchemaCollectionProfileResultSchema200DataArtifacts.md) | Artifacts | [optional] 
**osTypes** | **[String]** | Os types | 
**scopePath** | **String** | Full path of Scope where the Collection profile is stored | 
**createdAt** | **Date** | Timestamp when the profile was created | 
**id** | **String** | Collection profile ID | 
**name** | **String** | name of collection profile in db | 
**scopeName** | **String** | Scope name where the Collection profile is stored | 
**description** | **String** | Collection profile description | 
**creator** | **String** | Email of user who created the profile | 
**version** | **String** | Collection profile version | 
**scopeId** | **String** | Scope ID where the Collection profile is stored | 
**updatedAt** | **Date** | Timestamp when the profile was updated | [optional] 
**type** | **String** | Type of RemoteOps Action (forensicsProfile) | 
**updater** | **String** | Email of user who update the profile | 


<a name="ScopeLevelEnum"></a>
## Enum: ScopeLevelEnum


* `tenant` (value: `"tenant"`)

* `account` (value: `"account"`)

* `site` (value: `"site"`)

* `group` (value: `"group"`)

* `sentinel` (value: `"sentinel"`)




<a name="[OsTypesEnum]"></a>
## Enum: [OsTypesEnum]


* `linux` (value: `"linux"`)

* `macos` (value: `"macos"`)

* `windows` (value: `"windows"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `forensicsProfile` (value: `"forensicsProfile"`)




