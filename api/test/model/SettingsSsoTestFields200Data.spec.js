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
    describe('SettingsSsoTestFields200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.SettingsSsoTestFields200Data();
      });

      it('should create an instance of SettingsSsoTestFields200Data', function() {
        // TODO: update the code to test SettingsSsoTestFields200Data
        expect(instance).to.be.a(S1MgmtApi.SettingsSsoTestFields200Data);
      });

      it('should have the property redirectUrl (base name: "redirectUrl")', function() {
        // TODO: update the code to test the property redirectUrl
        expect(instance).to.have.property('redirectUrl');
        // expect(instance.redirectUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));
