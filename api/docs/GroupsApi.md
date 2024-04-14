# S1MgmtApi.GroupsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiGroupsGet**](GroupsApi.md#webApiGroupsGet) | **GET** /web/api/v2.1/groups | Get Groups
[**webApiGroupsPost**](GroupsApi.md#webApiGroupsPost) | **POST** /web/api/v2.1/groups | Create Group
[**webApiGroupsRanksPut**](GroupsApi.md#webApiGroupsRanksPut) | **PUT** /web/api/v2.1/groups/ranks | Update Ranks
[**webApiGroupsgroupIdDelete**](GroupsApi.md#webApiGroupsgroupIdDelete) | **DELETE** /web/api/v2.1/groups/{group_id} | Delete Group
[**webApiGroupsgroupIdGet**](GroupsApi.md#webApiGroupsgroupIdGet) | **GET** /web/api/v2.1/groups/{group_id} | Get Group by ID
[**webApiGroupsgroupIdMoveAgentsPut**](GroupsApi.md#webApiGroupsgroupIdMoveAgentsPut) | **PUT** /web/api/v2.1/groups/{group_id}/move-agents | Move Agents
[**webApiGroupsgroupIdPut**](GroupsApi.md#webApiGroupsgroupIdPut) | **PUT** /web/api/v2.1/groups/{group_id} | Update Group
[**webApiGroupsgroupIdRegenerateKeyPut**](GroupsApi.md#webApiGroupsgroupIdRegenerateKeyPut) | **PUT** /web/api/v2.1/groups/{group_id}/regenerate-key | Regenerate Group Token
[**webApiGroupsgroupIdRevertPolicyPut**](GroupsApi.md#webApiGroupsgroupIdRevertPolicyPut) | **PUT** /web/api/v2.1/groups/{group_id}/revert-policy | Revert Policy
[**webApiGroupsgroupIdTokenGet**](GroupsApi.md#webApiGroupsgroupIdTokenGet) | **GET** /web/api/v2.1/groups/{group_id}/token | Get Site registration token by ID


<a name="webApiGroupsGet"></a>
# **webApiGroupsGet**
> GroupsSummarizedGroupSchemaMany200 webApiGroupsGet(opts)

Get Groups

Get data of groups that match the filter. Best practice: use as narrow a filter as you can. The data can be quite long for many groups. The response returns the ID of each group, which you can use in other commands.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GroupsApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
  'query': "query_example", // String | Free text search on fields name, description
  'isDefault': true, // Boolean | Is this the default group?
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-300). Example: \"10\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'id': "id_example", // String | Id. Example: \"225494730938493804\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'rank': 56, // Number | The rank sets the priority of a dynamic group over others. Example: \"1\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
  'registrationToken': "registrationToken_example", // String | Registration token. Example: \"eyJ1cmwiOiAiaHR0cHM6Ly9jb25zb2xlLnNlbnRpbmVsb25lLm5ldCIsICJzaXRlX2tleSI6ICIwNzhkYjliMWUyOTA1Y2NhIn0=\".
  'type': "type_example", // String | Group type. Example: \"static\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'description': "description_example", // String | The description for the Group
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'name': "name_example", // String | Name
  'types': ["types_example"] // [String] | A list of Group types. Example: \"static\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiGroupsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **updatedAtLt** | **Date**| Updated at lesser than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **query** | **String**| Free text search on fields name, description | [optional] 
 **isDefault** | **Boolean**| Is this the default group? | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-300). Example: \"10\". | [optional] [default to 10]
 **updatedAtGte** | **Date**| Updated at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **id** | **String**| Id. Example: \"225494730938493804\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **rank** | **Number**| The rank sets the priority of a dynamic group over others. Example: \"1\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **updatedAtGt** | **Date**| Updated at greater than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **registrationToken** | **String**| Registration token. Example: \"eyJ1cmwiOiAiaHR0cHM6Ly9jb25zb2xlLnNlbnRpbmVsb25lLm5ldCIsICJzaXRlX2tleSI6ICIwNzhkYjliMWUyOTA1Y2NhIn0=\". | [optional] 
 **type** | **String**| Group type. Example: \"static\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **updatedAtLte** | **Date**| Updated at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **description** | **String**| The description for the Group | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **name** | **String**| Name | [optional] 
 **types** | [**[String]**](String.md)| A list of Group types. Example: \"static\". | [optional] 

### Return type

[**GroupsSummarizedGroupSchemaMany200**](GroupsSummarizedGroupSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiGroupsPost"></a>
# **webApiGroupsPost**
> GroupsGroupSchema200 webApiGroupsPost(opts)

Create Group

Create a new group. You must create the Group in a Site (run \"sites\" to get the Site ID) for which you have permissions. If you create a dynamic Group, you must have the ID of a filter saved in the Site (run \"filters?siteIds=<id from sites>\").

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GroupsApi();

var opts = { 
  'body': new S1MgmtApi.GroupsPostGroupSchema() // GroupsPostGroupSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiGroupsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GroupsPostGroupSchema**](GroupsPostGroupSchema.md)|  | [optional] 

### Return type

[**GroupsGroupSchema200**](GroupsGroupSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiGroupsRanksPut"></a>
# **webApiGroupsRanksPut**
> SuccessResponseSchema204 webApiGroupsRanksPut(opts)

Update Ranks

 An Agent can belong to only one Group. If the Agent matches multiple Dynamic Groups, it goes to the Group with the highest rank. The \"rank\" parameter has a minimum of \"1\". The lower the integer, the higher priority it has to collect Agents. Make sure the IDs of the groups in this command are for Dynamic groups.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GroupsApi();

var opts = { 
  'body': new S1MgmtApi.GroupsPutRanksSchema() // GroupsPutRanksSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiGroupsRanksPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GroupsPutRanksSchema**](GroupsPutRanksSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema204**](SuccessResponseSchema204.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiGroupsgroupIdDelete"></a>
# **webApiGroupsgroupIdDelete**
> SuccessResponseSchema200 webApiGroupsgroupIdDelete(groupId)

Delete Group

Delete a Group given by the required Group ID (run \"groups\"). If there are Agents in the Group, and the Group is dynamic, the next dynamic Groups will collect matching Agents, and unmatched Agents will go to the Default Group. If this is a static Group with Agents, all the Agents will go to the Default Group. (Agents always go to matching dynamic Groups. If a static Group holds Agents, there are no matching dynamic Groups.)

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GroupsApi();

var groupId = "groupId_example"; // String | Group ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiGroupsgroupIdDelete(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group ID. Example: \"225494730938493804\". | 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiGroupsgroupIdGet"></a>
# **webApiGroupsgroupIdGet**
> GroupsGroupSchema200 webApiGroupsgroupIdGet(groupId)

Get Group by ID

Get data of a given Group. To get a Group ID, run \"groups\". This command responds with the ID of the Site of the Group, Group name, type (dynamic or static), and similar data. Your username must permissions for the Site.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GroupsApi();

var groupId = "groupId_example"; // String | Group ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiGroupsgroupIdGet(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group ID. Example: \"225494730938493804\". | 

### Return type

[**GroupsGroupSchema200**](GroupsGroupSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiGroupsgroupIdMoveAgentsPut"></a>
# **webApiGroupsgroupIdMoveAgentsPut**
> GroupsAddAgentsDataSchema204 webApiGroupsgroupIdMoveAgentsPut(groupId, opts)

Move Agents

Move Agents that match the filter to a Group. The Group ID (run \"groups\") is required and there can be only one. This will move the matched Agents that are in the same Site as the given Group.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GroupsApi();

var groupId = "groupId_example"; // String | Group ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.GroupsPutAddAgentsSchema() // GroupsPutAddAgentsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiGroupsgroupIdMoveAgentsPut(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group ID. Example: \"225494730938493804\". | 
 **body** | [**GroupsPutAddAgentsSchema**](GroupsPutAddAgentsSchema.md)|  | [optional] 

### Return type

[**GroupsAddAgentsDataSchema204**](GroupsAddAgentsDataSchema204.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiGroupsgroupIdPut"></a>
# **webApiGroupsgroupIdPut**
> GroupsGroupSchema200 webApiGroupsgroupIdPut(groupId, opts)

Update Group

Change properties of a Group specified by its ID (run \"groups\"). The body of the request holds all the properties of a Group. You must have access permissions on the Site. Note: iocAttributes refers to Deep Visibility. If you do not have a Complete SKU, you can remove this set.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GroupsApi();

var groupId = "groupId_example"; // String | Group ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.GroupsPutGroupSchema() // GroupsPutGroupSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiGroupsgroupIdPut(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group ID. Example: \"225494730938493804\". | 
 **body** | [**GroupsPutGroupSchema**](GroupsPutGroupSchema.md)|  | [optional] 

### Return type

[**GroupsGroupSchema200**](GroupsGroupSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiGroupsgroupIdRegenerateKeyPut"></a>
# **webApiGroupsgroupIdRegenerateKeyPut**
> GroupsRegenerateKeySchema200 webApiGroupsgroupIdRegenerateKeyPut(groupId)

Regenerate Group Token

Get a new Group Token for a static Group. This command requires the Group ID (\"groups\") and you must have permissions for the Group. If you run this command on a dynamic Group, it ends in an error. If you use the API in scripts to add new endpoints with a Group Token rather than a Site Token, be aware that you must update the token value in your scripts.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GroupsApi();

var groupId = "groupId_example"; // String | Group ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiGroupsgroupIdRegenerateKeyPut(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group ID. Example: \"225494730938493804\". | 

### Return type

[**GroupsRegenerateKeySchema200**](GroupsRegenerateKeySchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiGroupsgroupIdRevertPolicyPut"></a>
# **webApiGroupsgroupIdRevertPolicyPut**
> SuccessResponseSchema200 webApiGroupsgroupIdRevertPolicyPut(groupId, opts)

Revert Policy

A Group can have a policy that is different from its Site policy. Use this command to revert the changes on the Group policy to inherit the Site policy. Your user must have permissions on the Site.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GroupsApi();

var groupId = "groupId_example"; // String | Group ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.PoliciesSchemasRevertPolicySchema() // PoliciesSchemasRevertPolicySchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiGroupsgroupIdRevertPolicyPut(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group ID. Example: \"225494730938493804\". | 
 **body** | [**PoliciesSchemasRevertPolicySchema**](PoliciesSchemasRevertPolicySchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiGroupsgroupIdTokenGet"></a>
# **webApiGroupsgroupIdTokenGet**
> GroupsGroupTokenGenerationSchema200 webApiGroupsgroupIdTokenGet(groupId)

Get Site registration token by ID

Get the registration token of the Group of the ID.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.GroupsApi();

var groupId = "groupId_example"; // String | Group ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiGroupsgroupIdTokenGet(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group ID. Example: \"225494730938493804\". | 

### Return type

[**GroupsGroupTokenGenerationSchema200**](GroupsGroupTokenGenerationSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

