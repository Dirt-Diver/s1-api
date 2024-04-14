# S1MgmtApi.UsersSchemasLoginOutputSchema200Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **String** | Generated authentication token | 
**csrf** | **String** | Generated csrf token | [optional] 
**status** | **String** | User verification status | [optional] 
**twoFaMethod** | **String** | Two-factor authentication method (if enabled) | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `verified` (value: `"verified"`)

* `temporary` (value: `"temporary"`)

* `pending` (value: `"pending"`)

* `incorrect` (value: `"incorrect"`)

* `expired` (value: `"expired"`)

* `noPermissions` (value: `"no_permissions"`)

* `temporaryTokenIsOlderThanPassword` (value: `"temporary_token_is_older_than_password"`)

* `tooManySessions` (value: `"too_many_sessions"`)

* `sessionHijacking` (value: `"session_hijacking"`)

* `elevatedSessionRequired` (value: `"elevated_session_required"`)

* `elevatedSessionSetupRequired` (value: `"elevated_session_setup_required"`)

* `twoFaEnrollmentExpired` (value: `"two_fa_enrollment_expired"`)

* `twoFaNotEnrolled` (value: `"two_fa_not_enrolled"`)




<a name="TwoFaMethodEnum"></a>
## Enum: TwoFaMethodEnum


* `sms` (value: `"sms"`)

* `application` (value: `"application"`)




