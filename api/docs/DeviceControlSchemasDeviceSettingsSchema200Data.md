# S1MgmtApi.DeviceControlSchemasDeviceSettingsSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportBlocked** | **Boolean** | Agent should report blocked events | [optional] 
**disableRfcomm** | **Boolean** | Disable RFCOMM for Bluetooth devices | [optional] 
**disallowAccessPermissionControl** | **Boolean** | Disallow access permission control (i.e. treat Read-Only rules as Read-Write) | [optional] 
**reportReadOnly** | **Boolean** | Agent should report 'connected as read-only' events | [optional] 
**enabled** | **Boolean** | Device control enabled for the scope | [optional] 
**reportApproved** | **Boolean** | Agent should report connected/disconnected events | [optional] 
**inherits** | **Boolean** | True if rules are decoupled from parent rules | [optional] 
**disableBleCommunication** | **Boolean** | Disable Bluetooth LE Communication | [optional] 
**inheritedFrom** | **String** | If null it means it is own policy else it will be site or global to state which policy is being inherited. | [optional] 


