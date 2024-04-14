# S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasRiskDetailSchema200DataRiskScore

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nvdBaseScore** | **String** | Nvd base score | [optional] 
**isExploitedInTheWild** | **Boolean** | Exploited in the wild | [optional] 
**baseScore** | **String** | Base score | [optional] 
**riskScore** | **String** | Risk score | [optional] 
**remediationLevel** | **String** | Remediation level | [optional] 
**temporalScore** | **String** | Temporal score | [optional] 
**order** | **Number** | Order | [optional] 
**exploitCodeMaturity** | **String** | Exploit code maturity | [optional] 
**severity** | **String** | Severity | [optional] 
**reportConfidence** | **String** | Report confidence | [optional] 
**type** | **String** | Type | [optional] 
**attackVectors** | [**V21ApplicationManagementApplicationManagementSchemasRiskDetailSchema200DataRiskScoreAttackVectors**](V21ApplicationManagementApplicationManagementSchemasRiskDetailSchema200DataRiskScoreAttackVectors.md) |  | [optional] 


<a name="RemediationLevelEnum"></a>
## Enum: RemediationLevelEnum


* `notDefined` (value: `"Not Defined"`)

* `officialFix` (value: `"Official Fix"`)

* `temporaryFix` (value: `"Temporary Fix"`)

* `workaround` (value: `"Workaround"`)

* `unavailable` (value: `"Unavailable"`)




<a name="ExploitCodeMaturityEnum"></a>
## Enum: ExploitCodeMaturityEnum


* `notDefined` (value: `"Not Defined"`)

* `unproven` (value: `"Unproven"`)

* `proofOfConcept` (value: `"Proof of Concept"`)

* `functional` (value: `"Functional"`)

* `high` (value: `"High"`)




<a name="ReportConfidenceEnum"></a>
## Enum: ReportConfidenceEnum


* `notDefined` (value: `"Not Defined"`)

* `unknown` (value: `"Unknown"`)

* `reasonable` (value: `"Reasonable"`)

* `confirmed` (value: `"Confirmed"`)




