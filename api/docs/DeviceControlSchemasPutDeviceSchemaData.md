# S1MgmtApi.DeviceControlSchemasPutDeviceSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleType** | **String** | Rule type. Depending on the type, each rule requires different parameters. | [optional] 
**uid** | **String** | Relevant USB Mass storage devices only (Interface=USB, Class=mass storage). | [optional] 
**productId** | **String** | Product identifier. Unique for a specific product module, per vendor ID, Interface. | [optional] 
**serviceClass** | **String** | Relevant for Bluetooth devices only | [optional] 
**vendorId** | **String** | Vendor identifier. Mandatory when rule type is vendor id or product id. | [optional] 
**deviceId** | **String** | Physical device identifier. Mandatory when rule type is device id. | [optional] 
**deviceClass** | **String** | The Device Class | [optional] 
**deviceInformationServiceInfoValue** | **String** | Device Information Service Info Value | [optional] 
**version** | **String** | The version of the device. | [optional] 
**ruleName** | **String** | The name of the device rule. | [optional] 
**gattService** | **[String]** | Gatt service | [optional] 
**action** | **String** | Defines if agent shall Block or Allow use of devices which matches the rule parameters. | [optional] 
**deviceName** | **String** | Device Name | [optional] 
**deviceInformationServiceInfoKey** | **String** | Device Information Service Info Key | [optional] 
**_interface** | **String** | Defines the Physical bus type of the Device. | [optional] 
**status** | **String** | Defines if rule is Enabled or Disabled. | [optional] 
**accessPermission** | **String** | Access permission | [optional] 
**bluetoothAddress** | **String** | Bluetooth Address | [optional] 
**manufacturerName** | **String** | Manufacturer Name | [optional] 
**minorClasses** | **[String]** | Minor classes | [optional] 


<a name="RuleTypeEnum"></a>
## Enum: RuleTypeEnum


* `_class` (value: `"class"`)

* `productId` (value: `"productId"`)

* `vendorId` (value: `"vendorId"`)

* `deviceId` (value: `"deviceId"`)

* `uid` (value: `"uid"`)

* `hwIdentifiers` (value: `"hwIdentifiers"`)

* `bluetoothVersion` (value: `"bluetoothVersion"`)




<a name="ActionEnum"></a>
## Enum: ActionEnum


* `allow` (value: `"Allow"`)

* `block` (value: `"Block"`)




<a name="InterfaceEnum"></a>
## Enum: InterfaceEnum


* `USB` (value: `"USB"`)

* `bluetooth` (value: `"Bluetooth"`)

* `thunderbolt` (value: `"Thunderbolt"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `enabled` (value: `"Enabled"`)

* `disabled` (value: `"Disabled"`)




<a name="AccessPermissionEnum"></a>
## Enum: AccessPermissionEnum


* `readOnly` (value: `"Read-Only"`)

* `readWrite` (value: `"Read-Write"`)

* `notApplicable` (value: `"Not-Applicable"`)




