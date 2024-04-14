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
    describe('SchemasRangerTableViewSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.SchemasRangerTableViewSchemaMany200Data();
      });

      it('should create an instance of SchemasRangerTableViewSchemaMany200Data', function() {
        // TODO: update the code to test SchemasRangerTableViewSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.SchemasRangerTableViewSchemaMany200Data);
      });

      it('should have the property previousOsVersion (base name: "previousOsVersion")', function() {
        // TODO: update the code to test the property previousOsVersion
        expect(instance).to.have.property('previousOsVersion');
        // expect(instance.previousOsVersion).to.be(expectedValueLiteral);
      });

      it('should have the property hasUserLabel (base name: "hasUserLabel")', function() {
        // TODO: update the code to test the property hasUserLabel
        expect(instance).to.have.property('hasUserLabel');
        // expect(instance.hasUserLabel).to.be(expectedValueLiteral);
      });

      it('should have the property tcpPorts (base name: "tcpPorts")', function() {
        // TODO: update the code to test the property tcpPorts
        expect(instance).to.have.property('tcpPorts');
        // expect(instance.tcpPorts).to.be(expectedValueLiteral);
      });

      it('should have the property lastSeen (base name: "lastSeen")', function() {
        // TODO: update the code to test the property lastSeen
        expect(instance).to.have.property('lastSeen');
        // expect(instance.lastSeen).to.be(expectedValueLiteral);
      });

      it('should have the property osVersion (base name: "osVersion")', function() {
        // TODO: update the code to test the property osVersion
        expect(instance).to.have.property('osVersion');
        // expect(instance.osVersion).to.be(expectedValueLiteral);
      });

      it('should have the property deviceReviewLog (base name: "deviceReviewLog")', function() {
        // TODO: update the code to test the property deviceReviewLog
        expect(instance).to.have.property('deviceReviewLog');
        // expect(instance.deviceReviewLog).to.be(expectedValueLiteral);
      });

      it('should have the property labelUpdatedAt (base name: "labelUpdatedAt")', function() {
        // TODO: update the code to test the property labelUpdatedAt
        expect(instance).to.have.property('labelUpdatedAt');
        // expect(instance.labelUpdatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property networks (base name: "networks")', function() {
        // TODO: update the code to test the property networks
        expect(instance).to.have.property('networks');
        // expect(instance.networks).to.be(expectedValueLiteral);
      });

      it('should have the property gatewayIpAddress (base name: "gatewayIpAddress")', function() {
        // TODO: update the code to test the property gatewayIpAddress
        expect(instance).to.have.property('gatewayIpAddress');
        // expect(instance.gatewayIpAddress).to.be(expectedValueLiteral);
      });

      it('should have the property discoveryMethods (base name: "discoveryMethods")', function() {
        // TODO: update the code to test the property discoveryMethods
        expect(instance).to.have.property('discoveryMethods');
        // expect(instance.discoveryMethods).to.be(expectedValueLiteral);
      });

      it('should have the property localIp (base name: "localIp")', function() {
        // TODO: update the code to test the property localIp
        expect(instance).to.have.property('localIp');
        // expect(instance.localIp).to.be(expectedValueLiteral);
      });

      it('should have the property hasIdentity (base name: "hasIdentity")', function() {
        // TODO: update the code to test the property hasIdentity
        expect(instance).to.have.property('hasIdentity');
        // expect(instance.hasIdentity).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property gatewayMacAddress (base name: "gatewayMacAddress")', function() {
        // TODO: update the code to test the property gatewayMacAddress
        expect(instance).to.have.property('gatewayMacAddress');
        // expect(instance.gatewayMacAddress).to.be(expectedValueLiteral);
      });

      it('should have the property udpPorts (base name: "udpPorts")', function() {
        // TODO: update the code to test the property udpPorts
        expect(instance).to.have.property('udpPorts');
        // expect(instance.udpPorts).to.be(expectedValueLiteral);
      });

      it('should have the property deviceReview (base name: "deviceReview")', function() {
        // TODO: update the code to test the property deviceReview
        expect(instance).to.have.property('deviceReview');
        // expect(instance.deviceReview).to.be(expectedValueLiteral);
      });

      it('should have the property externalIp (base name: "externalIp")', function() {
        // TODO: update the code to test the property externalIp
        expect(instance).to.have.property('externalIp');
        // expect(instance.externalIp).to.be(expectedValueLiteral);
      });

      it('should have the property deviceFunction (base name: "deviceFunction")', function() {
        // TODO: update the code to test the property deviceFunction
        expect(instance).to.have.property('deviceFunction');
        // expect(instance.deviceFunction).to.be(expectedValueLiteral);
      });

      it('should have the property subnetAddress (base name: "subnetAddress")', function() {
        // TODO: update the code to test the property subnetAddress
        expect(instance).to.have.property('subnetAddress');
        // expect(instance.subnetAddress).to.be(expectedValueLiteral);
      });

      it('should have the property agentId (base name: "agentId")', function() {
        // TODO: update the code to test the property agentId
        expect(instance).to.have.property('agentId');
        // expect(instance.agentId).to.be(expectedValueLiteral);
      });

      it('should have the property hostnames (base name: "hostnames")', function() {
        // TODO: update the code to test the property hostnames
        expect(instance).to.have.property('hostnames');
        // expect(instance.hostnames).to.be(expectedValueLiteral);
      });

      it('should have the property previousOsType (base name: "previousOsType")', function() {
        // TODO: update the code to test the property previousOsType
        expect(instance).to.have.property('previousOsType');
        // expect(instance.previousOsType).to.be(expectedValueLiteral);
      });

      it('should have the property macAddress (base name: "macAddress")', function() {
        // TODO: update the code to test the property macAddress
        expect(instance).to.have.property('macAddress');
        // expect(instance.macAddress).to.be(expectedValueLiteral);
      });

      it('should have the property ipAddresses (base name: "ipAddresses")', function() {
        // TODO: update the code to test the property ipAddresses
        expect(instance).to.have.property('ipAddresses');
        // expect(instance.ipAddresses).to.be(expectedValueLiteral);
      });

      it('should have the property firstSeen (base name: "firstSeen")', function() {
        // TODO: update the code to test the property firstSeen
        expect(instance).to.have.property('firstSeen');
        // expect(instance.firstSeen).to.be(expectedValueLiteral);
      });

      it('should have the property previousDeviceFunction (base name: "previousDeviceFunction")', function() {
        // TODO: update the code to test the property previousDeviceFunction
        expect(instance).to.have.property('previousDeviceFunction');
        // expect(instance.previousDeviceFunction).to.be(expectedValueLiteral);
      });

      it('should have the property labelUserName (base name: "labelUserName")', function() {
        // TODO: update the code to test the property labelUserName
        expect(instance).to.have.property('labelUserName');
        // expect(instance.labelUserName).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturer (base name: "manufacturer")', function() {
        // TODO: update the code to test the property manufacturer
        expect(instance).to.have.property('manufacturer');
        // expect(instance.manufacturer).to.be(expectedValueLiteral);
      });

      it('should have the property siteName (base name: "siteName")', function() {
        // TODO: update the code to test the property siteName
        expect(instance).to.have.property('siteName');
        // expect(instance.siteName).to.be(expectedValueLiteral);
      });

      it('should have the property fingerPrintScore (base name: "fingerPrintScore")', function() {
        // TODO: update the code to test the property fingerPrintScore
        expect(instance).to.have.property('fingerPrintScore');
        // expect(instance.fingerPrintScore).to.be(expectedValueLiteral);
      });

      it('should have the property osType (base name: "osType")', function() {
        // TODO: update the code to test the property osType
        expect(instance).to.have.property('osType');
        // expect(instance.osType).to.be(expectedValueLiteral);
      });

      it('should have the property domain (base name: "domain")', function() {
        // TODO: update the code to test the property domain
        expect(instance).to.have.property('domain');
        // expect(instance.domain).to.be(expectedValueLiteral);
      });

      it('should have the property networkName (base name: "networkName")', function() {
        // TODO: update the code to test the property networkName
        expect(instance).to.have.property('networkName');
        // expect(instance.networkName).to.be(expectedValueLiteral);
      });

      it('should have the property deviceType (base name: "deviceType")', function() {
        // TODO: update the code to test the property deviceType
        expect(instance).to.have.property('deviceType');
        // expect(instance.deviceType).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

      it('should have the property managedState (base name: "managedState")', function() {
        // TODO: update the code to test the property managedState
        expect(instance).to.have.property('managedState');
        // expect(instance.managedState).to.be(expectedValueLiteral);
      });

      it('should have the property osName (base name: "osName")', function() {
        // TODO: update the code to test the property osName
        expect(instance).to.have.property('osName');
        // expect(instance.osName).to.be(expectedValueLiteral);
      });

    });
  });

}));