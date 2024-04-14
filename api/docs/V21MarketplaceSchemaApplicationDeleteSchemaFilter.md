# S1MgmtApi.V21MarketplaceSchemaApplicationDeleteSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**applicationCatalogId** | **[String]** | A list of catalog applications IDs | [optional] 
**query** | **[String]** | Free-text filter by S1 query (supports multiple values) | [optional] 
**creatorContains** | **[String]** | Free-text filter by application creator (supports multiple values) | [optional] 
**nameContains** | **[String]** | Free-text filter by application name (supports multiple values) | [optional] 
**groupIds** | **[String]** | List of Group IDs to filter by | [optional] 
**scopes** | **[String]** | Filter results by scope | [optional] 
**id** | **[String]** | A list of applications IDs | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 


<a name="[ScopesEnum]"></a>
## Enum: [ScopesEnum]


* `global` (value: `"global"`)

* `account` (value: `"account"`)

* `group` (value: `"group"`)

* `site` (value: `"site"`)




