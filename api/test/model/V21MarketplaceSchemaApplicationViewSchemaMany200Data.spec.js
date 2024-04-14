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
    describe('V21MarketplaceSchemaApplicationViewSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21MarketplaceSchemaApplicationViewSchemaMany200Data();
      });

      it('should create an instance of V21MarketplaceSchemaApplicationViewSchemaMany200Data', function() {
        // TODO: update the code to test V21MarketplaceSchemaApplicationViewSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.V21MarketplaceSchemaApplicationViewSchemaMany200Data);
      });

      it('should have the property applicationCatalogId (base name: "applicationCatalogId")', function() {
        // TODO: update the code to test the property applicationCatalogId
        expect(instance).to.have.property('applicationCatalogId');
        // expect(instance.applicationCatalogId).to.be(expectedValueLiteral);
      });

      it('should have the property hasAlert (base name: "hasAlert")', function() {
        // TODO: update the code to test the property hasAlert
        expect(instance).to.have.property('hasAlert');
        // expect(instance.hasAlert).to.be(expectedValueLiteral);
      });

      it('should have the property scopes (base name: "scopes")', function() {
        // TODO: update the code to test the property scopes
        expect(instance).to.have.property('scopes');
        // expect(instance.scopes).to.be(expectedValueLiteral);
      });

      it('should have the property icon (base name: "icon")', function() {
        // TODO: update the code to test the property icon
        expect(instance).to.have.property('icon');
        // expect(instance.icon).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property lastInstalledAt (base name: "lastInstalledAt")', function() {
        // TODO: update the code to test the property lastInstalledAt
        expect(instance).to.have.property('lastInstalledAt');
        // expect(instance.lastInstalledAt).to.be(expectedValueLiteral);
      });

    });
  });

}));
