# S1MgmtApi.V21DevicesSchemasDeviceDataSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stagefreightVulnerable** | **Boolean** | Stagefreightvulnerable | [optional] 
**appState** | **String** | ZipApp state | [optional] 
**lastActiveOn** | **String** | When we received last heartbeat | [optional] 
**siteId** | **String** | A reference to the containing site | 
**owner** | **String** | User email | [optional] 
**accountId** | **String** | A reference to the containing account | 
**encrypted** | **Boolean** | Encrypted | [optional] 
**screenLocked** | **Boolean** | Screenlocked | [optional] 
**id** | **Number** | Id | 
**alertCounts** | [**V21DevicesSchemasDeviceDataSchemaMany200AlertCounts**](V21DevicesSchemasDeviceDataSchemaMany200AlertCounts.md) |  | 
**groupId** | **String** | A reference to the containing network group | 
**privileges** | **String** | Either rooted or jailbroken for devices with privileges. Otherwise none | [optional] 
**accountName** | **String** | Name of the containing account | 
**siteName** | **String** | Name of the containing site | 
**registrationDate** | **String** | When the activation for this device was created | [optional] 
**debugMode** | **Boolean** | Debugmode | [optional] 
**registrationSource** | **String** | MDM name or initiator in case of activations | 
**model** | **String** | Device manufacturer and model | [optional] 
**deviceId** | **String** | MDM device ID | 
**policyUpdatedAt** | **String** | When the corresponding policy was updated | [optional] 
**healthState** | **String** | Highest health state of the device | [optional] 
**appVersion** | **String** | Version of the ZippApp | [optional] 
**unofficialAppstore** | **Boolean** | Unofficialappstore | [optional] 
**_protected** | **Boolean** | Protected | [optional] 
**trackingId1** | **String** | External tracking ID of device | [optional] 
**developerMode** | **Boolean** | Developermode | [optional] 
**groupName** | **String** | Name of the containing network group | 
**trackingId2** | **String** | Another external tracking ID of device | [optional] 
**managedState** | **String** | UEM state of the device | [optional] 
**registrationType** | **String** | Registration type | 
**threatCounts** | [**V21DevicesSchemasDeviceDataSchemaMany200ThreatCounts**](V21DevicesSchemasDeviceDataSchemaMany200ThreatCounts.md) |  | 
**osVersion** | **String** | Device os version | [optional] 
**registeredOn** | **String** | When the ZippApp registered | [optional] 
**platform** | **String** | Device platform | [optional] 


<a name="AppStateEnum"></a>
## Enum: AppStateEnum


* `unknown` (value: `"unknown"`)

* `registered` (value: `"registered"`)




<a name="PrivilegesEnum"></a>
## Enum: PrivilegesEnum


* `none` (value: `"none"`)

* `rooted` (value: `"rooted"`)

* `jailbroken` (value: `"jailbroken"`)




<a name="HealthStateEnum"></a>
## Enum: HealthStateEnum


* `normal` (value: `"normal"`)

* `low` (value: `"low"`)

* `medium` (value: `"medium"`)

* `high` (value: `"high"`)

* `critical` (value: `"critical"`)

* `notActivated` (value: `"not_activated"`)




<a name="ManagedStateEnum"></a>
## Enum: ManagedStateEnum


* `unknown` (value: `"unknown"`)

* `synced` (value: `"synced"`)

* `deleted` (value: `"deleted"`)




<a name="RegistrationTypeEnum"></a>
## Enum: RegistrationTypeEnum


* `mdm` (value: `"mdm"`)

* `invite` (value: `"invite"`)

* `globalLink` (value: `"global_link"`)




<a name="PlatformEnum"></a>
## Enum: PlatformEnum


* `android` (value: `"android"`)

* `ios` (value: `"ios"`)

* `chromeOs` (value: `"chrome_os"`)




