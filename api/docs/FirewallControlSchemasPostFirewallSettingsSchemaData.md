# S1MgmtApi.FirewallControlSchemasPostFirewallSettingsSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selectedTags** | **[String]** | Selected tags | [optional] 
**inheritAllFirewallRules** | **Boolean** | Inherit all the rules and tags from the parent scope. Expands on 'inherits' value. | [optional] 
**reportBlocked** | **Boolean** | Agent should report blocked events | [optional] 
**locationAware** | **Boolean** | Firewall control supports location awareness for the scope | [optional] 
**enabled** | **Boolean** | Firewall control enabled for the scope | [optional] 
**inherits** | **Boolean** | True if rules are decoupled from parent rules | [optional] 
**inheritSettings** | **Boolean** | Inherit firewall settings from parent scope | [optional] 
**inheritedFrom** | **String** | If null it means it is own policy else it tells the ancestor for the policy.For groups options are null/Site/Global, for site options are null/Global. | [optional] 


