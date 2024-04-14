# S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200AlertInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dnsResponse** | **String** | Get the DNS response information (examples: IP address, DNS, data type). | [optional] 
**moduleSha1** | **String** | Get the SHA1 signatures for modules loaded by this process. | [optional] 
**indicatorCategory** | **String** | Get the Indicator categories for this process. | [optional] 
**incidentStatus** | **String** | Incident status | [optional] [default to 'Unresolved']
**tiIndicatorValue** | **String** | Get the value of the identified Threat Intelligence indicator. | [optional] 
**netEventDirection** | **String** | Get the direction of the connection attempt (incoming or outgoing). | [optional] 
**loginAccountSid** | **String** | Get the SID of the account that attempted to log in. | [optional] 
**hitType** | **String** | Type of hit reported from the Agent | [optional] 
**modulePath** | **String** | Get the paths of modules loaded by this process. | [optional] 
**indicatorDescription** | **String** | Get the description of the Indicator. | [optional] 
**indicatorName** | **String** | Get the Indicator names for this process. | [optional] 
**dstPort** | **String** | Get the port number of the destination. | [optional] 
**isEdr** | **Boolean** | True if the event is edr event | [optional] 
**analystVerdict** | **String** | Analyst verdict | [optional] [default to 'Undefined']
**srcMachineIp** | **String** | Get the IP address of the endpoint performing the login attempt. | [optional] 
**registryKeyPath** | **String** | Get the full paths of registry entries modified by this process. | [optional] 
**registryOldValueType** | **String** | Get the previous registry value type if it was modified. | [optional] 
**tiIndicatorComparisonMethod** | **String** | Get the comparison method used by SentinelOne to trigger the event. | [optional] 
**registryPath** | **String** | Get the full path location of the registry key entry. | [optional] 
**registryValue** | **String** | Get the registry value | [optional] 
**loginIsAdministratorEquivalent** | **String** | See if the login attempt was performed by an administrator equivalent. | [optional] 
**loginAccountDomain** | **String** | Get the domain or computer name for which the login attempt was performed. | [optional] 
**reportedAt** | **Date** | Timestamp of alert creation in STAR | [optional] 
**dnsRequest** | **String** | Get the DNS name. | [optional] 
**loginType** | **String** | Get the type of login that was performed. | [optional] 
**registryOldValue** | **String** | Get the previous registry value if it was modified. | [optional] 
**srcIp** | **String** | Get the IP address of the traffic source. | [optional] 
**updatedAt** | **Date** | Date of alert updated in Star MMS | [optional] 
**tiIndicatorSource** | **String** | Get the source of the identified Threat Intelligence indicator. | [optional] 
**source** | **String** | Source reported from the Agent. | [optional] 
**eventType** | **String** | Event type | [optional] 
**tiIndicatorType** | **String** | Get the type of the identified Threat Intelligence indicator. | [optional] 
**dstIp** | **String** | Get the IP address of the destination. | [optional] 
**loginsUserName** | **String** | Get the login username. | [optional] 
**createdAt** | **Date** | Timestamp alert sent for detection | [optional] 
**loginIsSuccessful** | **String** | Check if the login attempt succeeded. | [optional] 
**dvEventId** | **String** | Deep Visibility event ID | [optional] 
**srcPort** | **String** | Get the port number of the traffic source. | [optional] 
**alertId** | **String** | Alert ID | [optional] 


<a name="IncidentStatusEnum"></a>
## Enum: IncidentStatusEnum


* `unresolved` (value: `"Unresolved"`)

* `inProgress` (value: `"In progress"`)

* `resolved` (value: `"Resolved"`)




<a name="HitTypeEnum"></a>
## Enum: HitTypeEnum


* `events` (value: `"Events"`)

* `processes` (value: `"Processes"`)

* `correlation` (value: `"Correlation"`)




<a name="AnalystVerdictEnum"></a>
## Enum: AnalystVerdictEnum


* `_undefined` (value: `"Undefined"`)

* `truePositive` (value: `"True positive"`)

* `falsePositive` (value: `"False positive"`)

* `suspicious` (value: `"Suspicious"`)




