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
    describe('TagManagerSchemasAgentTagSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.TagManagerSchemasAgentTagSchemaMany200Data();
      });

      it('should create an instance of TagManagerSchemasAgentTagSchemaMany200Data', function() {
        // TODO: update the code to test TagManagerSchemasAgentTagSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.TagManagerSchemasAgentTagSchemaMany200Data);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property updatedBy (base name: "updatedBy")', function() {
        // TODO: update the code to test the property updatedBy
        expect(instance).to.have.property('updatedBy');
        // expect(instance.updatedBy).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property scopeId (base name: "scopeId")', function() {
        // TODO: update the code to test the property scopeId
        expect(instance).to.have.property('scopeId');
        // expect(instance.scopeId).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property createdBy (base name: "createdBy")', function() {
        // TODO: update the code to test the property createdBy
        expect(instance).to.have.property('createdBy');
        // expect(instance.createdBy).to.be(expectedValueLiteral);
      });

      it('should have the property key (base name: "key")', function() {
        // TODO: update the code to test the property key
        expect(instance).to.have.property('key');
        // expect(instance.key).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property scopePath (base name: "scopePath")', function() {
        // TODO: update the code to test the property scopePath
        expect(instance).to.have.property('scopePath');
        // expect(instance.scopePath).to.be(expectedValueLiteral);
      });

      it('should have the property scopeLevel (base name: "scopeLevel")', function() {
        // TODO: update the code to test the property scopeLevel
        expect(instance).to.have.property('scopeLevel');
        // expect(instance.scopeLevel).to.be(expectedValueLiteral);
      });

      it('should have the property allowEdit (base name: "allowEdit")', function() {
        // TODO: update the code to test the property allowEdit
        expect(instance).to.have.property('allowEdit');
        // expect(instance.allowEdit).to.be(expectedValueLiteral);
      });

      it('should have the property totalEndpoints (base name: "totalEndpoints")', function() {
        // TODO: update the code to test the property totalEndpoints
        expect(instance).to.have.property('totalEndpoints');
        // expect(instance.totalEndpoints).to.be(expectedValueLiteral);
      });

      it('should have the property endpointsInCurrentScope (base name: "endpointsInCurrentScope")', function() {
        // TODO: update the code to test the property endpointsInCurrentScope
        expect(instance).to.have.property('endpointsInCurrentScope');
        // expect(instance.endpointsInCurrentScope).to.be(expectedValueLiteral);
      });

    });
  });

}));
