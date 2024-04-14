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
    describe('SettingsSmtpSettingsPutSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.SettingsSmtpSettingsPutSchemaData();
      });

      it('should create an instance of SettingsSmtpSettingsPutSchemaData', function() {
        // TODO: update the code to test SettingsSmtpSettingsPutSchemaData
        expect(instance).to.be.a(S1MgmtApi.SettingsSmtpSettingsPutSchemaData);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

      it('should have the property host (base name: "host")', function() {
        // TODO: update the code to test the property host
        expect(instance).to.have.property('host');
        // expect(instance.host).to.be(expectedValueLiteral);
      });

      it('should have the property port (base name: "port")', function() {
        // TODO: update the code to test the property port
        expect(instance).to.have.property('port');
        // expect(instance.port).to.be(expectedValueLiteral);
      });

      it('should have the property noReplyEmail (base name: "noReplyEmail")', function() {
        // TODO: update the code to test the property noReplyEmail
        expect(instance).to.have.property('noReplyEmail');
        // expect(instance.noReplyEmail).to.be(expectedValueLiteral);
      });

      it('should have the property encryption (base name: "encryption")', function() {
        // TODO: update the code to test the property encryption
        expect(instance).to.have.property('encryption');
        // expect(instance.encryption).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property inherits (base name: "inherits")', function() {
        // TODO: update the code to test the property inherits
        expect(instance).to.have.property('inherits');
        // expect(instance.inherits).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

    });
  });

}));
