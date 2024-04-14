# S1MgmtApi.DeepVisibilityApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiDvCancelQueryPost**](DeepVisibilityApi.md#webApiDvCancelQueryPost) | **POST** /web/api/v2.1/dv/cancel-query | Cancel Running Query
[**webApiDvEventsGet**](DeepVisibilityApi.md#webApiDvEventsGet) | **GET** /web/api/v2.1/dv/events | Get Events
[**webApiDvEventsPqPingGet**](DeepVisibilityApi.md#webApiDvEventsPqPingGet) | **GET** /web/api/v2.1/dv/events/pq-ping | Ping a Power Query if results haven't been retrieved
[**webApiDvEventsPqPost**](DeepVisibilityApi.md#webApiDvEventsPqPost) | **POST** /web/api/v2.1/dv/events/pq | Create a Power Query and Get QueryId
[**webApiDvEventseventTypeGet**](DeepVisibilityApi.md#webApiDvEventseventTypeGet) | **GET** /web/api/v2.1/dv/events/{event_type} | Get Events By Type
[**webApiDvFetchFileGet**](DeepVisibilityApi.md#webApiDvFetchFileGet) | **GET** /web/api/v2.1/dv/fetch-file | Download source process file
[**webApiDvInitQueryPost**](DeepVisibilityApi.md#webApiDvInitQueryPost) | **POST** /web/api/v2.1/dv/init-query | Create Query and Get QueryId
[**webApiDvProcessStateGet**](DeepVisibilityApi.md#webApiDvProcessStateGet) | **GET** /web/api/v2.1/dv/process-state | Get Process State
[**webApiDvQueryStatusGet**](DeepVisibilityApi.md#webApiDvQueryStatusGet) | **GET** /web/api/v2.1/dv/query-status | Get Query Status


<a name="webApiDvCancelQueryPost"></a>
# **webApiDvCancelQueryPost**
> DeepVisibilityDeepVisibilityV2SchemasDeepVisibilitySuccessSchema200 webApiDvCancelQueryPost(opts)

Cancel Running Query

Stop a Deep Visibility Query by queryId. The body is {\"queryID\":\"string_ID\"}. Get the ID of the Deep Visibility query or Power Query from \"init-query\". See \"Create Query and get QueryId\".<br> Deep Visibility requires Complete SKU.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeepVisibilityApi();

var opts = { 
  'body': new S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdRequestSchema() // DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDvCancelQueryPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdRequestSchema**](DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdRequestSchema.md)|  | [optional] 

### Return type

[**DeepVisibilityDeepVisibilityV2SchemasDeepVisibilitySuccessSchema200**](DeepVisibilityDeepVisibilityV2SchemasDeepVisibilitySuccessSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiDvEventsGet"></a>
# **webApiDvEventsGet**
> DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityEventEntitySchemaMany200 webApiDvEventsGet(queryId, opts)

Get Events

Get all Deep Visibility events from a queryId. You can use this command to send a sub-query, a new query to run on these events. Get the ID from \"init-query\". See \"Create Query and get QueryId\". <br>For complete documentation, see Query Syntax in the Knowledge Base (support.sentinelone.com) or the Console Help.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeepVisibilityApi();

var queryId = "queryId_example"; // String | QueryId obtained when creating a query under Create Query. Example: \"q1xx2xx3\".

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Should be used instead of skip. cursor currently supports sort by with createdAt, pid, processStartTime
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'subQuery': "subQuery_example", // String | Create a sub query to run on the data that was already pulled
  'sortOrder': "null", // String | Event sorting order. Example: \"asc\".
  'sortBy': "sortBy_example", // String | Events sorted by field. Example: \"createdAt\".
  'limit': 10 // Number | Limit number of returned items (1-1000). Example: \"10\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDvEventsGet(queryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **String**| QueryId obtained when creating a query under Create Query. Example: \"q1xx2xx3\". | 
 **cursor** | **String**| Cursor position returned by the last request. Should be used instead of skip. cursor currently supports sort by with createdAt, pid, processStartTime | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **subQuery** | **String**| Create a sub query to run on the data that was already pulled | [optional] 
 **sortOrder** | **String**| Event sorting order. Example: \"asc\". | [optional] [default to null]
 **sortBy** | **String**| Events sorted by field. Example: \"createdAt\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]

### Return type

[**DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityEventEntitySchemaMany200**](DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityEventEntitySchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiDvEventsPqPingGet"></a>
# **webApiDvEventsPqPingGet**
> DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityPowerQueriesResponseSchema200 webApiDvEventsPqPingGet(opts)

Ping a Power Query if results haven't been retrieved

Ping a Deep Visibility Power Query using the queryId if results have not returned from an initial Power Query or a previous ping

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeepVisibilityApi();

var opts = { 
  'queryId': "queryId_example" // String | QueryId query param
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDvEventsPqPingGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **String**| QueryId query param | [optional] 

### Return type

[**DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityPowerQueriesResponseSchema200**](DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityPowerQueriesResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiDvEventsPqPost"></a>
# **webApiDvEventsPqPost**
> DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityPowerQueriesResponseSchema200 webApiDvEventsPqPost(opts)

Create a Power Query and Get QueryId

Start a Deep Visibility Power Query, get back status and potential results (ping afterwards using the queryId if query has not finished)

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeepVisibilityApi();

var opts = { 
  'body': new S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityPQRequestSchema() // DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityPQRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDvEventsPqPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityPQRequestSchema**](DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityPQRequestSchema.md)|  | [optional] 

### Return type

[**DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityPowerQueriesResponseSchema200**](DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityPowerQueriesResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiDvEventseventTypeGet"></a>
# **webApiDvEventseventTypeGet**
> DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityEventEntitySchemaMany200 webApiDvEventseventTypeGet(eventType, queryId, opts)

Get Events By Type

Get Deep Visibility results from the query that matches the given event type. Valid values for Event Type:<br> Process Exit<br> Process Modification<br> Process Creation<br> Duplicate Process Handle<br> Duplicate Thread Handle<br> Open Remote Process Handle<br> Remote Thread Creation<br> Remote Process Termination<br> Command Script<br> IP Connect<br> IP Listen<br> File Modification<br> File Creation<br> File Scan<br> File Deletion<br> File Rename<br> Pre Execution Detection<br> Login<br> Logout<br> GET<br> OPTIONS<br> POST<br> PUT<br> DELETE<br> CONNECT<br> HEAD<br> DNS Resolved<br> DNS Unresolved<br> Task Register<br> Task Update<br> Task Start<br> Task Trigger<br> Task Delete<br> Registry Key Create<br> Registry Key Rename<br> Registry Key Delete<br> Registry Key Export<br> Registry Key Security Changed<br> Registry Key Import<br> Registry Value Modified<br> Registry Value Create<br> Registry Value Delete<br> Behavioral Indicators<br> Module Load

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeepVisibilityApi();

var eventType = "eventType_example"; // String | Event type for Autocomplete

var queryId = "queryId_example"; // String | QueryId obtained when creating a query under Create Query. Example: \"q1xx2xx3\".

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Should be used instead of skip. cursor currently supports sort by with createdAt, pid, processStartTime
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'subQuery': "subQuery_example", // String | Create a sub query to run on the data that was already pulled
  'sortOrder': "null", // String | Event sorting order. Example: \"asc\".
  'sortBy': "sortBy_example", // String | Events sorted by field. Example: \"createdAt\".
  'limit': 10 // Number | Limit number of returned items (1-1000). Example: \"10\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDvEventseventTypeGet(eventType, queryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventType** | **String**| Event type for Autocomplete | 
 **queryId** | **String**| QueryId obtained when creating a query under Create Query. Example: \"q1xx2xx3\". | 
 **cursor** | **String**| Cursor position returned by the last request. Should be used instead of skip. cursor currently supports sort by with createdAt, pid, processStartTime | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **subQuery** | **String**| Create a sub query to run on the data that was already pulled | [optional] 
 **sortOrder** | **String**| Event sorting order. Example: \"asc\". | [optional] [default to null]
 **sortBy** | **String**| Events sorted by field. Example: \"createdAt\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]

### Return type

[**DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityEventEntitySchemaMany200**](DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityEventEntitySchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiDvFetchFileGet"></a>
# **webApiDvFetchFileGet**
> DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityFileDownloadLinkSchema200 webApiDvFetchFileGet(downloadToken)

Download source process file

Download the source process file associated with a Deep Visibility event.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeepVisibilityApi();

var downloadToken = "downloadToken_example"; // String | Download token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDvFetchFileGet(downloadToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **downloadToken** | **String**| Download token | 

### Return type

[**DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityFileDownloadLinkSchema200**](DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityFileDownloadLinkSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiDvInitQueryPost"></a>
# **webApiDvInitQueryPost**
> DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200 webApiDvInitQueryPost(opts)

Create Query and Get QueryId

Start a Deep Visibility Query and get the queryId. You can use the queryId for other commands, such as Get Events and Get Query Status. For complete query syntax, see Query Syntax in the Knowledge Base (support.sentinelone.com) or the Console Help. SentinelOne Deep Visibility extends the ActiveEDR capabilities, with full visibility into endpoint data and threat hunting.  Its kernel-based monitoring searches across endpoints for all indicators of compromise (IOC). <br>Rate limit: 1 call per minute for each different user token. <br>Note: From Management version Rio (February 2022) the default of \"isVerbose\" is \"false\" instead of \"true\".<br>Deep Visibility requires Complete SKU.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeepVisibilityApi();

var opts = { 
  'body': new S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema() // DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDvInitQueryPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema**](DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema.md)|  | [optional] 

### Return type

[**DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200**](DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryIdSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiDvProcessStateGet"></a>
# **webApiDvProcessStateGet**
> webApiDvProcessStateGet(queryId, opts)

Get Process State

Get details of all Deep Visibility processes from a queryId.To get the ID from \"init-query\". See \"Create Query and get QueryId\".

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeepVisibilityApi();

var queryId = "queryId_example"; // String | QueryId obtained when creating a query under Create Query. Example: \"q1xx2xx3\".

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'sortOrder': "null", // String | Event sorting order. Example: \"asc\".
  'sortBy': "sortBy_example", // String | Events sorted by field. Example: \"SrcProcStartTime\".
  'limit': 10 // Number | Limit number of returned items (1-1000). Example: \"10\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiDvProcessStateGet(queryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **String**| QueryId obtained when creating a query under Create Query. Example: \"q1xx2xx3\". | 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **sortOrder** | **String**| Event sorting order. Example: \"asc\". | [optional] [default to null]
 **sortBy** | **String**| Events sorted by field. Example: \"SrcProcStartTime\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiDvQueryStatusGet"></a>
# **webApiDvQueryStatusGet**
> DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryStatusResponseSchema200 webApiDvQueryStatusGet(queryId)

Get Query Status

Get that status of a Deep Visibility Query. When the status is FINISHED, you can get the results with the queryId in \"Get Events\".<br>Deep Visibility requires Complete SKU.<br>Rate limit: 1 call per second for each different user token. <br>responseState can return these values: EMPTY_RESULTS, EVENTS_RUNNING, FAILED, FAILED_CLIENT, FINISHED, PLANNING, PROCESS_RUNNING, QUERY_CANCEL, QUERY_EXPIRED, QUERY_NOT_FOUND, QUERY_RUNNING, RUNNING, TIMED_OUT.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.DeepVisibilityApi();

var queryId = "queryId_example"; // String | QueryId obtained when creating a query under Create Query. Example: \"q1xx2xx3\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiDvQueryStatusGet(queryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **String**| QueryId obtained when creating a query under Create Query. Example: \"q1xx2xx3\". | 

### Return type

[**DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryStatusResponseSchema200**](DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityQueryStatusResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

