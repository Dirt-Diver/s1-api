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
    describe('UsersSchemasLoginContinueSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.UsersSchemasLoginContinueSchemaData();
      });

      it('should create an instance of UsersSchemasLoginContinueSchemaData', function() {
        // TODO: update the code to test UsersSchemasLoginContinueSchemaData
        expect(instance).to.be.a(S1MgmtApi.UsersSchemasLoginContinueSchemaData);
      });

      it('should have the property token (base name: "token")', function() {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

      it('should have the property dontShowAgain (base name: "dontShowAgain")', function() {
        // TODO: update the code to test the property dontShowAgain
        expect(instance).to.have.property('dontShowAgain');
        // expect(instance.dontShowAgain).to.be(expectedValueLiteral);
      });

      it('should have the property resetPassword (base name: "resetPassword")', function() {
        // TODO: update the code to test the property resetPassword
        expect(instance).to.have.property('resetPassword');
        // expect(instance.resetPassword).to.be(expectedValueLiteral);
      });

    });
  });

}));
