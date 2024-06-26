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
    describe('V21ManagementSchemasListConnectionsSchema200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21ManagementSchemasListConnectionsSchema200Data();
      });

      it('should create an instance of V21ManagementSchemasListConnectionsSchema200Data', function() {
        // TODO: update the code to test V21ManagementSchemasListConnectionsSchema200Data
        expect(instance).to.be.a(S1MgmtApi.V21ManagementSchemasListConnectionsSchema200Data);
      });

      it('should have the property responseGroupIds (base name: "responseGroupIds")', function() {
        // TODO: update the code to test the property responseGroupIds
        expect(instance).to.have.property('responseGroupIds');
        // expect(instance.responseGroupIds).to.be(expectedValueLiteral);
      });

      it('should have the property scopeId (base name: "scopeId")', function() {
        // TODO: update the code to test the property scopeId
        expect(instance).to.have.property('scopeId');
        // expect(instance.scopeId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property details (base name: "details")', function() {
        // TODO: update the code to test the property details
        expect(instance).to.have.property('details');
        // expect(instance.details).to.be(expectedValueLiteral);
      });

      it('should have the property connector (base name: "connector")', function() {
        // TODO: update the code to test the property connector
        expect(instance).to.have.property('connector');
        // expect(instance.connector).to.be(expectedValueLiteral);
      });

      it('should have the property connectionId (base name: "connectionId")', function() {
        // TODO: update the code to test the property connectionId
        expect(instance).to.have.property('connectionId');
        // expect(instance.connectionId).to.be(expectedValueLiteral);
      });

      it('should have the property deviceGroupMappings (base name: "deviceGroupMappings")', function() {
        // TODO: update the code to test the property deviceGroupMappings
        expect(instance).to.have.property('deviceGroupMappings');
        // expect(instance.deviceGroupMappings).to.be(expectedValueLiteral);
      });

      it('should have the property defaultS1GroupId (base name: "defaultS1GroupId")', function() {
        // TODO: update the code to test the property defaultS1GroupId
        expect(instance).to.have.property('defaultS1GroupId');
        // expect(instance.defaultS1GroupId).to.be(expectedValueLiteral);
      });

      it('should have the property scopeLevel (base name: "scopeLevel")', function() {
        // TODO: update the code to test the property scopeLevel
        expect(instance).to.have.property('scopeLevel');
        // expect(instance.scopeLevel).to.be(expectedValueLiteral);
      });

    });
  });

}));
