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
    describe('V21ActivationSchemasUserActivationRequestWrapperDataDetails', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21ActivationSchemasUserActivationRequestWrapperDataDetails();
      });

      it('should create an instance of V21ActivationSchemasUserActivationRequestWrapperDataDetails', function() {
        // TODO: update the code to test V21ActivationSchemasUserActivationRequestWrapperDataDetails
        expect(instance).to.be.a(S1MgmtApi.V21ActivationSchemasUserActivationRequestWrapperDataDetails);
      });

      it('should have the property activationLimit (base name: "activationLimit")', function() {
        // TODO: update the code to test the property activationLimit
        expect(instance).to.have.property('activationLimit');
        // expect(instance.activationLimit).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "lastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property firstName (base name: "firstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

    });
  });

}));
