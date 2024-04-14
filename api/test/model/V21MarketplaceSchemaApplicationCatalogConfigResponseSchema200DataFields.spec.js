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
    describe('V21MarketplaceSchemaApplicationCatalogConfigResponseSchema200DataFields', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21MarketplaceSchemaApplicationCatalogConfigResponseSchema200DataFields();
      });

      it('should create an instance of V21MarketplaceSchemaApplicationCatalogConfigResponseSchema200DataFields', function() {
        // TODO: update the code to test V21MarketplaceSchemaApplicationCatalogConfigResponseSchema200DataFields
        expect(instance).to.be.a(S1MgmtApi.V21MarketplaceSchemaApplicationCatalogConfigResponseSchema200DataFields);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property placeHolder (base name: "placeHolder")', function() {
        // TODO: update the code to test the property placeHolder
        expect(instance).to.have.property('placeHolder');
        // expect(instance.placeHolder).to.be(expectedValueLiteral);
      });

      it('should have the property defaultValue (base name: "defaultValue")', function() {
        // TODO: update the code to test the property defaultValue
        expect(instance).to.have.property('defaultValue');
        // expect(instance.defaultValue).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property _enum (base name: "enum")', function() {
        // TODO: update the code to test the property _enum
        expect(instance).to.have.property('_enum');
        // expect(instance._enum).to.be(expectedValueLiteral);
      });

      it('should have the property required (base name: "required")', function() {
        // TODO: update the code to test the property required
        expect(instance).to.have.property('required');
        // expect(instance.required).to.be(expectedValueLiteral);
      });

    });
  });

}));
