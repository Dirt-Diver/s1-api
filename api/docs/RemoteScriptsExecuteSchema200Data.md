# S1MgmtApi.RemoteScriptsExecuteSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parentTaskId** | **String** | The parent task id of the script execution task, null in case of pending execution | [optional] 
**affected** | **Number** | Number of entities affected by the requested operation | [optional] 
**pendingExecutionId** | **String** | ID of created pending execution, present only if pending flag is true | [optional] 
**pending** | **Boolean** | Flag indicating if requested script execution requires approval and is created as pending execution | [optional] 


