# S1MgmtApi.FiltersFiltersUpdateFilterSchemaDataFilterFields

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentVersionsNin** | **[String]** | Agent versions not to include | [optional] 
**registeredAtBetween** | **String** | Date range for first registration time (format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**adComputerQueryContains** | **[String]** | Free-text filter by Active Directory computer name or its groups (supports multiple values) | [optional] 
**hasLocalConfiguration** | **Boolean** | Agent has a local configuration set | [optional] 
**adUserQueryContains** | **[String]** | Free-text filter by Active Directory computer name or its groups (supports multiple values) | [optional] 
**query** | **String** | A free-text search term, will match applicable attributes (sub-string match). Note: Device's physical addresses will be matched if they start with the search term only (no match if they contain the term). | [optional] 
**cloudProvider** | **[String]** | Agents from which cloud provider | [optional] 
**cloudImageContains** | **[String]** | Free-text filter by cloud image (supports multiple values) | [optional] 
**appsVulnerabilityStatusesNin** | **[String]** | Apps vulnerability status nin | [optional] 
**scanStatusesNin** | **[String]** | Not included scan statuses | [optional] 
**adComputerMemberContains** | **[String]** | Free-text filter by Active Directory computer groups string (supports multiple values) | [optional] 
**rangerVersions** | **[String]** | Ranger versions to include | [optional] 
**machineTypes** | **[String]** | Included machine types | [optional] 
**locationIds** | **[String]** | Include only Agents reporting these locations | [optional] 
**locationIdsNin** | **[String]** | Do not include only Agents reporting these locations | [optional] 
**missingPermissionsNin** | **[String]** | Excluded missing permissions | [optional] 
**threatRebootRequired** | **[Boolean]** | Has at least one threat with at least one mitigation action pending reboot to succeed | [optional] 
**serialNumberContains** | **[String]** | Free-text filter by Serial Number (supports multiple values) | [optional] 
**lastSuccessfulScanDateBetween** | **String** | Date range for last successful full disk scan(format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**lastActiveDateBetween** | **String** | Date range for last active date(format: <from_timestamp>-<to_timestamp>, inclusive) | [optional] 
**networkQuarantineEnabled** | **[Boolean]** | The agents supports Network Quarantine Control and its enabled for the agent's group | [optional] 
**cloudTagsContains** | **[String]** | Free-text filter by cloud tags (supports multiple values) | [optional] 
**encryptedApplications** | **Boolean** | Disk encryption status | [optional] 
**isUninstalled** | **[Boolean]** | Include installed, uninstalled or both | [optional] 
**networkInterfacePhysicalContains** | **[String]** | Free-text filter by MAC address (supports multiple values) | [optional] 
**operationalStates** | **[String]** | Agent operational state | [optional] 
**adUserNameContains** | **[String]** | Free-text filter by Active Directory username string (supports multiple values) | [optional] 
**osTypesNin** | **[String]** | Not included OS types | [optional] 
**isActive** | **Boolean** | Include only active Agents | [optional] 
**awsSubnetIdsContains** | **[String]** | Free-text filter by aws subnet ids (supports multiple values) | [optional] 
**osVersionContains** | **[String]** | Free-text filter by OS full name and version (supports multiple values) | [optional] 
**externalIpContains** | **[String]** | Free-text filter by visible IP (supports multiple values) | [optional] 
**awsSecurityGroupsContains** | **[String]** | Free-text filter by aws securityGroups(supports multiple values) | [optional] 
**k8sNodeNameContains** | **[String]** | Free-text filter by K8s node name (supports multiple values) | [optional] 
**hasTags** | **Boolean** | Include only Agents that have any tags assigned if True, or none if False | [optional] 
**agentNamespaceContains** | **[String]** | Free-text filter by agent namespace (supports multiple values) | [optional] 
**networkInterfaceInetContains** | **[String]** | Free-text filter by local IP (supports multiple values) | [optional] 
**computerNameContains** | **[String]** | Free-text filter by computer name (supports multiple values) | [optional] 
**cloudNetworkContains** | **[String]** | Free-text filter by cloud network (supports multiple values) | [optional] 
**remoteProfilingStates** | **[String]** | Agent remote profiling state | [optional] 
**filteredGroupIds** | **[String]** | List of Group IDs to filter by | [optional] 
**agentPodNameContains** | **[String]** | Free-text filter by agent pod name (supports multiple values) | [optional] 
**userActionsNeededNin** | **[String]** | Excluded pending user actions | [optional] 
**rangerStatuses** | **[String]** | Status of Ranger | [optional] 
**externalIdContains** | **[String]** | Free-text filter by external ID (Customer ID) | [optional] 
**consoleMigrationStatusesNin** | **[String]** | Migration status nin | [optional] 
**cpuIdContains** | **[String]** | Free-text filter by CPU name (supports multiple values) | [optional] 
**coreCountBetween** | **String** | Possible number of CPU cores (inclusive) | [optional] 
**isUpToDate** | **Boolean** | Include only Agents with updated software | [optional] 
**rangerStatus** | **String** | [DEPRECATED] Use rangerStatuses. | [optional] 
**totalMemoryBetween** | **String** | Total memory range (GB, inclusive) | [optional] 
**domains** | **[String]** | Included network domains | [optional] 
**awsRoleContains** | **[String]** | Free-text filter by aws role(supports multiple values) | [optional] 
**lastLoggedInUserNameContains** | **[String]** | Free-text filter by username (supports multiple values) | [optional] 
**cloudAccountContains** | **[String]** | Free-text filter by cloud account (supports multiple values) | [optional] 
**clusterNameContains** | **[String]** | Free-text filter by cluster name (supports multiple values) | [optional] 
**scanStatuses** | **[String]** | Included scan statuses | [optional] 
**liveUpdateIdContains** | **[String]** | Free-text filter by live update ID (supports multiple values) | [optional] 
**osTypes** | **[String]** | Included OS types | [optional] 
**appsVulnerabilityStatuses** | **[String]** | Apps vulnerability status in | [optional] 
**remoteProfilingStatesNin** | **[String]** | Do not include these Agent remote profiling states | [optional] 
**filteredSiteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**userActionsNeeded** | **[String]** | Included pending user actions | [optional] 
**osArch** | **String** | OS architecture | [optional] 
**adComputerNameContains** | **[String]** | Free-text filter by Active Directory computer name string (supports multiple values) | [optional] 
**cloudInstanceIdContains** | **[String]** | Free-text filter by cloud instance id(supports multiple values) | [optional] 
**agentVersions** | **[String]** | Agent versions to include | [optional] 
**adQueryContains** | **[String]** | Free-text filter by Active Directory string (supports multiple values) | [optional] 
**locationEnabled** | **[Boolean]** | The agents supports Location Awareness and it is enabled for the agent's group | [optional] 
**cloudProviderNin** | **[String]** | Exclude Agents from these cloud provider | [optional] 
**isPendingUninstall** | **Boolean** | Include only Agents with pending uninstall requests | [optional] 
**k8sNodeLabelsContains** | **[String]** | Free-text filter by K8s node labels (supports multiple values) | [optional] 
**tagsData** | **String** | Filter agents by their assigned tags. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. | [optional] 
**firewallEnabled** | **[Boolean]** | The agents supports Firewall Control and it is enabled for the agent's group | [optional] 
**domainsNin** | **[String]** | Not included network domains | [optional] 
**gcpServiceAccountContains** | **[String]** | Free-text filter by gcp service account (supports multiple values) | [optional] 
**cloudLocationContains** | **[String]** | Free-text filter by cloud location (supports multiple values) | [optional] 
**networkStatuses** | **[String]** | Included network statuses | [optional] 
**k8sTypeContains** | **[String]** | Free-text filter by K8s type(supports multiple values) | [optional] 
**networkInterfaceGatewayMacAddressContains** | **[String]** | Free-text filter by Gateway MAC address (supports multiple values) | [optional] 
**cpuCountBetween** | **String** | Possible number of CPU cores (inclusive) | [optional] 
**operationalStatesNin** | **[String]** | Do not include these Agent operational states | [optional] 
**k8sVersionContains** | **[String]** | Free-text filter by K8s version (supports multiple values) | [optional] 
**installerTypes** | **[String]** | Include only Agents installed with these package types | [optional] 
**adUserMemberContains** | **[String]** | Free-text filter by Active Directory user groups string (supports multiple values) | [optional] 
**infected** | **Boolean** | Include only Agents with at least one active threat | [optional] 
**missingPermissions** | **[String]** | Included missing permissions | [optional] 
**installerTypesNin** | **[String]** | Exclude Agents installed with these package types | [optional] 
**machineTypesNin** | **[String]** | Not included machine types | [optional] 
**isDecommissioned** | **[Boolean]** | Include active, decommissioned or both | [optional] 
**rangerStatusesNin** | **[String]** | Do not include these Ranger Statuses | [optional] 
**cloudInstanceSizeContains** | **[String]** | Free-text filter by cloud instance size(supports multiple values) | [optional] 
**rangerVersionsNin** | **[String]** | Ranger versions not to include | [optional] 
**consoleMigrationStatuses** | **[String]** | Migration status in | [optional] 
**azureResourceGroupContains** | **[String]** | Free-text filter by azure resource group(supports multiple values) | [optional] 
**uuidContains** | **[String]** | Free-text filter by Agent UUID (supports multiple values) | [optional] 
**networkStatusesNin** | **[String]** | Included network statuses | [optional] 
**adQuery** | **String** | An Active Directory query string | [optional] 


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




<a name="[OsTypesNinEnum]"></a>
## Enum: [OsTypesNinEnum]


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




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




