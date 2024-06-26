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
    describe('SettingsSsoSpCertificate200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.SettingsSsoSpCertificate200Data();
      });

      it('should create an instance of SettingsSsoSpCertificate200Data', function() {
        // TODO: update the code to test SettingsSsoSpCertificate200Data
        expect(instance).to.be.a(S1MgmtApi.SettingsSsoSpCertificate200Data);
      });

      it('should have the property expiresAt (base name: "expiresAt")', function() {
        // TODO: update the code to test the property expiresAt
        expect(instance).to.have.property('expiresAt');
        // expect(instance.expiresAt).to.be(expectedValueLiteral);
      });

      it('should have the property issuedAt (base name: "issuedAt")', function() {
        // TODO: update the code to test the property issuedAt
        expect(instance).to.have.property('issuedAt');
        // expect(instance.issuedAt).to.be(expectedValueLiteral);
      });

      it('should have the property fileName (base name: "fileName")', function() {
        // TODO: update the code to test the property fileName
        expect(instance).to.have.property('fileName');
        // expect(instance.fileName).to.be(expectedValueLiteral);
      });

      it('should have the property pem (base name: "pem")', function() {
        // TODO: update the code to test the property pem
        expect(instance).to.have.property('pem');
        // expect(instance.pem).to.be(expectedValueLiteral);
      });

    });
  });

}));
