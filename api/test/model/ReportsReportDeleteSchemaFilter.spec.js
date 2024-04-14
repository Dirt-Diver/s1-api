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
    describe('ReportsReportDeleteSchemaFilter', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.ReportsReportDeleteSchemaFilter();
      });

      it('should create an instance of ReportsReportDeleteSchemaFilter', function() {
        // TODO: update the code to test ReportsReportDeleteSchemaFilter
        expect(instance).to.be.a(S1MgmtApi.ReportsReportDeleteSchemaFilter);
      });

      it('should have the property toDate (base name: "toDate")', function() {
        // TODO: update the code to test the property toDate
        expect(instance).to.have.property('toDate');
        // expect(instance.toDate).to.be(expectedValueLiteral);
      });

      it('should have the property createdAtGte (base name: "createdAt__gte")', function() {
        // TODO: update the code to test the property createdAtGte
        expect(instance).to.have.property('createdAtGte');
        // expect(instance.createdAtGte).to.be(expectedValueLiteral);
      });

      it('should have the property scheduleType (base name: "scheduleType")', function() {
        // TODO: update the code to test the property scheduleType
        expect(instance).to.have.property('scheduleType');
        // expect(instance.scheduleType).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property accountIds (base name: "accountIds")', function() {
        // TODO: update the code to test the property accountIds
        expect(instance).to.have.property('accountIds');
        // expect(instance.accountIds).to.be(expectedValueLiteral);
      });

      it('should have the property siteIds (base name: "siteIds")', function() {
        // TODO: update the code to test the property siteIds
        expect(instance).to.have.property('siteIds');
        // expect(instance.siteIds).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property interval (base name: "interval")', function() {
        // TODO: update the code to test the property interval
        expect(instance).to.have.property('interval');
        // expect(instance.interval).to.be(expectedValueLiteral);
      });

      it('should have the property ids (base name: "ids")', function() {
        // TODO: update the code to test the property ids
        expect(instance).to.have.property('ids');
        // expect(instance.ids).to.be(expectedValueLiteral);
      });

      it('should have the property createdAtLte (base name: "createdAt__lte")', function() {
        // TODO: update the code to test the property createdAtLte
        expect(instance).to.have.property('createdAtLte');
        // expect(instance.createdAtLte).to.be(expectedValueLiteral);
      });

      it('should have the property query (base name: "query")', function() {
        // TODO: update the code to test the property query
        expect(instance).to.have.property('query');
        // expect(instance.query).to.be(expectedValueLiteral);
      });

      it('should have the property frequency (base name: "frequency")', function() {
        // TODO: update the code to test the property frequency
        expect(instance).to.have.property('frequency');
        // expect(instance.frequency).to.be(expectedValueLiteral);
      });

      it('should have the property groupIds (base name: "groupIds")', function() {
        // TODO: update the code to test the property groupIds
        expect(instance).to.have.property('groupIds');
        // expect(instance.groupIds).to.be(expectedValueLiteral);
      });

      it('should have the property fromDate (base name: "fromDate")', function() {
        // TODO: update the code to test the property fromDate
        expect(instance).to.have.property('fromDate');
        // expect(instance.fromDate).to.be(expectedValueLiteral);
      });

      it('should have the property scope (base name: "scope")', function() {
        // TODO: update the code to test the property scope
        expect(instance).to.have.property('scope');
        // expect(instance.scope).to.be(expectedValueLiteral);
      });

    });
  });

}));