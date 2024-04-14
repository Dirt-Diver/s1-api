# S1MgmtApi.V21CloudFunnelSchemasBucketValidationSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**useAssumeRole** | **Boolean** | If set to true, activates the AWS AssumeRole functionality for accessing S3 buckets or other associated resources. Only applicable if cloud_provider is s3. | [optional] 
**accountId** | **String** | Account id | [optional] 
**cloudProvider** | **String** | Cloud provider, default is aws | [optional] 
**siteId** | **String** | Site id | [optional] 
**roleToAssume** | **String** | The aws role to assume when using assume role functionality.Only applicable if cloud_provider is s3. | [optional] 
**bucketUrl** | **String** | Validate bucket permissions | 


