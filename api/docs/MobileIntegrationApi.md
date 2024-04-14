# S1MgmtApi.MobileIntegrationApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webApiMobileIntegrationAccountsaccountIdPolicyDelete**](MobileIntegrationApi.md#webApiMobileIntegrationAccountsaccountIdPolicyDelete) | **DELETE** /web/api/v2.1/mobile-integration/accounts/{account_id}/policy | Policy - Delete the policy for the Account given by ID
[**webApiMobileIntegrationAccountsaccountIdPolicyGet**](MobileIntegrationApi.md#webApiMobileIntegrationAccountsaccountIdPolicyGet) | **GET** /web/api/v2.1/mobile-integration/accounts/{account_id}/policy | Policy - Get the policy for the Account given by ID
[**webApiMobileIntegrationAccountsaccountIdPolicyPut**](MobileIntegrationApi.md#webApiMobileIntegrationAccountsaccountIdPolicyPut) | **PUT** /web/api/v2.1/mobile-integration/accounts/{account_id}/policy | Policy - Update the policy for the Account given by ID
[**webApiMobileIntegrationActivationAnonymousGet**](MobileIntegrationApi.md#webApiMobileIntegrationActivationAnonymousGet) | **GET** /web/api/v2.1/mobile-integration/activation/anonymous | Activations - Return anonymous activation in the scope
[**webApiMobileIntegrationActivationAnonymousPost**](MobileIntegrationApi.md#webApiMobileIntegrationActivationAnonymousPost) | **POST** /web/api/v2.1/mobile-integration/activation/anonymous | Activations - Generates a global link for anonymous device registration
[**webApiMobileIntegrationActivationUserActivationCancelActivationsPut**](MobileIntegrationApi.md#webApiMobileIntegrationActivationUserActivationCancelActivationsPut) | **PUT** /web/api/v2.1/mobile-integration/activation/user-activation/cancel-activations | Activations - Cancel user activation invitations
[**webApiMobileIntegrationActivationUserActivationGet**](MobileIntegrationApi.md#webApiMobileIntegrationActivationUserActivationGet) | **GET** /web/api/v2.1/mobile-integration/activation/user-activation | Activations - Get list of user activations
[**webApiMobileIntegrationActivationUserActivationImportPost**](MobileIntegrationApi.md#webApiMobileIntegrationActivationUserActivationImportPost) | **POST** /web/api/v2.1/mobile-integration/activation/user-activation/import | Activations - Bulk user activation import
[**webApiMobileIntegrationActivationUserActivationPost**](MobileIntegrationApi.md#webApiMobileIntegrationActivationUserActivationPost) | **POST** /web/api/v2.1/mobile-integration/activation/user-activation | Activations - Create User Activation
[**webApiMobileIntegrationActivationUserActivationResendActivationsPut**](MobileIntegrationApi.md#webApiMobileIntegrationActivationUserActivationResendActivationsPut) | **PUT** /web/api/v2.1/mobile-integration/activation/user-activation/resend-activations | Activations - Resend activation link invitations
[**webApiMobileIntegrationActivationUserActivationValidateImportPost**](MobileIntegrationApi.md#webApiMobileIntegrationActivationUserActivationValidateImportPost) | **POST** /web/api/v2.1/mobile-integration/activation/user-activation/validate-import | Activations - Validate bulk user activation upload
[**webApiMobileIntegrationDevicesGet**](MobileIntegrationApi.md#webApiMobileIntegrationDevicesGet) | **GET** /web/api/v2.1/mobile-integration/devices | Devices - Get list of devices for specific scope
[**webApiMobileIntegrationDevicesdeviceIdGet**](MobileIntegrationApi.md#webApiMobileIntegrationDevicesdeviceIdGet) | **GET** /web/api/v2.1/mobile-integration/devices/{device_id} | Devices - Get device details by device id
[**webApiMobileIntegrationGroupsgroupIdPolicyDelete**](MobileIntegrationApi.md#webApiMobileIntegrationGroupsgroupIdPolicyDelete) | **DELETE** /web/api/v2.1/mobile-integration/groups/{group_id}/policy | Policy - Delete the policy for the Site given by ID
[**webApiMobileIntegrationGroupsgroupIdPolicyGet**](MobileIntegrationApi.md#webApiMobileIntegrationGroupsgroupIdPolicyGet) | **GET** /web/api/v2.1/mobile-integration/groups/{group_id}/policy | Policy - Get the policy for the Site given by ID
[**webApiMobileIntegrationGroupsgroupIdPolicyPut**](MobileIntegrationApi.md#webApiMobileIntegrationGroupsgroupIdPolicyPut) | **PUT** /web/api/v2.1/mobile-integration/groups/{group_id}/policy | Policy - Update the policy for the Group given by ID
[**webApiMobileIntegrationIncidentsAnalystVerdictPost**](MobileIntegrationApi.md#webApiMobileIntegrationIncidentsAnalystVerdictPost) | **POST** /web/api/v2.1/mobile-integration/incidents/analyst-verdict | Incidents - Update analyst verdict
[**webApiMobileIntegrationIncidentsGet**](MobileIntegrationApi.md#webApiMobileIntegrationIncidentsGet) | **GET** /web/api/v2.1/mobile-integration/incidents | Incidents - Get list of incidents
[**webApiMobileIntegrationIncidentsIncidentStatusPost**](MobileIntegrationApi.md#webApiMobileIntegrationIncidentsIncidentStatusPost) | **POST** /web/api/v2.1/mobile-integration/incidents/incident-status | Incidents - Update incident status
[**webApiMobileIntegrationIncidentsMitigatemitigationActionPost**](MobileIntegrationApi.md#webApiMobileIntegrationIncidentsMitigatemitigationActionPost) | **POST** /web/api/v2.1/mobile-integration/incidents/mitigate/{mitigation_action} | Incidents - Mitigate incident
[**webApiMobileIntegrationIncidentsincidentIdNotesPost**](MobileIntegrationApi.md#webApiMobileIntegrationIncidentsincidentIdNotesPost) | **POST** /web/api/v2.1/mobile-integration/incidents/{incident_id}/notes | Incidents - Create incident note
[**webApiMobileIntegrationIncidentsincidentIdNotesnoteIdDelete**](MobileIntegrationApi.md#webApiMobileIntegrationIncidentsincidentIdNotesnoteIdDelete) | **DELETE** /web/api/v2.1/mobile-integration/incidents/{incident_id}/notes/{note_id} | Incidents - Delete incident note
[**webApiMobileIntegrationIncidentsincidentIdNotesnoteIdPut**](MobileIntegrationApi.md#webApiMobileIntegrationIncidentsincidentIdNotesnoteIdPut) | **PUT** /web/api/v2.1/mobile-integration/incidents/{incident_id}/notes/{note_id} | Incidents - Update incident note
[**webApiMobileIntegrationManagementAppConfigGet**](MobileIntegrationApi.md#webApiMobileIntegrationManagementAppConfigGet) | **GET** /web/api/v2.1/mobile-integration/management/app-config | Management - Get app configuration
[**webApiMobileIntegrationManagementCanCreateConnectionGet**](MobileIntegrationApi.md#webApiMobileIntegrationManagementCanCreateConnectionGet) | **GET** /web/api/v2.1/mobile-integration/management/can-create-connection | Management - Checks if connection can be created on current scope.
[**webApiMobileIntegrationManagementConnectionsGet**](MobileIntegrationApi.md#webApiMobileIntegrationManagementConnectionsGet) | **GET** /web/api/v2.1/mobile-integration/management/connections | Management - Get list of connections for specific scope
[**webApiMobileIntegrationManagementConnectionsconnIdDeviceGroupsGet**](MobileIntegrationApi.md#webApiMobileIntegrationManagementConnectionsconnIdDeviceGroupsGet) | **GET** /web/api/v2.1/mobile-integration/management/connections/{conn_id}/device-groups | Management - Get all UEM device groups for given connection
[**webApiMobileIntegrationManagementConnectionsconnIdManagedGroupsGet**](MobileIntegrationApi.md#webApiMobileIntegrationManagementConnectionsconnIdManagedGroupsGet) | **GET** /web/api/v2.1/mobile-integration/management/connections/{conn_id}/managed-groups | Management - Get managed groups for connection
[**webApiMobileIntegrationManagementConnectionsconnIdResponseGroupsGet**](MobileIntegrationApi.md#webApiMobileIntegrationManagementConnectionsconnIdResponseGroupsGet) | **GET** /web/api/v2.1/mobile-integration/management/connections/{conn_id}/response-groups | Management - Get managed groups for connection
[**webApiMobileIntegrationManagementConnectionsconnectionIdDelete**](MobileIntegrationApi.md#webApiMobileIntegrationManagementConnectionsconnectionIdDelete) | **DELETE** /web/api/v2.1/mobile-integration/management/connections/{connection_id} | Management - Delete connection
[**webApiMobileIntegrationManagementConnectionsconnectionIdGroupsPut**](MobileIntegrationApi.md#webApiMobileIntegrationManagementConnectionsconnectionIdGroupsPut) | **PUT** /web/api/v2.1/mobile-integration/management/connections/{connection_id}/groups | Management - Patch connection group mappings
[**webApiMobileIntegrationManagementConnectionsconnectionIdPut**](MobileIntegrationApi.md#webApiMobileIntegrationManagementConnectionsconnectionIdPut) | **PUT** /web/api/v2.1/mobile-integration/management/connections/{connection_id} | Management - Update connector connection
[**webApiMobileIntegrationManagementConnectionsconnectionIdSyncDevicesPost**](MobileIntegrationApi.md#webApiMobileIntegrationManagementConnectionsconnectionIdSyncDevicesPost) | **POST** /web/api/v2.1/mobile-integration/management/connections/{connection_id}/sync-devices | Management - Sync devices under connection
[**webApiMobileIntegrationManagementConnectorsGet**](MobileIntegrationApi.md#webApiMobileIntegrationManagementConnectorsGet) | **GET** /web/api/v2.1/mobile-integration/management/connectors | Connectors - Get list of Connectors and their abilities
[**webApiMobileIntegrationManagementCreateConnectionPost**](MobileIntegrationApi.md#webApiMobileIntegrationManagementCreateConnectionPost) | **POST** /web/api/v2.1/mobile-integration/management/create-connection | Management - Create connector connection
[**webApiMobileIntegrationManagementCreateInterimConnectionPost**](MobileIntegrationApi.md#webApiMobileIntegrationManagementCreateInterimConnectionPost) | **POST** /web/api/v2.1/mobile-integration/management/create-interim-connection | Management - Create interim connector connection
[**webApiMobileIntegrationManagementTestConnectionPost**](MobileIntegrationApi.md#webApiMobileIntegrationManagementTestConnectionPost) | **POST** /web/api/v2.1/mobile-integration/management/test-connection | Management - Test connector connection. Deprecated, use create-interim-connection + device-groups instead.
[**webApiMobileIntegrationPolicyPost**](MobileIntegrationApi.md#webApiMobileIntegrationPolicyPost) | **POST** /web/api/v2.1/mobile-integration/policy | Policy - Create mobile policy
[**webApiMobileIntegrationProvisioningCanProvisionTenantGet**](MobileIntegrationApi.md#webApiMobileIntegrationProvisioningCanProvisionTenantGet) | **GET** /web/api/v2.1/mobile-integration/provisioning/can-provision-tenant | Provision - Check if tenant can be provisioned
[**webApiMobileIntegrationProvisioningPartnerKeyGet**](MobileIntegrationApi.md#webApiMobileIntegrationProvisioningPartnerKeyGet) | **GET** /web/api/v2.1/mobile-integration/provisioning/partner-key | Provision - Get MSSP partner key
[**webApiMobileIntegrationProvisioningPartnerKeyPost**](MobileIntegrationApi.md#webApiMobileIntegrationProvisioningPartnerKeyPost) | **POST** /web/api/v2.1/mobile-integration/provisioning/partner-key | Provision - Persist MSSP partner key
[**webApiMobileIntegrationProvisioningPartnerKeyPut**](MobileIntegrationApi.md#webApiMobileIntegrationProvisioningPartnerKeyPut) | **PUT** /web/api/v2.1/mobile-integration/provisioning/partner-key | Provision - Update MSSP partner key
[**webApiMobileIntegrationProvisioningPartnerKeyclientIdDelete**](MobileIntegrationApi.md#webApiMobileIntegrationProvisioningPartnerKeyclientIdDelete) | **DELETE** /web/api/v2.1/mobile-integration/provisioning/partner-key/{client_id} | Deletes MSSP partner key by client ID
[**webApiMobileIntegrationProvisioningTenantGet**](MobileIntegrationApi.md#webApiMobileIntegrationProvisioningTenantGet) | **GET** /web/api/v2.1/mobile-integration/provisioning/tenant | Provision - Get tenant with users
[**webApiMobileIntegrationProvisioningTenantPost**](MobileIntegrationApi.md#webApiMobileIntegrationProvisioningTenantPost) | **POST** /web/api/v2.1/mobile-integration/provisioning/tenant | Provision - Provision tenant with admin user
[**webApiMobileIntegrationSitessiteIdPolicyDelete**](MobileIntegrationApi.md#webApiMobileIntegrationSitessiteIdPolicyDelete) | **DELETE** /web/api/v2.1/mobile-integration/sites/{site_id}/policy | Policy - Delete the policy for the Site given by ID
[**webApiMobileIntegrationSitessiteIdPolicyGet**](MobileIntegrationApi.md#webApiMobileIntegrationSitessiteIdPolicyGet) | **GET** /web/api/v2.1/mobile-integration/sites/{site_id}/policy | Policy - Get the policy for the Site given by ID
[**webApiMobileIntegrationSitessiteIdPolicyPut**](MobileIntegrationApi.md#webApiMobileIntegrationSitessiteIdPolicyPut) | **PUT** /web/api/v2.1/mobile-integration/sites/{site_id}/policy | Policy - Update the policy for the Site given by ID
[**webApiMobileIntegrationTenantPolicyDelete**](MobileIntegrationApi.md#webApiMobileIntegrationTenantPolicyDelete) | **DELETE** /web/api/v2.1/mobile-integration/tenant/policy | Policy - Delete global mobile policy
[**webApiMobileIntegrationTenantPolicyGet**](MobileIntegrationApi.md#webApiMobileIntegrationTenantPolicyGet) | **GET** /web/api/v2.1/mobile-integration/tenant/policy | Policy - Get global mobile policy
[**webApiMobileIntegrationTenantPolicyPut**](MobileIntegrationApi.md#webApiMobileIntegrationTenantPolicyPut) | **PUT** /web/api/v2.1/mobile-integration/tenant/policy | Policy - Update global mobile policy


<a name="webApiMobileIntegrationAccountsaccountIdPolicyDelete"></a>
# **webApiMobileIntegrationAccountsaccountIdPolicyDelete**
> webApiMobileIntegrationAccountsaccountIdPolicyDelete(accountId)

Policy - Delete the policy for the Account given by ID

Policy - Delete the policy for the Account given by ID

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var accountId = "accountId_example"; // String | Account id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationAccountsaccountIdPolicyDelete(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account id | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationAccountsaccountIdPolicyGet"></a>
# **webApiMobileIntegrationAccountsaccountIdPolicyGet**
> V21PolicySchemasPolicy200 webApiMobileIntegrationAccountsaccountIdPolicyGet(accountId)

Policy - Get the policy for the Account given by ID

Policy - Get the policy for the Account given by ID

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var accountId = "accountId_example"; // String | Account id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationAccountsaccountIdPolicyGet(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account id | 

### Return type

[**V21PolicySchemasPolicy200**](V21PolicySchemasPolicy200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationAccountsaccountIdPolicyPut"></a>
# **webApiMobileIntegrationAccountsaccountIdPolicyPut**
> V21PolicySchemasPolicy200 webApiMobileIntegrationAccountsaccountIdPolicyPut(accountId, opts)

Policy - Update the policy for the Account given by ID

Policy - Update the policy for the Account given by ID

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var accountId = "accountId_example"; // String | Account id

var opts = { 
  'body': new S1MgmtApi.V21PolicySchemasPolicyRequest() // V21PolicySchemasPolicyRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationAccountsaccountIdPolicyPut(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| Account id | 
 **body** | [**V21PolicySchemasPolicyRequest**](V21PolicySchemasPolicyRequest.md)|  | [optional] 

### Return type

[**V21PolicySchemasPolicy200**](V21PolicySchemasPolicy200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationActivationAnonymousGet"></a>
# **webApiMobileIntegrationActivationAnonymousGet**
> V21ActivationSchemasAnonymousActivationListItemMany200 webApiMobileIntegrationActivationAnonymousGet(opts)

Activations - Return anonymous activation in the scope

Activations - Return anonymous activation in the scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationActivationAnonymousGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21ActivationSchemasAnonymousActivationListItemMany200**](V21ActivationSchemasAnonymousActivationListItemMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationActivationAnonymousPost"></a>
# **webApiMobileIntegrationActivationAnonymousPost**
> V21ActivationSchemasAnonymousActivationResponse201 webApiMobileIntegrationActivationAnonymousPost(opts)

Activations - Generates a global link for anonymous device registration

Activations - Generates a global link for anonymous device registration

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21ActivationSchemasAnonymousActivationRequestWrapper() // V21ActivationSchemasAnonymousActivationRequestWrapper | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationActivationAnonymousPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ActivationSchemasAnonymousActivationRequestWrapper**](V21ActivationSchemasAnonymousActivationRequestWrapper.md)|  | [optional] 

### Return type

[**V21ActivationSchemasAnonymousActivationResponse201**](V21ActivationSchemasAnonymousActivationResponse201.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationActivationUserActivationCancelActivationsPut"></a>
# **webApiMobileIntegrationActivationUserActivationCancelActivationsPut**
> webApiMobileIntegrationActivationUserActivationCancelActivationsPut(opts)

Activations - Cancel user activation invitations

Activations - Cancel user activation invitations

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21ActivationSchemasUserActivationIdsRequestWrapper() // V21ActivationSchemasUserActivationIdsRequestWrapper | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationActivationUserActivationCancelActivationsPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ActivationSchemasUserActivationIdsRequestWrapper**](V21ActivationSchemasUserActivationIdsRequestWrapper.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationActivationUserActivationGet"></a>
# **webApiMobileIntegrationActivationUserActivationGet**
> V21ActivationSchemasUserActivationItemMany200 webApiMobileIntegrationActivationUserActivationGet(opts)

Activations - Get list of user activations

Activations - Get list of user activations

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'statusIn': ["statusIn_example"], // [String] | Include user activations only with given status. Example: \"created\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationActivationUserActivationGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **statusIn** | [**[String]**](String.md)| Include user activations only with given status. Example: \"created\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21ActivationSchemasUserActivationItemMany200**](V21ActivationSchemasUserActivationItemMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationActivationUserActivationImportPost"></a>
# **webApiMobileIntegrationActivationUserActivationImportPost**
> V21ActivationSchemasCheckBulkUserActivationImportResponse200 webApiMobileIntegrationActivationUserActivationImportPost(file, opts)

Activations - Bulk user activation import

Import user activations from uploaded CSV file

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var file = "/path/to/file.txt"; // File | The input CSV file with user activations

var opts = { 
  'filter': "filter_example", // String | The details of the scope where the entities will be imported, for example:  For Global - '{\"tenant\":true}' For an Account - '{\"accountIds\": [\"225494730938493804\"]}' For a Site  - '{\"siteIds\": [\"225494730938493804\"]}' For a Group - '{\"groupIds\": [\"225494730938493804\"]}'
  'mgmtGroupId': "null" // String | Group identifier of a group where new devices will be activated
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationActivationUserActivationImportPost(file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The input CSV file with user activations | 
 **filter** | **String**| The details of the scope where the entities will be imported, for example:  For Global - '{\"tenant\":true}' For an Account - '{\"accountIds\": [\"225494730938493804\"]}' For a Site  - '{\"siteIds\": [\"225494730938493804\"]}' For a Group - '{\"groupIds\": [\"225494730938493804\"]}' | [optional] 
 **mgmtGroupId** | **String**| Group identifier of a group where new devices will be activated | [optional] [default to null]

### Return type

[**V21ActivationSchemasCheckBulkUserActivationImportResponse200**](V21ActivationSchemasCheckBulkUserActivationImportResponse200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="webApiMobileIntegrationActivationUserActivationPost"></a>
# **webApiMobileIntegrationActivationUserActivationPost**
> webApiMobileIntegrationActivationUserActivationPost(opts)

Activations - Create User Activation

Generate bulk of end user links for device registration

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21ActivationSchemasUserActivationRequestWrapper() // V21ActivationSchemasUserActivationRequestWrapper | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationActivationUserActivationPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ActivationSchemasUserActivationRequestWrapper**](V21ActivationSchemasUserActivationRequestWrapper.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationActivationUserActivationResendActivationsPut"></a>
# **webApiMobileIntegrationActivationUserActivationResendActivationsPut**
> webApiMobileIntegrationActivationUserActivationResendActivationsPut(opts)

Activations - Resend activation link invitations

Activations - Resend activation link invitations

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21ActivationSchemasUserActivationIdsRequestWrapper() // V21ActivationSchemasUserActivationIdsRequestWrapper | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationActivationUserActivationResendActivationsPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ActivationSchemasUserActivationIdsRequestWrapper**](V21ActivationSchemasUserActivationIdsRequestWrapper.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationActivationUserActivationValidateImportPost"></a>
# **webApiMobileIntegrationActivationUserActivationValidateImportPost**
> V21ActivationSchemasCheckBulkUserActivationImportResponse200 webApiMobileIntegrationActivationUserActivationValidateImportPost(file, opts)

Activations - Validate bulk user activation upload

Check the validity of uploaded CSV file and its content

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var file = "/path/to/file.txt"; // File | The input CSV file with user activations

var opts = { 
  'filter': "filter_example" // String | The details of the scope where the entities will be imported, for example:  For Global - '{\"tenant\":true}' For an Account - '{\"accountIds\": [\"225494730938493804\"]}' For a Site  - '{\"siteIds\": [\"225494730938493804\"]}' For a Group - '{\"groupIds\": [\"225494730938493804\"]}'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationActivationUserActivationValidateImportPost(file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The input CSV file with user activations | 
 **filter** | **String**| The details of the scope where the entities will be imported, for example:  For Global - '{\"tenant\":true}' For an Account - '{\"accountIds\": [\"225494730938493804\"]}' For a Site  - '{\"siteIds\": [\"225494730938493804\"]}' For a Group - '{\"groupIds\": [\"225494730938493804\"]}' | [optional] 

### Return type

[**V21ActivationSchemasCheckBulkUserActivationImportResponse200**](V21ActivationSchemasCheckBulkUserActivationImportResponse200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="webApiMobileIntegrationDevicesGet"></a>
# **webApiMobileIntegrationDevicesGet**
> V21DevicesSchemasDeviceDataSchemaMany200 webApiMobileIntegrationDevicesGet(opts)

Devices - Get list of devices for specific scope

Devices - Get list devices for specific scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'appVersionIn': ["appVersionIn_example"], // [String] | Include devices with given app versions. Example: \"2.5.1.1320\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'healthStateIn': ["healthStateIn_example"], // [String] | Include devices only with given health state. Example: \"normal\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'trackingId1Contains': "trackingId1Contains_example", // String | Include devices by external tracking IDs that contain text
  'privilegesIn': ["privilegesIn_example"], // [String] | Include devices only with given privileges. Example: \"none\".
  'modelContains': "modelContains_example", // String | Include devices by models that contain text
  'osVersionContains': "osVersionContains_example", // String | Include devices by os version that contain text
  'platformIn': ["platformIn_example"], // [String] | Include devices only of given platforms. Example: \"android\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'userContains': "userContains_example", // String | Include devices by users that contain text
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'deviceIdContains': "deviceIdContains_example", // String | Include devices by device IDs that contain text
  'trackingId2Contains': "trackingId2Contains_example", // String | Include devices by another external tracking IDs that contain text
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'groupIds': ["groupIds_example"] // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationDevicesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **appVersionIn** | [**[String]**](String.md)| Include devices with given app versions. Example: \"2.5.1.1320\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **healthStateIn** | [**[String]**](String.md)| Include devices only with given health state. Example: \"normal\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **trackingId1Contains** | **String**| Include devices by external tracking IDs that contain text | [optional] 
 **privilegesIn** | [**[String]**](String.md)| Include devices only with given privileges. Example: \"none\". | [optional] 
 **modelContains** | **String**| Include devices by models that contain text | [optional] 
 **osVersionContains** | **String**| Include devices by os version that contain text | [optional] 
 **platformIn** | [**[String]**](String.md)| Include devices only of given platforms. Example: \"android\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **userContains** | **String**| Include devices by users that contain text | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **deviceIdContains** | **String**| Include devices by device IDs that contain text | [optional] 
 **trackingId2Contains** | **String**| Include devices by another external tracking IDs that contain text | [optional] 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21DevicesSchemasDeviceDataSchemaMany200**](V21DevicesSchemasDeviceDataSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationDevicesdeviceIdGet"></a>
# **webApiMobileIntegrationDevicesdeviceIdGet**
> V21DevicesSchemasDeviceDataSchema200 webApiMobileIntegrationDevicesdeviceIdGet(deviceId, opts)

Devices - Get device details by device id

Devices - Get device details by device id

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var deviceId = "deviceId_example"; // String | Device ID

var opts = { 
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationDevicesdeviceIdGet(deviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device ID | 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21DevicesSchemasDeviceDataSchema200**](V21DevicesSchemasDeviceDataSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationGroupsgroupIdPolicyDelete"></a>
# **webApiMobileIntegrationGroupsgroupIdPolicyDelete**
> webApiMobileIntegrationGroupsgroupIdPolicyDelete(groupId)

Policy - Delete the policy for the Site given by ID

Policy - Delete the policy for the Site given by ID

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var groupId = "groupId_example"; // String | Group id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationGroupsgroupIdPolicyDelete(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group id | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationGroupsgroupIdPolicyGet"></a>
# **webApiMobileIntegrationGroupsgroupIdPolicyGet**
> V21PolicySchemasPolicy200 webApiMobileIntegrationGroupsgroupIdPolicyGet(groupId)

Policy - Get the policy for the Site given by ID

Policy - Get the policy for the Site given by ID

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var groupId = "groupId_example"; // String | Group id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationGroupsgroupIdPolicyGet(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group id | 

### Return type

[**V21PolicySchemasPolicy200**](V21PolicySchemasPolicy200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationGroupsgroupIdPolicyPut"></a>
# **webApiMobileIntegrationGroupsgroupIdPolicyPut**
> V21PolicySchemasPolicy200 webApiMobileIntegrationGroupsgroupIdPolicyPut(groupId, opts)

Policy - Update the policy for the Group given by ID

Policy - Update the policy for the Group given by ID

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var groupId = "groupId_example"; // String | Group id

var opts = { 
  'body': new S1MgmtApi.V21PolicySchemasPolicyRequest() // V21PolicySchemasPolicyRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationGroupsgroupIdPolicyPut(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| Group id | 
 **body** | [**V21PolicySchemasPolicyRequest**](V21PolicySchemasPolicyRequest.md)|  | [optional] 

### Return type

[**V21PolicySchemasPolicy200**](V21PolicySchemasPolicy200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationIncidentsAnalystVerdictPost"></a>
# **webApiMobileIntegrationIncidentsAnalystVerdictPost**
> V21IncidentsSchemasAffectedCountResponseSchema200 webApiMobileIntegrationIncidentsAnalystVerdictPost(opts)

Incidents - Update analyst verdict

Incidents - Update analyst verdict

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21IncidentsSchemasUpdateAnalystVerdictRequestSchema() // V21IncidentsSchemasUpdateAnalystVerdictRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationIncidentsAnalystVerdictPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21IncidentsSchemasUpdateAnalystVerdictRequestSchema**](V21IncidentsSchemasUpdateAnalystVerdictRequestSchema.md)|  | [optional] 

### Return type

[**V21IncidentsSchemasAffectedCountResponseSchema200**](V21IncidentsSchemasAffectedCountResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationIncidentsGet"></a>
# **webApiMobileIntegrationIncidentsGet**
> V21IncidentsSchemasListIncidentsSchema200 webApiMobileIntegrationIncidentsGet(opts)

Incidents - Get list of incidents

Incidents - Get list of incidents

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'analystVerdictIn': ["analystVerdictIn_example"], // [String] | Include incident only of given analyst verdicts. Example: \"true_positive\".
  'incidentStatusIn': ["incidentStatusIn_example"], // [String] | Include incident only of given incident statuses. Example: \"unresolved\".
  'statusActionIn': ["statusActionIn_example"], // [String] | Include incident only of given status actions. Example: \"conditional_access\".
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'kindIn': ["kindIn_example"], // [String] | Include incidents only of given kinds. Example: \"t,h,r,e,a,t\".
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'deviceIdIn': ["deviceIdIn_example"], // [String] | Include incidents only of given device ids. Example: \"a,b,c,-,1,2,3,-,4,5,6\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'userContains': "userContains_example", // String | Include incidents by user email that contain text
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'deviceIdContains': "deviceIdContains_example", // String | Include incidents by device IDs that contain text
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'statusIn': ["statusIn_example"], // [String] | Include incident only of given statuses. Example: \"not_mitigated\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'severityIn': ["severityIn_example"] // [String] | Include incident only of given severities. Example: \"low\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationIncidentsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **analystVerdictIn** | [**[String]**](String.md)| Include incident only of given analyst verdicts. Example: \"true_positive\". | [optional] 
 **incidentStatusIn** | [**[String]**](String.md)| Include incident only of given incident statuses. Example: \"unresolved\". | [optional] 
 **statusActionIn** | [**[String]**](String.md)| Include incident only of given status actions. Example: \"conditional_access\". | [optional] 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **kindIn** | [**[String]**](String.md)| Include incidents only of given kinds. Example: \"t,h,r,e,a,t\". | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **deviceIdIn** | [**[String]**](String.md)| Include incidents only of given device ids. Example: \"a,b,c,-,1,2,3,-,4,5,6\". | [optional] 
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **userContains** | **String**| Include incidents by user email that contain text | [optional] 
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **deviceIdContains** | **String**| Include incidents by device IDs that contain text | [optional] 
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **statusIn** | [**[String]**](String.md)| Include incident only of given statuses. Example: \"not_mitigated\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **severityIn** | [**[String]**](String.md)| Include incident only of given severities. Example: \"low\". | [optional] 

### Return type

[**V21IncidentsSchemasListIncidentsSchema200**](V21IncidentsSchemasListIncidentsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationIncidentsIncidentStatusPost"></a>
# **webApiMobileIntegrationIncidentsIncidentStatusPost**
> V21IncidentsSchemasAffectedCountResponseSchema200 webApiMobileIntegrationIncidentsIncidentStatusPost(opts)

Incidents - Update incident status

Incidents - Update incident status

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21IncidentsSchemasUpdateIncidentStatusRequestSchema() // V21IncidentsSchemasUpdateIncidentStatusRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationIncidentsIncidentStatusPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21IncidentsSchemasUpdateIncidentStatusRequestSchema**](V21IncidentsSchemasUpdateIncidentStatusRequestSchema.md)|  | [optional] 

### Return type

[**V21IncidentsSchemasAffectedCountResponseSchema200**](V21IncidentsSchemasAffectedCountResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationIncidentsMitigatemitigationActionPost"></a>
# **webApiMobileIntegrationIncidentsMitigatemitigationActionPost**
> V21IncidentsSchemasAffectedCountResponseSchema200 webApiMobileIntegrationIncidentsMitigatemitigationActionPost(mitigationAction, opts)

Incidents - Mitigate incident

Incidents - Mitigate incident

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var mitigationAction = "mitigationAction_example"; // String | Mitigation action

var opts = { 
  'body': new S1MgmtApi.V21IncidentsSchemasMitigateIncidentRequestSchema() // V21IncidentsSchemasMitigateIncidentRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationIncidentsMitigatemitigationActionPost(mitigationAction, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mitigationAction** | **String**| Mitigation action | 
 **body** | [**V21IncidentsSchemasMitigateIncidentRequestSchema**](V21IncidentsSchemasMitigateIncidentRequestSchema.md)|  | [optional] 

### Return type

[**V21IncidentsSchemasAffectedCountResponseSchema200**](V21IncidentsSchemasAffectedCountResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationIncidentsincidentIdNotesPost"></a>
# **webApiMobileIntegrationIncidentsincidentIdNotesPost**
> V21IncidentsSchemasIncidentNote200 webApiMobileIntegrationIncidentsincidentIdNotesPost(incidentId, opts)

Incidents - Create incident note

Incidents - Create incident note

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var incidentId = "incidentId_example"; // String | Incident ID

var opts = { 
  'body': new S1MgmtApi.V21IncidentsSchemasIncidentNoteRequestSchema() // V21IncidentsSchemasIncidentNoteRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationIncidentsincidentIdNotesPost(incidentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incidentId** | **String**| Incident ID | 
 **body** | [**V21IncidentsSchemasIncidentNoteRequestSchema**](V21IncidentsSchemasIncidentNoteRequestSchema.md)|  | [optional] 

### Return type

[**V21IncidentsSchemasIncidentNote200**](V21IncidentsSchemasIncidentNote200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationIncidentsincidentIdNotesnoteIdDelete"></a>
# **webApiMobileIntegrationIncidentsincidentIdNotesnoteIdDelete**
> webApiMobileIntegrationIncidentsincidentIdNotesnoteIdDelete(noteId, incidentId, opts)

Incidents - Delete incident note

Incidents - Delete incident note

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var noteId = "noteId_example"; // String | Note ID

var incidentId = "incidentId_example"; // String | Incident ID

var opts = { 
  'body': new S1MgmtApi.V21IncidentsSchemasDeleteIncidentNoteRequestSchema() // V21IncidentsSchemasDeleteIncidentNoteRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationIncidentsincidentIdNotesnoteIdDelete(noteId, incidentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**| Note ID | 
 **incidentId** | **String**| Incident ID | 
 **body** | [**V21IncidentsSchemasDeleteIncidentNoteRequestSchema**](V21IncidentsSchemasDeleteIncidentNoteRequestSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationIncidentsincidentIdNotesnoteIdPut"></a>
# **webApiMobileIntegrationIncidentsincidentIdNotesnoteIdPut**
> V21IncidentsSchemasIncidentNote200 webApiMobileIntegrationIncidentsincidentIdNotesnoteIdPut(noteId, incidentId, opts)

Incidents - Update incident note

Incidents - Update incident note

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var noteId = "noteId_example"; // String | Note ID

var incidentId = "incidentId_example"; // String | Incident ID

var opts = { 
  'body': new S1MgmtApi.V21IncidentsSchemasIncidentNoteRequestSchema() // V21IncidentsSchemasIncidentNoteRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationIncidentsincidentIdNotesnoteIdPut(noteId, incidentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**| Note ID | 
 **incidentId** | **String**| Incident ID | 
 **body** | [**V21IncidentsSchemasIncidentNoteRequestSchema**](V21IncidentsSchemasIncidentNoteRequestSchema.md)|  | [optional] 

### Return type

[**V21IncidentsSchemasIncidentNote200**](V21IncidentsSchemasIncidentNote200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementAppConfigGet"></a>
# **webApiMobileIntegrationManagementAppConfigGet**
> V21ManagementSchemasAppConfigurationSchema200 webApiMobileIntegrationManagementAppConfigGet(opts)

Management - Get app configuration

Management - Get app configuration

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationManagementAppConfigGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21ManagementSchemasAppConfigurationSchema200**](V21ManagementSchemasAppConfigurationSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementCanCreateConnectionGet"></a>
# **webApiMobileIntegrationManagementCanCreateConnectionGet**
> V21ManagementSchemasCanCreateConnectionResponseSchema200 webApiMobileIntegrationManagementCanCreateConnectionGet(opts)

Management - Checks if connection can be created on current scope.

Management - Checks if connection can be created on current scope.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationManagementCanCreateConnectionGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21ManagementSchemasCanCreateConnectionResponseSchema200**](V21ManagementSchemasCanCreateConnectionResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementConnectionsGet"></a>
# **webApiMobileIntegrationManagementConnectionsGet**
> V21ManagementSchemasListConnectionsSchema200 webApiMobileIntegrationManagementConnectionsGet(opts)

Management - Get list of connections for specific scope

Management - Get list of connections for specific scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationManagementConnectionsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21ManagementSchemasListConnectionsSchema200**](V21ManagementSchemasListConnectionsSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementConnectionsconnIdDeviceGroupsGet"></a>
# **webApiMobileIntegrationManagementConnectionsconnIdDeviceGroupsGet**
> V21ManagementSchemasManagedGroupSchemaMany200 webApiMobileIntegrationManagementConnectionsconnIdDeviceGroupsGet(connId, opts)

Management - Get all UEM device groups for given connection

Management - Get all UEM device groups for given connection

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var connId = "connId_example"; // String | Connection ID

var opts = { 
  'countOnly': false, // Boolean | If true, only total number of items will be returned, without any of the actual objects.
  'sortBy': "null", // String | The column to sort the results by. Example: \"id\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'limit': 10, // Number | Limit number of returned items (1-1000). Example: \"10\".
  'skipCount': null, // Boolean | If true, total number of items will not be calculated, which speeds up execution time.
  'cursor': "null", // String | Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\".
  'skip': 56, // Number | Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\".
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'sortOrder': "null", // String | Sort direction. Example: \"asc\".
  'accountIds': ["accountIds_example"], // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'query': "query_example" // String | Search for groups with names containing this value
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationManagementConnectionsconnIdDeviceGroupsGet(connId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connId** | **String**| Connection ID | 
 **countOnly** | **Boolean**| If true, only total number of items will be returned, without any of the actual objects. | [optional] [default to false]
 **sortBy** | **String**| The column to sort the results by. Example: \"id\". | [optional] [default to null]
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **limit** | **Number**| Limit number of returned items (1-1000). Example: \"10\". | [optional] [default to 10]
 **skipCount** | **Boolean**| If true, total number of items will not be calculated, which speeds up execution time. | [optional] [default to null]
 **cursor** | **String**| Cursor position returned by the last request. Use to iterate over more than 1000 items. Example: \"YWdlbnRfaWQ6NTgwMjkzODE=\". | [optional] [default to null]
 **skip** | **Number**| Skip first number of items (0-1000). To iterate over more than 1000 items,  use \"cursor\". Example: \"150\". | [optional] 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **sortOrder** | **String**| Sort direction. Example: \"asc\". | [optional] [default to null]
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **query** | **String**| Search for groups with names containing this value | [optional] 

### Return type

[**V21ManagementSchemasManagedGroupSchemaMany200**](V21ManagementSchemasManagedGroupSchemaMany200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementConnectionsconnIdManagedGroupsGet"></a>
# **webApiMobileIntegrationManagementConnectionsconnIdManagedGroupsGet**
> V21ManagementSchemasManagedGroupsResponseSchema200 webApiMobileIntegrationManagementConnectionsconnIdManagedGroupsGet(connId, opts)

Management - Get managed groups for connection

Management - Get managed groups for connection

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var connId = "connId_example"; // String | Connection ID

var opts = { 
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationManagementConnectionsconnIdManagedGroupsGet(connId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connId** | **String**| Connection ID | 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21ManagementSchemasManagedGroupsResponseSchema200**](V21ManagementSchemasManagedGroupsResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementConnectionsconnIdResponseGroupsGet"></a>
# **webApiMobileIntegrationManagementConnectionsconnIdResponseGroupsGet**
> V21ManagementSchemasManagedGroupsResponseSchema200 webApiMobileIntegrationManagementConnectionsconnIdResponseGroupsGet(connId, opts)

Management - Get managed groups for connection

Management - Get managed groups for connection

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var connId = "connId_example"; // String | Connection ID

var opts = { 
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationManagementConnectionsconnIdResponseGroupsGet(connId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connId** | **String**| Connection ID | 
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21ManagementSchemasManagedGroupsResponseSchema200**](V21ManagementSchemasManagedGroupsResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementConnectionsconnectionIdDelete"></a>
# **webApiMobileIntegrationManagementConnectionsconnectionIdDelete**
> webApiMobileIntegrationManagementConnectionsconnectionIdDelete(connectionId, opts)

Management - Delete connection

Management - Delete connection

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var connectionId = "connectionId_example"; // String | Connection id

var opts = { 
  'body': new S1MgmtApi.V21ManagementSchemasDeleteConnectionRequestSchema() // V21ManagementSchemasDeleteConnectionRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationManagementConnectionsconnectionIdDelete(connectionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | **String**| Connection id | 
 **body** | [**V21ManagementSchemasDeleteConnectionRequestSchema**](V21ManagementSchemasDeleteConnectionRequestSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementConnectionsconnectionIdGroupsPut"></a>
# **webApiMobileIntegrationManagementConnectionsconnectionIdGroupsPut**
> webApiMobileIntegrationManagementConnectionsconnectionIdGroupsPut(connectionId, opts)

Management - Patch connection group mappings

Management - Patch connection group mappings

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var connectionId = "connectionId_example"; // String | Connection id

var opts = { 
  'body': new S1MgmtApi.V21ManagementSchemasUpdateGroupsRequestSchema() // V21ManagementSchemasUpdateGroupsRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationManagementConnectionsconnectionIdGroupsPut(connectionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | **String**| Connection id | 
 **body** | [**V21ManagementSchemasUpdateGroupsRequestSchema**](V21ManagementSchemasUpdateGroupsRequestSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementConnectionsconnectionIdPut"></a>
# **webApiMobileIntegrationManagementConnectionsconnectionIdPut**
> webApiMobileIntegrationManagementConnectionsconnectionIdPut(connectionId, opts)

Management - Update connector connection

Management - Update connector connection.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var connectionId = "connectionId_example"; // String | Connection id

var opts = { 
  'body': new S1MgmtApi.V21ManagementSchemasUpdateConnectionRequestSchema() // V21ManagementSchemasUpdateConnectionRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationManagementConnectionsconnectionIdPut(connectionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | **String**| Connection id | 
 **body** | [**V21ManagementSchemasUpdateConnectionRequestSchema**](V21ManagementSchemasUpdateConnectionRequestSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementConnectionsconnectionIdSyncDevicesPost"></a>
# **webApiMobileIntegrationManagementConnectionsconnectionIdSyncDevicesPost**
> webApiMobileIntegrationManagementConnectionsconnectionIdSyncDevicesPost(connectionId, opts)

Management - Sync devices under connection

Management - Sync devices under connection

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var connectionId = "connectionId_example"; // String | Connection id

var opts = { 
  'body': new S1MgmtApi.V21ManagementSchemasSyncDevicesRequestSchema() // V21ManagementSchemasSyncDevicesRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationManagementConnectionsconnectionIdSyncDevicesPost(connectionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | **String**| Connection id | 
 **body** | [**V21ManagementSchemasSyncDevicesRequestSchema**](V21ManagementSchemasSyncDevicesRequestSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementConnectorsGet"></a>
# **webApiMobileIntegrationManagementConnectorsGet**
> V21ConnectorTypesSchemasConnectorTypes200 webApiMobileIntegrationManagementConnectorsGet()

Connectors - Get list of Connectors and their abilities

Connectors - Get list of Connectors and their abilities

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationManagementConnectorsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V21ConnectorTypesSchemasConnectorTypes200**](V21ConnectorTypesSchemasConnectorTypes200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementCreateConnectionPost"></a>
# **webApiMobileIntegrationManagementCreateConnectionPost**
> webApiMobileIntegrationManagementCreateConnectionPost(opts)

Management - Create connector connection

Management - Create connector connection.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21ManagementSchemasCreateConnectionRequestSchema() // V21ManagementSchemasCreateConnectionRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationManagementCreateConnectionPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ManagementSchemasCreateConnectionRequestSchema**](V21ManagementSchemasCreateConnectionRequestSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementCreateInterimConnectionPost"></a>
# **webApiMobileIntegrationManagementCreateInterimConnectionPost**
> V21ManagementSchemasCreateInterimConnectionResponseSchema200 webApiMobileIntegrationManagementCreateInterimConnectionPost(opts)

Management - Create interim connector connection

Management - Create interim connector connection.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21ManagementSchemasTestConnectionRequestSchema() // V21ManagementSchemasTestConnectionRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationManagementCreateInterimConnectionPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ManagementSchemasTestConnectionRequestSchema**](V21ManagementSchemasTestConnectionRequestSchema.md)|  | [optional] 

### Return type

[**V21ManagementSchemasCreateInterimConnectionResponseSchema200**](V21ManagementSchemasCreateInterimConnectionResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationManagementTestConnectionPost"></a>
# **webApiMobileIntegrationManagementTestConnectionPost**
> V21ManagementSchemasManagedGroupsResponseSchema200 webApiMobileIntegrationManagementTestConnectionPost(opts)

Management - Test connector connection. Deprecated, use create-interim-connection + device-groups instead.

Management - Test connector connection. Deprecated, use create-interim-connection + device-groups instead.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21ManagementSchemasTestConnectionRequestSchema() // V21ManagementSchemasTestConnectionRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationManagementTestConnectionPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ManagementSchemasTestConnectionRequestSchema**](V21ManagementSchemasTestConnectionRequestSchema.md)|  | [optional] 

### Return type

[**V21ManagementSchemasManagedGroupsResponseSchema200**](V21ManagementSchemasManagedGroupsResponseSchema200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationPolicyPost"></a>
# **webApiMobileIntegrationPolicyPost**
> V21PolicySchemasPolicy200 webApiMobileIntegrationPolicyPost(opts)

Policy - Create mobile policy

Policy - Create mobile policy

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21PolicySchemasPolicyRequest() // V21PolicySchemasPolicyRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationPolicyPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21PolicySchemasPolicyRequest**](V21PolicySchemasPolicyRequest.md)|  | [optional] 

### Return type

[**V21PolicySchemasPolicy200**](V21PolicySchemasPolicy200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationProvisioningCanProvisionTenantGet"></a>
# **webApiMobileIntegrationProvisioningCanProvisionTenantGet**
> V21ProvisioningSchemasCanProvisionTenant200 webApiMobileIntegrationProvisioningCanProvisionTenantGet(opts)

Provision - Check if tenant can be provisioned

Checks if tenant can be provisioned by scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationProvisioningCanProvisionTenantGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21ProvisioningSchemasCanProvisionTenant200**](V21ProvisioningSchemasCanProvisionTenant200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationProvisioningPartnerKeyGet"></a>
# **webApiMobileIntegrationProvisioningPartnerKeyGet**
> V21ProvisioningSchemasPartnerKeyItem200 webApiMobileIntegrationProvisioningPartnerKeyGet(opts)

Provision - Get MSSP partner key

Gets MSSP partner key by scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationProvisioningPartnerKeyGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21ProvisioningSchemasPartnerKeyItem200**](V21ProvisioningSchemasPartnerKeyItem200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationProvisioningPartnerKeyPost"></a>
# **webApiMobileIntegrationProvisioningPartnerKeyPost**
> webApiMobileIntegrationProvisioningPartnerKeyPost(opts)

Provision - Persist MSSP partner key

Persists MSSP partner key - client ID and secret - for future customer provisioning.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21ProvisioningSchemasPartnerKeyRequestWrapper() // V21ProvisioningSchemasPartnerKeyRequestWrapper | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationProvisioningPartnerKeyPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ProvisioningSchemasPartnerKeyRequestWrapper**](V21ProvisioningSchemasPartnerKeyRequestWrapper.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationProvisioningPartnerKeyPut"></a>
# **webApiMobileIntegrationProvisioningPartnerKeyPut**
> webApiMobileIntegrationProvisioningPartnerKeyPut(opts)

Provision - Update MSSP partner key

Updates MSSP partner key - client ID and secret - for future customer provisioning.

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21ProvisioningSchemasPartnerKeyRequestWrapper() // V21ProvisioningSchemasPartnerKeyRequestWrapper | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationProvisioningPartnerKeyPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ProvisioningSchemasPartnerKeyRequestWrapper**](V21ProvisioningSchemasPartnerKeyRequestWrapper.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationProvisioningPartnerKeyclientIdDelete"></a>
# **webApiMobileIntegrationProvisioningPartnerKeyclientIdDelete**
> webApiMobileIntegrationProvisioningPartnerKeyclientIdDelete(clientId, opts)

Deletes MSSP partner key by client ID

Provision - Delete MSSP partner key

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var clientId = "clientId_example"; // String | Client id

var opts = { 
  'body': new S1MgmtApi.V21ProvisioningSchemasDeletePartnerKeyRequestSchema() // V21ProvisioningSchemasDeletePartnerKeyRequestSchema | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationProvisioningPartnerKeyclientIdDelete(clientId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Client id | 
 **body** | [**V21ProvisioningSchemasDeletePartnerKeyRequestSchema**](V21ProvisioningSchemasDeletePartnerKeyRequestSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationProvisioningTenantGet"></a>
# **webApiMobileIntegrationProvisioningTenantGet**
> V21ProvisioningSchemasTenantWithUsersResponse200 webApiMobileIntegrationProvisioningTenantGet(opts)

Provision - Get tenant with users

Gets tenant with users by scope

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'groupIds': ["groupIds_example"], // [String] | List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'tenant': true, // Boolean | Indicates a tenant scope request
  'siteIds': ["siteIds_example"], // [String] | List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\".
  'accountIds': ["accountIds_example"] // [String] | List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationProvisioningTenantGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupIds** | [**[String]**](String.md)| List of Group IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **tenant** | **Boolean**| Indicates a tenant scope request | [optional] 
 **siteIds** | [**[String]**](String.md)| List of Site IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 
 **accountIds** | [**[String]**](String.md)| List of Account IDs to filter by. Example: \"225494730938493804,225494730938493915\". | [optional] 

### Return type

[**V21ProvisioningSchemasTenantWithUsersResponse200**](V21ProvisioningSchemasTenantWithUsersResponse200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationProvisioningTenantPost"></a>
# **webApiMobileIntegrationProvisioningTenantPost**
> webApiMobileIntegrationProvisioningTenantPost(opts)

Provision - Provision tenant with admin user

Provision a new tenant and create an admin user for the tenant account

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21ProvisioningSchemasProvisionWithUserRequestWrapper() // V21ProvisioningSchemasProvisionWithUserRequestWrapper | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationProvisioningTenantPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21ProvisioningSchemasProvisionWithUserRequestWrapper**](V21ProvisioningSchemasProvisionWithUserRequestWrapper.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationSitessiteIdPolicyDelete"></a>
# **webApiMobileIntegrationSitessiteIdPolicyDelete**
> webApiMobileIntegrationSitessiteIdPolicyDelete(siteId)

Policy - Delete the policy for the Site given by ID

Policy - Delete the policy for the Site given by ID

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var siteId = "siteId_example"; // String | Site id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationSitessiteIdPolicyDelete(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site id | 

### Return type

null (empty response body)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationSitessiteIdPolicyGet"></a>
# **webApiMobileIntegrationSitessiteIdPolicyGet**
> V21PolicySchemasPolicy200 webApiMobileIntegrationSitessiteIdPolicyGet(siteId)

Policy - Get the policy for the Site given by ID

Policy - Get the policy for the Site given by ID

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var siteId = "siteId_example"; // String | Site id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationSitessiteIdPolicyGet(siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site id | 

### Return type

[**V21PolicySchemasPolicy200**](V21PolicySchemasPolicy200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationSitessiteIdPolicyPut"></a>
# **webApiMobileIntegrationSitessiteIdPolicyPut**
> V21PolicySchemasPolicy200 webApiMobileIntegrationSitessiteIdPolicyPut(siteId, opts)

Policy - Update the policy for the Site given by ID

Policy - Update the policy for the Site given by ID

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var siteId = "siteId_example"; // String | Site id

var opts = { 
  'body': new S1MgmtApi.V21PolicySchemasPolicyRequest() // V21PolicySchemasPolicyRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationSitessiteIdPolicyPut(siteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site id | 
 **body** | [**V21PolicySchemasPolicyRequest**](V21PolicySchemasPolicyRequest.md)|  | [optional] 

### Return type

[**V21PolicySchemasPolicy200**](V21PolicySchemasPolicy200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="webApiMobileIntegrationTenantPolicyDelete"></a>
# **webApiMobileIntegrationTenantPolicyDelete**
> webApiMobileIntegrationTenantPolicyDelete()

Policy - Delete global mobile policy

Policy - Delete global mobile policy

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.webApiMobileIntegrationTenantPolicyDelete(callback);
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

<a name="webApiMobileIntegrationTenantPolicyGet"></a>
# **webApiMobileIntegrationTenantPolicyGet**
> V21PolicySchemasPolicy200 webApiMobileIntegrationTenantPolicyGet()

Policy - Get global mobile policy

Policy - Get global mobile policy

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationTenantPolicyGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V21PolicySchemasPolicy200**](V21PolicySchemasPolicy200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="webApiMobileIntegrationTenantPolicyPut"></a>
# **webApiMobileIntegrationTenantPolicyPut**
> V21PolicySchemasPolicy200 webApiMobileIntegrationTenantPolicyPut(opts)

Policy - Update global mobile policy

Policy - Update global mobile policy

### Example
```javascript
var S1MgmtApi = require('s1_mgmt_api');
var defaultClient = S1MgmtApi.ApiClient.instance;

// Configure API key authorization: ApiTokenAuth
var ApiTokenAuth = defaultClient.authentications['ApiTokenAuth'];
ApiTokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiTokenAuth.apiKeyPrefix = 'Token';

var apiInstance = new S1MgmtApi.MobileIntegrationApi();

var opts = { 
  'body': new S1MgmtApi.V21PolicySchemasPolicyRequest() // V21PolicySchemasPolicyRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.webApiMobileIntegrationTenantPolicyPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V21PolicySchemasPolicyRequest**](V21PolicySchemasPolicyRequest.md)|  | [optional] 

### Return type

[**V21PolicySchemasPolicy200**](V21PolicySchemasPolicy200.md)

### Authorization

[ApiTokenAuth](../README.md#ApiTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

