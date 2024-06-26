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
    describe('SitesSitePutSchemaDataPolicyForensicsAutoTriggering', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.SitesSitePutSchemaDataPolicyForensicsAutoTriggering();
      });

      it('should create an instance of SitesSitePutSchemaDataPolicyForensicsAutoTriggering', function() {
        // TODO: update the code to test SitesSitePutSchemaDataPolicyForensicsAutoTriggering
        expect(instance).to.be.a(S1MgmtApi.SitesSitePutSchemaDataPolicyForensicsAutoTriggering);
      });

      it('should have the property windowsProfileId (base name: "windowsProfileId")', function() {
        // TODO: update the code to test the property windowsProfileId
        expect(instance).to.have.property('windowsProfileId');
        // expect(instance.windowsProfileId).to.be(expectedValueLiteral);
      });

      it('should have the property linuxEnabled (base name: "linuxEnabled")', function() {
        // TODO: update the code to test the property linuxEnabled
        expect(instance).to.have.property('linuxEnabled');
        // expect(instance.linuxEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property macosProfileName (base name: "macosProfileName")', function() {
        // TODO: update the code to test the property macosProfileName
        expect(instance).to.have.property('macosProfileName');
        // expect(instance.macosProfileName).to.be(expectedValueLiteral);
      });

      it('should have the property macosProfileId (base name: "macosProfileId")', function() {
        // TODO: update the code to test the property macosProfileId
        expect(instance).to.have.property('macosProfileId');
        // expect(instance.macosProfileId).to.be(expectedValueLiteral);
      });

      it('should have the property windowsProfileName (base name: "windowsProfileName")', function() {
        // TODO: update the code to test the property windowsProfileName
        expect(instance).to.have.property('windowsProfileName');
        // expect(instance.windowsProfileName).to.be(expectedValueLiteral);
      });

      it('should have the property linuxProfileName (base name: "linuxProfileName")', function() {
        // TODO: update the code to test the property linuxProfileName
        expect(instance).to.have.property('linuxProfileName');
        // expect(instance.linuxProfileName).to.be(expectedValueLiteral);
      });

      it('should have the property windowsEnabled (base name: "windowsEnabled")', function() {
        // TODO: update the code to test the property windowsEnabled
        expect(instance).to.have.property('windowsEnabled');
        // expect(instance.windowsEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property linuxProfileId (base name: "linuxProfileId")', function() {
        // TODO: update the code to test the property linuxProfileId
        expect(instance).to.have.property('linuxProfileId');
        // expect(instance.linuxProfileId).to.be(expectedValueLiteral);
      });

      it('should have the property macosEnabled (base name: "macosEnabled")', function() {
        // TODO: update the code to test the property macosEnabled
        expect(instance).to.have.property('macosEnabled');
        // expect(instance.macosEnabled).to.be(expectedValueLiteral);
      });

    });
  });

}));
