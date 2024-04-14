# S1MgmtApi.SettingsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiSettingsActiveDirectoryGet**](SettingsApi.md#webApiSettingsActiveDirectoryGet) | **GET** /web/api/v2.1/settings/active-directory | Get AD Settings
[**webApiSettingsActiveDirectoryPut**](SettingsApi.md#webApiSettingsActiveDirectoryPut) | **PUT** /web/api/v2.1/settings/active-directory | Set AD Settings
[**webApiSettingsActiveDirectoryScopeMappingGet**](SettingsApi.md#webApiSettingsActiveDirectoryScopeMappingGet) | **GET** /web/api/v2.1/settings/active-directory/scope-mapping | Get AD FQDNs
[**webApiSettingsActiveDirectoryScopeMappingPut**](SettingsApi.md#webApiSettingsActiveDirectoryScopeMappingPut) | **PUT** /web/api/v2.1/settings/active-directory/scope-mapping | Set AD FQDNs
[**webApiSettingsActiveDirectoryTestPost**](SettingsApi.md#webApiSettingsActiveDirectoryTestPost) | **POST** /web/api/v2.1/settings/active-directory/test | Test AD Settings
[**webApiSettingsMicrosoftGet**](SettingsApi.md#webApiSettingsMicrosoftGet) | **GET** /web/api/v2.1/settings/microsoft | Get Microsoft Settings
[**webApiSettingsMicrosoftPut**](SettingsApi.md#webApiSettingsMicrosoftPut) | **PUT** /web/api/v2.1/settings/microsoft | Set Microsoft Settings
[**webApiSettingsMicrosoftTestPost**](SettingsApi.md#webApiSettingsMicrosoftTestPost) | **POST** /web/api/v2.1/settings/microsoft/test | Test Microsoft Settings
[**webApiSettingsNotificationsCancelPendingEmailsPost**](SettingsApi.md#webApiSettingsNotificationsCancelPendingEmailsPost) | **POST** /web/api/v2.1/settings/notifications/cancel-pending-emails | Clear Pending Emails
[**webApiSettingsNotificationsGet**](SettingsApi.md#webApiSettingsNotificationsGet) | **GET** /web/api/v2.1/settings/notifications | Get Notification Settings
[**webApiSettingsNotificationsPut**](SettingsApi.md#webApiSettingsNotificationsPut) | **PUT** /web/api/v2.1/settings/notifications | Set Notification Settings
[**webApiSettingsRecipientsGet**](SettingsApi.md#webApiSettingsRecipientsGet) | **GET** /web/api/v2.1/settings/recipients | Get Notification Recipients
[**webApiSettingsRecipientsPut**](SettingsApi.md#webApiSettingsRecipientsPut) | **PUT** /web/api/v2.1/settings/recipients | Set Notification Recipients
[**webApiSettingsRecipientsrecipientIdDelete**](SettingsApi.md#webApiSettingsRecipientsrecipientIdDelete) | **DELETE** /web/api/v2.1/settings/recipients/{recipient_id} | Delete Notification Recipient
[**webApiSettingsSmsGet**](SettingsApi.md#webApiSettingsSmsGet) | **GET** /web/api/v2.1/settings/sms | Get SMS Settings
[**webApiSettingsSmsPut**](SettingsApi.md#webApiSettingsSmsPut) | **PUT** /web/api/v2.1/settings/sms | Set SMS Settings
[**webApiSettingsSmtpGet**](SettingsApi.md#webApiSettingsSmtpGet) | **GET** /web/api/v2.1/settings/smtp | Get SMTP Settings
[**webApiSettingsSmtpPut**](SettingsApi.md#webApiSettingsSmtpPut) | **PUT** /web/api/v2.1/settings/smtp | Set SMTP Settings
[**webApiSettingsSmtpTestPost**](SettingsApi.md#webApiSettingsSmtpTestPost) | **POST** /web/api/v2.1/settings/smtp/test | Test SMTP Settings
[**webApiSettingsSsoGet**](SettingsApi.md#webApiSettingsSsoGet) | **GET** /web/api/v2.1/settings/sso | Get SSO Settings
[**webApiSettingsSsoPut**](SettingsApi.md#webApiSettingsSsoPut) | **PUT** /web/api/v2.1/settings/sso | Set SSO Settings
[**webApiSettingsSsoSpCertDownloadGet**](SettingsApi.md#webApiSettingsSsoSpCertDownloadGet) | **GET** /web/api/v2.1/settings/sso/sp-cert/download | Download SSO Service Provider Certificate
[**webApiSettingsSsoSpCertGet**](SettingsApi.md#webApiSettingsSsoSpCertGet) | **GET** /web/api/v2.1/settings/sso/sp-cert | Get SSO Service Provider Certificate
[**webApiSettingsSsoTestPost**](SettingsApi.md#webApiSettingsSsoTestPost) | **POST** /web/api/v2.1/settings/sso/test | Test SSO Settings
[**webApiSettingsSyslogGet**](SettingsApi.md#webApiSettingsSyslogGet) | **GET** /web/api/v2.1/settings/syslog | Get Syslog Settings
[**webApiSettingsSyslogPut**](SettingsApi.md#webApiSettingsSyslogPut) | **PUT** /web/api/v2.1/settings/syslog | Set Syslog Settings
[**webApiSettingsSyslogTestPost**](SettingsApi.md#webApiSettingsSyslogTestPost) | **POST** /web/api/v2.1/settings/syslog/test | Test Syslog Settings


<a name="webApiSettingsActiveDirectoryGet"></a>
# **webApiSettingsActiveDirectoryGet**
> SettingsAdSettingsSchema200 webApiSettingsActiveDirectoryGet(opts)

Get AD Settings

Get the Global Active Directory settings.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsActiveDirectoryGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**SettingsAdSettingsSchema200**](SettingsAdSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSettingsActiveDirectoryPut"></a>
# **webApiSettingsActiveDirectoryPut**
> SettingsAdSettingsSchema200 webApiSettingsActiveDirectoryPut(opts)

Set AD Settings

Update the Global Active Directory settings.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsAdSettingsPutSchema() // SettingsAdSettingsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsActiveDirectoryPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsAdSettingsPutSchema**](SettingsAdSettingsPutSchema.md)|  | [optional] 

### Return type

[**SettingsAdSettingsSchema200**](SettingsAdSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsActiveDirectoryScopeMappingGet"></a>
# **webApiSettingsActiveDirectoryScopeMappingGet**
> SettingsAdFqdnsSchema200 webApiSettingsActiveDirectoryScopeMappingGet(opts)

Get AD FQDNs

Get the map of Active Directory FQDNs to user roles of the given Sites (use \"sites\" to get IDs) or Accounts (\"accounts\").

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsActiveDirectoryScopeMappingGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**SettingsAdFqdnsSchema200**](SettingsAdFqdnsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSettingsActiveDirectoryScopeMappingPut"></a>
# **webApiSettingsActiveDirectoryScopeMappingPut**
> SettingsAdFqdnsSchema200 webApiSettingsActiveDirectoryScopeMappingPut(opts)

Set AD FQDNs

Update the Active Directory FQDNs of a Site or Account.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsAdFqdnsPutSchema() // SettingsAdFqdnsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsActiveDirectoryScopeMappingPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsAdFqdnsPutSchema**](SettingsAdFqdnsPutSchema.md)|  | [optional] 

### Return type

[**SettingsAdFqdnsSchema200**](SettingsAdFqdnsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsActiveDirectoryTestPost"></a>
# **webApiSettingsActiveDirectoryTestPost**
> SettingsTestAdSettingsSchema200 webApiSettingsActiveDirectoryTestPost(opts)

Test AD Settings

Test Active Directory settings.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsAdSettingsPutSchema() // SettingsAdSettingsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsActiveDirectoryTestPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsAdSettingsPutSchema**](SettingsAdSettingsPutSchema.md)|  | [optional] 

### Return type

[**SettingsTestAdSettingsSchema200**](SettingsTestAdSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsMicrosoftGet"></a>
# **webApiSettingsMicrosoftGet**
> SettingsMicrosoftSettingsSchema200 webApiSettingsMicrosoftGet(opts)

Get Microsoft Settings

[DEPRECATED] Gets the Microsoft settings of the Sites or Accounts.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsMicrosoftGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**SettingsMicrosoftSettingsSchema200**](SettingsMicrosoftSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSettingsMicrosoftPut"></a>
# **webApiSettingsMicrosoftPut**
> SettingsMicrosoftSettingsSchema200 webApiSettingsMicrosoftPut(opts)

Set Microsoft Settings

[DEPRECATED] Update Microsoft settings for the given Sites or Accounts.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsMicrosoftSettingsPutSchema() // SettingsMicrosoftSettingsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsMicrosoftPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsMicrosoftSettingsPutSchema**](SettingsMicrosoftSettingsPutSchema.md)|  | [optional] 

### Return type

[**SettingsMicrosoftSettingsSchema200**](SettingsMicrosoftSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsMicrosoftTestPost"></a>
# **webApiSettingsMicrosoftTestPost**
> SettingsTestMicrosoftSettingsSchema200 webApiSettingsMicrosoftTestPost(opts)

Test Microsoft Settings

[DEPRECATED] Test Microsoft settings.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsMicrosoftSettingsPutSchema() // SettingsMicrosoftSettingsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsMicrosoftTestPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsMicrosoftSettingsPutSchema**](SettingsMicrosoftSettingsPutSchema.md)|  | [optional] 

### Return type

[**SettingsTestMicrosoftSettingsSchema200**](SettingsTestMicrosoftSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsNotificationsCancelPendingEmailsPost"></a>
# **webApiSettingsNotificationsCancelPendingEmailsPost**
> NotificationsSchemasCancelPendingEmailNotificationsReturnSchema200 webApiSettingsNotificationsCancelPendingEmailsPost(opts)

Clear Pending Emails

Clear (discard without sending) pending email notifications for the given Sites (to get the IDs, run \"sites\") or Accounts (\"accounts\"). <br>When you set email recipients to get notifications for activities in the system, you can set too many, or in other ways cause issues that demand that the queue be cleared.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.NotificationsSchemasCancelPendingEmailNotificationsPostSchema() // NotificationsSchemasCancelPendingEmailNotificationsPostSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsNotificationsCancelPendingEmailsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NotificationsSchemasCancelPendingEmailNotificationsPostSchema**](NotificationsSchemasCancelPendingEmailNotificationsPostSchema.md)|  | [optional] 

### Return type

[**NotificationsSchemasCancelPendingEmailNotificationsReturnSchema200**](NotificationsSchemasCancelPendingEmailNotificationsReturnSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsNotificationsGet"></a>
# **webApiSettingsNotificationsGet**
> NotificationsSchemasNotificationsSettingsSchema200 webApiSettingsNotificationsGet(opts)

Get Notification Settings

Get the notification settings for the given Sites (to get the IDs, run \"settings\") or Accounts (\"accounts\"). <br>The response shows every possible notification and whether it is active and if so, for email or syslog or both. It also shows the ID string for each notification, which can be used in other commands. <br>Note: Each notification also shows \"sms\" which is deprecated.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsNotificationsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**NotificationsSchemasNotificationsSettingsSchema200**](NotificationsSchemasNotificationsSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSettingsNotificationsPut"></a>
# **webApiSettingsNotificationsPut**
> NotificationsSchemasNotificationsSettingsSchema200 webApiSettingsNotificationsPut(opts)

Set Notification Settings

Change the notifications for the given Sites (to get the IDs, run \"settings\") or Accounts (\"accounts\"). Best practice: Get the current settings (see Get Notification Settings) before you run this command.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.NotificationsSchemasNotificationSettingsPutSchema() // NotificationsSchemasNotificationSettingsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsNotificationsPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NotificationsSchemasNotificationSettingsPutSchema**](NotificationsSchemasNotificationSettingsPutSchema.md)|  | [optional] 

### Return type

[**NotificationsSchemasNotificationsSettingsSchema200**](NotificationsSchemasNotificationsSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsRecipientsGet"></a>
# **webApiSettingsRecipientsGet**
> SettingsNotificationRecipientsListSchema200 webApiSettingsRecipientsGet(opts)

Get Notification Recipients

Get the emails that are configured to receive notifications.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'name': "name_example", // String | Name
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'sms': "sms_example", // String | Sms
  'query': "query_example", // String | Full text search for fields: name, email, sms
  'email': "email_example" // String | Email
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsRecipientsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **sms** | **String**| Sms | [optional] 
 **query** | **String**| Full text search for fields: name, email, sms | [optional] 
 **email** | **String**| Email | [optional] 

### Return type

[**SettingsNotificationRecipientsListSchema200**](SettingsNotificationRecipientsListSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSettingsRecipientsPut"></a>
# **webApiSettingsRecipientsPut**
> SettingsNotificationRecipientSettingsSchema200 webApiSettingsRecipientsPut(opts)

Set Notification Recipients

Set the emails of recipients to get notifications.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsNotificationRecipientSettingsPutSchema() // SettingsNotificationRecipientSettingsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsRecipientsPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsNotificationRecipientSettingsPutSchema**](SettingsNotificationRecipientSettingsPutSchema.md)|  | [optional] 

### Return type

[**SettingsNotificationRecipientSettingsSchema200**](SettingsNotificationRecipientSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsRecipientsrecipientIdDelete"></a>
# **webApiSettingsRecipientsrecipientIdDelete**
> SuccessResponseSchema200 webApiSettingsRecipientsrecipientIdDelete(recipientId)

Delete Notification Recipient

Delete a notification recipient by ID. To get the IDs of recipients, run \"recipients\" (see Get Notification Recipients). 

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var recipientId = "recipientId_example"; // String | Recipient ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsRecipientsrecipientIdDelete(recipientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipientId** | **String**| Recipient ID. Example: \"225494730938493804\". | 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSettingsSmsGet"></a>
# **webApiSettingsSmsGet**
> SettingsSmsSettingsSchema200 webApiSettingsSmsGet(opts)

Get SMS Settings

[DEPRECATED] Gets the site's SMS settings.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsSmsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**SettingsSmsSettingsSchema200**](SettingsSmsSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSettingsSmsPut"></a>
# **webApiSettingsSmsPut**
> SettingsSmsSettingsSchema200 webApiSettingsSmsPut(opts)

Set SMS Settings

[DEPRECATED] Set SMS settings.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsSmsSettingsPutSchema() // SettingsSmsSettingsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsSmsPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsSmsSettingsPutSchema**](SettingsSmsSettingsPutSchema.md)|  | [optional] 

### Return type

[**SettingsSmsSettingsSchema200**](SettingsSmsSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsSmtpGet"></a>
# **webApiSettingsSmtpGet**
> SettingsSmtpSettingsSchema200 webApiSettingsSmtpGet(opts)

Get SMTP Settings

Get the SMTP server configuration of the given Sites (to get the IDs, run \"sites\") or Accounts (\"accounts\"). The SMTP integration is required to send notifications by email.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsSmtpGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**SettingsSmtpSettingsSchema200**](SettingsSmtpSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSettingsSmtpPut"></a>
# **webApiSettingsSmtpPut**
> SettingsSmtpSettingsSchema200 webApiSettingsSmtpPut(opts)

Set SMTP Settings

Change the SMTP server configuration for the given Sites or Accounts. Use this command to integrate a different SMTP server, which is required to send notifications by email.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsSmtpSettingsPutSchema() // SettingsSmtpSettingsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsSmtpPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsSmtpSettingsPutSchema**](SettingsSmtpSettingsPutSchema.md)|  | [optional] 

### Return type

[**SettingsSmtpSettingsSchema200**](SettingsSmtpSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsSmtpTestPost"></a>
# **webApiSettingsSmtpTestPost**
> SettingsTestSmtpSettingsSchema200 webApiSettingsSmtpTestPost(opts)

Test SMTP Settings

Test SMTP settings between the Management and the SMTP server. This integration is required if you use email notifications.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsSmtpSettingsTestSchema() // SettingsSmtpSettingsTestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsSmtpTestPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsSmtpSettingsTestSchema**](SettingsSmtpSettingsTestSchema.md)|  | [optional] 

### Return type

[**SettingsTestSmtpSettingsSchema200**](SettingsTestSmtpSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsSsoGet"></a>
# **webApiSettingsSsoGet**
> SettingsSsoSettingFields200 webApiSettingsSsoGet(opts)

Get SSO Settings

Get the Single Sign-On configuration for the given Sites (to get the IDs, run \"sites\") or Accounts (\"accounts\"). 

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsSsoGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**SettingsSsoSettingFields200**](SettingsSsoSettingFields200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSettingsSsoPut"></a>
# **webApiSettingsSsoPut**
> SettingsSsoSettingFields200 webApiSettingsSsoPut(opts)

Set SSO Settings

Change the Single Sign-On configuration for the given Sites (to get the IDs, run \"sites\") or Accounts (\"accounts\"). <br>The Management supports SAML 2.0 and will integrate with SAML 2.0 compliant SSO providers. <br>SentinelOne Technical Support can help you with issues related to the provider we tested: Okta. To use a different ID provider, see the provider documentation and support. <br>For requirements and best practices of Okta integration, see https://support.sentinelone.com/hc/en-us/articles/360004195714.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsSsoSettingsPutSchema() // SettingsSsoSettingsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsSsoPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsSsoSettingsPutSchema**](SettingsSsoSettingsPutSchema.md)|  | [optional] 

### Return type

[**SettingsSsoSettingFields200**](SettingsSsoSettingFields200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsSsoSpCertDownloadGet"></a>
# **webApiSettingsSsoSpCertDownloadGet**
> webApiSettingsSsoSpCertDownloadGet(opts)

Download SSO Service Provider Certificate

Download the Service Provider Certificate for the Single Sign-On configuration for the given scope.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiSettingsSsoSpCertDownloadGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSettingsSsoSpCertGet"></a>
# **webApiSettingsSsoSpCertGet**
> SettingsSsoSpCertificate200 webApiSettingsSsoSpCertGet(opts)

Get SSO Service Provider Certificate

Get the Service Provider Certificate for the Single Sign-On configuration for the given scope.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsSsoSpCertGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**SettingsSsoSpCertificate200**](SettingsSsoSpCertificate200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSettingsSsoTestPost"></a>
# **webApiSettingsSsoTestPost**
> SettingsSsoTestFields200 webApiSettingsSsoTestPost(opts)

Test SSO Settings

Test Single Sign-On settings. 

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsSsoSettingsPutSchema() // SettingsSsoSettingsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsSsoTestPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsSsoSettingsPutSchema**](SettingsSsoSettingsPutSchema.md)|  | [optional] 

### Return type

[**SettingsSsoTestFields200**](SettingsSsoTestFields200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsSyslogGet"></a>
# **webApiSettingsSyslogGet**
> SettingsSyslogSettingsSchema200 webApiSettingsSyslogGet(opts)

Get Syslog Settings

Get the configuration of the syslog server integrated with the given Sites (to get the IDs, run \"sites\") or Accounts (\"accounts\").

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'siteIds': ["siteIds_example"] // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsSyslogGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**SettingsSyslogSettingsSchema200**](SettingsSyslogSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiSettingsSyslogPut"></a>
# **webApiSettingsSyslogPut**
> SettingsSyslogSettingsSchema200 webApiSettingsSyslogPut(opts)

Set Syslog Settings

Change the configuration of the syslog server of the given Sites (to get the IDs, run \"sites\") or Accounts (\"accounts\"). Use this command to send notifications to a different syslog server. Best Practice: Get Syslog Settings before you run this command.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsSyslogSettingsPutSchema() // SettingsSyslogSettingsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsSyslogPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsSyslogSettingsPutSchema**](SettingsSyslogSettingsPutSchema.md)|  | [optional] 

### Return type

[**SettingsSyslogSettingsSchema200**](SettingsSyslogSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiSettingsSyslogTestPost"></a>
# **webApiSettingsSyslogTestPost**
> SettingsTestSyslogSettingsSchema200 webApiSettingsSyslogTestPost(opts)

Test Syslog Settings

Test Syslog settings. The Management tests the connection to the Syslog server. 

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.SettingsApi();

var opts = { 
  'body': new S1MgmtApi.SettingsSyslogSettingsPutSchema() // SettingsSyslogSettingsPutSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiSettingsSyslogTestPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SettingsSyslogSettingsPutSchema**](SettingsSyslogSettingsPutSchema.md)|  | [optional] 

### Return type

[**SettingsTestSyslogSettingsSchema200**](SettingsTestSyslogSettingsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

