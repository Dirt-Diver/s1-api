# S1MgmtApi.SitesSiteBulkPutSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nameContains** | **[String]** | Free-text filter by site name (supports multiple values) | [optional] 
**accountId** | **String** | Account id | [optional] 
**availableMoveSites** | **Boolean** | Only return sites the user can move agents to | [optional] 
**healthStatus** | **Boolean** | Health status | [optional] 
**updatedAt** | **Date** | Timestamp of last update | [optional] 
**features** | **[String]** | If sent return only sites that support this features | [optional] 
**expiration** | **Date** | Expiration | [optional] 
**siteType** | **String** | Site type | [optional] 
**adminOnly** | **Boolean** | Show sites the user has Admin privileges to | [optional] 
**query** | **String** | Full text search for fields: name, account_name, description. (Note: on single-account consoles account name will not be matched) | [optional] 
**isDefault** | **Boolean** | Is default | [optional] 
**state** | **String** | Site state | [optional] 
**activeLicenses** | **Number** | Active licenses | [optional] 
**totalLicenses** | **Number** | Total licenses | [optional] 
**states** | **[String]** | List of states to filter | [optional] 
**externalId** | **String** | Id in a CRM external system | [optional] 
**suite** | **String** | [DEPRECATED] Use sku instead | [optional] 
**accountNameContains** | **[String]** | Free-text filter by account name (supports multiple values) | [optional] 
**registrationToken** | **String** | Registration token | [optional] 
**module** | **String** | Module | [optional] 
**description** | **String** | The description for the Site | [optional] 
**name** | **String** | Name | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**createdAt** | **Date** | Timestamp of site creation | [optional] 
**sku** | **String** | Sku | [optional] 
**descriptionContains** | **[String]** | Free-text filter by site description (supports multiple values) | [optional] 


<a name="[FeaturesEnum]"></a>
## Enum: [FeaturesEnum]


* `firewallControl` (value: `"firewall-control"`)

* `deviceControl` (value: `"device-control"`)

* `ioc` (value: `"ioc"`)




<a name="SiteTypeEnum"></a>
## Enum: SiteTypeEnum


* `trial` (value: `"Trial"`)

* `paid` (value: `"Paid"`)




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




