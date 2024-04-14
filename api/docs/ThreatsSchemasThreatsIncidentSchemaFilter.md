# S1MgmtApi.ThreatsSchemasThreatsIncidentSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentVersionsNin** | **[String]** | Excluded Agent versions | [optional] 
**analystVerdictsNin** | **[String]** | Exclude threats with specific analyst verdicts | [optional] 
**threatDetailsContains** | **[String]** | Free-text filter by threat details(supports multiple values) | [optional] 
**classificationSources** | **[String]** | Classification sources list | [optional] 
**query** | **String** | Full text search for fields: threat_details, content_hash, computer_name, file_path, uuid, detection_agent_version, realtime_agent_version, detection_agent_domain, command_line_arguments, initiated_by_username, storyline, originated_process, k8s_cluster_name, k8s_node_name, k8s_node_labels, k8s_namespace_name, k8s_namespace_labels, k8s_controller_name, k8s_controller_labels, k8s_pod_name, k8s_pod_labels, container_name, container_image_name, container_labels, external_ticket_id | [optional] 
**cloudProvider** | **[String]** | Agents from which cloud provider | [optional] 
**incidentStatusesNin** | **[String]** | Exclude threats with specific incident statuses | [optional] 
**publisherNameContains** | **[String]** | Free-text filter by threat's publisher name (supports multiple values) | [optional] 
**agentIsActive** | **Boolean** | Include Agents currently connected to the Management Console | [optional] 
**updatedAtGt** | **Date** | Updated at greater than. | [optional] 
**classificationSourcesNin** | **[String]** | Classification sources list to exclude | [optional] 
**containerNameContains** | **[String]** | Free-text filter by the endpoint container name (supports multiple values) | [optional] 
**cloudImageContains** | **[String]** | Free-text filter by cloud image (supports multiple values) | [optional] 
**hasAgentTags** | **Boolean** | Include only Threats whose Agent is assigned any tags if True, or none if False | [optional] 
**storylineContains** | **[String]** | Free-text filter by threat storyline (supports multiple values) | [optional] 
**updatedAtLte** | **Date** | Updated at lesser or equal than. | [optional] 
**classificationsNin** | **[String]** | List of threat classifications not to search | [optional] 
**groupIds** | **[String]** | List of Group IDs to filter by | [optional] 
**externalTicketIds** | **[String]** | External ticket ID for the threat | [optional] 
**osTypesNin** | **[String]** | Excluded OS types | [optional] 
**containerImageNameContains** | **[String]** | Free-text filter by the endpoint container image name (supports multiple values) | [optional] 
**agentIds** | **[String]** | List of Agent IDs | [optional] 
**k8sPodNameContains** | **[String]** | Free-text filter by the endpoint Kubernetes pod name (supports multiple values) | [optional] 
**contentHashes** | **[String]** | List of sha1 hashes to search for | [optional] 
**awsSubnetIdsContains** | **[String]** | Free-text filter by aws subnet ids (supports multiple values) | [optional] 
**agentTagsData** | **String** | Filter threats by assigned tags to the related agent. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. | [optional] 
**updatedAtGte** | **Date** | Updated at greater or equal than. | [optional] 
**storylines** | **[String]** | List of Agent context to search for | [optional] 
**k8sControllerLabelsContains** | **[String]** | Free-text filter by the endpoint Kubernetes controller labels (supports multiple values) | [optional] 
**awsSecurityGroupsContains** | **[String]** | Free-text filter by aws securityGroups(supports multiple values) | [optional] 
**k8sNodeNameContains** | **[String]** | Free-text filter by the endpoint Kubernetes node name (supports multiple values) | [optional] 
**confidenceLevels** | **[String]** | Filter threats by a specific confidence level | [optional] 
**computerNameContains** | **[String]** | Free-text filter by computer name (supports multiple values) | [optional] 
**cloudNetworkContains** | **[String]** | Free-text filter by cloud network (supports multiple values) | [optional] 
**classifications** | **[String]** | List of threat classifications to search | [optional] 
**analystVerdicts** | **[String]** | Filter threats by a specific analyst verdict | [optional] 
**initiatedByUsernameContains** | **[String]** | Free-text filter by the username that initiated that threat (supports multiple values) | [optional] 
**resolved** | **Boolean** | This is used for backward-compatibility with API 2.0. | [optional] 
**collectionIds** | **[String]** | List of collection IDs to search | [optional] 
**detectionEngines** | **[String]** | Included engines | [optional] 
**awsRoleContains** | **[String]** | Free-text filter by aws role(supports multiple values) | [optional] 
**cloudAccountContains** | **[String]** | Free-text filter by cloud account (supports multiple values) | [optional] 
**updatedAtLt** | **Date** | Updated at lesser than. | [optional] 
**ids** | **[String]** | List of threat IDs | [optional] 
**countsFor** | **String** | comma-separated list of fields to be shown | [optional] 
**limit** | **Number** | Limit | [optional] 
**realtimeAgentVersionContains** | **[String]** | Free-text filter by Agent version at current time (supports multiple values) | [optional] 
**osTypes** | **[String]** | Included OS types | [optional] 
**agentMachineTypes** | **[String]** | Include Agent machine types | [optional] 
**initiatedBy** | **[String]** | Only include threats from specific initiating sources | [optional] 
**initiatedByNin** | **[String]** | Exclude threats with specific initiating sources | [optional] 
**k8sNamespaceLabelsContains** | **[String]** | Free-text filter by the endpoint Kubernetes namespace labels (supports multiple values) | [optional] 
**engines** | **[String]** | Included engines | [optional] 
**createdAtLte** | **Date** | Created at lesser or equal than. | [optional] 
**detectionAgentVersionContains** | **[String]** | Free-text filter by Agent version at detection time (supports multiple values) | [optional] 
**detectionEnginesNin** | **[String]** | Excluded engines | [optional] 
**osNamesNin** | **[String]** |  | [optional] 
**k8sControllerNameContains** | **[String]** | Free-text filter by the endpoint Kubernetes controller name (supports multiple values) | [optional] 
**k8sClusterNameContains** | **[String]** | Free-text filter by the endpoint Kubernetes cluster name (supports multiple values) | [optional] 
**noteExists** | **Boolean** | The threat contains at least one note | [optional] 
**containerLabelsContains** | **[String]** | Free-text filter by the endpoint container labels (supports multiple values) | [optional] 
**tenant** | **Boolean** | Indicates a tenant scope request | [optional] 
**cloudInstanceIdContains** | **[String]** | Free-text filter by cloud instance id(supports multiple values) | [optional] 
**agentVersions** | **[String]** | Include Agent versions | [optional] 
**createdAtGte** | **Date** | Created at greater or equal than. | [optional] 
**detectionAgentDomainContains** | **[String]** | Free-text filter by Agent domain at detection time (supports multiple values) | [optional] 
**enginesNin** | **[String]** | Excluded engines | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**cloudProviderNin** | **[String]** | Exclude Agents from these cloud provider | [optional] 
**filePathContains** | **[String]** | Free-text filter by file path (supports multiple values) | [optional] 
**k8sNodeLabelsContains** | **[String]** | Free-text filter by the endpoint Kubernetes node labels (supports multiple values) | [optional] 
**osArchs** | **[String]** | Included OS Architectures | [optional] 
**createdAtGt** | **Date** | Created at greater than. | [optional] 
**k8sNamespaceNameContains** | **[String]** | Free-text filter by the endpoint Kubernetes namespace name (supports multiple values) | [optional] 
**rebootRequired** | **Boolean** | A reboot is required on any endpoint for at least one action on the threat | [optional] 
**mitigationStatuses** | **[String]** | Filter threats by a specific status | [optional] 
**createdAtLt** | **Date** | Created at lesser than. | [optional] 
**k8sPodLabelsContains** | **[String]** | Free-text filter by the endpoint Kubernetes pod labels (supports multiple values) | [optional] 
**gcpServiceAccountContains** | **[String]** | Free-text filter by gcp service account (supports multiple values) | [optional] 
**pendingActions** | **Boolean** | At least one action is pending for the Agent for the threat | [optional] 
**cloudLocationContains** | **[String]** | Free-text filter by cloud location (supports multiple values) | [optional] 
**mitigationStatusesNin** | **[String]** | Filter threats not by a specific status | [optional] 
**agentMachineTypesNin** | **[String]** | Excluded Agent machine types | [optional] 
**originatedProcessContains** | **[String]** | Free-text filter by the originated process name of the threat (supports multiple values) | [optional] 
**failedActions** | **Boolean** | At least one action failed on the threat | [optional] 
**osNames** | **[String]** |  | [optional] 
**contentHashContains** | **[String]** | Free-text filter by file content hash (supports multiple values) | [optional] 
**incidentStatuses** | **[String]** | Filter threats by a specific incident status | [optional] 
**cloudInstanceSizeContains** | **[String]** | Free-text filter by cloud instance size(supports multiple values) | [optional] 
**mitigatedPreemptively** | **Boolean** | If the threat was detected pre-execution or post-execution | [optional] 
**displayName** | **String** | Display name | [optional] 
**externalTicketIdContains** | **[String]** | Free-text filter by the threat external ticket ID (supports multiple values) | [optional] 
**confidenceLevelsNin** | **[String]** | Exclude threats with specific confidence level | [optional] 
**azureResourceGroupContains** | **[String]** | Free-text filter by azure resource group(supports multiple values) | [optional] 
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**commandLineArgumentsContains** | **[String]** | Free-text filter by threat command line arguments (supports multiple values) | [optional] 
**uuidContains** | **[String]** | Free-text filter by Agent UUID (supports multiple values) | [optional] 
**externalTicketExists** | **Boolean** | The threat contains ticket number | [optional] 


<a name="[AnalystVerdictsNinEnum]"></a>
## Enum: [AnalystVerdictsNinEnum]


* `_undefined` (value: `"undefined"`)

* `truePositive` (value: `"true_positive"`)

* `falsePositive` (value: `"false_positive"`)

* `suspicious` (value: `"suspicious"`)




<a name="[ClassificationSourcesEnum]"></a>
## Enum: [ClassificationSourcesEnum]


* `cloud` (value: `"Cloud"`)

* `behavioral` (value: `"Behavioral"`)

* `_static` (value: `"Static"`)

* `engine` (value: `"Engine"`)




<a name="[IncidentStatusesNinEnum]"></a>
## Enum: [IncidentStatusesNinEnum]


* `unresolved` (value: `"unresolved"`)

* `inProgress` (value: `"in_progress"`)

* `resolved` (value: `"resolved"`)




<a name="[ClassificationSourcesNinEnum]"></a>
## Enum: [ClassificationSourcesNinEnum]


* `cloud` (value: `"Cloud"`)

* `behavioral` (value: `"Behavioral"`)

* `_static` (value: `"Static"`)

* `engine` (value: `"Engine"`)




<a name="[OsTypesNinEnum]"></a>
## Enum: [OsTypesNinEnum]


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="[ConfidenceLevelsEnum]"></a>
## Enum: [ConfidenceLevelsEnum]


* `malicious` (value: `"malicious"`)

* `suspicious` (value: `"suspicious"`)

* `na` (value: `"n/a"`)




<a name="[AnalystVerdictsEnum]"></a>
## Enum: [AnalystVerdictsEnum]


* `_undefined` (value: `"undefined"`)

* `truePositive` (value: `"true_positive"`)

* `falsePositive` (value: `"false_positive"`)

* `suspicious` (value: `"suspicious"`)




<a name="[DetectionEnginesEnum]"></a>
## Enum: [DetectionEnginesEnum]


* `reputation` (value: `"reputation"`)

* `sentineloneCloud` (value: `"sentinelone_cloud"`)

* `cloudDetection` (value: `"cloud_detection"`)

* `userBlacklist` (value: `"user_blacklist"`)

* `preExecution` (value: `"pre_execution"`)

* `preExecutionSuspicious` (value: `"pre_execution_suspicious"`)

* `executables` (value: `"executables"`)

* `dataFiles` (value: `"data_files"`)

* `exploits` (value: `"exploits"`)

* `penetration` (value: `"penetration"`)

* `pup` (value: `"pup"`)

* `lateralMovement` (value: `"lateral_movement"`)

* `remoteShell` (value: `"remote_shell"`)

* `manual` (value: `"manual"`)

* `applicationControl` (value: `"application_control"`)

* `threatIntelligence` (value: `"threat_intelligence"`)

* `watchtowerCloudDetection` (value: `"watchtower_cloud_detection"`)

* `driverBlocking` (value: `"driver_blocking"`)




<a name="[OsTypesEnum]"></a>
## Enum: [OsTypesEnum]


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="[AgentMachineTypesEnum]"></a>
## Enum: [AgentMachineTypesEnum]


* `unknown` (value: `"unknown"`)

* `desktop` (value: `"desktop"`)

* `laptop` (value: `"laptop"`)

* `server` (value: `"server"`)

* `kubernetesNode` (value: `"kubernetes node"`)

* `storage` (value: `"storage"`)

* `kubernetesPod` (value: `"kubernetes pod"`)

* `ecsTask` (value: `"ecs task"`)




<a name="[InitiatedByEnum]"></a>
## Enum: [InitiatedByEnum]


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




<a name="[InitiatedByNinEnum]"></a>
## Enum: [InitiatedByNinEnum]


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




<a name="[EnginesEnum]"></a>
## Enum: [EnginesEnum]


* `reputation` (value: `"reputation"`)

* `sentineloneCloud` (value: `"sentinelone_cloud"`)

* `cloudDetection` (value: `"cloud_detection"`)

* `userBlacklist` (value: `"user_blacklist"`)

* `preExecution` (value: `"pre_execution"`)

* `preExecutionSuspicious` (value: `"pre_execution_suspicious"`)

* `executables` (value: `"executables"`)

* `dataFiles` (value: `"data_files"`)

* `exploits` (value: `"exploits"`)

* `penetration` (value: `"penetration"`)

* `pup` (value: `"pup"`)

* `lateralMovement` (value: `"lateral_movement"`)

* `remoteShell` (value: `"remote_shell"`)

* `manual` (value: `"manual"`)

* `applicationControl` (value: `"application_control"`)

* `threatIntelligence` (value: `"threat_intelligence"`)

* `watchtowerCloudDetection` (value: `"watchtower_cloud_detection"`)

* `driverBlocking` (value: `"driver_blocking"`)




<a name="[DetectionEnginesNinEnum]"></a>
## Enum: [DetectionEnginesNinEnum]


* `reputation` (value: `"reputation"`)

* `sentineloneCloud` (value: `"sentinelone_cloud"`)

* `cloudDetection` (value: `"cloud_detection"`)

* `userBlacklist` (value: `"user_blacklist"`)

* `preExecution` (value: `"pre_execution"`)

* `preExecutionSuspicious` (value: `"pre_execution_suspicious"`)

* `executables` (value: `"executables"`)

* `dataFiles` (value: `"data_files"`)

* `exploits` (value: `"exploits"`)

* `penetration` (value: `"penetration"`)

* `pup` (value: `"pup"`)

* `lateralMovement` (value: `"lateral_movement"`)

* `remoteShell` (value: `"remote_shell"`)

* `manual` (value: `"manual"`)

* `applicationControl` (value: `"application_control"`)

* `threatIntelligence` (value: `"threat_intelligence"`)

* `watchtowerCloudDetection` (value: `"watchtower_cloud_detection"`)

* `driverBlocking` (value: `"driver_blocking"`)




<a name="[EnginesNinEnum]"></a>
## Enum: [EnginesNinEnum]


* `reputation` (value: `"reputation"`)

* `sentineloneCloud` (value: `"sentinelone_cloud"`)

* `cloudDetection` (value: `"cloud_detection"`)

* `userBlacklist` (value: `"user_blacklist"`)

* `preExecution` (value: `"pre_execution"`)

* `preExecutionSuspicious` (value: `"pre_execution_suspicious"`)

* `executables` (value: `"executables"`)

* `dataFiles` (value: `"data_files"`)

* `exploits` (value: `"exploits"`)

* `penetration` (value: `"penetration"`)

* `pup` (value: `"pup"`)

* `lateralMovement` (value: `"lateral_movement"`)

* `remoteShell` (value: `"remote_shell"`)

* `manual` (value: `"manual"`)

* `applicationControl` (value: `"application_control"`)

* `threatIntelligence` (value: `"threat_intelligence"`)

* `watchtowerCloudDetection` (value: `"watchtower_cloud_detection"`)

* `driverBlocking` (value: `"driver_blocking"`)




<a name="[OsArchsEnum]"></a>
## Enum: [OsArchsEnum]


* `_32Bit` (value: `"32 bit"`)

* `_64Bit` (value: `"64 bit"`)

* `aRM64` (value: `"ARM64"`)




<a name="[MitigationStatusesEnum]"></a>
## Enum: [MitigationStatusesEnum]


* `notMitigated` (value: `"not_mitigated"`)

* `mitigated` (value: `"mitigated"`)

* `markedAsBenign` (value: `"marked_as_benign"`)




<a name="[MitigationStatusesNinEnum]"></a>
## Enum: [MitigationStatusesNinEnum]


* `notMitigated` (value: `"not_mitigated"`)

* `mitigated` (value: `"mitigated"`)

* `markedAsBenign` (value: `"marked_as_benign"`)




<a name="[AgentMachineTypesNinEnum]"></a>
## Enum: [AgentMachineTypesNinEnum]


* `unknown` (value: `"unknown"`)

* `desktop` (value: `"desktop"`)

* `laptop` (value: `"laptop"`)

* `server` (value: `"server"`)

* `kubernetesNode` (value: `"kubernetes node"`)

* `storage` (value: `"storage"`)

* `kubernetesPod` (value: `"kubernetes pod"`)

* `ecsTask` (value: `"ecs task"`)




<a name="[IncidentStatusesEnum]"></a>
## Enum: [IncidentStatusesEnum]


* `unresolved` (value: `"unresolved"`)

* `inProgress` (value: `"in_progress"`)

* `resolved` (value: `"resolved"`)




<a name="[ConfidenceLevelsNinEnum]"></a>
## Enum: [ConfidenceLevelsNinEnum]


* `malicious` (value: `"malicious"`)

* `suspicious` (value: `"suspicious"`)

* `na` (value: `"n/a"`)




