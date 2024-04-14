# S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasRisksByAggregatedApplicationsSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daysDetected** | **Object** | Days detected | [optional] 
**cveCount** | **Number** | Cve count | [optional] 
**endpointsWithoutTicket** | **Number** | Number of endpoints that are in an integrated scope, but don't have a ticket created. Available with Ranger Insights. | [optional] 
**detectionDate** | **Date** | Detection date | [optional] 
**statuses** | [**[V21ApplicationManagementApplicationManagementSchemasRisksByAggregatedApplicationsSchemaMany200Statuses]**](V21ApplicationManagementApplicationManagementSchemasRisksByAggregatedApplicationsSchemaMany200Statuses.md) | Statuses | [optional] 
**estimate** | **Boolean** | Estimate | [optional] 
**highestSeverity** | **String** | Highest severity | [optional] 
**name** | **String** | Name | [optional] 
**exploitedInTheWild** | **String** | Exploited in the wild | [optional] 
**applicationType** | **String** | Application type | [optional] 
**highestRiskScore** | **String** | Highest risk score | [optional] 
**vendor** | **String** | Vendor | [optional] 
**remediationLevel** | **String** | Remediation level | [optional] 
**versionCount** | **Number** | Version count | [optional] 
**exploitCodeMaturity** | **String** | Exploit code maturity | [optional] 
**highestNvdBaseScore** | **String** | Highest nvd base score | [optional] 
**endpointCount** | **Number** | Endpoint count | [optional] 


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




