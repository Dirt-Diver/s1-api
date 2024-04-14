# S1MgmtApi.ThreatAnalysisSchemasThreatEventEntitySchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeContentHash** | **String** | Active content hash | [optional] 
**indicatorCategory** | **String** | Indicator category | [optional] 
**objectType** | **String** | Object type | 
**parentProcessName** | **String** | Parent process name | [optional] 
**dnsResponse** | **String** | Dns response | [optional] 
**signedStatus** | **String** | Signed status | [optional] 
**tid** | **String** | Tid | [optional] 
**processSubSystem** | **String** | Process sub system | [optional] 
**processGroupId** | **String** | Process group id | [optional] 
**agentIsActive** | **Boolean** | Agent is active | 
**registryPath** | **String** | Registry path | [optional] 
**indicatorMetadata** | **String** | Indicator metadata | [optional] 
**processImagePath** | **String** | Process image path | [optional] 
**dnsRequest** | **String** | Dns request | [optional] 
**networkSource** | **String** | Network source | [optional] 
**taskName** | **String** | Task name | [optional] 
**storyline** | **String** | Storyline | [optional] 
**fileSha1** | **String** | File sha1 | [optional] 
**oldFileName** | **String** | Old file name | [optional] 
**agentVersion** | **String** | Agent version | 
**processIsRedirectedCommandProcessor** | **String** | Process is redirected command processor | [optional] 
**oldFileSha1** | **String** | Old file sha1 | [optional] 
**verifiedStatus** | **String** | Verified status | [optional] 
**agentInfected** | **Boolean** | Agent infected | 
**activeContentFileId** | **String** | Active content file id | [optional] 
**loginsUserName** | **String** | Logins user name | [optional] 
**fileSha256** | **String** | File sha256 | [optional] 
**processUserName** | **String** | Process user name | [optional] 
**user** | **String** | User | [optional] 
**processRoot** | **String** | Process root | [optional] 
**md5** | **String** | Md5 | [optional] 
**registryId** | **String** | Registry id | [optional] 
**fileSize** | **String** | File size | [optional] 
**agentOs** | **String** | OS type | 
**activeContentPath** | **String** | Active content path | [optional] 
**dstIp** | **String** | Dst ip | [optional] 
**hasActiveContent** | **Boolean** | Has active content | [optional] 
**agentIsDecommissioned** | **Boolean** | Agent is decommissioned | 
**sha256** | **String** | Sha256 | [optional] 
**processIsWow64** | **String** | Process is wow64 | [optional] 
**processDisplayName** | **String** | Process display name | [optional] 
**networkUrl** | **String** | Network url | [optional] 
**processCmd** | **String** | Process cmd | [optional] 
**siteName** | **String** | Site name | 
**loginsBaseType** | **String** | Logins base type | [optional] 
**processIntegrityLevel** | **String** | Process integrity level | [optional] 
**direction** | **String** | Direction | [optional] 
**processName** | **String** | Process name | 
**processSessionId** | **String** | Process session id | [optional] 
**srcPort** | **Number** | Src port | [optional] 
**agentUuid** | **String** | Agent uuid | 
**signatureSignedInvalidReason** | **String** | Signature signed invalid reason | [optional] 
**taskPath** | **String** | Task path | [optional] 
**oldFileMd5** | **String** | Old file md5 | [optional] 
**indicatorName** | **String** | Indicator name | [optional] 
**dstPort** | **Number** | Dst port | [optional] 
**eventType** | **String** | Event type | [optional] 
**rpid** | **String** | Rpid | [optional] 
**threatStatus** | **String** | Threat status | [optional] 
**agentId** | **String** | Agent id | 
**processUniqueKey** | **String** | Process unique key | [optional] 
**registryClassification** | **String** | Registry classification | [optional] 
**processStartTime** | **Date** | Process start time | [optional] 
**parentProcessGroupId** | **String** | Parent process group id | [optional] 
**srcIp** | **String** | Src ip | [optional] 
**protocol** | **String** | Protocol | [optional] 
**relatedToThreat** | **Boolean** | Related to threat | [optional] 
**networkMethod** | **String** | Network method | [optional] 
**fileMd5** | **String** | File md5 | [optional] 
**connectionStatus** | **String** | Connection status | [optional] 
**agentName** | **String** | Agent name | 
**fileType** | **String** | File type | [optional] 
**agentDomain** | **String** | Agent domain | 
**parentProcessIsMalicious** | **Boolean** | Parent process is malicious | [optional] 
**agentMachineType** | **String** | Agent machine type | 
**siteId** | **String** | Site id | 
**agentNetworkStatus** | **String** | Agent network status | 
**fileFullName** | **String** | File full name | [optional] 
**id** | **String** | Id | 
**agentGroupId** | **String** | Agent group id | 
**oldFileSha256** | **String** | Old file sha256 | [optional] 
**sha1** | **String** | Sha1 | [optional] 
**agentIp** | **String** | Agent ip | 
**publisher** | **String** | Publisher | [optional] 
**parentProcessUniqueKey** | **String** | Parent process unique key | [optional] 
**processImageSha1Hash** | **String** | Process image sha1 hash | [optional] 
**parentPid** | **String** | Parent pid | [optional] 
**pid** | **String** | Pid | [optional] 
**trueContext** | **String** | [DEPRECATED] Use \"storyline\" instead | [optional] 
**fileId** | **String** | File id | [optional] 
**createdAt** | **Date** | Created at | 
**processIsMalicious** | **Boolean** | Process is malicious | [optional] 
**indicatorDescription** | **String** | Indicator description | [optional] 


<a name="ObjectTypeEnum"></a>
## Enum: ObjectTypeEnum


* `events` (value: `"events"`)

* `file` (value: `"file"`)

* `ip` (value: `"ip"`)

* `url` (value: `"url"`)

* `dns` (value: `"dns"`)

* `process` (value: `"process"`)

* `registry` (value: `"registry"`)

* `scheduledTask` (value: `"scheduled_task"`)

* `logins` (value: `"logins"`)

* `indicators` (value: `"indicators"`)

* `module` (value: `"module"`)




<a name="AgentOsEnum"></a>
## Enum: AgentOsEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




