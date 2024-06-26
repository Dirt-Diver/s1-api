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
    describe('AgentsSchemasAgentsUpdateSoftwareActionSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.AgentsSchemasAgentsUpdateSoftwareActionSchemaData();
      });

      it('should create an instance of AgentsSchemasAgentsUpdateSoftwareActionSchemaData', function() {
        // TODO: update the code to test AgentsSchemasAgentsUpdateSoftwareActionSchemaData
        expect(instance).to.be.a(S1MgmtApi.AgentsSchemasAgentsUpdateSoftwareActionSchemaData);
      });

      it('should have the property fileName (base name: "fileName")', function() {
        // TODO: update the code to test the property fileName
        expect(instance).to.have.property('fileName');
        // expect(instance.fileName).to.be(expectedValueLiteral);
      });

      it('should have the property osType (base name: "osType")', function() {
        // TODO: update the code to test the property osType
        expect(instance).to.have.property('osType');
        // expect(instance.osType).to.be(expectedValueLiteral);
      });

      it('should have the property path (base name: "path")', function() {
        // TODO: update the code to test the property path
        expect(instance).to.have.property('path');
        // expect(instance.path).to.be(expectedValueLiteral);
      });

      it('should have the property ignoreConflicts (base name: "ignoreConflicts")', function() {
        // TODO: update the code to test the property ignoreConflicts
        expect(instance).to.have.property('ignoreConflicts');
        // expect(instance.ignoreConflicts).to.be(expectedValueLiteral);
      });

      it('should have the property isScheduled (base name: "isScheduled")', function() {
        // TODO: update the code to test the property isScheduled
        expect(instance).to.have.property('isScheduled');
        // expect(instance.isScheduled).to.be(expectedValueLiteral);
      });

      it('should have the property packageId (base name: "packageId")', function() {
        // TODO: update the code to test the property packageId
        expect(instance).to.have.property('packageId');
        // expect(instance.packageId).to.be(expectedValueLiteral);
      });

      it('should have the property allowDowngrade (base name: "allowDowngrade")', function() {
        // TODO: update the code to test the property allowDowngrade
        expect(instance).to.have.property('allowDowngrade');
        // expect(instance.allowDowngrade).to.be(expectedValueLiteral);
      });

      it('should have the property packageType (base name: "packageType")', function() {
        // TODO: update the code to test the property packageType
        expect(instance).to.have.property('packageType');
        // expect(instance.packageType).to.be(expectedValueLiteral);
      });

    });
  });

}));
