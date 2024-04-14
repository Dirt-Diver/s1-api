# S1MgmtApi.AgentsSchemasAgentFetchFirewallRulesActionSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **String** | Desired firewall configuration format. Use \"native\" to get configuration file in native format. | [optional] 
**state** | **String** | Desired firewall configuration state. Use \"initial\" to get the firewall configuration that existed before Agent installation. (Note: \"initial\" requires native format). | [optional] 


<a name="FormatEnum"></a>
## Enum: FormatEnum


* `_native` (value: `"native"`)

* `asset` (value: `"asset"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `initial` (value: `"initial"`)

* `current` (value: `"current"`)




