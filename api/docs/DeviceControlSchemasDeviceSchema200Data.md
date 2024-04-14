# S1MgmtApi.DeviceControlSchemasDeviceSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleType** | **String** | Defines a set of fields that are mandatory. | [optional] 
**scopeId** | **String** | The id representing a group or a site dependent on the scope | [optional] 
**updatedAt** | **Date** | Date of last update | [optional] 
**uid** | **String** | Relevant USB Mass storage devices only (Interface=USB, Class=mass storage). | [optional] 
**productId** | **String** | Product identifier. Unique for a specific product module, per vendor ID, Interface. | [optional] 
**vendorId** | **String** | Vendor identifier. Mandatory when rule type is vendor id or product id. | [optional] 
**deviceId** | **String** | The id of the physical device connected to the interface. | [optional] 
**id** | **String** | Rule ID | [optional] 
**deviceClassName** | **Object** | The Device Class name. Valid for all rule types. | [optional] 
**creatorId** | **String** | Id of the creating user | [optional] 
**deviceClass** | **String** | The Device Class key. Valid for all rule types. | [optional] 
**deviceInformationServiceInfoValue** | **String** | Device Information Service Info Value | [optional] 
**version** | **String** | Vendor identifier. Mandatory when rule type is vendor id or product id. | [optional] 
**ruleName** | **String** | The name of the device rule. | [optional] 
**scopeName** | **String** | Extended name of the scope | [optional] 
**scope** | **String** | Scope of the rule | [optional] 
**gattService** | **[String]** | GATT Service IDs | [optional] 
**action** | **String** | Defines if agent shall Block or Allow use of devices which matches the rule parameters. | [optional] 
**order** | **Number** | Position in the list of rules | [optional] 
**deviceName** | **String** | Device Name | [optional] 
**creator** | **String** | Full name of the creating user | [optional] 
**createdAt** | **Date** | Date of rule creation | [optional] 
**editable** | **Boolean** | True if the rule can be modified at this scope level | [optional] 
**_interface** | **String** | The physical bus type of the device. | [optional] 
**deviceInformationServiceInfoKey** | **String** | Device Information Service Info Key | [optional] 
**status** | **String** | Defines if rule is Enabled or Disabled. | [optional] 
**accessPermission** | **String** | Access permission | [optional] 
**bluetoothAddress** | **String** | Bluetooth Address | [optional] 
**manufacturerName** | **String** | Manufacturer Name | [optional] 
**minorClasses** | **[String]** | List of Bluetooth minor classes | [optional] 


<a name="RuleTypeEnum"></a>
## Enum: RuleTypeEnum


* `_class` (value: `"class"`)

* `productId` (value: `"productId"`)

* `vendorId` (value: `"vendorId"`)

* `deviceId` (value: `"deviceId"`)

* `uid` (value: `"uid"`)

* `hwIdentifiers` (value: `"hwIdentifiers"`)

* `bluetoothVersion` (value: `"bluetoothVersion"`)




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `site` (value: `"site"`)

* `group` (value: `"group"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)




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




