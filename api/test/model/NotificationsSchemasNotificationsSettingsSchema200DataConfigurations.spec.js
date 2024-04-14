/*
 * S1 MGMT API
 * SentinelOne Management Console API specification.
 *
 * OpenAPI spec version: 2.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.39
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.S1MgmtApi);
  }
}(this, function(expect, S1MgmtApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('NotificationsSchemasNotificationsSettingsSchema200DataConfigurations', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.NotificationsSchemasNotificationsSettingsSchema200DataConfigurations();
      });

      it('should create an instance of NotificationsSchemasNotificationsSettingsSchema200DataConfigurations', function() {
        // TODO: update the code to test NotificationsSchemasNotificationsSettingsSchema200DataConfigurations
        expect(instance).to.be.a(S1MgmtApi.NotificationsSchemasNotificationsSettingsSchema200DataConfigurations);
      });

      it('should have the property sms (base name: "sms")', function() {
        // TODO: update the code to test the property sms
        expect(instance).to.have.property('sms');
        // expect(instance.sms).to.be(expectedValueLiteral);
      });

      it('should have the property syslog (base name: "syslog")', function() {
        // TODO: update the code to test the property syslog
        expect(instance).to.have.property('syslog');
        // expect(instance.syslog).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

    });
  });

}));