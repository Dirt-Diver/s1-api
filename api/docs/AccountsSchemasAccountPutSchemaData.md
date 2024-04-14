# S1MgmtApi.AccountsSchemasAccountPutSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **String** | ID of CRM external system | [optional] 
**name** | **String** | Name | [optional] [default to 'null']
**unlimitedExpiration** | **Boolean** | If expiration is not limited, enter the expiration date and time yyyy-mm-ddThh:mm:ss | [optional] 
**licenses** | [**AccountsSchemasAccountPutSchemaDataLicenses**](AccountsSchemasAccountPutSchemaDataLicenses.md) |  | [optional] 
**accountType** | **String** | Account type | [optional] [default to 'null']
**policy** | [**SitesSitePutSchemaDataPolicy**](SitesSitePutSchemaDataPolicy.md) |  | [optional] 
**salesforceId** | **String** |  | [optional] 
**expiration** | **Date** | Expiration | [optional] 
**skus** | [**[AccountsSchemasPostAccountSchemaDataSkus]**](AccountsSchemasPostAccountSchemaDataSkus.md) | [DEPRECATED] Use licenses instead | [optional] 
**usageType** | **String** | Usage type | [optional] 
**inherits** | **Boolean** | True if the policy is inherited from Global, False if the Account has its own edited policy | [optional] [default to false]
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




