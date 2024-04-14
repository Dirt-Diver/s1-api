# S1MgmtApi.V21RsoSchemasUpdateScriptData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputRequired** | **Boolean** | Is input required | 
**inputInstructions** | **String** | Input instructions | 
**scriptName** | **String** | Script name | 
**inputExample** | **String** | Input example | 
**scriptType** | **String** | Script type | 
**scriptDescription** | **String** | Script description | [optional] 
**packageEndpointExpirationSeconds** | **Number** | Package expiration time on endpoint | [optional] 
**scriptRuntimeTimeoutSeconds** | **Number** | Script runtime timeout in seconds | 
**osTypes** | **[String]** | Os types | 
**packageEndpointExpiration** | **String** | Package expiration option on endpoint | [optional] 


<a name="ScriptTypeEnum"></a>
## Enum: ScriptTypeEnum


* `artifactCollection` (value: `"artifactCollection"`)

* `dataCollection` (value: `"dataCollection"`)

* `action` (value: `"action"`)




<a name="[OsTypesEnum]"></a>
## Enum: [OsTypesEnum]


* `linux` (value: `"linux"`)

* `macos` (value: `"macos"`)

* `windows` (value: `"windows"`)




<a name="PackageEndpointExpirationEnum"></a>
## Enum: PackageEndpointExpirationEnum


* `none` (value: `"None"`)

* `immediate` (value: `"Immediate"`)

* `onRestart` (value: `"OnRestart"`)

* `time` (value: `"Time"`)




