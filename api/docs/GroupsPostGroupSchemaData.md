# S1MgmtApi.GroupsPostGroupSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The user-defined description for the Group | [optional] 
**filterId** | **String** | If supplied this group will be dynamic using the filter to associate agents. | [optional] 
**name** | **String** | Name | 
**rank** | **Number** | Obsolete for post - The rank of the group | [optional] 
**policy** | [**GroupsPostGroupSchemaDataPolicy**](GroupsPostGroupSchemaDataPolicy.md) |  | [optional] 
**source** | **String** | Obsolete - Always MGMT | [optional] 
**siteId** | **String** | The site this group should be part of | 
**type** | **String** | Type of Group: Static, Dynamic, or Pinned | [optional] 
**inherits** | **Boolean** | True to inherit from site policy.  | 
**isDefault** | **Boolean** | Obsolete for POST, always false | [optional] [default to false]


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `_static` (value: `"static"`)

* `dynamic` (value: `"dynamic"`)

* `pinned` (value: `"pinned"`)




