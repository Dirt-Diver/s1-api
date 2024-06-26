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
    describe('V21MarketplaceSchemaApplicationsCatalogResponseSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21MarketplaceSchemaApplicationsCatalogResponseSchemaMany200Data();
      });

      it('should create an instance of V21MarketplaceSchemaApplicationsCatalogResponseSchemaMany200Data', function() {
        // TODO: update the code to test V21MarketplaceSchemaApplicationsCatalogResponseSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.V21MarketplaceSchemaApplicationsCatalogResponseSchemaMany200Data);
      });

      it('should have the property deletedAt (base name: "deletedAt")', function() {
        // TODO: update the code to test the property deletedAt
        expect(instance).to.have.property('deletedAt');
        // expect(instance.deletedAt).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property externalUrl (base name: "externalUrl")', function() {
        // TODO: update the code to test the property externalUrl
        expect(instance).to.have.property('externalUrl');
        // expect(instance.externalUrl).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property key (base name: "key")', function() {
        // TODO: update the code to test the property key
        expect(instance).to.have.property('key');
        // expect(instance.key).to.be(expectedValueLiteral);
      });

      it('should have the property summary (base name: "summary")', function() {
        // TODO: update the code to test the property summary
        expect(instance).to.have.property('summary');
        // expect(instance.summary).to.be(expectedValueLiteral);
      });

      it('should have the property viewPolicy (base name: "viewPolicy")', function() {
        // TODO: update the code to test the property viewPolicy
        expect(instance).to.have.property('viewPolicy');
        // expect(instance.viewPolicy).to.be(expectedValueLiteral);
      });

      it('should have the property icon (base name: "icon")', function() {
        // TODO: update the code to test the property icon
        expect(instance).to.have.property('icon');
        // expect(instance.icon).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property installed (base name: "installed")', function() {
        // TODO: update the code to test the property installed
        expect(instance).to.have.property('installed');
        // expect(instance.installed).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property oauthUrl (base name: "oauthUrl")', function() {
        // TODO: update the code to test the property oauthUrl
        expect(instance).to.have.property('oauthUrl');
        // expect(instance.oauthUrl).to.be(expectedValueLiteral);
      });

      it('should have the property retryPolicy (base name: "retryPolicy")', function() {
        // TODO: update the code to test the property retryPolicy
        expect(instance).to.have.property('retryPolicy');
        // expect(instance.retryPolicy).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property availablePlugins (base name: "availablePlugins")', function() {
        // TODO: update the code to test the property availablePlugins
        expect(instance).to.have.property('availablePlugins');
        // expect(instance.availablePlugins).to.be(expectedValueLiteral);
      });

    });
  });

}));
