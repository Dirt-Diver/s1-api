# S1MgmtApi.V21SchemasIOCDeleteSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**descriptionContains** | **[String]** | Free-text filter by the description of the indicator (supports multiple values) | [optional] 
**uploadTimeGt** | **Date** | The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB greater than | [optional] 
**updatedAtGt** | **Date** | The time at which the indicator was last updated in SentinelOne DB  greater than | [optional] 
**categoryIn** | **String** | The categories of the Threat Intelligence indicator, e.g.  the malware type associated with the IOC | [optional] 
**updatedAtGte** | **Date** | The time at which the indicator was last updated in SentinelOne DB  greater or equal than | [optional] 
**creatorContains** | **[String]** | Free-text filter by the user uploaded the Threat Intelligence indicator (supports multiple values) | [optional] 
**tenant** | **Boolean** | Indicates a tenant scope request | [optional] 
**creationTimeGte** | **Date** | Creation Time as set by the user greater or equal than | [optional] 
**type** | **String** | The type of the Threat Intelligence indicator | [optional] 
**creationTimeGt** | **Date** | Creation Time as set by the user greater than | [optional] 
**creationTimeLte** | **Date** | Creation Time as set by the user lesser or equal than | [optional] 
**creationTimeLt** | **Date** | Creation Time as set by the user lesser than | [optional] 
**batchId** | **String** | Unique ID of the uploaded indicators batch | [optional] 
**externalId** | **String** | The unique identifier of the indicator as provided by the Threat Intelligence source | [optional] 
**updatedAtLt** | **Date** | The time at which the indicator was last updated in SentinelOne DB  lesser than | [optional] 
**updatedAtLte** | **Date** | The time at which the indicator was last updated in SentinelOne DB  lesser or equal than | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**source** | **[String]** | List of the sources of the identified Threat Intelligence indicator | [optional] 
**value** | **String** | The value of the Threat Intelligence indicator | [optional] 
**uploadTimeLte** | **Date** | The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB lesser or equal than | [optional] 
**uuids** | **[String]** | A list of unique Ids of the parent process of the indicator of compromise | [optional] 
**nameContains** | **[String]** | Free-text filter by the Indicator name (supports multiple values) | [optional] 
**uploadTimeLt** | **Date** | The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB lesser than | [optional] 
**uploadTimeGte** | **Date** | The time at which the Threat Intelligence indicator was uploaded to SentinelOne DB greater or equal than | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `DNS` (value: `"DNS"`)

* `iPV4` (value: `"IPV4"`)

* `iPV6` (value: `"IPV6"`)

* `mD5` (value: `"MD5"`)

* `sHA1` (value: `"SHA1"`)

* `sHA256` (value: `"SHA256"`)

* `URL` (value: `"URL"`)




