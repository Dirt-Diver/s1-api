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
    describe('V21ApplicationManagementApplicationManagementSchemasRiskyEndpointsSchemaMany200Ticket', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasRiskyEndpointsSchemaMany200Ticket();
      });

      it('should create an instance of V21ApplicationManagementApplicationManagementSchemasRiskyEndpointsSchemaMany200Ticket', function() {
        // TODO: update the code to test V21ApplicationManagementApplicationManagementSchemasRiskyEndpointsSchemaMany200Ticket
        expect(instance).to.be.a(S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasRiskyEndpointsSchemaMany200Ticket);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property projectName (base name: "projectName")', function() {
        // TODO: update the code to test the property projectName
        expect(instance).to.have.property('projectName');
        // expect(instance.projectName).to.be(expectedValueLiteral);
      });

      it('should have the property metaData (base name: "metaData")', function() {
        // TODO: update the code to test the property metaData
        expect(instance).to.have.property('metaData');
        // expect(instance.metaData).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property daysToMitigation (base name: "daysToMitigation")', function() {
        // TODO: update the code to test the property daysToMitigation
        expect(instance).to.have.property('daysToMitigation');
        // expect(instance.daysToMitigation).to.be(expectedValueLiteral);
      });

      it('should have the property analystReason (base name: "analystReason")', function() {
        // TODO: update the code to test the property analystReason
        expect(instance).to.have.property('analystReason');
        // expect(instance.analystReason).to.be(expectedValueLiteral);
      });

      it('should have the property statusCategory (base name: "statusCategory")', function() {
        // TODO: update the code to test the property statusCategory
        expect(instance).to.have.property('statusCategory');
        // expect(instance.statusCategory).to.be(expectedValueLiteral);
      });

      it('should have the property reporter (base name: "reporter")', function() {
        // TODO: update the code to test the property reporter
        expect(instance).to.have.property('reporter');
        // expect(instance.reporter).to.be(expectedValueLiteral);
      });

      it('should have the property endpointsCount (base name: "endpointsCount")', function() {
        // TODO: update the code to test the property endpointsCount
        expect(instance).to.have.property('endpointsCount');
        // expect(instance.endpointsCount).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

    });
  });

}));