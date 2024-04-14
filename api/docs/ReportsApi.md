# S1MgmtApi.ReportsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiReportTasksGet**](ReportsApi.md#webApiReportTasksGet) | **GET** /web/api/v2.1/report-tasks | Get Report Tasks
[**webApiReportTasksPost**](ReportsApi.md#webApiReportTasksPost) | **POST** /web/api/v2.1/report-tasks | Create Report Task
[**webApiReportTaskstaskIdPut**](ReportsApi.md#webApiReportTaskstaskIdPut) | **PUT** /web/api/v2.1/report-tasks/{task_id} | Update Report Task
[**webApiReportsDeleteReportsPost**](ReportsApi.md#webApiReportsDeleteReportsPost) | **POST** /web/api/v2.1/reports/delete-reports | Delete Reports
[**webApiReportsDeleteTasksPost**](ReportsApi.md#webApiReportsDeleteTasksPost) | **POST** /web/api/v2.1/reports/delete-tasks | Delete Report Tasks
[**webApiReportsGet**](ReportsApi.md#webApiReportsGet) | **GET** /web/api/v2.1/reports | Get Reports
[**webApiReportsInsightsTypesGet**](ReportsApi.md#webApiReportsInsightsTypesGet) | **GET** /web/api/v2.1/reports/insights/types | Get Insight Reports
[**webApiReportsreportIdreportFormatGet**](ReportsApi.md#webApiReportsreportIdreportFormatGet) | **GET** /web/api/v2.1/reports/{report_id}/{report_format} | Download Report
[**webApiSentinelonerssGet**](ReportsApi.md#webApiSentinelonerssGet) | **GET** /web/api/v2.1/sentinelonerss | S1 RSS Feed


<a name="webApiReportTasksGet"></a>
# **webApiReportTasksGet**
> ReportsReportTaskDataSchemaMany200 webApiReportTasksGet(opts)

Get Report Tasks

Get the tasks that were done to generate reports and to schedule future reports. Best Practice: Use a filter. Each task includes many lines of data and can quickly fill the page limit. Use this command to get the ID of a report task to use in other commands.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ReportsApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'query': "query_example", // String | Query
  'ids': ["ids_example"], // [String] | Id in. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'id': "id_example", // String | Id. Example: \"225494730938493804\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'creatorId': "creatorId_example", // String | Creator id. Example: \"225494730938493804\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at lte. Example: \"2018-02-27T04:49:26.257525Z\".
  'scheduleType': "scheduleType_example", // String | Report type. Example: \"manually\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'frequency': "frequency_example", // String | Frequency. Example: \"manually\".
  'scope': "scope_example", // String | Scope. Example: \"group\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at gte. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'name': "name_example", // String | Name
  'day': "day_example", // String | Day
  'creatorName': "creatorName_example" // String | Creator name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiReportTasksGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **query** | **String**| Query | [optional] 
 **ids** | [**[String]**](String.md)| Id in. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **id** | **String**| Id. Example: \"225494730938493804\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **creatorId** | **String**| Creator id. Example: \"225494730938493804\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **createdAtLte** | **Date**| Created at lte. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **scheduleType** | **String**| Report type. Example: \"manually\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **frequency** | **String**| Frequency. Example: \"manually\". | [optional] 
 **scope** | **String**| Scope. Example: \"group\". | [optional] 
 **createdAtGte** | **Date**| Created at gte. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **name** | **String**| Name | [optional] 
 **day** | **String**| Day | [optional] 
 **creatorName** | **String**| Creator name | [optional] 

### Return type

[**ReportsReportTaskDataSchemaMany200**](ReportsReportTaskDataSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiReportTasksPost"></a>
# **webApiReportTasksPost**
> SuccessResponseSchema200 webApiReportTasksPost(opts)

Create Report Task

Create a task to generate a report immediately, one time in the future, or on a schedule. Best Practice: Get Report Tasks first, to have a basis for a new task.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ReportsApi();

var opts = { 
  'body': new S1MgmtApi.ReportsReportTasksPostSchema() // ReportsReportTasksPostSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiReportTasksPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReportsReportTasksPostSchema**](ReportsReportTasksPostSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiReportTaskstaskIdPut"></a>
# **webApiReportTaskstaskIdPut**
> ReportsReportTaskDataSchema200 webApiReportTaskstaskIdPut(taskId, opts)

Update Report Task

Update the report task of the given ID. To get the task ID, and the data to change, run Get Report Tasks.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ReportsApi();

var taskId = "taskId_example"; // String | Task ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.ReportsReportTasksPutSchema() // ReportsReportTasksPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiReportTaskstaskIdPut(taskId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| Task ID. Example: \"225494730938493804\". | 
 **body** | [**ReportsReportTasksPutSchema**](ReportsReportTasksPutSchema.md)|  | [optional] 

### Return type

[**ReportsReportTaskDataSchema200**](ReportsReportTaskDataSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiReportsDeleteReportsPost"></a>
# **webApiReportsDeleteReportsPost**
> webApiReportsDeleteReportsPost(opts)

Delete Reports

Delete the reports that match the filter. To delete a specific report, use its ID (see Get Reports).

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ReportsApi();

var opts = { 
  'body': new S1MgmtApi.ReportsReportDeleteSchema() // ReportsReportDeleteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiReportsDeleteReportsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReportsReportDeleteSchema**](ReportsReportDeleteSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiReportsDeleteTasksPost"></a>
# **webApiReportsDeleteTasksPost**
> webApiReportsDeleteTasksPost(opts)

Delete Report Tasks

You can schedule a report to be generated on a routine. Use this command to remove a task to generate a report in the future. To get an ID to delete a specific task, see Get Report Tasks.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ReportsApi();

var opts = { 
  'body': new S1MgmtApi.ReportsReportTaskDeleteSchema() // ReportsReportTaskDeleteSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiReportsDeleteTasksPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReportsReportTaskDeleteSchema**](ReportsReportTaskDeleteSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiReportsGet"></a>
# **webApiReportsGet**
> ReportsReportDataSchemaMany200 webApiReportsGet(opts)

Get Reports

Get the reports that match the filter and the data of the reports. Use this command to get the ID of reports to use in other commands. Other data in the response: schedule, Insight Type, name and ID of the user who created the report, the date range, and more.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ReportsApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'query': "query_example", // String | Query
  'ids': ["ids_example"], // [String] | Id in. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'fromDate': new Date("2013-10-20T19:20:30+01:00"), // Date | From date. Example: \"2018-02-27T04:49:26.257525Z\".
  'toDate': new Date("2013-10-20T19:20:30+01:00"), // Date | To date. Example: \"2018-02-27T04:49:26.257525Z\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'id': "id_example", // String | Id. Example: \"225494730938493804\".
  'interval': "interval_example", // String | Interval
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at lte. Example: \"2018-02-27T04:49:26.257525Z\".
  'scheduleType': "scheduleType_example", // String | Report type. Example: \"manually\".
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'taskId': "taskId_example", // String | Task id. Example: \"225494730938493804\".
  'frequency': "frequency_example", // String | Frequency. Example: \"manually\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'scope': "scope_example", // String | Scope. Example: \"group\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Created at gte. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'name': "name_example" // String | Name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiReportsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **query** | **String**| Query | [optional] 
 **ids** | [**[String]**](String.md)| Id in. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **fromDate** | **Date**| From date. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **toDate** | **Date**| To date. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **id** | **String**| Id. Example: \"225494730938493804\". | [optional] 
 **interval** | **String**| Interval | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **createdAtLte** | **Date**| Created at lte. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **scheduleType** | **String**| Report type. Example: \"manually\". | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **taskId** | **String**| Task id. Example: \"225494730938493804\". | [optional] 
 **frequency** | **String**| Frequency. Example: \"manually\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **scope** | **String**| Scope. Example: \"group\". | [optional] 
 **createdAtGte** | **Date**| Created at gte. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **name** | **String**| Name | [optional] 

### Return type

[**ReportsReportDataSchemaMany200**](ReportsReportDataSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiReportsInsightsTypesGet"></a>
# **webApiReportsInsightsTypesGet**
> ReportsInsightData200 webApiReportsInsightsTypesGet(opts)

Get Insight Reports

Get the Insight Report types. These reports show high-level and detailed information on the state of your endpoint security. Reports include statistics, trends, and summaries with easy to read and actionable information about your network. Use this command to see the predefined reports. This command does not give data for specific reports.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ReportsApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'forceUpdate': false, // Boolean | Force update
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiReportsInsightsTypesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **forceUpdate** | **Boolean**| Force update | [optional] [default to false]
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**ReportsInsightData200**](ReportsInsightData200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiReportsreportIdreportFormatGet"></a>
# **webApiReportsreportIdreportFormatGet**
> webApiReportsreportIdreportFormatGet(reportId, reportFormat)

Download Report

When the Management generates a report, it is uploaded to the Management Console. Use this command to get the report as a PDF or HTML file. To get the ID of the report, see Get Reports.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ReportsApi();

var reportId = "reportId_example"; // String | Report ID. Example: \"225494730938493804\".

var reportFormat = "reportFormat_example"; // String | Report format. Example: \"pdf\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiReportsreportIdreportFormatGet(reportId, reportFormat, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| Report ID. Example: \"225494730938493804\". | 
 **reportFormat** | **String**| Report format. Example: \"pdf\". | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSentinelonerssGet"></a>
# **webApiSentinelonerssGet**
> RawDataSchema200 webApiSentinelonerssGet()

S1 RSS Feed

Get the SentinelOne RSS feed. In the SentinelOne Management Console, we show the feed contents in the Dashboard.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ReportsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSentinelonerssGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RawDataSchema200**](RawDataSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

