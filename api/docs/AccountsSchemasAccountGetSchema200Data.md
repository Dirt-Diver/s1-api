# S1MgmtApi.AccountsSchemasAccountGetSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updatedAt** | **Date** | Timestamp of last update | [optional] 
**expiration** | **Date** | Expiration | [optional] 
**isDefault** | **Boolean** | Is default | [optional] 
**state** | **String** | Account state | [optional] 
**id** | **String** | Account ID | [optional] 
**creatorId** | **String** | The ID of the user that created the group | [optional] 
**accountType** | **String** | Account type | [optional] 
**salesforceId** | **String** |  | [optional] 
**skus** | [**[AccountsSchemasAccountViewSchemaMany200Skus]**](AccountsSchemasAccountViewSchemaMany200Skus.md) | [DEPRECATED] The list of SKUs for the Account. | [optional] 
**totalLicenses** | **Number** | The total number of licenses on all Surfaces for all Bundles. | [optional] 
**usageType** | **String** | Usage type | [optional] 
**billingMode** | **String** | Billing mode | [optional] 
**externalId** | **String** | ID of CRM external system | [optional] 
**unlimitedExpiration** | **Object** | The Account does not expire | [optional] 
**licenses** | [**AccountsSchemasAccountViewSchemaMany200Licenses**](AccountsSchemasAccountViewSchemaMany200Licenses.md) |  | [optional] 
**activeAgents** | **Number** | Total Agents in the Account | [optional] 
**name** | **String** | Name | [optional] 
**createdAt** | **Date** | Timestamp of Account creation | [optional] 
**creator** | **String** | The user that created the group | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `active` (value: `"active"`)

* `expired` (value: `"expired"`)

* `deleted` (value: `"deleted"`)




<a name="UsageTypeEnum"></a>
## Enum: UsageTypeEnum


* `customer` (value: `"customer"`)

* `mssp` (value: `"mssp"`)




<a name="BillingModeEnum"></a>
## Enum: BillingModeEnum


* `subscription` (value: `"subscription"`)

* `consumption` (value: `"consumption"`)




