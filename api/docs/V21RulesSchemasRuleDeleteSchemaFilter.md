# S1MgmtApi.V21RulesSchemasRuleDeleteSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[String]** | To filter by Rule ID, enter one or more Rule IDs, separated by commas. | [optional] 
**creatorContains** | **[String]** | Free-text filter by rule creator. You can enter multiple values, separated by commas. | [optional] 
**scopes** | **[String]** | To filter by scope, enter one or more scopes, separated by commas. | [optional] 
**expired** | **Boolean** | Rule expired or not. | [optional] 
**activeResponse** | **Boolean** | The active response status for the rule. | [optional] 
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**reachedLimit** | **Boolean** | Rule reached limit or not. | [optional] 
**expirationMode** | **String** | The expiration mode. | [optional] 
**groupIds** | **[String]** | List of Group IDs to filter by | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**queryType** | **String** | The query type. | [optional] 
**query** | **[String]** | Free-text filter by S1 query. You can enter multiple values, separated by commas. | [optional] 
**s1qlContains** | **[String]** | Free-text filter by S1 query. You can enter multiple values, separated by commas. | [optional] 
**descriptionContains** | **[String]** | Free-text filter by rule description. You can enter multiple values, separated by commas. | [optional] 
**status** | **[String]** | To filter by status, enter one or more statuses, separated by commas. | [optional] 
**nameContains** | **[String]** | Free-text filter by rule name. You can enter multiple values, separated by commas. | [optional] 


<a name="[ScopesEnum]"></a>
## Enum: [ScopesEnum]


* `account` (value: `"account"`)

* `site` (value: `"site"`)

* `group` (value: `"group"`)

* `global` (value: `"global"`)




<a name="ExpirationModeEnum"></a>
## Enum: ExpirationModeEnum


* `permanent` (value: `"Permanent"`)

* `temporary` (value: `"Temporary"`)




<a name="QueryTypeEnum"></a>
## Enum: QueryTypeEnum


* `events` (value: `"events"`)

* `processes` (value: `"processes"`)

* `correlation` (value: `"correlation"`)




<a name="[StatusEnum]"></a>
## Enum: [StatusEnum]


* `draft` (value: `"Draft"`)

* `activating` (value: `"Activating"`)

* `active` (value: `"Active"`)

* `disabling` (value: `"Disabling"`)

* `disabled` (value: `"Disabled"`)

* `deleted` (value: `"Deleted"`)

* `deleting` (value: `"Deleting"`)




