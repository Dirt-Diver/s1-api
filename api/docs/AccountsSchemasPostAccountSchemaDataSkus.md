# S1MgmtApi.AccountsSchemasPostAccountSchemaDataSkus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unlimited** | **Boolean** | True if this is an unlimited SKU. Total licenses will be ignored if unlimited is True | [optional] [default to false]
**totalLicenses** | **Number** | Number of licenses for this specific SKU. Applicable only if unlimited is False | [optional] [default to 0]
**type** | **String** | The suite of product features active for this Account | [optional] [default to 'Core']


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `core` (value: `"Core"`)

* `control` (value: `"Control"`)

* `complete` (value: `"Complete"`)




