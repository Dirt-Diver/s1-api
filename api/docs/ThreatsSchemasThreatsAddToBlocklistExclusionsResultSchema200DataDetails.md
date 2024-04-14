# S1MgmtApi.ThreatsSchemasThreatsAddToBlocklistExclusionsResultSchema200DataDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analystVerdict** | **String** | Result of changing the threat's analyst verdict as part of adding the threat to blocklist or exclusions | [optional] 
**result** | **String** | Result of adding the threat to blocklist or exclusions | [optional] 
**threatId** | **String** | Threat id | [optional] 


<a name="AnalystVerdictEnum"></a>
## Enum: AnalystVerdictEnum


* `updated` (value: `"updated"`)

* `notChanged` (value: `"not_changed"`)

* `alreadySet` (value: `"already_set"`)

* `conditionsNotMet` (value: `"conditions_not_met"`)

* `missingPermissions` (value: `"missing_permissions"`)




<a name="ResultEnum"></a>
## Enum: ResultEnum


* `created` (value: `"created"`)

* `alreadyExists` (value: `"already_exists"`)

* `threatHasNoHash` (value: `"threat_has_no_hash"`)

* `unknownFailure` (value: `"unknown_failure"`)

* `emptyValue` (value: `"empty_value"`)




