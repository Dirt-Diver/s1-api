# S1MgmtApi.PackagesSchemasLatestPackagesSchema200DataOsTypesWindows

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileName** | **String** | File name | [optional] 
**updatedAt** | **Date** | Updated at | [optional] 
**platformType** | **String** | Platform type | [optional] 
**majorVersion** | **String** | Major version | [optional] 
**id** | **String** | Id | [optional] 
**sites** | [**[PackagesSchemasLatestPackagesSchema200DataOsTypesSites]**](PackagesSchemasLatestPackagesSchema200DataOsTypesSites.md) | Sites where the update package is available for download | [optional] 
**fileExtension** | **String** | File extension | [optional] 
**fileSize** | **Number** | File size (bytes) | [optional] 
**sha1** | **String** | Package hash | [optional] 
**osArch** | **String** | Package OS architecture (32/64 bit), applicable to Windows packages only | [optional] 
**version** | **String** | Agent version | [optional] 
**accounts** | [**[PackagesSchemasLatestPackagesSchema200DataOsTypesSites]**](PackagesSchemasLatestPackagesSchema200DataOsTypesSites.md) | Accounts where the update package is available for download | [optional] 
**packageType** | **String** | Package type | [optional] 
**minorVersion** | **String** | Minor version | [optional] 
**createdAt** | **Date** | Created at | [optional] 
**osType** | **String** | Platform type | [optional] 
**supportedOsVersions** | **String** | Supported os versions | [optional] 
**status** | **String** | Status | [optional] 
**scopeLevel** | **String** | Package scope. If \"global\", it will be available in all sites. If \"site\", it will be available only to sites specified in the \"siteIds\" attribute. | [optional] 
**link** | **Object** | Link | [optional] 
**rangerVersion** | **String** | Ranger version if applicable | [optional] 


<a name="PlatformTypeEnum"></a>
## Enum: PlatformTypeEnum


* `sdk` (value: `"sdk"`)

* `linux` (value: `"linux"`)

* `threatDetectionNetapp` (value: `"threat_detection_netapp"`)

* `threatDetectionS3` (value: `"threat_detection_s3"`)

* `macos` (value: `"macos"`)

* `windowsLegacy` (value: `"windows_legacy"`)

* `linuxK8s` (value: `"linux_k8s"`)

* `windows` (value: `"windows"`)




<a name="FileExtensionEnum"></a>
## Enum: FileExtensionEnum


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




<a name="OsArchEnum"></a>
## Enum: OsArchEnum


* `_32Bit` (value: `"32 bit"`)

* `_64Bit` (value: `"64 bit"`)

* `_3264Bit` (value: `"32/64 bit"`)

* `aRM64` (value: `"ARM64"`)

* `NA` (value: `"N/A"`)




<a name="PackageTypeEnum"></a>
## Enum: PackageTypeEnum


* `agent` (value: `"Agent"`)

* `ranger` (value: `"Ranger"`)

* `agentAndRanger` (value: `"AgentAndRanger"`)




<a name="OsTypeEnum"></a>
## Enum: OsTypeEnum


* `sdk` (value: `"sdk"`)

* `linux` (value: `"linux"`)

* `threatDetectionNetapp` (value: `"threat_detection_netapp"`)

* `threatDetectionS3` (value: `"threat_detection_s3"`)

* `macos` (value: `"macos"`)

* `windowsLegacy` (value: `"windows_legacy"`)

* `linuxK8s` (value: `"linux_k8s"`)

* `windows` (value: `"windows"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ga` (value: `"ga"`)

* `ea` (value: `"ea"`)

* `other` (value: `"other"`)

* `beta` (value: `"beta"`)




<a name="ScopeLevelEnum"></a>
## Enum: ScopeLevelEnum


* `site` (value: `"site"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)




