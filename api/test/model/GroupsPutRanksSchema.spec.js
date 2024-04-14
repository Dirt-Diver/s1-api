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
    describe('GroupsPutRanksSchema', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.GroupsPutRanksSchema();
      });

      it('should create an instance of GroupsPutRanksSchema', function() {
        // TODO: update the code to test GroupsPutRanksSchema
        expect(instance).to.be.a(S1MgmtApi.GroupsPutRanksSchema);
      });

      it('should have the property accountIds (base name: "accountIds")', function() {
        // TODO: update the code to test the property accountIds
        expect(instance).to.have.property('accountIds');
        // expect(instance.accountIds).to.be(expectedValueLiteral);
      });

      it('should have the property filter (base name: "filter")', function() {
        // TODO: update the code to test the property filter
        expect(instance).to.have.property('filter');
        // expect(instance.filter).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

      it('should have the property siteIds (base name: "siteIds")', function() {
        // TODO: update the code to test the property siteIds
        expect(instance).to.have.property('siteIds');
        // expect(instance.siteIds).to.be(expectedValueLiteral);
      });

    });
  });

}));