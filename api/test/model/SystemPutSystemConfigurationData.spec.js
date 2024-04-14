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
    describe('SystemPutSystemConfigurationData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.SystemPutSystemConfigurationData();
      });

      it('should create an instance of SystemPutSystemConfigurationData', function() {
        // TODO: update the code to test SystemPutSystemConfigurationData
        expect(instance).to.be.a(S1MgmtApi.SystemPutSystemConfigurationData);
      });

      it('should have the property passwordExpiration (base name: "passwordExpiration")', function() {
        // TODO: update the code to test the property passwordExpiration
        expect(instance).to.have.property('passwordExpiration');
        // expect(instance.passwordExpiration).to.be(expectedValueLiteral);
      });

      it('should have the property uiInactivityTimeoutSeconds (base name: "uiInactivityTimeoutSeconds")', function() {
        // TODO: update the code to test the property uiInactivityTimeoutSeconds
        expect(instance).to.have.property('uiInactivityTimeoutSeconds');
        // expect(instance.uiInactivityTimeoutSeconds).to.be(expectedValueLiteral);
      });

      it('should have the property rememberMeLength (base name: "rememberMeLength")', function() {
        // TODO: update the code to test the property rememberMeLength
        expect(instance).to.have.property('rememberMeLength');
        // expect(instance.rememberMeLength).to.be(expectedValueLiteral);
      });

      it('should have the property accessibleUrl (base name: "accessibleUrl")', function() {
        // TODO: update the code to test the property accessibleUrl
        expect(instance).to.have.property('accessibleUrl');
        // expect(instance.accessibleUrl).to.be(expectedValueLiteral);
      });

      it('should have the property earlyAccessPlatforms (base name: "earlyAccessPlatforms")', function() {
        // TODO: update the code to test the property earlyAccessPlatforms
        expect(instance).to.have.property('earlyAccessPlatforms');
        // expect(instance.earlyAccessPlatforms).to.be(expectedValueLiteral);
      });

      it('should have the property globalTwoFaEnabled (base name: "globalTwoFaEnabled")', function() {
        // TODO: update the code to test the property globalTwoFaEnabled
        expect(instance).to.have.property('globalTwoFaEnabled');
        // expect(instance.globalTwoFaEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property earlyAccess (base name: "earlyAccess")', function() {
        // TODO: update the code to test the property earlyAccess
        expect(instance).to.have.property('earlyAccess');
        // expect(instance.earlyAccess).to.be(expectedValueLiteral);
      });

      it('should have the property cloudIntelligenceOn (base name: "cloudIntelligenceOn")', function() {
        // TODO: update the code to test the property cloudIntelligenceOn
        expect(instance).to.have.property('cloudIntelligenceOn');
        // expect(instance.cloudIntelligenceOn).to.be(expectedValueLiteral);
      });

      it('should have the property allowedDomains (base name: "allowedDomains")', function() {
        // TODO: update the code to test the property allowedDomains
        expect(instance).to.have.property('allowedDomains');
        // expect(instance.allowedDomains).to.be(expectedValueLiteral);
      });

      it('should have the property cloudLastConnectionTime (base name: "cloudLastConnectionTime")', function() {
        // TODO: update the code to test the property cloudLastConnectionTime
        expect(instance).to.have.property('cloudLastConnectionTime');
        // expect(instance.cloudLastConnectionTime).to.be(expectedValueLiteral);
      });

      it('should have the property tfaEnrollmentExpiration (base name: "tfaEnrollmentExpiration")', function() {
        // TODO: update the code to test the property tfaEnrollmentExpiration
        expect(instance).to.have.property('tfaEnrollmentExpiration');
        // expect(instance.tfaEnrollmentExpiration).to.be(expectedValueLiteral);
      });

      it('should have the property allowDuplicateSite (base name: "allowDuplicateSite")', function() {
        // TODO: update the code to test the property allowDuplicateSite
        expect(instance).to.have.property('allowDuplicateSite');
        // expect(instance.allowDuplicateSite).to.be(expectedValueLiteral);
      });

      it('should have the property advancedMode (base name: "advancedMode")', function() {
        // TODO: update the code to test the property advancedMode
        expect(instance).to.have.property('advancedMode');
        // expect(instance.advancedMode).to.be(expectedValueLiteral);
      });

    });
  });

}));