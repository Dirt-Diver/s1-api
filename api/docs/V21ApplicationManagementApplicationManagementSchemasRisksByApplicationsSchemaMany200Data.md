# S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasRisksByApplicationsSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **String** | Application id | [optional] 
**daysDetected** | **Object** | Days detected | [optional] 
**cveCount** | **Number** | Cve count | [optional] 
**endpointsWithoutTicket** | **Number** | Number of endpoints that are in an integrated scope, but don't have a ticket created. Available with Ranger Insights. | [optional] 
**detectionDate** | **Date** | Detection date | [optional] 
**statuses** | [**[V21ApplicationManagementApplicationManagementSchemasRisksByAggregatedApplicationsSchemaMany200Statuses]**](V21ApplicationManagementApplicationManagementSchemasRisksByAggregatedApplicationsSchemaMany200Statuses.md) | Statuses | [optional] 
**estimate** | **Boolean** | Estimate | [optional] 
**highestSeverity** | **String** | Highest severity | [optional] 
**name** | **String** | Name | [optional] 
**exploitedInTheWild** | **String** | Available with Ranger Insights. | [optional] 
**applicationType** | **String** | Available with Ranger Insights. | [optional] 
**highestRiskScore** | **String** | Available with Ranger Insights. | [optional] 
**vendor** | **String** | Vendor | [optional] 
**remediationLevel** | **String** | Available with Ranger Insights. | [optional] 
**exploitCodeMaturity** | **String** | Available with Ranger Insights. | [optional] 
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




