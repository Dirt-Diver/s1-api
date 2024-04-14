# S1MgmtApi.V21SchemasPostThreatIntelligenceSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mitreTactic** | **[String]** | Mitre tactic | [optional] 
**originalRiskScore** | **Number** | The relative level of risk associated with the Threat Intelligence indicator. An integer between 0 and 100, inclusive. | [optional] 
**labels** | **[String]** | Labels | [optional] 
**intrusionSets** | **[String]** | Intrusion sets | [optional] 
**validUntil** | **Date** | Expiration date for the Threat Intelligence indicator | [optional] 
**description** | **String** | Description of the Threat Intelligence indicator | [optional] 
**campaignNames** | **[String]** | Campaign names | [optional] 
**source** | **String** | The source of the identified Threat Intelligence indicator | 
**reference** | **[String]** | Reference | [optional] 
**creationTime** | **Date** | The time at which the Threat Intelligence indicator was originally created (as indicated by the TI source) | [optional] 
**category** | **[String]** | Category | [optional] 
**threatActors** | **[String]** | Threat actors | [optional] 
**metadata** | **String** | The metadata of the Threat Intelligence indicator | [optional] [default to '']
**type** | **String** | The type of the Threat Intelligence indicator | 
**method** | **String** | The comparison method used by SentinelOne to trigger the event | [optional] [default to 'EQUALS']
**name** | **String** | Threat Intelligence indicator name | [optional] 
**patternType** | **Object** | Characterize the pattern language that the Threat Intelligence indicator pattern is expressed in | [optional] 
**externalId** | **String** | The unique identifier of the indicator as provided by the Threat Intelligence source | [optional] 
**threatActorTypes** | **[String]** | Threat actor types | [optional] 
**pattern** | **String** | The detection pattern for this Threat Intelligence indicator (expressed as a STIX Pattern, e.g. Comparison expression/Boolean Operators etc.) | [optional] 
**creator** | **String** | The user that uploaded the Threat Intelligence indicator | [optional] 
**value** | **String** | The value of the Threat Intelligence indicator | 
**malwareNames** | **[String]** | Malware names | [optional] 
**severity** | **Number** | The potential impact of the Threat Intelligence indicator. Designed to work based on OCSF format for scores 0-7. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `DNS` (value: `"DNS"`)

* `iPV4` (value: `"IPV4"`)

* `iPV6` (value: `"IPV6"`)

* `mD5` (value: `"MD5"`)

* `sHA1` (value: `"SHA1"`)

* `sHA256` (value: `"SHA256"`)

* `URL` (value: `"URL"`)




<a name="MethodEnum"></a>
## Enum: MethodEnum


* `EQUALS` (value: `"EQUALS"`)




<a name="[ThreatActorTypesEnum]"></a>
## Enum: [ThreatActorTypesEnum]


* `nationState` (value: `"Nation-state"`)

* `criminal` (value: `"Criminal"`)

* `hacktivist` (value: `"Hacktivist"`)

* `insider` (value: `"Insider"`)

* `APT` (value: `"APT"`)

* `scriptKiddies` (value: `"Script kiddies"`)




