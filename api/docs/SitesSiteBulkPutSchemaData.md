# S1MgmtApi.SitesSiteBulkPutSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The description for the Site | [optional] [default to 'null']
**unlimitedExpiration** | **Boolean** | Is expiration unlimited | [optional] [default to false]
**licenses** | [**SitesSiteBulkPutSchemaDataLicenses**](SitesSiteBulkPutSchemaDataLicenses.md) |  | [optional] 
**expiration** | **Date** | Expiration | [optional] 
**siteType** | **String** | Site type | [optional] [default to 'null']
**inherits** | **Boolean** | True if the policy is inherited from Account, False is not supported in bulk update | [optional] [default to false]


<a name="SiteTypeEnum"></a>
## Enum: SiteTypeEnum


* `trial` (value: `"Trial"`)

* `paid` (value: `"Paid"`)




