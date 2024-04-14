# S1MgmtApi.V21CloudFunnelSchemasOnboardingResponseSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**useAssumeRole** | **Boolean** | If set to true, activates the AWS AssumeRole functionality for accessing S3 buckets or other associated resources. Only applicable if cloud_provider is s3. | [optional] 
**isInheriting** | **Boolean** | Is inheriting global setting | [optional] 
**globalOnboardingExists** | **Boolean** | Is global onboarding exists in table | [optional] 
**cloudProvider** | **String** | Cloud provider, default is aws | [optional] 
**desiredFields** | **[String]** | List of desired fields to be included in the output. If not specified, all fields are included. | [optional] 
**assumeRoleExternalId** | **String** | The AWS assume role external id. | [optional] 
**accountOnboardingExists** | **Boolean** | For site scope, is account onboarding exists | [optional] 
**roleToAssume** | **String** | The AWS role to assume when using assume role functionality. Only applicable if cloud_provider is s3. | [optional] 
**error** | **String** | Error message in case the bucket permissions is invalid | [optional] 
**disableStream** | **Boolean** | disable events stream | 
**bucketUrl** | **String** | Bucket url | 
**query** | **String** | Syql query to validate | [optional] 
**id** | **String** | log-archive-rule id, default for accounts: cloud-funnel | [optional] 


