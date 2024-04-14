# S1MgmtApi.V21CloudFunnelSchemasOnboardingPostSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disableStream** | **Boolean** | disable events stream | [optional] 
**isInheriting** | **Boolean** | Is inheriting global setting | [optional] 
**accountId** | **String** | Account id | [optional] 
**useAssumeRole** | **Boolean** | If set to true, activates the AWS AssumeRole functionality for accessing S3 buckets or other associated resources. Only applicable if cloud_provider is s3. | [optional] 
**cloudProvider** | **String** | Cloud provider, default is aws | [optional] 
**desiredFields** | **[String]** | List of desired fields to be included in the output. If not specified, all fields are included. | [optional] 
**roleToAssume** | **String** | The aws role to assume when using assume role functionality.Only applicable if cloud_provider is s3. | [optional] 
**query** | **String** | Syql query to validate | [optional] 
**bucketUrl** | **String** | bucket url | [optional] 
**siteIds** | **[String]** | Site ids | [optional] 


