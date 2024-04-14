# S1MgmtApi.PackagesSchemasPutPackageSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**osArch** | **String** | Package OS architecture (32/64 bit), applicable to Windows packages only | [optional] 
**minorVersion** | **String** | Minor version | [optional] 
**version** | **String** | Agent version | [optional] 
**accountIds** | **[String]** | List of accounts to make the package available in. Applicable only if scopeLevel is set to \"account\". | [optional] 
**siteIds** | **[String]** | List of sites to make the package available in. Applicable only if scopeLevel is set to \"site\". | [optional] 
**supportedOsVersions** | **String** | Supported os versions | [optional] 
**status** | **String** | Status | [optional] 
**scopeLevel** | **String** | Package scope. If \"global\", it will be available in all sites. If \"site\", it will be available only to sites specified in the \"siteIds\" attribute. | [optional] 
**rangerVersion** | **String** | Ranger version if applicable | [optional] 


<a name="OsArchEnum"></a>
## Enum: OsArchEnum


* `_32Bit` (value: `"32 bit"`)

* `_64Bit` (value: `"64 bit"`)

* `_3264Bit` (value: `"32/64 bit"`)

* `aRM64` (value: `"ARM64"`)

* `NA` (value: `"N/A"`)




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




