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
    describe('SettingsSsoSettingsPutSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.SettingsSsoSettingsPutSchemaData();
      });

      it('should create an instance of SettingsSsoSettingsPutSchemaData', function() {
        // TODO: update the code to test SettingsSsoSettingsPutSchemaData
        expect(instance).to.be.a(S1MgmtApi.SettingsSsoSettingsPutSchemaData);
      });

      it('should have the property defaultUserRole (base name: "defaultUserRole")', function() {
        // TODO: update the code to test the property defaultUserRole
        expect(instance).to.have.property('defaultUserRole');
        // expect(instance.defaultUserRole).to.be(expectedValueLiteral);
      });

      it('should have the property ssoElevatedSessionReauthType (base name: "ssoElevatedSessionReauthType")', function() {
        // TODO: update the code to test the property ssoElevatedSessionReauthType
        expect(instance).to.have.property('ssoElevatedSessionReauthType');
        // expect(instance.ssoElevatedSessionReauthType).to.be(expectedValueLiteral);
      });

      it('should have the property autoProvisioning (base name: "autoProvisioning")', function() {
        // TODO: update the code to test the property autoProvisioning
        expect(instance).to.have.property('autoProvisioning');
        // expect(instance.autoProvisioning).to.be(expectedValueLiteral);
      });

      it('should have the property idpCertContent (base name: "idpCertContent")', function() {
        // TODO: update the code to test the property idpCertContent
        expect(instance).to.have.property('idpCertContent');
        // expect(instance.idpCertContent).to.be(expectedValueLiteral);
      });

      it('should have the property domains (base name: "domains")', function() {
        // TODO: update the code to test the property domains
        expect(instance).to.have.property('domains');
        // expect(instance.domains).to.be(expectedValueLiteral);
      });

      it('should have the property idpEntityId (base name: "idpEntityId")', function() {
        // TODO: update the code to test the property idpEntityId
        expect(instance).to.have.property('idpEntityId');
        // expect(instance.idpEntityId).to.be(expectedValueLiteral);
      });

      it('should have the property idpSsoUrl (base name: "idpSsoUrl")', function() {
        // TODO: update the code to test the property idpSsoUrl
        expect(instance).to.have.property('idpSsoUrl');
        // expect(instance.idpSsoUrl).to.be(expectedValueLiteral);
      });

      it('should have the property signRequest (base name: "signRequest")', function() {
        // TODO: update the code to test the property signRequest
        expect(instance).to.have.property('signRequest');
        // expect(instance.signRequest).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property defaultUserRoleId (base name: "defaultUserRoleId")', function() {
        // TODO: update the code to test the property defaultUserRoleId
        expect(instance).to.have.property('defaultUserRoleId');
        // expect(instance.defaultUserRoleId).to.be(expectedValueLiteral);
      });

      it('should have the property ssoPropagateDomainsToChildren (base name: "ssoPropagateDomainsToChildren")', function() {
        // TODO: update the code to test the property ssoPropagateDomainsToChildren
        expect(instance).to.have.property('ssoPropagateDomainsToChildren');
        // expect(instance.ssoPropagateDomainsToChildren).to.be(expectedValueLiteral);
      });

      it('should have the property ssoInheritDomainsFrom (base name: "ssoInheritDomainsFrom")', function() {
        // TODO: update the code to test the property ssoInheritDomainsFrom
        expect(instance).to.have.property('ssoInheritDomainsFrom');
        // expect(instance.ssoInheritDomainsFrom).to.be(expectedValueLiteral);
      });

      it('should have the property idpCertName (base name: "idpCertName")', function() {
        // TODO: update the code to test the property idpCertName
        expect(instance).to.have.property('idpCertName');
        // expect(instance.idpCertName).to.be(expectedValueLiteral);
      });

    });
  });

}));