# S1MgmtApi.V21ModelsCreatePolicyRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allEndpoints** | **Boolean** | Affected endpoints. 'true' if the policy is applied to all endpoints. If 'false', tags must be provided. | [optional] 
**description** | **String** | Policy description | [optional] 
**isActive** | **Boolean** | 'true' if policy is active, 'false' if policy is disabled | [optional] 
**isScheduled** | **Boolean** | In case of maintenance window selected, scheduling an upgrade for maintenance window | [optional] 
**name** | **String** | Policy name. This name will be used for creating tasks. Should be unique. | [optional] 
**osType** | **String** | OS type, one of 'linux', 'macos' or 'windows' | [optional] 
**_package** | [**V21ModelsPackage**](V21ModelsPackage.md) | The package to be sent to an Agent during the upgrade | [optional] 
**scopeId** | **String** | Scope ID | [optional] 
**scopeLevel** | **String** | Scope level, one of 'account', 'group', 'site' or 'tenant' | [optional] 
**tags** | **[String]** | Tags for policy application. If provided, AllEndpoints should be false. | [optional] 


