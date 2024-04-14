# S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200TargetProcessInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tgtFileCreatedAt** | **Date** | Date and Time of File Creation | [optional] 
**tgtProcSignedStatus** | **String** | Target Process Signed Status | [optional] 
**tgtFilePath** | **String** | Path and filename | [optional] 
**tgtFileHashSha256** | **String** | SHA256 Signature of File | [optional] 
**tgtFileModifiedAt** | **Date** | Date and time file was modified | [optional] 
**tgtProcName** | **String** | Target Process Name | [optional] 
**tgtProcImagePath** | **String** | Target Process Image path | [optional] 
**tgtFileHashSha1** | **String** | SHA1 Signature of File | [optional] 
**tgtFileIsSigned** | **String** | Is file signed | [optional] 
**tgtProcStorylineId** | **String** | Target Process StoryLine ID | [optional] 
**tgtProcPid** | **String** | Target Process ID (PID) | [optional] 
**tgtProcIntegrityLevel** | **String** | Integrity level of target process  | [optional] 
**tgtProcCmdLine** | **String** | Target Process Command Line | [optional] 
**tgtFileId** | **String** | Unique ID of file | [optional] 
**tgtProcUid** | **String** | Target Process Unique ID | [optional] 
**tgtProcessStartTime** | **Date** | Target Process Start Time | [optional] 
**tgtFileOldPath** | **String** | Old path before 'Rename' | [optional] 


<a name="TgtProcIntegrityLevelEnum"></a>
## Enum: TgtProcIntegrityLevelEnum


* `unknown` (value: `"unknown"`)

* `untrusted` (value: `"untrusted"`)

* `low` (value: `"low"`)

* `medium` (value: `"medium"`)

* `high` (value: `"high"`)

* `system` (value: `"system"`)




