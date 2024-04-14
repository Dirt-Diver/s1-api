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
    describe('V21ActivationSchemasUserActivationItemMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21ActivationSchemasUserActivationItemMany200Data();
      });

      it('should create an instance of V21ActivationSchemasUserActivationItemMany200Data', function() {
        // TODO: update the code to test V21ActivationSchemasUserActivationItemMany200Data
        expect(instance).to.be.a(S1MgmtApi.V21ActivationSchemasUserActivationItemMany200Data);
      });

      it('should have the property activationLimit (base name: "activationLimit")', function() {
        // TODO: update the code to test the property activationLimit
        expect(instance).to.have.property('activationLimit');
        // expect(instance.activationLimit).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property createdBy (base name: "createdBy")', function() {
        // TODO: update the code to test the property createdBy
        expect(instance).to.have.property('createdBy');
        // expect(instance.createdBy).to.be(expectedValueLiteral);
      });

      it('should have the property scope (base name: "scope")', function() {
        // TODO: update the code to test the property scope
        expect(instance).to.have.property('scope');
        // expect(instance.scope).to.be(expectedValueLiteral);
      });

      it('should have the property mgmtGroupName (base name: "mgmtGroupName")', function() {
        // TODO: update the code to test the property mgmtGroupName
        expect(instance).to.have.property('mgmtGroupName');
        // expect(instance.mgmtGroupName).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property activationCount (base name: "activationCount")', function() {
        // TODO: update the code to test the property activationCount
        expect(instance).to.have.property('activationCount');
        // expect(instance.activationCount).to.be(expectedValueLiteral);
      });

    });
  });

}));
