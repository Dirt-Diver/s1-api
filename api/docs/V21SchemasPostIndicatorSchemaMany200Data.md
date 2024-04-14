# S1MgmtApi.V21SchemasPostIndicatorSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scopeId** | **String** | The group/site/account id depending on the scope. null if it is global. | [optional] 
**mitreTactic** | **[String]** | Mitre tactic | [optional] 
**originalRiskScore** | **Number** | The relative level of risk associated with the Threat Intelligence indicator. An integer between 0 and 100, inclusive. | [optional] 
**labels** | **[String]** | Labels | [optional] 
**intrusionSets** | **[String]** | Intrusion sets | [optional] 
**validUntil** | **Date** | The date from which the indicator will no longer be monitored | [optional] 
**description** | **String** | Description of the Threat Intelligence indicator | [optional] 
**campaignNames** | **[String]** | Campaign names | [optional] 
**source** | **String** | The source of the identified Threat Intelligence indicator | 
**uuid** | **String** | Unique Id of the Threat Intelligence indicator | [optional] 
**creationTime** | **Date** | The time at which the Threat Intelligence indicator was originally created (as indicated by the TI source) | [optional] 
**reference** | **[String]** | Reference | [optional] 
**category** | **[String]** | Category | [optional] 
**threatActors** | **[String]** | Threat actors | [optional] 
**updatedAt** | **Date** | The time at which the indicator was last updated in SentinelOne DB | [optional] 
**metadata** | **String** | The metadata of the Threat Intelligence indicator | [optional] 
**type** | **String** | The type of the Threat Intelligence indicator | 
**method** | **String** | The comparison method used by SentinelOne to trigger the event | [optional] 
**name** | **String** | Threat Intelligence indicator name | [optional] 
**patternType** | **String** | Characterize the pattern language that the indicator pattern is expressed in | [optional] 
**batchId** | **String** | Unique ID of the uploaded Threat Intelligence indicators batch | [optional] 
**scope** | **String** | Scope of the ioc | [optional] 
**externalId** | **String** | The unique identifier of the indicator as provided by the Threat Intelligence source | [optional] 
**threatActorTypes** | **[String]** | Threat actor types | [optional] 
**pattern** | **String** | The detection pattern for this Indicator (expressed as a STIX Pattern, e.g. Comparison expression/Boolean Operators etc.) | [optional] 
**creator** | **String** | The user that uploaded the Threat Intelligence indicator | [optional] 
**value** | **String** | The value of the Threat Intelligence indicator | 
**malwareNames** | **[String]** | Malware names | [optional] 
**severity** | **Number** | The potential impact of the Threat Intelligence indicator. Designed to work based on OCSF format for scores 0-7. | [optional] 
**uploadTime** | **Date** | The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB | [optional] 


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




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `site` (value: `"site"`)

* `group` (value: `"group"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)




