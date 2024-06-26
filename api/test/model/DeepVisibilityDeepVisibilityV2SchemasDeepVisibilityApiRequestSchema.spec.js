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
    describe('DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema();
      });

      it('should create an instance of DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema', function() {
        // TODO: update the code to test DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema
        expect(instance).to.be.a(S1MgmtApi.DeepVisibilityDeepVisibilityV2SchemasDeepVisibilityApiRequestSchema);
      });

      it('should have the property timeFrame (base name: "timeFrame")', function() {
        // TODO: update the code to test the property timeFrame
        expect(instance).to.have.property('timeFrame');
        // expect(instance.timeFrame).to.be(expectedValueLiteral);
      });

      it('should have the property queryType (base name: "queryType")', function() {
        // TODO: update the code to test the property queryType
        expect(instance).to.have.property('queryType');
        // expect(instance.queryType).to.be(expectedValueLiteral);
      });

      it('should have the property siteIds (base name: "siteIds")', function() {
        // TODO: update the code to test the property siteIds
        expect(instance).to.have.property('siteIds');
        // expect(instance.siteIds).to.be(expectedValueLiteral);
      });

      it('should have the property accountIds (base name: "accountIds")', function() {
        // TODO: update the code to test the property accountIds
        expect(instance).to.have.property('accountIds');
        // expect(instance.accountIds).to.be(expectedValueLiteral);
      });

      it('should have the property limit (base name: "limit")', function() {
        // TODO: update the code to test the property limit
        expect(instance).to.have.property('limit');
        // expect(instance.limit).to.be(expectedValueLiteral);
      });

      it('should have the property isVerbose (base name: "isVerbose")', function() {
        // TODO: update the code to test the property isVerbose
        expect(instance).to.have.property('isVerbose');
        // expect(instance.isVerbose).to.be(expectedValueLiteral);
      });

      it('should have the property query (base name: "query")', function() {
        // TODO: update the code to test the property query
        expect(instance).to.have.property('query');
        // expect(instance.query).to.be(expectedValueLiteral);
      });

      it('should have the property fromDate (base name: "fromDate")', function() {
        // TODO: update the code to test the property fromDate
        expect(instance).to.have.property('fromDate');
        // expect(instance.fromDate).to.be(expectedValueLiteral);
      });

      it('should have the property toDate (base name: "toDate")', function() {
        // TODO: update the code to test the property toDate
        expect(instance).to.have.property('toDate');
        // expect(instance.toDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
