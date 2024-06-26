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
    describe('DeviceControlSchemasPostDeviceSettingsSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.DeviceControlSchemasPostDeviceSettingsSchemaData();
      });

      it('should create an instance of DeviceControlSchemasPostDeviceSettingsSchemaData', function() {
        // TODO: update the code to test DeviceControlSchemasPostDeviceSettingsSchemaData
        expect(instance).to.be.a(S1MgmtApi.DeviceControlSchemasPostDeviceSettingsSchemaData);
      });

      it('should have the property reportBlocked (base name: "reportBlocked")', function() {
        // TODO: update the code to test the property reportBlocked
        expect(instance).to.have.property('reportBlocked');
        // expect(instance.reportBlocked).to.be(expectedValueLiteral);
      });

      it('should have the property disableRfcomm (base name: "disableRfcomm")', function() {
        // TODO: update the code to test the property disableRfcomm
        expect(instance).to.have.property('disableRfcomm');
        // expect(instance.disableRfcomm).to.be(expectedValueLiteral);
      });

      it('should have the property disallowAccessPermissionControl (base name: "disallowAccessPermissionControl")', function() {
        // TODO: update the code to test the property disallowAccessPermissionControl
        expect(instance).to.have.property('disallowAccessPermissionControl');
        // expect(instance.disallowAccessPermissionControl).to.be(expectedValueLiteral);
      });

      it('should have the property reportReadOnly (base name: "reportReadOnly")', function() {
        // TODO: update the code to test the property reportReadOnly
        expect(instance).to.have.property('reportReadOnly');
        // expect(instance.reportReadOnly).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        // TODO: update the code to test the property enabled
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

      it('should have the property reportApproved (base name: "reportApproved")', function() {
        // TODO: update the code to test the property reportApproved
        expect(instance).to.have.property('reportApproved');
        // expect(instance.reportApproved).to.be(expectedValueLiteral);
      });

      it('should have the property inherits (base name: "inherits")', function() {
        // TODO: update the code to test the property inherits
        expect(instance).to.have.property('inherits');
        // expect(instance.inherits).to.be(expectedValueLiteral);
      });

      it('should have the property disableBleCommunication (base name: "disableBleCommunication")', function() {
        // TODO: update the code to test the property disableBleCommunication
        expect(instance).to.have.property('disableBleCommunication');
        // expect(instance.disableBleCommunication).to.be(expectedValueLiteral);
      });

      it('should have the property inheritedFrom (base name: "inheritedFrom")', function() {
        // TODO: update the code to test the property inheritedFrom
        expect(instance).to.have.property('inheritedFrom');
        // expect(instance.inheritedFrom).to.be(expectedValueLiteral);
      });

    });
  });

}));
