# S1MgmtApi.AgentSupportActionsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiAgentsActionsClearRemoteShellSessionPost**](AgentSupportActionsApi.md#webApiAgentsActionsClearRemoteShellSessionPost) | **POST** /web/api/v2.1/agents/actions/clear-remote-shell-session | Clear Remote Shell


<a name="webApiAgentsActionsClearRemoteShellSessionPost"></a>
# **webApiAgentsActionsClearRemoteShellSessionPost**
> AffectedResultsSchema200 webApiAgentsActionsClearRemoteShellSessionPost(opts)

Clear Remote Shell

Remote Shell is a powerful way to respond remotely to events on endpoints. It lets you open full shell capabilities - PowerShell on Windows and Bash on macOS and Linux. <BR>For best practices, a Remote Shell session can be terminated in many ways: from the UI, from Agent timeouts, from endpoint or connections issues, and so on. If a shell closes at the same time that an Agent goes offline, Remote Shell status is incorrect on the Management. <BR>Use this command to clear the \"open shell\" flags on the Management. <BR>The IT user role does not have permissions to run this command. 

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AgentSupportActionsApi();

var opts = { 
  'body': new S1MgmtApi.AgentsSchemasAgentsActionSchema() // AgentsSchemasAgentsActionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiAgentsActionsClearRemoteShellSessionPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AgentsSchemasAgentsActionSchema**](AgentsSchemasAgentsActionSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

