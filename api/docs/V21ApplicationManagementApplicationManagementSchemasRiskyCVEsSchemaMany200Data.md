# S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasRiskyCVEsSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nvdBaseScore** | **String** | Nvd base score | [optional] 
**cveId** | **String** | Cve id | [optional] 
**publishedDate** | **Date** | Published date | [optional] 
**exploitedInTheWild** | **String** | Available with Ranger Insights | [optional] 
**cvssVersion** | **String** | Cvss version | [optional] 
**fpFnMarks** | [**[V21ApplicationManagementApplicationManagementSchemasRiskyCVEsSchemaMany200FpFnMarks]**](V21ApplicationManagementApplicationManagementSchemasRiskyCVEsSchemaMany200FpFnMarks.md) | Fp fn marks | [optional] 
**nvdUrl** | **Object** | Nvd url | [optional] 
**riskScore** | **String** | Available with Ranger Insights | [optional] 
**remediationLevel** | **String** | Available with Ranger Insights | [optional] 
**exploitCodeMaturity** | **String** | Available with Ranger Insights | [optional] 
**description** | **Object** | Description | [optional] 
**severity** | **Object** | Severity | [optional] 
**reportConfidence** | **String** | Available with Ranger Insights | [optional] 
**mitreUrl** | **Object** | Mitre url | [optional] 


<a name="ExploitedInTheWildEnum"></a>
## Enum: ExploitedInTheWildEnum


* `notDefined` (value: `"Not Defined"`)

* `unknown` (value: `"Unknown"`)

* `yes` (value: `"Yes"`)




<a name="RemediationLevelEnum"></a>
## Enum: RemediationLevelEnum


* `officialFix` (value: `"Official Fix"`)

* `temporaryFix` (value: `"Temporary Fix"`)

* `unavailable` (value: `"Unavailable"`)

* `notDefined` (value: `"Not Defined"`)

* `workaround` (value: `"Workaround"`)




<a name="ExploitCodeMaturityEnum"></a>
## Enum: ExploitCodeMaturityEnum


* `notDefined` (value: `"Not Defined"`)

* `functional` (value: `"Functional"`)

* `proofOfConcept` (value: `"Proof of Concept"`)

* `unproven` (value: `"Unproven"`)

* `high` (value: `"High"`)




<a name="ReportConfidenceEnum"></a>
## Enum: ReportConfidenceEnum


* `reasonable` (value: `"Reasonable"`)

* `notDefined` (value: `"Not Defined"`)

* `unknown` (value: `"Unknown"`)

* `confirmed` (value: `"Confirmed"`)




