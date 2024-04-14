# S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrichment** | [**V21RulesSchemasRuleViewSchemaMany200Enrichment**](V21RulesSchemasRuleViewSchemaMany200Enrichment.md) |  | [optional] 
**creator** | **String** | The full name of the user that created the rule. | [optional] 
**activeResponse** | **Boolean** | The Active Response status of the Rule. | [optional] 
**scope** | **String** | The scope of the rule. Can be Global, Account, Site, or Group. | [optional] 
**queryLang** | **String** | The s1ql version query language of the rule. Can be 1.0 or 2.0. | [optional] [default to '1.0']
**lastAlertTime** | **Date** | The time of the last alert for the Rule. | [optional] 
**name** | **String** | The name of the custom detection rule. | 
**creatorId** | **String** | The ID of the user that created the rule. | [optional] 
**siteName** | **String** | The name of the site. | [optional] 
**correlationParams** | [**V21RulesSchemasRuleViewSchemaMany200CorrelationParams**](V21RulesSchemasRuleViewSchemaMany200CorrelationParams.md) |  | [optional] 
**generatedAlerts** | **Number** | The number of alerts that have been generated for the Rule. | [optional] 
**description** | **String** | The description of the custom detection rule. | [optional] 
**editable** | **Boolean** | True if the rule can be modified at this scope level. | [optional] 
**expired** | **Boolean** | True if the Rule has expired. | [optional] 
**updaterId** | **String** | The ID of the user that last updated the rule. | [optional] 
**id** | **String** | Rule ID | [optional] 
**expiration** | **Date** | If Temporary, the expiration date for the rule. | [optional] 
**reachedLimit** | **Boolean** | True if the Rule reached the 5k/hour or 10k/day alert limit. If the limit has been reached, the Rule is disabled. | [optional] 
**siteId** | **String** | The site ID. | [optional] 
**treatAsThreat** | **String** | The Treat as threat auto response - UNDEFINED/suspicious/malicious | [optional] [default to 'undefined']
**expirationMode** | **String** | Whether the rule is Temporary or Permanent. | 
**status** | **String** | Enabled (Activated and sends alerts if triggered) or Disabled. | 
**networkQuarantine** | **Boolean** | True if the network quarantine is on. | [optional] 
**updatedAt** | **Date** | The date the rule was last updated. | [optional] 
**statusReason** | **String** | The reason why the Rule has its current status. | [optional] 
**severity** | **String** | The rule severity in your environment. | 
**accountId** | **String** | The account ID. | [optional] 
**createdAt** | **Date** | The date the rule was created. | [optional] 
**queryType** | **String** | The query type - Correlation (made of multiple subqueries), Event (single query), or Processes (Deprecated). | 
**s1ql** | **String** | The query. | [optional] 
**scopeId** | **[String]** | The Account, Site, or Group ID, depending on the scope. Null if the scope is Global. | [optional] 
**accountName** | **String** | The name of the account. | [optional] 


<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `account` (value: `"account"`)

* `site` (value: `"site"`)

* `group` (value: `"group"`)

* `global` (value: `"global"`)




<a name="QueryLangEnum"></a>
## Enum: QueryLangEnum


* `_10` (value: `"1.0"`)

* `_20` (value: `"2.0"`)




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




<a name="SeverityEnum"></a>
## Enum: SeverityEnum


* `low` (value: `"Low"`)

* `medium` (value: `"Medium"`)

* `high` (value: `"High"`)

* `critical` (value: `"Critical"`)




<a name="QueryTypeEnum"></a>
## Enum: QueryTypeEnum


* `events` (value: `"events"`)

* `processes` (value: `"processes"`)

* `correlation` (value: `"correlation"`)




