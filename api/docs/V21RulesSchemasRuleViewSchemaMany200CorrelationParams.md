# S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subQueries** | [**[V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries]**](V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries.md) | The list of subqueries for the custom detection rule. | [optional] 
**timeWindow** | [**V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow**](V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow.md) |  | [optional] 
**matchInOrder** | **Boolean** | Set to True to require subqueries to match in sequence to trigger an alert. | 
**entity** | **String** | A common entity used to group matching events. | 


<a name="EntityEnum"></a>
## Enum: EntityEnum


* `user` (value: `"user"`)

* `process` (value: `"process"`)

* `ip` (value: `"ip"`)

* `none` (value: `"none"`)




