# S1MgmtApi.FirewallControlSchemasPutFirewallSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description | [optional] 
**action** | **String** | Defines if agent shall Block or Allow use of firewalls which matches the rule parameters. | [optional] 
**name** | **String** | The name of the firewall rule. | [optional] 
**remotePort** | [**FirewallControlSchemasPostFirewallSchemaDataRemotePort**](FirewallControlSchemasPostFirewallSchemaDataRemotePort.md) |  | [optional] 
**protocol** | **String** | The protocol | [optional] 
**osType** | **String** | [DEPRECATED] Please use os_types since multiple os types are supported.This field will return the first os_type, not necessarily the only one. | [optional] 
**localPort** | [**FirewallControlSchemasPostFirewallSchemaDataLocalPort**](FirewallControlSchemasPostFirewallSchemaDataLocalPort.md) |  | [optional] 
**remoteHost** | [**FirewallControlSchemasPostFirewallSchemaDataRemoteHost**](FirewallControlSchemasPostFirewallSchemaDataRemoteHost.md) |  | [optional] 
**tagIds** | **[String]** | Tag ids | [optional] 
**osTypes** | **[String]** | Os types | [optional] 
**localHost** | [**FirewallControlSchemasPostFirewallSchemaDataLocalHost**](FirewallControlSchemasPostFirewallSchemaDataLocalHost.md) |  | [optional] 
**direction** | **String** | Defines the Direction of the Firewall rule. | [optional] 
**status** | **String** | Defines if rule is Enabled or Disabled | [optional] 
**application** | [**FirewallControlSchemasPostFirewallSchemaDataApplication**](FirewallControlSchemasPostFirewallSchemaDataApplication.md) |  | [optional] 
**location** | [**FirewallControlSchemasPostFirewallSchemaDataLocation**](FirewallControlSchemasPostFirewallSchemaDataLocation.md) |  | [optional] 
**tag** | **String** | [DEPRECATED] Free text to describe the rule. Please use description instead. | [optional] 
**remoteHosts** | [**[FirewallControlSchemasFirewallSchemaMany200RemoteHosts]**](FirewallControlSchemasFirewallSchemaMany200RemoteHosts.md) | List of remote hosts, each structured with a type and a set of values | [optional] 


<a name="ActionEnum"></a>
## Enum: ActionEnum


* `allow` (value: `"Allow"`)

* `block` (value: `"Block"`)




<a name="OsTypeEnum"></a>
## Enum: OsTypeEnum


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="[OsTypesEnum]"></a>
## Enum: [OsTypesEnum]


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `any` (value: `"any"`)

* `inbound` (value: `"inbound"`)

* `outbound` (value: `"outbound"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `enabled` (value: `"Enabled"`)

* `disabled` (value: `"Disabled"`)




