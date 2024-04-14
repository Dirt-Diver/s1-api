# S1MgmtApi.AgentsSchemasAgentViewSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**licenseKey** | **String** | License key | [optional] 
**machineType** | **String** | Machine type | [optional] 
**mitigationModeSuspicious** | **String** | Mitigation mode policy for suspicious activity | [optional] 
**inRemoteShellSession** | **Boolean** | Is the Agent in a remote shell session | [optional] 
**cpuCount** | **Number** | Number of CPUs | [optional] 
**externalIp** | **String** | External IPv4 address | [optional] 
**hasContainerizedWorkload** | **Boolean** | Indicates whether the agent protects containerized workload at the moment | [optional] 
**threatRebootRequired** | **Boolean** | Has at least one threat with at least one mitigation action that is pending reboot to succeed | [optional] 
**detectionState** | **String** | Detection State | [optional] 
**consoleMigrationStatus** | **String** | What step the agent is at in the process of migrating to another console, if any | [optional] 
**lastSuccessfulScanDate** | **Date** | Last successful full disc scan time | [optional] 
**agentVersion** | **String** | Agent version | [optional] 
**lastLoggedInUserName** | **String** | Last logged in user name | [optional] 
**encryptedApplications** | **Boolean** | Disk encryption status | [optional] 
**cloudProviders** | [**{String: AgentsSchemasAgentViewSchemaMany200CloudProviders}**](AgentsSchemasAgentViewSchemaMany200CloudProviders.md) | Cloud providers for this agent | [optional] 
**tags** | [**AgentsSchemasAgentViewSchemaMany200Tags**](AgentsSchemasAgentViewSchemaMany200Tags.md) |  | [optional] 
**rangerVersion** | **String** | The version of Ranger | [optional] 
**isActive** | **Boolean** | Indicates if the agent was recently active | [optional] 
**mitigationMode** | **String** | Agent mitigation mode policy | [optional] 
**operationalState** | **String** | Agent operational state | [optional] 
**accountId** | **String** | A reference to the containing account | [optional] 
**updatedAt** | **Date** | Updated at | [optional] 
**modelName** | **String** | Device model | [optional] 
**totalMemory** | **Number** | Memory size (MB) | [optional] 
**coreCount** | **Number** | CPU cores | [optional] 
**serialNumber** | **String** | Serial Number of the endpoint | [optional] 
**activeThreats** | **Number** | Current number of active threats | [optional] 
**activeDirectory** | [**AgentsSchemasAgentViewSchemaMany200ActiveDirectory**](AgentsSchemasAgentViewSchemaMany200ActiveDirectory.md) |  | [optional] 
**allowRemoteShell** | **Boolean** | Agent is capable and policy enabled for remote shell | [optional] 
**locationType** | **String** | Reported location type | [optional] 
**groupIp** | **String** | IP Address subnet | [optional] 
**groupUpdatedAt** | **Date** | Group updated at | [optional] 
**networkQuarantineEnabled** | **Boolean** | Network quarantine enabled | [optional] 
**scanStartedAt** | **Date** | Start time of last scan | [optional] 
**groupId** | **String** | A reference to the containing network group | [optional] 
**lastActiveDate** | **Date** | Last active date | [optional] 
**policyUpdatedAt** | **Date** | Policy updated at | [optional] 
**siteName** | **String** | Name of the containing site | [optional] 
**osUsername** | **String** | Os username | [optional] 
**osType** | **String** | OS type | [optional] 
**showAlertIcon** | **Boolean** | Show alert icon in agent view and details | [optional] 
**appsVulnerabilityStatus** | **String** | Apps vulnerability status | [optional] 
**isUpToDate** | **Boolean** | Indicates if the agent version is up to date | [optional] 
**rangerStatus** | **String** | Is Agent disabled as a Ranger | [optional] 
**osRevision** | **String** | Os revision | [optional] 
**remoteProfilingState** | **String** | Agent remote profiling state | [optional] 
**storageType** | **String** | Storage Type | [optional] 
**operationalStateExpiration** | **Date** | Agent operational state expiration | [optional] 
**computerName** | **String** | Computer name | [optional] 
**uuid** | **String** | Agent's universally unique identifier | [optional] 
**lastIpToMgmt** | **String** | The last ip used to connect to the Management console | [optional] 
**accountName** | **String** | Name of the containing account | [optional] 
**networkStatus** | **String** | Agent's network connectivity status | [optional] 
**scanStatus** | **String** | Last scan status | [optional] 
**osArch** | **String** | Os arch | [optional] 
**locations** | [**[AgentsSchemasAgentViewSchemaMany200Locations]**](AgentsSchemasAgentViewSchemaMany200Locations.md) | A list of locations reported by the Agent | [optional] 
**isUninstalled** | **Boolean** | Indicates if Agent was removed from the device | [optional] 
**storageName** | **String** | Storage Name | [optional] 
**isPendingUninstall** | **Boolean** | Agent with a pending uninstall request | [optional] 
**proxyStates** | [**AgentsSchemasAgentViewSchemaMany200ProxyStates**](AgentsSchemasAgentViewSchemaMany200ProxyStates.md) |  | [optional] 
**remoteProfilingStateExpiration** | **Date** | Agent remote profiling state expiration inseconds | [optional] 
**osName** | **String** | Os name | [optional] 
**scanFinishedAt** | **Date** | Finish time of last scan (If applicable) | [optional] 
**osStartTime** | **Date** | Last boot time | [optional] 
**siteId** | **String** | A reference to the containing site | [optional] 
**userActionsNeeded** | **[String]** | A list of pending user actions. List items possible values: \"none, user_action_needed, reboot_needed, upgrade_needed, incompatible_os, unprotected, rebootless_without_dynamic_detection, extended_exclusions_partially_accepted, reboot_required, pending_deprecation, ne_not_running, ne_cf_not_active\". | [optional] 
**cpuId** | **String** | CPU model | [optional] 
**containerizedWorkloadCounts** | [**AgentsSchemasAgentViewSchemaMany200ContainerizedWorkloadCounts**](AgentsSchemasAgentViewSchemaMany200ContainerizedWorkloadCounts.md) |  | [optional] 
**registeredAt** | **Date** | Time of first registration to management console (similar to createdAt) | [optional] 
**id** | **String** | Agent ID | [optional] 
**groupName** | **String** | Name of the containing network group | [optional] 
**isDecommissioned** | **Boolean** | Is Agent decommissioned | [optional] 
**installerType** | **String** | Installer package type (file extension) | [optional] 
**infected** | **Boolean** | Indicates if the Agent has active threats | [optional] 
**externalId** | **String** | External id set by customer | [optional] 
**fullDiskScanLastUpdatedAt** | **Date** | Last time scan status was updated | [optional] 
**networkInterfaces** | [**[AgentsSchemasAgentViewSchemaMany200NetworkInterfaces]**](AgentsSchemasAgentViewSchemaMany200NetworkInterfaces.md) | Device's network interfaces | [optional] 
**locationEnabled** | **Boolean** | Location enabled | [optional] 
**firstFullModeTime** | **Date** | Date of the first time the Agent moved to full or slim detection modes | [optional] 
**firewallEnabled** | **Boolean** | Firewall enabled | [optional] 
**missingPermissions** | **[String]** | A list of missing permissions. List items possible values: \"user_action_needed_fda, user_action_needed_rs_fda, user_action_needed_fda_helper, user_action_needed_fda_sentineld, user_action_needed_bluetooth_per, user_action_needed_network, user_action_needed_notifications\". | [optional] 
**createdAt** | **Date** | Created at | [optional] 
**domain** | **String** | Network domain | [optional] 
**scanAbortedAt** | **Date** | Abort time of last scan (If applicable) | [optional] 


<a name="MachineTypeEnum"></a>
## Enum: MachineTypeEnum


* `unknown` (value: `"unknown"`)

* `desktop` (value: `"desktop"`)

* `laptop` (value: `"laptop"`)

* `server` (value: `"server"`)

* `kubernetesNode` (value: `"kubernetes node"`)

* `storage` (value: `"storage"`)

* `kubernetesPod` (value: `"kubernetes pod"`)

* `ecsTask` (value: `"ecs task"`)




<a name="MitigationModeSuspiciousEnum"></a>
## Enum: MitigationModeSuspiciousEnum


* `detect` (value: `"detect"`)

* `protect` (value: `"protect"`)




<a name="ConsoleMigrationStatusEnum"></a>
## Enum: ConsoleMigrationStatusEnum


* `NA` (value: `"N/A"`)

* `pending` (value: `"Pending"`)

* `migrated` (value: `"Migrated"`)

* `failed` (value: `"Failed"`)




<a name="MitigationModeEnum"></a>
## Enum: MitigationModeEnum


* `detect` (value: `"detect"`)

* `protect` (value: `"protect"`)




<a name="LocationTypeEnum"></a>
## Enum: LocationTypeEnum


* `notApplicable` (value: `"not_applicable"`)

* `notSupported` (value: `"not_supported"`)

* `specific` (value: `"specific"`)

* `fallback` (value: `"fallback"`)




<a name="OsTypeEnum"></a>
## Enum: OsTypeEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="AppsVulnerabilityStatusEnum"></a>
## Enum: AppsVulnerabilityStatusEnum


* `patchRequired` (value: `"patch_required"`)

* `upToDate` (value: `"up_to_date"`)

* `notApplicable` (value: `"not_applicable"`)




<a name="RangerStatusEnum"></a>
## Enum: RangerStatusEnum


* `notApplicable` (value: `"NotApplicable"`)

* `enabled` (value: `"Enabled"`)

* `disabled` (value: `"Disabled"`)




<a name="NetworkStatusEnum"></a>
## Enum: NetworkStatusEnum


* `connected` (value: `"connected"`)

* `disconnected` (value: `"disconnected"`)

* `connecting` (value: `"connecting"`)

* `disconnecting` (value: `"disconnecting"`)




<a name="ScanStatusEnum"></a>
## Enum: ScanStatusEnum


* `none` (value: `"none"`)

* `started` (value: `"started"`)

* `aborted` (value: `"aborted"`)

* `finished` (value: `"finished"`)




<a name="OsArchEnum"></a>
## Enum: OsArchEnum


* `_32Bit` (value: `"32 bit"`)

* `_64Bit` (value: `"64 bit"`)

* `aRM64` (value: `"ARM64"`)




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




<a name="InstallerTypeEnum"></a>
## Enum: InstallerTypeEnum


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




