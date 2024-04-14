# S1MgmtApi.TagsSchemasTagDeleteSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nameContains** | **[String]** | Free-text filter by tag name | [optional] 
**onlyParents** | **Boolean** | If true returns all tags possible to inherit from parent scopes, otherwise returns all tags already inherited and tags from this scope. | [optional] [default to false]
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**query** | **String** | Free text search on tag name | [optional] 
**kind** | **String** | Returns tags of this specific kind | [optional] 
**tenant** | **Boolean** | Indicates a tenant scope request | [optional] 
**type** | **[String]** | Type in | 
**ids** | **[String]** | List of IDs to filter by | [optional] 
**groupIds** | **[String]** | List of Group IDs to filter by | [optional] 
**scope** | **String** | Return tags from given scope level | [optional] 


<a name="[TypeEnum]"></a>
## Enum: [TypeEnum]


* `firewall` (value: `"firewall"`)

* `networkQuarantine` (value: `"network-quarantine"`)

* `deviceInventory` (value: `"device-inventory"`)




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `site` (value: `"site"`)

* `group` (value: `"group"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)




