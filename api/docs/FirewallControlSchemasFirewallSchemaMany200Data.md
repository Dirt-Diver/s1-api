# S1MgmtApi.FirewallControlSchemasFirewallSchemaMany200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scopeId** | **String** | The group or site id depending on the scope. null if it is global. | [optional] 
**updatedAt** | **Date** | Date of last update | [optional] 
**productId** | **String** | Product identifier. Unique for a specific product module, per vendor ID, Interface. | [optional] 
**application** | **Object** | Application for the rule | [optional] 
**remotePort** | **Object** | Remote ports | [optional] 
**tagIds** | **[String]** | Tag ids | [optional] 
**id** | **String** | Rule ID | [optional] 
**tagNames** | **[String]** | Tag names | [optional] 
**remoteHost** | **Object** | [DEPRECATED] First remote host in the rule. Full list in remote_hosts | [optional] 
**creatorId** | **String** | Id of the creating user | [optional] 
**osTypes** | **[String]** | Os types | [optional] 
**localHost** | **Object** | Local host | [optional] 
**location** | [**FirewallControlSchemasFirewallSchemaMany200Location**](FirewallControlSchemasFirewallSchemaMany200Location.md) |  | [optional] 
**remoteHosts** | [**[FirewallControlSchemasFirewallSchemaMany200RemoteHosts]**](FirewallControlSchemasFirewallSchemaMany200RemoteHosts.md) | List of remote hosts | [optional] 
**protocol** | **String** | The protocol. | [optional] 
**localPort** | **Object** | Local ports | [optional] 
**ruleCategory** | **String** | Network quarantine rule or standard firewall rule | [optional] 
**scope** | **String** | Scope of the rule | [optional] 
**description** | **String** | Description | [optional] 
**action** | **String** | Defines if agent shall Block or Allow use of firewalls which matches the rule parameters. | [optional] 
**order** | **Number** | Position in the list of rules | [optional] 
**name** | **String** | The name of the firewall rule. | [optional] 
**createdAt** | **Date** | Date of rule creation | [optional] 
**editable** | **Boolean** | True if the rule can be modified at this scope level | [optional] 
**creator** | **String** | Full name of the creating user | [optional] 
**osType** | **String** | [DEPRECATED] Please use os_types since multiple os types are supported.This field will return the first os_type, not necessarily the only one. | [optional] 
**tags** | [**[FirewallControlSchemasFirewallSchemaMany200Tags]**](FirewallControlSchemasFirewallSchemaMany200Tags.md) | Tags | [optional] 
**direction** | **String** | Defines the Direction of the Firewall rule. | [optional] 
**status** | **String** | Defines if rule is Enabled or Disabled | [optional] 
**tag** | **String** | [DEPRECATED] Free text to describe the rule. Please use description instead. | [optional] 


<a name="[OsTypesEnum]"></a>
## Enum: [OsTypesEnum]


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




<a name="RuleCategoryEnum"></a>
## Enum: RuleCategoryEnum


* `firewall` (value: `"firewall"`)

* `networkQuarantine` (value: `"network_quarantine"`)




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




<a name="OsTypeEnum"></a>
## Enum: OsTypeEnum


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




