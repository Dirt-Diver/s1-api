# S1MgmtApi.AgentsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiAgentsApplicationsGet**](AgentsApi.md#webApiAgentsApplicationsGet) | **GET** /web/api/v2.1/agents/applications | Applications
[**webApiAgentsCountGet**](AgentsApi.md#webApiAgentsCountGet) | **GET** /web/api/v2.1/agents/count | Count Agents
[**webApiAgentsGet**](AgentsApi.md#webApiAgentsGet) | **GET** /web/api/v2.1/agents | Get Agents
[**webApiAgentsPassphrasesGet**](AgentsApi.md#webApiAgentsPassphrasesGet) | **GET** /web/api/v2.1/agents/passphrases | Get Passphrase
[**webApiAgentsProcessesGet**](AgentsApi.md#webApiAgentsProcessesGet) | **GET** /web/api/v2.1/agents/processes | Processes
[**webApiAgentsTagsGet**](AgentsApi.md#webApiAgentsTagsGet) | **GET** /web/api/v2.1/agents/tags | Get the endpoint tags that match the filters.
[**webApiAgentsagentIdLocalUpgradeAuthorizationGet**](AgentsApi.md#webApiAgentsagentIdLocalUpgradeAuthorizationGet) | **GET** /web/api/v2.1/agents/{agent_id}/local-upgrade-authorization | Get local upgrade agent authorization
[**webApiAgentsagentIdUploadsactivityIdGet**](AgentsApi.md#webApiAgentsagentIdUploadsactivityIdGet) | **GET** /web/api/v2.1/agents/{agent_id}/uploads/{activity_id} | Export Agent Logs
[**webApiExportAgentsGet**](AgentsApi.md#webApiExportAgentsGet) | **GET** /web/api/v2.1/export/agents | Export Agents
[**webApiExportAgentsLightGet**](AgentsApi.md#webApiExportAgentsLightGet) | **GET** /web/api/v2.1/export/agents-light | Export Agents - Light


<a name="webApiAgentsApplicationsGet"></a>
# **webApiAgentsApplicationsGet**
> AgentsSchemasAgentApplicationsSchemaMany200 webApiAgentsApplicationsGet(ids)

Applications

Get the installed applications for a specific Agent. <BR>To get the Agent ID, run \"agents\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsApi();

var ids = ["ids_example"]; // [String] | Agent ID list. Example: \"225494730938493804,225494730938493915\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAgentsApplicationsGet(ids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[String]**](String.md)| Agent ID list. Example: \"225494730938493804,225494730938493915\". | 

### Return type

[**AgentsSchemasAgentApplicationsSchemaMany200**](AgentsSchemasAgentApplicationsSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAgentsCountGet"></a>
# **webApiAgentsCountGet**
> AgentsSchemasAgentsCountSchema200 webApiAgentsCountGet(opts)

Count Agents

Get the count of Agents that match a filter. This command is useful to run before you run other commands. You will be able to manage Agent maintenance better if you know how many Agents will get a command that takes time (such as Update Software).

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsApi();

var opts = { 
  'agentVersionsNin': ["agentVersionsNin_example"], // [String] | Agent versions not to include. Example: \"2.0.0.0,2.1.5.144\".
  'registeredAtBetween': "registeredAtBetween_example", // String | Date range for first registration time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'registeredAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'adComputerQueryContains': ["adComputerQueryContains_example"], // [String] | Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,Windows\".
  'mitigationModeSuspicious': "mitigationModeSuspicious_example", // String | Mitigation mode policy for suspicious activity. Example: \"detect\".
  'hasLocalConfiguration': true, // Boolean | Agent has a local configuration set
  'adUserQueryContains': ["adUserQueryContains_example"], // [String] | Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,John\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes (sub-string match). Note: Device's physical addresses will be matched if they start with the search term only (no match if they contain the term). Example: \"Linux\".
  'cloudProvider': ["cloudProvider_example"], // [String] | Agents from which cloud provider
  'coreCountGt': 56, // Number | CPU cores (more than)
  'decommissionedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'registeredAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'totalMemoryGt': 56, // Number | Memory size (MB, more than)
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'hasContainerizedWorkload': true, // Boolean | Include only Agents protecting containerized workloads
  'cloudImageContains': ["cloudImageContains_example"], // [String] | Free-text filter by cloud image (supports multiple values)
  'threatCreatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'appsVulnerabilityStatusesNin': ["appsVulnerabilityStatusesNin_example"], // [String] | Apps vulnerability status nin. Example: \"patch_required\".
  'scanStatusesNin': ["scanStatusesNin_example"], // [String] | Not included scan statuses. Example: \"started,aborted\".
  'adComputerMemberContains': ["adComputerMemberContains_example"], // [String] | Free-text filter by Active Directory computer groups string (supports multiple values). Example: \"DC=sentinelone\".
  'coreCountLte': 56, // Number | CPU cores (less than or equal)
  'rangerVersions': ["rangerVersions_example"], // [String] | Ranger versions to include. Example: \"2.0.0.0,2.1.5.144\".
  'machineTypes': ["machineTypes_example"], // [String] | Included machine types. Example: \"laptop,desktop\".
  'coreCountGte': 56, // Number | CPU cores (more than or equal)
  'locationIds': ["locationIds_example"], // [String] | Include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\".
  'locationIdsNin': ["locationIdsNin_example"], // [String] | Do not include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\".
  'gatewayIp': "gatewayIp_example", // String | Gateway ip. Example: \"192.168.0.1\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'missingPermissionsNin': ["missingPermissionsNin_example"], // [String] | Excluded missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\".
  'migrationStatus': "migrationStatus_example", // String | Migration status. Example: \"N/A\".
  'threatRebootRequired': [true], // [Boolean] | Has at least one threat with at least one mitigation action pending reboot to succeed
  'serialNumberContains': ["serialNumberContains_example"], // [String] | Free-text filter by Serial Number (supports multiple values)
  'decommissionedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'lastSuccessfulScanDateBetween': "lastSuccessfulScanDateBetween_example", // String | Date range for last successful full disk scan(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'lastActiveDateLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'lastActiveDateBetween': "lastActiveDateBetween_example", // String | Date range for last active date(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'networkQuarantineEnabled': [true], // [Boolean] | The agents supports Network Quarantine Control and its enabled for the agent's group
  'cloudTagsContains': ["cloudTagsContains_example"], // [String] | Free-text filter by cloud tags (supports multiple values)
  'threatCreatedAtBetween': "threatCreatedAtBetween_example", // String | Agents with threats reported in a date range (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'encryptedApplications': true, // Boolean | Disk encryption status
  'isUninstalled': [true], // [Boolean] | Include installed, uninstalled or both. Example: \"True,False\".
  'networkInterfacePhysicalContains': ["networkInterfacePhysicalContains_example"], // [String] | Free-text filter by MAC address (supports multiple values). Example: \"aa:0f,:41:\".
  'agentVersionGte': "agentVersionGte_example", // String | Agents versions greater than or equal to given version. Example: \"2.5.1.1320\".
  'lastSuccessfulScanDateGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'operationalStates': ["operationalStates_example"], // [String] | Agent operational state
  'adUserNameContains': ["adUserNameContains_example"], // [String] | Free-text filter by Active Directory username string (supports multiple values). Example: \"DC=sentinelone\".
  'osTypesNin': ["osTypesNin_example"], // [String] | Not included OS types. Example: \"windows\".
  'csvFilterId': "csvFilterId_example", // String | The ID of the CSV file to filter by. Example: \"225494730938493804\".
  'isActive': true, // Boolean | Include only active Agents
  'mitigationMode': "mitigationMode_example", // String | Agent mitigation mode policy. Example: \"detect\".
  'awsSubnetIdsContains': ["awsSubnetIdsContains_example"], // [String] | Free-text filter by aws subnet ids (supports multiple values)
  'agentVersionLte': "agentVersionLte_example", // String | Agents versions less than or equal to given version. Example: \"2.5.1.1320\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'osVersionContains': ["osVersionContains_example"], // [String] | Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
  'externalIpContains': ["externalIpContains_example"], // [String] | Free-text filter by visible IP (supports multiple values). Example: \"205,127.0\".
  'awsSecurityGroupsContains': ["awsSecurityGroupsContains_example"], // [String] | Free-text filter by aws securityGroups(supports multiple values)
  'k8sNodeNameContains': ["k8sNodeNameContains_example"], // [String] | Free-text filter by K8s node name (supports multiple values)
  'agentVersionBetween': "agentVersionBetween_example", // String | Version range for agent version (format: <from_version>-<to_version>, inclusive). Example: \"2.0.0.0-2.1.5.144\".
  'activeThreats': 56, // Number | Include Agents with this amount of active threats. Example: \"3\".
  'hasTags': true, // Boolean | Include only Agents that have any tags assigned if True, or none if False
  'agentNamespaceContains': ["agentNamespaceContains_example"], // [String] | Free-text filter by agent namespace (supports multiple values)
  'cpuCountLt': 56, // Number | Number of CPUs (less than)
  'registeredAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'networkInterfaceInetContains': ["networkInterfaceInetContains_example"], // [String] | Free-text filter by local IP (supports multiple values). Example: \"192,10.0.0\".
  'computerNameContains': ["computerNameContains_example"], // [String] | Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\".
  'cloudNetworkContains': ["cloudNetworkContains_example"], // [String] | Free-text filter by cloud network (supports multiple values)
  'remoteOpsForensicsSupported': true, // Boolean | Include only agents that has Remote Ops Forensicsfeature supported
  'remoteProfilingStates': ["remoteProfilingStates_example"], // [String] | Agent remote profiling state
  'filteredGroupIds': ["filteredGroupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'agentPodNameContains': ["agentPodNameContains_example"], // [String] | Free-text filter by agent pod name (supports multiple values)
  'userActionsNeededNin': ["userActionsNeededNin_example"], // [String] | Excluded pending user actions. Example: \"reboot_needed,upgrade_needed\".
  'rangerStatuses': ["rangerStatuses_example"], // [String] | Status of Ranger. Example: \"NotApplicable\".
  'computerNameLike': "computerNameLike_example", // String | Match computer name partially (substring). Example: \"Lab1\".
  'externalIdContains': ["externalIdContains_example"], // [String] | Free-text filter by external ID (Customer ID). Example: \"Tag#1 - monitoring,Performance machine\".
  'createdAtBetween': "createdAtBetween_example", // String | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'consoleMigrationStatusesNin': ["consoleMigrationStatusesNin_example"], // [String] | Migration status nin. Example: \"N/A\".
  'cpuIdContains': ["cpuIdContains_example"], // [String] | Free-text filter by CPU name (supports multiple values). Example: \"Intel,AMD\".
  'coreCountBetween': "coreCountBetween_example", // String | Possible number of CPU cores (inclusive). Example: \"2-8\".
  'isUpToDate': true, // Boolean | Include only Agents with updated software
  'threatCreatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'rangerStatus': "rangerStatus_example", // String | [DEPRECATED] Use rangerStatuses. Example: \"NotApplicable\".
  'totalMemoryBetween': "totalMemoryBetween_example", // String | Total memory range (GB, inclusive). Example: \"4-8\".
  'lastSuccessfulScanDateLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'domains': ["domains_example"], // [String] | Included network domains. Example: \"mybusiness.net,workgroup\".
  'awsRoleContains': ["awsRoleContains_example"], // [String] | Free-text filter by aws role(supports multiple values)
  'lastLoggedInUserNameContains': ["lastLoggedInUserNameContains_example"], // [String] | Free-text filter by username (supports multiple values). Example: \"admin,johnd1\".
  'cpuCountGt': 56, // Number | Number of CPUs (more than)
  'cloudAccountContains': ["cloudAccountContains_example"], // [String] | Free-text filter by cloud account (supports multiple values)
  'clusterNameContains': ["clusterNameContains_example"], // [String] | Free-text filter by cluster name (supports multiple values)
  'scanStatuses': ["scanStatuses_example"], // [String] | Included scan statuses. Example: \"started,aborted\".
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'ids': ["ids_example"], // [String] | A list of Agent IDs. Example: \"225494730938493804,225494730938493915\".
  'liveUpdateIdContains': ["liveUpdateIdContains_example"], // [String] | Free-text filter by live update ID (supports multiple values)
  'computerName': "computerName_example", // String | Computer name. Example: \"My Office Desktop\".
  'uuid': "uuid_example", // String | Agent's universally unique identifier. Example: \"ff819e70af13be381993075eb0ce5f2f6de05be2\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types. Example: \"windows\".
  'appsVulnerabilityStatuses': ["appsVulnerabilityStatuses_example"], // [String] | Apps vulnerability status in. Example: \"patch_required\".
  'lastActiveDateGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatContentHash': "threatContentHash_example", // String | Include only Agents that have at least one threat with this content hash. Example: \"cf23df2207d99a74fbe169e3eba035e633b65d94\".
  'remoteProfilingStatesNin': ["remoteProfilingStatesNin_example"], // [String] | Do not include these Agent remote profiling states
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'scanStatus': "scanStatus_example", // String | Scan status. Example: \"none\".
  'filteredSiteIds': ["filteredSiteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'userActionsNeeded': ["userActionsNeeded_example"], // [String] | Included pending user actions. Example: \"reboot_needed,upgrade_needed\".
  'registeredAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'osArch': "osArch_example", // String | OS architecture. Example: \"32 bit\".
  'adComputerNameContains': ["adComputerNameContains_example"], // [String] | Free-text filter by Active Directory computer name string (supports multiple values). Example: \"DC=sentinelone\".
  'totalMemoryGte': 56, // Number | Memory size (MB, more than or equal)
  'threatHidden': true, // Boolean | Include only Agents with at least one hidden threat
  'lastActiveDateGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatCreatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'cpuCountGte': 56, // Number | Number of CPUs (more than or equal)
  'cloudInstanceIdContains': ["cloudInstanceIdContains_example"], // [String] | Free-text filter by cloud instance id(supports multiple values)
  'agentVersions': ["agentVersions_example"], // [String] | Agent versions to include. Example: \"2.0.0.0,2.1.5.144\".
  'adQueryContains': ["adQueryContains_example"], // [String] | Free-text filter by Active Directory string (supports multiple values). Example: \"DC=sentinelone\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'locationEnabled': [true], // [Boolean] | The agents supports Location Awareness and it is enabled for the agent's group
  'cloudProviderNin': ["cloudProviderNin_example"], // [String] | Exclude Agents from these cloud provider
  'isPendingUninstall': true, // Boolean | Include only Agents with pending uninstall requests
  'k8sNodeLabelsContains': ["k8sNodeLabelsContains_example"], // [String] | Free-text filter by K8s node labels (supports multiple values)
  'decommissionedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'tagsData': "tagsData_example", // String | Filter agents by their assigned tags. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\".
  'agentVersionGt': "agentVersionGt_example", // String | Agents versions greater than given version. Example: \"2.5.1.1320\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatMitigationStatus': "threatMitigationStatus_example", // String | Include only Agents that have threats with this mitigation status. Example: \"mitigated\".
  'lastSuccessfulScanDateGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'firewallEnabled': [true], // [Boolean] | The agents supports Firewall Control and it is enabled for the agent's group
  'decommissionedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'decommissionedAtBetween': "decommissionedAtBetween_example", // String | Date range for decommission time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'domainsNin': ["domainsNin_example"], // [String] | Not included network domains. Example: \"mybusiness.net,workgroup\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'gcpServiceAccountContains': ["gcpServiceAccountContains_example"], // [String] | Free-text filter by gcp service account (supports multiple values)
  'threatResolved': true, // Boolean | Include only Agents with at least one resolved threat
  'cloudLocationContains': ["cloudLocationContains_example"], // [String] | Free-text filter by cloud location (supports multiple values)
  'lastActiveDateLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'networkStatuses': ["networkStatuses_example"], // [String] | Included network statuses. Example: \"connected,connecting\".
  'k8sTypeContains': ["k8sTypeContains_example"], // [String] | Free-text filter by K8s type(supports multiple values)
  'networkInterfaceGatewayMacAddressContains': ["networkInterfaceGatewayMacAddressContains_example"], // [String] | Free-text filter by Gateway MAC address (supports multiple values). Example: \"aa:0f,:41:\".
  'cpuCountBetween': "cpuCountBetween_example", // String | Possible number of CPU cores (inclusive). Example: \"2-8\".
  'operationalStatesNin': ["operationalStatesNin_example"], // [String] | Do not include these Agent operational states
  'totalMemoryLt': 56, // Number | Memory size (MB, less than)
  'k8sVersionContains': ["k8sVersionContains_example"], // [String] | Free-text filter by K8s version (supports multiple values)
  'installerTypes': ["installerTypes_example"], // [String] | Include only Agents installed with these package types. Example: \".msi\".
  'adUserMemberContains': ["adUserMemberContains_example"], // [String] | Free-text filter by Active Directory user groups string (supports multiple values). Example: \"DC=sentinelone\".
  'infected': true, // Boolean | Include only Agents with at least one active threat
  'coreCountLt': 56, // Number | CPU cores (less than)
  'missingPermissions': ["missingPermissions_example"], // [String] | Included missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\".
  'installerTypesNin': ["installerTypesNin_example"], // [String] | Exclude Agents installed with these package types. Example: \".msi\".
  'machineTypesNin': ["machineTypesNin_example"], // [String] | Not included machine types. Example: \"laptop,desktop\".
  'filterId': "filterId_example", // String | Include all Agents matching this saved filter. Example: \"225494730938493804\".
  'isDecommissioned': [true], // [Boolean] | Include active, decommissioned or both. Example: \"True,False\".
  'agentVersionLt': "agentVersionLt_example", // String | Agents versions less than given version. Example: \"2.5.1.1320\".
  'rangerStatusesNin': ["rangerStatusesNin_example"], // [String] | Do not include these Ranger Statuses. Example: \"NotApplicable\".
  'cloudInstanceSizeContains': ["cloudInstanceSizeContains_example"], // [String] | Free-text filter by cloud instance size(supports multiple values)
  'rangerVersionsNin': ["rangerVersionsNin_example"], // [String] | Ranger versions not to include. Example: \"2.0.0.0,2.1.5.144\".
  'rsoLevel': "rsoLevel_example", // String | Supported Remote Script Orchestration level. Example: \"none\".
  'cpuCountLte': 56, // Number | Number of CPUs (less than or equal)
  'updatedAtBetween': "updatedAtBetween_example", // String | Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'consoleMigrationStatuses': ["consoleMigrationStatuses_example"], // [String] | Migration status in. Example: \"N/A\".
  'azureResourceGroupContains': ["azureResourceGroupContains_example"], // [String] | Free-text filter by azure resource group(supports multiple values)
  'threatCreatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'uuidContains': ["uuidContains_example"], // [String] | Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\".
  'networkStatusesNin': ["networkStatusesNin_example"], // [String] | Included network statuses. Example: \"connected,connecting\".
  'totalMemoryLte': 56, // Number | Memory size (MB, less than or equal)
  'activeThreatsGt': 56, // Number | Include Agents with at least this amount of active threats. Example: \"5\".
  'lastSuccessfulScanDateLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'adQuery': "adQuery_example", // String | An Active Directory query string. Example: \"CN=Managers,DC=sentinelone,DC=com\".
  'uuids': ["uuids_example"] // [String] | A list of included UUIDs. Example: \"ff819e70af13be381993075eb0ce5f2f6de05b11,ff819e70af13be381993075eb0ce5f2f6de05c22\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAgentsCountGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentVersionsNin** | [**[String]**](String.md)| Agent versions not to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **registeredAtBetween** | **String**| Date range for first registration time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **registeredAtLte** | **Date**| Agents registered before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **adComputerQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,Windows\". | [optional] 
 **mitigationModeSuspicious** | **String**| Mitigation mode policy for suspicious activity. Example: \"detect\". | [optional] 
 **hasLocalConfiguration** | **Boolean**| Agent has a local configuration set | [optional] 
 **adUserQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,John\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes (sub-string match). Note: Device's physical addresses will be matched if they start with the search term only (no match if they contain the term). Example: \"Linux\". | [optional] 
 **cloudProvider** | [**[String]**](String.md)| Agents from which cloud provider | [optional] 
 **coreCountGt** | **Number**| CPU cores (more than) | [optional] 
 **decommissionedAtGt** | **Date**| Agents decommissioned after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **registeredAtGte** | **Date**| Agents registered after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **totalMemoryGt** | **Number**| Memory size (MB, more than) | [optional] 
 **updatedAtGt** | **Date**| Agents updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **hasContainerizedWorkload** | **Boolean**| Include only Agents protecting containerized workloads | [optional] 
 **cloudImageContains** | [**[String]**](String.md)| Free-text filter by cloud image (supports multiple values) | [optional] 
 **threatCreatedAtGte** | **Date**| Agents with threats reported after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **appsVulnerabilityStatusesNin** | [**[String]**](String.md)| Apps vulnerability status nin. Example: \"patch_required\". | [optional] 
 **scanStatusesNin** | [**[String]**](String.md)| Not included scan statuses. Example: \"started,aborted\". | [optional] 
 **adComputerMemberContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer groups string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **coreCountLte** | **Number**| CPU cores (less than or equal) | [optional] 
 **rangerVersions** | [**[String]**](String.md)| Ranger versions to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **machineTypes** | [**[String]**](String.md)| Included machine types. Example: \"laptop,desktop\". | [optional] 
 **coreCountGte** | **Number**| CPU cores (more than or equal) | [optional] 
 **locationIds** | [**[String]**](String.md)| Include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **locationIdsNin** | [**[String]**](String.md)| Do not include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **gatewayIp** | **String**| Gateway ip. Example: \"192.168.0.1\". | [optional] 
 **updatedAtLte** | **Date**| Agents updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **missingPermissionsNin** | [**[String]**](String.md)| Excluded missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\". | [optional] 
 **migrationStatus** | **String**| Migration status. Example: \"N/A\". | [optional] 
 **threatRebootRequired** | [**[Boolean]**](Boolean.md)| Has at least one threat with at least one mitigation action pending reboot to succeed | [optional] 
 **serialNumberContains** | [**[String]**](String.md)| Free-text filter by Serial Number (supports multiple values) | [optional] 
 **decommissionedAtGte** | **Date**| Agents decommissioned after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **lastSuccessfulScanDateBetween** | **String**| Date range for last successful full disk scan(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **lastActiveDateLte** | **Date**| Agents last active before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **lastActiveDateBetween** | **String**| Date range for last active date(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **networkQuarantineEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Network Quarantine Control and its enabled for the agent's group | [optional] 
 **cloudTagsContains** | [**[String]**](String.md)| Free-text filter by cloud tags (supports multiple values) | [optional] 
 **threatCreatedAtBetween** | **String**| Agents with threats reported in a date range (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **encryptedApplications** | **Boolean**| Disk encryption status | [optional] 
 **isUninstalled** | [**[Boolean]**](Boolean.md)| Include installed, uninstalled or both. Example: \"True,False\". | [optional] 
 **networkInterfacePhysicalContains** | [**[String]**](String.md)| Free-text filter by MAC address (supports multiple values). Example: \"aa:0f,:41:\". | [optional] 
 **agentVersionGte** | **String**| Agents versions greater than or equal to given version. Example: \"2.5.1.1320\". | [optional] 
 **lastSuccessfulScanDateGte** | **Date**| Agents last successful full disk scan after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **operationalStates** | [**[String]**](String.md)| Agent operational state | [optional] 
 **adUserNameContains** | [**[String]**](String.md)| Free-text filter by Active Directory username string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **osTypesNin** | [**[String]**](String.md)| Not included OS types. Example: \"windows\". | [optional] 
 **csvFilterId** | **String**| The ID of the CSV file to filter by. Example: \"225494730938493804\". | [optional] 
 **isActive** | **Boolean**| Include only active Agents | [optional] 
 **mitigationMode** | **String**| Agent mitigation mode policy. Example: \"detect\". | [optional] 
 **awsSubnetIdsContains** | [**[String]**](String.md)| Free-text filter by aws subnet ids (supports multiple values) | [optional] 
 **agentVersionLte** | **String**| Agents versions less than or equal to given version. Example: \"2.5.1.1320\". | [optional] 
 **updatedAtGte** | **Date**| Agents updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osVersionContains** | [**[String]**](String.md)| Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **externalIpContains** | [**[String]**](String.md)| Free-text filter by visible IP (supports multiple values). Example: \"205,127.0\". | [optional] 
 **awsSecurityGroupsContains** | [**[String]**](String.md)| Free-text filter by aws securityGroups(supports multiple values) | [optional] 
 **k8sNodeNameContains** | [**[String]**](String.md)| Free-text filter by K8s node name (supports multiple values) | [optional] 
 **agentVersionBetween** | **String**| Version range for agent version (format: <from_version>-<to_version>, inclusive). Example: \"2.0.0.0-2.1.5.144\". | [optional] 
 **activeThreats** | **Number**| Include Agents with this amount of active threats. Example: \"3\". | [optional] 
 **hasTags** | **Boolean**| Include only Agents that have any tags assigned if True, or none if False | [optional] 
 **agentNamespaceContains** | [**[String]**](String.md)| Free-text filter by agent namespace (supports multiple values) | [optional] 
 **cpuCountLt** | **Number**| Number of CPUs (less than) | [optional] 
 **registeredAtLt** | **Date**| Agents registered before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **networkInterfaceInetContains** | [**[String]**](String.md)| Free-text filter by local IP (supports multiple values). Example: \"192,10.0.0\". | [optional] 
 **computerNameContains** | [**[String]**](String.md)| Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\". | [optional] 
 **cloudNetworkContains** | [**[String]**](String.md)| Free-text filter by cloud network (supports multiple values) | [optional] 
 **remoteOpsForensicsSupported** | **Boolean**| Include only agents that has Remote Ops Forensicsfeature supported | [optional] 
 **remoteProfilingStates** | [**[String]**](String.md)| Agent remote profiling state | [optional] 
 **filteredGroupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **agentPodNameContains** | [**[String]**](String.md)| Free-text filter by agent pod name (supports multiple values) | [optional] 
 **userActionsNeededNin** | [**[String]**](String.md)| Excluded pending user actions. Example: \"reboot_needed,upgrade_needed\". | [optional] 
 **rangerStatuses** | [**[String]**](String.md)| Status of Ranger. Example: \"NotApplicable\". | [optional] 
 **computerNameLike** | **String**| Match computer name partially (substring). Example: \"Lab1\". | [optional] 
 **externalIdContains** | [**[String]**](String.md)| Free-text filter by external ID (Customer ID). Example: \"Tag#1 - monitoring,Performance machine\". | [optional] 
 **createdAtBetween** | **String**| Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **consoleMigrationStatusesNin** | [**[String]**](String.md)| Migration status nin. Example: \"N/A\". | [optional] 
 **cpuIdContains** | [**[String]**](String.md)| Free-text filter by CPU name (supports multiple values). Example: \"Intel,AMD\". | [optional] 
 **coreCountBetween** | **String**| Possible number of CPU cores (inclusive). Example: \"2-8\". | [optional] 
 **isUpToDate** | **Boolean**| Include only Agents with updated software | [optional] 
 **threatCreatedAtLt** | **Date**| Agents with threats reported before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **rangerStatus** | **String**| [DEPRECATED] Use rangerStatuses. Example: \"NotApplicable\". | [optional] 
 **totalMemoryBetween** | **String**| Total memory range (GB, inclusive). Example: \"4-8\". | [optional] 
 **lastSuccessfulScanDateLte** | **Date**| Agents last successful full disk scan before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **domains** | [**[String]**](String.md)| Included network domains. Example: \"mybusiness.net,workgroup\". | [optional] 
 **awsRoleContains** | [**[String]**](String.md)| Free-text filter by aws role(supports multiple values) | [optional] 
 **lastLoggedInUserNameContains** | [**[String]**](String.md)| Free-text filter by username (supports multiple values). Example: \"admin,johnd1\". | [optional] 
 **cpuCountGt** | **Number**| Number of CPUs (more than) | [optional] 
 **cloudAccountContains** | [**[String]**](String.md)| Free-text filter by cloud account (supports multiple values) | [optional] 
 **clusterNameContains** | [**[String]**](String.md)| Free-text filter by cluster name (supports multiple values) | [optional] 
 **scanStatuses** | [**[String]**](String.md)| Included scan statuses. Example: \"started,aborted\". | [optional] 
 **updatedAtLt** | **Date**| Agents updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **ids** | [**[String]**](String.md)| A list of Agent IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **liveUpdateIdContains** | [**[String]**](String.md)| Free-text filter by live update ID (supports multiple values) | [optional] 
 **computerName** | **String**| Computer name. Example: \"My Office Desktop\". | [optional] 
 **uuid** | **String**| Agent's universally unique identifier. Example: \"ff819e70af13be381993075eb0ce5f2f6de05be2\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types. Example: \"windows\". | [optional] 
 **appsVulnerabilityStatuses** | [**[String]**](String.md)| Apps vulnerability status in. Example: \"patch_required\". | [optional] 
 **lastActiveDateGte** | **Date**| Agents last active after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatContentHash** | **String**| Include only Agents that have at least one threat with this content hash. Example: \"cf23df2207d99a74fbe169e3eba035e633b65d94\". | [optional] 
 **remoteProfilingStatesNin** | [**[String]**](String.md)| Do not include these Agent remote profiling states | [optional] 
 **createdAtLte** | **Date**| Agents created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **scanStatus** | **String**| Scan status. Example: \"none\". | [optional] 
 **filteredSiteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **userActionsNeeded** | [**[String]**](String.md)| Included pending user actions. Example: \"reboot_needed,upgrade_needed\". | [optional] 
 **registeredAtGt** | **Date**| Agents registered after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osArch** | **String**| OS architecture. Example: \"32 bit\". | [optional] 
 **adComputerNameContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **totalMemoryGte** | **Number**| Memory size (MB, more than or equal) | [optional] 
 **threatHidden** | **Boolean**| Include only Agents with at least one hidden threat | [optional] 
 **lastActiveDateGt** | **Date**| Agents last active after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatCreatedAtLte** | **Date**| Agents with threats reported before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **cpuCountGte** | **Number**| Number of CPUs (more than or equal) | [optional] 
 **cloudInstanceIdContains** | [**[String]**](String.md)| Free-text filter by cloud instance id(supports multiple values) | [optional] 
 **agentVersions** | [**[String]**](String.md)| Agent versions to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **adQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **createdAtGte** | **Date**| Agents created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **locationEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Location Awareness and it is enabled for the agent's group | [optional] 
 **cloudProviderNin** | [**[String]**](String.md)| Exclude Agents from these cloud provider | [optional] 
 **isPendingUninstall** | **Boolean**| Include only Agents with pending uninstall requests | [optional] 
 **k8sNodeLabelsContains** | [**[String]**](String.md)| Free-text filter by K8s node labels (supports multiple values) | [optional] 
 **decommissionedAtLte** | **Date**| Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **tagsData** | **String**| Filter agents by their assigned tags. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\". | [optional] 
 **agentVersionGt** | **String**| Agents versions greater than given version. Example: \"2.5.1.1320\". | [optional] 
 **createdAtGt** | **Date**| Agents created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatMitigationStatus** | **String**| Include only Agents that have threats with this mitigation status. Example: \"mitigated\". | [optional] 
 **lastSuccessfulScanDateGt** | **Date**| Agents last successful full disk scan after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **firewallEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Firewall Control and it is enabled for the agent's group | [optional] 
 **decommissionedAtLt** | **Date**| Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **decommissionedAtBetween** | **String**| Date range for decommission time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **domainsNin** | [**[String]**](String.md)| Not included network domains. Example: \"mybusiness.net,workgroup\". | [optional] 
 **createdAtLt** | **Date**| Agents created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **gcpServiceAccountContains** | [**[String]**](String.md)| Free-text filter by gcp service account (supports multiple values) | [optional] 
 **threatResolved** | **Boolean**| Include only Agents with at least one resolved threat | [optional] 
 **cloudLocationContains** | [**[String]**](String.md)| Free-text filter by cloud location (supports multiple values) | [optional] 
 **lastActiveDateLt** | **Date**| Agents last active before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **networkStatuses** | [**[String]**](String.md)| Included network statuses. Example: \"connected,connecting\". | [optional] 
 **k8sTypeContains** | [**[String]**](String.md)| Free-text filter by K8s type(supports multiple values) | [optional] 
 **networkInterfaceGatewayMacAddressContains** | [**[String]**](String.md)| Free-text filter by Gateway MAC address (supports multiple values). Example: \"aa:0f,:41:\". | [optional] 
 **cpuCountBetween** | **String**| Possible number of CPU cores (inclusive). Example: \"2-8\". | [optional] 
 **operationalStatesNin** | [**[String]**](String.md)| Do not include these Agent operational states | [optional] 
 **totalMemoryLt** | **Number**| Memory size (MB, less than) | [optional] 
 **k8sVersionContains** | [**[String]**](String.md)| Free-text filter by K8s version (supports multiple values) | [optional] 
 **installerTypes** | [**[String]**](String.md)| Include only Agents installed with these package types. Example: \".msi\". | [optional] 
 **adUserMemberContains** | [**[String]**](String.md)| Free-text filter by Active Directory user groups string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **infected** | **Boolean**| Include only Agents with at least one active threat | [optional] 
 **coreCountLt** | **Number**| CPU cores (less than) | [optional] 
 **missingPermissions** | [**[String]**](String.md)| Included missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\". | [optional] 
 **installerTypesNin** | [**[String]**](String.md)| Exclude Agents installed with these package types. Example: \".msi\". | [optional] 
 **machineTypesNin** | [**[String]**](String.md)| Not included machine types. Example: \"laptop,desktop\". | [optional] 
 **filterId** | **String**| Include all Agents matching this saved filter. Example: \"225494730938493804\". | [optional] 
 **isDecommissioned** | [**[Boolean]**](Boolean.md)| Include active, decommissioned or both. Example: \"True,False\". | [optional] 
 **agentVersionLt** | **String**| Agents versions less than given version. Example: \"2.5.1.1320\". | [optional] 
 **rangerStatusesNin** | [**[String]**](String.md)| Do not include these Ranger Statuses. Example: \"NotApplicable\". | [optional] 
 **cloudInstanceSizeContains** | [**[String]**](String.md)| Free-text filter by cloud instance size(supports multiple values) | [optional] 
 **rangerVersionsNin** | [**[String]**](String.md)| Ranger versions not to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **rsoLevel** | **String**| Supported Remote Script Orchestration level. Example: \"none\". | [optional] 
 **cpuCountLte** | **Number**| Number of CPUs (less than or equal) | [optional] 
 **updatedAtBetween** | **String**| Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **consoleMigrationStatuses** | [**[String]**](String.md)| Migration status in. Example: \"N/A\". | [optional] 
 **azureResourceGroupContains** | [**[String]**](String.md)| Free-text filter by azure resource group(supports multiple values) | [optional] 
 **threatCreatedAtGt** | **Date**| Agents with threats reported after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **uuidContains** | [**[String]**](String.md)| Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\". | [optional] 
 **networkStatusesNin** | [**[String]**](String.md)| Included network statuses. Example: \"connected,connecting\". | [optional] 
 **totalMemoryLte** | **Number**| Memory size (MB, less than or equal) | [optional] 
 **activeThreatsGt** | **Number**| Include Agents with at least this amount of active threats. Example: \"5\". | [optional] 
 **lastSuccessfulScanDateLt** | **Date**| Agents last successful full disk scan before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **adQuery** | **String**| An Active Directory query string. Example: \"CN=Managers,DC=sentinelone,DC=com\". | [optional] 
 **uuids** | [**[String]**](String.md)| A list of included UUIDs. Example: \"ff819e70af13be381993075eb0ce5f2f6de05b11,ff819e70af13be381993075eb0ce5f2f6de05c22\". | [optional] 

### Return type

[**AgentsSchemasAgentsCountSchema200**](AgentsSchemasAgentsCountSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAgentsGet"></a>
# **webApiAgentsGet**
> AgentsSchemasAgentViewSchemaMany200 webApiAgentsGet(opts)

Get Agents

Get the Agents, and their data, that match the filter. This command gives the Agent ID, which you can use in other commands. <BR>To save the list and data to a CSV file, use \"export/agents\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsApi();

var opts = { 
  'agentVersionsNin': ["agentVersionsNin_example"], // [String] | Agent versions not to include. Example: \"2.0.0.0,2.1.5.144\".
  'registeredAtBetween': "registeredAtBetween_example", // String | Date range for first registration time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'registeredAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'adComputerQueryContains': ["adComputerQueryContains_example"], // [String] | Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,Windows\".
  'mitigationModeSuspicious': "mitigationModeSuspicious_example", // String | Mitigation mode policy for suspicious activity. Example: \"detect\".
  'hasLocalConfiguration': true, // Boolean | Agent has a local configuration set
  'adUserQueryContains': ["adUserQueryContains_example"], // [String] | Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,John\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes (sub-string match). Note: Device's physical addresses will be matched if they start with the search term only (no match if they contain the term). Example: \"Linux\".
  'cloudProvider': ["cloudProvider_example"], // [String] | Agents from which cloud provider
  'coreCountGt': 56, // Number | CPU cores (more than)
  'decommissionedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'registeredAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'totalMemoryGt': 56, // Number | Memory size (MB, more than)
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'hasContainerizedWorkload': true, // Boolean | Include only Agents protecting containerized workloads
  'cloudImageContains': ["cloudImageContains_example"], // [String] | Free-text filter by cloud image (supports multiple values)
  'threatCreatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'appsVulnerabilityStatusesNin': ["appsVulnerabilityStatusesNin_example"], // [String] | Apps vulnerability status nin. Example: \"patch_required\".
  'scanStatusesNin': ["scanStatusesNin_example"], // [String] | Not included scan statuses. Example: \"started,aborted\".
  'adComputerMemberContains': ["adComputerMemberContains_example"], // [String] | Free-text filter by Active Directory computer groups string (supports multiple values). Example: \"DC=sentinelone\".
  'coreCountLte': 56, // Number | CPU cores (less than or equal)
  'rangerVersions': ["rangerVersions_example"], // [String] | Ranger versions to include. Example: \"2.0.0.0,2.1.5.144\".
  'machineTypes': ["machineTypes_example"], // [String] | Included machine types. Example: \"laptop,desktop\".
  'coreCountGte': 56, // Number | CPU cores (more than or equal)
  'locationIds': ["locationIds_example"], // [String] | Include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\".
  'locationIdsNin': ["locationIdsNin_example"], // [String] | Do not include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\".
  'gatewayIp': "gatewayIp_example", // String | Gateway ip. Example: \"192.168.0.1\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'missingPermissionsNin': ["missingPermissionsNin_example"], // [String] | Excluded missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\".
  'migrationStatus': "migrationStatus_example", // String | Migration status. Example: \"N/A\".
  'threatRebootRequired': [true], // [Boolean] | Has at least one threat with at least one mitigation action pending reboot to succeed
  'serialNumberContains': ["serialNumberContains_example"], // [String] | Free-text filter by Serial Number (supports multiple values)
  'decommissionedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'lastSuccessfulScanDateBetween': "lastSuccessfulScanDateBetween_example", // String | Date range for last successful full disk scan(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'lastActiveDateLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'lastActiveDateBetween': "lastActiveDateBetween_example", // String | Date range for last active date(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'networkQuarantineEnabled': [true], // [Boolean] | The agents supports Network Quarantine Control and its enabled for the agent's group
  'cloudTagsContains': ["cloudTagsContains_example"], // [String] | Free-text filter by cloud tags (supports multiple values)
  'threatCreatedAtBetween': "threatCreatedAtBetween_example", // String | Agents with threats reported in a date range (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'encryptedApplications': true, // Boolean | Disk encryption status
  'isUninstalled': [true], // [Boolean] | Include installed, uninstalled or both. Example: \"True,False\".
  'networkInterfacePhysicalContains': ["networkInterfacePhysicalContains_example"], // [String] | Free-text filter by MAC address (supports multiple values). Example: \"aa:0f,:41:\".
  'agentVersionGte': "agentVersionGte_example", // String | Agents versions greater than or equal to given version. Example: \"2.5.1.1320\".
  'lastSuccessfulScanDateGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'operationalStates': ["operationalStates_example"], // [String] | Agent operational state
  'adUserNameContains': ["adUserNameContains_example"], // [String] | Free-text filter by Active Directory username string (supports multiple values). Example: \"DC=sentinelone\".
  'osTypesNin': ["osTypesNin_example"], // [String] | Not included OS types. Example: \"windows\".
  'csvFilterId': "csvFilterId_example", // String | The ID of the CSV file to filter by. Example: \"225494730938493804\".
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'isActive': true, // Boolean | Include only active Agents
  'mitigationMode': "mitigationMode_example", // String | Agent mitigation mode policy. Example: \"detect\".
  'awsSubnetIdsContains': ["awsSubnetIdsContains_example"], // [String] | Free-text filter by aws subnet ids (supports multiple values)
  'agentVersionLte': "agentVersionLte_example", // String | Agents versions less than or equal to given version. Example: \"2.5.1.1320\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'osVersionContains': ["osVersionContains_example"], // [String] | Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
  'externalIpContains': ["externalIpContains_example"], // [String] | Free-text filter by visible IP (supports multiple values). Example: \"205,127.0\".
  'awsSecurityGroupsContains': ["awsSecurityGroupsContains_example"], // [String] | Free-text filter by aws securityGroups(supports multiple values)
  'k8sNodeNameContains': ["k8sNodeNameContains_example"], // [String] | Free-text filter by K8s node name (supports multiple values)
  'agentVersionBetween': "agentVersionBetween_example", // String | Version range for agent version (format: <from_version>-<to_version>, inclusive). Example: \"2.0.0.0-2.1.5.144\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'activeThreats': 56, // Number | Include Agents with this amount of active threats. Example: \"3\".
  'hasTags': true, // Boolean | Include only Agents that have any tags assigned if True, or none if False
  'agentNamespaceContains': ["agentNamespaceContains_example"], // [String] | Free-text filter by agent namespace (supports multiple values)
  'cpuCountLt': 56, // Number | Number of CPUs (less than)
  'registeredAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'networkInterfaceInetContains': ["networkInterfaceInetContains_example"], // [String] | Free-text filter by local IP (supports multiple values). Example: \"192,10.0.0\".
  'computerNameContains': ["computerNameContains_example"], // [String] | Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\".
  'cloudNetworkContains': ["cloudNetworkContains_example"], // [String] | Free-text filter by cloud network (supports multiple values)
  'remoteOpsForensicsSupported': true, // Boolean | Include only agents that has Remote Ops Forensicsfeature supported
  'remoteProfilingStates': ["remoteProfilingStates_example"], // [String] | Agent remote profiling state
  'filteredGroupIds': ["filteredGroupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'agentPodNameContains': ["agentPodNameContains_example"], // [String] | Free-text filter by agent pod name (supports multiple values)
  'userActionsNeededNin': ["userActionsNeededNin_example"], // [String] | Excluded pending user actions. Example: \"reboot_needed,upgrade_needed\".
  'rangerStatuses': ["rangerStatuses_example"], // [String] | Status of Ranger. Example: \"NotApplicable\".
  'computerNameLike': "computerNameLike_example", // String | Match computer name partially (substring). Example: \"Lab1\".
  'externalIdContains': ["externalIdContains_example"], // [String] | Free-text filter by external ID (Customer ID). Example: \"Tag#1 - monitoring,Performance machine\".
  'createdAtBetween': "createdAtBetween_example", // String | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'consoleMigrationStatusesNin': ["consoleMigrationStatusesNin_example"], // [String] | Migration status nin. Example: \"N/A\".
  'cpuIdContains': ["cpuIdContains_example"], // [String] | Free-text filter by CPU name (supports multiple values). Example: \"Intel,AMD\".
  'coreCountBetween': "coreCountBetween_example", // String | Possible number of CPU cores (inclusive). Example: \"2-8\".
  'isUpToDate': true, // Boolean | Include only Agents with updated software
  'threatCreatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'rangerStatus': "rangerStatus_example", // String | [DEPRECATED] Use rangerStatuses. Example: \"NotApplicable\".
  'totalMemoryBetween': "totalMemoryBetween_example", // String | Total memory range (GB, inclusive). Example: \"4-8\".
  'lastSuccessfulScanDateLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'domains': ["domains_example"], // [String] | Included network domains. Example: \"mybusiness.net,workgroup\".
  'awsRoleContains': ["awsRoleContains_example"], // [String] | Free-text filter by aws role(supports multiple values)
  'lastLoggedInUserNameContains': ["lastLoggedInUserNameContains_example"], // [String] | Free-text filter by username (supports multiple values). Example: \"admin,johnd1\".
  'cpuCountGt': 56, // Number | Number of CPUs (more than)
  'cloudAccountContains': ["cloudAccountContains_example"], // [String] | Free-text filter by cloud account (supports multiple values)
  'clusterNameContains': ["clusterNameContains_example"], // [String] | Free-text filter by cluster name (supports multiple values)
  'scanStatuses': ["scanStatuses_example"], // [String] | Included scan statuses. Example: \"started,aborted\".
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'ids': ["ids_example"], // [String] | A list of Agent IDs. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'liveUpdateIdContains': ["liveUpdateIdContains_example"], // [String] | Free-text filter by live update ID (supports multiple values)
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'computerName': "computerName_example", // String | Computer name. Example: \"My Office Desktop\".
  'uuid': "uuid_example", // String | Agent's universally unique identifier. Example: \"ff819e70af13be381993075eb0ce5f2f6de05be2\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types. Example: \"windows\".
  'appsVulnerabilityStatuses': ["appsVulnerabilityStatuses_example"], // [String] | Apps vulnerability status in. Example: \"patch_required\".
  'lastActiveDateGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'threatContentHash': "threatContentHash_example", // String | Include only Agents that have at least one threat with this content hash. Example: \"cf23df2207d99a74fbe169e3eba035e633b65d94\".
  'remoteProfilingStatesNin': ["remoteProfilingStatesNin_example"], // [String] | Do not include these Agent remote profiling states
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'scanStatus': "scanStatus_example", // String | Scan status. Example: \"none\".
  'filteredSiteIds': ["filteredSiteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'userActionsNeeded': ["userActionsNeeded_example"], // [String] | Included pending user actions. Example: \"reboot_needed,upgrade_needed\".
  'registeredAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'osArch': "osArch_example", // String | OS architecture. Example: \"32 bit\".
  'adComputerNameContains': ["adComputerNameContains_example"], // [String] | Free-text filter by Active Directory computer name string (supports multiple values). Example: \"DC=sentinelone\".
  'totalMemoryGte': 56, // Number | Memory size (MB, more than or equal)
  'threatHidden': true, // Boolean | Include only Agents with at least one hidden threat
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'lastActiveDateGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatCreatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'cpuCountGte': 56, // Number | Number of CPUs (more than or equal)
  'cloudInstanceIdContains': ["cloudInstanceIdContains_example"], // [String] | Free-text filter by cloud instance id(supports multiple values)
  'agentVersions': ["agentVersions_example"], // [String] | Agent versions to include. Example: \"2.0.0.0,2.1.5.144\".
  'adQueryContains': ["adQueryContains_example"], // [String] | Free-text filter by Active Directory string (supports multiple values). Example: \"DC=sentinelone\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'locationEnabled': [true], // [Boolean] | The agents supports Location Awareness and it is enabled for the agent's group
  'cloudProviderNin': ["cloudProviderNin_example"], // [String] | Exclude Agents from these cloud provider
  'isPendingUninstall': true, // Boolean | Include only Agents with pending uninstall requests
  'k8sNodeLabelsContains': ["k8sNodeLabelsContains_example"], // [String] | Free-text filter by K8s node labels (supports multiple values)
  'decommissionedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'tagsData': "tagsData_example", // String | Filter agents by their assigned tags. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\".
  'agentVersionGt': "agentVersionGt_example", // String | Agents versions greater than given version. Example: \"2.5.1.1320\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatMitigationStatus': "threatMitigationStatus_example", // String | Include only Agents that have threats with this mitigation status. Example: \"mitigated\".
  'lastSuccessfulScanDateGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'firewallEnabled': [true], // [Boolean] | The agents supports Firewall Control and it is enabled for the agent's group
  'decommissionedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'decommissionedAtBetween': "decommissionedAtBetween_example", // String | Date range for decommission time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'domainsNin': ["domainsNin_example"], // [String] | Not included network domains. Example: \"mybusiness.net,workgroup\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'gcpServiceAccountContains': ["gcpServiceAccountContains_example"], // [String] | Free-text filter by gcp service account (supports multiple values)
  'threatResolved': true, // Boolean | Include only Agents with at least one resolved threat
  'cloudLocationContains': ["cloudLocationContains_example"], // [String] | Free-text filter by cloud location (supports multiple values)
  'lastActiveDateLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'networkStatuses': ["networkStatuses_example"], // [String] | Included network statuses. Example: \"connected,connecting\".
  'k8sTypeContains': ["k8sTypeContains_example"], // [String] | Free-text filter by K8s type(supports multiple values)
  'networkInterfaceGatewayMacAddressContains': ["networkInterfaceGatewayMacAddressContains_example"], // [String] | Free-text filter by Gateway MAC address (supports multiple values). Example: \"aa:0f,:41:\".
  'cpuCountBetween': "cpuCountBetween_example", // String | Possible number of CPU cores (inclusive). Example: \"2-8\".
  'operationalStatesNin': ["operationalStatesNin_example"], // [String] | Do not include these Agent operational states
  'totalMemoryLt': 56, // Number | Memory size (MB, less than)
  'k8sVersionContains': ["k8sVersionContains_example"], // [String] | Free-text filter by K8s version (supports multiple values)
  'installerTypes': ["installerTypes_example"], // [String] | Include only Agents installed with these package types. Example: \".msi\".
  'adUserMemberContains': ["adUserMemberContains_example"], // [String] | Free-text filter by Active Directory user groups string (supports multiple values). Example: \"DC=sentinelone\".
  'infected': true, // Boolean | Include only Agents with at least one active threat
  'coreCountLt': 56, // Number | CPU cores (less than)
  'missingPermissions': ["missingPermissions_example"], // [String] | Included missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\".
  'installerTypesNin': ["installerTypesNin_example"], // [String] | Exclude Agents installed with these package types. Example: \".msi\".
  'machineTypesNin': ["machineTypesNin_example"], // [String] | Not included machine types. Example: \"laptop,desktop\".
  'filterId': "filterId_example", // String | Include all Agents matching this saved filter. Example: \"225494730938493804\".
  'isDecommissioned': [true], // [Boolean] | Include active, decommissioned or both. Example: \"True,False\".
  'agentVersionLt': "agentVersionLt_example", // String | Agents versions less than given version. Example: \"2.5.1.1320\".
  'rangerStatusesNin': ["rangerStatusesNin_example"], // [String] | Do not include these Ranger Statuses. Example: \"NotApplicable\".
  'cloudInstanceSizeContains': ["cloudInstanceSizeContains_example"], // [String] | Free-text filter by cloud instance size(supports multiple values)
  'rangerVersionsNin': ["rangerVersionsNin_example"], // [String] | Ranger versions not to include. Example: \"2.0.0.0,2.1.5.144\".
  'rsoLevel': "rsoLevel_example", // String | Supported Remote Script Orchestration level. Example: \"none\".
  'cpuCountLte': 56, // Number | Number of CPUs (less than or equal)
  'updatedAtBetween': "updatedAtBetween_example", // String | Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'consoleMigrationStatuses': ["consoleMigrationStatuses_example"], // [String] | Migration status in. Example: \"N/A\".
  'azureResourceGroupContains': ["azureResourceGroupContains_example"], // [String] | Free-text filter by azure resource group(supports multiple values)
  'threatCreatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'uuidContains': ["uuidContains_example"], // [String] | Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\".
  'networkStatusesNin': ["networkStatusesNin_example"], // [String] | Included network statuses. Example: \"connected,connecting\".
  'totalMemoryLte': 56, // Number | Memory size (MB, less than or equal)
  'activeThreatsGt': 56, // Number | Include Agents with at least this amount of active threats. Example: \"5\".
  'lastSuccessfulScanDateLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'adQuery': "adQuery_example", // String | An Active Directory query string. Example: \"CN=Managers,DC=sentinelone,DC=com\".
  'uuids': ["uuids_example"] // [String] | A list of included UUIDs. Example: \"ff819e70af13be381993075eb0ce5f2f6de05b11,ff819e70af13be381993075eb0ce5f2f6de05c22\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAgentsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentVersionsNin** | [**[String]**](String.md)| Agent versions not to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **registeredAtBetween** | **String**| Date range for first registration time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **registeredAtLte** | **Date**| Agents registered before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **adComputerQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,Windows\". | [optional] 
 **mitigationModeSuspicious** | **String**| Mitigation mode policy for suspicious activity. Example: \"detect\". | [optional] 
 **hasLocalConfiguration** | **Boolean**| Agent has a local configuration set | [optional] 
 **adUserQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,John\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes (sub-string match). Note: Device's physical addresses will be matched if they start with the search term only (no match if they contain the term). Example: \"Linux\". | [optional] 
 **cloudProvider** | [**[String]**](String.md)| Agents from which cloud provider | [optional] 
 **coreCountGt** | **Number**| CPU cores (more than) | [optional] 
 **decommissionedAtGt** | **Date**| Agents decommissioned after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **registeredAtGte** | **Date**| Agents registered after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **totalMemoryGt** | **Number**| Memory size (MB, more than) | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **updatedAtGt** | **Date**| Agents updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **hasContainerizedWorkload** | **Boolean**| Include only Agents protecting containerized workloads | [optional] 
 **cloudImageContains** | [**[String]**](String.md)| Free-text filter by cloud image (supports multiple values) | [optional] 
 **threatCreatedAtGte** | **Date**| Agents with threats reported after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **appsVulnerabilityStatusesNin** | [**[String]**](String.md)| Apps vulnerability status nin. Example: \"patch_required\". | [optional] 
 **scanStatusesNin** | [**[String]**](String.md)| Not included scan statuses. Example: \"started,aborted\". | [optional] 
 **adComputerMemberContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer groups string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **coreCountLte** | **Number**| CPU cores (less than or equal) | [optional] 
 **rangerVersions** | [**[String]**](String.md)| Ranger versions to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **machineTypes** | [**[String]**](String.md)| Included machine types. Example: \"laptop,desktop\". | [optional] 
 **coreCountGte** | **Number**| CPU cores (more than or equal) | [optional] 
 **locationIds** | [**[String]**](String.md)| Include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **locationIdsNin** | [**[String]**](String.md)| Do not include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **gatewayIp** | **String**| Gateway ip. Example: \"192.168.0.1\". | [optional] 
 **updatedAtLte** | **Date**| Agents updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **missingPermissionsNin** | [**[String]**](String.md)| Excluded missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\". | [optional] 
 **migrationStatus** | **String**| Migration status. Example: \"N/A\". | [optional] 
 **threatRebootRequired** | [**[Boolean]**](Boolean.md)| Has at least one threat with at least one mitigation action pending reboot to succeed | [optional] 
 **serialNumberContains** | [**[String]**](String.md)| Free-text filter by Serial Number (supports multiple values) | [optional] 
 **decommissionedAtGte** | **Date**| Agents decommissioned after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **lastSuccessfulScanDateBetween** | **String**| Date range for last successful full disk scan(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **lastActiveDateLte** | **Date**| Agents last active before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **lastActiveDateBetween** | **String**| Date range for last active date(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **networkQuarantineEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Network Quarantine Control and its enabled for the agent's group | [optional] 
 **cloudTagsContains** | [**[String]**](String.md)| Free-text filter by cloud tags (supports multiple values) | [optional] 
 **threatCreatedAtBetween** | **String**| Agents with threats reported in a date range (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **encryptedApplications** | **Boolean**| Disk encryption status | [optional] 
 **isUninstalled** | [**[Boolean]**](Boolean.md)| Include installed, uninstalled or both. Example: \"True,False\". | [optional] 
 **networkInterfacePhysicalContains** | [**[String]**](String.md)| Free-text filter by MAC address (supports multiple values). Example: \"aa:0f,:41:\". | [optional] 
 **agentVersionGte** | **String**| Agents versions greater than or equal to given version. Example: \"2.5.1.1320\". | [optional] 
 **lastSuccessfulScanDateGte** | **Date**| Agents last successful full disk scan after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **operationalStates** | [**[String]**](String.md)| Agent operational state | [optional] 
 **adUserNameContains** | [**[String]**](String.md)| Free-text filter by Active Directory username string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **osTypesNin** | [**[String]**](String.md)| Not included OS types. Example: \"windows\". | [optional] 
 **csvFilterId** | **String**| The ID of the CSV file to filter by. Example: \"225494730938493804\". | [optional] 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **isActive** | **Boolean**| Include only active Agents | [optional] 
 **mitigationMode** | **String**| Agent mitigation mode policy. Example: \"detect\". | [optional] 
 **awsSubnetIdsContains** | [**[String]**](String.md)| Free-text filter by aws subnet ids (supports multiple values) | [optional] 
 **agentVersionLte** | **String**| Agents versions less than or equal to given version. Example: \"2.5.1.1320\". | [optional] 
 **updatedAtGte** | **Date**| Agents updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osVersionContains** | [**[String]**](String.md)| Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **externalIpContains** | [**[String]**](String.md)| Free-text filter by visible IP (supports multiple values). Example: \"205,127.0\". | [optional] 
 **awsSecurityGroupsContains** | [**[String]**](String.md)| Free-text filter by aws securityGroups(supports multiple values) | [optional] 
 **k8sNodeNameContains** | [**[String]**](String.md)| Free-text filter by K8s node name (supports multiple values) | [optional] 
 **agentVersionBetween** | **String**| Version range for agent version (format: <from_version>-<to_version>, inclusive). Example: \"2.0.0.0-2.1.5.144\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **activeThreats** | **Number**| Include Agents with this amount of active threats. Example: \"3\". | [optional] 
 **hasTags** | **Boolean**| Include only Agents that have any tags assigned if True, or none if False | [optional] 
 **agentNamespaceContains** | [**[String]**](String.md)| Free-text filter by agent namespace (supports multiple values) | [optional] 
 **cpuCountLt** | **Number**| Number of CPUs (less than) | [optional] 
 **registeredAtLt** | **Date**| Agents registered before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **networkInterfaceInetContains** | [**[String]**](String.md)| Free-text filter by local IP (supports multiple values). Example: \"192,10.0.0\". | [optional] 
 **computerNameContains** | [**[String]**](String.md)| Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\". | [optional] 
 **cloudNetworkContains** | [**[String]**](String.md)| Free-text filter by cloud network (supports multiple values) | [optional] 
 **remoteOpsForensicsSupported** | **Boolean**| Include only agents that has Remote Ops Forensicsfeature supported | [optional] 
 **remoteProfilingStates** | [**[String]**](String.md)| Agent remote profiling state | [optional] 
 **filteredGroupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **agentPodNameContains** | [**[String]**](String.md)| Free-text filter by agent pod name (supports multiple values) | [optional] 
 **userActionsNeededNin** | [**[String]**](String.md)| Excluded pending user actions. Example: \"reboot_needed,upgrade_needed\". | [optional] 
 **rangerStatuses** | [**[String]**](String.md)| Status of Ranger. Example: \"NotApplicable\". | [optional] 
 **computerNameLike** | **String**| Match computer name partially (substring). Example: \"Lab1\". | [optional] 
 **externalIdContains** | [**[String]**](String.md)| Free-text filter by external ID (Customer ID). Example: \"Tag#1 - monitoring,Performance machine\". | [optional] 
 **createdAtBetween** | **String**| Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **consoleMigrationStatusesNin** | [**[String]**](String.md)| Migration status nin. Example: \"N/A\". | [optional] 
 **cpuIdContains** | [**[String]**](String.md)| Free-text filter by CPU name (supports multiple values). Example: \"Intel,AMD\". | [optional] 
 **coreCountBetween** | **String**| Possible number of CPU cores (inclusive). Example: \"2-8\". | [optional] 
 **isUpToDate** | **Boolean**| Include only Agents with updated software | [optional] 
 **threatCreatedAtLt** | **Date**| Agents with threats reported before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **rangerStatus** | **String**| [DEPRECATED] Use rangerStatuses. Example: \"NotApplicable\". | [optional] 
 **totalMemoryBetween** | **String**| Total memory range (GB, inclusive). Example: \"4-8\". | [optional] 
 **lastSuccessfulScanDateLte** | **Date**| Agents last successful full disk scan before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **domains** | [**[String]**](String.md)| Included network domains. Example: \"mybusiness.net,workgroup\". | [optional] 
 **awsRoleContains** | [**[String]**](String.md)| Free-text filter by aws role(supports multiple values) | [optional] 
 **lastLoggedInUserNameContains** | [**[String]**](String.md)| Free-text filter by username (supports multiple values). Example: \"admin,johnd1\". | [optional] 
 **cpuCountGt** | **Number**| Number of CPUs (more than) | [optional] 
 **cloudAccountContains** | [**[String]**](String.md)| Free-text filter by cloud account (supports multiple values) | [optional] 
 **clusterNameContains** | [**[String]**](String.md)| Free-text filter by cluster name (supports multiple values) | [optional] 
 **scanStatuses** | [**[String]**](String.md)| Included scan statuses. Example: \"started,aborted\". | [optional] 
 **updatedAtLt** | **Date**| Agents updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **ids** | [**[String]**](String.md)| A list of Agent IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **liveUpdateIdContains** | [**[String]**](String.md)| Free-text filter by live update ID (supports multiple values) | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **computerName** | **String**| Computer name. Example: \"My Office Desktop\". | [optional] 
 **uuid** | **String**| Agent's universally unique identifier. Example: \"ff819e70af13be381993075eb0ce5f2f6de05be2\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types. Example: \"windows\". | [optional] 
 **appsVulnerabilityStatuses** | [**[String]**](String.md)| Apps vulnerability status in. Example: \"patch_required\". | [optional] 
 **lastActiveDateGte** | **Date**| Agents last active after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **threatContentHash** | **String**| Include only Agents that have at least one threat with this content hash. Example: \"cf23df2207d99a74fbe169e3eba035e633b65d94\". | [optional] 
 **remoteProfilingStatesNin** | [**[String]**](String.md)| Do not include these Agent remote profiling states | [optional] 
 **createdAtLte** | **Date**| Agents created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **scanStatus** | **String**| Scan status. Example: \"none\". | [optional] 
 **filteredSiteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **userActionsNeeded** | [**[String]**](String.md)| Included pending user actions. Example: \"reboot_needed,upgrade_needed\". | [optional] 
 **registeredAtGt** | **Date**| Agents registered after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osArch** | **String**| OS architecture. Example: \"32 bit\". | [optional] 
 **adComputerNameContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **totalMemoryGte** | **Number**| Memory size (MB, more than or equal) | [optional] 
 **threatHidden** | **Boolean**| Include only Agents with at least one hidden threat | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **lastActiveDateGt** | **Date**| Agents last active after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatCreatedAtLte** | **Date**| Agents with threats reported before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **cpuCountGte** | **Number**| Number of CPUs (more than or equal) | [optional] 
 **cloudInstanceIdContains** | [**[String]**](String.md)| Free-text filter by cloud instance id(supports multiple values) | [optional] 
 **agentVersions** | [**[String]**](String.md)| Agent versions to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **adQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **createdAtGte** | **Date**| Agents created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **locationEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Location Awareness and it is enabled for the agent's group | [optional] 
 **cloudProviderNin** | [**[String]**](String.md)| Exclude Agents from these cloud provider | [optional] 
 **isPendingUninstall** | **Boolean**| Include only Agents with pending uninstall requests | [optional] 
 **k8sNodeLabelsContains** | [**[String]**](String.md)| Free-text filter by K8s node labels (supports multiple values) | [optional] 
 **decommissionedAtLte** | **Date**| Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **tagsData** | **String**| Filter agents by their assigned tags. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\". | [optional] 
 **agentVersionGt** | **String**| Agents versions greater than given version. Example: \"2.5.1.1320\". | [optional] 
 **createdAtGt** | **Date**| Agents created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatMitigationStatus** | **String**| Include only Agents that have threats with this mitigation status. Example: \"mitigated\". | [optional] 
 **lastSuccessfulScanDateGt** | **Date**| Agents last successful full disk scan after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **firewallEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Firewall Control and it is enabled for the agent's group | [optional] 
 **decommissionedAtLt** | **Date**| Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **decommissionedAtBetween** | **String**| Date range for decommission time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **domainsNin** | [**[String]**](String.md)| Not included network domains. Example: \"mybusiness.net,workgroup\". | [optional] 
 **createdAtLt** | **Date**| Agents created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **gcpServiceAccountContains** | [**[String]**](String.md)| Free-text filter by gcp service account (supports multiple values) | [optional] 
 **threatResolved** | **Boolean**| Include only Agents with at least one resolved threat | [optional] 
 **cloudLocationContains** | [**[String]**](String.md)| Free-text filter by cloud location (supports multiple values) | [optional] 
 **lastActiveDateLt** | **Date**| Agents last active before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **networkStatuses** | [**[String]**](String.md)| Included network statuses. Example: \"connected,connecting\". | [optional] 
 **k8sTypeContains** | [**[String]**](String.md)| Free-text filter by K8s type(supports multiple values) | [optional] 
 **networkInterfaceGatewayMacAddressContains** | [**[String]**](String.md)| Free-text filter by Gateway MAC address (supports multiple values). Example: \"aa:0f,:41:\". | [optional] 
 **cpuCountBetween** | **String**| Possible number of CPU cores (inclusive). Example: \"2-8\". | [optional] 
 **operationalStatesNin** | [**[String]**](String.md)| Do not include these Agent operational states | [optional] 
 **totalMemoryLt** | **Number**| Memory size (MB, less than) | [optional] 
 **k8sVersionContains** | [**[String]**](String.md)| Free-text filter by K8s version (supports multiple values) | [optional] 
 **installerTypes** | [**[String]**](String.md)| Include only Agents installed with these package types. Example: \".msi\". | [optional] 
 **adUserMemberContains** | [**[String]**](String.md)| Free-text filter by Active Directory user groups string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **infected** | **Boolean**| Include only Agents with at least one active threat | [optional] 
 **coreCountLt** | **Number**| CPU cores (less than) | [optional] 
 **missingPermissions** | [**[String]**](String.md)| Included missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\". | [optional] 
 **installerTypesNin** | [**[String]**](String.md)| Exclude Agents installed with these package types. Example: \".msi\". | [optional] 
 **machineTypesNin** | [**[String]**](String.md)| Not included machine types. Example: \"laptop,desktop\". | [optional] 
 **filterId** | **String**| Include all Agents matching this saved filter. Example: \"225494730938493804\". | [optional] 
 **isDecommissioned** | [**[Boolean]**](Boolean.md)| Include active, decommissioned or both. Example: \"True,False\". | [optional] 
 **agentVersionLt** | **String**| Agents versions less than given version. Example: \"2.5.1.1320\". | [optional] 
 **rangerStatusesNin** | [**[String]**](String.md)| Do not include these Ranger Statuses. Example: \"NotApplicable\". | [optional] 
 **cloudInstanceSizeContains** | [**[String]**](String.md)| Free-text filter by cloud instance size(supports multiple values) | [optional] 
 **rangerVersionsNin** | [**[String]**](String.md)| Ranger versions not to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **rsoLevel** | **String**| Supported Remote Script Orchestration level. Example: \"none\". | [optional] 
 **cpuCountLte** | **Number**| Number of CPUs (less than or equal) | [optional] 
 **updatedAtBetween** | **String**| Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **consoleMigrationStatuses** | [**[String]**](String.md)| Migration status in. Example: \"N/A\". | [optional] 
 **azureResourceGroupContains** | [**[String]**](String.md)| Free-text filter by azure resource group(supports multiple values) | [optional] 
 **threatCreatedAtGt** | **Date**| Agents with threats reported after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **uuidContains** | [**[String]**](String.md)| Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\". | [optional] 
 **networkStatusesNin** | [**[String]**](String.md)| Included network statuses. Example: \"connected,connecting\". | [optional] 
 **totalMemoryLte** | **Number**| Memory size (MB, less than or equal) | [optional] 
 **activeThreatsGt** | **Number**| Include Agents with at least this amount of active threats. Example: \"5\". | [optional] 
 **lastSuccessfulScanDateLt** | **Date**| Agents last successful full disk scan before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **adQuery** | **String**| An Active Directory query string. Example: \"CN=Managers,DC=sentinelone,DC=com\". | [optional] 
 **uuids** | [**[String]**](String.md)| A list of included UUIDs. Example: \"ff819e70af13be381993075eb0ce5f2f6de05b11,ff819e70af13be381993075eb0ce5f2f6de05c22\". | [optional] 

### Return type

[**AgentsSchemasAgentViewSchemaMany200**](AgentsSchemasAgentViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAgentsPassphrasesGet"></a>
# **webApiAgentsPassphrasesGet**
> AgentsSchemasAgentPassphraseSchemaMany200 webApiAgentsPassphrasesGet(opts)

Get Passphrase

Show the passphrase for the Agents that match the filter. This is an important command. You need the passphrase for most SentinelCtl commands and for different API commands.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsApi();

var opts = { 
  'agentVersionsNin': ["agentVersionsNin_example"], // [String] | Agent versions not to include. Example: \"2.0.0.0,2.1.5.144\".
  'registeredAtBetween': "registeredAtBetween_example", // String | Date range for first registration time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'registeredAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'adComputerQueryContains': ["adComputerQueryContains_example"], // [String] | Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,Windows\".
  'mitigationModeSuspicious': "mitigationModeSuspicious_example", // String | Mitigation mode policy for suspicious activity. Example: \"detect\".
  'hasLocalConfiguration': true, // Boolean | Agent has a local configuration set
  'adUserQueryContains': ["adUserQueryContains_example"], // [String] | Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,John\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes (sub-string match). Note: Device's physical addresses will be matched if they start with the search term only (no match if they contain the term). Example: \"Linux\".
  'cloudProvider': ["cloudProvider_example"], // [String] | Agents from which cloud provider
  'coreCountGt': 56, // Number | CPU cores (more than)
  'decommissionedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'registeredAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'totalMemoryGt': 56, // Number | Memory size (MB, more than)
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'hasContainerizedWorkload': true, // Boolean | Include only Agents protecting containerized workloads
  'cloudImageContains': ["cloudImageContains_example"], // [String] | Free-text filter by cloud image (supports multiple values)
  'threatCreatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'appsVulnerabilityStatusesNin': ["appsVulnerabilityStatusesNin_example"], // [String] | Apps vulnerability status nin. Example: \"patch_required\".
  'scanStatusesNin': ["scanStatusesNin_example"], // [String] | Not included scan statuses. Example: \"started,aborted\".
  'adComputerMemberContains': ["adComputerMemberContains_example"], // [String] | Free-text filter by Active Directory computer groups string (supports multiple values). Example: \"DC=sentinelone\".
  'coreCountLte': 56, // Number | CPU cores (less than or equal)
  'rangerVersions': ["rangerVersions_example"], // [String] | Ranger versions to include. Example: \"2.0.0.0,2.1.5.144\".
  'machineTypes': ["machineTypes_example"], // [String] | Included machine types. Example: \"laptop,desktop\".
  'coreCountGte': 56, // Number | CPU cores (more than or equal)
  'locationIds': ["locationIds_example"], // [String] | Include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\".
  'locationIdsNin': ["locationIdsNin_example"], // [String] | Do not include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\".
  'gatewayIp': "gatewayIp_example", // String | Gateway ip. Example: \"192.168.0.1\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'missingPermissionsNin': ["missingPermissionsNin_example"], // [String] | Excluded missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\".
  'migrationStatus': "migrationStatus_example", // String | Migration status. Example: \"N/A\".
  'threatRebootRequired': [true], // [Boolean] | Has at least one threat with at least one mitigation action pending reboot to succeed
  'serialNumberContains': ["serialNumberContains_example"], // [String] | Free-text filter by Serial Number (supports multiple values)
  'decommissionedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'lastSuccessfulScanDateBetween': "lastSuccessfulScanDateBetween_example", // String | Date range for last successful full disk scan(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'lastActiveDateLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'lastActiveDateBetween': "lastActiveDateBetween_example", // String | Date range for last active date(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'networkQuarantineEnabled': [true], // [Boolean] | The agents supports Network Quarantine Control and its enabled for the agent's group
  'cloudTagsContains': ["cloudTagsContains_example"], // [String] | Free-text filter by cloud tags (supports multiple values)
  'threatCreatedAtBetween': "threatCreatedAtBetween_example", // String | Agents with threats reported in a date range (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'encryptedApplications': true, // Boolean | Disk encryption status
  'isUninstalled': [true], // [Boolean] | Include installed, uninstalled or both. Example: \"True,False\".
  'networkInterfacePhysicalContains': ["networkInterfacePhysicalContains_example"], // [String] | Free-text filter by MAC address (supports multiple values). Example: \"aa:0f,:41:\".
  'agentVersionGte': "agentVersionGte_example", // String | Agents versions greater than or equal to given version. Example: \"2.5.1.1320\".
  'lastSuccessfulScanDateGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'operationalStates': ["operationalStates_example"], // [String] | Agent operational state
  'adUserNameContains': ["adUserNameContains_example"], // [String] | Free-text filter by Active Directory username string (supports multiple values). Example: \"DC=sentinelone\".
  'osTypesNin': ["osTypesNin_example"], // [String] | Not included OS types. Example: \"windows\".
  'csvFilterId': "csvFilterId_example", // String | The ID of the CSV file to filter by. Example: \"225494730938493804\".
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'isActive': true, // Boolean | Include only active Agents
  'mitigationMode': "mitigationMode_example", // String | Agent mitigation mode policy. Example: \"detect\".
  'awsSubnetIdsContains': ["awsSubnetIdsContains_example"], // [String] | Free-text filter by aws subnet ids (supports multiple values)
  'agentVersionLte': "agentVersionLte_example", // String | Agents versions less than or equal to given version. Example: \"2.5.1.1320\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'osVersionContains': ["osVersionContains_example"], // [String] | Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
  'externalIpContains': ["externalIpContains_example"], // [String] | Free-text filter by visible IP (supports multiple values). Example: \"205,127.0\".
  'awsSecurityGroupsContains': ["awsSecurityGroupsContains_example"], // [String] | Free-text filter by aws securityGroups(supports multiple values)
  'k8sNodeNameContains': ["k8sNodeNameContains_example"], // [String] | Free-text filter by K8s node name (supports multiple values)
  'agentVersionBetween': "agentVersionBetween_example", // String | Version range for agent version (format: <from_version>-<to_version>, inclusive). Example: \"2.0.0.0-2.1.5.144\".
  'activeThreats': 56, // Number | Include Agents with this amount of active threats. Example: \"3\".
  'hasTags': true, // Boolean | Include only Agents that have any tags assigned if True, or none if False
  'agentNamespaceContains': ["agentNamespaceContains_example"], // [String] | Free-text filter by agent namespace (supports multiple values)
  'cpuCountLt': 56, // Number | Number of CPUs (less than)
  'registeredAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'networkInterfaceInetContains': ["networkInterfaceInetContains_example"], // [String] | Free-text filter by local IP (supports multiple values). Example: \"192,10.0.0\".
  'computerNameContains': ["computerNameContains_example"], // [String] | Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\".
  'cloudNetworkContains': ["cloudNetworkContains_example"], // [String] | Free-text filter by cloud network (supports multiple values)
  'remoteOpsForensicsSupported': true, // Boolean | Include only agents that has Remote Ops Forensicsfeature supported
  'remoteProfilingStates': ["remoteProfilingStates_example"], // [String] | Agent remote profiling state
  'filteredGroupIds': ["filteredGroupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'agentPodNameContains': ["agentPodNameContains_example"], // [String] | Free-text filter by agent pod name (supports multiple values)
  'userActionsNeededNin': ["userActionsNeededNin_example"], // [String] | Excluded pending user actions. Example: \"reboot_needed,upgrade_needed\".
  'rangerStatuses': ["rangerStatuses_example"], // [String] | Status of Ranger. Example: \"NotApplicable\".
  'computerNameLike': "computerNameLike_example", // String | Match computer name partially (substring). Example: \"Lab1\".
  'externalIdContains': ["externalIdContains_example"], // [String] | Free-text filter by external ID (Customer ID). Example: \"Tag#1 - monitoring,Performance machine\".
  'createdAtBetween': "createdAtBetween_example", // String | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'consoleMigrationStatusesNin': ["consoleMigrationStatusesNin_example"], // [String] | Migration status nin. Example: \"N/A\".
  'cpuIdContains': ["cpuIdContains_example"], // [String] | Free-text filter by CPU name (supports multiple values). Example: \"Intel,AMD\".
  'coreCountBetween': "coreCountBetween_example", // String | Possible number of CPU cores (inclusive). Example: \"2-8\".
  'isUpToDate': true, // Boolean | Include only Agents with updated software
  'threatCreatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'rangerStatus': "rangerStatus_example", // String | [DEPRECATED] Use rangerStatuses. Example: \"NotApplicable\".
  'totalMemoryBetween': "totalMemoryBetween_example", // String | Total memory range (GB, inclusive). Example: \"4-8\".
  'lastSuccessfulScanDateLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'domains': ["domains_example"], // [String] | Included network domains. Example: \"mybusiness.net,workgroup\".
  'awsRoleContains': ["awsRoleContains_example"], // [String] | Free-text filter by aws role(supports multiple values)
  'lastLoggedInUserNameContains': ["lastLoggedInUserNameContains_example"], // [String] | Free-text filter by username (supports multiple values). Example: \"admin,johnd1\".
  'cpuCountGt': 56, // Number | Number of CPUs (more than)
  'cloudAccountContains': ["cloudAccountContains_example"], // [String] | Free-text filter by cloud account (supports multiple values)
  'clusterNameContains': ["clusterNameContains_example"], // [String] | Free-text filter by cluster name (supports multiple values)
  'scanStatuses': ["scanStatuses_example"], // [String] | Included scan statuses. Example: \"started,aborted\".
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'ids': ["ids_example"], // [String] | A list of Agent IDs. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'liveUpdateIdContains': ["liveUpdateIdContains_example"], // [String] | Free-text filter by live update ID (supports multiple values)
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'computerName': "computerName_example", // String | Computer name. Example: \"My Office Desktop\".
  'uuid': "uuid_example", // String | Agent's universally unique identifier. Example: \"ff819e70af13be381993075eb0ce5f2f6de05be2\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types. Example: \"windows\".
  'appsVulnerabilityStatuses': ["appsVulnerabilityStatuses_example"], // [String] | Apps vulnerability status in. Example: \"patch_required\".
  'lastActiveDateGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'threatContentHash': "threatContentHash_example", // String | Include only Agents that have at least one threat with this content hash. Example: \"cf23df2207d99a74fbe169e3eba035e633b65d94\".
  'remoteProfilingStatesNin': ["remoteProfilingStatesNin_example"], // [String] | Do not include these Agent remote profiling states
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'scanStatus': "scanStatus_example", // String | Scan status. Example: \"none\".
  'filteredSiteIds': ["filteredSiteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'userActionsNeeded': ["userActionsNeeded_example"], // [String] | Included pending user actions. Example: \"reboot_needed,upgrade_needed\".
  'registeredAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'osArch': "osArch_example", // String | OS architecture. Example: \"32 bit\".
  'adComputerNameContains': ["adComputerNameContains_example"], // [String] | Free-text filter by Active Directory computer name string (supports multiple values). Example: \"DC=sentinelone\".
  'totalMemoryGte': 56, // Number | Memory size (MB, more than or equal)
  'threatHidden': true, // Boolean | Include only Agents with at least one hidden threat
  'lastActiveDateGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatCreatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'cpuCountGte': 56, // Number | Number of CPUs (more than or equal)
  'cloudInstanceIdContains': ["cloudInstanceIdContains_example"], // [String] | Free-text filter by cloud instance id(supports multiple values)
  'agentVersions': ["agentVersions_example"], // [String] | Agent versions to include. Example: \"2.0.0.0,2.1.5.144\".
  'adQueryContains': ["adQueryContains_example"], // [String] | Free-text filter by Active Directory string (supports multiple values). Example: \"DC=sentinelone\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'locationEnabled': [true], // [Boolean] | The agents supports Location Awareness and it is enabled for the agent's group
  'cloudProviderNin': ["cloudProviderNin_example"], // [String] | Exclude Agents from these cloud provider
  'isPendingUninstall': true, // Boolean | Include only Agents with pending uninstall requests
  'k8sNodeLabelsContains': ["k8sNodeLabelsContains_example"], // [String] | Free-text filter by K8s node labels (supports multiple values)
  'decommissionedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'tagsData': "tagsData_example", // String | Filter agents by their assigned tags. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\".
  'agentVersionGt': "agentVersionGt_example", // String | Agents versions greater than given version. Example: \"2.5.1.1320\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatMitigationStatus': "threatMitigationStatus_example", // String | Include only Agents that have threats with this mitigation status. Example: \"mitigated\".
  'lastSuccessfulScanDateGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'firewallEnabled': [true], // [Boolean] | The agents supports Firewall Control and it is enabled for the agent's group
  'decommissionedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'decommissionedAtBetween': "decommissionedAtBetween_example", // String | Date range for decommission time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'domainsNin': ["domainsNin_example"], // [String] | Not included network domains. Example: \"mybusiness.net,workgroup\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'gcpServiceAccountContains': ["gcpServiceAccountContains_example"], // [String] | Free-text filter by gcp service account (supports multiple values)
  'threatResolved': true, // Boolean | Include only Agents with at least one resolved threat
  'cloudLocationContains': ["cloudLocationContains_example"], // [String] | Free-text filter by cloud location (supports multiple values)
  'lastActiveDateLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'networkStatuses': ["networkStatuses_example"], // [String] | Included network statuses. Example: \"connected,connecting\".
  'k8sTypeContains': ["k8sTypeContains_example"], // [String] | Free-text filter by K8s type(supports multiple values)
  'networkInterfaceGatewayMacAddressContains': ["networkInterfaceGatewayMacAddressContains_example"], // [String] | Free-text filter by Gateway MAC address (supports multiple values). Example: \"aa:0f,:41:\".
  'cpuCountBetween': "cpuCountBetween_example", // String | Possible number of CPU cores (inclusive). Example: \"2-8\".
  'operationalStatesNin': ["operationalStatesNin_example"], // [String] | Do not include these Agent operational states
  'totalMemoryLt': 56, // Number | Memory size (MB, less than)
  'k8sVersionContains': ["k8sVersionContains_example"], // [String] | Free-text filter by K8s version (supports multiple values)
  'installerTypes': ["installerTypes_example"], // [String] | Include only Agents installed with these package types. Example: \".msi\".
  'adUserMemberContains': ["adUserMemberContains_example"], // [String] | Free-text filter by Active Directory user groups string (supports multiple values). Example: \"DC=sentinelone\".
  'infected': true, // Boolean | Include only Agents with at least one active threat
  'coreCountLt': 56, // Number | CPU cores (less than)
  'missingPermissions': ["missingPermissions_example"], // [String] | Included missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\".
  'installerTypesNin': ["installerTypesNin_example"], // [String] | Exclude Agents installed with these package types. Example: \".msi\".
  'machineTypesNin': ["machineTypesNin_example"], // [String] | Not included machine types. Example: \"laptop,desktop\".
  'filterId': "filterId_example", // String | Include all Agents matching this saved filter. Example: \"225494730938493804\".
  'isDecommissioned': [true], // [Boolean] | Include active, decommissioned or both. Example: \"True,False\".
  'agentVersionLt': "agentVersionLt_example", // String | Agents versions less than given version. Example: \"2.5.1.1320\".
  'rangerStatusesNin': ["rangerStatusesNin_example"], // [String] | Do not include these Ranger Statuses. Example: \"NotApplicable\".
  'cloudInstanceSizeContains': ["cloudInstanceSizeContains_example"], // [String] | Free-text filter by cloud instance size(supports multiple values)
  'rangerVersionsNin': ["rangerVersionsNin_example"], // [String] | Ranger versions not to include. Example: \"2.0.0.0,2.1.5.144\".
  'rsoLevel': "rsoLevel_example", // String | Supported Remote Script Orchestration level. Example: \"none\".
  'cpuCountLte': 56, // Number | Number of CPUs (less than or equal)
  'updatedAtBetween': "updatedAtBetween_example", // String | Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'consoleMigrationStatuses': ["consoleMigrationStatuses_example"], // [String] | Migration status in. Example: \"N/A\".
  'azureResourceGroupContains': ["azureResourceGroupContains_example"], // [String] | Free-text filter by azure resource group(supports multiple values)
  'threatCreatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'uuidContains': ["uuidContains_example"], // [String] | Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\".
  'networkStatusesNin': ["networkStatusesNin_example"], // [String] | Included network statuses. Example: \"connected,connecting\".
  'totalMemoryLte': 56, // Number | Memory size (MB, less than or equal)
  'activeThreatsGt': 56, // Number | Include Agents with at least this amount of active threats. Example: \"5\".
  'lastSuccessfulScanDateLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'adQuery': "adQuery_example", // String | An Active Directory query string. Example: \"CN=Managers,DC=sentinelone,DC=com\".
  'uuids': ["uuids_example"] // [String] | A list of included UUIDs. Example: \"ff819e70af13be381993075eb0ce5f2f6de05b11,ff819e70af13be381993075eb0ce5f2f6de05c22\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAgentsPassphrasesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentVersionsNin** | [**[String]**](String.md)| Agent versions not to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **registeredAtBetween** | **String**| Date range for first registration time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **registeredAtLte** | **Date**| Agents registered before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **adComputerQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,Windows\". | [optional] 
 **mitigationModeSuspicious** | **String**| Mitigation mode policy for suspicious activity. Example: \"detect\". | [optional] 
 **hasLocalConfiguration** | **Boolean**| Agent has a local configuration set | [optional] 
 **adUserQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,John\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes (sub-string match). Note: Device's physical addresses will be matched if they start with the search term only (no match if they contain the term). Example: \"Linux\". | [optional] 
 **cloudProvider** | [**[String]**](String.md)| Agents from which cloud provider | [optional] 
 **coreCountGt** | **Number**| CPU cores (more than) | [optional] 
 **decommissionedAtGt** | **Date**| Agents decommissioned after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **registeredAtGte** | **Date**| Agents registered after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **totalMemoryGt** | **Number**| Memory size (MB, more than) | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **updatedAtGt** | **Date**| Agents updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **hasContainerizedWorkload** | **Boolean**| Include only Agents protecting containerized workloads | [optional] 
 **cloudImageContains** | [**[String]**](String.md)| Free-text filter by cloud image (supports multiple values) | [optional] 
 **threatCreatedAtGte** | **Date**| Agents with threats reported after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **appsVulnerabilityStatusesNin** | [**[String]**](String.md)| Apps vulnerability status nin. Example: \"patch_required\". | [optional] 
 **scanStatusesNin** | [**[String]**](String.md)| Not included scan statuses. Example: \"started,aborted\". | [optional] 
 **adComputerMemberContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer groups string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **coreCountLte** | **Number**| CPU cores (less than or equal) | [optional] 
 **rangerVersions** | [**[String]**](String.md)| Ranger versions to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **machineTypes** | [**[String]**](String.md)| Included machine types. Example: \"laptop,desktop\". | [optional] 
 **coreCountGte** | **Number**| CPU cores (more than or equal) | [optional] 
 **locationIds** | [**[String]**](String.md)| Include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **locationIdsNin** | [**[String]**](String.md)| Do not include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **gatewayIp** | **String**| Gateway ip. Example: \"192.168.0.1\". | [optional] 
 **updatedAtLte** | **Date**| Agents updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **missingPermissionsNin** | [**[String]**](String.md)| Excluded missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\". | [optional] 
 **migrationStatus** | **String**| Migration status. Example: \"N/A\". | [optional] 
 **threatRebootRequired** | [**[Boolean]**](Boolean.md)| Has at least one threat with at least one mitigation action pending reboot to succeed | [optional] 
 **serialNumberContains** | [**[String]**](String.md)| Free-text filter by Serial Number (supports multiple values) | [optional] 
 **decommissionedAtGte** | **Date**| Agents decommissioned after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **lastSuccessfulScanDateBetween** | **String**| Date range for last successful full disk scan(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **lastActiveDateLte** | **Date**| Agents last active before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **lastActiveDateBetween** | **String**| Date range for last active date(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **networkQuarantineEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Network Quarantine Control and its enabled for the agent's group | [optional] 
 **cloudTagsContains** | [**[String]**](String.md)| Free-text filter by cloud tags (supports multiple values) | [optional] 
 **threatCreatedAtBetween** | **String**| Agents with threats reported in a date range (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **encryptedApplications** | **Boolean**| Disk encryption status | [optional] 
 **isUninstalled** | [**[Boolean]**](Boolean.md)| Include installed, uninstalled or both. Example: \"True,False\". | [optional] 
 **networkInterfacePhysicalContains** | [**[String]**](String.md)| Free-text filter by MAC address (supports multiple values). Example: \"aa:0f,:41:\". | [optional] 
 **agentVersionGte** | **String**| Agents versions greater than or equal to given version. Example: \"2.5.1.1320\". | [optional] 
 **lastSuccessfulScanDateGte** | **Date**| Agents last successful full disk scan after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **operationalStates** | [**[String]**](String.md)| Agent operational state | [optional] 
 **adUserNameContains** | [**[String]**](String.md)| Free-text filter by Active Directory username string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **osTypesNin** | [**[String]**](String.md)| Not included OS types. Example: \"windows\". | [optional] 
 **csvFilterId** | **String**| The ID of the CSV file to filter by. Example: \"225494730938493804\". | [optional] 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **isActive** | **Boolean**| Include only active Agents | [optional] 
 **mitigationMode** | **String**| Agent mitigation mode policy. Example: \"detect\". | [optional] 
 **awsSubnetIdsContains** | [**[String]**](String.md)| Free-text filter by aws subnet ids (supports multiple values) | [optional] 
 **agentVersionLte** | **String**| Agents versions less than or equal to given version. Example: \"2.5.1.1320\". | [optional] 
 **updatedAtGte** | **Date**| Agents updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osVersionContains** | [**[String]**](String.md)| Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **externalIpContains** | [**[String]**](String.md)| Free-text filter by visible IP (supports multiple values). Example: \"205,127.0\". | [optional] 
 **awsSecurityGroupsContains** | [**[String]**](String.md)| Free-text filter by aws securityGroups(supports multiple values) | [optional] 
 **k8sNodeNameContains** | [**[String]**](String.md)| Free-text filter by K8s node name (supports multiple values) | [optional] 
 **agentVersionBetween** | **String**| Version range for agent version (format: <from_version>-<to_version>, inclusive). Example: \"2.0.0.0-2.1.5.144\". | [optional] 
 **activeThreats** | **Number**| Include Agents with this amount of active threats. Example: \"3\". | [optional] 
 **hasTags** | **Boolean**| Include only Agents that have any tags assigned if True, or none if False | [optional] 
 **agentNamespaceContains** | [**[String]**](String.md)| Free-text filter by agent namespace (supports multiple values) | [optional] 
 **cpuCountLt** | **Number**| Number of CPUs (less than) | [optional] 
 **registeredAtLt** | **Date**| Agents registered before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **networkInterfaceInetContains** | [**[String]**](String.md)| Free-text filter by local IP (supports multiple values). Example: \"192,10.0.0\". | [optional] 
 **computerNameContains** | [**[String]**](String.md)| Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\". | [optional] 
 **cloudNetworkContains** | [**[String]**](String.md)| Free-text filter by cloud network (supports multiple values) | [optional] 
 **remoteOpsForensicsSupported** | **Boolean**| Include only agents that has Remote Ops Forensicsfeature supported | [optional] 
 **remoteProfilingStates** | [**[String]**](String.md)| Agent remote profiling state | [optional] 
 **filteredGroupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **agentPodNameContains** | [**[String]**](String.md)| Free-text filter by agent pod name (supports multiple values) | [optional] 
 **userActionsNeededNin** | [**[String]**](String.md)| Excluded pending user actions. Example: \"reboot_needed,upgrade_needed\". | [optional] 
 **rangerStatuses** | [**[String]**](String.md)| Status of Ranger. Example: \"NotApplicable\". | [optional] 
 **computerNameLike** | **String**| Match computer name partially (substring). Example: \"Lab1\". | [optional] 
 **externalIdContains** | [**[String]**](String.md)| Free-text filter by external ID (Customer ID). Example: \"Tag#1 - monitoring,Performance machine\". | [optional] 
 **createdAtBetween** | **String**| Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **consoleMigrationStatusesNin** | [**[String]**](String.md)| Migration status nin. Example: \"N/A\". | [optional] 
 **cpuIdContains** | [**[String]**](String.md)| Free-text filter by CPU name (supports multiple values). Example: \"Intel,AMD\". | [optional] 
 **coreCountBetween** | **String**| Possible number of CPU cores (inclusive). Example: \"2-8\". | [optional] 
 **isUpToDate** | **Boolean**| Include only Agents with updated software | [optional] 
 **threatCreatedAtLt** | **Date**| Agents with threats reported before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **rangerStatus** | **String**| [DEPRECATED] Use rangerStatuses. Example: \"NotApplicable\". | [optional] 
 **totalMemoryBetween** | **String**| Total memory range (GB, inclusive). Example: \"4-8\". | [optional] 
 **lastSuccessfulScanDateLte** | **Date**| Agents last successful full disk scan before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **domains** | [**[String]**](String.md)| Included network domains. Example: \"mybusiness.net,workgroup\". | [optional] 
 **awsRoleContains** | [**[String]**](String.md)| Free-text filter by aws role(supports multiple values) | [optional] 
 **lastLoggedInUserNameContains** | [**[String]**](String.md)| Free-text filter by username (supports multiple values). Example: \"admin,johnd1\". | [optional] 
 **cpuCountGt** | **Number**| Number of CPUs (more than) | [optional] 
 **cloudAccountContains** | [**[String]**](String.md)| Free-text filter by cloud account (supports multiple values) | [optional] 
 **clusterNameContains** | [**[String]**](String.md)| Free-text filter by cluster name (supports multiple values) | [optional] 
 **scanStatuses** | [**[String]**](String.md)| Included scan statuses. Example: \"started,aborted\". | [optional] 
 **updatedAtLt** | **Date**| Agents updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **ids** | [**[String]**](String.md)| A list of Agent IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **liveUpdateIdContains** | [**[String]**](String.md)| Free-text filter by live update ID (supports multiple values) | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **computerName** | **String**| Computer name. Example: \"My Office Desktop\". | [optional] 
 **uuid** | **String**| Agent's universally unique identifier. Example: \"ff819e70af13be381993075eb0ce5f2f6de05be2\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types. Example: \"windows\". | [optional] 
 **appsVulnerabilityStatuses** | [**[String]**](String.md)| Apps vulnerability status in. Example: \"patch_required\". | [optional] 
 **lastActiveDateGte** | **Date**| Agents last active after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **threatContentHash** | **String**| Include only Agents that have at least one threat with this content hash. Example: \"cf23df2207d99a74fbe169e3eba035e633b65d94\". | [optional] 
 **remoteProfilingStatesNin** | [**[String]**](String.md)| Do not include these Agent remote profiling states | [optional] 
 **createdAtLte** | **Date**| Agents created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **scanStatus** | **String**| Scan status. Example: \"none\". | [optional] 
 **filteredSiteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **userActionsNeeded** | [**[String]**](String.md)| Included pending user actions. Example: \"reboot_needed,upgrade_needed\". | [optional] 
 **registeredAtGt** | **Date**| Agents registered after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osArch** | **String**| OS architecture. Example: \"32 bit\". | [optional] 
 **adComputerNameContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **totalMemoryGte** | **Number**| Memory size (MB, more than or equal) | [optional] 
 **threatHidden** | **Boolean**| Include only Agents with at least one hidden threat | [optional] 
 **lastActiveDateGt** | **Date**| Agents last active after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatCreatedAtLte** | **Date**| Agents with threats reported before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **cpuCountGte** | **Number**| Number of CPUs (more than or equal) | [optional] 
 **cloudInstanceIdContains** | [**[String]**](String.md)| Free-text filter by cloud instance id(supports multiple values) | [optional] 
 **agentVersions** | [**[String]**](String.md)| Agent versions to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **adQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **createdAtGte** | **Date**| Agents created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **locationEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Location Awareness and it is enabled for the agent's group | [optional] 
 **cloudProviderNin** | [**[String]**](String.md)| Exclude Agents from these cloud provider | [optional] 
 **isPendingUninstall** | **Boolean**| Include only Agents with pending uninstall requests | [optional] 
 **k8sNodeLabelsContains** | [**[String]**](String.md)| Free-text filter by K8s node labels (supports multiple values) | [optional] 
 **decommissionedAtLte** | **Date**| Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **tagsData** | **String**| Filter agents by their assigned tags. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\". | [optional] 
 **agentVersionGt** | **String**| Agents versions greater than given version. Example: \"2.5.1.1320\". | [optional] 
 **createdAtGt** | **Date**| Agents created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatMitigationStatus** | **String**| Include only Agents that have threats with this mitigation status. Example: \"mitigated\". | [optional] 
 **lastSuccessfulScanDateGt** | **Date**| Agents last successful full disk scan after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **firewallEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Firewall Control and it is enabled for the agent's group | [optional] 
 **decommissionedAtLt** | **Date**| Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **decommissionedAtBetween** | **String**| Date range for decommission time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **domainsNin** | [**[String]**](String.md)| Not included network domains. Example: \"mybusiness.net,workgroup\". | [optional] 
 **createdAtLt** | **Date**| Agents created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **gcpServiceAccountContains** | [**[String]**](String.md)| Free-text filter by gcp service account (supports multiple values) | [optional] 
 **threatResolved** | **Boolean**| Include only Agents with at least one resolved threat | [optional] 
 **cloudLocationContains** | [**[String]**](String.md)| Free-text filter by cloud location (supports multiple values) | [optional] 
 **lastActiveDateLt** | **Date**| Agents last active before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **networkStatuses** | [**[String]**](String.md)| Included network statuses. Example: \"connected,connecting\". | [optional] 
 **k8sTypeContains** | [**[String]**](String.md)| Free-text filter by K8s type(supports multiple values) | [optional] 
 **networkInterfaceGatewayMacAddressContains** | [**[String]**](String.md)| Free-text filter by Gateway MAC address (supports multiple values). Example: \"aa:0f,:41:\". | [optional] 
 **cpuCountBetween** | **String**| Possible number of CPU cores (inclusive). Example: \"2-8\". | [optional] 
 **operationalStatesNin** | [**[String]**](String.md)| Do not include these Agent operational states | [optional] 
 **totalMemoryLt** | **Number**| Memory size (MB, less than) | [optional] 
 **k8sVersionContains** | [**[String]**](String.md)| Free-text filter by K8s version (supports multiple values) | [optional] 
 **installerTypes** | [**[String]**](String.md)| Include only Agents installed with these package types. Example: \".msi\". | [optional] 
 **adUserMemberContains** | [**[String]**](String.md)| Free-text filter by Active Directory user groups string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **infected** | **Boolean**| Include only Agents with at least one active threat | [optional] 
 **coreCountLt** | **Number**| CPU cores (less than) | [optional] 
 **missingPermissions** | [**[String]**](String.md)| Included missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\". | [optional] 
 **installerTypesNin** | [**[String]**](String.md)| Exclude Agents installed with these package types. Example: \".msi\". | [optional] 
 **machineTypesNin** | [**[String]**](String.md)| Not included machine types. Example: \"laptop,desktop\". | [optional] 
 **filterId** | **String**| Include all Agents matching this saved filter. Example: \"225494730938493804\". | [optional] 
 **isDecommissioned** | [**[Boolean]**](Boolean.md)| Include active, decommissioned or both. Example: \"True,False\". | [optional] 
 **agentVersionLt** | **String**| Agents versions less than given version. Example: \"2.5.1.1320\". | [optional] 
 **rangerStatusesNin** | [**[String]**](String.md)| Do not include these Ranger Statuses. Example: \"NotApplicable\". | [optional] 
 **cloudInstanceSizeContains** | [**[String]**](String.md)| Free-text filter by cloud instance size(supports multiple values) | [optional] 
 **rangerVersionsNin** | [**[String]**](String.md)| Ranger versions not to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **rsoLevel** | **String**| Supported Remote Script Orchestration level. Example: \"none\". | [optional] 
 **cpuCountLte** | **Number**| Number of CPUs (less than or equal) | [optional] 
 **updatedAtBetween** | **String**| Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **consoleMigrationStatuses** | [**[String]**](String.md)| Migration status in. Example: \"N/A\". | [optional] 
 **azureResourceGroupContains** | [**[String]**](String.md)| Free-text filter by azure resource group(supports multiple values) | [optional] 
 **threatCreatedAtGt** | **Date**| Agents with threats reported after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **uuidContains** | [**[String]**](String.md)| Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\". | [optional] 
 **networkStatusesNin** | [**[String]**](String.md)| Included network statuses. Example: \"connected,connecting\". | [optional] 
 **totalMemoryLte** | **Number**| Memory size (MB, less than or equal) | [optional] 
 **activeThreatsGt** | **Number**| Include Agents with at least this amount of active threats. Example: \"5\". | [optional] 
 **lastSuccessfulScanDateLt** | **Date**| Agents last successful full disk scan before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **adQuery** | **String**| An Active Directory query string. Example: \"CN=Managers,DC=sentinelone,DC=com\". | [optional] 
 **uuids** | [**[String]**](String.md)| A list of included UUIDs. Example: \"ff819e70af13be381993075eb0ce5f2f6de05b11,ff819e70af13be381993075eb0ce5f2f6de05c22\". | [optional] 

### Return type

[**AgentsSchemasAgentPassphraseSchemaMany200**](AgentsSchemasAgentPassphraseSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAgentsProcessesGet"></a>
# **webApiAgentsProcessesGet**
> AgentsSchemasAgentProcessesSchemaMany200 webApiAgentsProcessesGet(ids)

Processes

[OBSOLETE] Returns empty array. To get processes of an Agent, see Applications.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsApi();

var ids = ["ids_example"]; // [String] | Agent ID list. Example: \"225494730938493804,225494730938493915\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAgentsProcessesGet(ids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[String]**](String.md)| Agent ID list. Example: \"225494730938493804,225494730938493915\". | 

### Return type

[**AgentsSchemasAgentProcessesSchemaMany200**](AgentsSchemasAgentProcessesSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAgentsTagsGet"></a>
# **webApiAgentsTagsGet**
> TagManagerSchemasAgentTagSchemaMany200 webApiAgentsTagsGet(opts)

Get the endpoint tags that match the filters.

Get endpoint Tags.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'includeChildren': false, // Boolean | Return tags from children scope levels
  'query': "query_example", // String | Free text search on fields key, value, description
  'ids': ["ids_example"], // [String] | List of tag IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'valueContains': ["valueContains_example"], // [String] | Free-text filter by tag value. Example: \"server\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'key': "key_example", // String | Tag key
  'value': "value_example", // String | Tag value
  'includeParents': false, // Boolean | Return tags from parent scope levels
  'keyContains': ["keyContains_example"], // [String] | Free-text filter by tag key. Example: \"server\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'description': "description_example", // String | Tag description
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAgentsTagsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **includeChildren** | **Boolean**| Return tags from children scope levels | [optional] [default to false]
 **query** | **String**| Free text search on fields key, value, description | [optional] 
 **ids** | [**[String]**](String.md)| List of tag IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **valueContains** | [**[String]**](String.md)| Free-text filter by tag value. Example: \"server\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **key** | **String**| Tag key | [optional] 
 **value** | **String**| Tag value | [optional] 
 **includeParents** | **Boolean**| Return tags from parent scope levels | [optional] [default to false]
 **keyContains** | [**[String]**](String.md)| Free-text filter by tag key. Example: \"server\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **description** | **String**| Tag description | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**TagManagerSchemasAgentTagSchemaMany200**](TagManagerSchemasAgentTagSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAgentsagentIdLocalUpgradeAuthorizationGet"></a>
# **webApiAgentsagentIdLocalUpgradeAuthorizationGet**
> AgentsSchemasGetAgentApprovalResponse200 webApiAgentsagentIdLocalUpgradeAuthorizationGet(agentId)

Get local upgrade agent authorization

Get the time when authorization of local upgrades expires

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsApi();

var agentId = "agentId_example"; // String | Agent ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAgentsagentIdLocalUpgradeAuthorizationGet(agentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| Agent ID. Example: \"225494730938493804\". | 

### Return type

[**AgentsSchemasGetAgentApprovalResponse200**](AgentsSchemasGetAgentApprovalResponse200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiAgentsagentIdUploadsactivityIdGet"></a>
# **webApiAgentsagentIdUploadsactivityIdGet**
> webApiAgentsagentIdUploadsactivityIdGet(agentId, activityId)

Export Agent Logs

Get Agent logs from Agents that match the filter. You can filter by Agent ID (run \"agents\" to get the ID) or by Activity ID (run \"activities/types\" to get the Activity ID). Send the logs to SentinelOne Support for assistance.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsApi();

var agentId = "agentId_example"; // String | Agent ID. Example: \"225494730938493804\".

var activityId = "activityId_example"; // String | ID of activity that logs files uploaded by agent. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiAgentsagentIdUploadsactivityIdGet(agentId, activityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| Agent ID. Example: \"225494730938493804\". | 
 **activityId** | **String**| ID of activity that logs files uploaded by agent. Example: \"225494730938493804\". | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiExportAgentsGet"></a>
# **webApiExportAgentsGet**
> webApiExportAgentsGet(opts)

Export Agents

Export Agent data to a CSV, for Agents that match the filter. This command exports up to 50000 items (each datum is an item).

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsApi();

var opts = { 
  'agentVersionsNin': ["agentVersionsNin_example"], // [String] | Agent versions not to include. Example: \"2.0.0.0,2.1.5.144\".
  'registeredAtBetween': "registeredAtBetween_example", // String | Date range for first registration time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'registeredAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'adComputerQueryContains': ["adComputerQueryContains_example"], // [String] | Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,Windows\".
  'mitigationModeSuspicious': "mitigationModeSuspicious_example", // String | Mitigation mode policy for suspicious activity. Example: \"detect\".
  'hasLocalConfiguration': true, // Boolean | Agent has a local configuration set
  'adUserQueryContains': ["adUserQueryContains_example"], // [String] | Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,John\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes (sub-string match). Note: Device's physical addresses will be matched if they start with the search term only (no match if they contain the term). Example: \"Linux\".
  'cloudProvider': ["cloudProvider_example"], // [String] | Agents from which cloud provider
  'coreCountGt': 56, // Number | CPU cores (more than)
  'decommissionedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'registeredAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'totalMemoryGt': 56, // Number | Memory size (MB, more than)
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'hasContainerizedWorkload': true, // Boolean | Include only Agents protecting containerized workloads
  'cloudImageContains': ["cloudImageContains_example"], // [String] | Free-text filter by cloud image (supports multiple values)
  'threatCreatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'appsVulnerabilityStatusesNin': ["appsVulnerabilityStatusesNin_example"], // [String] | Apps vulnerability status nin. Example: \"patch_required\".
  'scanStatusesNin': ["scanStatusesNin_example"], // [String] | Not included scan statuses. Example: \"started,aborted\".
  'adComputerMemberContains': ["adComputerMemberContains_example"], // [String] | Free-text filter by Active Directory computer groups string (supports multiple values). Example: \"DC=sentinelone\".
  'coreCountLte': 56, // Number | CPU cores (less than or equal)
  'rangerVersions': ["rangerVersions_example"], // [String] | Ranger versions to include. Example: \"2.0.0.0,2.1.5.144\".
  'machineTypes': ["machineTypes_example"], // [String] | Included machine types. Example: \"laptop,desktop\".
  'coreCountGte': 56, // Number | CPU cores (more than or equal)
  'locationIds': ["locationIds_example"], // [String] | Include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\".
  'locationIdsNin': ["locationIdsNin_example"], // [String] | Do not include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\".
  'gatewayIp': "gatewayIp_example", // String | Gateway ip. Example: \"192.168.0.1\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'missingPermissionsNin': ["missingPermissionsNin_example"], // [String] | Excluded missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\".
  'migrationStatus': "migrationStatus_example", // String | Migration status. Example: \"N/A\".
  'threatRebootRequired': [true], // [Boolean] | Has at least one threat with at least one mitigation action pending reboot to succeed
  'serialNumberContains': ["serialNumberContains_example"], // [String] | Free-text filter by Serial Number (supports multiple values)
  'decommissionedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'lastSuccessfulScanDateBetween': "lastSuccessfulScanDateBetween_example", // String | Date range for last successful full disk scan(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'lastActiveDateLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'lastActiveDateBetween': "lastActiveDateBetween_example", // String | Date range for last active date(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'networkQuarantineEnabled': [true], // [Boolean] | The agents supports Network Quarantine Control and its enabled for the agent's group
  'cloudTagsContains': ["cloudTagsContains_example"], // [String] | Free-text filter by cloud tags (supports multiple values)
  'threatCreatedAtBetween': "threatCreatedAtBetween_example", // String | Agents with threats reported in a date range (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'encryptedApplications': true, // Boolean | Disk encryption status
  'isUninstalled': [true], // [Boolean] | Include installed, uninstalled or both. Example: \"True,False\".
  'networkInterfacePhysicalContains': ["networkInterfacePhysicalContains_example"], // [String] | Free-text filter by MAC address (supports multiple values). Example: \"aa:0f,:41:\".
  'agentVersionGte': "agentVersionGte_example", // String | Agents versions greater than or equal to given version. Example: \"2.5.1.1320\".
  'lastSuccessfulScanDateGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'operationalStates': ["operationalStates_example"], // [String] | Agent operational state
  'adUserNameContains': ["adUserNameContains_example"], // [String] | Free-text filter by Active Directory username string (supports multiple values). Example: \"DC=sentinelone\".
  'osTypesNin': ["osTypesNin_example"], // [String] | Not included OS types. Example: \"windows\".
  'csvFilterId': "csvFilterId_example", // String | The ID of the CSV file to filter by. Example: \"225494730938493804\".
  'isActive': true, // Boolean | Include only active Agents
  'mitigationMode': "mitigationMode_example", // String | Agent mitigation mode policy. Example: \"detect\".
  'awsSubnetIdsContains': ["awsSubnetIdsContains_example"], // [String] | Free-text filter by aws subnet ids (supports multiple values)
  'agentVersionLte': "agentVersionLte_example", // String | Agents versions less than or equal to given version. Example: \"2.5.1.1320\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'osVersionContains': ["osVersionContains_example"], // [String] | Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
  'externalIpContains': ["externalIpContains_example"], // [String] | Free-text filter by visible IP (supports multiple values). Example: \"205,127.0\".
  'awsSecurityGroupsContains': ["awsSecurityGroupsContains_example"], // [String] | Free-text filter by aws securityGroups(supports multiple values)
  'k8sNodeNameContains': ["k8sNodeNameContains_example"], // [String] | Free-text filter by K8s node name (supports multiple values)
  'agentVersionBetween': "agentVersionBetween_example", // String | Version range for agent version (format: <from_version>-<to_version>, inclusive). Example: \"2.0.0.0-2.1.5.144\".
  'activeThreats': 56, // Number | Include Agents with this amount of active threats. Example: \"3\".
  'hasTags': true, // Boolean | Include only Agents that have any tags assigned if True, or none if False
  'agentNamespaceContains': ["agentNamespaceContains_example"], // [String] | Free-text filter by agent namespace (supports multiple values)
  'cpuCountLt': 56, // Number | Number of CPUs (less than)
  'registeredAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'networkInterfaceInetContains': ["networkInterfaceInetContains_example"], // [String] | Free-text filter by local IP (supports multiple values). Example: \"192,10.0.0\".
  'computerNameContains': ["computerNameContains_example"], // [String] | Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\".
  'cloudNetworkContains': ["cloudNetworkContains_example"], // [String] | Free-text filter by cloud network (supports multiple values)
  'remoteOpsForensicsSupported': true, // Boolean | Include only agents that has Remote Ops Forensicsfeature supported
  'remoteProfilingStates': ["remoteProfilingStates_example"], // [String] | Agent remote profiling state
  'filteredGroupIds': ["filteredGroupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'agentPodNameContains': ["agentPodNameContains_example"], // [String] | Free-text filter by agent pod name (supports multiple values)
  'userActionsNeededNin': ["userActionsNeededNin_example"], // [String] | Excluded pending user actions. Example: \"reboot_needed,upgrade_needed\".
  'rangerStatuses': ["rangerStatuses_example"], // [String] | Status of Ranger. Example: \"NotApplicable\".
  'computerNameLike': "computerNameLike_example", // String | Match computer name partially (substring). Example: \"Lab1\".
  'externalIdContains': ["externalIdContains_example"], // [String] | Free-text filter by external ID (Customer ID). Example: \"Tag#1 - monitoring,Performance machine\".
  'createdAtBetween': "createdAtBetween_example", // String | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'consoleMigrationStatusesNin': ["consoleMigrationStatusesNin_example"], // [String] | Migration status nin. Example: \"N/A\".
  'cpuIdContains': ["cpuIdContains_example"], // [String] | Free-text filter by CPU name (supports multiple values). Example: \"Intel,AMD\".
  'coreCountBetween': "coreCountBetween_example", // String | Possible number of CPU cores (inclusive). Example: \"2-8\".
  'isUpToDate': true, // Boolean | Include only Agents with updated software
  'threatCreatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'rangerStatus': "rangerStatus_example", // String | [DEPRECATED] Use rangerStatuses. Example: \"NotApplicable\".
  'totalMemoryBetween': "totalMemoryBetween_example", // String | Total memory range (GB, inclusive). Example: \"4-8\".
  'lastSuccessfulScanDateLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'domains': ["domains_example"], // [String] | Included network domains. Example: \"mybusiness.net,workgroup\".
  'awsRoleContains': ["awsRoleContains_example"], // [String] | Free-text filter by aws role(supports multiple values)
  'lastLoggedInUserNameContains': ["lastLoggedInUserNameContains_example"], // [String] | Free-text filter by username (supports multiple values). Example: \"admin,johnd1\".
  'cpuCountGt': 56, // Number | Number of CPUs (more than)
  'cloudAccountContains': ["cloudAccountContains_example"], // [String] | Free-text filter by cloud account (supports multiple values)
  'clusterNameContains': ["clusterNameContains_example"], // [String] | Free-text filter by cluster name (supports multiple values)
  'scanStatuses': ["scanStatuses_example"], // [String] | Included scan statuses. Example: \"started,aborted\".
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'ids': ["ids_example"], // [String] | A list of Agent IDs. Example: \"225494730938493804,225494730938493915\".
  'liveUpdateIdContains': ["liveUpdateIdContains_example"], // [String] | Free-text filter by live update ID (supports multiple values)
  'computerName': "computerName_example", // String | Computer name. Example: \"My Office Desktop\".
  'uuid': "uuid_example", // String | Agent's universally unique identifier. Example: \"ff819e70af13be381993075eb0ce5f2f6de05be2\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types. Example: \"windows\".
  'appsVulnerabilityStatuses': ["appsVulnerabilityStatuses_example"], // [String] | Apps vulnerability status in. Example: \"patch_required\".
  'lastActiveDateGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatContentHash': "threatContentHash_example", // String | Include only Agents that have at least one threat with this content hash. Example: \"cf23df2207d99a74fbe169e3eba035e633b65d94\".
  'remoteProfilingStatesNin': ["remoteProfilingStatesNin_example"], // [String] | Do not include these Agent remote profiling states
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'scanStatus': "scanStatus_example", // String | Scan status. Example: \"none\".
  'filteredSiteIds': ["filteredSiteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'userActionsNeeded': ["userActionsNeeded_example"], // [String] | Included pending user actions. Example: \"reboot_needed,upgrade_needed\".
  'registeredAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'osArch': "osArch_example", // String | OS architecture. Example: \"32 bit\".
  'adComputerNameContains': ["adComputerNameContains_example"], // [String] | Free-text filter by Active Directory computer name string (supports multiple values). Example: \"DC=sentinelone\".
  'totalMemoryGte': 56, // Number | Memory size (MB, more than or equal)
  'threatHidden': true, // Boolean | Include only Agents with at least one hidden threat
  'lastActiveDateGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatCreatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'cpuCountGte': 56, // Number | Number of CPUs (more than or equal)
  'cloudInstanceIdContains': ["cloudInstanceIdContains_example"], // [String] | Free-text filter by cloud instance id(supports multiple values)
  'agentVersions': ["agentVersions_example"], // [String] | Agent versions to include. Example: \"2.0.0.0,2.1.5.144\".
  'adQueryContains': ["adQueryContains_example"], // [String] | Free-text filter by Active Directory string (supports multiple values). Example: \"DC=sentinelone\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'locationEnabled': [true], // [Boolean] | The agents supports Location Awareness and it is enabled for the agent's group
  'cloudProviderNin': ["cloudProviderNin_example"], // [String] | Exclude Agents from these cloud provider
  'isPendingUninstall': true, // Boolean | Include only Agents with pending uninstall requests
  'k8sNodeLabelsContains': ["k8sNodeLabelsContains_example"], // [String] | Free-text filter by K8s node labels (supports multiple values)
  'decommissionedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'tagsData': "tagsData_example", // String | Filter agents by their assigned tags. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\".
  'agentVersionGt': "agentVersionGt_example", // String | Agents versions greater than given version. Example: \"2.5.1.1320\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatMitigationStatus': "threatMitigationStatus_example", // String | Include only Agents that have threats with this mitigation status. Example: \"mitigated\".
  'lastSuccessfulScanDateGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'firewallEnabled': [true], // [Boolean] | The agents supports Firewall Control and it is enabled for the agent's group
  'decommissionedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'decommissionedAtBetween': "decommissionedAtBetween_example", // String | Date range for decommission time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'domainsNin': ["domainsNin_example"], // [String] | Not included network domains. Example: \"mybusiness.net,workgroup\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'gcpServiceAccountContains': ["gcpServiceAccountContains_example"], // [String] | Free-text filter by gcp service account (supports multiple values)
  'threatResolved': true, // Boolean | Include only Agents with at least one resolved threat
  'cloudLocationContains': ["cloudLocationContains_example"], // [String] | Free-text filter by cloud location (supports multiple values)
  'lastActiveDateLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'networkStatuses': ["networkStatuses_example"], // [String] | Included network statuses. Example: \"connected,connecting\".
  'k8sTypeContains': ["k8sTypeContains_example"], // [String] | Free-text filter by K8s type(supports multiple values)
  'networkInterfaceGatewayMacAddressContains': ["networkInterfaceGatewayMacAddressContains_example"], // [String] | Free-text filter by Gateway MAC address (supports multiple values). Example: \"aa:0f,:41:\".
  'cpuCountBetween': "cpuCountBetween_example", // String | Possible number of CPU cores (inclusive). Example: \"2-8\".
  'operationalStatesNin': ["operationalStatesNin_example"], // [String] | Do not include these Agent operational states
  'totalMemoryLt': 56, // Number | Memory size (MB, less than)
  'k8sVersionContains': ["k8sVersionContains_example"], // [String] | Free-text filter by K8s version (supports multiple values)
  'installerTypes': ["installerTypes_example"], // [String] | Include only Agents installed with these package types. Example: \".msi\".
  'adUserMemberContains': ["adUserMemberContains_example"], // [String] | Free-text filter by Active Directory user groups string (supports multiple values). Example: \"DC=sentinelone\".
  'infected': true, // Boolean | Include only Agents with at least one active threat
  'coreCountLt': 56, // Number | CPU cores (less than)
  'missingPermissions': ["missingPermissions_example"], // [String] | Included missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\".
  'installerTypesNin': ["installerTypesNin_example"], // [String] | Exclude Agents installed with these package types. Example: \".msi\".
  'machineTypesNin': ["machineTypesNin_example"], // [String] | Not included machine types. Example: \"laptop,desktop\".
  'filterId': "filterId_example", // String | Include all Agents matching this saved filter. Example: \"225494730938493804\".
  'isDecommissioned': [true], // [Boolean] | Include active, decommissioned or both. Example: \"True,False\".
  'agentVersionLt': "agentVersionLt_example", // String | Agents versions less than given version. Example: \"2.5.1.1320\".
  'rangerStatusesNin': ["rangerStatusesNin_example"], // [String] | Do not include these Ranger Statuses. Example: \"NotApplicable\".
  'cloudInstanceSizeContains': ["cloudInstanceSizeContains_example"], // [String] | Free-text filter by cloud instance size(supports multiple values)
  'rangerVersionsNin': ["rangerVersionsNin_example"], // [String] | Ranger versions not to include. Example: \"2.0.0.0,2.1.5.144\".
  'rsoLevel': "rsoLevel_example", // String | Supported Remote Script Orchestration level. Example: \"none\".
  'cpuCountLte': 56, // Number | Number of CPUs (less than or equal)
  'updatedAtBetween': "updatedAtBetween_example", // String | Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'consoleMigrationStatuses': ["consoleMigrationStatuses_example"], // [String] | Migration status in. Example: \"N/A\".
  'azureResourceGroupContains': ["azureResourceGroupContains_example"], // [String] | Free-text filter by azure resource group(supports multiple values)
  'threatCreatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'uuidContains': ["uuidContains_example"], // [String] | Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\".
  'networkStatusesNin': ["networkStatusesNin_example"], // [String] | Included network statuses. Example: \"connected,connecting\".
  'totalMemoryLte': 56, // Number | Memory size (MB, less than or equal)
  'activeThreatsGt': 56, // Number | Include Agents with at least this amount of active threats. Example: \"5\".
  'lastSuccessfulScanDateLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'adQuery': "adQuery_example", // String | An Active Directory query string. Example: \"CN=Managers,DC=sentinelone,DC=com\".
  'uuids': ["uuids_example"] // [String] | A list of included UUIDs. Example: \"ff819e70af13be381993075eb0ce5f2f6de05b11,ff819e70af13be381993075eb0ce5f2f6de05c22\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExportAgentsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentVersionsNin** | [**[String]**](String.md)| Agent versions not to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **registeredAtBetween** | **String**| Date range for first registration time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **registeredAtLte** | **Date**| Agents registered before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **adComputerQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,Windows\". | [optional] 
 **mitigationModeSuspicious** | **String**| Mitigation mode policy for suspicious activity. Example: \"detect\". | [optional] 
 **hasLocalConfiguration** | **Boolean**| Agent has a local configuration set | [optional] 
 **adUserQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,John\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes (sub-string match). Note: Device's physical addresses will be matched if they start with the search term only (no match if they contain the term). Example: \"Linux\". | [optional] 
 **cloudProvider** | [**[String]**](String.md)| Agents from which cloud provider | [optional] 
 **coreCountGt** | **Number**| CPU cores (more than) | [optional] 
 **decommissionedAtGt** | **Date**| Agents decommissioned after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **registeredAtGte** | **Date**| Agents registered after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **totalMemoryGt** | **Number**| Memory size (MB, more than) | [optional] 
 **updatedAtGt** | **Date**| Agents updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **hasContainerizedWorkload** | **Boolean**| Include only Agents protecting containerized workloads | [optional] 
 **cloudImageContains** | [**[String]**](String.md)| Free-text filter by cloud image (supports multiple values) | [optional] 
 **threatCreatedAtGte** | **Date**| Agents with threats reported after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **appsVulnerabilityStatusesNin** | [**[String]**](String.md)| Apps vulnerability status nin. Example: \"patch_required\". | [optional] 
 **scanStatusesNin** | [**[String]**](String.md)| Not included scan statuses. Example: \"started,aborted\". | [optional] 
 **adComputerMemberContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer groups string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **coreCountLte** | **Number**| CPU cores (less than or equal) | [optional] 
 **rangerVersions** | [**[String]**](String.md)| Ranger versions to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **machineTypes** | [**[String]**](String.md)| Included machine types. Example: \"laptop,desktop\". | [optional] 
 **coreCountGte** | **Number**| CPU cores (more than or equal) | [optional] 
 **locationIds** | [**[String]**](String.md)| Include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **locationIdsNin** | [**[String]**](String.md)| Do not include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **gatewayIp** | **String**| Gateway ip. Example: \"192.168.0.1\". | [optional] 
 **updatedAtLte** | **Date**| Agents updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **missingPermissionsNin** | [**[String]**](String.md)| Excluded missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\". | [optional] 
 **migrationStatus** | **String**| Migration status. Example: \"N/A\". | [optional] 
 **threatRebootRequired** | [**[Boolean]**](Boolean.md)| Has at least one threat with at least one mitigation action pending reboot to succeed | [optional] 
 **serialNumberContains** | [**[String]**](String.md)| Free-text filter by Serial Number (supports multiple values) | [optional] 
 **decommissionedAtGte** | **Date**| Agents decommissioned after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **lastSuccessfulScanDateBetween** | **String**| Date range for last successful full disk scan(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **lastActiveDateLte** | **Date**| Agents last active before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **lastActiveDateBetween** | **String**| Date range for last active date(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **networkQuarantineEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Network Quarantine Control and its enabled for the agent's group | [optional] 
 **cloudTagsContains** | [**[String]**](String.md)| Free-text filter by cloud tags (supports multiple values) | [optional] 
 **threatCreatedAtBetween** | **String**| Agents with threats reported in a date range (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **encryptedApplications** | **Boolean**| Disk encryption status | [optional] 
 **isUninstalled** | [**[Boolean]**](Boolean.md)| Include installed, uninstalled or both. Example: \"True,False\". | [optional] 
 **networkInterfacePhysicalContains** | [**[String]**](String.md)| Free-text filter by MAC address (supports multiple values). Example: \"aa:0f,:41:\". | [optional] 
 **agentVersionGte** | **String**| Agents versions greater than or equal to given version. Example: \"2.5.1.1320\". | [optional] 
 **lastSuccessfulScanDateGte** | **Date**| Agents last successful full disk scan after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **operationalStates** | [**[String]**](String.md)| Agent operational state | [optional] 
 **adUserNameContains** | [**[String]**](String.md)| Free-text filter by Active Directory username string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **osTypesNin** | [**[String]**](String.md)| Not included OS types. Example: \"windows\". | [optional] 
 **csvFilterId** | **String**| The ID of the CSV file to filter by. Example: \"225494730938493804\". | [optional] 
 **isActive** | **Boolean**| Include only active Agents | [optional] 
 **mitigationMode** | **String**| Agent mitigation mode policy. Example: \"detect\". | [optional] 
 **awsSubnetIdsContains** | [**[String]**](String.md)| Free-text filter by aws subnet ids (supports multiple values) | [optional] 
 **agentVersionLte** | **String**| Agents versions less than or equal to given version. Example: \"2.5.1.1320\". | [optional] 
 **updatedAtGte** | **Date**| Agents updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osVersionContains** | [**[String]**](String.md)| Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **externalIpContains** | [**[String]**](String.md)| Free-text filter by visible IP (supports multiple values). Example: \"205,127.0\". | [optional] 
 **awsSecurityGroupsContains** | [**[String]**](String.md)| Free-text filter by aws securityGroups(supports multiple values) | [optional] 
 **k8sNodeNameContains** | [**[String]**](String.md)| Free-text filter by K8s node name (supports multiple values) | [optional] 
 **agentVersionBetween** | **String**| Version range for agent version (format: <from_version>-<to_version>, inclusive). Example: \"2.0.0.0-2.1.5.144\". | [optional] 
 **activeThreats** | **Number**| Include Agents with this amount of active threats. Example: \"3\". | [optional] 
 **hasTags** | **Boolean**| Include only Agents that have any tags assigned if True, or none if False | [optional] 
 **agentNamespaceContains** | [**[String]**](String.md)| Free-text filter by agent namespace (supports multiple values) | [optional] 
 **cpuCountLt** | **Number**| Number of CPUs (less than) | [optional] 
 **registeredAtLt** | **Date**| Agents registered before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **networkInterfaceInetContains** | [**[String]**](String.md)| Free-text filter by local IP (supports multiple values). Example: \"192,10.0.0\". | [optional] 
 **computerNameContains** | [**[String]**](String.md)| Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\". | [optional] 
 **cloudNetworkContains** | [**[String]**](String.md)| Free-text filter by cloud network (supports multiple values) | [optional] 
 **remoteOpsForensicsSupported** | **Boolean**| Include only agents that has Remote Ops Forensicsfeature supported | [optional] 
 **remoteProfilingStates** | [**[String]**](String.md)| Agent remote profiling state | [optional] 
 **filteredGroupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **agentPodNameContains** | [**[String]**](String.md)| Free-text filter by agent pod name (supports multiple values) | [optional] 
 **userActionsNeededNin** | [**[String]**](String.md)| Excluded pending user actions. Example: \"reboot_needed,upgrade_needed\". | [optional] 
 **rangerStatuses** | [**[String]**](String.md)| Status of Ranger. Example: \"NotApplicable\". | [optional] 
 **computerNameLike** | **String**| Match computer name partially (substring). Example: \"Lab1\". | [optional] 
 **externalIdContains** | [**[String]**](String.md)| Free-text filter by external ID (Customer ID). Example: \"Tag#1 - monitoring,Performance machine\". | [optional] 
 **createdAtBetween** | **String**| Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **consoleMigrationStatusesNin** | [**[String]**](String.md)| Migration status nin. Example: \"N/A\". | [optional] 
 **cpuIdContains** | [**[String]**](String.md)| Free-text filter by CPU name (supports multiple values). Example: \"Intel,AMD\". | [optional] 
 **coreCountBetween** | **String**| Possible number of CPU cores (inclusive). Example: \"2-8\". | [optional] 
 **isUpToDate** | **Boolean**| Include only Agents with updated software | [optional] 
 **threatCreatedAtLt** | **Date**| Agents with threats reported before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **rangerStatus** | **String**| [DEPRECATED] Use rangerStatuses. Example: \"NotApplicable\". | [optional] 
 **totalMemoryBetween** | **String**| Total memory range (GB, inclusive). Example: \"4-8\". | [optional] 
 **lastSuccessfulScanDateLte** | **Date**| Agents last successful full disk scan before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **domains** | [**[String]**](String.md)| Included network domains. Example: \"mybusiness.net,workgroup\". | [optional] 
 **awsRoleContains** | [**[String]**](String.md)| Free-text filter by aws role(supports multiple values) | [optional] 
 **lastLoggedInUserNameContains** | [**[String]**](String.md)| Free-text filter by username (supports multiple values). Example: \"admin,johnd1\". | [optional] 
 **cpuCountGt** | **Number**| Number of CPUs (more than) | [optional] 
 **cloudAccountContains** | [**[String]**](String.md)| Free-text filter by cloud account (supports multiple values) | [optional] 
 **clusterNameContains** | [**[String]**](String.md)| Free-text filter by cluster name (supports multiple values) | [optional] 
 **scanStatuses** | [**[String]**](String.md)| Included scan statuses. Example: \"started,aborted\". | [optional] 
 **updatedAtLt** | **Date**| Agents updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **ids** | [**[String]**](String.md)| A list of Agent IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **liveUpdateIdContains** | [**[String]**](String.md)| Free-text filter by live update ID (supports multiple values) | [optional] 
 **computerName** | **String**| Computer name. Example: \"My Office Desktop\". | [optional] 
 **uuid** | **String**| Agent's universally unique identifier. Example: \"ff819e70af13be381993075eb0ce5f2f6de05be2\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types. Example: \"windows\". | [optional] 
 **appsVulnerabilityStatuses** | [**[String]**](String.md)| Apps vulnerability status in. Example: \"patch_required\". | [optional] 
 **lastActiveDateGte** | **Date**| Agents last active after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatContentHash** | **String**| Include only Agents that have at least one threat with this content hash. Example: \"cf23df2207d99a74fbe169e3eba035e633b65d94\". | [optional] 
 **remoteProfilingStatesNin** | [**[String]**](String.md)| Do not include these Agent remote profiling states | [optional] 
 **createdAtLte** | **Date**| Agents created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **scanStatus** | **String**| Scan status. Example: \"none\". | [optional] 
 **filteredSiteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **userActionsNeeded** | [**[String]**](String.md)| Included pending user actions. Example: \"reboot_needed,upgrade_needed\". | [optional] 
 **registeredAtGt** | **Date**| Agents registered after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osArch** | **String**| OS architecture. Example: \"32 bit\". | [optional] 
 **adComputerNameContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **totalMemoryGte** | **Number**| Memory size (MB, more than or equal) | [optional] 
 **threatHidden** | **Boolean**| Include only Agents with at least one hidden threat | [optional] 
 **lastActiveDateGt** | **Date**| Agents last active after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatCreatedAtLte** | **Date**| Agents with threats reported before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **cpuCountGte** | **Number**| Number of CPUs (more than or equal) | [optional] 
 **cloudInstanceIdContains** | [**[String]**](String.md)| Free-text filter by cloud instance id(supports multiple values) | [optional] 
 **agentVersions** | [**[String]**](String.md)| Agent versions to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **adQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **createdAtGte** | **Date**| Agents created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **locationEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Location Awareness and it is enabled for the agent's group | [optional] 
 **cloudProviderNin** | [**[String]**](String.md)| Exclude Agents from these cloud provider | [optional] 
 **isPendingUninstall** | **Boolean**| Include only Agents with pending uninstall requests | [optional] 
 **k8sNodeLabelsContains** | [**[String]**](String.md)| Free-text filter by K8s node labels (supports multiple values) | [optional] 
 **decommissionedAtLte** | **Date**| Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **tagsData** | **String**| Filter agents by their assigned tags. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\". | [optional] 
 **agentVersionGt** | **String**| Agents versions greater than given version. Example: \"2.5.1.1320\". | [optional] 
 **createdAtGt** | **Date**| Agents created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatMitigationStatus** | **String**| Include only Agents that have threats with this mitigation status. Example: \"mitigated\". | [optional] 
 **lastSuccessfulScanDateGt** | **Date**| Agents last successful full disk scan after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **firewallEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Firewall Control and it is enabled for the agent's group | [optional] 
 **decommissionedAtLt** | **Date**| Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **decommissionedAtBetween** | **String**| Date range for decommission time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **domainsNin** | [**[String]**](String.md)| Not included network domains. Example: \"mybusiness.net,workgroup\". | [optional] 
 **createdAtLt** | **Date**| Agents created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **gcpServiceAccountContains** | [**[String]**](String.md)| Free-text filter by gcp service account (supports multiple values) | [optional] 
 **threatResolved** | **Boolean**| Include only Agents with at least one resolved threat | [optional] 
 **cloudLocationContains** | [**[String]**](String.md)| Free-text filter by cloud location (supports multiple values) | [optional] 
 **lastActiveDateLt** | **Date**| Agents last active before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **networkStatuses** | [**[String]**](String.md)| Included network statuses. Example: \"connected,connecting\". | [optional] 
 **k8sTypeContains** | [**[String]**](String.md)| Free-text filter by K8s type(supports multiple values) | [optional] 
 **networkInterfaceGatewayMacAddressContains** | [**[String]**](String.md)| Free-text filter by Gateway MAC address (supports multiple values). Example: \"aa:0f,:41:\". | [optional] 
 **cpuCountBetween** | **String**| Possible number of CPU cores (inclusive). Example: \"2-8\". | [optional] 
 **operationalStatesNin** | [**[String]**](String.md)| Do not include these Agent operational states | [optional] 
 **totalMemoryLt** | **Number**| Memory size (MB, less than) | [optional] 
 **k8sVersionContains** | [**[String]**](String.md)| Free-text filter by K8s version (supports multiple values) | [optional] 
 **installerTypes** | [**[String]**](String.md)| Include only Agents installed with these package types. Example: \".msi\". | [optional] 
 **adUserMemberContains** | [**[String]**](String.md)| Free-text filter by Active Directory user groups string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **infected** | **Boolean**| Include only Agents with at least one active threat | [optional] 
 **coreCountLt** | **Number**| CPU cores (less than) | [optional] 
 **missingPermissions** | [**[String]**](String.md)| Included missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\". | [optional] 
 **installerTypesNin** | [**[String]**](String.md)| Exclude Agents installed with these package types. Example: \".msi\". | [optional] 
 **machineTypesNin** | [**[String]**](String.md)| Not included machine types. Example: \"laptop,desktop\". | [optional] 
 **filterId** | **String**| Include all Agents matching this saved filter. Example: \"225494730938493804\". | [optional] 
 **isDecommissioned** | [**[Boolean]**](Boolean.md)| Include active, decommissioned or both. Example: \"True,False\". | [optional] 
 **agentVersionLt** | **String**| Agents versions less than given version. Example: \"2.5.1.1320\". | [optional] 
 **rangerStatusesNin** | [**[String]**](String.md)| Do not include these Ranger Statuses. Example: \"NotApplicable\". | [optional] 
 **cloudInstanceSizeContains** | [**[String]**](String.md)| Free-text filter by cloud instance size(supports multiple values) | [optional] 
 **rangerVersionsNin** | [**[String]**](String.md)| Ranger versions not to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **rsoLevel** | **String**| Supported Remote Script Orchestration level. Example: \"none\". | [optional] 
 **cpuCountLte** | **Number**| Number of CPUs (less than or equal) | [optional] 
 **updatedAtBetween** | **String**| Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **consoleMigrationStatuses** | [**[String]**](String.md)| Migration status in. Example: \"N/A\". | [optional] 
 **azureResourceGroupContains** | [**[String]**](String.md)| Free-text filter by azure resource group(supports multiple values) | [optional] 
 **threatCreatedAtGt** | **Date**| Agents with threats reported after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **uuidContains** | [**[String]**](String.md)| Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\". | [optional] 
 **networkStatusesNin** | [**[String]**](String.md)| Included network statuses. Example: \"connected,connecting\". | [optional] 
 **totalMemoryLte** | **Number**| Memory size (MB, less than or equal) | [optional] 
 **activeThreatsGt** | **Number**| Include Agents with at least this amount of active threats. Example: \"5\". | [optional] 
 **lastSuccessfulScanDateLt** | **Date**| Agents last successful full disk scan before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **adQuery** | **String**| An Active Directory query string. Example: \"CN=Managers,DC=sentinelone,DC=com\". | [optional] 
 **uuids** | [**[String]**](String.md)| A list of included UUIDs. Example: \"ff819e70af13be381993075eb0ce5f2f6de05b11,ff819e70af13be381993075eb0ce5f2f6de05c22\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiExportAgentsLightGet"></a>
# **webApiExportAgentsLightGet**
> webApiExportAgentsLightGet(opts)

Export Agents - Light

Export Agent data to a CSV, for Agents that match the filter. This command exports up to 300000 items (each datum is an item).

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentsApi();

var opts = { 
  'agentVersionsNin': ["agentVersionsNin_example"], // [String] | Agent versions not to include. Example: \"2.0.0.0,2.1.5.144\".
  'registeredAtBetween': "registeredAtBetween_example", // String | Date range for first registration time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'registeredAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'adComputerQueryContains': ["adComputerQueryContains_example"], // [String] | Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,Windows\".
  'mitigationModeSuspicious': "mitigationModeSuspicious_example", // String | Mitigation mode policy for suspicious activity. Example: \"detect\".
  'hasLocalConfiguration': true, // Boolean | Agent has a local configuration set
  'adUserQueryContains': ["adUserQueryContains_example"], // [String] | Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,John\".
  'query': "query_example", // String | A free-text search term, will match applicable attributes (sub-string match). Note: Device's physical addresses will be matched if they start with the search term only (no match if they contain the term). Example: \"Linux\".
  'cloudProvider': ["cloudProvider_example"], // [String] | Agents from which cloud provider
  'coreCountGt': 56, // Number | CPU cores (more than)
  'decommissionedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'registeredAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'totalMemoryGt': 56, // Number | Memory size (MB, more than)
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'hasContainerizedWorkload': true, // Boolean | Include only Agents protecting containerized workloads
  'cloudImageContains': ["cloudImageContains_example"], // [String] | Free-text filter by cloud image (supports multiple values)
  'threatCreatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'appsVulnerabilityStatusesNin': ["appsVulnerabilityStatusesNin_example"], // [String] | Apps vulnerability status nin. Example: \"patch_required\".
  'scanStatusesNin': ["scanStatusesNin_example"], // [String] | Not included scan statuses. Example: \"started,aborted\".
  'adComputerMemberContains': ["adComputerMemberContains_example"], // [String] | Free-text filter by Active Directory computer groups string (supports multiple values). Example: \"DC=sentinelone\".
  'coreCountLte': 56, // Number | CPU cores (less than or equal)
  'rangerVersions': ["rangerVersions_example"], // [String] | Ranger versions to include. Example: \"2.0.0.0,2.1.5.144\".
  'machineTypes': ["machineTypes_example"], // [String] | Included machine types. Example: \"laptop,desktop\".
  'coreCountGte': 56, // Number | CPU cores (more than or equal)
  'locationIds': ["locationIds_example"], // [String] | Include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\".
  'locationIdsNin': ["locationIdsNin_example"], // [String] | Do not include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\".
  'gatewayIp': "gatewayIp_example", // String | Gateway ip. Example: \"192.168.0.1\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'missingPermissionsNin': ["missingPermissionsNin_example"], // [String] | Excluded missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\".
  'migrationStatus': "migrationStatus_example", // String | Migration status. Example: \"N/A\".
  'threatRebootRequired': [true], // [Boolean] | Has at least one threat with at least one mitigation action pending reboot to succeed
  'serialNumberContains': ["serialNumberContains_example"], // [String] | Free-text filter by Serial Number (supports multiple values)
  'decommissionedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'lastSuccessfulScanDateBetween': "lastSuccessfulScanDateBetween_example", // String | Date range for last successful full disk scan(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'lastActiveDateLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'lastActiveDateBetween': "lastActiveDateBetween_example", // String | Date range for last active date(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'networkQuarantineEnabled': [true], // [Boolean] | The agents supports Network Quarantine Control and its enabled for the agent's group
  'cloudTagsContains': ["cloudTagsContains_example"], // [String] | Free-text filter by cloud tags (supports multiple values)
  'threatCreatedAtBetween': "threatCreatedAtBetween_example", // String | Agents with threats reported in a date range (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\".
  'encryptedApplications': true, // Boolean | Disk encryption status
  'isUninstalled': [true], // [Boolean] | Include installed, uninstalled or both. Example: \"True,False\".
  'networkInterfacePhysicalContains': ["networkInterfacePhysicalContains_example"], // [String] | Free-text filter by MAC address (supports multiple values). Example: \"aa:0f,:41:\".
  'agentVersionGte': "agentVersionGte_example", // String | Agents versions greater than or equal to given version. Example: \"2.5.1.1320\".
  'lastSuccessfulScanDateGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'operationalStates': ["operationalStates_example"], // [String] | Agent operational state
  'adUserNameContains': ["adUserNameContains_example"], // [String] | Free-text filter by Active Directory username string (supports multiple values). Example: \"DC=sentinelone\".
  'osTypesNin': ["osTypesNin_example"], // [String] | Not included OS types. Example: \"windows\".
  'csvFilterId': "csvFilterId_example", // String | The ID of the CSV file to filter by. Example: \"225494730938493804\".
  'isActive': true, // Boolean | Include only active Agents
  'mitigationMode': "mitigationMode_example", // String | Agent mitigation mode policy. Example: \"detect\".
  'awsSubnetIdsContains': ["awsSubnetIdsContains_example"], // [String] | Free-text filter by aws subnet ids (supports multiple values)
  'agentVersionLte': "agentVersionLte_example", // String | Agents versions less than or equal to given version. Example: \"2.5.1.1320\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'osVersionContains': ["osVersionContains_example"], // [String] | Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\".
  'externalIpContains': ["externalIpContains_example"], // [String] | Free-text filter by visible IP (supports multiple values). Example: \"205,127.0\".
  'awsSecurityGroupsContains': ["awsSecurityGroupsContains_example"], // [String] | Free-text filter by aws securityGroups(supports multiple values)
  'k8sNodeNameContains': ["k8sNodeNameContains_example"], // [String] | Free-text filter by K8s node name (supports multiple values)
  'agentVersionBetween': "agentVersionBetween_example", // String | Version range for agent version (format: <from_version>-<to_version>, inclusive). Example: \"2.0.0.0-2.1.5.144\".
  'activeThreats': 56, // Number | Include Agents with this amount of active threats. Example: \"3\".
  'hasTags': true, // Boolean | Include only Agents that have any tags assigned if True, or none if False
  'agentNamespaceContains': ["agentNamespaceContains_example"], // [String] | Free-text filter by agent namespace (supports multiple values)
  'cpuCountLt': 56, // Number | Number of CPUs (less than)
  'registeredAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'networkInterfaceInetContains': ["networkInterfaceInetContains_example"], // [String] | Free-text filter by local IP (supports multiple values). Example: \"192,10.0.0\".
  'computerNameContains': ["computerNameContains_example"], // [String] | Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\".
  'cloudNetworkContains': ["cloudNetworkContains_example"], // [String] | Free-text filter by cloud network (supports multiple values)
  'remoteOpsForensicsSupported': true, // Boolean | Include only agents that has Remote Ops Forensicsfeature supported
  'remoteProfilingStates': ["remoteProfilingStates_example"], // [String] | Agent remote profiling state
  'filteredGroupIds': ["filteredGroupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'agentPodNameContains': ["agentPodNameContains_example"], // [String] | Free-text filter by agent pod name (supports multiple values)
  'userActionsNeededNin': ["userActionsNeededNin_example"], // [String] | Excluded pending user actions. Example: \"reboot_needed,upgrade_needed\".
  'rangerStatuses': ["rangerStatuses_example"], // [String] | Status of Ranger. Example: \"NotApplicable\".
  'computerNameLike': "computerNameLike_example", // String | Match computer name partially (substring). Example: \"Lab1\".
  'externalIdContains': ["externalIdContains_example"], // [String] | Free-text filter by external ID (Customer ID). Example: \"Tag#1 - monitoring,Performance machine\".
  'createdAtBetween': "createdAtBetween_example", // String | Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'consoleMigrationStatusesNin': ["consoleMigrationStatusesNin_example"], // [String] | Migration status nin. Example: \"N/A\".
  'cpuIdContains': ["cpuIdContains_example"], // [String] | Free-text filter by CPU name (supports multiple values). Example: \"Intel,AMD\".
  'coreCountBetween': "coreCountBetween_example", // String | Possible number of CPU cores (inclusive). Example: \"2-8\".
  'isUpToDate': true, // Boolean | Include only Agents with updated software
  'threatCreatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'rangerStatus': "rangerStatus_example", // String | [DEPRECATED] Use rangerStatuses. Example: \"NotApplicable\".
  'totalMemoryBetween': "totalMemoryBetween_example", // String | Total memory range (GB, inclusive). Example: \"4-8\".
  'lastSuccessfulScanDateLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'domains': ["domains_example"], // [String] | Included network domains. Example: \"mybusiness.net,workgroup\".
  'awsRoleContains': ["awsRoleContains_example"], // [String] | Free-text filter by aws role(supports multiple values)
  'lastLoggedInUserNameContains': ["lastLoggedInUserNameContains_example"], // [String] | Free-text filter by username (supports multiple values). Example: \"admin,johnd1\".
  'cpuCountGt': 56, // Number | Number of CPUs (more than)
  'cloudAccountContains': ["cloudAccountContains_example"], // [String] | Free-text filter by cloud account (supports multiple values)
  'clusterNameContains': ["clusterNameContains_example"], // [String] | Free-text filter by cluster name (supports multiple values)
  'scanStatuses': ["scanStatuses_example"], // [String] | Included scan statuses. Example: \"started,aborted\".
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'ids': ["ids_example"], // [String] | A list of Agent IDs. Example: \"225494730938493804,225494730938493915\".
  'liveUpdateIdContains': ["liveUpdateIdContains_example"], // [String] | Free-text filter by live update ID (supports multiple values)
  'computerName': "computerName_example", // String | Computer name. Example: \"My Office Desktop\".
  'uuid': "uuid_example", // String | Agent's universally unique identifier. Example: \"ff819e70af13be381993075eb0ce5f2f6de05be2\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types. Example: \"windows\".
  'appsVulnerabilityStatuses': ["appsVulnerabilityStatuses_example"], // [String] | Apps vulnerability status in. Example: \"patch_required\".
  'lastActiveDateGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active after or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatContentHash': "threatContentHash_example", // String | Include only Agents that have at least one threat with this content hash. Example: \"cf23df2207d99a74fbe169e3eba035e633b65d94\".
  'remoteProfilingStatesNin': ["remoteProfilingStatesNin_example"], // [String] | Do not include these Agent remote profiling states
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'scanStatus': "scanStatus_example", // String | Scan status. Example: \"none\".
  'filteredSiteIds': ["filteredSiteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'userActionsNeeded': ["userActionsNeeded_example"], // [String] | Included pending user actions. Example: \"reboot_needed,upgrade_needed\".
  'registeredAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents registered after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'osArch': "osArch_example", // String | OS architecture. Example: \"32 bit\".
  'adComputerNameContains': ["adComputerNameContains_example"], // [String] | Free-text filter by Active Directory computer name string (supports multiple values). Example: \"DC=sentinelone\".
  'totalMemoryGte': 56, // Number | Memory size (MB, more than or equal)
  'threatHidden': true, // Boolean | Include only Agents with at least one hidden threat
  'lastActiveDateGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatCreatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported before or at this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'cpuCountGte': 56, // Number | Number of CPUs (more than or equal)
  'cloudInstanceIdContains': ["cloudInstanceIdContains_example"], // [String] | Free-text filter by cloud instance id(supports multiple values)
  'agentVersions': ["agentVersions_example"], // [String] | Agent versions to include. Example: \"2.0.0.0,2.1.5.144\".
  'adQueryContains': ["adQueryContains_example"], // [String] | Free-text filter by Active Directory string (supports multiple values). Example: \"DC=sentinelone\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'locationEnabled': [true], // [Boolean] | The agents supports Location Awareness and it is enabled for the agent's group
  'cloudProviderNin': ["cloudProviderNin_example"], // [String] | Exclude Agents from these cloud provider
  'isPendingUninstall': true, // Boolean | Include only Agents with pending uninstall requests
  'k8sNodeLabelsContains': ["k8sNodeLabelsContains_example"], // [String] | Free-text filter by K8s node labels (supports multiple values)
  'decommissionedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'tagsData': "tagsData_example", // String | Filter agents by their assigned tags. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\".
  'agentVersionGt': "agentVersionGt_example", // String | Agents versions greater than given version. Example: \"2.5.1.1320\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatMitigationStatus': "threatMitigationStatus_example", // String | Include only Agents that have threats with this mitigation status. Example: \"mitigated\".
  'lastSuccessfulScanDateGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'firewallEnabled': [true], // [Boolean] | The agents supports Firewall Control and it is enabled for the agent's group
  'decommissionedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'decommissionedAtBetween': "decommissionedAtBetween_example", // String | Date range for decommission time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'domainsNin': ["domainsNin_example"], // [String] | Not included network domains. Example: \"mybusiness.net,workgroup\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'gcpServiceAccountContains': ["gcpServiceAccountContains_example"], // [String] | Free-text filter by gcp service account (supports multiple values)
  'threatResolved': true, // Boolean | Include only Agents with at least one resolved threat
  'cloudLocationContains': ["cloudLocationContains_example"], // [String] | Free-text filter by cloud location (supports multiple values)
  'lastActiveDateLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last active before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'networkStatuses': ["networkStatuses_example"], // [String] | Included network statuses. Example: \"connected,connecting\".
  'k8sTypeContains': ["k8sTypeContains_example"], // [String] | Free-text filter by K8s type(supports multiple values)
  'networkInterfaceGatewayMacAddressContains': ["networkInterfaceGatewayMacAddressContains_example"], // [String] | Free-text filter by Gateway MAC address (supports multiple values). Example: \"aa:0f,:41:\".
  'cpuCountBetween': "cpuCountBetween_example", // String | Possible number of CPU cores (inclusive). Example: \"2-8\".
  'operationalStatesNin': ["operationalStatesNin_example"], // [String] | Do not include these Agent operational states
  'totalMemoryLt': 56, // Number | Memory size (MB, less than)
  'k8sVersionContains': ["k8sVersionContains_example"], // [String] | Free-text filter by K8s version (supports multiple values)
  'installerTypes': ["installerTypes_example"], // [String] | Include only Agents installed with these package types. Example: \".msi\".
  'adUserMemberContains': ["adUserMemberContains_example"], // [String] | Free-text filter by Active Directory user groups string (supports multiple values). Example: \"DC=sentinelone\".
  'infected': true, // Boolean | Include only Agents with at least one active threat
  'coreCountLt': 56, // Number | CPU cores (less than)
  'missingPermissions': ["missingPermissions_example"], // [String] | Included missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\".
  'installerTypesNin': ["installerTypesNin_example"], // [String] | Exclude Agents installed with these package types. Example: \".msi\".
  'machineTypesNin': ["machineTypesNin_example"], // [String] | Not included machine types. Example: \"laptop,desktop\".
  'filterId': "filterId_example", // String | Include all Agents matching this saved filter. Example: \"225494730938493804\".
  'isDecommissioned': [true], // [Boolean] | Include active, decommissioned or both. Example: \"True,False\".
  'agentVersionLt': "agentVersionLt_example", // String | Agents versions less than given version. Example: \"2.5.1.1320\".
  'rangerStatusesNin': ["rangerStatusesNin_example"], // [String] | Do not include these Ranger Statuses. Example: \"NotApplicable\".
  'cloudInstanceSizeContains': ["cloudInstanceSizeContains_example"], // [String] | Free-text filter by cloud instance size(supports multiple values)
  'rangerVersionsNin': ["rangerVersionsNin_example"], // [String] | Ranger versions not to include. Example: \"2.0.0.0,2.1.5.144\".
  'rsoLevel': "rsoLevel_example", // String | Supported Remote Script Orchestration level. Example: \"none\".
  'cpuCountLte': 56, // Number | Number of CPUs (less than or equal)
  'updatedAtBetween': "updatedAtBetween_example", // String | Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'consoleMigrationStatuses': ["consoleMigrationStatuses_example"], // [String] | Migration status in. Example: \"N/A\".
  'azureResourceGroupContains': ["azureResourceGroupContains_example"], // [String] | Free-text filter by azure resource group(supports multiple values)
  'threatCreatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents with threats reported after this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'uuidContains': ["uuidContains_example"], // [String] | Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\".
  'networkStatusesNin': ["networkStatusesNin_example"], // [String] | Included network statuses. Example: \"connected,connecting\".
  'totalMemoryLte': 56, // Number | Memory size (MB, less than or equal)
  'activeThreatsGt': 56, // Number | Include Agents with at least this amount of active threats. Example: \"5\".
  'lastSuccessfulScanDateLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Agents last successful full disk scan before this time. Example: \"2018-02-27T04:49:26.257525Z\".
  'adQuery': "adQuery_example", // String | An Active Directory query string. Example: \"CN=Managers,DC=sentinelone,DC=com\".
  'uuids': ["uuids_example"] // [String] | A list of included UUIDs. Example: \"ff819e70af13be381993075eb0ce5f2f6de05b11,ff819e70af13be381993075eb0ce5f2f6de05c22\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExportAgentsLightGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentVersionsNin** | [**[String]**](String.md)| Agent versions not to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **registeredAtBetween** | **String**| Date range for first registration time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **registeredAtLte** | **Date**| Agents registered before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **adComputerQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,Windows\". | [optional] 
 **mitigationModeSuspicious** | **String**| Mitigation mode policy for suspicious activity. Example: \"detect\". | [optional] 
 **hasLocalConfiguration** | **Boolean**| Agent has a local configuration set | [optional] 
 **adUserQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name or its groups (supports multiple values). Example: \"DC=sentinelone,John\". | [optional] 
 **query** | **String**| A free-text search term, will match applicable attributes (sub-string match). Note: Device's physical addresses will be matched if they start with the search term only (no match if they contain the term). Example: \"Linux\". | [optional] 
 **cloudProvider** | [**[String]**](String.md)| Agents from which cloud provider | [optional] 
 **coreCountGt** | **Number**| CPU cores (more than) | [optional] 
 **decommissionedAtGt** | **Date**| Agents decommissioned after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **registeredAtGte** | **Date**| Agents registered after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **totalMemoryGt** | **Number**| Memory size (MB, more than) | [optional] 
 **updatedAtGt** | **Date**| Agents updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **hasContainerizedWorkload** | **Boolean**| Include only Agents protecting containerized workloads | [optional] 
 **cloudImageContains** | [**[String]**](String.md)| Free-text filter by cloud image (supports multiple values) | [optional] 
 **threatCreatedAtGte** | **Date**| Agents with threats reported after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **appsVulnerabilityStatusesNin** | [**[String]**](String.md)| Apps vulnerability status nin. Example: \"patch_required\". | [optional] 
 **scanStatusesNin** | [**[String]**](String.md)| Not included scan statuses. Example: \"started,aborted\". | [optional] 
 **adComputerMemberContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer groups string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **coreCountLte** | **Number**| CPU cores (less than or equal) | [optional] 
 **rangerVersions** | [**[String]**](String.md)| Ranger versions to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **machineTypes** | [**[String]**](String.md)| Included machine types. Example: \"laptop,desktop\". | [optional] 
 **coreCountGte** | **Number**| CPU cores (more than or equal) | [optional] 
 **locationIds** | [**[String]**](String.md)| Include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **locationIdsNin** | [**[String]**](String.md)| Do not include only Agents reporting these locations. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **gatewayIp** | **String**| Gateway ip. Example: \"192.168.0.1\". | [optional] 
 **updatedAtLte** | **Date**| Agents updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **missingPermissionsNin** | [**[String]**](String.md)| Excluded missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\". | [optional] 
 **migrationStatus** | **String**| Migration status. Example: \"N/A\". | [optional] 
 **threatRebootRequired** | [**[Boolean]**](Boolean.md)| Has at least one threat with at least one mitigation action pending reboot to succeed | [optional] 
 **serialNumberContains** | [**[String]**](String.md)| Free-text filter by Serial Number (supports multiple values) | [optional] 
 **decommissionedAtGte** | **Date**| Agents decommissioned after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **lastSuccessfulScanDateBetween** | **String**| Date range for last successful full disk scan(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **lastActiveDateLte** | **Date**| Agents last active before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **lastActiveDateBetween** | **String**| Date range for last active date(format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **networkQuarantineEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Network Quarantine Control and its enabled for the agent's group | [optional] 
 **cloudTagsContains** | [**[String]**](String.md)| Free-text filter by cloud tags (supports multiple values) | [optional] 
 **threatCreatedAtBetween** | **String**| Agents with threats reported in a date range (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **encryptedApplications** | **Boolean**| Disk encryption status | [optional] 
 **isUninstalled** | [**[Boolean]**](Boolean.md)| Include installed, uninstalled or both. Example: \"True,False\". | [optional] 
 **networkInterfacePhysicalContains** | [**[String]**](String.md)| Free-text filter by MAC address (supports multiple values). Example: \"aa:0f,:41:\". | [optional] 
 **agentVersionGte** | **String**| Agents versions greater than or equal to given version. Example: \"2.5.1.1320\". | [optional] 
 **lastSuccessfulScanDateGte** | **Date**| Agents last successful full disk scan after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **operationalStates** | [**[String]**](String.md)| Agent operational state | [optional] 
 **adUserNameContains** | [**[String]**](String.md)| Free-text filter by Active Directory username string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **osTypesNin** | [**[String]**](String.md)| Not included OS types. Example: \"windows\". | [optional] 
 **csvFilterId** | **String**| The ID of the CSV file to filter by. Example: \"225494730938493804\". | [optional] 
 **isActive** | **Boolean**| Include only active Agents | [optional] 
 **mitigationMode** | **String**| Agent mitigation mode policy. Example: \"detect\". | [optional] 
 **awsSubnetIdsContains** | [**[String]**](String.md)| Free-text filter by aws subnet ids (supports multiple values) | [optional] 
 **agentVersionLte** | **String**| Agents versions less than or equal to given version. Example: \"2.5.1.1320\". | [optional] 
 **updatedAtGte** | **Date**| Agents updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osVersionContains** | [**[String]**](String.md)| Free-text filter by OS full name and version (supports multiple values). Example: \"Service Pack 1\". | [optional] 
 **externalIpContains** | [**[String]**](String.md)| Free-text filter by visible IP (supports multiple values). Example: \"205,127.0\". | [optional] 
 **awsSecurityGroupsContains** | [**[String]**](String.md)| Free-text filter by aws securityGroups(supports multiple values) | [optional] 
 **k8sNodeNameContains** | [**[String]**](String.md)| Free-text filter by K8s node name (supports multiple values) | [optional] 
 **agentVersionBetween** | **String**| Version range for agent version (format: <from_version>-<to_version>, inclusive). Example: \"2.0.0.0-2.1.5.144\". | [optional] 
 **activeThreats** | **Number**| Include Agents with this amount of active threats. Example: \"3\". | [optional] 
 **hasTags** | **Boolean**| Include only Agents that have any tags assigned if True, or none if False | [optional] 
 **agentNamespaceContains** | [**[String]**](String.md)| Free-text filter by agent namespace (supports multiple values) | [optional] 
 **cpuCountLt** | **Number**| Number of CPUs (less than) | [optional] 
 **registeredAtLt** | **Date**| Agents registered before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **networkInterfaceInetContains** | [**[String]**](String.md)| Free-text filter by local IP (supports multiple values). Example: \"192,10.0.0\". | [optional] 
 **computerNameContains** | [**[String]**](String.md)| Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\". | [optional] 
 **cloudNetworkContains** | [**[String]**](String.md)| Free-text filter by cloud network (supports multiple values) | [optional] 
 **remoteOpsForensicsSupported** | **Boolean**| Include only agents that has Remote Ops Forensicsfeature supported | [optional] 
 **remoteProfilingStates** | [**[String]**](String.md)| Agent remote profiling state | [optional] 
 **filteredGroupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **agentPodNameContains** | [**[String]**](String.md)| Free-text filter by agent pod name (supports multiple values) | [optional] 
 **userActionsNeededNin** | [**[String]**](String.md)| Excluded pending user actions. Example: \"reboot_needed,upgrade_needed\". | [optional] 
 **rangerStatuses** | [**[String]**](String.md)| Status of Ranger. Example: \"NotApplicable\". | [optional] 
 **computerNameLike** | **String**| Match computer name partially (substring). Example: \"Lab1\". | [optional] 
 **externalIdContains** | [**[String]**](String.md)| Free-text filter by external ID (Customer ID). Example: \"Tag#1 - monitoring,Performance machine\". | [optional] 
 **createdAtBetween** | **String**| Date range for creation time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **consoleMigrationStatusesNin** | [**[String]**](String.md)| Migration status nin. Example: \"N/A\". | [optional] 
 **cpuIdContains** | [**[String]**](String.md)| Free-text filter by CPU name (supports multiple values). Example: \"Intel,AMD\". | [optional] 
 **coreCountBetween** | **String**| Possible number of CPU cores (inclusive). Example: \"2-8\". | [optional] 
 **isUpToDate** | **Boolean**| Include only Agents with updated software | [optional] 
 **threatCreatedAtLt** | **Date**| Agents with threats reported before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **rangerStatus** | **String**| [DEPRECATED] Use rangerStatuses. Example: \"NotApplicable\". | [optional] 
 **totalMemoryBetween** | **String**| Total memory range (GB, inclusive). Example: \"4-8\". | [optional] 
 **lastSuccessfulScanDateLte** | **Date**| Agents last successful full disk scan before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **domains** | [**[String]**](String.md)| Included network domains. Example: \"mybusiness.net,workgroup\". | [optional] 
 **awsRoleContains** | [**[String]**](String.md)| Free-text filter by aws role(supports multiple values) | [optional] 
 **lastLoggedInUserNameContains** | [**[String]**](String.md)| Free-text filter by username (supports multiple values). Example: \"admin,johnd1\". | [optional] 
 **cpuCountGt** | **Number**| Number of CPUs (more than) | [optional] 
 **cloudAccountContains** | [**[String]**](String.md)| Free-text filter by cloud account (supports multiple values) | [optional] 
 **clusterNameContains** | [**[String]**](String.md)| Free-text filter by cluster name (supports multiple values) | [optional] 
 **scanStatuses** | [**[String]**](String.md)| Included scan statuses. Example: \"started,aborted\". | [optional] 
 **updatedAtLt** | **Date**| Agents updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **ids** | [**[String]**](String.md)| A list of Agent IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **liveUpdateIdContains** | [**[String]**](String.md)| Free-text filter by live update ID (supports multiple values) | [optional] 
 **computerName** | **String**| Computer name. Example: \"My Office Desktop\". | [optional] 
 **uuid** | **String**| Agent's universally unique identifier. Example: \"ff819e70af13be381993075eb0ce5f2f6de05be2\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types. Example: \"windows\". | [optional] 
 **appsVulnerabilityStatuses** | [**[String]**](String.md)| Apps vulnerability status in. Example: \"patch_required\". | [optional] 
 **lastActiveDateGte** | **Date**| Agents last active after or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatContentHash** | **String**| Include only Agents that have at least one threat with this content hash. Example: \"cf23df2207d99a74fbe169e3eba035e633b65d94\". | [optional] 
 **remoteProfilingStatesNin** | [**[String]**](String.md)| Do not include these Agent remote profiling states | [optional] 
 **createdAtLte** | **Date**| Agents created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **scanStatus** | **String**| Scan status. Example: \"none\". | [optional] 
 **filteredSiteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **userActionsNeeded** | [**[String]**](String.md)| Included pending user actions. Example: \"reboot_needed,upgrade_needed\". | [optional] 
 **registeredAtGt** | **Date**| Agents registered after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **osArch** | **String**| OS architecture. Example: \"32 bit\". | [optional] 
 **adComputerNameContains** | [**[String]**](String.md)| Free-text filter by Active Directory computer name string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **totalMemoryGte** | **Number**| Memory size (MB, more than or equal) | [optional] 
 **threatHidden** | **Boolean**| Include only Agents with at least one hidden threat | [optional] 
 **lastActiveDateGt** | **Date**| Agents last active after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatCreatedAtLte** | **Date**| Agents with threats reported before or at this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **cpuCountGte** | **Number**| Number of CPUs (more than or equal) | [optional] 
 **cloudInstanceIdContains** | [**[String]**](String.md)| Free-text filter by cloud instance id(supports multiple values) | [optional] 
 **agentVersions** | [**[String]**](String.md)| Agent versions to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **adQueryContains** | [**[String]**](String.md)| Free-text filter by Active Directory string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **createdAtGte** | **Date**| Agents created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **locationEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Location Awareness and it is enabled for the agent's group | [optional] 
 **cloudProviderNin** | [**[String]**](String.md)| Exclude Agents from these cloud provider | [optional] 
 **isPendingUninstall** | **Boolean**| Include only Agents with pending uninstall requests | [optional] 
 **k8sNodeLabelsContains** | [**[String]**](String.md)| Free-text filter by K8s node labels (supports multiple values) | [optional] 
 **decommissionedAtLte** | **Date**| Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **tagsData** | **String**| Filter agents by their assigned tags. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\". | [optional] 
 **agentVersionGt** | **String**| Agents versions greater than given version. Example: \"2.5.1.1320\". | [optional] 
 **createdAtGt** | **Date**| Agents created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatMitigationStatus** | **String**| Include only Agents that have threats with this mitigation status. Example: \"mitigated\". | [optional] 
 **lastSuccessfulScanDateGt** | **Date**| Agents last successful full disk scan after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **firewallEnabled** | [**[Boolean]**](Boolean.md)| The agents supports Firewall Control and it is enabled for the agent's group | [optional] 
 **decommissionedAtLt** | **Date**| Agents decommissioned before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **decommissionedAtBetween** | **String**| Date range for decommission time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **domainsNin** | [**[String]**](String.md)| Not included network domains. Example: \"mybusiness.net,workgroup\". | [optional] 
 **createdAtLt** | **Date**| Agents created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **gcpServiceAccountContains** | [**[String]**](String.md)| Free-text filter by gcp service account (supports multiple values) | [optional] 
 **threatResolved** | **Boolean**| Include only Agents with at least one resolved threat | [optional] 
 **cloudLocationContains** | [**[String]**](String.md)| Free-text filter by cloud location (supports multiple values) | [optional] 
 **lastActiveDateLt** | **Date**| Agents last active before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **networkStatuses** | [**[String]**](String.md)| Included network statuses. Example: \"connected,connecting\". | [optional] 
 **k8sTypeContains** | [**[String]**](String.md)| Free-text filter by K8s type(supports multiple values) | [optional] 
 **networkInterfaceGatewayMacAddressContains** | [**[String]**](String.md)| Free-text filter by Gateway MAC address (supports multiple values). Example: \"aa:0f,:41:\". | [optional] 
 **cpuCountBetween** | **String**| Possible number of CPU cores (inclusive). Example: \"2-8\". | [optional] 
 **operationalStatesNin** | [**[String]**](String.md)| Do not include these Agent operational states | [optional] 
 **totalMemoryLt** | **Number**| Memory size (MB, less than) | [optional] 
 **k8sVersionContains** | [**[String]**](String.md)| Free-text filter by K8s version (supports multiple values) | [optional] 
 **installerTypes** | [**[String]**](String.md)| Include only Agents installed with these package types. Example: \".msi\". | [optional] 
 **adUserMemberContains** | [**[String]**](String.md)| Free-text filter by Active Directory user groups string (supports multiple values). Example: \"DC=sentinelone\". | [optional] 
 **infected** | **Boolean**| Include only Agents with at least one active threat | [optional] 
 **coreCountLt** | **Number**| CPU cores (less than) | [optional] 
 **missingPermissions** | [**[String]**](String.md)| Included missing permissions. Example: \"user_action_needed_bluetooth_per,user_action_needed_fda_helper\". | [optional] 
 **installerTypesNin** | [**[String]**](String.md)| Exclude Agents installed with these package types. Example: \".msi\". | [optional] 
 **machineTypesNin** | [**[String]**](String.md)| Not included machine types. Example: \"laptop,desktop\". | [optional] 
 **filterId** | **String**| Include all Agents matching this saved filter. Example: \"225494730938493804\". | [optional] 
 **isDecommissioned** | [**[Boolean]**](Boolean.md)| Include active, decommissioned or both. Example: \"True,False\". | [optional] 
 **agentVersionLt** | **String**| Agents versions less than given version. Example: \"2.5.1.1320\". | [optional] 
 **rangerStatusesNin** | [**[String]**](String.md)| Do not include these Ranger Statuses. Example: \"NotApplicable\". | [optional] 
 **cloudInstanceSizeContains** | [**[String]**](String.md)| Free-text filter by cloud instance size(supports multiple values) | [optional] 
 **rangerVersionsNin** | [**[String]**](String.md)| Ranger versions not to include. Example: \"2.0.0.0,2.1.5.144\". | [optional] 
 **rsoLevel** | **String**| Supported Remote Script Orchestration level. Example: \"none\". | [optional] 
 **cpuCountLte** | **Number**| Number of CPUs (less than or equal) | [optional] 
 **updatedAtBetween** | **String**| Date range for update time (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **consoleMigrationStatuses** | [**[String]**](String.md)| Migration status in. Example: \"N/A\". | [optional] 
 **azureResourceGroupContains** | [**[String]**](String.md)| Free-text filter by azure resource group(supports multiple values) | [optional] 
 **threatCreatedAtGt** | **Date**| Agents with threats reported after this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **uuidContains** | [**[String]**](String.md)| Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\". | [optional] 
 **networkStatusesNin** | [**[String]**](String.md)| Included network statuses. Example: \"connected,connecting\". | [optional] 
 **totalMemoryLte** | **Number**| Memory size (MB, less than or equal) | [optional] 
 **activeThreatsGt** | **Number**| Include Agents with at least this amount of active threats. Example: \"5\". | [optional] 
 **lastSuccessfulScanDateLt** | **Date**| Agents last successful full disk scan before this time. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **adQuery** | **String**| An Active Directory query string. Example: \"CN=Managers,DC=sentinelone,DC=com\". | [optional] 
 **uuids** | [**[String]**](String.md)| A list of included UUIDs. Example: \"ff819e70af13be381993075eb0ce5f2f6de05b11,ff819e70af13be381993075eb0ce5f2f6de05c22\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

