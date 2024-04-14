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
    describe('V21ApplicationManagementApplicationManagementSchemasAgentApplicationsSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasAgentApplicationsSchemaMany200Data();
      });

      it('should create an instance of V21ApplicationManagementApplicationManagementSchemasAgentApplicationsSchemaMany200Data', function() {
        // TODO: update the code to test V21ApplicationManagementApplicationManagementSchemasAgentApplicationsSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasAgentApplicationsSchemaMany200Data);
      });

      it('should have the property installedDate (base name: "installedDate")', function() {
        // TODO: update the code to test the property installedDate
        expect(instance).to.have.property('installedDate');
        // expect(instance.installedDate).to.be(expectedValueLiteral);
      });

      it('should have the property publisher (base name: "publisher")', function() {
        // TODO: update the code to test the property publisher
        expect(instance).to.have.property('publisher');
        // expect(instance.publisher).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

    });
  });

}));
