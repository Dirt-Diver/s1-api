# S1MgmtApi.V21DataExporterSchemaPostDestinationProfileRequestSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Destination profile name | 
**scopeLevel** | **String** | Scope level to store the Destination profile | 
**scopeId** | **String** | Scope ID to store the Destination profile | 
**destination** | **String** | Destination profile type | 
**apiUrl** | **String** | URL of api instance to upload the events | 
**isDefault** | **Boolean** | Flag if the profile should be marked as default in it's scope | [optional] 
**apiKey** | **String** | Write key of api account to upload data | 


<a name="ScopeLevelEnum"></a>
## Enum: ScopeLevelEnum


* `tenant` (value: `"tenant"`)

* `account` (value: `"account"`)

* `site` (value: `"site"`)

* `group` (value: `"group"`)




<a name="DestinationEnum"></a>
## Enum: DestinationEnum


* `skylight` (value: `"skylight"`)




