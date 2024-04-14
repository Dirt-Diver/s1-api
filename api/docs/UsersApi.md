# S1MgmtApi.UsersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiExportUsersGet**](UsersApi.md#webApiExportUsersGet) | **GET** /web/api/v2.1/export/users | Export Users
[**webApiUserGet**](UsersApi.md#webApiUserGet) | **GET** /web/api/v2.1/user | User by token
[**webApiUsers2faDisablePost**](UsersApi.md#webApiUsers2faDisablePost) | **POST** /web/api/v2.1/users/2fa/disable | Disable 2FA
[**webApiUsers2faEnablePost**](UsersApi.md#webApiUsers2faEnablePost) | **POST** /web/api/v2.1/users/2fa/enable | Enable 2FA
[**webApiUsersApiTokenDetailsPost**](UsersApi.md#webApiUsersApiTokenDetailsPost) | **POST** /web/api/v2.1/users/api-token-details | API Token Details
[**webApiUsersAuthAppPost**](UsersApi.md#webApiUsersAuthAppPost) | **POST** /web/api/v2.1/users/auth/app | Auth App
[**webApiUsersAuthElevatePost**](UsersApi.md#webApiUsersAuthElevatePost) | **POST** /web/api/v2.1/users/auth/elevate | Auth App
[**webApiUsersAuthEulaPost**](UsersApi.md#webApiUsersAuthEulaPost) | **POST** /web/api/v2.1/users/auth/eula | Sign EULA
[**webApiUsersChangePasswordPost**](UsersApi.md#webApiUsersChangePasswordPost) | **POST** /web/api/v2.1/users/change-password | Change Password
[**webApiUsersDelete2faPost**](UsersApi.md#webApiUsersDelete2faPost) | **POST** /web/api/v2.1/users/delete-2fa | Delete 2FA
[**webApiUsersDeleteUsersPost**](UsersApi.md#webApiUsersDeleteUsersPost) | **POST** /web/api/v2.1/users/delete-users | Bulk Delete Users
[**webApiUsersEnableAppPost**](UsersApi.md#webApiUsersEnableAppPost) | **POST** /web/api/v2.1/users/enable-app | Enable 2FA App
[**webApiUsersEnroll2faPost**](UsersApi.md#webApiUsersEnroll2faPost) | **POST** /web/api/v2.1/users/enroll-2fa | Enroll 2FA
[**webApiUsersGenerateApiTokenPost**](UsersApi.md#webApiUsersGenerateApiTokenPost) | **POST** /web/api/v2.1/users/generate-api-token | Generate API Token
[**webApiUsersGenerateIframeTokenPost**](UsersApi.md#webApiUsersGenerateIframeTokenPost) | **POST** /web/api/v2.1/users/generate-iframe-token | Generate iFrame Token
[**webApiUsersGet**](UsersApi.md#webApiUsersGet) | **GET** /web/api/v2.1/users | List users
[**webApiUsersLoginByApiTokenPost**](UsersApi.md#webApiUsersLoginByApiTokenPost) | **POST** /web/api/v2.1/users/login/by-api-token | Login by API Token
[**webApiUsersLoginByTokenGet**](UsersApi.md#webApiUsersLoginByTokenGet) | **GET** /web/api/v2.1/users/login/by-token | Login by Token
[**webApiUsersLoginContinuePost**](UsersApi.md#webApiUsersLoginContinuePost) | **POST** /web/api/v2.1/users/login-continue | Continue with login due to upcoming password expiration or SSO 2FA setup
[**webApiUsersLoginForceResetPasswordOnLoginPost**](UsersApi.md#webApiUsersLoginForceResetPasswordOnLoginPost) | **POST** /web/api/v2.1/users/login/force-reset-password-on-login | Reset password on next login
[**webApiUsersLoginPost**](UsersApi.md#webApiUsersLoginPost) | **POST** /web/api/v2.1/users/login | Login
[**webApiUsersLoginSendResetPasswordEmailPost**](UsersApi.md#webApiUsersLoginSendResetPasswordEmailPost) | **POST** /web/api/v2.1/users/login/send-reset-password-email | Prompt reset password
[**webApiUsersLoginSetPasswordPost**](UsersApi.md#webApiUsersLoginSetPasswordPost) | **POST** /web/api/v2.1/users/login/set-password | Set a New Password
[**webApiUsersLoginSsoSaml2Get**](UsersApi.md#webApiUsersLoginSsoSaml2Get) | **GET** /web/api/v2.1/users/login/sso-saml2 | Redirect to SSO
[**webApiUsersLoginSsoSaml2scopeIdPost**](UsersApi.md#webApiUsersLoginSsoSaml2scopeIdPost) | **POST** /web/api/v2.1/users/login/sso-saml2/{scope_id} | Auth by SSO
[**webApiUsersLogoutPost**](UsersApi.md#webApiUsersLogoutPost) | **POST** /web/api/v2.1/users/logout | Logout
[**webApiUsersOnboardingSendVerificationEmailPost**](UsersApi.md#webApiUsersOnboardingSendVerificationEmailPost) | **POST** /web/api/v2.1/users/onboarding/send-verification-email | Send Verification Email
[**webApiUsersOnboardingValidateTokenGet**](UsersApi.md#webApiUsersOnboardingValidateTokenGet) | **GET** /web/api/v2.1/users/onboarding/validate-token | Validate Verification Token
[**webApiUsersOnboardingVerifyPost**](UsersApi.md#webApiUsersOnboardingVerifyPost) | **POST** /web/api/v2.1/users/onboarding/verify | Email Verification
[**webApiUsersPost**](UsersApi.md#webApiUsersPost) | **POST** /web/api/v2.1/users | Create User
[**webApiUsersRequestAppPost**](UsersApi.md#webApiUsersRequestAppPost) | **POST** /web/api/v2.1/users/request-app | Request 2FA App
[**webApiUsersReset2faPost**](UsersApi.md#webApiUsersReset2faPost) | **POST** /web/api/v2.1/users/reset-2fa | Reset 2FA
[**webApiUsersRevokeApiTokenPost**](UsersApi.md#webApiUsersRevokeApiTokenPost) | **POST** /web/api/v2.1/users/revoke-api-token | Revoke API Token
[**webApiUsersRsAuthCheckGet**](UsersApi.md#webApiUsersRsAuthCheckGet) | **GET** /web/api/v2.1/users/rs-auth-check | Check Remote Shell Permissions
[**webApiUsersSsoSaml2ReAuthGet**](UsersApi.md#webApiUsersSsoSaml2ReAuthGet) | **GET** /web/api/v2.1/users/sso-saml2/re-auth | Redirect to SSO for re-authentication
[**webApiUsersTenantAdminAuthCheckGet**](UsersApi.md#webApiUsersTenantAdminAuthCheckGet) | **GET** /web/api/v2.1/users/tenant-admin-auth-check | Check Global User
[**webApiUsersViewerAuthCheckGet**](UsersApi.md#webApiUsersViewerAuthCheckGet) | **GET** /web/api/v2.1/users/viewer-auth-check | Check Viewer
[**webApiUsersuserIdApiTokenDetailsGet**](UsersApi.md#webApiUsersuserIdApiTokenDetailsGet) | **GET** /web/api/v2.1/users/{user_id}/api-token-details | API Token by User ID
[**webApiUsersuserIdDelete**](UsersApi.md#webApiUsersuserIdDelete) | **DELETE** /web/api/v2.1/users/{user_id} | Delete User
[**webApiUsersuserIdGet**](UsersApi.md#webApiUsersuserIdGet) | **GET** /web/api/v2.1/users/{user_id} | Get User
[**webApiUsersuserIdPut**](UsersApi.md#webApiUsersuserIdPut) | **PUT** /web/api/v2.1/users/{user_id} | Update User


<a name="webApiExportUsersGet"></a>
# **webApiExportUsersGet**
> webApiExportUsersGet(opts)

Export Users

Export User data to a CSV, for Users that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | User was created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'emailVerified': true, // Boolean | Return only verified/unverified users
  'canGenerateApiToken': true, // Boolean | Can generate api token
  'lastActivationBetween': "lastActivationBetween_example", // String | Date range for when the user was last active (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'ids': ["ids_example"], // [String] | List of user IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example", // String | Full text search for fields: full_name, email, description
  'apiTokenExpiresAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | API token expires before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | User was created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'lastActivationLte': new Date("2013-10-20T19:20:30+01:00"), // Date | User was last active before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'sources': ["sources_example"], // [String] | Source in. Example: \"mgmt\".
  'primaryTwoFaMethod': "primaryTwoFaMethod_example", // String | Primary two fa method
  'lastLogin': new Date("2013-10-20T19:20:30+01:00"), // Date | Last login. Example: \"2018-02-27T04:49:26.257525Z\".
  'lastActivationLt': new Date("2013-10-20T19:20:30+01:00"), // Date | User was last active before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'hasValidApiToken': true, // Boolean | Has valid api token
  'source': "source_example", // String | User Source. Example: \"mgmt\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | User was created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'dateJoined': new Date("2013-10-20T19:20:30+01:00"), // Date | Date joined. Example: \"2018-02-27T04:49:26.257525Z\".
  'fullNameContains': ["fullNameContains_example"], // [String] | Match full name partially (substring)
  'roleIds': ["roleIds_example"], // [String] | List of rbac roles to filter by. Example: \"225494730938493804,225494730938493915\".
  'email': "email_example", // String | Email. Example: \"admin@sentinelone.com\".
  'apiTokenExpiresAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | API token expires after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'twoFaStatuses': ["twoFaStatuses_example"], // [String] | Two fa status in
  'fullNameReadOnly': true, // Boolean | True if full name cannot be changed
  'twoFaStatus': "twoFaStatus_example", // String | Two fa status
  'apiTokenExpiresAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | API token expires after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'fullName': "fullName_example", // String | Full name
  'groupsReadOnly': true, // Boolean | [DEPRECATED] True if permissions cannot be changed
  'apiTokenExpiresAtBetween': "apiTokenExpiresAtBetween_example", // String | Date range for when the API token expires (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'createdAtBetween': "createdAtBetween_example", // String | Date range for when the user was created (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'firstLogin': new Date("2013-10-20T19:20:30+01:00"), // Date | First login. Example: \"2018-02-27T04:49:26.257525Z\".
  'emailReadOnly': true, // Boolean | True if email cannot be changed
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | User was created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'lastActivationGt': new Date("2013-10-20T19:20:30+01:00"), // Date | User was last active after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'apiTokenExpiresAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | API token expires before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'emailContains': ["emailContains_example"], // [String] | Match email partially (substring)
  'lastActivationGte': new Date("2013-10-20T19:20:30+01:00"), // Date | User was last active after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'twoFaEnabled': true // Boolean | Two fa enabled
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiExportUsersGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAtGt** | **Date**| User was created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **emailVerified** | **Boolean**| Return only verified/unverified users | [optional] 
 **canGenerateApiToken** | **Boolean**| Can generate api token | [optional] 
 **lastActivationBetween** | **String**| Date range for when the user was last active (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **ids** | [**[String]**](String.md)| List of user IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| Full text search for fields: full_name, email, description | [optional] 
 **apiTokenExpiresAtLte** | **Date**| API token expires before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **createdAtLt** | **Date**| User was created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **lastActivationLte** | **Date**| User was last active before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **sources** | [**[String]**](String.md)| Source in. Example: \"mgmt\". | [optional] 
 **primaryTwoFaMethod** | **String**| Primary two fa method | [optional] 
 **lastLogin** | **Date**| Last login. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **lastActivationLt** | **Date**| User was last active before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **hasValidApiToken** | **Boolean**| Has valid api token | [optional] 
 **source** | **String**| User Source. Example: \"mgmt\". | [optional] 
 **createdAtLte** | **Date**| User was created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **dateJoined** | **Date**| Date joined. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **fullNameContains** | [**[String]**](String.md)| Match full name partially (substring) | [optional] 
 **roleIds** | [**[String]**](String.md)| List of rbac roles to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **email** | **String**| Email. Example: \"admin@sentinelone.com\". | [optional] 
 **apiTokenExpiresAtGt** | **Date**| API token expires after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **twoFaStatuses** | [**[String]**](String.md)| Two fa status in | [optional] 
 **fullNameReadOnly** | **Boolean**| True if full name cannot be changed | [optional] 
 **twoFaStatus** | **String**| Two fa status | [optional] 
 **apiTokenExpiresAtGte** | **Date**| API token expires after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **fullName** | **String**| Full name | [optional] 
 **groupsReadOnly** | **Boolean**| [DEPRECATED] True if permissions cannot be changed | [optional] 
 **apiTokenExpiresAtBetween** | **String**| Date range for when the API token expires (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **createdAtBetween** | **String**| Date range for when the user was created (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **firstLogin** | **Date**| First login. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **emailReadOnly** | **Boolean**| True if email cannot be changed | [optional] 
 **createdAtGte** | **Date**| User was created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **lastActivationGt** | **Date**| User was last active after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **apiTokenExpiresAtLt** | **Date**| API token expires before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **emailContains** | [**[String]**](String.md)| Match email partially (substring) | [optional] 
 **lastActivationGte** | **Date**| User was last active after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **twoFaEnabled** | **Boolean**| Two fa enabled | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUserGet"></a>
# **webApiUserGet**
> UsersSchemasUserSchema200 webApiUserGet(opts)

User by token

Get a user by token.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

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
apiInstance.webApiUserGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**UsersSchemasUserSchema200**](UsersSchemasUserSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsers2faDisablePost"></a>
# **webApiUsers2faDisablePost**
> SuccessResponseSchema200 webApiUsers2faDisablePost(opts)

Disable 2FA

Disable Two-Factor Authentication for one user. This requires the ID of the user (run \"users\").

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasUserIdSchema() // UsersSchemasUserIdSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsers2faDisablePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasUserIdSchema**](UsersSchemasUserIdSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsers2faEnablePost"></a>
# **webApiUsers2faEnablePost**
> SuccessResponseSchema200 webApiUsers2faEnablePost(opts)

Enable 2FA

Enable two-factor authentication for a given user.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasUserIdSchema() // UsersSchemasUserIdSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsers2faEnablePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasUserIdSchema**](UsersSchemasUserIdSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersApiTokenDetailsPost"></a>
# **webApiUsersApiTokenDetailsPost**
> UsersSchemasApiTokenDetailSchema200 webApiUsersApiTokenDetailsPost(opts)

API Token Details

Get details of the API token that matches the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasApiTokenSchema() // UsersSchemasApiTokenSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersApiTokenDetailsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasApiTokenSchema**](UsersSchemasApiTokenSchema.md)|  | [optional] 

### Return type

[**UsersSchemasApiTokenDetailSchema200**](UsersSchemasApiTokenDetailSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersAuthAppPost"></a>
# **webApiUsersAuthAppPost**
> UsersSchemasLoginOutputSchema200 webApiUsersAuthAppPost(opts)

Auth App

Authenticate a user with a third-party app, such as DUO or Google Authenticator, for deployments that require Two Factor Authentication.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasAuthCodeSchema() // UsersSchemasAuthCodeSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersAuthAppPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasAuthCodeSchema**](UsersSchemasAuthCodeSchema.md)|  | [optional] 

### Return type

[**UsersSchemasLoginOutputSchema200**](UsersSchemasLoginOutputSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersAuthElevatePost"></a>
# **webApiUsersAuthElevatePost**
> UsersSchemasElevateSessionResponseSchema200 webApiUsersAuthElevatePost(opts)

Auth App

Elevate a session with a third-party app, such as DUO or Google Authenticator.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasElevateSessionSchema() // UsersSchemasElevateSessionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersAuthElevatePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasElevateSessionSchema**](UsersSchemasElevateSessionSchema.md)|  | [optional] 

### Return type

[**UsersSchemasElevateSessionResponseSchema200**](UsersSchemasElevateSessionResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersAuthEulaPost"></a>
# **webApiUsersAuthEulaPost**
> SuccessResponseSchema200 webApiUsersAuthEulaPost()

Sign EULA

Mark the End User License Agreement (EULA) as signed for user scopes.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersAuthEulaPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersChangePasswordPost"></a>
# **webApiUsersChangePasswordPost**
> SuccessResponseSchema200 webApiUsersChangePasswordPost(opts)

Change Password

Change the user password.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasChangePasswordSchema() // UsersSchemasChangePasswordSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersChangePasswordPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasChangePasswordSchema**](UsersSchemasChangePasswordSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersDelete2faPost"></a>
# **webApiUsersDelete2faPost**
> AffectedResultsSchema200 webApiUsersDelete2faPost(opts)

Delete 2FA

Delete 2FA for users.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasDeleteTfaSchema() // UsersSchemasDeleteTfaSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersDelete2faPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasDeleteTfaSchema**](UsersSchemasDeleteTfaSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersDeleteUsersPost"></a>
# **webApiUsersDeleteUsersPost**
> webApiUsersDeleteUsersPost(opts)

Bulk Delete Users

Delete all users that match the filter.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasBulkUsersActionSchema() // UsersSchemasBulkUsersActionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiUsersDeleteUsersPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasBulkUsersActionSchema**](UsersSchemasBulkUsersActionSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersEnableAppPost"></a>
# **webApiUsersEnableAppPost**
> SuccessResponseSchema200 webApiUsersEnableAppPost(opts)

Enable 2FA App

Enable support for the 2FA app (such as Duo or Google Authenticator) that your Console users will use to log in.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasEnableAppSchema() // UsersSchemasEnableAppSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersEnableAppPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasEnableAppSchema**](UsersSchemasEnableAppSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersEnroll2faPost"></a>
# **webApiUsersEnroll2faPost**
> UsersSchemasEnrollTfaResponseSchema200 webApiUsersEnroll2faPost(opts)

Enroll 2FA

Enroll users for 2FA setup.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasUserIdsSchema() // UsersSchemasUserIdsSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersEnroll2faPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasUserIdsSchema**](UsersSchemasUserIdsSchema.md)|  | [optional] 

### Return type

[**UsersSchemasEnrollTfaResponseSchema200**](UsersSchemasEnrollTfaResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersGenerateApiTokenPost"></a>
# **webApiUsersGenerateApiTokenPost**
> UsersSchemasGetApiTokenSchema200 webApiUsersGenerateApiTokenPost(opts)

Generate API Token

Get the API token for the authenticated user.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasGenerateApiTokenSchema() // UsersSchemasGenerateApiTokenSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersGenerateApiTokenPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasGenerateApiTokenSchema**](UsersSchemasGenerateApiTokenSchema.md)|  | [optional] 

### Return type

[**UsersSchemasGetApiTokenSchema200**](UsersSchemasGetApiTokenSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersGenerateIframeTokenPost"></a>
# **webApiUsersGenerateIframeTokenPost**
> UsersSchemasGetCreateIFrameTokenSchema200 webApiUsersGenerateIframeTokenPost(opts)

Generate iFrame Token

Get a new iFrame token with the provided limitations.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasCreateIFrameUserSchema() // UsersSchemasCreateIFrameUserSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersGenerateIframeTokenPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasCreateIFrameUserSchema**](UsersSchemasCreateIFrameUserSchema.md)|  | [optional] 

### Return type

[**UsersSchemasGetCreateIFrameTokenSchema200**](UsersSchemasGetCreateIFrameTokenSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersGet"></a>
# **webApiUsersGet**
> UsersSchemasGetUserListSchemaMany200 webApiUsersGet(opts)

List users

Get a list of users.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'createdAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | User was created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'emailVerified': true, // Boolean | Return only verified/unverified users
  'canGenerateApiToken': true, // Boolean | Can generate api token
  'lastActivationBetween': "lastActivationBetween_example", // String | Date range for when the user was last active (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'query': "query_example", // String | Full text search for fields: full_name, email, description
  'ids': ["ids_example"], // [String] | List of user IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'apiTokenExpiresAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | API token expires before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'createdAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | User was created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'lastActivationLte': new Date("2013-10-20T19:20:30+01:00"), // Date | User was last active before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'sources': ["sources_example"], // [String] | Source in. Example: \"mgmt\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'lastLogin': new Date("2013-10-20T19:20:30+01:00"), // Date | Last login. Example: \"2018-02-27T04:49:26.257525Z\".
  'primaryTwoFaMethod': "primaryTwoFaMethod_example", // String | Primary two fa method
  'lastActivationLt': new Date("2013-10-20T19:20:30+01:00"), // Date | User was last active before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'hasValidApiToken': true, // Boolean | Has valid api token
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'source': "source_example", // String | User Source. Example: \"mgmt\".
  'createdAtLte': new Date("2013-10-20T19:20:30+01:00"), // Date | User was created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'dateJoined': new Date("2013-10-20T19:20:30+01:00"), // Date | Date joined. Example: \"2018-02-27T04:49:26.257525Z\".
  'fullNameContains': ["fullNameContains_example"], // [String] | Match full name partially (substring)
  'roleIds': ["roleIds_example"], // [String] | List of rbac roles to filter by. Example: \"225494730938493804,225494730938493915\".
  'email': "email_example", // String | Email. Example: \"admin@sentinelone.com\".
  'apiTokenExpiresAtGt': new Date("2013-10-20T19:20:30+01:00"), // Date | API token expires after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'twoFaStatuses': ["twoFaStatuses_example"], // [String] | Two fa status in
  'fullNameReadOnly': true, // Boolean | True if full name cannot be changed
  'twoFaStatus': "twoFaStatus_example", // String | Two fa status
  'apiTokenExpiresAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | API token expires after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'fullName': "fullName_example", // String | Full name
  'groupsReadOnly': true, // Boolean | [DEPRECATED] True if permissions cannot be changed
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'apiTokenExpiresAtBetween': "apiTokenExpiresAtBetween_example", // String | Date range for when the API token expires (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'createdAtBetween': "createdAtBetween_example", // String | Date range for when the user was created (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\".
  'firstLogin': new Date("2013-10-20T19:20:30+01:00"), // Date | First login. Example: \"2018-02-27T04:49:26.257525Z\".
  'emailReadOnly': true, // Boolean | True if email cannot be changed
  'createdAtGte': new Date("2013-10-20T19:20:30+01:00"), // Date | User was created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'lastActivationGt': new Date("2013-10-20T19:20:30+01:00"), // Date | User was last active after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'apiTokenExpiresAtLt': new Date("2013-10-20T19:20:30+01:00"), // Date | API token expires before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'emailContains': ["emailContains_example"], // [String] | Match email partially (substring)
  'lastActivationGte': new Date("2013-10-20T19:20:30+01:00"), // Date | User was last active after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\".
  'twoFaEnabled': true // Boolean | Two fa enabled
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **createdAtGt** | **Date**| User was created after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **emailVerified** | **Boolean**| Return only verified/unverified users | [optional] 
 **canGenerateApiToken** | **Boolean**| Can generate api token | [optional] 
 **lastActivationBetween** | **String**| Date range for when the user was last active (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **query** | **String**| Full text search for fields: full_name, email, description | [optional] 
 **ids** | [**[String]**](String.md)| List of user IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **apiTokenExpiresAtLte** | **Date**| API token expires before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **createdAtLt** | **Date**| User was created before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **lastActivationLte** | **Date**| User was last active before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **sources** | [**[String]**](String.md)| Source in. Example: \"mgmt\". | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **lastLogin** | **Date**| Last login. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **primaryTwoFaMethod** | **String**| Primary two fa method | [optional] 
 **lastActivationLt** | **Date**| User was last active before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **hasValidApiToken** | **Boolean**| Has valid api token | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **source** | **String**| User Source. Example: \"mgmt\". | [optional] 
 **createdAtLte** | **Date**| User was created before or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **dateJoined** | **Date**| Date joined. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **fullNameContains** | [**[String]**](String.md)| Match full name partially (substring) | [optional] 
 **roleIds** | [**[String]**](String.md)| List of rbac roles to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **email** | **String**| Email. Example: \"admin@sentinelone.com\". | [optional] 
 **apiTokenExpiresAtGt** | **Date**| API token expires after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **twoFaStatuses** | [**[String]**](String.md)| Two fa status in | [optional] 
 **fullNameReadOnly** | **Boolean**| True if full name cannot be changed | [optional] 
 **twoFaStatus** | **String**| Two fa status | [optional] 
 **apiTokenExpiresAtGte** | **Date**| API token expires after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **fullName** | **String**| Full name | [optional] 
 **groupsReadOnly** | **Boolean**| [DEPRECATED] True if permissions cannot be changed | [optional] 
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **apiTokenExpiresAtBetween** | **String**| Date range for when the API token expires (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **createdAtBetween** | **String**| Date range for when the user was created (format: <from_timestamp>-<to_timestamp>, inclusive). Example: \"1514978890136-1514978650130\". | [optional] 
 **firstLogin** | **Date**| First login. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **emailReadOnly** | **Boolean**| True if email cannot be changed | [optional] 
 **createdAtGte** | **Date**| User was created after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **lastActivationGt** | **Date**| User was last active after this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **apiTokenExpiresAtLt** | **Date**| API token expires before this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **emailContains** | [**[String]**](String.md)| Match email partially (substring) | [optional] 
 **lastActivationGte** | **Date**| User was last active after or at this timestamp. Example: \"2018-02-27T04:49:26.257525Z\". | [optional] 
 **twoFaEnabled** | **Boolean**| Two fa enabled | [optional] 

### Return type

[**UsersSchemasGetUserListSchemaMany200**](UsersSchemasGetUserListSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersLoginByApiTokenPost"></a>
# **webApiUsersLoginByApiTokenPost**
> UsersSchemasTokenSchema200 webApiUsersLoginByApiTokenPost(opts)

Login by API Token

Log in to the API with a token. To learn more about temporary and 6-month tokens and how to generate them, see https://support.sentinelone.com/hc/en-us/articles/360004195934.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasLoginByApiTokenSchema() // UsersSchemasLoginByApiTokenSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersLoginByApiTokenPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasLoginByApiTokenSchema**](UsersSchemasLoginByApiTokenSchema.md)|  | [optional] 

### Return type

[**UsersSchemasTokenSchema200**](UsersSchemasTokenSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersLoginByTokenGet"></a>
# **webApiUsersLoginByTokenGet**
> webApiUsersLoginByTokenGet(token, opts)

Login by Token

Log in with user token.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var token = "token_example"; // String | User token. Example: \"bfd9070c1afa88516d3cdfd722e62fe433e42bad6bb14da27088140ad785585f8582adaccd56fb69\".

var opts = { 
  'redirectTo': "redirectTo_example", // String | Relative url to redirect to
  'redirectToParams': "redirectToParams_example", // String | Query params for the redirect to, without '?' prefix
  'removedSavedScope': "removedSavedScope_example" // String | Removed saved scope
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiUsersLoginByTokenGet(token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| User token. Example: \"bfd9070c1afa88516d3cdfd722e62fe433e42bad6bb14da27088140ad785585f8582adaccd56fb69\". | 
 **redirectTo** | **String**| Relative url to redirect to | [optional] 
 **redirectToParams** | **String**| Query params for the redirect to, without '?' prefix | [optional] 
 **removedSavedScope** | **String**| Removed saved scope | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersLoginContinuePost"></a>
# **webApiUsersLoginContinuePost**
> UsersSchemasLoginContinueResponseSchema200 webApiUsersLoginContinuePost(opts)

Continue with login due to upcoming password expiration or SSO 2FA setup

For SSO 2FA setup tokens, allows users to skip setting up the 2FA and proceed with their login.<br>Accepts a temporary token from SSO login flow with error code 4010035.<br><br>For password expiration tokens, allows users to decide if they want to change their soon to expire password now or later. <br>Users can also choose not to receive the notification again for this password cycle. <br>Accepts a temporary token from /users/login with error code 4010093.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasLoginContinueSchema() // UsersSchemasLoginContinueSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersLoginContinuePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasLoginContinueSchema**](UsersSchemasLoginContinueSchema.md)|  | [optional] 

### Return type

[**UsersSchemasLoginContinueResponseSchema200**](UsersSchemasLoginContinueResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersLoginForceResetPasswordOnLoginPost"></a>
# **webApiUsersLoginForceResetPasswordOnLoginPost**
> AffectedResultsSchema200 webApiUsersLoginForceResetPasswordOnLoginPost(opts)

Reset password on next login

Force users to reset their password on next login.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasBulkUsersActionSchema() // UsersSchemasBulkUsersActionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersLoginForceResetPasswordOnLoginPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasBulkUsersActionSchema**](UsersSchemasBulkUsersActionSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersLoginPost"></a>
# **webApiUsersLoginPost**
> UsersSchemasLoginOutputSchema200 webApiUsersLoginPost(opts)

Login

Authenticate a user by username and password and return an authentication token. Rate limit: 1 call per second for each different IP address that communicates with the Console.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasLoginInputSchema() // UsersSchemasLoginInputSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersLoginPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasLoginInputSchema**](UsersSchemasLoginInputSchema.md)|  | [optional] 

### Return type

[**UsersSchemasLoginOutputSchema200**](UsersSchemasLoginOutputSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersLoginSendResetPasswordEmailPost"></a>
# **webApiUsersLoginSendResetPasswordEmailPost**
> AffectedResultsSchema200 webApiUsersLoginSendResetPasswordEmailPost(opts)

Prompt reset password

Prompt reset password for users.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasBulkUsersActionSchema() // UsersSchemasBulkUsersActionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersLoginSendResetPasswordEmailPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasBulkUsersActionSchema**](UsersSchemasBulkUsersActionSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersLoginSetPasswordPost"></a>
# **webApiUsersLoginSetPasswordPost**
> UsersSchemasSetPasswordResponseSchema200 webApiUsersLoginSetPasswordPost(opts)

Set a New Password

Sets a new password for the user. <br>Used by forced password reset and password expiration flows. <br>Accepts temporary tokens from /users/login with error codes 4010091 and 4010092.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasSetPasswordSchema() // UsersSchemasSetPasswordSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersLoginSetPasswordPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasSetPasswordSchema**](UsersSchemasSetPasswordSchema.md)|  | [optional] 

### Return type

[**UsersSchemasSetPasswordResponseSchema200**](UsersSchemasSetPasswordResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersLoginSsoSaml2Get"></a>
# **webApiUsersLoginSsoSaml2Get**
> webApiUsersLoginSsoSaml2Get(opts)

Redirect to SSO

If SSO is enabled for a deployment or scope, and a user attempts to log in with name and password, this command redirects the login to SSO.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'email': "email_example", // String | Email address of the user trying to log in. Example: \"me@sentinelone.com\".
  'scopeId': "scopeId_example" // String | The scope the desired SSO IdP is configured on. email is irrelevant when using scope_id. If both are provided, email is ignored. Example: \"225494730938493804\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiUsersLoginSsoSaml2Get(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address of the user trying to log in. Example: \"me@sentinelone.com\". | [optional] 
 **scopeId** | **String**| The scope the desired SSO IdP is configured on. email is irrelevant when using scope_id. If both are provided, email is ignored. Example: \"225494730938493804\". | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersLoginSsoSaml2scopeIdPost"></a>
# **webApiUsersLoginSsoSaml2scopeIdPost**
> webApiUsersLoginSsoSaml2scopeIdPost(scopeId)

Auth by SSO

Authenticate a Single Sign-On response over SAML v2 protocol.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var scopeId = "scopeId_example"; // String | Scope ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiUsersLoginSsoSaml2scopeIdPost(scopeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scopeId** | **String**| Scope ID. Example: \"225494730938493804\". | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersLogoutPost"></a>
# **webApiUsersLogoutPost**
> webApiUsersLogoutPost()

Logout

Log out the authenticated user.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiUsersLogoutPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersOnboardingSendVerificationEmailPost"></a>
# **webApiUsersOnboardingSendVerificationEmailPost**
> AffectedResultsSchema200 webApiUsersOnboardingSendVerificationEmailPost(opts)

Send Verification Email

Send verification email to users that match the filter. Warning: Active users will be locked out of the Management Console until they verify (unless set_user_password_methods is on)their email. If your Management Console has Onboarding enabled, when you create a new user, the user gets an email invitation. If the user does not respond in time or loses the email, you can send it again. You can send the email invitation to multiple users. Your SMTP server must be correctly configured in Settings > SMTP for the Global scope. Changing the Global SMTP settings requires an Admin role with Global scope or Support.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasBulkUsersActionSchema() // UsersSchemasBulkUsersActionSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersOnboardingSendVerificationEmailPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasBulkUsersActionSchema**](UsersSchemasBulkUsersActionSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersOnboardingValidateTokenGet"></a>
# **webApiUsersOnboardingValidateTokenGet**
> SuccessResponseSchema200 webApiUsersOnboardingValidateTokenGet(token, opts)

Validate Verification Token

When a new user verifies their email, the Management gets a token.  Use this command to validate the token.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var token = "token_example"; // String | Verification token

var opts = { 
  'resetPasswordFlow': false // Boolean | Reset password flow
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersOnboardingValidateTokenGet(token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Verification token | 
 **resetPasswordFlow** | **Boolean**| Reset password flow | [optional] [default to false]

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersOnboardingVerifyPost"></a>
# **webApiUsersOnboardingVerifyPost**
> SuccessResponseSchema200 webApiUsersOnboardingVerifyPost(opts)

Email Verification

When a new user verifies their email, the Management gets a token. Use this command to verify the token and set a new password.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasOnboardingVerificationSchema() // UsersSchemasOnboardingVerificationSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersOnboardingVerifyPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasOnboardingVerificationSchema**](UsersSchemasOnboardingVerificationSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersPost"></a>
# **webApiUsersPost**
> UsersSchemasUserSchema200 webApiUsersPost(opts)

Create User

Create a new user.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasCreateUserSchema() // UsersSchemasCreateUserSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasCreateUserSchema**](UsersSchemasCreateUserSchema.md)|  | [optional] 

### Return type

[**UsersSchemasUserSchema200**](UsersSchemasUserSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersRequestAppPost"></a>
# **webApiUsersRequestAppPost**
> UsersSchemasRequestAppResponseSchema200 webApiUsersRequestAppPost(opts)

Request 2FA App

Request 2FA App response.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasRequestAppSchema() // UsersSchemasRequestAppSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersRequestAppPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasRequestAppSchema**](UsersSchemasRequestAppSchema.md)|  | [optional] 

### Return type

[**UsersSchemasRequestAppResponseSchema200**](UsersSchemasRequestAppResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersReset2faPost"></a>
# **webApiUsersReset2faPost**
> AffectedResultsSchema200 webApiUsersReset2faPost(opts)

Reset 2FA

Reset 2FA for users.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasResetTfaSchema() // UsersSchemasResetTfaSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersReset2faPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasResetTfaSchema**](UsersSchemasResetTfaSchema.md)|  | [optional] 

### Return type

[**AffectedResultsSchema200**](AffectedResultsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersRevokeApiTokenPost"></a>
# **webApiUsersRevokeApiTokenPost**
> SuccessResponseSchema200 webApiUsersRevokeApiTokenPost(opts)

Revoke API Token

Revoke an API token.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var opts = { 
  'body': new S1MgmtApi.UsersSchemasUserIdSchema() // UsersSchemasUserIdSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersRevokeApiTokenPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersSchemasUserIdSchema**](UsersSchemasUserIdSchema.md)|  | [optional] 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiUsersRsAuthCheckGet"></a>
# **webApiUsersRsAuthCheckGet**
> SuccessResponseSchema200 webApiUsersRsAuthCheckGet()

Check Remote Shell Permissions

See if the logged in user is allowed to use Remote Shell.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersRsAuthCheckGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersSsoSaml2ReAuthGet"></a>
# **webApiUsersSsoSaml2ReAuthGet**
> webApiUsersSsoSaml2ReAuthGet()

Redirect to SSO for re-authentication

Initiates re-authentication with user's identity provider.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiUsersSsoSaml2ReAuthGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersTenantAdminAuthCheckGet"></a>
# **webApiUsersTenantAdminAuthCheckGet**
> SuccessResponseSchema200 webApiUsersTenantAdminAuthCheckGet()

Check Global User

See if logged in user is a user with the Global scope of access.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersTenantAdminAuthCheckGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersViewerAuthCheckGet"></a>
# **webApiUsersViewerAuthCheckGet**
> SuccessResponseSchema200 webApiUsersViewerAuthCheckGet()

Check Viewer

See if the logged in user has only viewer permissions.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersViewerAuthCheckGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersuserIdApiTokenDetailsGet"></a>
# **webApiUsersuserIdApiTokenDetailsGet**
> UsersSchemasApiTokenDetailSchema200 webApiUsersuserIdApiTokenDetailsGet(userId)

API Token by User ID

Get the details of the API token generated for a given user.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var userId = "userId_example"; // String | User ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersuserIdApiTokenDetailsGet(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User ID. Example: \"225494730938493804\". | 

### Return type

[**UsersSchemasApiTokenDetailSchema200**](UsersSchemasApiTokenDetailSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersuserIdDelete"></a>
# **webApiUsersuserIdDelete**
> SuccessResponseSchema200 webApiUsersuserIdDelete(userId)

Delete User

Delete a user by ID.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var userId = "userId_example"; // String | User ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersuserIdDelete(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User ID. Example: \"225494730938493804\". | 

### Return type

[**SuccessResponseSchema200**](SuccessResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersuserIdGet"></a>
# **webApiUsersuserIdGet**
> UsersSchemasSingleUserSchema200 webApiUsersuserIdGet(userId)

Get User

Get a user by ID.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var userId = "userId_example"; // String | User ID. Example: \"225494730938493804\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersuserIdGet(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User ID. Example: \"225494730938493804\". | 

### Return type

[**UsersSchemasSingleUserSchema200**](UsersSchemasSingleUserSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiUsersuserIdPut"></a>
# **webApiUsersuserIdPut**
> UsersSchemasUserSchema200 webApiUsersuserIdPut(userId, opts)

Update User

Change properties of the user of the given ID.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.UsersApi();

var userId = "userId_example"; // String | User ID. Example: \"225494730938493804\".

var opts = { 
  'body': new S1MgmtApi.UsersSchemasUpdateUserSchema() // UsersSchemasUpdateUserSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiUsersuserIdPut(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User ID. Example: \"225494730938493804\". | 
 **body** | [**UsersSchemasUpdateUserSchema**](UsersSchemasUpdateUserSchema.md)|  | [optional] 

### Return type

[**UsersSchemasUserSchema200**](UsersSchemasUserSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

