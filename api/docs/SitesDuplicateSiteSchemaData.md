# S1MgmtApi.SitesDuplicateSiteSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | New Site Name | 
**sourceSiteId** | **Number** | Site ID of origin site | 
**unlimitedLicenses** | **Boolean** | Is the site unlimited, if not then total_licenses must be supplied | [optional] 
**policy** | [**SitesDuplicateSiteSchemaDataPolicy**](SitesDuplicateSiteSchemaDataPolicy.md) |  | [optional] 
**totalLicenses** | **Number** | Total licenses for duplicate site, will be subtracted from freelicenses of the source site | [optional] 
**policySource** | **String** | Source of duplicate site policy | 
**copyUsers** | **Boolean** | If true adds the duplicated site to all source site users | 


<a name="PolicySourceEnum"></a>
## Enum: PolicySourceEnum


* `inheritGlobal` (value: `"inherit_global"`)

* `copySourceSite` (value: `"copy_source_site"`)

* `custom` (value: `"custom"`)




