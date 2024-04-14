# S1MgmtApi.ThreatsSchemasDvMarkAsThreatSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Desired status to mark the events with | 
**initiatedBy** | **String** | Initiated by | [optional] [default to 'other']
**events** | [**[ThreatsSchemasDvMarkAsThreatSchemaDataEvents]**](ThreatsSchemasDvMarkAsThreatSchemaDataEvents.md) | List of DV events with their agents | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `threat` (value: `"threat"`)

* `suspicious` (value: `"suspicious"`)




<a name="InitiatedByEnum"></a>
## Enum: InitiatedByEnum


* `dvManual` (value: `"dvManual"`)

* `starActive` (value: `"starActive"`)

* `starManual` (value: `"starManual"`)

* `other` (value: `"other"`)

* `cloudDetection` (value: `"cloudDetection"`)

* `threatIntelligence` (value: `"threatIntelligence"`)

* `watchtowerCloudDetection` (value: `"watchtowerCloudDetection"`)




