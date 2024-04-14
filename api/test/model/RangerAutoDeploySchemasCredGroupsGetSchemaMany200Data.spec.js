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
    describe('RangerAutoDeploySchemasCredGroupsGetSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.RangerAutoDeploySchemasCredGroupsGetSchemaMany200Data();
      });

      it('should create an instance of RangerAutoDeploySchemasCredGroupsGetSchemaMany200Data', function() {
        // TODO: update the code to test RangerAutoDeploySchemasCredGroupsGetSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.RangerAutoDeploySchemasCredGroupsGetSchemaMany200Data);
      });

      it('should have the property targetOs (base name: "targetOs")', function() {
        // TODO: update the code to test the property targetOs
        expect(instance).to.have.property('targetOs');
        // expect(instance.targetOs).to.be(expectedValueLiteral);
      });

      it('should have the property totalDetails (base name: "totalDetails")', function() {
        // TODO: update the code to test the property totalDetails
        expect(instance).to.have.property('totalDetails');
        // expect(instance.totalDetails).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property groupName (base name: "groupName")', function() {
        // TODO: update the code to test the property groupName
        expect(instance).to.have.property('groupName');
        // expect(instance.groupName).to.be(expectedValueLiteral);
      });

      it('should have the property scopeId (base name: "scopeId")', function() {
        // TODO: update the code to test the property scopeId
        expect(instance).to.have.property('scopeId');
        // expect(instance.scopeId).to.be(expectedValueLiteral);
      });

      it('should have the property domain (base name: "domain")', function() {
        // TODO: update the code to test the property domain
        expect(instance).to.have.property('domain');
        // expect(instance.domain).to.be(expectedValueLiteral);
      });

      it('should have the property groupPassphrase (base name: "groupPassphrase")', function() {
        // TODO: update the code to test the property groupPassphrase
        expect(instance).to.have.property('groupPassphrase');
        // expect(instance.groupPassphrase).to.be(expectedValueLiteral);
      });

    });
  });

}));
