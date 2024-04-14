# S1MgmtApi.AccountsSchemasPostAccountSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **String** | ID of CRM external system | [optional] 
**name** | **String** | Name | 
**unlimitedExpiration** | **Boolean** | If expiration is not unlimited, enter the expiration date  | [optional] [default to false]
**licenses** | [**AccountsSchemasPostAccountSchemaDataLicenses**](AccountsSchemasPostAccountSchemaDataLicenses.md) |  | [optional] 
**accountType** | **String** | Account type: Trial or Paid | [optional] [default to 'Paid']
**policy** | [**AccountsSchemasPostAccountSchemaDataPolicy**](AccountsSchemasPostAccountSchemaDataPolicy.md) |  | [optional] 
**expiration** | **Date** | Expiration | [optional] 
**skus** | [**[AccountsSchemasPostAccountSchemaDataSkus]**](AccountsSchemasPostAccountSchemaDataSkus.md) | [DEPRECATED] The list of allowed SKUs for the Account | [optional] 
**usageType** | **String** | Usage type | [optional] 
**inherits** | **Boolean** | True if the policy is inherited from Global, False if the Account has its own edited policy | [optional] 
**billingMode** | **String** | Billing mode | [optional] 


<a name="AccountTypeEnum"></a>
## Enum: AccountTypeEnum


* `trial` (value: `"Trial"`)

* `paid` (value: `"Paid"`)




<a name="UsageTypeEnum"></a>
## Enum: UsageTypeEnum


* `customer` (value: `"customer"`)

* `mssp` (value: `"mssp"`)




<a name="BillingModeEnum"></a>
## Enum: BillingModeEnum


* `subscription` (value: `"subscription"`)

* `consumption` (value: `"consumption"`)




