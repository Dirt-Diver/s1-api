# S1MgmtApi.GroupsPutGroupSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The user-defined description for the Group | [optional] 
**filterId** | **String** | If supplied this group will be dynamic using the filter to associate agents. | [optional] 
**name** | **String** | Name | [optional] 
**id** | **String** | Id | [optional] 
**rank** | **Number** | Obsolete for post - The rank of the group | [optional] 
**policy** | [**GroupsPostGroupSchemaDataPolicy**](GroupsPostGroupSchemaDataPolicy.md) |  | [optional] 
**source** | **String** | Obsolete | [optional] 
**siteId** | **String** | The site this group should be part of | [optional] 
**inherits** | **Boolean** | True to inherit from Site Policy.  | [optional] 
**isDefault** | **Boolean** | Obsolete for POST, always false | [optional] [default to false]


