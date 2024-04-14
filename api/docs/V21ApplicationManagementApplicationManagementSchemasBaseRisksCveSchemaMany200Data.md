# S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasBaseRisksCveSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**osType** | **String** | OS type | [optional] 
**mitigationStatusChangedBy** | **String** | Mitigation status changer | [optional] 
**mitigationStatusChangeTime** | **Date** | Mitigation status change time | [optional] 
**nvdCvssVersion** | **String** | Available for VLN SKU | [optional] 
**lastScanResult** | **String** | Last scan result | [optional] 
**endpointName** | **String** | Endpoint name | [optional] 
**applicationVersion** | **String** | Application version | [optional] 
**severity** | **String** | Severity | [optional] 
**id** | **String** | Id | [optional] 
**mitigationStatusReason** | **String** | Mitigation status reason | [optional] 
**endpointId** | **String** | Endpoint id | [optional] 
**nvdBaseScore** | **String** | Available for VLN SKU | [optional] 
**daysDetected** | **Number** | Days detected | [optional] 
**publishedDate** | **Date** | Published date | [optional] 
**cvssVersion** | **String** | Cvss version | [optional] 
**status** | **String** | Risk status | [optional] 
**markedBy** | **String** | Marked by | [optional] 
**riskScore** | **String** | Available for VLN SKU | [optional] 
**markType** | **Object** | Mark type | [optional] 
**exploitCodeMaturity** | **String** | Available for VLN SKU | [optional] 
**applicationName** | **String** | Application name | [optional] 
**lastScanDate** | **Date** | Last scan date | [optional] 
**reason** | **String** | Reason | [optional] 
**reportConfidence** | **String** | Available for VLN SKU | [optional] 
**markedDate** | **Date** | Marked date | [optional] 
**cveId** | **String** | CVE Id | [optional] 
**application** | **String** | Composed application name | [optional] 
**baseScore** | **String** | Not available with VLN SKU | [optional] 
**detectionDate** | **Date** | Detection date | [optional] 
**mitigationStatus** | **String** | Risk mitigation status | [optional] 
**applicationVendor** | **String** | Application vendor | [optional] 
**remediationLevel** | **String** | Available for VLN SKU | [optional] 
**endpointType** | **String** | Endpoint type | [optional] 


<a name="OsTypeEnum"></a>
## Enum: OsTypeEnum


* `linux` (value: `"linux"`)

* `macos` (value: `"macos"`)

* `windows` (value: `"windows"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `detected` (value: `"Detected"`)

* `removed` (value: `"Removed"`)




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




<a name="MitigationStatusEnum"></a>
## Enum: MitigationStatusEnum


* `notMitigated` (value: `"Not mitigated"`)

* `toBePatched` (value: `"To be patched"`)

* `onHold` (value: `"On hold"`)




<a name="RemediationLevelEnum"></a>
## Enum: RemediationLevelEnum


* `notDefined` (value: `"Not Defined"`)

* `officialFix` (value: `"Official Fix"`)

* `temporaryFix` (value: `"Temporary Fix"`)

* `workaround` (value: `"Workaround"`)

* `unavailable` (value: `"Unavailable"`)




