# S1MgmtApi.AlertsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiCloudDetectionAlertsAnalystVerdictPost**](AlertsApi.md#webApiCloudDetectionAlertsAnalystVerdictPost) | **POST** /web/api/v2.1/cloud-detection/alerts/analyst-verdict | Update Alert Analyst Verdict
[**webApiCloudDetectionAlertsGet**](AlertsApi.md#webApiCloudDetectionAlertsGet) | **GET** /web/api/v2.1/cloud-detection/alerts | Get alerts
[**webApiCloudDetectionAlertsIncidentPost**](AlertsApi.md#webApiCloudDetectionAlertsIncidentPost) | **POST** /web/api/v2.1/cloud-detection/alerts/incident | Update Threat Incident


<a name="webApiCloudDetectionAlertsAnalystVerdictPost"></a>
# **webApiCloudDetectionAlertsAnalystVerdictPost**
> AffectedResultsSchema200 webApiCloudDetectionAlertsAnalystVerdictPost(opts)

Update Alert Analyst Verdict

Change the verdict of an alert

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AlertsApi();

var opts = { 
  'body': new S1MgmtApi.V21AlertsSchemasAlertsAnalystVerdictSchema() // V21AlertsSchemasAlertsAnalystVerdictSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiCloudDetectionAlertsAnalystVerdictPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21AlertsSchemasAlertsAnalystVerdictSchema**](V21AlertsSchemasAlertsAnalystVerdictSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiCloudDetectionAlertsGet"></a>
# **webApiCloudDetectionAlertsGet**
> V21AlertsSchemasAlertInformationSchemaMany200 webApiCloudDetectionAlertsGet(opts)

Get alerts

Get a list of alerts for a given scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AlertsApi();

var opts = { 
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'containerImageNameContains': ["containerImageNameContains_example"], // [String] | Free-text filter by the endpoint container image name (supports multiple values)
  'reportedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Reported at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'reportedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Reported at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'sourceProcessNameContains': ["sourceProcessNameContains_example"], // [String] | Free-text filter by source process name. Example: \"proc1.exe\".
  'incidentStatus': ["incidentStatus_example"], // [String] | Filter threats by a incident status. Example: \"IN_PROGRESS\".
  'sourceProcessCommandlineContains': ["sourceProcessCommandlineContains_example"], // [String] | Free-text filter by source commandline. Example: \"rule1\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'k8sNamespaceLabelsContains': ["k8sNamespaceLabelsContains_example"], // [String] | Free-text filter by the endpoint Kubernetes namespace labels (supports multiple values)
  'k8sPodContains': ["k8sPodContains_example"], // [String] | Free-text filter by the endpoint Kubernetes pod name (supports multiple values)
  'reportedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Reported at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
  'sourceProcessFileHashSha1Contains': ["sourceProcessFileHashSha1Contains_example"], // [String] | Free-text filter by source sha1. Example: \"rule1\".
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'k8sNodeContains': ["k8sNodeContains_example"], // [String] | Free-text filter by the endpoint Kubernetes node name (supports multiple values)
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'origAgentUuidContains': ["origAgentUuidContains_example"], // [String] | Free-text filter by agent UUID. Example: \"win7\".
  'sourceProcessFileHashMd5Contains': ["sourceProcessFileHashMd5Contains_example"], // [String] | Free-text filter by source md5. Example: \"rule1\".
  'query': "query_example", // String | Full text search for all fields
  'osType': ["osType_example"], // [String] | Included OS types
  'containerNameContains': ["containerNameContains_example"], // [String] | Free-text filter by the endpoint container name (supports multiple values)
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'analystVerdict': ["analystVerdict_example"], // [String] | Filter threats by a analyst verdict. Example: \"TRUE_POSITIVE\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
  'origAgentNameContains': ["origAgentNameContains_example"], // [String] | Free-text filter by agent name. Example: \"ilia\".
  'ruleNameContains': ["ruleNameContains_example"], // [String] | Free-text filter by rule name. Example: \"rule1\".
  'origAgentOsRevisionContains': ["origAgentOsRevisionContains_example"], // [String] | Free-text filter by agent OS revision. Example: \"win7\".
  'sourceProcessFilePathContains': ["sourceProcessFilePathContains_example"], // [String] | Free-text filter by source file path. Example: \"rule1\".
  'k8sControllerLabelsContains': ["k8sControllerLabelsContains_example"], // [String] | Free-text filter by the endpoint Kubernetes controller labels (supports multiple values)
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'containerLabelsContains': ["containerLabelsContains_example"], // [String] | Free-text filter by the endpoint container labels (supports multiple values)
  'k8sNamespaceNameContains': ["k8sNamespaceNameContains_example"], // [String] | Free-text filter by the endpoint Kubernetes namespace name (supports multiple values)
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'machineType': ["machineType_example"], // [String] | agent machine type
  'k8sControllerNameContains': ["k8sControllerNameContains_example"], // [String] | Free-text filter by the endpoint Kubernetes controller name (supports multiple values)
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'disablePagination': true, // Boolean | If true, all rules for requested scope will be returned
  'severity': ["severity_example"], // [String] | Severity. Example: \"Low\".
  'k8sClusterContains': ["k8sClusterContains_example"], // [String] | Free-text filter by the endpoint Kubernetes cluster name (supports multiple values)
  'ids': ["ids_example"], // [String] | A list of Alert IDs. Example: \"225494730938493804,225494730938493915\".
  'scopes': ["scopes_example"], // [String] | Filter results by scope. Example: \"account\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'sourceProcessStorylineContains': ["sourceProcessStorylineContains_example"], // [String] | Free-text filter by source storyline. Example: \"rule1\".
  'origAgentVersionContains': ["origAgentVersionContains_example"], // [String] | Free-text filter by agent OS version. Example: \"7.11\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'reportedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Reported at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
  'k8sPodLabelsContains': ["k8sPodLabelsContains_example"], // [String] | Free-text filter by the endpoint Kubernetes pod labels (supports multiple values)
  'sourceProcessFileHashSha256Contains': ["sourceProcessFileHashSha256Contains_example"], // [String] | Free-text filter by source sha255. Example: \"rule1\".
  'countOnly': false // Boolean | If true, only total number of items will be returned, without any of the actual objects.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiCloudDetectionAlertsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **containerImageNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint container image name (supports multiple values) | [optional] 
 **reportedAtGte** | **Date**| Reported at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **reportedAtLte** | **Date**| Reported at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **sourceProcessNameContains** | [**[String]**](String.md)| Free-text filter by source process name. Example: \"proc1.exe\". | [optional] 
 **incidentStatus** | [**[String]**](String.md)| Filter threats by a incident status. Example: \"IN_PROGRESS\". | [optional] 
 **sourceProcessCommandlineContains** | [**[String]**](String.md)| Free-text filter by source commandline. Example: \"rule1\". | [optional] 
 **createdAtLte** | **Date**| Created at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **k8sNamespaceLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes namespace labels (supports multiple values) | [optional] 
 **k8sPodContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes pod name (supports multiple values) | [optional] 
 **reportedAtGt** | **Date**| Reported at greater than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **sourceProcessFileHashSha1Contains** | [**[String]**](String.md)| Free-text filter by source sha1. Example: \"rule1\". | [optional] 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **k8sNodeContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes node name (supports multiple values) | [optional] 
 **createdAtGt** | **Date**| Created at greater than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **origAgentUuidContains** | [**[String]**](String.md)| Free-text filter by agent UUID. Example: \"win7\". | [optional] 
 **sourceProcessFileHashMd5Contains** | [**[String]**](String.md)| Free-text filter by source md5. Example: \"rule1\". | [optional] 
 **query** | **String**| Full text search for all fields | [optional] 
 **osType** | [**[String]**](String.md)| Included OS types | [optional] 
 **containerNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint container name (supports multiple values) | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **analystVerdict** | [**[String]**](String.md)| Filter threats by a analyst verdict. Example: \"TRUE_POSITIVE\". | [optional] 
 **createdAtLt** | **Date**| Created at lesser than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **origAgentNameContains** | [**[String]**](String.md)| Free-text filter by agent name. Example: \"ilia\". | [optional] 
 **ruleNameContains** | [**[String]**](String.md)| Free-text filter by rule name. Example: \"rule1\". | [optional] 
 **origAgentOsRevisionContains** | [**[String]**](String.md)| Free-text filter by agent OS revision. Example: \"win7\". | [optional] 
 **sourceProcessFilePathContains** | [**[String]**](String.md)| Free-text filter by source file path. Example: \"rule1\". | [optional] 
 **k8sControllerLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes controller labels (supports multiple values) | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **containerLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint container labels (supports multiple values) | [optional] 
 **k8sNamespaceNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes namespace name (supports multiple values) | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **machineType** | [**[String]**](String.md)| agent machine type | [optional] 
 **k8sControllerNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes controller name (supports multiple values) | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **disablePagination** | **Boolean**| If true, all rules for requested scope will be returned | [optional] 
 **severity** | [**[String]**](String.md)| Severity. Example: \"Low\". | [optional] 
 **k8sClusterContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes cluster name (supports multiple values) | [optional] 
 **ids** | [**[String]**](String.md)| A list of Alert IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **scopes** | [**[String]**](String.md)| Filter results by scope. Example: \"account\". | [optional] 
 **createdAtGte** | **Date**| Created at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **sourceProcessStorylineContains** | [**[String]**](String.md)| Free-text filter by source storyline. Example: \"rule1\". | [optional] 
 **origAgentVersionContains** | [**[String]**](String.md)| Free-text filter by agent OS version. Example: \"7.11\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **reportedAtLt** | **Date**| Reported at lesser than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **k8sPodLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes pod labels (supports multiple values) | [optional] 
 **sourceProcessFileHashSha256Contains** | [**[String]**](String.md)| Free-text filter by source sha255. Example: \"rule1\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]

### Return type

[**V21AlertsSchemasAlertInformationSchemaMany200**](V21AlertsSchemasAlertInformationSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiCloudDetectionAlertsIncidentPost"></a>
# **webApiCloudDetectionAlertsIncidentPost**
> AffectedResultsSchema200 webApiCloudDetectionAlertsIncidentPost(opts)

Update Threat Incident

Update the incident details of an alert.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.AlertsApi();

var opts = { 
  'body': new S1MgmtApi.V21AlertsSchemasAlertsIncidentSchema() // V21AlertsSchemasAlertsIncidentSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiCloudDetectionAlertsIncidentPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21AlertsSchemasAlertsIncidentSchema**](V21AlertsSchemasAlertsIncidentSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

