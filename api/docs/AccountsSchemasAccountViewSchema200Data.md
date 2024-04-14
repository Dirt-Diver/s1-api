# S1MgmtApi.AccountsSchemasAccountViewSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numberOfSites** | **Number** | Total number of Sites in this Account | [optional] 
**coreSites** | **Number** | [DEPRECATED] Number of Sites in suite Core | [optional] 
**completeSites** | **Number** | [DEPRECATED] Number of Sites in suite Complete | [optional] 
**updatedAt** | **Date** | Timestamp of last update | [optional] 
**totalComplete** | **Number** | [DEPRECATED] Total Number of Complete licenses | [optional] 
**expiration** | **Date** | Expiration | [optional] 
**isDefault** | **Boolean** | Is default | [optional] 
**controlSites** | **Number** | [DEPRECATED] Number of Sites in suite Control | [optional] 
**agentsInCoreSku** | **Number** | [DEPRECATED] Number of Agents connected to a Core site | [optional] 
**state** | **String** | Account state | [optional] 
**id** | **String** | Account ID | [optional] 
**creatorId** | **String** | The ID of the user that created the group | [optional] 
**accountType** | **String** | Account type | [optional] 
**unlimitedComplete** | **Boolean** | [DEPRECATED] True if Complete licenses count is unlimited | [optional] 
**salesforceId** | **String** |  | [optional] 
**unlimitedControl** | **Boolean** | [DEPRECATED] True if Control licenses count is unlimited | [optional] 
**totalControl** | **Number** | [DEPRECATED] Total Number of Control licenses | [optional] 
**skus** | [**[AccountsSchemasAccountViewSchemaMany200Skus]**](AccountsSchemasAccountViewSchemaMany200Skus.md) | [DEPRECATED] The list of SKUs for the Account. | [optional] 
**totalLicenses** | **Number** | The total number of licenses on all Surfaces for all Bundles. | [optional] 
**usageType** | **String** | Usage type | [optional] 
**totalCore** | **Number** | [DEPRECATED] Total Number of Core licenses | [optional] 
**billingMode** | **String** | Billing mode | [optional] 
**agentsInCompleteSku** | **Number** | [DEPRECATED] Number of Agents connected to a Complete site | [optional] 
**externalId** | **String** | ID of CRM external system | [optional] 
**unlimitedExpiration** | **Boolean** | The Account does not expire | [optional] 
**licenses** | [**AccountsSchemasAccountViewSchemaMany200Licenses**](AccountsSchemasAccountViewSchemaMany200Licenses.md) |  | [optional] 
**activeAgents** | **Number** | Total Agents in the Account | [optional] 
**agentsInControlSku** | **Number** | [DEPRECATED] Number of Agents connected to a Control site | [optional] 
**name** | **String** | Name | [optional] 
**createdAt** | **Date** | Timestamp of Account creation | [optional] 
**creator** | **String** | The user that created the group | [optional] 
**unlimitedCore** | **Boolean** | [DEPRECATED] True if Core licenses count is unlimited | [optional] 


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




