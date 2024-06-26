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
    describe('V21ApplicationManagementApplicationManagementSchemasRisksByAggregatedApplicationsSchemaMany200Statuses', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasRisksByAggregatedApplicationsSchemaMany200Statuses();
      });

      it('should create an instance of V21ApplicationManagementApplicationManagementSchemasRisksByAggregatedApplicationsSchemaMany200Statuses', function() {
        // TODO: update the code to test V21ApplicationManagementApplicationManagementSchemasRisksByAggregatedApplicationsSchemaMany200Statuses
        expect(instance).to.be.a(S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasRisksByAggregatedApplicationsSchemaMany200Statuses);
      });

      it('should have the property ticketCategory (base name: "ticketCategory")', function() {
        // TODO: update the code to test the property ticketCategory
        expect(instance).to.have.property('ticketCategory');
        // expect(instance.ticketCategory).to.be(expectedValueLiteral);
      });

      it('should have the property count (base name: "count")', function() {
        // TODO: update the code to test the property count
        expect(instance).to.have.property('count');
        // expect(instance.count).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

      it('should have the property key (base name: "key")', function() {
        // TODO: update the code to test the property key
        expect(instance).to.have.property('key');
        // expect(instance.key).to.be(expectedValueLiteral);
      });

    });
  });

}));
