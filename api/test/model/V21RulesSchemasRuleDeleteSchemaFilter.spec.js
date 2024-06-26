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
    describe('V21RulesSchemasRuleDeleteSchemaFilter', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21RulesSchemasRuleDeleteSchemaFilter();
      });

      it('should create an instance of V21RulesSchemasRuleDeleteSchemaFilter', function() {
        // TODO: update the code to test V21RulesSchemasRuleDeleteSchemaFilter
        expect(instance).to.be.a(S1MgmtApi.V21RulesSchemasRuleDeleteSchemaFilter);
      });

      it('should have the property ids (base name: "ids")', function() {
        // TODO: update the code to test the property ids
        expect(instance).to.have.property('ids');
        // expect(instance.ids).to.be(expectedValueLiteral);
      });

      it('should have the property creatorContains (base name: "creator__contains")', function() {
        // TODO: update the code to test the property creatorContains
        expect(instance).to.have.property('creatorContains');
        // expect(instance.creatorContains).to.be(expectedValueLiteral);
      });

      it('should have the property scopes (base name: "scopes")', function() {
        // TODO: update the code to test the property scopes
        expect(instance).to.have.property('scopes');
        // expect(instance.scopes).to.be(expectedValueLiteral);
      });

      it('should have the property expired (base name: "expired")', function() {
        // TODO: update the code to test the property expired
        expect(instance).to.have.property('expired');
        // expect(instance.expired).to.be(expectedValueLiteral);
      });

      it('should have the property activeResponse (base name: "activeResponse")', function() {
        // TODO: update the code to test the property activeResponse
        expect(instance).to.have.property('activeResponse');
        // expect(instance.activeResponse).to.be(expectedValueLiteral);
      });

      it('should have the property siteIds (base name: "siteIds")', function() {
        // TODO: update the code to test the property siteIds
        expect(instance).to.have.property('siteIds');
        // expect(instance.siteIds).to.be(expectedValueLiteral);
      });

      it('should have the property reachedLimit (base name: "reachedLimit")', function() {
        // TODO: update the code to test the property reachedLimit
        expect(instance).to.have.property('reachedLimit');
        // expect(instance.reachedLimit).to.be(expectedValueLiteral);
      });

      it('should have the property expirationMode (base name: "expirationMode")', function() {
        // TODO: update the code to test the property expirationMode
        expect(instance).to.have.property('expirationMode');
        // expect(instance.expirationMode).to.be(expectedValueLiteral);
      });

      it('should have the property groupIds (base name: "groupIds")', function() {
        // TODO: update the code to test the property groupIds
        expect(instance).to.have.property('groupIds');
        // expect(instance.groupIds).to.be(expectedValueLiteral);
      });

      it('should have the property accountIds (base name: "accountIds")', function() {
        // TODO: update the code to test the property accountIds
        expect(instance).to.have.property('accountIds');
        // expect(instance.accountIds).to.be(expectedValueLiteral);
      });

      it('should have the property queryType (base name: "queryType")', function() {
        // TODO: update the code to test the property queryType
        expect(instance).to.have.property('queryType');
        // expect(instance.queryType).to.be(expectedValueLiteral);
      });

      it('should have the property query (base name: "query")', function() {
        // TODO: update the code to test the property query
        expect(instance).to.have.property('query');
        // expect(instance.query).to.be(expectedValueLiteral);
      });

      it('should have the property s1qlContains (base name: "s1ql__contains")', function() {
        // TODO: update the code to test the property s1qlContains
        expect(instance).to.have.property('s1qlContains');
        // expect(instance.s1qlContains).to.be(expectedValueLiteral);
      });

      it('should have the property descriptionContains (base name: "description__contains")', function() {
        // TODO: update the code to test the property descriptionContains
        expect(instance).to.have.property('descriptionContains');
        // expect(instance.descriptionContains).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property nameContains (base name: "name__contains")', function() {
        // TODO: update the code to test the property nameContains
        expect(instance).to.have.property('nameContains');
        // expect(instance.nameContains).to.be(expectedValueLiteral);
      });

    });
  });

}));
