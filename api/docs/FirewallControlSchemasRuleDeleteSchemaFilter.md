# S1MgmtApi.FirewallControlSchemasRuleDeleteSchemaFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAtGt** | **Date** | Return firewall rules created after this timestamp. | [optional] 
**nameContains** | **[String]** | Free-text filter by the Rule name (supports multiple values) | [optional] 
**serviceContains** | **[String]** | Free-text filter by service (supports multiple values) | [optional] 
**actions** | **[String]** | Return firewall rules with the filtered action. | [optional] 
**tagIds** | **[String]** | Filter by associated tags | [optional] 
**directions** | **[String]** | Return firewall rules with the filtered directions. | [optional] 
**protocols** | **[String]** | Return firewall rules with the filtered protocols. | [optional] 
**ids** | **[String]** | List of ids to filter by | [optional] 
**query** | **String** | Free text search on name, tag, application, protocol | [optional] 
**createdAtLt** | **Date** | Return firewall rules created before this timestamp. | [optional] 
**osTypes** | **[String]** | Return firewall rules with the filtered os_type. | [optional] 
**createdAtLte** | **Date** | Return firewall rules created before or at this timestamp. | [optional] 
**scopes** | **[String]** | Return only firewall rules in this scope | [optional] 
**statuses** | **[String]** | Return firewall rules with the filtered status. | [optional] 
**protocolContains** | **[String]** | Free-text filter by protocol (supports multiple values) | [optional] 
**applicationContains** | **[String]** | Free-text filter by application (supports multiple values) | [optional] 
**locationIds** | **[String]** | Filter by associated locations | [optional] 
**tenant** | **Boolean** | Indicates a tenant scope request | [optional] 
**createdAtBetween** | **String** | Return firewall rules created within this range (inclusive) | [optional] 
**groupIds** | **[String]** | List of Group IDs to filter by | [optional] 
**createdAtGte** | **Date** | Return firewall rules created after or at this timestamp. | [optional] 
**siteIds** | **[String]** | List of Site IDs to filter by | [optional] 
**accountIds** | **[String]** | List of Account IDs to filter by | [optional] 
**name** | **String** | Return firewall rules with the filtered name. | [optional] 
**tagNameContains** | **[String]** | Free-text filter by the Tag name (supports multiple values) | [optional] 
**applications** | **[String]** | Return firewall rules with the filtered firewall class. | [optional] 


<a name="[ActionsEnum]"></a>
## Enum: [ActionsEnum]


* `allow` (value: `"Allow"`)

* `block` (value: `"Block"`)




<a name="[DirectionsEnum]"></a>
## Enum: [DirectionsEnum]


* `any` (value: `"any"`)

* `inbound` (value: `"inbound"`)

* `outbound` (value: `"outbound"`)




<a name="[OsTypesEnum]"></a>
## Enum: [OsTypesEnum]


* `windows` (value: `"windows"`)

* `macos` (value: `"macos"`)

* `linux` (value: `"linux"`)

* `windowsLegacy` (value: `"windows_legacy"`)




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




