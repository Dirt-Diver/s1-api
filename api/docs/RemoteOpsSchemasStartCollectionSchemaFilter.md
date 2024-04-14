# S1MgmtApi.RemoteOpsSchemasStartCollectionSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentVersionsNin** | **[String]** | Agent versions not to include | [optional] 
**registeredAtBetween** | **String** | Date range for first registration time (format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**registeredAtLte** | **Date** | Agents registered before or at this time | [optional] 
**adComputerQueryContains** | **[String]** | Free-text filter by Active Directory computer name or its groups (supports multiple values) | [optional] 
**mitigationModeSuspicious** | **String** | Mitigation mode policy for suspicious activity | [optional] 
**hasLocalConfiguration** | **Boolean** | Agent has a local configuration set | [optional] 
**adUserQueryContains** | **[String]** | Free-text filter by Active Directory computer name or its groups (supports multiple values) | [optional] 
**query** | **String** | A free-text search term, will match applicable attributes (sub-string match). Note: Device's physical addresses will be matched if they start with the search term only (no match if they contain the term). | [optional] 
**cloudProvider** | **[String]** | Agents from which cloud provider | [optional] 
**coreCountGt** | **Number** | CPU cores (more than) | [optional] 
**decommissionedAtGt** | **Date** | Agents decommissioned after this timestamp | [optional] 
**registeredAtGte** | **Date** | Agents registered after or at this time | [optional] 
**totalMemoryGt** | **Number** | Memory size (MB, more than) | [optional] 
**updatedAtGt** | **Date** | Agents updated after this timestamp | [optional] 
**hasContainerizedWorkload** | **Boolean** | Include only Agents protecting containerized workloads | [optional] 
**cloudImageContains** | **[String]** | Free-text filter by cloud image (supports multiple values) | [optional] 
**threatCreatedAtGte** | **Date** | Agents with threats reported after or at this time | [optional] 
**appsVulnerabilityStatusesNin** | **[String]** | Apps vulnerability status nin | [optional] 
**scanStatusesNin** | **[String]** | Not included scan statuses | [optional] 
**adComputerMemberContains** | **[String]** | Free-text filter by Active Directory computer groups string (supports multiple values) | [optional] 
**coreCountLte** | **Number** | CPU cores (less than or equal) | [optional] 
**rangerVersions** | **[String]** | Ranger versions to include | [optional] 
**machineTypes** | **[String]** | Included machine types | [optional] 
**coreCountGte** | **Number** | CPU cores (more than or equal) | [optional] 
**locationIds** | **[String]** | Include only Agents reporting these locations | [optional] 
**locationIdsNin** | **[String]** | Do not include only Agents reporting these locations | [optional] 
**gatewayIp** | **String** | Gateway ip | [optional] 
**updatedAtLte** | **Date** | Agents updated before or at this timestamp | [optional] 
**groupIds** | **[String]** | List of Group IDs to filter by | [optional] 
**missingPermissionsNin** | **[String]** | Excluded missing permissions | [optional] 
**migrationStatus** | **String** | Migration status | [optional] 
**threatRebootRequired** | **[Boolean]** | Has at least one threat with at least one mitigation action pending reboot to succeed | [optional] 
**serialNumberContains** | **[String]** | Free-text filter by Serial Number (supports multiple values) | [optional] 
**decommissionedAtGte** | **Date** | Agents decommissioned after or at this timestamp | [optional] 
**lastSuccessfulScanDateBetween** | **String** | Date range for last successful full disk scan(format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**lastActiveDateLte** | **Date** | Agents last active before or at this time | [optional] 
**lastActiveDateBetween** | **String** | Date range for last active date(format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**networkQuarantineEnabled** | **[Boolean]** | The agents supports Network Quarantine Control and its enabled for the agent's group | [optional] 
**cloudTagsContains** | **[String]** | Free-text filter by cloud tags (supports multiple values) | [optional] 
**threatCreatedAtBetween** | **String** | Agents with threats reported in a date range (format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**encryptedApplications** | **Boolean** | Disk encryption status | [optional] 
**isUninstalled** | **[Boolean]** | Include installed, uninstalled or both | [optional] 
**networkInterfacePhysicalContains** | **[String]** | Free-text filter by MAC address (supports multiple values) | [optional] 
**agentVersionGte** | **String** | Agents versions greater than or equal to given version | [optional] 
**lastSuccessfulScanDateGte** | **Date** | Agents last successful full disk scan after or at this time | [optional] 
**operationalStates** | **[String]** | Agent operational state | [optional] 
**adUserNameContains** | **[String]** | Free-text filter by Active Directory username string (supports multiple values) | [optional] 
**osTypesNin** | **[String]** | Not included OS types | [optional] 
**csvFilterId** | **String** | The ID of the CSV file to filter by | [optional] 
**isActive** | **Boolean** | Include only active Agents | [optional] 
**mitigationMode** | **String** | Agent mitigation mode policy | [optional] 
**awsSubnetIdsContains** | **[String]** | Free-text filter by aws subnet ids (supports multiple values) | [optional] 
**agentVersionLte** | **String** | Agents versions less than or equal to given version | [optional] 
**updatedAtGte** | **Date** | Agents updated after or at this timestamp | [optional] 
**osVersionContains** | **[String]** | Free-text filter by OS full name and version (supports multiple values) | [optional] 
**externalIpContains** | **[String]** | Free-text filter by visible IP (supports multiple values) | [optional] 
**awsSecurityGroupsContains** | **[String]** | Free-text filter by aws securityGroups(supports multiple values) | [optional] 
**k8sNodeNameContains** | **[String]** | Free-text filter by K8s node name (supports multiple values) | [optional] 
**agentVersionBetween** | **String** | Version range for agent version (format: <from_version>-<to_version>, inclusive) | [optional] 
**activeThreats** | **Number** | Include Agents with this amount of active threats | [optional] 
**hasTags** | **Boolean** | Include only Agents that have any tags assigned if True, or none if False | [optional] 
**agentNamespaceContains** | **[String]** | Free-text filter by agent namespace (supports multiple values) | [optional] 
**cpuCountLt** | **Number** | Number of CPUs (less than) | [optional] 
**registeredAtLt** | **Date** | Agents registered before this time | [optional] 
**networkInterfaceInetContains** | **[String]** | Free-text filter by local IP (supports multiple values) | [optional] 
**computerNameContains** | **[String]** | Free-text filter by computer name (supports multiple values) | [optional] 
**cloudNetworkContains** | **[String]** | Free-text filter by cloud network (supports multiple values) | [optional] 
**remoteOpsForensicsSupported** | **Boolean** | Include only agents that has Remote Ops Forensicsfeature supported | [optional] 
**remoteProfilingStates** | **[String]** | Agent remote profiling state | [optional] 
**filteredGroupIds** | **[String]** | List of Group IDs to filter by | [optional] 
**agentPodNameContains** | **[String]** | Free-text filter by agent pod name (supports multiple values) | [optional] 
**userActionsNeededNin** | **[String]** | Excluded pending user actions | [optional] 
**rangerStatuses** | **[String]** | Status of Ranger | [optional] 
**computerNameLike** | **String** | Match computer name partially (substring) | [optional] 
**externalIdContains** | **[String]** | Free-text filter by external ID (Customer ID) | [optional] 
**createdAtBetween** | **String** | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**consoleMigrationStatusesNin** | **[String]** | Migration status nin | [optional] 
**cpuIdContains** | **[String]** | Free-text filter by CPU name (supports multiple values) | [optional] 
**coreCountBetween** | **String** | Possible number of CPU cores (inclusive) | [optional] 
**isUpToDate** | **Boolean** | Include only Agents with updated software | [optional] 
**threatCreatedAtLt** | **Date** | Agents with threats reported before this time | [optional] 
**rangerStatus** | **String** | [DEPRECATED] Use rangerStatuses. | [optional] 
**totalMemoryBetween** | **String** | Total memory range (GB, inclusive) | [optional] 
**lastSuccessfulScanDateLte** | **Date** | Agents last successful full disk scan before or at this time | [optional] 
**domains** | **[String]** | Included network domains | [optional] 
**awsRoleContains** | **[String]** | Free-text filter by aws role(supports multiple values) | [optional] 
**lastLoggedInUserNameContains** | **[String]** | Free-text filter by username (supports multiple values) | [optional] 
**cpuCountGt** | **Number** | Number of CPUs (more than) | [optional] 
**cloudAccountContains** | **[String]** | Free-text filter by cloud account (supports multiple values) | [optional] 
**clusterNameContains** | **[String]** | Free-text filter by cluster name (supports multiple values) | [optional] 
**scanStatuses** | **[String]** | Included scan statuses | [optional] 
**updatedAtLt** | **Date** | Agents updated before this timestamp | [optional] 
**ids** | **[String]** | A list of Agent IDs | [optional] 
**liveUpdateIdContains** | **[String]** | Free-text filter by live update ID (supports multiple values) | [optional] 
**computerName** | **String** | Computer name | [optional] 
**uuid** | **String** | Agent's universally unique identifier | [optional] 
**osTypes** | **[String]** | Included OS types | [optional] 
**appsVulnerabilityStatuses** | **[String]** | Apps vulnerability status in | [optional] 
**lastActiveDateGte** | **Date** | Agents last active after or at this time | [optional] 
**threatContentHash** | **String** | Include only Agents that have at least one threat with this content hash | [optional] 
**remoteProfilingStatesNin** | **[String]** | Do not include these Agent remote profiling states | [optional] 
**createdAtLte** | **Date** | Agents created before or at this timestamp | [optional] 
**scanStatus** | **String** | Scan status | [optional] 
**filteredSiteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**userActionsNeeded** | **[String]** | Included pending user actions | [optional] 
**registeredAtGt** | **Date** | Agents registered after this time | [optional] 
**osArch** | **String** | OS architecture | [optional] 
**adComputerNameContains** | **[String]** | Free-text filter by Active Directory computer name string (supports multiple values) | [optional] 
**totalMemoryGte** | **Number** | Memory size (MB, more than or equal) | [optional] 
**threatHidden** | **Boolean** | Include only Agents with at least one hidden threat | [optional] 
**lastActiveDateGt** | **Date** | Agents last active after this time | [optional] 
**threatCreatedAtLte** | **Date** | Agents with threats reported before or at this time | [optional] 
**cpuCountGte** | **Number** | Number of CPUs (more than or equal) | [optional] 
**cloudInstanceIdContains** | **[String]** | Free-text filter by cloud instance id(supports multiple values) | [optional] 
**agentVersions** | **[String]** | Agent versions to include | [optional] 
**adQueryContains** | **[String]** | Free-text filter by Active Directory string (supports multiple values) | [optional] 
**createdAtGte** | **Date** | Agents created after or at this timestamp | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**locationEnabled** | **[Boolean]** | The agents supports Location Awareness and it is enabled for the agent's group | [optional] 
**cloudProviderNin** | **[String]** | Exclude Agents from these cloud provider | [optional] 
**isPendingUninstall** | **Boolean** | Include only Agents with pending uninstall requests | [optional] 
**k8sNodeLabelsContains** | **[String]** | Free-text filter by K8s node labels (supports multiple values) | [optional] 
**decommissionedAtLte** | **Date** | Agents decommissioned before this timestamp | [optional] 
**tagsData** | **String** | Filter agents by their assigned tags. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. | [optional] 
**agentVersionGt** | **String** | Agents versions greater than given version | [optional] 
**createdAtGt** | **Date** | Agents created after this timestamp | [optional] 
**threatMitigationStatus** | **String** | Include only Agents that have threats with this mitigation status | [optional] 
**lastSuccessfulScanDateGt** | **Date** | Agents last successful full disk scan after this time | [optional] 
**firewallEnabled** | **[Boolean]** | The agents supports Firewall Control and it is enabled for the agent's group | [optional] 
**decommissionedAtLt** | **Date** | Agents decommissioned before this timestamp | [optional] 
**decommissionedAtBetween** | **String** | Date range for decommission time (format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**domainsNin** | **[String]** | Not included network domains | [optional] 
**createdAtLt** | **Date** | Agents created before this timestamp | [optional] 
**gcpServiceAccountContains** | **[String]** | Free-text filter by gcp service account (supports multiple values) | [optional] 
**threatResolved** | **Boolean** | Include only Agents with at least one resolved threat | [optional] 
**cloudLocationContains** | **[String]** | Free-text filter by cloud location (supports multiple values) | [optional] 
**lastActiveDateLt** | **Date** | Agents last active before this time | [optional] 
**networkStatuses** | **[String]** | Included network statuses | [optional] 
**k8sTypeContains** | **[String]** | Free-text filter by K8s type(supports multiple values) | [optional] 
**networkInterfaceGatewayMacAddressContains** | **[String]** | Free-text filter by Gateway MAC address (supports multiple values) | [optional] 
**cpuCountBetween** | **String** | Possible number of CPU cores (inclusive) | [optional] 
**operationalStatesNin** | **[String]** | Do not include these Agent operational states | [optional] 
**totalMemoryLt** | **Number** | Memory size (MB, less than) | [optional] 
**k8sVersionContains** | **[String]** | Free-text filter by K8s version (supports multiple values) | [optional] 
**installerTypes** | **[String]** | Include only Agents installed with these package types | [optional] 
**adUserMemberContains** | **[String]** | Free-text filter by Active Directory user groups string (supports multiple values) | [optional] 
**infected** | **Boolean** | Include only Agents with at least one active threat | [optional] 
**coreCountLt** | **Number** | CPU cores (less than) | [optional] 
**missingPermissions** | **[String]** | Included missing permissions | [optional] 
**installerTypesNin** | **[String]** | Exclude Agents installed with these package types | [optional] 
**machineTypesNin** | **[String]** | Not included machine types | [optional] 
**filterId** | **String** | Include all Agents matching this saved filter | [optional] 
**isDecommissioned** | **[Boolean]** | Include active, decommissioned or both | [optional] 
**agentVersionLt** | **String** | Agents versions less than given version | [optional] 
**rangerStatusesNin** | **[String]** | Do not include these Ranger Statuses | [optional] 
**cloudInstanceSizeContains** | **[String]** | Free-text filter by cloud instance size(supports multiple values) | [optional] 
**rangerVersionsNin** | **[String]** | Ranger versions not to include | [optional] 
**rsoLevel** | **String** | Supported Remote Script Orchestration level | [optional] 
**cpuCountLte** | **Number** | Number of CPUs (less than or equal) | [optional] 
**updatedAtBetween** | **String** | Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**consoleMigrationStatuses** | **[String]** | Migration status in | [optional] 
**azureResourceGroupContains** | **[String]** | Free-text filter by azure resource group(supports multiple values) | [optional] 
**threatCreatedAtGt** | **Date** | Agents with threats reported after this time | [optional] 
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**uuidContains** | **[String]** | Free-text filter by Agent UUID (supports multiple values) | [optional] 
**networkStatusesNin** | **[String]** | Included network statuses | [optional] 
**totalMemoryLte** | **Number** | Memory size (MB, less than or equal) | [optional] 
**activeThreatsGt** | **Number** | Include Agents with at least this amount of active threats | [optional] 
**lastSuccessfulScanDateLt** | **Date** | Agents last successful full disk scan before this time | [optional] 
**adQuery** | **String** | An Active Directory query string | [optional] 
**uuids** | **[String]** | A list of included UUIDs | [optional] 


<a name="MitigationModeSuspiciousEnum"></a>
## Enum: MitigationModeSuspiciousEnum


* `detect` (value: `"detect"`)

* `protect` (value: `"protect"`)




<a name="[AppsVulnerabilityStatusesNinEnum]"></a>
## Enum: [AppsVulnerabilityStatusesNinEnum]


* `patchRequired` (value: `"patch_required"`)

* `upToDate` (value: `"up_to_date"`)

* `notApplicable` (value: `"not_applicable"`)




<a name="[ScanStatusesNinEnum]"></a>
## Enum: [ScanStatusesNinEnum]


* `none` (value: `"none"`)

* `started` (value: `"started"`)

* `aborted` (value: `"aborted"`)

* `finished` (value: `"finished"`)




<a name="[MachineTypesEnum]"></a>
## Enum: [MachineTypesEnum]


* `unknown` (value: `"unknown"`)

* `desktop` (value: `"desktop"`)

* `laptop` (value: `"laptop"`)

* `server` (value: `"server"`)

* `kubernetesNode` (value: `"kubernetes node"`)

* `storage` (value: `"storage"`)

* `kubernetesPod` (value: `"kubernetes pod"`)

* `ecsTask` (value: `"ecs task"`)




<a name="[MissingPermissionsNinEnum]"></a>
## Enum: [MissingPermissionsNinEnum]


* `fda` (value: `"user_action_needed_fda"`)

* `rsFda` (value: `"user_action_needed_rs_fda"`)

* `fdaHelper` (value: `"user_action_needed_fda_helper"`)

* `fdaSentineld` (value: `"user_action_needed_fda_sentineld"`)

* `bluetoothPer` (value: `"user_action_needed_bluetooth_per"`)

* `network` (value: `"user_action_needed_network"`)

* `notifications` (value: `"user_action_needed_notifications"`)




<a name="MigrationStatusEnum"></a>
## Enum: MigrationStatusEnum


* `NA` (value: `"N/A"`)

* `pending` (value: `"Pending"`)

* `migrated` (value: `"Migrated"`)

* `failed` (value: `"Failed"`)




<a name="[OsTypesNinEnum]"></a>
## Enum: [OsTypesNinEnum]


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="MitigationModeEnum"></a>
## Enum: MitigationModeEnum


* `detect` (value: `"detect"`)

* `protect` (value: `"protect"`)




<a name="[UserActionsNeededNinEnum]"></a>
## Enum: [UserActionsNeededNinEnum]


* `none` (value: `"none"`)

* `userActionNeeded` (value: `"user_action_needed"`)

* `rebootNeeded` (value: `"reboot_needed"`)

* `upgradeNeeded` (value: `"upgrade_needed"`)

* `incompatibleOs` (value: `"incompatible_os"`)

* `unprotected` (value: `"unprotected"`)

* `rebootlessWithoutDynamicDetection` (value: `"rebootless_without_dynamic_detection"`)

* `extendedExclusionsPartiallyAccepted` (value: `"extended_exclusions_partially_accepted"`)

* `rebootRequired` (value: `"reboot_required"`)

* `pendingDeprecation` (value: `"pending_deprecation"`)

* `neNotRunning` (value: `"ne_not_running"`)

* `neCfNotActive` (value: `"ne_cf_not_active"`)

* `rebootCategory` (value: `"reboot_category"`)

* `missingPermissionsCategory` (value: `"missing_permissions_category"`)

* `agentSuppressedCategory` (value: `"agent_suppressed_category"`)

* `incompatibleOsCategory` (value: `"incompatible_os_category"`)

* `unprotectedCategory` (value: `"unprotected_category"`)

* `partialFunctionality` (value: `"partial_functionality"`)




<a name="[RangerStatusesEnum]"></a>
## Enum: [RangerStatusesEnum]


* `notApplicable` (value: `"NotApplicable"`)

* `enabled` (value: `"Enabled"`)

* `disabled` (value: `"Disabled"`)




<a name="[ConsoleMigrationStatusesNinEnum]"></a>
## Enum: [ConsoleMigrationStatusesNinEnum]


* `NA` (value: `"N/A"`)

* `pending` (value: `"Pending"`)

* `migrated` (value: `"Migrated"`)

* `failed` (value: `"Failed"`)




<a name="RangerStatusEnum"></a>
## Enum: RangerStatusEnum


* `notApplicable` (value: `"NotApplicable"`)

* `enabled` (value: `"Enabled"`)

* `disabled` (value: `"Disabled"`)




<a name="[ScanStatusesEnum]"></a>
## Enum: [ScanStatusesEnum]


* `none` (value: `"none"`)

* `started` (value: `"started"`)

* `aborted` (value: `"aborted"`)

* `finished` (value: `"finished"`)




<a name="[OsTypesEnum]"></a>
## Enum: [OsTypesEnum]


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="[AppsVulnerabilityStatusesEnum]"></a>
## Enum: [AppsVulnerabilityStatusesEnum]


* `patchRequired` (value: `"patch_required"`)

* `upToDate` (value: `"up_to_date"`)

* `notApplicable` (value: `"not_applicable"`)




<a name="ScanStatusEnum"></a>
## Enum: ScanStatusEnum


* `none` (value: `"none"`)

* `started` (value: `"started"`)

* `aborted` (value: `"aborted"`)

* `finished` (value: `"finished"`)




<a name="[UserActionsNeededEnum]"></a>
## Enum: [UserActionsNeededEnum]


* `none` (value: `"none"`)

* `userActionNeeded` (value: `"user_action_needed"`)

* `rebootNeeded` (value: `"reboot_needed"`)

* `upgradeNeeded` (value: `"upgrade_needed"`)

* `incompatibleOs` (value: `"incompatible_os"`)

* `unprotected` (value: `"unprotected"`)

* `rebootlessWithoutDynamicDetection` (value: `"rebootless_without_dynamic_detection"`)

* `extendedExclusionsPartiallyAccepted` (value: `"extended_exclusions_partially_accepted"`)

* `rebootRequired` (value: `"reboot_required"`)

* `pendingDeprecation` (value: `"pending_deprecation"`)

* `neNotRunning` (value: `"ne_not_running"`)

* `neCfNotActive` (value: `"ne_cf_not_active"`)

* `rebootCategory` (value: `"reboot_category"`)

* `missingPermissionsCategory` (value: `"missing_permissions_category"`)

* `agentSuppressedCategory` (value: `"agent_suppressed_category"`)

* `incompatibleOsCategory` (value: `"incompatible_os_category"`)

* `unprotectedCategory` (value: `"unprotected_category"`)

* `partialFunctionality` (value: `"partial_functionality"`)




<a name="OsArchEnum"></a>
## Enum: OsArchEnum


* `_32Bit` (value: `"32 bit"`)

* `_64Bit` (value: `"64 bit"`)

* `aRM64` (value: `"ARM64"`)




<a name="ThreatMitigationStatusEnum"></a>
## Enum: ThreatMitigationStatusEnum


* `mitigated` (value: `"mitigated"`)

* `blocked` (value: `"blocked"`)

* `active` (value: `"active"`)

* `suspicious` (value: `"suspicious"`)

* `pending` (value: `"pending"`)

* `suspiciousResolved` (value: `"suspicious_resolved"`)




<a name="[NetworkStatusesEnum]"></a>
## Enum: [NetworkStatusesEnum]


* `connected` (value: `"connected"`)

* `disconnected` (value: `"disconnected"`)

* `connecting` (value: `"connecting"`)

* `disconnecting` (value: `"disconnecting"`)




<a name="[InstallerTypesEnum]"></a>
## Enum: [InstallerTypesEnum]


* `msi` (value: `".msi"`)

* `exe` (value: `".exe"`)

* `deb` (value: `".deb"`)

* `rpm` (value: `".rpm"`)

* `bsx` (value: `".bsx"`)

* `pkg` (value: `".pkg"`)

* `img` (value: `".img"`)

* `unknown` (value: `"unknown"`)

* `tar` (value: `".tar"`)

* `zip` (value: `".zip"`)

* `gz` (value: `".gz"`)

* `xz` (value: `".xz"`)




<a name="[MissingPermissionsEnum]"></a>
## Enum: [MissingPermissionsEnum]


* `fda` (value: `"user_action_needed_fda"`)

* `rsFda` (value: `"user_action_needed_rs_fda"`)

* `fdaHelper` (value: `"user_action_needed_fda_helper"`)

* `fdaSentineld` (value: `"user_action_needed_fda_sentineld"`)

* `bluetoothPer` (value: `"user_action_needed_bluetooth_per"`)

* `network` (value: `"user_action_needed_network"`)

* `notifications` (value: `"user_action_needed_notifications"`)




<a name="[InstallerTypesNinEnum]"></a>
## Enum: [InstallerTypesNinEnum]


* `msi` (value: `".msi"`)

* `exe` (value: `".exe"`)

* `deb` (value: `".deb"`)

* `rpm` (value: `".rpm"`)

* `bsx` (value: `".bsx"`)

* `pkg` (value: `".pkg"`)

* `img` (value: `".img"`)

* `unknown` (value: `"unknown"`)

* `tar` (value: `".tar"`)

* `zip` (value: `".zip"`)

* `gz` (value: `".gz"`)

* `xz` (value: `".xz"`)




<a name="[MachineTypesNinEnum]"></a>
## Enum: [MachineTypesNinEnum]


* `unknown` (value: `"unknown"`)

* `desktop` (value: `"desktop"`)

* `laptop` (value: `"laptop"`)

* `server` (value: `"server"`)

* `kubernetesNode` (value: `"kubernetes node"`)

* `storage` (value: `"storage"`)

* `kubernetesPod` (value: `"kubernetes pod"`)

* `ecsTask` (value: `"ecs task"`)




<a name="[RangerStatusesNinEnum]"></a>
## Enum: [RangerStatusesNinEnum]


* `notApplicable` (value: `"NotApplicable"`)

* `enabled` (value: `"Enabled"`)

* `disabled` (value: `"Disabled"`)




<a name="RsoLevelEnum"></a>
## Enum: RsoLevelEnum


* `none` (value: `"none"`)

* `pro` (value: `"pro"`)

* `ars` (value: `"ars"`)




<a name="[ConsoleMigrationStatusesEnum]"></a>
## Enum: [ConsoleMigrationStatusesEnum]


* `NA` (value: `"N/A"`)

* `pending` (value: `"Pending"`)

* `migrated` (value: `"Migrated"`)

* `failed` (value: `"Failed"`)




<a name="[NetworkStatusesNinEnum]"></a>
## Enum: [NetworkStatusesNinEnum]


* `connected` (value: `"connected"`)

* `disconnected` (value: `"disconnected"`)

* `connecting` (value: `"connecting"`)

* `disconnecting` (value: `"disconnecting"`)




