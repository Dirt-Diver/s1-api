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
    describe('UsersSchemasLoginOutputSchema200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.UsersSchemasLoginOutputSchema200Data();
      });

      it('should create an instance of UsersSchemasLoginOutputSchema200Data', function() {
        // TODO: update the code to test UsersSchemasLoginOutputSchema200Data
        expect(instance).to.be.a(S1MgmtApi.UsersSchemasLoginOutputSchema200Data);
      });

      it('should have the property token (base name: "token")', function() {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

      it('should have the property csrf (base name: "csrf")', function() {
        // TODO: update the code to test the property csrf
        expect(instance).to.have.property('csrf');
        // expect(instance.csrf).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property twoFaMethod (base name: "twoFaMethod")', function() {
        // TODO: update the code to test the property twoFaMethod
        expect(instance).to.have.property('twoFaMethod');
        // expect(instance.twoFaMethod).to.be(expectedValueLiteral);
      });

    });
  });

}));
