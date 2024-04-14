# S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeFrame** | **String** | Time frame that the query was performed on, when omitted defaults to \"Last 48 Hours\" | [optional] [default to 'Last 48 Hours']
**queryType** | **[String]** | Query Search Type - only one is allowed | [optional] 
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**limit** | **Number** | Limit number of returned items (1-100000) | [optional] 
**isVerbose** | **Boolean** | Show all fields or just priority fields | [optional] 
**query** | **String** | Events matching the query search term will be returned | 
**fromDate** | **Date** | Events created after this timestamp | 
**toDate** | **Date** | Events created before or at this timestamp | 


<a name="[QueryTypeEnum]"></a>
## Enum: [QueryTypeEnum]


* `events` (value: `"events"`)

* `processState` (value: `"processState"`)




