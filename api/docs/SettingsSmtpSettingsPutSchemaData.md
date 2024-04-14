# S1MgmtApi.SettingsSmtpSettingsPutSchemaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **String** | SMTP service username | [optional] 
**host** | **String** | SMTP service host | [optional] 
**port** | **Number** | SMTP service port | [optional] 
**noReplyEmail** | **String** | SMTP service no-reply-email | [optional] 
**encryption** | **String** | SMTP service encryption type | [optional] 
**enabled** | **Boolean** | SMTP service is enabled | [optional] 
**inherits** | **Boolean** | True if site inherits SMTP settings from global scope, False if using custom settings. | [optional] 
**password** | **String** | SMTP service password. Required when creating new SMTP settings or updating host and/or port of the existing one. | [optional] 


<a name="EncryptionEnum"></a>
## Enum: EncryptionEnum


* `ssl` (value: `"ssl"`)

* `tls` (value: `"tls"`)




