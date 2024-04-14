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
    describe('RangerGatewaySchemaPostUpdateGatewayDataFilter', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.RangerGatewaySchemaPostUpdateGatewayDataFilter();
      });

      it('should create an instance of RangerGatewaySchemaPostUpdateGatewayDataFilter', function() {
        // TODO: update the code to test RangerGatewaySchemaPostUpdateGatewayDataFilter
        expect(instance).to.be.a(S1MgmtApi.RangerGatewaySchemaPostUpdateGatewayDataFilter);
      });

      it('should have the property numberOfRangersLte (base name: "numberOfRangers__lte")', function() {
        // TODO: update the code to test the property numberOfRangersLte
        expect(instance).to.have.property('numberOfRangersLte');
        // expect(instance.numberOfRangersLte).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfAgentsGte (base name: "numberOfAgents__gte")', function() {
        // TODO: update the code to test the property numberOfAgentsGte
        expect(instance).to.have.property('numberOfAgentsGte');
        // expect(instance.numberOfAgentsGte).to.be(expectedValueLiteral);
      });

      it('should have the property createdAtGt (base name: "createdAt__gt")', function() {
        // TODO: update the code to test the property createdAtGt
        expect(instance).to.have.property('createdAtGt');
        // expect(instance.createdAtGt).to.be(expectedValueLiteral);
      });

      it('should have the property snmpScan (base name: "snmpScan")', function() {
        // TODO: update the code to test the property snmpScan
        expect(instance).to.have.property('snmpScan');
        // expect(instance.snmpScan).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfRangersBetween (base name: "numberOfRangers__between")', function() {
        // TODO: update the code to test the property numberOfRangersBetween
        expect(instance).to.have.property('numberOfRangersBetween');
        // expect(instance.numberOfRangersBetween).to.be(expectedValueLiteral);
      });

      it('should have the property icmpScan (base name: "icmpScan")', function() {
        // TODO: update the code to test the property icmpScan
        expect(instance).to.have.property('icmpScan');
        // expect(instance.icmpScan).to.be(expectedValueLiteral);
      });

      it('should have the property externalIp (base name: "externalIp")', function() {
        // TODO: update the code to test the property externalIp
        expect(instance).to.have.property('externalIp');
        // expect(instance.externalIp).to.be(expectedValueLiteral);
      });

      it('should have the property scanOnlyLocalSubnets (base name: "scanOnlyLocalSubnets")', function() {
        // TODO: update the code to test the property scanOnlyLocalSubnets
        expect(instance).to.have.property('scanOnlyLocalSubnets');
        // expect(instance.scanOnlyLocalSubnets).to.be(expectedValueLiteral);
      });

      it('should have the property connectedRangersGt (base name: "connectedRangers__gt")', function() {
        // TODO: update the code to test the property connectedRangersGt
        expect(instance).to.have.property('connectedRangersGt');
        // expect(instance.connectedRangersGt).to.be(expectedValueLiteral);
      });

      it('should have the property udpPortsContains (base name: "udpPorts__contains")', function() {
        // TODO: update the code to test the property udpPortsContains
        expect(instance).to.have.property('udpPortsContains');
        // expect(instance.udpPortsContains).to.be(expectedValueLiteral);
      });

      it('should have the property connectedRangersBetween (base name: "connectedRangers__between")', function() {
        // TODO: update the code to test the property connectedRangersBetween
        expect(instance).to.have.property('connectedRangersBetween');
        // expect(instance.connectedRangersBetween).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAtLt (base name: "updatedAt__lt")', function() {
        // TODO: update the code to test the property updatedAtLt
        expect(instance).to.have.property('updatedAtLt');
        // expect(instance.updatedAtLt).to.be(expectedValueLiteral);
      });

      it('should have the property archived (base name: "archived")', function() {
        // TODO: update the code to test the property archived
        expect(instance).to.have.property('archived');
        // expect(instance.archived).to.be(expectedValueLiteral);
      });

      it('should have the property ids (base name: "ids")', function() {
        // TODO: update the code to test the property ids
        expect(instance).to.have.property('ids');
        // expect(instance.ids).to.be(expectedValueLiteral);
      });

      it('should have the property query (base name: "query")', function() {
        // TODO: update the code to test the property query
        expect(instance).to.have.property('query');
        // expect(instance.query).to.be(expectedValueLiteral);
      });

      it('should have the property agentPercentageLt (base name: "agentPercentage__lt")', function() {
        // TODO: update the code to test the property agentPercentageLt
        expect(instance).to.have.property('agentPercentageLt');
        // expect(instance.agentPercentageLt).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfRangersGt (base name: "numberOfRangers__gt")', function() {
        // TODO: update the code to test the property numberOfRangersGt
        expect(instance).to.have.property('numberOfRangersGt');
        // expect(instance.numberOfRangersGt).to.be(expectedValueLiteral);
      });

      it('should have the property totalAgentsLte (base name: "totalAgents__lte")', function() {
        // TODO: update the code to test the property totalAgentsLte
        expect(instance).to.have.property('totalAgentsLte');
        // expect(instance.totalAgentsLte).to.be(expectedValueLiteral);
      });

      it('should have the property connectedRangersGte (base name: "connectedRangers__gte")', function() {
        // TODO: update the code to test the property connectedRangersGte
        expect(instance).to.have.property('connectedRangersGte');
        // expect(instance.connectedRangersGte).to.be(expectedValueLiteral);
      });

      it('should have the property createdAtLt (base name: "createdAt__lt")', function() {
        // TODO: update the code to test the property createdAtLt
        expect(instance).to.have.property('createdAtLt');
        // expect(instance.createdAtLt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAtGte (base name: "updatedAt__gte")', function() {
        // TODO: update the code to test the property updatedAtGte
        expect(instance).to.have.property('updatedAtGte');
        // expect(instance.updatedAtGte).to.be(expectedValueLiteral);
      });

      it('should have the property smbScan (base name: "smbScan")', function() {
        // TODO: update the code to test the property smbScan
        expect(instance).to.have.property('smbScan');
        // expect(instance.smbScan).to.be(expectedValueLiteral);
      });

      it('should have the property agentPercentageBetween (base name: "agentPercentage__between")', function() {
        // TODO: update the code to test the property agentPercentageBetween
        expect(instance).to.have.property('agentPercentageBetween');
        // expect(instance.agentPercentageBetween).to.be(expectedValueLiteral);
      });

      it('should have the property networkNameContains (base name: "networkName__contains")', function() {
        // TODO: update the code to test the property networkNameContains
        expect(instance).to.have.property('networkNameContains');
        // expect(instance.networkNameContains).to.be(expectedValueLiteral);
      });

      it('should have the property externalIpContains (base name: "externalIp__contains")', function() {
        // TODO: update the code to test the property externalIpContains
        expect(instance).to.have.property('externalIpContains');
        // expect(instance.externalIpContains).to.be(expectedValueLiteral);
      });

      it('should have the property agentPercentageGt (base name: "agentPercentage__gt")', function() {
        // TODO: update the code to test the property agentPercentageGt
        expect(instance).to.have.property('agentPercentageGt');
        // expect(instance.agentPercentageGt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAtGt (base name: "updatedAt__gt")', function() {
        // TODO: update the code to test the property updatedAtGt
        expect(instance).to.have.property('updatedAtGt');
        // expect(instance.updatedAtGt).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturerContains (base name: "manufacturer__contains")', function() {
        // TODO: update the code to test the property manufacturerContains
        expect(instance).to.have.property('manufacturerContains');
        // expect(instance.manufacturerContains).to.be(expectedValueLiteral);
      });

      it('should have the property connectedRangersLte (base name: "connectedRangers__lte")', function() {
        // TODO: update the code to test the property connectedRangersLte
        expect(instance).to.have.property('connectedRangersLte');
        // expect(instance.connectedRangersLte).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfRangersLt (base name: "numberOfRangers__lt")', function() {
        // TODO: update the code to test the property numberOfRangersLt
        expect(instance).to.have.property('numberOfRangersLt');
        // expect(instance.numberOfRangersLt).to.be(expectedValueLiteral);
      });

      it('should have the property createdAtLte (base name: "createdAt__lte")', function() {
        // TODO: update the code to test the property createdAtLte
        expect(instance).to.have.property('createdAtLte');
        // expect(instance.createdAtLte).to.be(expectedValueLiteral);
      });

      it('should have the property rdnsScan (base name: "rdnsScan")', function() {
        // TODO: update the code to test the property rdnsScan
        expect(instance).to.have.property('rdnsScan');
        // expect(instance.rdnsScan).to.be(expectedValueLiteral);
      });

      it('should have the property totalAgentsGte (base name: "totalAgents__gte")', function() {
        // TODO: update the code to test the property totalAgentsGte
        expect(instance).to.have.property('totalAgentsGte');
        // expect(instance.totalAgentsGte).to.be(expectedValueLiteral);
      });

      it('should have the property agentPercentageLte (base name: "agentPercentage__lte")', function() {
        // TODO: update the code to test the property agentPercentageLte
        expect(instance).to.have.property('agentPercentageLte');
        // expect(instance.agentPercentageLte).to.be(expectedValueLiteral);
      });

      it('should have the property allowScan (base name: "allowScan")', function() {
        // TODO: update the code to test the property allowScan
        expect(instance).to.have.property('allowScan');
        // expect(instance.allowScan).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfAgentsLt (base name: "numberOfAgents__lt")', function() {
        // TODO: update the code to test the property numberOfAgentsLt
        expect(instance).to.have.property('numberOfAgentsLt');
        // expect(instance.numberOfAgentsLt).to.be(expectedValueLiteral);
      });

      it('should have the property _new (base name: "new")', function() {
        // TODO: update the code to test the property _new
        expect(instance).to.have.property('_new');
        // expect(instance._new).to.be(expectedValueLiteral);
      });

      it('should have the property totalAgentsBetween (base name: "totalAgents__between")', function() {
        // TODO: update the code to test the property totalAgentsBetween
        expect(instance).to.have.property('totalAgentsBetween');
        // expect(instance.totalAgentsBetween).to.be(expectedValueLiteral);
      });

      it('should have the property tcpPortsContains (base name: "tcpPorts__contains")', function() {
        // TODO: update the code to test the property tcpPortsContains
        expect(instance).to.have.property('tcpPortsContains');
        // expect(instance.tcpPortsContains).to.be(expectedValueLiteral);
      });

      it('should have the property totalAgentsLt (base name: "totalAgents__lt")', function() {
        // TODO: update the code to test the property totalAgentsLt
        expect(instance).to.have.property('totalAgentsLt');
        // expect(instance.totalAgentsLt).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfAgentsLte (base name: "numberOfAgents__lte")', function() {
        // TODO: update the code to test the property numberOfAgentsLte
        expect(instance).to.have.property('numberOfAgentsLte');
        // expect(instance.numberOfAgentsLte).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAtLte (base name: "updatedAt__lte")', function() {
        // TODO: update the code to test the property updatedAtLte
        expect(instance).to.have.property('updatedAtLte');
        // expect(instance.updatedAtLte).to.be(expectedValueLiteral);
      });

      it('should have the property createdAtBetween (base name: "createdAt__between")', function() {
        // TODO: update the code to test the property createdAtBetween
        expect(instance).to.have.property('createdAtBetween');
        // expect(instance.createdAtBetween).to.be(expectedValueLiteral);
      });

      it('should have the property ipContains (base name: "ip__contains")', function() {
        // TODO: update the code to test the property ipContains
        expect(instance).to.have.property('ipContains');
        // expect(instance.ipContains).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfAgentsBetween (base name: "numberOfAgents__between")', function() {
        // TODO: update the code to test the property numberOfAgentsBetween
        expect(instance).to.have.property('numberOfAgentsBetween');
        // expect(instance.numberOfAgentsBetween).to.be(expectedValueLiteral);
      });

      it('should have the property ip (base name: "ip")', function() {
        // TODO: update the code to test the property ip
        expect(instance).to.have.property('ip');
        // expect(instance.ip).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturer (base name: "manufacturer")', function() {
        // TODO: update the code to test the property manufacturer
        expect(instance).to.have.property('manufacturer');
        // expect(instance.manufacturer).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAtBetween (base name: "updatedAt__between")', function() {
        // TODO: update the code to test the property updatedAtBetween
        expect(instance).to.have.property('updatedAtBetween');
        // expect(instance.updatedAtBetween).to.be(expectedValueLiteral);
      });

      it('should have the property createdAtGte (base name: "createdAt__gte")', function() {
        // TODO: update the code to test the property createdAtGte
        expect(instance).to.have.property('createdAtGte');
        // expect(instance.createdAtGte).to.be(expectedValueLiteral);
      });

      it('should have the property siteIds (base name: "siteIds")', function() {
        // TODO: update the code to test the property siteIds
        expect(instance).to.have.property('siteIds');
        // expect(instance.siteIds).to.be(expectedValueLiteral);
      });

      it('should have the property accountIds (base name: "accountIds")', function() {
        // TODO: update the code to test the property accountIds
        expect(instance).to.have.property('accountIds');
        // expect(instance.accountIds).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfAgentsGt (base name: "numberOfAgents__gt")', function() {
        // TODO: update the code to test the property numberOfAgentsGt
        expect(instance).to.have.property('numberOfAgentsGt');
        // expect(instance.numberOfAgentsGt).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfRangersGte (base name: "numberOfRangers__gte")', function() {
        // TODO: update the code to test the property numberOfRangersGte
        expect(instance).to.have.property('numberOfRangersGte');
        // expect(instance.numberOfRangersGte).to.be(expectedValueLiteral);
      });

      it('should have the property macAddressContains (base name: "macAddress__contains")', function() {
        // TODO: update the code to test the property macAddressContains
        expect(instance).to.have.property('macAddressContains');
        // expect(instance.macAddressContains).to.be(expectedValueLiteral);
      });

      it('should have the property macAddress (base name: "macAddress")', function() {
        // TODO: update the code to test the property macAddress
        expect(instance).to.have.property('macAddress');
        // expect(instance.macAddress).to.be(expectedValueLiteral);
      });

      it('should have the property agentPercentageGte (base name: "agentPercentage__gte")', function() {
        // TODO: update the code to test the property agentPercentageGte
        expect(instance).to.have.property('agentPercentageGte');
        // expect(instance.agentPercentageGte).to.be(expectedValueLiteral);
      });

      it('should have the property mdnsScan (base name: "mdnsScan")', function() {
        // TODO: update the code to test the property mdnsScan
        expect(instance).to.have.property('mdnsScan');
        // expect(instance.mdnsScan).to.be(expectedValueLiteral);
      });

      it('should have the property connectedRangersLt (base name: "connectedRangers__lt")', function() {
        // TODO: update the code to test the property connectedRangersLt
        expect(instance).to.have.property('connectedRangersLt');
        // expect(instance.connectedRangersLt).to.be(expectedValueLiteral);
      });

      it('should have the property totalAgentsGt (base name: "totalAgents__gt")', function() {
        // TODO: update the code to test the property totalAgentsGt
        expect(instance).to.have.property('totalAgentsGt');
        // expect(instance.totalAgentsGt).to.be(expectedValueLiteral);
      });

    });
  });

}));
