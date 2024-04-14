# S1MgmtApi.GroupsGroupSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The user-defined description for the Group | [optional] 
**filterId** | **String** | If the group is dynamic id of the filter which is used to associate agents | [optional] 
**name** | **String** | Name | [optional] 
**createdAt** | **Date** | Timestamp of group creation | [optional] 
**id** | **String** | Id | [optional] 
**creator** | **String** | The user that created the group | [optional] 
**creatorId** | **String** | The ID of the user that created the group | [optional] 
**rank** | **Number** | The rank sets the priority of a dynamic group over others | [optional] 
**updatedAt** | **Date** | Timestamp of last update | [optional] 
**siteId** | **String** | The id of the site this group is part of | [optional] 
**type** | **String** | Group type | [optional] 
**registrationToken** | **Object** | [DEPRECATED] token generation in dedicated endpoint - /groups/<group_id>/token | [optional] 
**isDefault** | **Boolean** | True only for the default group of the Site | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `_static` (value: `"static"`)

* `dynamic` (value: `"dynamic"`)

* `pinned` (value: `"pinned"`)




