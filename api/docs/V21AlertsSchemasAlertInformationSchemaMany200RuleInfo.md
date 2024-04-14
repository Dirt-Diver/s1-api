# S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200RuleInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**severity** | **String** | Rule severity | [optional] 
**id** | **String** | Rule ID for the STAR alert | [optional] 
**s1ql** | **String** | The query | 
**scopeLevel** | **String** | Scope level | [optional] [default to 'account']
**treatAsThreat** | **String** | Rule treat as threat type | [optional] 
**queryLang** | **String** | Defines the s1ql version query language of the rule (1.0/2.0) | [optional] 
**description** | **String** | Rule description for the STAR alert | [optional] 
**queryType** | **String** | The query type | [optional] 
**name** | **String** | Rule name for the STAR alert | [optional] 


<a name="SeverityEnum"></a>
## Enum: SeverityEnum


* `low` (value: `"Low"`)

* `medium` (value: `"Medium"`)

* `high` (value: `"High"`)

* `critical` (value: `"Critical"`)




<a name="ScopeLevelEnum"></a>
## Enum: ScopeLevelEnum


* `group` (value: `"group"`)

* `site` (value: `"site"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)




<a name="TreatAsThreatEnum"></a>
## Enum: TreatAsThreatEnum


* `UNDEFINED` (value: `"UNDEFINED"`)

* `suspicious` (value: `"Suspicious"`)

* `malicious` (value: `"Malicious"`)




<a name="QueryLangEnum"></a>
## Enum: QueryLangEnum


* `_10` (value: `"1.0"`)

* `_20` (value: `"2.0"`)




<a name="QueryTypeEnum"></a>
## Enum: QueryTypeEnum


* `events` (value: `"events"`)

* `processes` (value: `"processes"`)

* `correlation` (value: `"correlation"`)




