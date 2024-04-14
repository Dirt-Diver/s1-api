# S1MgmtApi.AccountsSchemasAccountViewSchemaMany200Skus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unlimited** | **Boolean** | True if this is an unlimited SKU. | [optional] 
**totalLicenses** | **Number** | Number of licenses for this specific SKU. Applicable only if unlimited is False | [optional] 
**agentsInSku** | **Number** | Total agents commissioned in this SKU. | [optional] 
**type** | **String** | The suite of product features active for this account | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `core` (value: `"Core"`)

* `control` (value: `"Control"`)

* `complete` (value: `"Complete"`)




