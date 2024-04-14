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
    describe('UsersSchemasOnboardingVerificationSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.UsersSchemasOnboardingVerificationSchemaData();
      });

      it('should create an instance of UsersSchemasOnboardingVerificationSchemaData', function() {
        // TODO: update the code to test UsersSchemasOnboardingVerificationSchemaData
        expect(instance).to.be.a(S1MgmtApi.UsersSchemasOnboardingVerificationSchemaData);
      });

      it('should have the property token (base name: "token")', function() {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property resetPasswordFlow (base name: "resetPasswordFlow")', function() {
        // TODO: update the code to test the property resetPasswordFlow
        expect(instance).to.have.property('resetPasswordFlow');
        // expect(instance.resetPasswordFlow).to.be(expectedValueLiteral);
      });

    });
  });

}));
