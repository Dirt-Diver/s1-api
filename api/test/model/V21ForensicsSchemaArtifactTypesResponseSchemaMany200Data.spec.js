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
    describe('V21ForensicsSchemaArtifactTypesResponseSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21ForensicsSchemaArtifactTypesResponseSchemaMany200Data();
      });

      it('should create an instance of V21ForensicsSchemaArtifactTypesResponseSchemaMany200Data', function() {
        // TODO: update the code to test V21ForensicsSchemaArtifactTypesResponseSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.V21ForensicsSchemaArtifactTypesResponseSchemaMany200Data);
      });

      it('should have the property artifactType (base name: "artifactType")', function() {
        // TODO: update the code to test the property artifactType
        expect(instance).to.have.property('artifactType');
        // expect(instance.artifactType).to.be(expectedValueLiteral);
      });

      it('should have the property osTypes (base name: "osTypes")', function() {
        // TODO: update the code to test the property osTypes
        expect(instance).to.have.property('osTypes');
        // expect(instance.osTypes).to.be(expectedValueLiteral);
      });

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property parameters (base name: "parameters")', function() {
        // TODO: update the code to test the property parameters
        expect(instance).to.have.property('parameters');
        // expect(instance.parameters).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

    });
  });

}));
