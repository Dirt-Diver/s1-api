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
    describe('V21ForensicsSchemaCollectionProfileResultSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21ForensicsSchemaCollectionProfileResultSchemaMany200Data();
      });

      it('should create an instance of V21ForensicsSchemaCollectionProfileResultSchemaMany200Data', function() {
        // TODO: update the code to test V21ForensicsSchemaCollectionProfileResultSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.V21ForensicsSchemaCollectionProfileResultSchemaMany200Data);
      });

      it('should have the property isBundled (base name: "isBundled")', function() {
        // TODO: update the code to test the property isBundled
        expect(instance).to.have.property('isBundled');
        // expect(instance.isBundled).to.be(expectedValueLiteral);
      });

      it('should have the property scopeLevel (base name: "scopeLevel")', function() {
        // TODO: update the code to test the property scopeLevel
        expect(instance).to.have.property('scopeLevel');
        // expect(instance.scopeLevel).to.be(expectedValueLiteral);
      });

      it('should have the property artifacts (base name: "artifacts")', function() {
        // TODO: update the code to test the property artifacts
        expect(instance).to.have.property('artifacts');
        // expect(instance.artifacts).to.be(expectedValueLiteral);
      });

      it('should have the property osTypes (base name: "osTypes")', function() {
        // TODO: update the code to test the property osTypes
        expect(instance).to.have.property('osTypes');
        // expect(instance.osTypes).to.be(expectedValueLiteral);
      });

      it('should have the property scopePath (base name: "scopePath")', function() {
        // TODO: update the code to test the property scopePath
        expect(instance).to.have.property('scopePath');
        // expect(instance.scopePath).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property scopeName (base name: "scopeName")', function() {
        // TODO: update the code to test the property scopeName
        expect(instance).to.have.property('scopeName');
        // expect(instance.scopeName).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property creator (base name: "creator")', function() {
        // TODO: update the code to test the property creator
        expect(instance).to.have.property('creator');
        // expect(instance.creator).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property scopeId (base name: "scopeId")', function() {
        // TODO: update the code to test the property scopeId
        expect(instance).to.have.property('scopeId');
        // expect(instance.scopeId).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property updater (base name: "updater")', function() {
        // TODO: update the code to test the property updater
        expect(instance).to.have.property('updater');
        // expect(instance.updater).to.be(expectedValueLiteral);
      });

    });
  });

}));
