# S1MgmtApi.SitesSiteWithUserSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | Account id | [optional] 
**healthStatus** | **Boolean** | Obsolete. Always true | [optional] 
**updatedAt** | **Date** | Timestamp of last update | [optional] 
**expiration** | **Date** | Expiration | [optional] 
**siteType** | **String** | Site type | [optional] 
**isDefault** | **Boolean** | Is default | [optional] 
**user** | [**SitesSiteWithUserSchema200DataUser**](SitesSiteWithUserSchema200DataUser.md) |  | [optional] 
**state** | **String** | Site state | [optional] 
**accountName** | **String** | Account name | [optional] 
**id** | **String** | Site ID | [optional] 
**activeLicenses** | **Number** | Number of active licenses for the site | [optional] 
**totalLicenses** | **Number** | Total licenses | [optional] 
**usageType** | **String** | Usage type | [optional] 
**externalId** | **String** | Id of CRM external system | [optional] 
**suite** | **String** | [DEPRECATED] Use sku instead | [optional] 
**licenses** | [**SitesSiteResponseSchema200DataLicenses**](SitesSiteResponseSchema200DataLicenses.md) |  | [optional] 
**registrationToken** | **Object** | [DEPRECATED] token generation in dedicated endpoint - /sites/<site_id>/token | [optional] 
**description** | **String** | The user-defined description for the Site | [optional] 
**name** | **String** | Name | [optional] 
**createdAt** | **Date** | Timestamp of site creation | [optional] 
**sku** | **String** | [DEPRECATED] The sku of product features active for this site | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `active` (value: `"active"`)

* `expired` (value: `"expired"`)

* `deleted` (value: `"deleted"`)




<a name="SuiteEnum"></a>
## Enum: SuiteEnum


* `core` (value: `"Core"`)

* `control` (value: `"Control"`)

* `complete` (value: `"Complete"`)




<a name="SkuEnum"></a>
## Enum: SkuEnum


* `core` (value: `"Core"`)

* `control` (value: `"Control"`)

* `complete` (value: `"Complete"`)




