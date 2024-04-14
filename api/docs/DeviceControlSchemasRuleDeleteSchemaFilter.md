# S1MgmtApi.DeviceControlSchemasRuleDeleteSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAtGt** | **Date** | Return device rules created after this timestamp. | [optional] 
**versions** | **[String]** | Return device rules with the filtered versions. | [optional] 
**uids** | **[String]** | Return device rules with the filtered uId. | [optional] 
**actions** | **[String]** | Return device rules with the filtered action. | [optional] 
**deviceNames** | **[String]** | Return device rules with the filtered device names. | [optional] 
**interfaces** | **[String]** | Return device rules with the filtered interface. | [optional] 
**deviceClasses** | **[String]** | Return device rules with the filtered device class. | [optional] 
**query** | **String** | A free-text search term, will match applicable attributes. | [optional] 
**ids** | **[String]** | List of ids to filter by | [optional] 
**createdAtLt** | **Date** | Return device rules created before this timestamp. | [optional] 
**createdAtLte** | **Date** | Return device rules created before or at this timestamp. | [optional] 
**accessPermissions** | **[String]** | Access permission in | [optional] 
**scopes** | **[String]** | Return only device rules in this scope | [optional] 
**statuses** | **[String]** | Return device rules with the filtered status. | [optional] 
**deviceIds** | **[String]** | Return device rules with the filtered device id. | [optional] 
**productIds** | **[String]** | Return device rules with the filtered product id. | [optional] 
**ruleName** | **String** | Return device rules with the filtered rule name. | [optional] 
**bluetoothAddresses** | **[String]** | Return device rules with the filtered bluetooth addresses. | [optional] 
**vendorIds** | **[String]** | Return device rules with the filtered vendor id. | [optional] 
**tenant** | **Boolean** | Indicates a tenant scope request | [optional] 
**createdAtBetween** | **String** | Return device rules created within this range (inclusive) | [optional] 
**groupIds** | **[String]** | List of Group IDs to filter by | [optional] 
**gattServices** | **[String]** | Return device rules with the filtered GATT services. | [optional] 
**createdAtGte** | **Date** | Return device rules created after or at this timestamp. | [optional] 
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**deviceInformationServiceInfoKeys** | **[String]** | Return device rules with the filtered device information service info keys. | [optional] 
**manufacturerNames** | **[String]** | Return device rules with the filtered manufacturer names. | [optional] 
**serviceClasses** | **[String]** | Return device rules with the filtered service class. | [optional] 
**minorClasses** | **[String]** | Return device rules with the filtered minor classes. | [optional] 


<a name="[ActionsEnum]"></a>
## Enum: [ActionsEnum]


* `allow` (value: `"Allow"`)

* `block` (value: `"Block"`)




<a name="[InterfacesEnum]"></a>
## Enum: [InterfacesEnum]


* `USB` (value: `"USB"`)

* `bluetooth` (value: `"Bluetooth"`)

* `thunderbolt` (value: `"Thunderbolt"`)




<a name="[AccessPermissionsEnum]"></a>
## Enum: [AccessPermissionsEnum]


* `readOnly` (value: `"Read-Only"`)

* `readWrite` (value: `"Read-Write"`)

* `notApplicable` (value: `"Not-Applicable"`)




<a name="[ScopesEnum]"></a>
## Enum: [ScopesEnum]


* `site` (value: `"site"`)

* `group` (value: `"group"`)

* `account` (value: `"account"`)

* `global` (value: `"global"`)




<a name="[StatusesEnum]"></a>
## Enum: [StatusesEnum]


* `enabled` (value: `"Enabled"`)

* `disabled` (value: `"Disabled"`)




