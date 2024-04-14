# S1MgmtApi.SystemPutSystemConfigurationData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**passwordExpiration** | **Number** | Time in days until a user password expires | [optional] 
**uiInactivityTimeoutSeconds** | **Object** | Length of UI inactivity period | [optional] 
**rememberMeLength** | **Number** | Time in minutes until a user session expires | [optional] 
**accessibleUrl** | **String** | External DNS name of the management | [optional] 
**earlyAccessPlatforms** | **[String]** | Early access platforms | [optional] 
**globalTwoFaEnabled** | **Boolean** | Global two fa enabled | [optional] 
**earlyAccess** | **Boolean** | Early access | [optional] 
**cloudIntelligenceOn** | **Boolean** | [DEPRECATED] Cloud intelligence on | [optional] 
**allowedDomains** | [**[SystemSystemConfigurationSchema200DataAllowedDomains]**](SystemSystemConfigurationSchema200DataAllowedDomains.md) | list of allowed domains for user creation. | [optional] 
**cloudLastConnectionTime** | **Date** | Cloud last connection time | [optional] 
**tfaEnrollmentExpiration** | **Object** | 2FA expiration period | [optional] 
**allowDuplicateSite** | **Boolean** | [DEPRECATED] Allow site admins to duplicate sites in their accounts | [optional] 
**advancedMode** | **Boolean** | Advanced mode | [optional] 


<a name="[EarlyAccessPlatformsEnum]"></a>
## Enum: [EarlyAccessPlatformsEnum]


* `sdk` (value: `"sdk"`)

* `linux` (value: `"linux"`)

* `threatDetectionNetapp` (value: `"threat_detection_netapp"`)

* `threatDetectionS3` (value: `"threat_detection_s3"`)

* `macos` (value: `"macos"`)

* `windowsLegacy` (value: `"windows_legacy"`)

* `linuxK8s` (value: `"linux_k8s"`)

* `windows` (value: `"windows"`)




