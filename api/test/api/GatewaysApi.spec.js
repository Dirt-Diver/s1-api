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

  beforeEach(function() {
    instance = new S1MgmtApi.GatewaysApi();
  });

  describe('(package)', function() {
    describe('GatewaysApi', function() {
      describe('webApiRangerGatewaysGet', function() {
        it('should call webApiRangerGatewaysGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRangerGatewaysGet call and complete the assertions
          /*
          var opts = {};
          opts.cursor = "null";
          opts.numberOfAgentsGte = 56;
          opts.numberOfRangersLte = 56;
          opts.createdAtGt = new Date("2013-10-20T19:20:30+01:00");
          opts.numberOfRangersBetween = "numberOfRangersBetween_example";
          opts.snmpScan = true;
          opts.icmpScan = true;
          opts.externalIp = "externalIp_example";
          opts.scanOnlyLocalSubnets = true;
          opts.connectedRangersGt = 56;
          opts.udpPortsContains = [3.4];
          opts.connectedRangersBetween = "connectedRangersBetween_example";
          opts.updatedAtLt = new Date("2013-10-20T19:20:30+01:00");
          opts.archived = true;
          opts.ids = ["ids_example"];
          opts.query = "query_example";
          opts.countOnly = false;
          opts.numberOfRangersGt = 56;
          opts.agentPercentageLt = 3.4;
          opts.limit = 10;
          opts.totalAgentsLte = 56;
          opts.connectedRangersGte = 56;
          opts.createdAtLt = new Date("2013-10-20T19:20:30+01:00");
          opts.agentPercentageBetween = "agentPercentageBetween_example";
          opts.updatedAtGte = new Date("2013-10-20T19:20:30+01:00");
          opts.smbScan = true;
          opts.externalIpContains = ["externalIpContains_example"];
          opts.skip = 56;
          opts.agentPercentageGt = 3.4;
          opts.skipCount = null;
          opts.sortOrder = "null";
          opts.updatedAtGt = new Date("2013-10-20T19:20:30+01:00");
          opts.connectedRangersLte = 56;
          opts.numberOfRangersLt = 56;
          opts.manufacturerContains = ["manufacturerContains_example"];
          opts.networkNameContains = ["networkNameContains_example"];
          opts.createdAtLte = new Date("2013-10-20T19:20:30+01:00");
          opts.rdnsScan = true;
          opts.totalAgentsGte = 56;
          opts.agentPercentageLte = 3.4;
          opts.allowScan = "allowScan_example";
          opts.numberOfAgentsLt = 56;
          opts._new = true;
          opts.totalAgentsBetween = "totalAgentsBetween_example";
          opts.tcpPortsContains = [3.4];
          opts.totalAgentsLt = 56;
          opts.sortBy = "null";
          opts.numberOfAgentsLte = 56;
          opts.updatedAtLte = new Date("2013-10-20T19:20:30+01:00");
          opts.createdAtBetween = "createdAtBetween_example";
          opts.ipContains = ["ipContains_example"];
          opts.numberOfAgentsBetween = "numberOfAgentsBetween_example";
          opts.ip = "ip_example";
          opts.manufacturer = "manufacturer_example";
          opts.updatedAtBetween = "updatedAtBetween_example";
          opts.createdAtGte = new Date("2013-10-20T19:20:30+01:00");
          opts.siteIds = ["siteIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.numberOfAgentsGt = 56;
          opts.numberOfRangersGte = 56;
          opts.macAddressContains = ["macAddressContains_example"];
          opts.macAddress = "macAddress_example";
          opts.agentPercentageGte = 3.4;
          opts.mdnsScan = true;
          opts.connectedRangersLt = 56;
          opts.totalAgentsGt = 56;

          instance.webApiRangerGatewaysGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.RangerGatewaySchemaGatewayViewSchemaMany200);
            {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.pagination).to.be.a(S1MgmtApi.ActivitiesActivityViewSchemaMany200Pagination);
                  expect(data.pagination.totalItems).to.be.a('number');
              expect(data.pagination.totalItems).to.be(580);
              expect(data.pagination.nextCursor).to.be.a('string');
              expect(data.pagination.nextCursor).to.be("YWdlbnRfaWQ6NTgwMjkzODE=");
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(S1MgmtApi.RangerGatewaySchemaGatewayViewSchemaMany200Data);
                expect(data.snmpScan).to.be.a('boolean');
                expect(data.snmpScan).to.be(false);
                expect(data.accountId).to.be.a('number');
                expect(data.accountId).to.be(0);
                expect(data.icmpScan).to.be.a('boolean');
                expect(data.icmpScan).to.be(false);
                {
                  let dataCtr = data.tcpPorts;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                expect(data.scanOnlyLocalSubnets).to.be.a('boolean');
                expect(data.scanOnlyLocalSubnets).to.be(false);
                expect(data.siteId).to.be.a('number');
                expect(data.siteId).to.be(0);
                expect(data.archived).to.be.a('boolean');
                expect(data.archived).to.be(false);
                expect(data.smbScan).to.be.a('boolean');
                expect(data.smbScan).to.be(false);
                expect(data.accountName).to.be.a('string');
                expect(data.accountName).to.be("");
                expect(data.agentPercentage).to.be.a('number');
                expect(data.agentPercentage).to.be(0.0);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("225494730938493804");
                expect(data.udpPortScan).to.be.a('boolean');
                expect(data.udpPortScan).to.be(false);
                {
                  let dataCtr = data.udpPorts;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                expect(data.externalIp).to.be.a('string');
                expect(data.externalIp).to.be("");
                expect(data.rdnsScan).to.be.a('boolean');
                expect(data.rdnsScan).to.be(false);
                expect(data.totalAgents).to.be.a('number');
                expect(data.totalAgents).to.be(0);
                expect(data.allowScan).to.be.a('boolean');
                expect(data.allowScan).to.be(false);
                expect(data.multiScanSsdp).to.be.a('boolean');
                expect(data.multiScanSsdp).to.be(false);
                expect(data._new).to.be.a('boolean');
                expect(data._new).to.be(false);
                expect(data.macAddress).to.be.a('string');
                expect(data.macAddress).to.be("");
                expect(data.discoveryMethod).to.be.a('string');
                expect(data.discoveryMethod).to.be("Automatic");
                expect(data.manufacturer).to.be.a('string');
                expect(data.manufacturer).to.be("");
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.ip).to.be.a('string');
                expect(data.ip).to.be("");
                expect(data.tcpPortScan).to.be.a('boolean');
                expect(data.tcpPortScan).to.be(false);
                expect(data.connectedRangers).to.be.a('number');
                expect(data.connectedRangers).to.be(0);
                expect(data.numberOfRangers).to.be.a('number');
                expect(data.numberOfRangers).to.be(0);
                expect(data.networkName).to.be.a('string');
                expect(data.networkName).to.be("");
                expect(data.numberOfAgents).to.be.a('number');
                expect(data.numberOfAgents).to.be(0);
                {
                  let dataCtr = data.restrictions;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(S1MgmtApi.SchemasRangerSettingsSchema200DataRestrictions);
                    expect(data.annotation).to.be.a('string');
                    expect(data.annotation).to.be("");
                    {
                      let dataCtr = data.values;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("");
                      }
                    }
                    expect(data.type).to.be.a('string');
                    expect(data.type).to.be("ip");
    
                          }
                }
                expect(data.inheritSettings).to.be.a('boolean');
                expect(data.inheritSettings).to.be(false);
                expect(data.mdnsScan).to.be.a('boolean');
                expect(data.mdnsScan).to.be(false);
                expect(data.expiryDate).to.be.a(Date);
                expect(data.expiryDate).to.be(2018-02-27T04:49:26.257525Z);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiRangerGatewaysUpdatePost', function() {
        it('should call webApiRangerGatewaysUpdatePost successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRangerGatewaysUpdatePost call and complete the assertions
          /*
          var opts = {};
          opts.body = new S1MgmtApi.RangerGatewaySchemaPostUpdateGatewayData();
          opts.body.filter = new S1MgmtApi.RangerGatewaySchemaPostUpdateGatewayDataFilter();
          opts.body.filter.numberOfRangersLte = 0;
          opts.body.filter.numberOfAgentsGte = 0;
          opts.body.filter.createdAtGt = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.snmpScan = false;
          opts.body.filter.numberOfRangersBetween = "2-8";
          opts.body.filter.icmpScan = false;
          opts.body.filter.externalIp = "";
          opts.body.filter.scanOnlyLocalSubnets = false;
          opts.body.filter.connectedRangersGt = 0;
          opts.body.filter.udpPortsContains = [137,2002];
          opts.body.filter.connectedRangersBetween = "2-8";
          opts.body.filter.updatedAtLt = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.archived = false;
          opts.body.filter.ids = ["225494730938493804","225494730938493915"];
          opts.body.filter.query = "";
          opts.body.filter.agentPercentageLt = 0.0;
          opts.body.filter.numberOfRangersGt = 0;
          opts.body.filter.totalAgentsLte = 0;
          opts.body.filter.connectedRangersGte = 0;
          opts.body.filter.createdAtLt = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.updatedAtGte = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.smbScan = false;
          opts.body.filter.agentPercentageBetween = "70-80";
          opts.body.filter.networkNameContains = ["Network1"];
          opts.body.filter.externalIpContains = ["192.168.0.1/24","10.1"];
          opts.body.filter.agentPercentageGt = 0.0;
          opts.body.filter.updatedAtGt = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.manufacturerContains = ["Company"];
          opts.body.filter.connectedRangersLte = 0;
          opts.body.filter.numberOfRangersLt = 0;
          opts.body.filter.createdAtLte = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.rdnsScan = false;
          opts.body.filter.totalAgentsGte = 0;
          opts.body.filter.agentPercentageLte = 0.0;
          opts.body.filter.allowScan = "";
          opts.body.filter.numberOfAgentsLt = 0;
          opts.body.filter._new = false;
          opts.body.filter.totalAgentsBetween = "2-8";
          opts.body.filter.tcpPortsContains = [80,24];
          opts.body.filter.totalAgentsLt = 0;
          opts.body.filter.numberOfAgentsLte = 0;
          opts.body.filter.updatedAtLte = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.createdAtBetween = "1514978890136-1514978650130";
          opts.body.filter.ipContains = ["192.168.0.1/24","10.1"];
          opts.body.filter.numberOfAgentsBetween = "2-8";
          opts.body.filter.ip = "";
          opts.body.filter.manufacturer = "";
          opts.body.filter.updatedAtBetween = "1514978890136-1514978650130";
          opts.body.filter.createdAtGte = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.siteIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.accountIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.numberOfAgentsGt = 0;
          opts.body.filter.numberOfRangersGte = 0;
          opts.body.filter.macAddressContains = ["aa:ee:b1"];
          opts.body.filter.macAddress = "";
          opts.body.filter.agentPercentageGte = 0.0;
          opts.body.filter.mdnsScan = false;
          opts.body.filter.connectedRangersLt = 0;
          opts.body.filter.totalAgentsGt = 0;
          opts.body.data = new S1MgmtApi.RangerGatewaySchemaPostUpdateGatewayDataData();
          opts.body.data.allowScan = false;
          opts.body.data.inheritSettings = false;
          opts.body.data.scanOnlyLocalSubnets = false;
          opts.body.data.archived = false;

          instance.webApiRangerGatewaysUpdatePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.AffectedResultsSchema200);
            {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.data).to.be.a(S1MgmtApi.AffectedResultsSchema200Data);
                  expect(data.data.affected).to.be.a('number');
              expect(data.data.affected).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiRangerGatewaysgatewayIdPut', function() {
        it('should call webApiRangerGatewaysgatewayIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRangerGatewaysgatewayIdPut call and complete the assertions
          /*
          var gatewayId = "gatewayId_example";
          var opts = {};
          opts.body = new S1MgmtApi.RangerGatewaySchemaPutGatewayData();
          opts.body.data = new S1MgmtApi.RangerGatewaySchemaPutGatewayDataData();
          opts.body.data.allowScan = false;
          opts.body.data.snmpScan = false;
          opts.body.data.accountId = 0;
          opts.body.data.udpPorts = [0];
          opts.body.data.udpPortScan = false;
          opts.body.data.icmpScan = false;
          opts.body.data.tcpPorts = [0];
          opts.body.data.tcpPortScan = false;
          opts.body.data.siteId = 0;
          opts.body.data.scanOnlyLocalSubnets = false;
          opts.body.data.networkName = "";
          opts.body.data.restrictions = [new S1MgmtApi.SchemasRangerSettingsSchema200DataRestrictions()];
          opts.body.data.restrictions[0].annotation = "";
          opts.body.data.restrictions[0].values = [""];
          opts.body.data.restrictions[0].type = "ip";
          opts.body.data.multiCastSsdpScan = false;
          opts.body.data.rdnsScan = false;
          opts.body.data.archived = false;
          opts.body.data.inheritSettings = false;
          opts.body.data.mdnsScan = false;
          opts.body.data.smbScan = false;

          instance.webApiRangerGatewaysgatewayIdPut(gatewayId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.RangerGatewaySchemaGatewayViewSchema200);
            {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            expect(data.data).to.be.a(S1MgmtApi.RangerGatewaySchemaGatewayViewSchema200Data);
                  expect(data.data.snmpScan).to.be.a('boolean');
              expect(data.data.snmpScan).to.be(false);
              expect(data.data.accountId).to.be.a('number');
              expect(data.data.accountId).to.be(0);
              expect(data.data.icmpScan).to.be.a('boolean');
              expect(data.data.icmpScan).to.be(false);
              {
                let dataCtr = data.data.tcpPorts;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              expect(data.data.scanOnlyLocalSubnets).to.be.a('boolean');
              expect(data.data.scanOnlyLocalSubnets).to.be(false);
              expect(data.data.siteId).to.be.a('number');
              expect(data.data.siteId).to.be(0);
              expect(data.data.archived).to.be.a('boolean');
              expect(data.data.archived).to.be(false);
              expect(data.data.smbScan).to.be.a('boolean');
              expect(data.data.smbScan).to.be(false);
              expect(data.data.accountName).to.be.a('string');
              expect(data.data.accountName).to.be("");
              expect(data.data.agentPercentage).to.be.a('number');
              expect(data.data.agentPercentage).to.be(0.0);
              expect(data.data.id).to.be.a('string');
              expect(data.data.id).to.be("225494730938493804");
              expect(data.data.udpPortScan).to.be.a('boolean');
              expect(data.data.udpPortScan).to.be(false);
              {
                let dataCtr = data.data.udpPorts;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              expect(data.data.externalIp).to.be.a('string');
              expect(data.data.externalIp).to.be("");
              expect(data.data.rdnsScan).to.be.a('boolean');
              expect(data.data.rdnsScan).to.be(false);
              expect(data.data.totalAgents).to.be.a('number');
              expect(data.data.totalAgents).to.be(0);
              expect(data.data.allowScan).to.be.a('boolean');
              expect(data.data.allowScan).to.be(false);
              expect(data.data.multiScanSsdp).to.be.a('boolean');
              expect(data.data.multiScanSsdp).to.be(false);
              expect(data.data._new).to.be.a('boolean');
              expect(data.data._new).to.be(false);
              expect(data.data.macAddress).to.be.a('string');
              expect(data.data.macAddress).to.be("");
              expect(data.data.discoveryMethod).to.be.a('string');
              expect(data.data.discoveryMethod).to.be("Automatic");
              expect(data.data.manufacturer).to.be.a('string');
              expect(data.data.manufacturer).to.be("");
              expect(data.data.createdAt).to.be.a(Date);
              expect(data.data.createdAt).to.be(2018-02-27T04:49:26.257525Z);
              expect(data.data.ip).to.be.a('string');
              expect(data.data.ip).to.be("");
              expect(data.data.tcpPortScan).to.be.a('boolean');
              expect(data.data.tcpPortScan).to.be(false);
              expect(data.data.connectedRangers).to.be.a('number');
              expect(data.data.connectedRangers).to.be(0);
              expect(data.data.numberOfRangers).to.be.a('number');
              expect(data.data.numberOfRangers).to.be(0);
              expect(data.data.networkName).to.be.a('string');
              expect(data.data.networkName).to.be("");
              expect(data.data.numberOfAgents).to.be.a('number');
              expect(data.data.numberOfAgents).to.be(0);
              {
                let dataCtr = data.data.restrictions;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(S1MgmtApi.SchemasRangerSettingsSchema200DataRestrictions);
                  expect(data.annotation).to.be.a('string');
                  expect(data.annotation).to.be("");
                  {
                    let dataCtr = data.values;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  expect(data.type).to.be.a('string');
                  expect(data.type).to.be("ip");
  
                        }
              }
              expect(data.data.inheritSettings).to.be.a('boolean');
              expect(data.data.inheritSettings).to.be(false);
              expect(data.data.mdnsScan).to.be.a('boolean');
              expect(data.data.mdnsScan).to.be(false);
              expect(data.data.expiryDate).to.be.a(Date);
              expect(data.data.expiryDate).to.be(2018-02-27T04:49:26.257525Z);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
