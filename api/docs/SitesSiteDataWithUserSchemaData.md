# S1MgmtApi.SitesSiteDataWithUserSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The user-defined description for the Site | [optional] 
**externalId** | **String** | Id of CRM external system | [optional] [default to 'null']
**suite** | **String** | [DEPRECATED] Use licenses instead | [optional] 
**name** | **String** | Name | 
**licenses** | [**SitesSitePutSchemaDataLicenses**](SitesSitePutSchemaDataLicenses.md) |  | [optional] 
**unlimitedExpiration** | **Boolean** | Is expiration unlimited, if not expiration should be supplied  | [optional] [default to false]
**sku** | **String** | [DEPRECATED] Use licenses instead | [optional] 
**unlimitedLicenses** | **Boolean** | Is the site unlimited, if not then total_licenses must be supplied | [optional] [default to false]
**accountId** | **String** | Associated account. Leave empty in single-account management consoles. | [optional] [default to 'null']
**policy** | [**SitesPostSiteSchemaDataPolicy**](SitesPostSiteSchemaDataPolicy.md) |  | [optional] 
**expiration** | **Date** | Expiration | [optional] 
**siteType** | **String** | Site types | [optional] [default to 'Paid']
**totalLicenses** | **Number** | Total licenses | [optional] 
**accountSfId** | **String** |  | [optional] [default to 'null']
**inherits** | **Boolean** | True if the policy is inherited from Tenant, False if the site has its own edited policy | [optional] 
**user** | [**SitesSiteDataWithUserSchemaDataUser**](SitesSiteDataWithUserSchemaDataUser.md) |  | 


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




<a name="SiteTypeEnum"></a>
## Enum: SiteTypeEnum


* `trial` (value: `"Trial"`)

* `paid` (value: `"Paid"`)




