# S1MgmtApi.V21RulesSchemasPostRuleSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**severity** | **String** | The rule severity in your environment. | 
**id** | **String** | Rule ID | [optional] 
**expiration** | **Date** | If the rule is Temporary, enter the expiration date for the rule. | [optional] 
**correlationParams** | [**V21RulesSchemasRuleViewSchemaMany200CorrelationParams**](V21RulesSchemasRuleViewSchemaMany200CorrelationParams.md) |  | [optional] 
**treatAsThreat** | **String** | Defines the Treat as a threat auto response. Undefined, Suspicious, or Malicious. | [optional] [default to 'undefined']
**expirationMode** | **String** | Defines the rule as Permanent or Temporary. | 
**status** | **String** | Defines the rule is Enabled (Activated and sends alerts if triggered) or Disabled. | 
**queryLang** | **String** | Defines the s1ql version query language of the rule - 1.0 or 2.0. | [optional] [default to '1.0']
**description** | **String** | A description of the custom detection rule. | [optional] 
**queryType** | **String** | Define the query type: Correlation (made of multiple subqueries), Event (single query), or Processes (Deprecated). | 
**s1ql** | **String** | The query | [optional] 
**networkQuarantine** | **Boolean** | Set to True to automatically quarantine the alerted endpoints. | [optional] [default to false]
**name** | **String** | The name of the custom detection rule. | 


<a name="SeverityEnum"></a>
## Enum: SeverityEnum


* `low` (value: `"Low"`)

* `medium` (value: `"Medium"`)

* `high` (value: `"High"`)

* `critical` (value: `"Critical"`)




<a name="TreatAsThreatEnum"></a>
## Enum: TreatAsThreatEnum


* `UNDEFINED` (value: `"UNDEFINED"`)

* `suspicious` (value: `"Suspicious"`)

* `malicious` (value: `"Malicious"`)




<a name="ExpirationModeEnum"></a>
## Enum: ExpirationModeEnum


* `permanent` (value: `"Permanent"`)

* `temporary` (value: `"Temporary"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `draft` (value: `"Draft"`)

* `activating` (value: `"Activating"`)

* `active` (value: `"Active"`)

* `disabling` (value: `"Disabling"`)

* `disabled` (value: `"Disabled"`)

* `deleted` (value: `"Deleted"`)

* `deleting` (value: `"Deleting"`)




<a name="QueryLangEnum"></a>
## Enum: QueryLangEnum


* `_10` (value: `"1.0"`)

* `_20` (value: `"2.0"`)




<a name="QueryTypeEnum"></a>
## Enum: QueryTypeEnum


* `events` (value: `"events"`)

* `processes` (value: `"processes"`)

* `correlation` (value: `"correlation"`)




