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
    describe('DeviceControlSchemasDeviceSchema200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.DeviceControlSchemasDeviceSchema200Data();
      });

      it('should create an instance of DeviceControlSchemasDeviceSchema200Data', function() {
        // TODO: update the code to test DeviceControlSchemasDeviceSchema200Data
        expect(instance).to.be.a(S1MgmtApi.DeviceControlSchemasDeviceSchema200Data);
      });

      it('should have the property ruleType (base name: "ruleType")', function() {
        // TODO: update the code to test the property ruleType
        expect(instance).to.have.property('ruleType');
        // expect(instance.ruleType).to.be(expectedValueLiteral);
      });

      it('should have the property scopeId (base name: "scopeId")', function() {
        // TODO: update the code to test the property scopeId
        expect(instance).to.have.property('scopeId');
        // expect(instance.scopeId).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property uid (base name: "uid")', function() {
        // TODO: update the code to test the property uid
        expect(instance).to.have.property('uid');
        // expect(instance.uid).to.be(expectedValueLiteral);
      });

      it('should have the property productId (base name: "productId")', function() {
        // TODO: update the code to test the property productId
        expect(instance).to.have.property('productId');
        // expect(instance.productId).to.be(expectedValueLiteral);
      });

      it('should have the property vendorId (base name: "vendorId")', function() {
        // TODO: update the code to test the property vendorId
        expect(instance).to.have.property('vendorId');
        // expect(instance.vendorId).to.be(expectedValueLiteral);
      });

      it('should have the property deviceId (base name: "deviceId")', function() {
        // TODO: update the code to test the property deviceId
        expect(instance).to.have.property('deviceId');
        // expect(instance.deviceId).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property deviceClassName (base name: "deviceClassName")', function() {
        // TODO: update the code to test the property deviceClassName
        expect(instance).to.have.property('deviceClassName');
        // expect(instance.deviceClassName).to.be(expectedValueLiteral);
      });

      it('should have the property creatorId (base name: "creatorId")', function() {
        // TODO: update the code to test the property creatorId
        expect(instance).to.have.property('creatorId');
        // expect(instance.creatorId).to.be(expectedValueLiteral);
      });

      it('should have the property deviceClass (base name: "deviceClass")', function() {
        // TODO: update the code to test the property deviceClass
        expect(instance).to.have.property('deviceClass');
        // expect(instance.deviceClass).to.be(expectedValueLiteral);
      });

      it('should have the property deviceInformationServiceInfoValue (base name: "deviceInformationServiceInfoValue")', function() {
        // TODO: update the code to test the property deviceInformationServiceInfoValue
        expect(instance).to.have.property('deviceInformationServiceInfoValue');
        // expect(instance.deviceInformationServiceInfoValue).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property ruleName (base name: "ruleName")', function() {
        // TODO: update the code to test the property ruleName
        expect(instance).to.have.property('ruleName');
        // expect(instance.ruleName).to.be(expectedValueLiteral);
      });

      it('should have the property scopeName (base name: "scopeName")', function() {
        // TODO: update the code to test the property scopeName
        expect(instance).to.have.property('scopeName');
        // expect(instance.scopeName).to.be(expectedValueLiteral);
      });

      it('should have the property scope (base name: "scope")', function() {
        // TODO: update the code to test the property scope
        expect(instance).to.have.property('scope');
        // expect(instance.scope).to.be(expectedValueLiteral);
      });

      it('should have the property gattService (base name: "gattService")', function() {
        // TODO: update the code to test the property gattService
        expect(instance).to.have.property('gattService');
        // expect(instance.gattService).to.be(expectedValueLiteral);
      });

      it('should have the property action (base name: "action")', function() {
        // TODO: update the code to test the property action
        expect(instance).to.have.property('action');
        // expect(instance.action).to.be(expectedValueLiteral);
      });

      it('should have the property order (base name: "order")', function() {
        // TODO: update the code to test the property order
        expect(instance).to.have.property('order');
        // expect(instance.order).to.be(expectedValueLiteral);
      });

      it('should have the property deviceName (base name: "deviceName")', function() {
        // TODO: update the code to test the property deviceName
        expect(instance).to.have.property('deviceName');
        // expect(instance.deviceName).to.be(expectedValueLiteral);
      });

      it('should have the property creator (base name: "creator")', function() {
        // TODO: update the code to test the property creator
        expect(instance).to.have.property('creator');
        // expect(instance.creator).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property editable (base name: "editable")', function() {
        // TODO: update the code to test the property editable
        expect(instance).to.have.property('editable');
        // expect(instance.editable).to.be(expectedValueLiteral);
      });

      it('should have the property _interface (base name: "interface")', function() {
        // TODO: update the code to test the property _interface
        expect(instance).to.have.property('_interface');
        // expect(instance._interface).to.be(expectedValueLiteral);
      });

      it('should have the property deviceInformationServiceInfoKey (base name: "deviceInformationServiceInfoKey")', function() {
        // TODO: update the code to test the property deviceInformationServiceInfoKey
        expect(instance).to.have.property('deviceInformationServiceInfoKey');
        // expect(instance.deviceInformationServiceInfoKey).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property accessPermission (base name: "accessPermission")', function() {
        // TODO: update the code to test the property accessPermission
        expect(instance).to.have.property('accessPermission');
        // expect(instance.accessPermission).to.be(expectedValueLiteral);
      });

      it('should have the property bluetoothAddress (base name: "bluetoothAddress")', function() {
        // TODO: update the code to test the property bluetoothAddress
        expect(instance).to.have.property('bluetoothAddress');
        // expect(instance.bluetoothAddress).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturerName (base name: "manufacturerName")', function() {
        // TODO: update the code to test the property manufacturerName
        expect(instance).to.have.property('manufacturerName');
        // expect(instance.manufacturerName).to.be(expectedValueLiteral);
      });

      it('should have the property minorClasses (base name: "minorClasses")', function() {
        // TODO: update the code to test the property minorClasses
        expect(instance).to.have.property('minorClasses');
        // expect(instance.minorClasses).to.be(expectedValueLiteral);
      });

    });
  });

}));
