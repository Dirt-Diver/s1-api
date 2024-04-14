# S1MgmtApi.RBACApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiRbacRoleGet**](RBACApi.md#webApiRbacRoleGet) | **GET** /web/api/v2.1/rbac/role | Get template for new role
[**webApiRbacRolePost**](RBACApi.md#webApiRbacRolePost) | **POST** /web/api/v2.1/rbac/role | Create new role
[**webApiRbacRoleroleIdDelete**](RBACApi.md#webApiRbacRoleroleIdDelete) | **DELETE** /web/api/v2.1/rbac/role/{role_id} | Delete role
[**webApiRbacRoleroleIdGet**](RBACApi.md#webApiRbacRoleroleIdGet) | **GET** /web/api/v2.1/rbac/role/{role_id} | Get Specific Role Definition
[**webApiRbacRoleroleIdPut**](RBACApi.md#webApiRbacRoleroleIdPut) | **PUT** /web/api/v2.1/rbac/role/{role_id} | Update role
[**webApiRbacRolesGet**](RBACApi.md#webApiRbacRolesGet) | **GET** /web/api/v2.1/rbac/roles | Get All Roles


<a name="webApiRbacRoleGet"></a>
# **webApiRbacRoleGet**
> RbacSchemasNewRoleTemplate200 webApiRbacRoleGet(opts)

Get template for new role

Get the template for a new role.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RBACApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRbacRoleGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**RbacSchemasNewRoleTemplate200**](RbacSchemasNewRoleTemplate200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRbacRolePost"></a>
# **webApiRbacRolePost**
> RbacSchemasRolePermissions200 webApiRbacRolePost(opts)

Create new role

Create a new role for Role-Based Access Control (RBAC).

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RBACApi();

var opts = { 
  'body': new S1MgmtApi.RbacSchemasRbacCreateRoleSchema() // RbacSchemasRbacCreateRoleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRbacRolePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RbacSchemasRbacCreateRoleSchema**](RbacSchemasRbacCreateRoleSchema.md)|  | [optional] 

### Return type

[**RbacSchemasRolePermissions200**](RbacSchemasRolePermissions200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRbacRoleroleIdDelete"></a>
# **webApiRbacRoleroleIdDelete**
> SuccessResponseSchema200 webApiRbacRoleroleIdDelete(roleId, opts)

Delete role

With the ID of a role (see Get All Roles), you can delete a role. If there are users assigned to the role, specify the ID of their new role.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RBACApi();

var roleId = "roleId_example"; // String | Role ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.RbacSchemasRbacDeleteRoleSchema() // RbacSchemasRbacDeleteRoleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRbacRoleroleIdDelete(roleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **String**| Role ID. Example: \"225494730938493804\". | 
 **body** | [**RbacSchemasRbacDeleteRoleSchema**](RbacSchemasRbacDeleteRoleSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRbacRoleroleIdGet"></a>
# **webApiRbacRoleroleIdGet**
> RbacSchemasRolePermissions200 webApiRbacRoleroleIdGet(roleId, opts)

Get Specific Role Definition

With the ID of a role (see Get All Roles) you can see the permissions of that role. <br>The definition of a role can change in different scopes and SKUs. For example, an Admin role with the scope access of a Site does not have Ranger permissions, but an IT role with the scope access of an Account with a Ranger license does have permissions on Ranger. <br>The Response shows role permissions to see views in the WebUI and to use Console features.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RBACApi();

var roleId = "roleId_example"; // String | Role ID. Example: \"225494730938493804\".

var opts = { 
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'updatedAtBetween': "updatedAtBetween_example", // String | Return RBAC roles updated within this range (inclusive). Example: \"1514978764288-1514978999999\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'name': "name_example", // String | Return RBAC role matching the name
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | Free text search on role name, and description
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'createdAtBetween': "createdAtBetween_example", // String | Return RBAC roles created within this range (inclusive). Example: \"1514978764288-1514978999999\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00") // Date | Return RBAC roles updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRbacRoleroleIdGet(roleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **String**| Role ID. Example: \"225494730938493804\". | 
 **createdAtGt** | **Date**| Return RBAC roles created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **updatedAtBetween** | **String**| Return RBAC roles updated within this range (inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **createdAtGte** | **Date**| Return RBAC roles created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **name** | **String**| Return RBAC role matching the name | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| Free text search on role name, and description | [optional] 
 **updatedAtGt** | **Date**| Return RBAC roles updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **updatedAtLt** | **Date**| Return RBAC roles updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **createdAtLte** | **Date**| Return RBAC roles created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **createdAtBetween** | **String**| Return RBAC roles created within this range (inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **updatedAtLte** | **Date**| Return RBAC roles updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **createdAtLt** | **Date**| Return RBAC roles created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **updatedAtGte** | **Date**| Return RBAC roles updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 

### Return type

[**RbacSchemasRolePermissions200**](RbacSchemasRolePermissions200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiRbacRoleroleIdPut"></a>
# **webApiRbacRoleroleIdPut**
> RbacSchemasRolePermissions200 webApiRbacRoleroleIdPut(roleId, opts)

Update role

With the ID of a role (see Get All Roles), you can update the permissions of users with this role.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RBACApi();

var roleId = "roleId_example"; // String | Role ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.RbacSchemasRbacUpdateRoleSchema() // RbacSchemasRbacUpdateRoleSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRbacRoleroleIdPut(roleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **String**| Role ID. Example: \"225494730938493804\". | 
 **body** | [**RbacSchemasRbacUpdateRoleSchema**](RbacSchemasRbacUpdateRoleSchema.md)|  | [optional] 

### Return type

[**RbacSchemasRolePermissions200**](RbacSchemasRolePermissions200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiRbacRolesGet"></a>
# **webApiRbacRolesGet**
> RbacSchemasFlatRoleWithAccountOrSiteNameMany200 webApiRbacRolesGet(opts)

Get All Roles

See roles assigned to users that match the filter, a basic description of the roles, and the number of users for each role. <br>Role-Based Access Control (RBAC) has predefined roles. (Currently, customized roles are not supported.), This command gives the ID of the role, which you can use in other commands.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.RBACApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'includeChildren': false, // Boolean | Include child scopes roles
  'updatedAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at. Example: \"2018-02-27T04:49:26.257525Z\".
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'query': "query_example", // String | Free text search on role name, and description
  'ids': ["ids_example"], // [String] | List of ids to filter by. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'predefinedRole': true, // Boolean | Filter only system/custom roles
  'accountName': "accountName_example", // String | Name of the account that contains the role
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'creatorId': "creatorId_example", // String | Id of the creating user. Example: \"225494730938493804\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'updatedById': "updatedById_example", // String | Id of the updating user. Example: \"225494730938493804\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'includeParents': true, // Boolean | Include parent scopes roles
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'createdAtBetween': "createdAtBetween_example", // String | Return RBAC roles created within this range (inclusive). Example: \"1514978764288-1514978999999\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'description': "description_example", // String | Description
  'updatedAtBetween': "updatedAtBetween_example", // String | Return RBAC roles updated within this range (inclusive). Example: \"1514978764288-1514978999999\".
  'updatedBy': "updatedBy_example", // String | Email of the updating user
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Return RBAC roles created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteName': "siteName_example", // String | Name of the site that contains the role
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'name': "name_example", // String | Return RBAC role matching the name
  'creator': "creator_example", // String | Email of the creating user
  'createdAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at. Example: \"2018-02-27T04:49:26.257525Z\".
  'tenancyIds': ["tenancyIds_example"], // [String] | List of Tenancies IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'usersInRoles': 56 // Number | How many users use this role
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiRbacRolesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **createdAtGt** | **Date**| Return RBAC roles created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **includeChildren** | **Boolean**| Include child scopes roles | [optional] [default to false]
 **updatedAt** | **Date**| Updated at. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **updatedAtLt** | **Date**| Return RBAC roles updated before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **query** | **String**| Free text search on role name, and description | [optional] 
 **ids** | [**[String]**](String.md)| List of ids to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **createdAtLt** | **Date**| Return RBAC roles created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **updatedAtGte** | **Date**| Return RBAC roles updated after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **predefinedRole** | **Boolean**| Filter only system/custom roles | [optional] 
 **accountName** | **String**| Name of the account that contains the role | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **creatorId** | **String**| Id of the creating user. Example: \"225494730938493804\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **updatedAtGt** | **Date**| Return RBAC roles updated after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **updatedById** | **String**| Id of the updating user. Example: \"225494730938493804\". | [optional] 
 **createdAtLte** | **Date**| Return RBAC roles created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **includeParents** | **Boolean**| Include parent scopes roles | [optional] [default to true]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **createdAtBetween** | **String**| Return RBAC roles created within this range (inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **updatedAtLte** | **Date**| Return RBAC roles updated before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **description** | **String**| Description | [optional] 
 **updatedAtBetween** | **String**| Return RBAC roles updated within this range (inclusive). Example: \"1514978764288-1514978999999\". | [optional] 
 **updatedBy** | **String**| Email of the updating user | [optional] 
 **createdAtGte** | **Date**| Return RBAC roles created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteName** | **String**| Name of the site that contains the role | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **name** | **String**| Return RBAC role matching the name | [optional] 
 **creator** | **String**| Email of the creating user | [optional] 
 **createdAt** | **Date**| Created at. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **tenancyIds** | [**[String]**](String.md)| List of Tenancies IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **usersInRoles** | **Number**| How many users use this role | [optional] 

### Return type

[**RbacSchemasFlatRoleWithAccountOrSiteNameMany200**](RbacSchemasFlatRoleWithAccountOrSiteNameMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

