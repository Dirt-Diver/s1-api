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
    describe('SitesSiteBulkPutSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.SitesSiteBulkPutSchemaData();
      });

      it('should create an instance of SitesSiteBulkPutSchemaData', function() {
        // TODO: update the code to test SitesSiteBulkPutSchemaData
        expect(instance).to.be.a(S1MgmtApi.SitesSiteBulkPutSchemaData);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property unlimitedExpiration (base name: "unlimitedExpiration")', function() {
        // TODO: update the code to test the property unlimitedExpiration
        expect(instance).to.have.property('unlimitedExpiration');
        // expect(instance.unlimitedExpiration).to.be(expectedValueLiteral);
      });

      it('should have the property licenses (base name: "licenses")', function() {
        // TODO: update the code to test the property licenses
        expect(instance).to.have.property('licenses');
        // expect(instance.licenses).to.be(expectedValueLiteral);
      });

      it('should have the property expiration (base name: "expiration")', function() {
        // TODO: update the code to test the property expiration
        expect(instance).to.have.property('expiration');
        // expect(instance.expiration).to.be(expectedValueLiteral);
      });

      it('should have the property siteType (base name: "siteType")', function() {
        // TODO: update the code to test the property siteType
        expect(instance).to.have.property('siteType');
        // expect(instance.siteType).to.be(expectedValueLiteral);
      });

      it('should have the property inherits (base name: "inherits")', function() {
        // TODO: update the code to test the property inherits
        expect(instance).to.have.property('inherits');
        // expect(instance.inherits).to.be(expectedValueLiteral);
      });

    });
  });

}));