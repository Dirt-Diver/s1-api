# S1MgmtApi.ThreatsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiExportThreatsthreatIdExploreEventsGet**](ThreatsApi.md#webApiExportThreatsthreatIdExploreEventsGet) | **GET** /web/api/v2.1/export/threats/{threat_id}/explore/events | Export Events
[**webApiExportThreatsthreatIdTimelineGet**](ThreatsApi.md#webApiExportThreatsthreatIdTimelineGet) | **GET** /web/api/v2.1/export/threats/{threat_id}/timeline | Export Threat Timeline
[**webApiThreatsActionsContainerNetworkConnectPost**](ThreatsApi.md#webApiThreatsActionsContainerNetworkConnectPost) | **POST** /web/api/v2.1/threats/actions/container-network-connect | Reconnect Container
[**webApiThreatsActionsContainerNetworkDisconnectPost**](ThreatsApi.md#webApiThreatsActionsContainerNetworkDisconnectPost) | **POST** /web/api/v2.1/threats/actions/container-network-disconnect | Disconnect Container
[**webApiThreatsAddToBlacklistPost**](ThreatsApi.md#webApiThreatsAddToBlacklistPost) | **POST** /web/api/v2.1/threats/add-to-blacklist | Add to Blocklist
[**webApiThreatsAddToExclusionsPost**](ThreatsApi.md#webApiThreatsAddToExclusionsPost) | **POST** /web/api/v2.1/threats/add-to-exclusions | Add to Exclusions
[**webApiThreatsAnalystVerdictPost**](ThreatsApi.md#webApiThreatsAnalystVerdictPost) | **POST** /web/api/v2.1/threats/analyst-verdict | Update Threat Analyst Verdict
[**webApiThreatsDvAddToBlacklistPost**](ThreatsApi.md#webApiThreatsDvAddToBlacklistPost) | **POST** /web/api/v2.1/threats/dv-add-to-blacklist | Add to Blocklist (Deep Visibility)
[**webApiThreatsDvMarkAsThreatPost**](ThreatsApi.md#webApiThreatsDvMarkAsThreatPost) | **POST** /web/api/v2.1/threats/dv-mark-as-threat | Mark as Threat (Deep Visibility)
[**webApiThreatsEnginesDisablePost**](ThreatsApi.md#webApiThreatsEnginesDisablePost) | **POST** /web/api/v2.1/threats/engines/disable | Disable Engines
[**webApiThreatsExportGet**](ThreatsApi.md#webApiThreatsExportGet) | **GET** /web/api/v2.1/threats/export | Export Threats
[**webApiThreatsExternalTicketIdPost**](ThreatsApi.md#webApiThreatsExternalTicketIdPost) | **POST** /web/api/v2.1/threats/external-ticket-id | Update Threat External Ticket ID
[**webApiThreatsFetchFilePost**](ThreatsApi.md#webApiThreatsFetchFilePost) | **POST** /web/api/v2.1/threats/fetch-file | Fetch Threat File
[**webApiThreatsGet**](ThreatsApi.md#webApiThreatsGet) | **GET** /web/api/v2.1/threats | Get Threats
[**webApiThreatsIncidentPost**](ThreatsApi.md#webApiThreatsIncidentPost) | **POST** /web/api/v2.1/threats/incident | Updated Threat Incident
[**webApiThreatsMitigateactionPost**](ThreatsApi.md#webApiThreatsMitigateactionPost) | **POST** /web/api/v2.1/threats/mitigate/{action} | Mitigate Threats
[**webApiThreatsMitigationReportreportIdGet**](ThreatsApi.md#webApiThreatsMitigationReportreportIdGet) | **GET** /web/api/v2.1/threats/mitigation-report/{report_id} | Export Mitigation Report
[**webApiThreatsthreatIdDownloadFromCloudGet**](ThreatsApi.md#webApiThreatsthreatIdDownloadFromCloudGet) | **GET** /web/api/v2.1/threats/{threat_id}/download-from-cloud | Download from cloud
[**webApiThreatsthreatIdExploreEventsGet**](ThreatsApi.md#webApiThreatsthreatIdExploreEventsGet) | **GET** /web/api/v2.1/threats/{threat_id}/explore/events | Get Events
[**webApiThreatsthreatIdTimelineGet**](ThreatsApi.md#webApiThreatsthreatIdTimelineGet) | **GET** /web/api/v2.1/threats/{threat_id}/timeline | Get Threat Timeline
[**webApiThreatsthreatIdWhiteningOptionsGet**](ThreatsApi.md#webApiThreatsthreatIdWhiteningOptionsGet) | **GET** /web/api/v2.1/threats/{threat_id}/whitening-options | Exclusion Options


<a name="webApiExportThreatsthreatIdExploreEventsGet"></a>
# **webApiExportThreatsthreatIdExploreEventsGet**
> webApiExportThreatsthreatIdExploreEventsGet(threatId, format, opts)

Export Events

Export threat events in CSV or JSON format.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var threatId = "threatId_example"; // String | Threat ID. Example: \"225494730938493804\".

var format = "format_example"; // String | Exported file format. Example: \"json\".

var opts = { 
  'eventId': "eventId_example", // String | Filter by a specific process key and its children
  'eventTypes': ["eventTypes_example"], // [String] | Filter events by type. Example: \"events\".
  'eventSubTypes': ["eventSubTypes_example"], // [String] | Filter events by sub-type. Example: \"PROCESSCREATION\".
  'processNameLike': "processNameLike_example" // String | Filter by process name (substring)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExportThreatsthreatIdExploreEventsGet(threatId, format, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threatId** | **String**| Threat ID. Example: \"225494730938493804\". | 
 **format** | **String**| Exported file format. Example: \"json\". | 
 **eventId** | **String**| Filter by a specific process key and its children | [optional] 
 **eventTypes** | [**[String]**](String.md)| Filter events by type. Example: \"events\". | [optional] 
 **eventSubTypes** | [**[String]**](String.md)| Filter events by sub-type. Example: \"PROCESSCREATION\". | [optional] 
 **processNameLike** | **String**| Filter by process name (substring) | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiExportThreatsthreatIdTimelineGet"></a>
# **webApiExportThreatsthreatIdTimelineGet**
> webApiExportThreatsthreatIdTimelineGet(threatId, opts)

Export Threat Timeline

Export a threat's timeline.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var threatId = "threatId_example"; // String | Threat ID. Example: \"225494730938493804\".

var opts = { 
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'activityTypes': ["activityTypes_example"], // [String] | Return only these activity codes (comma-separated list). Example: \"52,53,71,72\".
  'query': "query_example", // String | Full text search for fields: hash, primary_description, secondary_description
  'groupIds': ["groupIds_example"] // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExportThreatsthreatIdTimelineGet(threatId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threatId** | **String**| Threat ID. Example: \"225494730938493804\". | 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **activityTypes** | [**[String]**](String.md)| Return only these activity codes (comma-separated list). Example: \"52,53,71,72\". | [optional] 
 **query** | **String**| Full text search for fields: hash, primary_description, secondary_description | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiThreatsActionsContainerNetworkConnectPost"></a>
# **webApiThreatsActionsContainerNetworkConnectPost**
> SuccessResponseSchema200 webApiThreatsActionsContainerNetworkConnectPost(opts)

Reconnect Container

Restore network to a container that was disconnected

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasContainerNetworkQuarantineSchema() // ThreatsSchemasContainerNetworkQuarantineSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsActionsContainerNetworkConnectPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThreatsSchemasContainerNetworkQuarantineSchema**](ThreatsSchemasContainerNetworkQuarantineSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsActionsContainerNetworkDisconnectPost"></a>
# **webApiThreatsActionsContainerNetworkDisconnectPost**
> SuccessResponseSchema200 webApiThreatsActionsContainerNetworkDisconnectPost(opts)

Disconnect Container

Network quarantine a specific container

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasContainerNetworkQuarantineSchema() // ThreatsSchemasContainerNetworkQuarantineSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsActionsContainerNetworkDisconnectPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThreatsSchemasContainerNetworkQuarantineSchema**](ThreatsSchemasContainerNetworkQuarantineSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsAddToBlacklistPost"></a>
# **webApiThreatsAddToBlacklistPost**
> ThreatsSchemasThreatsAddToBlocklistExclusionsResultSchema200 webApiThreatsAddToBlacklistPost(opts)

Add to Blocklist

Add threats that have a SHA1 hash and that match the filter to the Blocklist of the target scope: Global, Account, Site, or Group.<BR> Your role must have permissions to change the Blocklist - Admin, IR Team, SOC - and your user scope access must include the Agent. The target scope is the Group, Site, or Account of the Agent.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasThreatsAddToRestrictionsWithTargetSchema() // ThreatsSchemasThreatsAddToRestrictionsWithTargetSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsAddToBlacklistPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThreatsSchemasThreatsAddToRestrictionsWithTargetSchema**](ThreatsSchemasThreatsAddToRestrictionsWithTargetSchema.md)|  | [optional] 

### Return type

[**ThreatsSchemasThreatsAddToBlocklistExclusionsResultSchema200**](ThreatsSchemasThreatsAddToBlocklistExclusionsResultSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsAddToExclusionsPost"></a>
# **webApiThreatsAddToExclusionsPost**
> ThreatsSchemasThreatsAddToBlocklistExclusionsResultSchema200 webApiThreatsAddToExclusionsPost(opts)

Add to Exclusions

Add a threat to exclusions. The \"whitening option\" is required. <BR>When you create an exclusion, you override the \"malicious\" verdict of the Agent for a detection. This can open holes in your security deployment. Use with caution.<BR>Best practice: Use the most specific definition of the exclusion possible and the lowest mode possible.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasThreatsAddToExclusionsWithTargetSchema() // ThreatsSchemasThreatsAddToExclusionsWithTargetSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsAddToExclusionsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThreatsSchemasThreatsAddToExclusionsWithTargetSchema**](ThreatsSchemasThreatsAddToExclusionsWithTargetSchema.md)|  | [optional] 

### Return type

[**ThreatsSchemasThreatsAddToBlocklistExclusionsResultSchema200**](ThreatsSchemasThreatsAddToBlocklistExclusionsResultSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsAnalystVerdictPost"></a>
# **webApiThreatsAnalystVerdictPost**
> ThreatsSchemasThreatsAnalystVerdictResultSchema200 webApiThreatsAnalystVerdictPost(opts)

Update Threat Analyst Verdict

Change the verdict of a threat, as determined by a Console user.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasThreatsAnalystVerdictSchema() // ThreatsSchemasThreatsAnalystVerdictSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsAnalystVerdictPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThreatsSchemasThreatsAnalystVerdictSchema**](ThreatsSchemasThreatsAnalystVerdictSchema.md)|  | [optional] 

### Return type

[**ThreatsSchemasThreatsAnalystVerdictResultSchema200**](ThreatsSchemasThreatsAnalystVerdictResultSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsDvAddToBlacklistPost"></a>
# **webApiThreatsDvAddToBlacklistPost**
> AffectedResultsSchema200 webApiThreatsDvAddToBlacklistPost(opts)

Add to Blocklist (Deep Visibility)

From Deep Visibility results, add a SHA1 hash to the Blocklist. Set the scope of the Blocklist: Global, Account, Site, or Group. The SHA1 and the Agent ID are required (see Deep Visibility > Get Events). Your role must have permissions to change the Blocklist - Admin, IR Team, SOC - and your user scope access must include the scope of the Agent. The target scope is the Group, Site, or Account of the Agent. <BR> Deep Visibility requires Complete SKU.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasDvAddToBlackListSchema() // ThreatsSchemasDvAddToBlackListSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsDvAddToBlacklistPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThreatsSchemasDvAddToBlackListSchema**](ThreatsSchemasDvAddToBlackListSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsDvMarkAsThreatPost"></a>
# **webApiThreatsDvMarkAsThreatPost**
> AffectedResultsSchema200 webApiThreatsDvMarkAsThreatPost(opts)

Mark as Threat (Deep Visibility)

Mark an event from Deep Visibility data as a threat. (see Deep Visibility > Get Events).Your role must have permissions to Mark as Threat - Admin, IR Team, SOC. The item becomes marked as a threat and the Management adds it to the blocklist. If this threat is detected on an endpoint, the Agent blocks it immediately.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasDvMarkAsThreatSchema() // ThreatsSchemasDvMarkAsThreatSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsDvMarkAsThreatPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThreatsSchemasDvMarkAsThreatSchema**](ThreatsSchemasDvMarkAsThreatSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsEnginesDisablePost"></a>
# **webApiThreatsEnginesDisablePost**
> SuccessResponseSchema200 webApiThreatsEnginesDisablePost(opts)

Disable Engines

If your list of threats shows too many False Positives, use this command to troubleshoot the Agent Engines that return unexpected results in your deployment. Valid values:  \"penetration\", \"dataFiles\",\"exploits\", \"reputation\", \"executables\", \"preExecutionSuspicious\", \"preExecution\", \"lateralMovement\", and \"pup\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasEngineListSchema() // ThreatsSchemasEngineListSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsEnginesDisablePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThreatsSchemasEngineListSchema**](ThreatsSchemasEngineListSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsExportGet"></a>
# **webApiThreatsExportGet**
> webApiThreatsExportGet(opts)

Export Threats

Export data of threats (as seen in the Console > Incidents) that match the filter. Note: Use the filter. This command exports only 20,000 items (each datum is an item).

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'agentVersionsNin': ["agentVersionsNin_example"], // [String] | Excluded Agent versions. Example: \"2.5.1.1320\".
  'analystVerdictsNin': ["analystVerdictsNin_example"], // [String] | Exclude threats with specific analyst verdicts. Example: \"true_positive,suspicious\".
  'threatDetailsContains': ["threatDetailsContains_example"], // [String] | Free-text filter by threat details(supports multiple values). Example: \"malware.exe,virus.exe\".
  'classificationSources': ["classificationSources_example"], // [String] | Classification sources list. Example: \"Cloud\".
  'query': "query_example", // String | Full text search for fields: threat_details, content_hash, computer_name, file_path, uuid, detection_agent_version, realtime_agent_version, detection_agent_domain, command_line_arguments, initiated_by_username, storyline, originated_process, k8s_cluster_name, k8s_node_name, k8s_node_labels, k8s_namespace_name, k8s_namespace_labels, k8s_controller_name, k8s_controller_labels, k8s_pod_name, k8s_pod_labels, container_name, container_image_name, container_labels, external_ticket_id
  'cloudProvider': ["cloudProvider_example"], // [String] | Agents from which cloud provider
  'incidentStatusesNin': ["incidentStatusesNin_example"], // [String] | Exclude threats with specific incident statuses. Example: \"unresolved,in_progress\".
  'publisherNameContains': ["publisherNameContains_example"], // [String] | Free-text filter by threat's publisher name (supports multiple values). Example: \"GOOGLE,Apple Inc.\".
  'agentIsActive': true, // Boolean | Include Agents currently connected to the Management Console
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
  'classificationSourcesNin': ["classificationSourcesNin_example"], // [String] | Classification sources list to exclude. Example: \"Cloud\".
  'containerNameContains': ["containerNameContains_example"], // [String] | Free-text filter by the endpoint container name (supports multiple values)
  'cloudImageContains': ["cloudImageContains_example"], // [String] | Free-text filter by cloud image (supports multiple values)
  'hasAgentTags': true, // Boolean | Include only Threats whose Agent is assigned any tags if True, or none if False
  'storylineContains': ["storylineContains_example"], // [String] | Free-text filter by threat storyline (supports multiple values). Example: \"0000C2E97648,0006FC73-77B4-470F-AAC7-\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'classificationsNin': ["classificationsNin_example"], // [String] | List of threat classifications not to search
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'externalTicketIds': ["externalTicketIds_example"], // [String] | External ticket ID for the threat
  'osTypesNin': ["osTypesNin_example"], // [String] | Excluded OS types. Example: \"windows\".
  'containerImageNameContains': ["containerImageNameContains_example"], // [String] | Free-text filter by the endpoint container image name (supports multiple values)
  'agentIds': ["agentIds_example"], // [String] | List of Agent IDs. Example: \"225494730938493804,225494730938493915\".
  'k8sPodNameContains': ["k8sPodNameContains_example"], // [String] | Free-text filter by the endpoint Kubernetes pod name (supports multiple values)
  'contentHashes': ["contentHashes_example"], // [String] | List of sha1 hashes to search for. Example: \"d,d,d,5,0,3,0,a,3,d,0,2,9,f,3,8,4,5,f,c,1,0,5,2,4,1,9,8,2,9,f,0,8,f,3,1,2,2,4,0\".
  'awsSubnetIdsContains': ["awsSubnetIdsContains_example"], // [String] | Free-text filter by aws subnet ids (supports multiple values)
  'agentTagsData': "agentTagsData_example", // String | Filter threats by assigned tags to the related agent. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'storylines': ["storylines_example"], // [String] | List of Agent context to search for
  'k8sControllerLabelsContains': ["k8sControllerLabelsContains_example"], // [String] | Free-text filter by the endpoint Kubernetes controller labels (supports multiple values)
  'awsSecurityGroupsContains': ["awsSecurityGroupsContains_example"], // [String] | Free-text filter by aws securityGroups(supports multiple values)
  'k8sNodeNameContains': ["k8sNodeNameContains_example"], // [String] | Free-text filter by the endpoint Kubernetes node name (supports multiple values)
  'confidenceLevels': ["confidenceLevels_example"], // [String] | Filter threats by a specific confidence level. Example: \"malicious\".
  'computerNameContains': ["computerNameContains_example"], // [String] | Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\".
  'cloudNetworkContains': ["cloudNetworkContains_example"], // [String] | Free-text filter by cloud network (supports multiple values)
  'classifications': ["classifications_example"], // [String] | List of threat classifications to search
  'analystVerdicts': ["analystVerdicts_example"], // [String] | Filter threats by a specific analyst verdict. Example: \"true_positive,suspicious\".
  'initiatedByUsernameContains': ["initiatedByUsernameContains_example"], // [String] | Free-text filter by the username that initiated that threat (supports multiple values). Example: \"John,John Doe\".
  'resolved': true, // Boolean | This is used for backward-compatibility with API 2.0.
  'collectionIds': ["collectionIds_example"], // [String] | List of collection IDs to search. Example: \"225494730938493804,225494730938493915\".
  'detectionEngines': ["detectionEngines_example"], // [String] | Included engines. Example: \"reputation\".
  'awsRoleContains': ["awsRoleContains_example"], // [String] | Free-text filter by aws role(supports multiple values)
  'cloudAccountContains': ["cloudAccountContains_example"], // [String] | Free-text filter by cloud account (supports multiple values)
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
  'ids': ["ids_example"], // [String] | List of threat IDs. Example: \"225494730938493804,225494730938493915\".
  'countsFor': "countsFor_example", // String | comma-separated list of fields to be shown. Example: \"osTypes,machineTypes\".
  'realtimeAgentVersionContains': ["realtimeAgentVersionContains_example"], // [String] | Free-text filter by Agent version at current time (supports multiple values). Example: \"1.1.1.1,2.2.\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types. Example: \"windows\".
  'agentMachineTypes': ["agentMachineTypes_example"], // [String] | Include Agent machine types. Example: \"unknown\".
  'initiatedBy': ["initiatedBy_example"], // [String] | Only include threats from specific initiating sources. Example: \"agent_policy,dv_command\".
  'initiatedByNin': ["initiatedByNin_example"], // [String] | Exclude threats with specific initiating sources. Example: \"agent_policy,dv_command\".
  'k8sNamespaceLabelsContains': ["k8sNamespaceLabelsContains_example"], // [String] | Free-text filter by the endpoint Kubernetes namespace labels (supports multiple values)
  'engines': ["engines_example"], // [String] | Included engines. Example: \"reputation\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'detectionAgentVersionContains': ["detectionAgentVersionContains_example"], // [String] | Free-text filter by Agent version at detection time (supports multiple values). Example: \"1.1.1.1,2.2.\".
  'detectionEnginesNin': ["detectionEnginesNin_example"], // [String] | Excluded engines. Example: \"reputation\".
  'osNamesNin': ["osNamesNin_example"], // [String] | 
  'k8sControllerNameContains': ["k8sControllerNameContains_example"], // [String] | Free-text filter by the endpoint Kubernetes controller name (supports multiple values)
  'k8sClusterNameContains': ["k8sClusterNameContains_example"], // [String] | Free-text filter by the endpoint Kubernetes cluster name (supports multiple values)
  'noteExists': true, // Boolean | The threat contains at least one note
  'containerLabelsContains': ["containerLabelsContains_example"], // [String] | Free-text filter by the endpoint container labels (supports multiple values)
  'tenant': true, // Boolean | Indicates a tenant scope request
  'cloudInstanceIdContains': ["cloudInstanceIdContains_example"], // [String] | Free-text filter by cloud instance id(supports multiple values)
  'agentVersions': ["agentVersions_example"], // [String] | Include Agent versions. Example: \"2.5.1.1320\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'detectionAgentDomainContains': ["detectionAgentDomainContains_example"], // [String] | Free-text filter by Agent domain at detection time (supports multiple values). Example: \"sentinel,sentinelone.com\".
  'enginesNin': ["enginesNin_example"], // [String] | Excluded engines. Example: \"reputation\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'cloudProviderNin': ["cloudProviderNin_example"], // [String] | Exclude Agents from these cloud provider
  'filePathContains': ["filePathContains_example"], // [String] | Free-text filter by file path (supports multiple values). Example: \"\\MyUser\\Downloads\".
  'k8sNodeLabelsContains': ["k8sNodeLabelsContains_example"], // [String] | Free-text filter by the endpoint Kubernetes node labels (supports multiple values)
  'osArchs': ["osArchs_example"], // [String] | Included OS Architectures. Example: \"32 bit\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
  'k8sNamespaceNameContains': ["k8sNamespaceNameContains_example"], // [String] | Free-text filter by the endpoint Kubernetes namespace name (supports multiple values)
  'rebootRequired': true, // Boolean | A reboot is required on any endpoint for at least one action on the threat
  'mitigationStatuses': ["mitigationStatuses_example"], // [String] | Filter threats by a specific status. Example: \"not_mitigated\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
  'k8sPodLabelsContains': ["k8sPodLabelsContains_example"], // [String] | Free-text filter by the endpoint Kubernetes pod labels (supports multiple values)
  'gcpServiceAccountContains': ["gcpServiceAccountContains_example"], // [String] | Free-text filter by gcp service account (supports multiple values)
  'pendingActions': true, // Boolean | At least one action is pending for the Agent for the threat
  'cloudLocationContains': ["cloudLocationContains_example"], // [String] | Free-text filter by cloud location (supports multiple values)
  'mitigationStatusesNin': ["mitigationStatusesNin_example"], // [String] | Filter threats not by a specific status. Example: \"not_mitigated\".
  'agentMachineTypesNin': ["agentMachineTypesNin_example"], // [String] | Excluded Agent machine types. Example: \"unknown\".
  'originatedProcessContains': ["originatedProcessContains_example"], // [String] | Free-text filter by the originated process name of the threat (supports multiple values)
  'failedActions': true, // Boolean | At least one action failed on the threat
  'osNames': ["osNames_example"], // [String] | 
  'contentHashContains': ["contentHashContains_example"], // [String] | Free-text filter by file content hash (supports multiple values). Example: \"5f09bcff3\".
  'incidentStatuses': ["incidentStatuses_example"], // [String] | Filter threats by a specific incident status. Example: \"unresolved,in_progress\".
  'cloudInstanceSizeContains': ["cloudInstanceSizeContains_example"], // [String] | Free-text filter by cloud instance size(supports multiple values)
  'mitigatedPreemptively': true, // Boolean | If the threat was detected pre-execution or post-execution
  'displayName': "displayName_example", // String | Display name
  'externalTicketIdContains': ["externalTicketIdContains_example"], // [String] | Free-text filter by the threat external ticket ID (supports multiple values)
  'confidenceLevelsNin': ["confidenceLevelsNin_example"], // [String] | Exclude threats with specific confidence level. Example: \"malicious\".
  'azureResourceGroupContains': ["azureResourceGroupContains_example"], // [String] | Free-text filter by azure resource group(supports multiple values)
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'commandLineArgumentsContains': ["commandLineArgumentsContains_example"], // [String] | Free-text filter by threat command line arguments (supports multiple values). Example: \"/usr/sbin/,wget\".
  'uuidContains': ["uuidContains_example"], // [String] | Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\".
  'externalTicketExists': true // Boolean | The threat contains ticket number
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiThreatsExportGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentVersionsNin** | [**[String]**](String.md)| Excluded Agent versions. Example: \"2.5.1.1320\". | [optional] 
 **analystVerdictsNin** | [**[String]**](String.md)| Exclude threats with specific analyst verdicts. Example: \"true_positive,suspicious\". | [optional] 
 **threatDetailsContains** | [**[String]**](String.md)| Free-text filter by threat details(supports multiple values). Example: \"malware.exe,virus.exe\". | [optional] 
 **classificationSources** | [**[String]**](String.md)| Classification sources list. Example: \"Cloud\". | [optional] 
 **query** | **String**| Full text search for fields: threat_details, content_hash, computer_name, file_path, uuid, detection_agent_version, realtime_agent_version, detection_agent_domain, command_line_arguments, initiated_by_username, storyline, originated_process, k8s_cluster_name, k8s_node_name, k8s_node_labels, k8s_namespace_name, k8s_namespace_labels, k8s_controller_name, k8s_controller_labels, k8s_pod_name, k8s_pod_labels, container_name, container_image_name, container_labels, external_ticket_id | [optional] 
 **cloudProvider** | [**[String]**](String.md)| Agents from which cloud provider | [optional] 
 **incidentStatusesNin** | [**[String]**](String.md)| Exclude threats with specific incident statuses. Example: \"unresolved,in_progress\". | [optional] 
 **publisherNameContains** | [**[String]**](String.md)| Free-text filter by threat's publisher name (supports multiple values). Example: \"GOOGLE,Apple Inc.\". | [optional] 
 **agentIsActive** | **Boolean**| Include Agents currently connected to the Management Console | [optional] 
 **updatedAtGt** | **Date**| Updated at greater than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **classificationSourcesNin** | [**[String]**](String.md)| Classification sources list to exclude. Example: \"Cloud\". | [optional] 
 **containerNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint container name (supports multiple values) | [optional] 
 **cloudImageContains** | [**[String]**](String.md)| Free-text filter by cloud image (supports multiple values) | [optional] 
 **hasAgentTags** | **Boolean**| Include only Threats whose Agent is assigned any tags if True, or none if False | [optional] 
 **storylineContains** | [**[String]**](String.md)| Free-text filter by threat storyline (supports multiple values). Example: \"0000C2E97648,0006FC73-77B4-470F-AAC7-\". | [optional] 
 **updatedAtLte** | **Date**| Updated at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **classificationsNin** | [**[String]**](String.md)| List of threat classifications not to search | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **externalTicketIds** | [**[String]**](String.md)| External ticket ID for the threat | [optional] 
 **osTypesNin** | [**[String]**](String.md)| Excluded OS types. Example: \"windows\". | [optional] 
 **containerImageNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint container image name (supports multiple values) | [optional] 
 **agentIds** | [**[String]**](String.md)| List of Agent IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **k8sPodNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes pod name (supports multiple values) | [optional] 
 **contentHashes** | [**[String]**](String.md)| List of sha1 hashes to search for. Example: \"d,d,d,5,0,3,0,a,3,d,0,2,9,f,3,8,4,5,f,c,1,0,5,2,4,1,9,8,2,9,f,0,8,f,3,1,2,2,4,0\". | [optional] 
 **awsSubnetIdsContains** | [**[String]**](String.md)| Free-text filter by aws subnet ids (supports multiple values) | [optional] 
 **agentTagsData** | **String**| Filter threats by assigned tags to the related agent. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\". | [optional] 
 **updatedAtGte** | **Date**| Updated at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **storylines** | [**[String]**](String.md)| List of Agent context to search for | [optional] 
 **k8sControllerLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes controller labels (supports multiple values) | [optional] 
 **awsSecurityGroupsContains** | [**[String]**](String.md)| Free-text filter by aws securityGroups(supports multiple values) | [optional] 
 **k8sNodeNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes node name (supports multiple values) | [optional] 
 **confidenceLevels** | [**[String]**](String.md)| Filter threats by a specific confidence level. Example: \"malicious\". | [optional] 
 **computerNameContains** | [**[String]**](String.md)| Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\". | [optional] 
 **cloudNetworkContains** | [**[String]**](String.md)| Free-text filter by cloud network (supports multiple values) | [optional] 
 **classifications** | [**[String]**](String.md)| List of threat classifications to search | [optional] 
 **analystVerdicts** | [**[String]**](String.md)| Filter threats by a specific analyst verdict. Example: \"true_positive,suspicious\". | [optional] 
 **initiatedByUsernameContains** | [**[String]**](String.md)| Free-text filter by the username that initiated that threat (supports multiple values). Example: \"John,John Doe\". | [optional] 
 **resolved** | **Boolean**| This is used for backward-compatibility with API 2.0. | [optional] 
 **collectionIds** | [**[String]**](String.md)| List of collection IDs to search. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **detectionEngines** | [**[String]**](String.md)| Included engines. Example: \"reputation\". | [optional] 
 **awsRoleContains** | [**[String]**](String.md)| Free-text filter by aws role(supports multiple values) | [optional] 
 **cloudAccountContains** | [**[String]**](String.md)| Free-text filter by cloud account (supports multiple values) | [optional] 
 **updatedAtLt** | **Date**| Updated at lesser than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **ids** | [**[String]**](String.md)| List of threat IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countsFor** | **String**| comma-separated list of fields to be shown. Example: \"osTypes,machineTypes\". | [optional] 
 **realtimeAgentVersionContains** | [**[String]**](String.md)| Free-text filter by Agent version at current time (supports multiple values). Example: \"1.1.1.1,2.2.\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types. Example: \"windows\". | [optional] 
 **agentMachineTypes** | [**[String]**](String.md)| Include Agent machine types. Example: \"unknown\". | [optional] 
 **initiatedBy** | [**[String]**](String.md)| Only include threats from specific initiating sources. Example: \"agent_policy,dv_command\". | [optional] 
 **initiatedByNin** | [**[String]**](String.md)| Exclude threats with specific initiating sources. Example: \"agent_policy,dv_command\". | [optional] 
 **k8sNamespaceLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes namespace labels (supports multiple values) | [optional] 
 **engines** | [**[String]**](String.md)| Included engines. Example: \"reputation\". | [optional] 
 **createdAtLte** | **Date**| Created at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **detectionAgentVersionContains** | [**[String]**](String.md)| Free-text filter by Agent version at detection time (supports multiple values). Example: \"1.1.1.1,2.2.\". | [optional] 
 **detectionEnginesNin** | [**[String]**](String.md)| Excluded engines. Example: \"reputation\". | [optional] 
 **osNamesNin** | [**[String]**](String.md)|  | [optional] 
 **k8sControllerNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes controller name (supports multiple values) | [optional] 
 **k8sClusterNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes cluster name (supports multiple values) | [optional] 
 **noteExists** | **Boolean**| The threat contains at least one note | [optional] 
 **containerLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint container labels (supports multiple values) | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **cloudInstanceIdContains** | [**[String]**](String.md)| Free-text filter by cloud instance id(supports multiple values) | [optional] 
 **agentVersions** | [**[String]**](String.md)| Include Agent versions. Example: \"2.5.1.1320\". | [optional] 
 **createdAtGte** | **Date**| Created at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **detectionAgentDomainContains** | [**[String]**](String.md)| Free-text filter by Agent domain at detection time (supports multiple values). Example: \"sentinel,sentinelone.com\". | [optional] 
 **enginesNin** | [**[String]**](String.md)| Excluded engines. Example: \"reputation\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **cloudProviderNin** | [**[String]**](String.md)| Exclude Agents from these cloud provider | [optional] 
 **filePathContains** | [**[String]**](String.md)| Free-text filter by file path (supports multiple values). Example: \"\\MyUser\\Downloads\". | [optional] 
 **k8sNodeLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes node labels (supports multiple values) | [optional] 
 **osArchs** | [**[String]**](String.md)| Included OS Architectures. Example: \"32 bit\". | [optional] 
 **createdAtGt** | **Date**| Created at greater than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **k8sNamespaceNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes namespace name (supports multiple values) | [optional] 
 **rebootRequired** | **Boolean**| A reboot is required on any endpoint for at least one action on the threat | [optional] 
 **mitigationStatuses** | [**[String]**](String.md)| Filter threats by a specific status. Example: \"not_mitigated\". | [optional] 
 **createdAtLt** | **Date**| Created at lesser than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **k8sPodLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes pod labels (supports multiple values) | [optional] 
 **gcpServiceAccountContains** | [**[String]**](String.md)| Free-text filter by gcp service account (supports multiple values) | [optional] 
 **pendingActions** | **Boolean**| At least one action is pending for the Agent for the threat | [optional] 
 **cloudLocationContains** | [**[String]**](String.md)| Free-text filter by cloud location (supports multiple values) | [optional] 
 **mitigationStatusesNin** | [**[String]**](String.md)| Filter threats not by a specific status. Example: \"not_mitigated\". | [optional] 
 **agentMachineTypesNin** | [**[String]**](String.md)| Excluded Agent machine types. Example: \"unknown\". | [optional] 
 **originatedProcessContains** | [**[String]**](String.md)| Free-text filter by the originated process name of the threat (supports multiple values) | [optional] 
 **failedActions** | **Boolean**| At least one action failed on the threat | [optional] 
 **osNames** | [**[String]**](String.md)|  | [optional] 
 **contentHashContains** | [**[String]**](String.md)| Free-text filter by file content hash (supports multiple values). Example: \"5f09bcff3\". | [optional] 
 **incidentStatuses** | [**[String]**](String.md)| Filter threats by a specific incident status. Example: \"unresolved,in_progress\". | [optional] 
 **cloudInstanceSizeContains** | [**[String]**](String.md)| Free-text filter by cloud instance size(supports multiple values) | [optional] 
 **mitigatedPreemptively** | **Boolean**| If the threat was detected pre-execution or post-execution | [optional] 
 **displayName** | **String**| Display name | [optional] 
 **externalTicketIdContains** | [**[String]**](String.md)| Free-text filter by the threat external ticket ID (supports multiple values) | [optional] 
 **confidenceLevelsNin** | [**[String]**](String.md)| Exclude threats with specific confidence level. Example: \"malicious\". | [optional] 
 **azureResourceGroupContains** | [**[String]**](String.md)| Free-text filter by azure resource group(supports multiple values) | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **commandLineArgumentsContains** | [**[String]**](String.md)| Free-text filter by threat command line arguments (supports multiple values). Example: \"/usr/sbin/,wget\". | [optional] 
 **uuidContains** | [**[String]**](String.md)| Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\". | [optional] 
 **externalTicketExists** | **Boolean**| The threat contains ticket number | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiThreatsExternalTicketIdPost"></a>
# **webApiThreatsExternalTicketIdPost**
> AffectedResultsSchema200 webApiThreatsExternalTicketIdPost(opts)

Update Threat External Ticket ID

Change the external ticket ID of a threat.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasThreatExternalTicketSchema() // ThreatsSchemasThreatExternalTicketSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsExternalTicketIdPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThreatsSchemasThreatExternalTicketSchema**](ThreatsSchemasThreatExternalTicketSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsFetchFilePost"></a>
# **webApiThreatsFetchFilePost**
> AffectedResultsSchema200 webApiThreatsFetchFilePost(opts)

Fetch Threat File

Fetch a file associated with the threat that matches the filter. Your user role must have permissions to Fetch Threat File - Admin, IR Team, SOC.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasThreatsFetchFileRequestSchema() // ThreatsSchemasThreatsFetchFileRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsFetchFilePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThreatsSchemasThreatsFetchFileRequestSchema**](ThreatsSchemasThreatsFetchFileRequestSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsGet"></a>
# **webApiThreatsGet**
> ThreatsSchemasThreatSchemaMany200 webApiThreatsGet(opts)

Get Threats

Get data of threats that match the filter. <BR>Best Practice: Use the filters. Each threat gives a number of data lines that will quickly fill the page limit.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'agentVersionsNin': ["agentVersionsNin_example"], // [String] | Excluded Agent versions. Example: \"2.5.1.1320\".
  'analystVerdictsNin': ["analystVerdictsNin_example"], // [String] | Exclude threats with specific analyst verdicts. Example: \"true_positive,suspicious\".
  'threatDetailsContains': ["threatDetailsContains_example"], // [String] | Free-text filter by threat details(supports multiple values). Example: \"malware.exe,virus.exe\".
  'classificationSources': ["classificationSources_example"], // [String] | Classification sources list. Example: \"Cloud\".
  'query': "query_example", // String | Full text search for fields: threat_details, content_hash, computer_name, file_path, uuid, detection_agent_version, realtime_agent_version, detection_agent_domain, command_line_arguments, initiated_by_username, storyline, originated_process, k8s_cluster_name, k8s_node_name, k8s_node_labels, k8s_namespace_name, k8s_namespace_labels, k8s_controller_name, k8s_controller_labels, k8s_pod_name, k8s_pod_labels, container_name, container_image_name, container_labels, external_ticket_id
  'cloudProvider': ["cloudProvider_example"], // [String] | Agents from which cloud provider
  'incidentStatusesNin': ["incidentStatusesNin_example"], // [String] | Exclude threats with specific incident statuses. Example: \"unresolved,in_progress\".
  'publisherNameContains': ["publisherNameContains_example"], // [String] | Free-text filter by threat's publisher name (supports multiple values). Example: \"GOOGLE,Apple Inc.\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'agentIsActive': true, // Boolean | Include Agents currently connected to the Management Console
  'updatedAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
  'classificationSourcesNin': ["classificationSourcesNin_example"], // [String] | Classification sources list to exclude. Example: \"Cloud\".
  'containerNameContains': ["containerNameContains_example"], // [String] | Free-text filter by the endpoint container name (supports multiple values)
  'cloudImageContains': ["cloudImageContains_example"], // [String] | Free-text filter by cloud image (supports multiple values)
  'hasAgentTags': true, // Boolean | Include only Threats whose Agent is assigned any tags if True, or none if False
  'storylineContains': ["storylineContains_example"], // [String] | Free-text filter by threat storyline (supports multiple values). Example: \"0000C2E97648,0006FC73-77B4-470F-AAC7-\".
  'updatedAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'classificationsNin': ["classificationsNin_example"], // [String] | List of threat classifications not to search
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'externalTicketIds': ["externalTicketIds_example"], // [String] | External ticket ID for the threat
  'osTypesNin': ["osTypesNin_example"], // [String] | Excluded OS types. Example: \"windows\".
  'containerImageNameContains': ["containerImageNameContains_example"], // [String] | Free-text filter by the endpoint container image name (supports multiple values)
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'agentIds': ["agentIds_example"], // [String] | List of Agent IDs. Example: \"225494730938493804,225494730938493915\".
  'k8sPodNameContains': ["k8sPodNameContains_example"], // [String] | Free-text filter by the endpoint Kubernetes pod name (supports multiple values)
  'contentHashes': ["contentHashes_example"], // [String] | List of sha1 hashes to search for. Example: \"d,d,d,5,0,3,0,a,3,d,0,2,9,f,3,8,4,5,f,c,1,0,5,2,4,1,9,8,2,9,f,0,8,f,3,1,2,2,4,0\".
  'awsSubnetIdsContains': ["awsSubnetIdsContains_example"], // [String] | Free-text filter by aws subnet ids (supports multiple values)
  'agentTagsData': "agentTagsData_example", // String | Filter threats by assigned tags to the related agent. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\".
  'updatedAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'storylines': ["storylines_example"], // [String] | List of Agent context to search for
  'k8sControllerLabelsContains': ["k8sControllerLabelsContains_example"], // [String] | Free-text filter by the endpoint Kubernetes controller labels (supports multiple values)
  'awsSecurityGroupsContains': ["awsSecurityGroupsContains_example"], // [String] | Free-text filter by aws securityGroups(supports multiple values)
  'k8sNodeNameContains': ["k8sNodeNameContains_example"], // [String] | Free-text filter by the endpoint Kubernetes node name (supports multiple values)
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'confidenceLevels': ["confidenceLevels_example"], // [String] | Filter threats by a specific confidence level. Example: \"malicious\".
  'computerNameContains': ["computerNameContains_example"], // [String] | Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\".
  'cloudNetworkContains': ["cloudNetworkContains_example"], // [String] | Free-text filter by cloud network (supports multiple values)
  'classifications': ["classifications_example"], // [String] | List of threat classifications to search
  'analystVerdicts': ["analystVerdicts_example"], // [String] | Filter threats by a specific analyst verdict. Example: \"true_positive,suspicious\".
  'initiatedByUsernameContains': ["initiatedByUsernameContains_example"], // [String] | Free-text filter by the username that initiated that threat (supports multiple values). Example: \"John,John Doe\".
  'resolved': true, // Boolean | This is used for backward-compatibility with API 2.0.
  'collectionIds': ["collectionIds_example"], // [String] | List of collection IDs to search. Example: \"225494730938493804,225494730938493915\".
  'detectionEngines': ["detectionEngines_example"], // [String] | Included engines. Example: \"reputation\".
  'awsRoleContains': ["awsRoleContains_example"], // [String] | Free-text filter by aws role(supports multiple values)
  'cloudAccountContains': ["cloudAccountContains_example"], // [String] | Free-text filter by cloud account (supports multiple values)
  'updatedAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
  'ids': ["ids_example"], // [String] | List of threat IDs. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'countsFor': "countsFor_example", // String | comma-separated list of fields to be shown. Example: \"osTypes,machineTypes\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'realtimeAgentVersionContains': ["realtimeAgentVersionContains_example"], // [String] | Free-text filter by Agent version at current time (supports multiple values). Example: \"1.1.1.1,2.2.\".
  'osTypes': ["osTypes_example"], // [String] | Included OS types. Example: \"windows\".
  'agentMachineTypes': ["agentMachineTypes_example"], // [String] | Include Agent machine types. Example: \"unknown\".
  'initiatedBy': ["initiatedBy_example"], // [String] | Only include threats from specific initiating sources. Example: \"agent_policy,dv_command\".
  'initiatedByNin': ["initiatedByNin_example"], // [String] | Exclude threats with specific initiating sources. Example: \"agent_policy,dv_command\".
  'k8sNamespaceLabelsContains': ["k8sNamespaceLabelsContains_example"], // [String] | Free-text filter by the endpoint Kubernetes namespace labels (supports multiple values)
  'engines': ["engines_example"], // [String] | Included engines. Example: \"reputation\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'detectionAgentVersionContains': ["detectionAgentVersionContains_example"], // [String] | Free-text filter by Agent version at detection time (supports multiple values). Example: \"1.1.1.1,2.2.\".
  'detectionEnginesNin': ["detectionEnginesNin_example"], // [String] | Excluded engines. Example: \"reputation\".
  'osNamesNin': ["osNamesNin_example"], // [String] | 
  'k8sControllerNameContains': ["k8sControllerNameContains_example"], // [String] | Free-text filter by the endpoint Kubernetes controller name (supports multiple values)
  'k8sClusterNameContains': ["k8sClusterNameContains_example"], // [String] | Free-text filter by the endpoint Kubernetes cluster name (supports multiple values)
  'noteExists': true, // Boolean | The threat contains at least one note
  'containerLabelsContains': ["containerLabelsContains_example"], // [String] | Free-text filter by the endpoint container labels (supports multiple values)
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'cloudInstanceIdContains': ["cloudInstanceIdContains_example"], // [String] | Free-text filter by cloud instance id(supports multiple values)
  'agentVersions': ["agentVersions_example"], // [String] | Include Agent versions. Example: \"2.5.1.1320\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\".
  'detectionAgentDomainContains': ["detectionAgentDomainContains_example"], // [String] | Free-text filter by Agent domain at detection time (supports multiple values). Example: \"sentinel,sentinelone.com\".
  'enginesNin': ["enginesNin_example"], // [String] | Excluded engines. Example: \"reputation\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'cloudProviderNin': ["cloudProviderNin_example"], // [String] | Exclude Agents from these cloud provider
  'filePathContains': ["filePathContains_example"], // [String] | Free-text filter by file path (supports multiple values). Example: \"\\MyUser\\Downloads\".
  'k8sNodeLabelsContains': ["k8sNodeLabelsContains_example"], // [String] | Free-text filter by the endpoint Kubernetes node labels (supports multiple values)
  'osArchs': ["osArchs_example"], // [String] | Included OS Architectures. Example: \"32 bit\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at greater than. Example: \"2018-02-27T04:49:26.257525Z\".
  'k8sNamespaceNameContains': ["k8sNamespaceNameContains_example"], // [String] | Free-text filter by the endpoint Kubernetes namespace name (supports multiple values)
  'rebootRequired': true, // Boolean | A reboot is required on any endpoint for at least one action on the threat
  'mitigationStatuses': ["mitigationStatuses_example"], // [String] | Filter threats by a specific status. Example: \"not_mitigated\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at lesser than. Example: \"2018-02-27T04:49:26.257525Z\".
  'k8sPodLabelsContains': ["k8sPodLabelsContains_example"], // [String] | Free-text filter by the endpoint Kubernetes pod labels (supports multiple values)
  'gcpServiceAccountContains': ["gcpServiceAccountContains_example"], // [String] | Free-text filter by gcp service account (supports multiple values)
  'pendingActions': true, // Boolean | At least one action is pending for the Agent for the threat
  'cloudLocationContains': ["cloudLocationContains_example"], // [String] | Free-text filter by cloud location (supports multiple values)
  'mitigationStatusesNin': ["mitigationStatusesNin_example"], // [String] | Filter threats not by a specific status. Example: \"not_mitigated\".
  'agentMachineTypesNin': ["agentMachineTypesNin_example"], // [String] | Excluded Agent machine types. Example: \"unknown\".
  'originatedProcessContains': ["originatedProcessContains_example"], // [String] | Free-text filter by the originated process name of the threat (supports multiple values)
  'failedActions': true, // Boolean | At least one action failed on the threat
  'osNames': ["osNames_example"], // [String] | 
  'contentHashContains': ["contentHashContains_example"], // [String] | Free-text filter by file content hash (supports multiple values). Example: \"5f09bcff3\".
  'incidentStatuses': ["incidentStatuses_example"], // [String] | Filter threats by a specific incident status. Example: \"unresolved,in_progress\".
  'cloudInstanceSizeContains': ["cloudInstanceSizeContains_example"], // [String] | Free-text filter by cloud instance size(supports multiple values)
  'mitigatedPreemptively': true, // Boolean | If the threat was detected pre-execution or post-execution
  'displayName': "displayName_example", // String | Display name
  'externalTicketIdContains': ["externalTicketIdContains_example"], // [String] | Free-text filter by the threat external ticket ID (supports multiple values)
  'confidenceLevelsNin': ["confidenceLevelsNin_example"], // [String] | Exclude threats with specific confidence level. Example: \"malicious\".
  'azureResourceGroupContains': ["azureResourceGroupContains_example"], // [String] | Free-text filter by azure resource group(supports multiple values)
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'commandLineArgumentsContains': ["commandLineArgumentsContains_example"], // [String] | Free-text filter by threat command line arguments (supports multiple values). Example: \"/usr/sbin/,wget\".
  'uuidContains': ["uuidContains_example"], // [String] | Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\".
  'externalTicketExists': true // Boolean | The threat contains ticket number
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentVersionsNin** | [**[String]**](String.md)| Excluded Agent versions. Example: \"2.5.1.1320\". | [optional] 
 **analystVerdictsNin** | [**[String]**](String.md)| Exclude threats with specific analyst verdicts. Example: \"true_positive,suspicious\". | [optional] 
 **threatDetailsContains** | [**[String]**](String.md)| Free-text filter by threat details(supports multiple values). Example: \"malware.exe,virus.exe\". | [optional] 
 **classificationSources** | [**[String]**](String.md)| Classification sources list. Example: \"Cloud\". | [optional] 
 **query** | **String**| Full text search for fields: threat_details, content_hash, computer_name, file_path, uuid, detection_agent_version, realtime_agent_version, detection_agent_domain, command_line_arguments, initiated_by_username, storyline, originated_process, k8s_cluster_name, k8s_node_name, k8s_node_labels, k8s_namespace_name, k8s_namespace_labels, k8s_controller_name, k8s_controller_labels, k8s_pod_name, k8s_pod_labels, container_name, container_image_name, container_labels, external_ticket_id | [optional] 
 **cloudProvider** | [**[String]**](String.md)| Agents from which cloud provider | [optional] 
 **incidentStatusesNin** | [**[String]**](String.md)| Exclude threats with specific incident statuses. Example: \"unresolved,in_progress\". | [optional] 
 **publisherNameContains** | [**[String]**](String.md)| Free-text filter by threat's publisher name (supports multiple values). Example: \"GOOGLE,Apple Inc.\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **agentIsActive** | **Boolean**| Include Agents currently connected to the Management Console | [optional] 
 **updatedAtGt** | **Date**| Updated at greater than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **classificationSourcesNin** | [**[String]**](String.md)| Classification sources list to exclude. Example: \"Cloud\". | [optional] 
 **containerNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint container name (supports multiple values) | [optional] 
 **cloudImageContains** | [**[String]**](String.md)| Free-text filter by cloud image (supports multiple values) | [optional] 
 **hasAgentTags** | **Boolean**| Include only Threats whose Agent is assigned any tags if True, or none if False | [optional] 
 **storylineContains** | [**[String]**](String.md)| Free-text filter by threat storyline (supports multiple values). Example: \"0000C2E97648,0006FC73-77B4-470F-AAC7-\". | [optional] 
 **updatedAtLte** | **Date**| Updated at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **classificationsNin** | [**[String]**](String.md)| List of threat classifications not to search | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **externalTicketIds** | [**[String]**](String.md)| External ticket ID for the threat | [optional] 
 **osTypesNin** | [**[String]**](String.md)| Excluded OS types. Example: \"windows\". | [optional] 
 **containerImageNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint container image name (supports multiple values) | [optional] 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **agentIds** | [**[String]**](String.md)| List of Agent IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **k8sPodNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes pod name (supports multiple values) | [optional] 
 **contentHashes** | [**[String]**](String.md)| List of sha1 hashes to search for. Example: \"d,d,d,5,0,3,0,a,3,d,0,2,9,f,3,8,4,5,f,c,1,0,5,2,4,1,9,8,2,9,f,0,8,f,3,1,2,2,4,0\". | [optional] 
 **awsSubnetIdsContains** | [**[String]**](String.md)| Free-text filter by aws subnet ids (supports multiple values) | [optional] 
 **agentTagsData** | **String**| Filter threats by assigned tags to the related agent. Given in form of a JSON where each key represents a tag key, and each value represents a list of string values to filter by. To filter by unassigned tag values, use __nin suffix in the tag key. Example: \"{\"key1\": [\"value1_1\", \"value1_2\"], \"key2__nin\": [\"value2\"]}\". | [optional] 
 **updatedAtGte** | **Date**| Updated at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **storylines** | [**[String]**](String.md)| List of Agent context to search for | [optional] 
 **k8sControllerLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes controller labels (supports multiple values) | [optional] 
 **awsSecurityGroupsContains** | [**[String]**](String.md)| Free-text filter by aws securityGroups(supports multiple values) | [optional] 
 **k8sNodeNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes node name (supports multiple values) | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **confidenceLevels** | [**[String]**](String.md)| Filter threats by a specific confidence level. Example: \"malicious\". | [optional] 
 **computerNameContains** | [**[String]**](String.md)| Free-text filter by computer name (supports multiple values). Example: \"john-office,WIN\". | [optional] 
 **cloudNetworkContains** | [**[String]**](String.md)| Free-text filter by cloud network (supports multiple values) | [optional] 
 **classifications** | [**[String]**](String.md)| List of threat classifications to search | [optional] 
 **analystVerdicts** | [**[String]**](String.md)| Filter threats by a specific analyst verdict. Example: \"true_positive,suspicious\". | [optional] 
 **initiatedByUsernameContains** | [**[String]**](String.md)| Free-text filter by the username that initiated that threat (supports multiple values). Example: \"John,John Doe\". | [optional] 
 **resolved** | **Boolean**| This is used for backward-compatibility with API 2.0. | [optional] 
 **collectionIds** | [**[String]**](String.md)| List of collection IDs to search. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **detectionEngines** | [**[String]**](String.md)| Included engines. Example: \"reputation\". | [optional] 
 **awsRoleContains** | [**[String]**](String.md)| Free-text filter by aws role(supports multiple values) | [optional] 
 **cloudAccountContains** | [**[String]**](String.md)| Free-text filter by cloud account (supports multiple values) | [optional] 
 **updatedAtLt** | **Date**| Updated at lesser than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **ids** | [**[String]**](String.md)| List of threat IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **countsFor** | **String**| comma-separated list of fields to be shown. Example: \"osTypes,machineTypes\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **realtimeAgentVersionContains** | [**[String]**](String.md)| Free-text filter by Agent version at current time (supports multiple values). Example: \"1.1.1.1,2.2.\". | [optional] 
 **osTypes** | [**[String]**](String.md)| Included OS types. Example: \"windows\". | [optional] 
 **agentMachineTypes** | [**[String]**](String.md)| Include Agent machine types. Example: \"unknown\". | [optional] 
 **initiatedBy** | [**[String]**](String.md)| Only include threats from specific initiating sources. Example: \"agent_policy,dv_command\". | [optional] 
 **initiatedByNin** | [**[String]**](String.md)| Exclude threats with specific initiating sources. Example: \"agent_policy,dv_command\". | [optional] 
 **k8sNamespaceLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes namespace labels (supports multiple values) | [optional] 
 **engines** | [**[String]**](String.md)| Included engines. Example: \"reputation\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **createdAtLte** | **Date**| Created at lesser or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **detectionAgentVersionContains** | [**[String]**](String.md)| Free-text filter by Agent version at detection time (supports multiple values). Example: \"1.1.1.1,2.2.\". | [optional] 
 **detectionEnginesNin** | [**[String]**](String.md)| Excluded engines. Example: \"reputation\". | [optional] 
 **osNamesNin** | [**[String]**](String.md)|  | [optional] 
 **k8sControllerNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes controller name (supports multiple values) | [optional] 
 **k8sClusterNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes cluster name (supports multiple values) | [optional] 
 **noteExists** | **Boolean**| The threat contains at least one note | [optional] 
 **containerLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint container labels (supports multiple values) | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **cloudInstanceIdContains** | [**[String]**](String.md)| Free-text filter by cloud instance id(supports multiple values) | [optional] 
 **agentVersions** | [**[String]**](String.md)| Include Agent versions. Example: \"2.5.1.1320\". | [optional] 
 **createdAtGte** | **Date**| Created at greater or equal than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **detectionAgentDomainContains** | [**[String]**](String.md)| Free-text filter by Agent domain at detection time (supports multiple values). Example: \"sentinel,sentinelone.com\". | [optional] 
 **enginesNin** | [**[String]**](String.md)| Excluded engines. Example: \"reputation\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **cloudProviderNin** | [**[String]**](String.md)| Exclude Agents from these cloud provider | [optional] 
 **filePathContains** | [**[String]**](String.md)| Free-text filter by file path (supports multiple values). Example: \"\\MyUser\\Downloads\". | [optional] 
 **k8sNodeLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes node labels (supports multiple values) | [optional] 
 **osArchs** | [**[String]**](String.md)| Included OS Architectures. Example: \"32 bit\". | [optional] 
 **createdAtGt** | **Date**| Created at greater than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **k8sNamespaceNameContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes namespace name (supports multiple values) | [optional] 
 **rebootRequired** | **Boolean**| A reboot is required on any endpoint for at least one action on the threat | [optional] 
 **mitigationStatuses** | [**[String]**](String.md)| Filter threats by a specific status. Example: \"not_mitigated\". | [optional] 
 **createdAtLt** | **Date**| Created at lesser than. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **k8sPodLabelsContains** | [**[String]**](String.md)| Free-text filter by the endpoint Kubernetes pod labels (supports multiple values) | [optional] 
 **gcpServiceAccountContains** | [**[String]**](String.md)| Free-text filter by gcp service account (supports multiple values) | [optional] 
 **pendingActions** | **Boolean**| At least one action is pending for the Agent for the threat | [optional] 
 **cloudLocationContains** | [**[String]**](String.md)| Free-text filter by cloud location (supports multiple values) | [optional] 
 **mitigationStatusesNin** | [**[String]**](String.md)| Filter threats not by a specific status. Example: \"not_mitigated\". | [optional] 
 **agentMachineTypesNin** | [**[String]**](String.md)| Excluded Agent machine types. Example: \"unknown\". | [optional] 
 **originatedProcessContains** | [**[String]**](String.md)| Free-text filter by the originated process name of the threat (supports multiple values) | [optional] 
 **failedActions** | **Boolean**| At least one action failed on the threat | [optional] 
 **osNames** | [**[String]**](String.md)|  | [optional] 
 **contentHashContains** | [**[String]**](String.md)| Free-text filter by file content hash (supports multiple values). Example: \"5f09bcff3\". | [optional] 
 **incidentStatuses** | [**[String]**](String.md)| Filter threats by a specific incident status. Example: \"unresolved,in_progress\". | [optional] 
 **cloudInstanceSizeContains** | [**[String]**](String.md)| Free-text filter by cloud instance size(supports multiple values) | [optional] 
 **mitigatedPreemptively** | **Boolean**| If the threat was detected pre-execution or post-execution | [optional] 
 **displayName** | **String**| Display name | [optional] 
 **externalTicketIdContains** | [**[String]**](String.md)| Free-text filter by the threat external ticket ID (supports multiple values) | [optional] 
 **confidenceLevelsNin** | [**[String]**](String.md)| Exclude threats with specific confidence level. Example: \"malicious\". | [optional] 
 **azureResourceGroupContains** | [**[String]**](String.md)| Free-text filter by azure resource group(supports multiple values) | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **commandLineArgumentsContains** | [**[String]**](String.md)| Free-text filter by threat command line arguments (supports multiple values). Example: \"/usr/sbin/,wget\". | [optional] 
 **uuidContains** | [**[String]**](String.md)| Free-text filter by Agent UUID (supports multiple values). Example: \"e92-01928,b055\". | [optional] 
 **externalTicketExists** | **Boolean**| The threat contains ticket number | [optional] 

### Return type

[**ThreatsSchemasThreatSchemaMany200**](ThreatsSchemasThreatSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiThreatsIncidentPost"></a>
# **webApiThreatsIncidentPost**
> ThreatsSchemasThreatsIncidentResultSchema200 webApiThreatsIncidentPost(opts)

Updated Threat Incident

Update the incident details of a threat.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasThreatsIncidentSchema() // ThreatsSchemasThreatsIncidentSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsIncidentPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ThreatsSchemasThreatsIncidentSchema**](ThreatsSchemasThreatsIncidentSchema.md)|  | [optional] 

### Return type

[**ThreatsSchemasThreatsIncidentResultSchema200**](ThreatsSchemasThreatsIncidentResultSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsMitigateactionPost"></a>
# **webApiThreatsMitigateactionPost**
> ThreatsSchemasThreatMitigationActionSchema200 webApiThreatsMitigateactionPost(action, opts)

Mitigate Threats

Apply a mitigation action to a group of threats that match the filter. Valid values for mitigation: \"kill\", \"quarantine\", \"remediate\", \"rollback-remediation\", \"un-quarantine\",\"network-quarantine\".<BR>Your user role must have permissions to mitigate threats - Admin, IR Team, SOC. Only threats which you have permission to mitigate are countedas \"affected\" in response field. <BR>Rollback is applied only on Windows. Remediate is applied only on macOS and Windows.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var action = "action_example"; // String | Mitigation action. Example: \"kill\".

var opts = { 
  'body': new S1MgmtApi.ThreatsSchemasThreatsMitigateRequestSchema() // ThreatsSchemasThreatsMitigateRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsMitigateactionPost(action, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | **String**| Mitigation action. Example: \"kill\". | 
 **body** | [**ThreatsSchemasThreatsMitigateRequestSchema**](ThreatsSchemasThreatsMitigateRequestSchema.md)|  | [optional] 

### Return type

[**ThreatsSchemasThreatMitigationActionSchema200**](ThreatsSchemasThreatMitigationActionSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiThreatsMitigationReportreportIdGet"></a>
# **webApiThreatsMitigationReportreportIdGet**
> webApiThreatsMitigationReportreportIdGet(reportId)

Export Mitigation Report

Export the mitigation report as a CSV file.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var reportId = "reportId_example"; // String | Mitigation report ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiThreatsMitigationReportreportIdGet(reportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| Mitigation report ID. Example: \"225494730938493804\". | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiThreatsthreatIdDownloadFromCloudGet"></a>
# **webApiThreatsthreatIdDownloadFromCloudGet**
> ThreatFileDownloadURLSchema200 webApiThreatsthreatIdDownloadFromCloudGet(threatId)

Download from cloud

Download threat file from cloud.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var threatId = "threatId_example"; // String | Threat ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsthreatIdDownloadFromCloudGet(threatId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threatId** | **String**| Threat ID. Example: \"225494730938493804\". | 

### Return type

[**ThreatFileDownloadURLSchema200**](ThreatFileDownloadURLSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiThreatsthreatIdExploreEventsGet"></a>
# **webApiThreatsthreatIdExploreEventsGet**
> ThreatAnalysisSchemasThreatEventEntitySchemaMany200 webApiThreatsthreatIdExploreEventsGet(threatId, opts)

Get Events

Get all threat events.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var threatId = "threatId_example"; // String | Threat ID. Example: \"225494730938493804\".

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'eventId': "eventId_example", // String | Filter by a specific process key and its children
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'eventTypes': ["eventTypes_example"], // [String] | Filter events by type. Example: \"events\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'eventSubTypes': ["eventSubTypes_example"], // [String] | Filter events by sub-type. Example: \"PROCESSCREATION\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'processNameLike': "processNameLike_example", // String | Filter by process name (substring)
  'limit': 10 // Number | Limit number of returned items (1-1000). Example: \"10\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsthreatIdExploreEventsGet(threatId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threatId** | **String**| Threat ID. Example: \"225494730938493804\". | 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **eventId** | **String**| Filter by a specific process key and its children | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **eventTypes** | [**[String]**](String.md)| Filter events by type. Example: \"events\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **eventSubTypes** | [**[String]**](String.md)| Filter events by sub-type. Example: \"PROCESSCREATION\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **processNameLike** | **String**| Filter by process name (substring) | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]

### Return type

[**ThreatAnalysisSchemasThreatEventEntitySchemaMany200**](ThreatAnalysisSchemasThreatEventEntitySchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiThreatsthreatIdTimelineGet"></a>
# **webApiThreatsthreatIdTimelineGet**
> ThreatAnalysisSchemasTimelineViewSchemaMany200 webApiThreatsthreatIdTimelineGet(threatId, opts)

Get Threat Timeline

Get a threat's timeline.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var threatId = "threatId_example"; // String | Threat ID. Example: \"225494730938493804\".

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'activityTypes': ["activityTypes_example"], // [String] | Return only these activity codes (comma-separated list). Example: \"52,53,71,72\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'query': "query_example", // String | Full text search for fields: hash, primary_description, secondary_description
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10 // Number | Limit number of returned items (1-1000). Example: \"10\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsthreatIdTimelineGet(threatId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threatId** | **String**| Threat ID. Example: \"225494730938493804\". | 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **activityTypes** | [**[String]**](String.md)| Return only these activity codes (comma-separated list). Example: \"52,53,71,72\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **query** | **String**| Full text search for fields: hash, primary_description, secondary_description | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]

### Return type

[**ThreatAnalysisSchemasTimelineViewSchemaMany200**](ThreatAnalysisSchemasTimelineViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiThreatsthreatIdWhiteningOptionsGet"></a>
# **webApiThreatsthreatIdWhiteningOptionsGet**
> ThreatsSchemasWhiteningOptionsSchema200 webApiThreatsthreatIdWhiteningOptionsGet(threatId)

Exclusion Options

Get the Exclusion types that can be created from the detection data. <BR> For example, if a threat is a file with a detected SHA1 hash and pathname, the values of the whiteningOptions in the response are \"path\" and \"file_hash\". This command requires the ID of the threat, which you can get from \"threats\" (see Get Threats). To create an Exclusion, see Exclusions.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ThreatsApi();

var threatId = "threatId_example"; // String | Threat ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiThreatsthreatIdWhiteningOptionsGet(threatId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threatId** | **String**| Threat ID. Example: \"225494730938493804\". | 

### Return type

[**ThreatsSchemasWhiteningOptionsSchema200**](ThreatsSchemasWhiteningOptionsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

