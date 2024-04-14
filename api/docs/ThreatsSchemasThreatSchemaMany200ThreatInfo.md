# S1MgmtApi.ThreatsSchemasThreatSchemaMany200ThreatInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mitigationStatus** | **String** | Mitigation status | [optional] 
**fileExtensionType** | **String** | File extension type | [optional] 
**confidenceLevel** | **String** | SentinelOne threat confidence level | [optional] 
**publisherName** | **String** | Certificate publisher | [optional] 
**browserType** | **String** | Browser type | [optional] 
**processUser** | **String** | Process user | [optional] 
**filePath** | **Object** | File path | [optional] 
**updatedAt** | **Date** | Timestamp of last update | [optional] 
**mitigationStatusDescription** | **Object** | Mitigation status description | [optional] 
**maliciousProcessArguments** | **String** | Malicious process arguments | [optional] 
**incidentStatusDescription** | **Object** | Incident status description | [optional] 
**rebootRequired** | **Boolean** | A reboot is required on the endpoint for at least one action on the threat | [optional] 
**collectionId** | **String** | Collection id | [optional] 
**automaticallyResolved** | **Boolean** | Automatically resolved | [optional] 
**macroModules** | [**[ThreatsSchemasThreatSchemaMany200ThreatInfoMacroModules]**](ThreatsSchemasThreatSchemaMany200ThreatInfoMacroModules.md) | List of macro modules | [optional] 
**pendingActions** | **Boolean** | At least one action is pending on the threat | [optional] 
**reachedEventsLimit** | **Boolean** | Has number of OS events for this threat reached the limit, resulting in a partial attack storyline | [optional] 
**md5** | **String** | Md5 | [optional] 
**classificationSource** | **String** | Source of the threat Classification | [optional] 
**fileExtension** | **String** | File extension | [optional] 
**fileSize** | **Number** | File size | [optional] 
**externalTicketId** | **String** | External ticket id | [optional] 
**classification** | **String** | Classification of the threat | [optional] 
**sha1** | **String** | SHA1 hash of file content | 
**failedActions** | **Boolean** | At least one action failed on the threat | [optional] 
**analystVerdictDescription** | **Object** | Analyst verdict description | [optional] 
**sha256** | **String** | SHA256 hash of file content | [optional] 
**originatorProcess** | **String** | Originator process | [optional] 
**fileVerificationType** | **String** | File verification type | [optional] 
**isValidCertificate** | **Boolean** | True if the certificate is valid | [optional] 
**isFileless** | **Object** | Is fileless | [optional] 
**engines** | **Object** | [Deprecated] List of engines that detected the threat  | [optional] 
**analystVerdict** | **String** | Analyst verdict | [optional] 
**mitigatedPreemptively** | **Boolean** | True is the threat was blocked before execution | [optional] 
**certificateId** | **String** | File Certificate ID | [optional] 
**initiatingUsername** | **String** | Initiating username | [optional] 
**storyline** | **String** | Storyline identifier from agent | [optional] 
**detectionType** | **String** | Detection type | [optional] 
**threatName** | **String** | Threat name | [optional] 
**identifiedAt** | **Date** | Identified at | [optional] 
**incidentStatus** | **String** | Incident status | [optional] 
**createdAt** | **Date** | Timestamp of date creation in the Management Console. | [optional] 
**initiatedBy** | **String** | Source of threat | [optional] 
**initiatedByDescription** | **Object** | Initiated by description | [optional] 
**detectionEngines** | **Object** | List of engines that detected the threat | [optional] 
**threatId** | **String** | Threat id | [optional] 
**cloudFilesHashVerdict** | **String** | Cloud files hash verdict | [optional] 
**externalTicketExists** | **Object** | External ticket exists | [optional] 
**initiatingUserId** | **String** | Initiating user id | [optional] 


<a name="MitigationStatusEnum"></a>
## Enum: MitigationStatusEnum


* `notMitigated` (value: `"not_mitigated"`)

* `mitigated` (value: `"mitigated"`)

* `markedAsBenign` (value: `"marked_as_benign"`)




<a name="ConfidenceLevelEnum"></a>
## Enum: ConfidenceLevelEnum


* `malicious` (value: `"malicious"`)

* `suspicious` (value: `"suspicious"`)

* `na` (value: `"n/a"`)




<a name="ClassificationSourceEnum"></a>
## Enum: ClassificationSourceEnum


* `cloud` (value: `"Cloud"`)

* `behavioral` (value: `"Behavioral"`)

* `_static` (value: `"Static"`)

* `engine` (value: `"Engine"`)




<a name="AnalystVerdictEnum"></a>
## Enum: AnalystVerdictEnum


* `_undefined` (value: `"undefined"`)

* `truePositive` (value: `"true_positive"`)

* `falsePositive` (value: `"false_positive"`)

* `suspicious` (value: `"suspicious"`)




<a name="DetectionTypeEnum"></a>
## Enum: DetectionTypeEnum


* `_static` (value: `"static"`)

* `dynamic` (value: `"dynamic"`)




<a name="IncidentStatusEnum"></a>
## Enum: IncidentStatusEnum


* `unresolved` (value: `"unresolved"`)

* `inProgress` (value: `"in_progress"`)

* `resolved` (value: `"resolved"`)




<a name="InitiatedByEnum"></a>
## Enum: InitiatedByEnum


* `agentPolicy` (value: `"agent_policy"`)

* `fullDiskScan` (value: `"full_disk_scan"`)

* `sentinelctl` (value: `"sentinelctl"`)

* `dvCommand` (value: `"dv_command"`)

* `consoleApi` (value: `"console_api"`)

* `onDemandScan` (value: `"on_demand_scan"`)

* `starActive` (value: `"star_active"`)

* `starManual` (value: `"star_manual"`)

* `cloudDetection` (value: `"cloud_detection"`)

* `threatIntelligence` (value: `"threat_intelligence"`)

* `watchtowerCloudDetection` (value: `"watchtower_cloud_detection"`)

* `multiple` (value: `"multiple"`)




