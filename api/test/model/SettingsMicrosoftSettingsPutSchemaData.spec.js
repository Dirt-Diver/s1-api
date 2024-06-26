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
    describe('SettingsMicrosoftSettingsPutSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.SettingsMicrosoftSettingsPutSchemaData();
      });

      it('should create an instance of SettingsMicrosoftSettingsPutSchemaData', function() {
        // TODO: update the code to test SettingsMicrosoftSettingsPutSchemaData
        expect(instance).to.be.a(S1MgmtApi.SettingsMicrosoftSettingsPutSchemaData);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property inherits (base name: "inherits")', function() {
        // TODO: update the code to test the property inherits
        expect(instance).to.have.property('inherits');
        // expect(instance.inherits).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property expiryDate (base name: "expiryDate")', function() {
        // TODO: update the code to test the property expiryDate
        expect(instance).to.have.property('expiryDate');
        // expect(instance.expiryDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
