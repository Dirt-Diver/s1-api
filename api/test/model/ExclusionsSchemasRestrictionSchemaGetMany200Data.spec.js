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
    describe('ExclusionsSchemasRestrictionSchemaGetMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.ExclusionsSchemasRestrictionSchemaGetMany200Data();
      });

      it('should create an instance of ExclusionsSchemasRestrictionSchemaGetMany200Data', function() {
        // TODO: update the code to test ExclusionsSchemasRestrictionSchemaGetMany200Data
        expect(instance).to.be.a(S1MgmtApi.ExclusionsSchemasRestrictionSchemaGetMany200Data);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
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

      it('should have the property includeParents (base name: "includeParents")', function() {
        // TODO: update the code to test the property includeParents
        expect(instance).to.have.property('includeParents');
        // expect(instance.includeParents).to.be(expectedValueLiteral);
      });

      it('should have the property osType (base name: "osType")', function() {
        // TODO: update the code to test the property osType
        expect(instance).to.have.property('osType');
        // expect(instance.osType).to.be(expectedValueLiteral);
      });

      it('should have the property scopeName (base name: "scopeName")', function() {
        // TODO: update the code to test the property scopeName
        expect(instance).to.have.property('scopeName');
        // expect(instance.scopeName).to.be(expectedValueLiteral);
      });

      it('should have the property includeChildren (base name: "includeChildren")', function() {
        // TODO: update the code to test the property includeChildren
        expect(instance).to.have.property('includeChildren');
        // expect(instance.includeChildren).to.be(expectedValueLiteral);
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

      it('should have the property source (base name: "source")', function() {
        // TODO: update the code to test the property source
        expect(instance).to.have.property('source');
        // expect(instance.source).to.be(expectedValueLiteral);
      });

      it('should have the property imported (base name: "imported")', function() {
        // TODO: update the code to test the property imported
        expect(instance).to.have.property('imported');
        // expect(instance.imported).to.be(expectedValueLiteral);
      });

      it('should have the property scopePath (base name: "scopePath")', function() {
        // TODO: update the code to test the property scopePath
        expect(instance).to.have.property('scopePath');
        // expect(instance.scopePath).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property userName (base name: "userName")', function() {
        // TODO: update the code to test the property userName
        expect(instance).to.have.property('userName');
        // expect(instance.userName).to.be(expectedValueLiteral);
      });

      it('should have the property notRecommended (base name: "notRecommended")', function() {
        // TODO: update the code to test the property notRecommended
        expect(instance).to.have.property('notRecommended');
        // expect(instance.notRecommended).to.be(expectedValueLiteral);
      });

      it('should have the property scope (base name: "scope")', function() {
        // TODO: update the code to test the property scope
        expect(instance).to.have.property('scope');
        // expect(instance.scope).to.be(expectedValueLiteral);
      });

    });
  });

}));
