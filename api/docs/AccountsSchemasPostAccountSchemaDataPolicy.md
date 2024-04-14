# S1MgmtApi.AccountsSchemasPostAccountSchemaDataPolicy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoMitigationAction** | **String** | Default action for auto mitigation | [optional] 
**mitigationMode** | **String** | Mitigation modes | [optional] 
**iocAttributes** | [**SitesSitePutSchemaDataPolicyIocAttributes**](SitesSitePutSchemaDataPolicyIocAttributes.md) |  | [optional] 
**researchOn** | **Boolean** | Share data with SentinelOne | [optional] 
**autoFileUpload** | [**SitesSitePutSchemaDataPolicyAutoFileUpload**](SitesSitePutSchemaDataPolicyAutoFileUpload.md) |  | [optional] 
**mitigationModeSuspicious** | **String** | Mitigation mode | [optional] 
**updatedAt** | **Date** | Time of the last update to the policy | [optional] 
**antiTamperingOn** | **Boolean** | Anti tampering on/off | [optional] 
**identityReportInterval** | **Number** | Identity telemetry report interval in minutes | [optional] 
**monitorOnExecute** | **Boolean** | Monitor on execute on/off | [optional] 
**userId** | **String** | The user id | [optional] 
**driverBlocking** | **Boolean** | Suspicious driver blocking engine on/off | [optional] 
**identityEndpointReporting** | **String** | Endpoint reporting level | [optional] 
**isDefault** | **Boolean** | True if this is the tenant policy | [optional] 
**ioc** | **Boolean** | True if ioc is enabled | [optional] 
**agentUiOn** | **Boolean** | [DEPRECATED] Show/hide Agent UI. Moved inside the agent UI section | [optional] 
**inheritedFrom** | **String** | Indicates the parent scope from which this policy is inherited, or 'null' if it is not inherited (modified specifically for the current scope). | [optional] 
**monitorOnWrite** | **Boolean** | Monitor on write | [optional] 
**identityUpdateInterval** | **Number** | Identity update interval in minutes | [optional] 
**iocSupported** | **Boolean** | Ioc supported for the scope | [optional] 
**identityThrottlingInterval** | **Number** | Identity duplicate command consolidation interval in minutes | [optional] 
**agentLoggingOn** | **Boolean** | True if logging is enabled in the agent | [optional] 
**unsignedDriverBlockingOn** | **Boolean** | Suspicious unsigned driver blocking on/off | [optional] 
**agentUi** | [**SitesSitePutSchemaDataPolicyAgentUi**](SitesSitePutSchemaDataPolicyAgentUi.md) |  | [optional] 
**userFullName** | **String** | The user that created the policy | [optional] 
**signedDriverBlockingOn** | **Boolean** | Suspicious signed driver blocking on/off | [optional] 
**allowRemoteShell** | **Boolean** | True if Remote Shell is enabled for the scope | [optional] 
**isDvPolicyPerEventType** | **Boolean** | FE indication as to how to display DV policy | [optional] 
**removeMacros** | **Boolean** | Determines if macros should be removed from macro threats | [optional] 
**scanNewAgents** | **Boolean** | If True initiate full disk scan upon first registration | [optional] 
**snapshotsOn** | **Boolean** | True if snapshots are enabled | [optional] 
**engines** | [**SitesSitePutSchemaDataPolicyEngines**](SitesSitePutSchemaDataPolicyEngines.md) |  | [optional] 
**remoteOpsForensics** | [**SitesSitePutSchemaDataPolicyRemoteOpsForensics**](SitesSitePutSchemaDataPolicyRemoteOpsForensics.md) |  | [optional] 
**forensicsAutoTriggering** | [**SitesSitePutSchemaDataPolicyForensicsAutoTriggering**](SitesSitePutSchemaDataPolicyForensicsAutoTriggering.md) |  | [optional] 
**identityOn** | **Boolean** | Identity module on/off | [optional] 
**cloudValidationOn** | **Object** | Cloud validation on | [optional] 
**autoImmuneOn** | **Boolean** | Automatic immune on/off - this value must be true since all policies are immune by default | [optional] 
**agentNotification** | **Boolean** | [DEPRECATED] Show end point notification on suspicious.Replaced by 'show_suspicious' in the agent UI section | [optional] 
**createdAt** | **Date** | Timestamp of policy creation | [optional] 
**networkQuarantineOn** | **Boolean** | Network quarantine on | [optional] 
**autoDecommissionDays** | **Number** | Automatic decommission period in days | [optional] 
**remoteScriptOrchestration** | [**SitesSitePutSchemaDataPolicyRemoteScriptOrchestration**](SitesSitePutSchemaDataPolicyRemoteScriptOrchestration.md) |  | [optional] 
**autoDecommissionOn** | **Boolean** | Auto decommission on | [optional] 
**dvAttributesPerEventType** | [**SitesSitePutSchemaDataPolicyDvAttributesPerEventType**](SitesSitePutSchemaDataPolicyDvAttributesPerEventType.md) |  | [optional] 


<a name="MitigationModeEnum"></a>
## Enum: MitigationModeEnum


* `detect` (value: `"detect"`)

* `protect` (value: `"protect"`)




<a name="MitigationModeSuspiciousEnum"></a>
## Enum: MitigationModeSuspiciousEnum


* `detect` (value: `"detect"`)

* `protect` (value: `"protect"`)




<a name="IdentityEndpointReportingEnum"></a>
## Enum: IdentityEndpointReportingEnum


* `disabled` (value: `"disabled"`)

* `conservative` (value: `"conservative"`)

* `moderate` (value: `"moderate"`)

* `aggressive` (value: `"aggressive"`)




<a name="InheritedFromEnum"></a>
## Enum: InheritedFromEnum


* `site` (value: `"site"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)




