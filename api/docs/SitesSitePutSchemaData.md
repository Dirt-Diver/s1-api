# S1MgmtApi.SitesSitePutSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The user-defined description for the Site | [optional] 
**externalId** | **String** | Id of CRM external system | [optional] [default to 'null']
**suite** | **String** | [DEPRECATED] Use licenses instead | [optional] [default to 'null']
**name** | **String** | Name | [optional] [default to 'null']
**id** | **String** | Site ID | [optional] 
**unlimitedExpiration** | **Boolean** | Is expiration unlimited, if not expiration should be supplied  | [optional] 
**licenses** | [**SitesSitePutSchemaDataLicenses**](SitesSitePutSchemaDataLicenses.md) |  | [optional] 
**unlimitedLicenses** | **Boolean** | [DEPRECATED] True if the Site has unlimited licenses. | [optional] [default to false]
**policy** | [**SitesSitePutSchemaDataPolicy**](SitesSitePutSchemaDataPolicy.md) |  | [optional] 
**expiration** | **Date** | Expiration | [optional] 
**siteType** | **String** | Site type | [optional] [default to 'null']
**totalLicenses** | **Number** | Total licenses | [optional] 
**inherits** | **Boolean** | True if the policy is inherited from Tenant, False if the site has its own edited policy | [optional] [default to false]


<a name="SuiteEnum"></a>
## Enum: SuiteEnum


* `core` (value: `"Core"`)

* `control` (value: `"Control"`)

* `complete` (value: `"Complete"`)




<a name="SiteTypeEnum"></a>
## Enum: SiteTypeEnum


* `trial` (value: `"Trial"`)

* `paid` (value: `"Paid"`)




