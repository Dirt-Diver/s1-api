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
    describe('V21DevicesSchemasDeviceDataSchemaMany200AlertCounts', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21DevicesSchemasDeviceDataSchemaMany200AlertCounts();
      });

      it('should create an instance of V21DevicesSchemasDeviceDataSchemaMany200AlertCounts', function() {
        // TODO: update the code to test V21DevicesSchemasDeviceDataSchemaMany200AlertCounts
        expect(instance).to.be.a(S1MgmtApi.V21DevicesSchemasDeviceDataSchemaMany200AlertCounts);
      });

      it('should have the property notMitigatedCount (base name: "notMitigatedCount")', function() {
        // TODO: update the code to test the property notMitigatedCount
        expect(instance).to.have.property('notMitigatedCount');
        // expect(instance.notMitigatedCount).to.be(expectedValueLiteral);
      });

      it('should have the property adminResolvedCount (base name: "adminResolvedCount")', function() {
        // TODO: update the code to test the property adminResolvedCount
        expect(instance).to.have.property('adminResolvedCount');
        // expect(instance.adminResolvedCount).to.be(expectedValueLiteral);
      });

      it('should have the property conditionalAccessCount (base name: "conditionalAccessCount")', function() {
        // TODO: update the code to test the property conditionalAccessCount
        expect(instance).to.have.property('conditionalAccessCount');
        // expect(instance.conditionalAccessCount).to.be(expectedValueLiteral);
      });

      it('should have the property mitigatedCount (base name: "mitigatedCount")', function() {
        // TODO: update the code to test the property mitigatedCount
        expect(instance).to.have.property('mitigatedCount');
        // expect(instance.mitigatedCount).to.be(expectedValueLiteral);
      });

    });
  });

}));
