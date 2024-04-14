# S1MgmtApi.V21AlertsSchemasAlertsIncidentSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerImageNameContains** | **[String]** | Free-text filter by the endpoint container image name (supports multiple values) | [optional] 
**limit** | **Number** | Limit | [optional] 
**reportedAtGte** | **Date** | Reported at greater or equal than. | [optional] 
**tenant** | **Boolean** | Indicates a tenant scope request | [optional] 
**reportedAtLte** | **Date** | Reported at lesser or equal than. | [optional] 
**sourceProcessNameContains** | **[String]** | Free-text filter by source process name | [optional] 
**incidentStatus** | **[String]** | Filter threats by a incident status | [optional] 
**sourceProcessCommandlineContains** | **[String]** | Free-text filter by source commandline | [optional] 
**createdAtLte** | **Date** | Created at lesser or equal than. | [optional] 
**k8sNamespaceLabelsContains** | **[String]** | Free-text filter by the endpoint Kubernetes namespace labels (supports multiple values) | [optional] 
**k8sPodContains** | **[String]** | Free-text filter by the endpoint Kubernetes pod name (supports multiple values) | [optional] 
**reportedAtGt** | **Date** | Reported at greater than. | [optional] 
**sourceProcessFileHashSha1Contains** | **[String]** | Free-text filter by source sha1 | [optional] 
**k8sNodeContains** | **[String]** | Free-text filter by the endpoint Kubernetes node name (supports multiple values) | [optional] 
**createdAtGt** | **Date** | Created at greater than. | [optional] 
**origAgentUuidContains** | **[String]** | Free-text filter by agent UUID | [optional] 
**sourceProcessFileHashMd5Contains** | **[String]** | Free-text filter by source md5 | [optional] 
**query** | **String** | Full text search for all fields | [optional] 
**osType** | **[String]** | Included OS types | [optional] 
**containerNameContains** | **[String]** | Free-text filter by the endpoint container name (supports multiple values) | [optional] 
**analystVerdict** | **[String]** | Filter threats by a analyst verdict | [optional] 
**createdAtLt** | **Date** | Created at lesser than. | [optional] 
**origAgentNameContains** | **[String]** | Free-text filter by agent name | [optional] 
**ruleNameContains** | **[String]** | Free-text filter by rule name | [optional] 
**origAgentOsRevisionContains** | **[String]** | Free-text filter by agent OS revision | [optional] 
**sourceProcessFilePathContains** | **[String]** | Free-text filter by source file path | [optional] 
**k8sControllerLabelsContains** | **[String]** | Free-text filter by the endpoint Kubernetes controller labels (supports multiple values) | [optional] 
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**containerLabelsContains** | **[String]** | Free-text filter by the endpoint container labels (supports multiple values) | [optional] 
**k8sNamespaceNameContains** | **[String]** | Free-text filter by the endpoint Kubernetes namespace name (supports multiple values) | [optional] 
**groupIds** | **[String]** | List of Group IDs to filter by | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**machineType** | **[String]** | agent machine type | [optional] 
**k8sControllerNameContains** | **[String]** | Free-text filter by the endpoint Kubernetes controller name (supports multiple values) | [optional] 
**severity** | **[String]** | Severity | [optional] 
**k8sClusterContains** | **[String]** | Free-text filter by the endpoint Kubernetes cluster name (supports multiple values) | [optional] 
**ids** | **[String]** | A list of Alert IDs | [optional] 
**scopes** | **[String]** | Filter results by scope | [optional] 
**createdAtGte** | **Date** | Created at greater or equal than. | [optional] 
**sourceProcessStorylineContains** | **[String]** | Free-text filter by source storyline | [optional] 
**origAgentVersionContains** | **[String]** | Free-text filter by agent OS version | [optional] 
**reportedAtLt** | **Date** | Reported at lesser than. | [optional] 
**k8sPodLabelsContains** | **[String]** | Free-text filter by the endpoint Kubernetes pod labels (supports multiple values) | [optional] 
**sourceProcessFileHashSha256Contains** | **[String]** | Free-text filter by source sha255 | [optional] 


<a name="[IncidentStatusEnum]"></a>
## Enum: [IncidentStatusEnum]


* `UNRESOLVED` (value: `"UNRESOLVED"`)

* `IN_PROGRESS` (value: `"IN_PROGRESS"`)

* `RESOLVED` (value: `"RESOLVED"`)




<a name="[OsTypeEnum]"></a>
## Enum: [OsTypeEnum]


* `windowsLegacy` (value: `"windows_legacy"`)

* `macos` (value: `"macos"`)

* `windows` (value: `"windows"`)

* `linux` (value: `"linux"`)




<a name="[AnalystVerdictEnum]"></a>
## Enum: [AnalystVerdictEnum]


* `UNDEFINED` (value: `"UNDEFINED"`)

* `TRUE_POSITIVE` (value: `"TRUE_POSITIVE"`)

* `FALSE_POSITIVE` (value: `"FALSE_POSITIVE"`)

* `SUSPICIOUS` (value: `"SUSPICIOUS"`)




<a name="[SeverityEnum]"></a>
## Enum: [SeverityEnum]


* `low` (value: `"Low"`)

* `medium` (value: `"Medium"`)

* `high` (value: `"High"`)

* `critical` (value: `"Critical"`)




<a name="[ScopesEnum]"></a>
## Enum: [ScopesEnum]


* `account` (value: `"account"`)

* `site` (value: `"site"`)

* `group` (value: `"group"`)

* `global` (value: `"global"`)




