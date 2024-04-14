# S1MgmtApi.ThreatsSchemasThreatSchemaMany200AgentDetectionInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentLastLoggedInUserName** | **String** | Orig logged user | [optional] 
**agentVersion** | **String** | Orig agent version | [optional] 
**agentLastLoggedInUserMail** | **String** | mail from AD of last logged in user | [optional] 
**agentDomain** | **String** | Network domain | [optional] 
**agentOsName** | **String** | Orig agent os name | [optional] 
**externalIp** | **String** | Orig agent external ip | [optional] 
**accountName** | **String** | Orig account name | [optional] 
**groupName** | **String** | Orig group name | [optional] 
**accountId** | **String** | Orig account id | [optional] 
**agentDetectionState** | **String** | The Agent's detection state at time of detection | [optional] 
**agentUuid** | **String** | UUID of the agent | [optional] 
**agentMitigationMode** | **String** | Agent mitigation mode policy | [optional] 
**siteId** | **String** | Orig site id | [optional] 
**agentIpV4** | **String** | Orig agent ip v4 | [optional] 
**agentRegisteredAt** | **Date** | Time of first registration to management console | [optional] 
**siteName** | **String** | Orig site name | [optional] 
**agentIpV6** | **String** | Orig agent ip v6 | [optional] 
**agentLastLoggedInUpn** | **String** | UPN of last logged in user | [optional] 
**cloudProviders** | [**{String: ThreatsSchemasThreatSchemaMany200AgentDetectionInfoCloudProviders}**](ThreatsSchemasThreatSchemaMany200AgentDetectionInfoCloudProviders.md) | Cloud providers for this agent | [optional] 
**agentOsRevision** | **String** | Orig agent os revision | [optional] 
**groupId** | **String** | Orig group id | [optional] 


<a name="AgentMitigationModeEnum"></a>
## Enum: AgentMitigationModeEnum


* `detect` (value: `"detect"`)

* `protect` (value: `"protect"`)




