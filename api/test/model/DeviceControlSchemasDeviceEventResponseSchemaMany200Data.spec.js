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
    describe('DeviceControlSchemasDeviceEventResponseSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.DeviceControlSchemasDeviceEventResponseSchemaMany200Data();
      });

      it('should create an instance of DeviceControlSchemasDeviceEventResponseSchemaMany200Data', function() {
        // TODO: update the code to test DeviceControlSchemasDeviceEventResponseSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.DeviceControlSchemasDeviceEventResponseSchemaMany200Data);
      });

      it('should have the property profileUuids (base name: "profileUuids")', function() {
        // TODO: update the code to test the property profileUuids
        expect(instance).to.have.property('profileUuids');
        // expect(instance.profileUuids).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property eventType (base name: "eventType")', function() {
        // TODO: update the code to test the property eventType
        expect(instance).to.have.property('eventType');
        // expect(instance.eventType).to.be(expectedValueLiteral);
      });

      it('should have the property uId (base name: "uId")', function() {
        // TODO: update the code to test the property uId
        expect(instance).to.have.property('uId');
        // expect(instance.uId).to.be(expectedValueLiteral);
      });

      it('should have the property productId (base name: "productId")', function() {
        // TODO: update the code to test the property productId
        expect(instance).to.have.property('productId');
        // expect(instance.productId).to.be(expectedValueLiteral);
      });

      it('should have the property serviceClass (base name: "serviceClass")', function() {
        // TODO: update the code to test the property serviceClass
        expect(instance).to.have.property('serviceClass');
        // expect(instance.serviceClass).to.be(expectedValueLiteral);
      });

      it('should have the property vendorId (base name: "vendorId")', function() {
        // TODO: update the code to test the property vendorId
        expect(instance).to.have.property('vendorId');
        // expect(instance.vendorId).to.be(expectedValueLiteral);
      });

      it('should have the property computerName (base name: "computerName")', function() {
        // TODO: update the code to test the property computerName
        expect(instance).to.have.property('computerName');
        // expect(instance.computerName).to.be(expectedValueLiteral);
      });

      it('should have the property eventId (base name: "eventId")', function() {
        // TODO: update the code to test the property eventId
        expect(instance).to.have.property('eventId');
        // expect(instance.eventId).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property minorClass (base name: "minorClass")', function() {
        // TODO: update the code to test the property minorClass
        expect(instance).to.have.property('minorClass');
        // expect(instance.minorClass).to.be(expectedValueLiteral);
      });

      it('should have the property deviceClass (base name: "deviceClass")', function() {
        // TODO: update the code to test the property deviceClass
        expect(instance).to.have.property('deviceClass');
        // expect(instance.deviceClass).to.be(expectedValueLiteral);
      });

      it('should have the property agentId (base name: "agentId")', function() {
        // TODO: update the code to test the property agentId
        expect(instance).to.have.property('agentId');
        // expect(instance.agentId).to.be(expectedValueLiteral);
      });

      it('should have the property lmpVersion (base name: "lmpVersion")', function() {
        // TODO: update the code to test the property lmpVersion
        expect(instance).to.have.property('lmpVersion');
        // expect(instance.lmpVersion).to.be(expectedValueLiteral);
      });

      it('should have the property eventTime (base name: "eventTime")', function() {
        // TODO: update the code to test the property eventTime
        expect(instance).to.have.property('eventTime');
        // expect(instance.eventTime).to.be(expectedValueLiteral);
      });

      it('should have the property deviceId (base name: "deviceId")', function() {
        // TODO: update the code to test the property deviceId
        expect(instance).to.have.property('deviceId');
        // expect(instance.deviceId).to.be(expectedValueLiteral);
      });

      it('should have the property ruleId (base name: "ruleId")', function() {
        // TODO: update the code to test the property ruleId
        expect(instance).to.have.property('ruleId');
        // expect(instance.ruleId).to.be(expectedValueLiteral);
      });

      it('should have the property deviceName (base name: "deviceName")', function() {
        // TODO: update the code to test the property deviceName
        expect(instance).to.have.property('deviceName');
        // expect(instance.deviceName).to.be(expectedValueLiteral);
      });

      it('should have the property lastLoggedInUserName (base name: "lastLoggedInUserName")', function() {
        // TODO: update the code to test the property lastLoggedInUserName
        expect(instance).to.have.property('lastLoggedInUserName');
        // expect(instance.lastLoggedInUserName).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property _interface (base name: "interface")', function() {
        // TODO: update the code to test the property _interface
        expect(instance).to.have.property('_interface');
        // expect(instance._interface).to.be(expectedValueLiteral);
      });

      it('should have the property accessPermission (base name: "accessPermission")', function() {
        // TODO: update the code to test the property accessPermission
        expect(instance).to.have.property('accessPermission');
        // expect(instance.accessPermission).to.be(expectedValueLiteral);
      });

    });
  });

}));