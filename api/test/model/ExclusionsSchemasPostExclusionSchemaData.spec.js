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
    describe('ExclusionsSchemasPostExclusionSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.ExclusionsSchemasPostExclusionSchemaData();
      });

      it('should create an instance of ExclusionsSchemasPostExclusionSchemaData', function() {
        // TODO: update the code to test ExclusionsSchemasPostExclusionSchemaData
        expect(instance).to.be.a(S1MgmtApi.ExclusionsSchemasPostExclusionSchemaData);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property osType (base name: "osType")', function() {
        // TODO: update the code to test the property osType
        expect(instance).to.have.property('osType');
        // expect(instance.osType).to.be(expectedValueLiteral);
      });

      it('should have the property mode (base name: "mode")', function() {
        // TODO: update the code to test the property mode
        expect(instance).to.have.property('mode');
        // expect(instance.mode).to.be(expectedValueLiteral);
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

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property pathExclusionType (base name: "pathExclusionType")', function() {
        // TODO: update the code to test the property pathExclusionType
        expect(instance).to.have.property('pathExclusionType');
        // expect(instance.pathExclusionType).to.be(expectedValueLiteral);
      });

      it('should have the property actions (base name: "actions")', function() {
        // TODO: update the code to test the property actions
        expect(instance).to.have.property('actions');
        // expect(instance.actions).to.be(expectedValueLiteral);
      });

      it('should have the property inject (base name: "inject")', function() {
        // TODO: update the code to test the property inject
        expect(instance).to.have.property('inject');
        // expect(instance.inject).to.be(expectedValueLiteral);
      });

    });
  });

}));
