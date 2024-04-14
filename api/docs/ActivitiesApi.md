# S1MgmtApi.ActivitiesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiActivitiesGet**](ActivitiesApi.md#webApiActivitiesGet) | **GET** /web/api/v2.1/activities | Get Activities
[**webApiActivitiesTypesGet**](ActivitiesApi.md#webApiActivitiesTypesGet) | **GET** /web/api/v2.1/activities/types | Get Activity Types
[**webApiExportActivitiesGet**](ActivitiesApi.md#webApiExportActivitiesGet) | **GET** /web/api/v2.1/export/activities | Export Activities
[**webApiLastActivityAsSyslogGet**](ActivitiesApi.md#webApiLastActivityAsSyslogGet) | **GET** /web/api/v2.1/last-activity-as-syslog | Last activity as Syslog message


<a name="webApiActivitiesGet"></a>
# **webApiActivitiesGet**
> ActivitiesActivityViewSchemaMany200 webApiActivitiesGet(opts)

Get Activities

Get the activities, and their data, that match the filters.  We recommend that you set some values for the filters. The full list will be too large to be useful.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ActivitiesApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Get activities created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'agentIds': ["agentIds_example"], // [String] | Return activities related to specified agents. Example: \"225494730938493804,225494730938493915\".
  'activityUuids': ["activityUuids_example"], // [String] | Return activities by specific activity UUIDs. Example: \"a2c8037c-e6df-436d-b92b-bc09a418717e,f15b308b-fab9-4c0b-b6f5-17d236a7bf55\".
  'alertIds': ["alertIds_example"], // [String] | Return activities related to specified alerts. Example: \"225494730938493804,225494730938493915\".
  'ids': ["ids_example"], // [String] | Filter activities by specific activity IDs. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Get activities created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Get activities created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatIds': ["threatIds_example"], // [String] | Return activities related to specified threats. Example: \"225494730938493804,225494730938493915\".
  'activityTypes': ["activityTypes_example"], // [String] | Return only these activity codes (comma-separated list). Select a code from the drop-down, or see the id field from the Get activity types command. . Example: \"52,53,71,72\".
  'ruleIds': ["ruleIds_example"], // [String] | Return activities related to specified rules. Example: \"225494730938493804,225494730938493915\".
  'userEmails': ["userEmails_example"], // [String] | Email of the user who invoked the activity (If applicable)
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'createdAtBetween': "createdAtBetween_example", // String | Get activities created in this range (inclusive) of a start timestamp and an end timestamp. Example: \"1514978764288-1514978999999\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Get activities created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'userIds': ["userIds_example"], // [String] | The user who invoked the activity (If applicable). Example: \"225494730938493804,225494730938493915\".
  'includeHidden': false // Boolean | Include internal activities hidden from display. Example: \"False\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiActivitiesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **createdAtGt** | **Date**| Get activities created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **agentIds** | [**[String]**](String.md)| Return activities related to specified agents. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **activityUuids** | [**[String]**](String.md)| Return activities by specific activity UUIDs. Example: \"a2c8037c-e6df-436d-b92b-bc09a418717e,f15b308b-fab9-4c0b-b6f5-17d236a7bf55\". | [optional] 
 **alertIds** | [**[String]**](String.md)| Return activities related to specified alerts. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **ids** | [**[String]**](String.md)| Filter activities by specific activity IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **createdAtLt** | **Date**| Get activities created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **createdAtLte** | **Date**| Get activities created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatIds** | [**[String]**](String.md)| Return activities related to specified threats. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **activityTypes** | [**[String]**](String.md)| Return only these activity codes (comma-separated list). Select a code from the drop-down, or see the id field from the Get activity types command. . Example: \"52,53,71,72\". | [optional] 
 **ruleIds** | [**[String]**](String.md)| Return activities related to specified rules. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **userEmails** | [**[String]**](String.md)| Email of the user who invoked the activity (If applicable) | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **createdAtBetween** | **String**| Get activities created in this range (inclusive) of a start timestamp and an end timestamp. Example: \"1514978764288-1514978999999\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **createdAtGte** | **Date**| Get activities created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **userIds** | [**[String]**](String.md)| The user who invoked the activity (If applicable). Example: \"225494730938493804,225494730938493915\". | [optional] 
 **includeHidden** | **Boolean**| Include internal activities hidden from display. Example: \"False\". | [optional] [default to false]

### Return type

[**ActivitiesActivityViewSchemaMany200**](ActivitiesActivityViewSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiActivitiesTypesGet"></a>
# **webApiActivitiesTypesGet**
> ActivitiesActivityTypesSchemaMany200 webApiActivitiesTypesGet()

Get Activity Types

Get a list of activity types. This is useful to see valid values to filter activities in other commands.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ActivitiesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiActivitiesTypesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ActivitiesActivityTypesSchemaMany200**](ActivitiesActivityTypesSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiExportActivitiesGet"></a>
# **webApiExportActivitiesGet**
> webApiExportActivitiesGet(opts)

Export Activities

Export the list of activities.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ActivitiesApi();

var opts = { 
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Get activities created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'agentIds': ["agentIds_example"], // [String] | Return activities related to specified agents. Example: \"225494730938493804,225494730938493915\".
  'rowsLimit': 100, // Number | Limit number of returned items (1-10000). Example: \"100\".
  'activityUuids': ["activityUuids_example"], // [String] | Return activities by specific activity UUIDs. Example: \"a2c8037c-e6df-436d-b92b-bc09a418717e,f15b308b-fab9-4c0b-b6f5-17d236a7bf55\".
  'alertIds': ["alertIds_example"], // [String] | Return activities related to specified alerts. Example: \"225494730938493804,225494730938493915\".
  'ids': ["ids_example"], // [String] | Filter activities by specific activity IDs. Example: \"225494730938493804,225494730938493915\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Get activities created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Get activities created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatIds': ["threatIds_example"], // [String] | Return activities related to specified threats. Example: \"225494730938493804,225494730938493915\".
  'activityTypes': ["activityTypes_example"], // [String] | Return only these activity codes (comma-separated list). Select a code from the drop-down, or see the id field from the Get activity types command. . Example: \"52,53,71,72\".
  'ruleIds': ["ruleIds_example"], // [String] | Return activities related to specified rules. Example: \"225494730938493804,225494730938493915\".
  'userEmails': ["userEmails_example"], // [String] | Email of the user who invoked the activity (If applicable)
  'createdAtBetween': "createdAtBetween_example", // String | Get activities created in this range (inclusive) of a start timestamp and an end timestamp. Example: \"1514978764288-1514978999999\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Get activities created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'userIds': ["userIds_example"], // [String] | The user who invoked the activity (If applicable). Example: \"225494730938493804,225494730938493915\".
  'includeHidden': false // Boolean | Include internal activities hidden from display. Example: \"False\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExportActivitiesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAtGt** | **Date**| Get activities created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **agentIds** | [**[String]**](String.md)| Return activities related to specified agents. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **rowsLimit** | **Number**| Limit number of returned items (1-10000). Example: \"100\". | [optional] [default to 100]
 **activityUuids** | [**[String]**](String.md)| Return activities by specific activity UUIDs. Example: \"a2c8037c-e6df-436d-b92b-bc09a418717e,f15b308b-fab9-4c0b-b6f5-17d236a7bf55\". | [optional] 
 **alertIds** | [**[String]**](String.md)| Return activities related to specified alerts. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **ids** | [**[String]**](String.md)| Filter activities by specific activity IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **createdAtLt** | **Date**| Get activities created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **createdAtLte** | **Date**| Get activities created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatIds** | [**[String]**](String.md)| Return activities related to specified threats. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **activityTypes** | [**[String]**](String.md)| Return only these activity codes (comma-separated list). Select a code from the drop-down, or see the id field from the Get activity types command. . Example: \"52,53,71,72\". | [optional] 
 **ruleIds** | [**[String]**](String.md)| Return activities related to specified rules. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **userEmails** | [**[String]**](String.md)| Email of the user who invoked the activity (If applicable) | [optional] 
 **createdAtBetween** | **String**| Get activities created in this range (inclusive) of a start timestamp and an end timestamp. Example: \"1514978764288-1514978999999\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **createdAtGte** | **Date**| Get activities created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **userIds** | [**[String]**](String.md)| The user who invoked the activity (If applicable). Example: \"225494730938493804,225494730938493915\". | [optional] 
 **includeHidden** | **Boolean**| Include internal activities hidden from display. Example: \"False\". | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiLastActivityAsSyslogGet"></a>
# **webApiLastActivityAsSyslogGet**
> ActivitiesActivityAsMessageSchema200 webApiLastActivityAsSyslogGet(opts)

Last activity as Syslog message

To see examples of Syslog messages, you can get the Syslog message that corresponds to the last activity that matches the filter. This is not intended for production purposes.<br>If Syslog messages that you expected to see are not in the response, make sure you selected \"Syslog\" for the activity type in Console > Settings > Notifications.<br>To see your Syslog settings, run: \"settings/notifications\".<br>To changethe settings, run: \"settings/notifications\" with the changes in the body of the request.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.ActivitiesApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | Get activities created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'agentIds': ["agentIds_example"], // [String] | Return activities related to specified agents. Example: \"225494730938493804,225494730938493915\".
  'activityUuids': ["activityUuids_example"], // [String] | Return activities by specific activity UUIDs. Example: \"a2c8037c-e6df-436d-b92b-bc09a418717e,f15b308b-fab9-4c0b-b6f5-17d236a7bf55\".
  'alertIds': ["alertIds_example"], // [String] | Return activities related to specified alerts. Example: \"225494730938493804,225494730938493915\".
  'ids': ["ids_example"], // [String] | Filter activities by specific activity IDs. Example: \"225494730938493804,225494730938493915\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | Get activities created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | Get activities created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'threatIds': ["threatIds_example"], // [String] | Return activities related to specified threats. Example: \"225494730938493804,225494730938493915\".
  'activityTypes': ["activityTypes_example"], // [String] | Return only these activity codes (comma-separated list). Select a code from the drop-down, or see the id field from the Get activity types command. . Example: \"52,53,71,72\".
  'ruleIds': ["ruleIds_example"], // [String] | Return activities related to specified rules. Example: \"225494730938493804,225494730938493915\".
  'userEmails': ["userEmails_example"], // [String] | Email of the user who invoked the activity (If applicable)
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'createdAtBetween': "createdAtBetween_example", // String | Get activities created in this range (inclusive) of a start timestamp and an end timestamp. Example: \"1514978764288-1514978999999\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | Get activities created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'userIds': ["userIds_example"], // [String] | The user who invoked the activity (If applicable). Example: \"225494730938493804,225494730938493915\".
  'includeHidden': false // Boolean | Include internal activities hidden from display. Example: \"False\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiLastActivityAsSyslogGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **createdAtGt** | **Date**| Get activities created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **agentIds** | [**[String]**](String.md)| Return activities related to specified agents. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **activityUuids** | [**[String]**](String.md)| Return activities by specific activity UUIDs. Example: \"a2c8037c-e6df-436d-b92b-bc09a418717e,f15b308b-fab9-4c0b-b6f5-17d236a7bf55\". | [optional] 
 **alertIds** | [**[String]**](String.md)| Return activities related to specified alerts. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **ids** | [**[String]**](String.md)| Filter activities by specific activity IDs. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **createdAtLt** | **Date**| Get activities created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **createdAtLte** | **Date**| Get activities created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **threatIds** | [**[String]**](String.md)| Return activities related to specified threats. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **activityTypes** | [**[String]**](String.md)| Return only these activity codes (comma-separated list). Select a code from the drop-down, or see the id field from the Get activity types command. . Example: \"52,53,71,72\". | [optional] 
 **ruleIds** | [**[String]**](String.md)| Return activities related to specified rules. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **userEmails** | [**[String]**](String.md)| Email of the user who invoked the activity (If applicable) | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **createdAtBetween** | **String**| Get activities created in this range (inclusive) of a start timestamp and an end timestamp. Example: \"1514978764288-1514978999999\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **createdAtGte** | **Date**| Get activities created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **userIds** | [**[String]**](String.md)| The user who invoked the activity (If applicable). Example: \"225494730938493804,225494730938493915\". | [optional] 
 **includeHidden** | **Boolean**| Include internal activities hidden from display. Example: \"False\". | [optional] [default to false]

### Return type

[**ActivitiesActivityAsMessageSchema200**](ActivitiesActivityAsMessageSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

