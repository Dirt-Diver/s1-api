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
    instance = new S1MgmtApi.RoguesApi();
  });

  describe('(package)', function() {
    describe('RoguesApi', function() {
      describe('webApiRoguesReportCsvGet', function() {
        it('should call webApiRoguesReportCsvGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRoguesReportCsvGet call
          /*
          var opts = {};
          opts.externalIp = "externalIp_example";
          opts.hostnamesContains = ["hostnamesContains_example"];
          opts.osVersion = "osVersion_example";
          opts.deviceTypes = ["deviceTypes_example"];
          opts.ids = ["ids_example"];
          opts.query = "query_example";
          opts.osVersionContains = ["osVersionContains_example"];
          opts.externalIpContains = ["externalIpContains_example"];
          opts.firstSeenLte = new Date("2013-10-20T19:20:30+01:00");
          opts.osTypes = ["osTypes_example"];
          opts.lastSeenGt = new Date("2013-10-20T19:20:30+01:00");
          opts.manufacturerContains = ["manufacturerContains_example"];
          opts.firstSeenBetween = "firstSeenBetween_example";
          opts.hostnames = ["hostnames_example"];
          opts.localIpContains = ["localIpContains_example"];
          opts.lastSeenLte = new Date("2013-10-20T19:20:30+01:00");
          opts.firstSeenGt = new Date("2013-10-20T19:20:30+01:00");
          opts.macAddress = "macAddress_example";
          opts.tenant = true;
          opts.groupIds = ["groupIds_example"];
          opts.firstSeenLt = new Date("2013-10-20T19:20:30+01:00");
          opts.localIp = "localIp_example";
          opts.lastSeenGte = new Date("2013-10-20T19:20:30+01:00");
          opts.manufacturer = "manufacturer_example";
          opts.siteIds = ["siteIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.osType = "osType_example";
          opts.firstSeenGte = new Date("2013-10-20T19:20:30+01:00");
          opts.macAddressContains = ["macAddressContains_example"];
          opts.lastSeenBetween = "lastSeenBetween_example";
          opts.deviceType = "deviceType_example";
          opts.lastSeenLt = new Date("2013-10-20T19:20:30+01:00");
          opts.osName = "osName_example";

          instance.webApiRoguesReportCsvGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiRoguesSettingsGet', function() {
        it('should call webApiRoguesSettingsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRoguesSettingsGet call and complete the assertions
          /*
          var opts = {};
          opts.accountIds = ["accountIds_example"];
          opts.siteIds = ["siteIds_example"];

          instance.webApiRoguesSettingsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.RogueSchemasRoguesSettingsSchema200);
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
            expect(data.data).to.be.a(S1MgmtApi.RogueSchemasRoguesSettingsSchema200Data);
                  expect(data.data.accountId).to.be.a('string');
              expect(data.data.accountId).to.be("225494730938493804");
              {
                let dataCtr = data.data.specificPorts;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(S1MgmtApi.SchemasRangerSettingsSchema200DataSpecificPorts);
                  {
                    let dataCtr = data.values;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(0);
                    }
                  }
                  expect(data.type).to.be.a('string');
                  expect(data.type).to.be("single");
  
                        }
              }
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
              expect(data.data.enabled).to.be.a('boolean');
              expect(data.data.enabled).to.be(false);
              expect(data.data.minAgentsInNetworkToScan).to.be.a('number');
              expect(data.data.minAgentsInNetworkToScan).to.be(0);
              expect(data.data.useSpecificPorts).to.be.a('boolean');
              expect(data.data.useSpecificPorts).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiRoguesSettingsPut', function() {
        it('should call webApiRoguesSettingsPut successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRoguesSettingsPut call and complete the assertions
          /*
          var opts = {};
          opts.body = new S1MgmtApi.RogueSchemasPutRoguesSchema();
          opts.body.filter = new S1MgmtApi.SchemasPutRangerSchemaFilter();
          opts.body.filter.accountIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.siteIds = ["225494730938493804","225494730938493915"];
          opts.body.data = new S1MgmtApi.RogueSchemasPutRoguesSchemaData();
          opts.body.data.accountId = "225494730938493804";
          opts.body.data.specificPorts = [new S1MgmtApi.SchemasRangerSettingsSchema200DataSpecificPorts()];
          opts.body.data.specificPorts[0].values = [0];
          opts.body.data.specificPorts[0].type = "single";
          opts.body.data.restrictions = [new S1MgmtApi.SchemasRangerSettingsSchema200DataRestrictions()];
          opts.body.data.restrictions[0].annotation = "";
          opts.body.data.restrictions[0].values = [""];
          opts.body.data.restrictions[0].type = "ip";
          opts.body.data.enabled = false;
          opts.body.data.minAgentsInNetworkToScan = 0;
          opts.body.data.useSpecificPorts = false;

          instance.webApiRoguesSettingsPut(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.RogueSchemasRoguesSettingsSchema200);
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
            expect(data.data).to.be.a(S1MgmtApi.RogueSchemasRoguesSettingsSchema200Data);
                  expect(data.data.accountId).to.be.a('string');
              expect(data.data.accountId).to.be("225494730938493804");
              {
                let dataCtr = data.data.specificPorts;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(S1MgmtApi.SchemasRangerSettingsSchema200DataSpecificPorts);
                  {
                    let dataCtr = data.values;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(0);
                    }
                  }
                  expect(data.type).to.be.a('string');
                  expect(data.type).to.be("single");
  
                        }
              }
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
              expect(data.data.enabled).to.be.a('boolean');
              expect(data.data.enabled).to.be(false);
              expect(data.data.minAgentsInNetworkToScan).to.be.a('number');
              expect(data.data.minAgentsInNetworkToScan).to.be(0);
              expect(data.data.useSpecificPorts).to.be.a('boolean');
              expect(data.data.useSpecificPorts).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiRoguesTableViewGet', function() {
        it('should call webApiRoguesTableViewGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRoguesTableViewGet call and complete the assertions
          /*
          var opts = {};
          opts.cursor = "null";
          opts.externalIp = "externalIp_example";
          opts.hostnamesContains = ["hostnamesContains_example"];
          opts.osVersion = "osVersion_example";
          opts.ids = ["ids_example"];
          opts.deviceTypes = ["deviceTypes_example"];
          opts.query = "query_example";
          opts.countOnly = false;
          opts.limit = 10;
          opts.osVersionContains = ["osVersionContains_example"];
          opts.externalIpContains = ["externalIpContains_example"];
          opts.firstSeenLte = new Date("2013-10-20T19:20:30+01:00");
          opts.osTypes = ["osTypes_example"];
          opts.skip = 56;
          opts.skipCount = null;
          opts.lastSeenGt = new Date("2013-10-20T19:20:30+01:00");
          opts.sortOrder = "null";
          opts.manufacturerContains = ["manufacturerContains_example"];
          opts.firstSeenBetween = "firstSeenBetween_example";
          opts.hostnames = ["hostnames_example"];
          opts.localIpContains = ["localIpContains_example"];
          opts.lastSeenLte = new Date("2013-10-20T19:20:30+01:00");
          opts.firstSeenGt = new Date("2013-10-20T19:20:30+01:00");
          opts.sortBy = "null";
          opts.macAddress = "macAddress_example";
          opts.tenant = true;
          opts.groupIds = ["groupIds_example"];
          opts.firstSeenLt = new Date("2013-10-20T19:20:30+01:00");
          opts.localIp = "localIp_example";
          opts.lastSeenGte = new Date("2013-10-20T19:20:30+01:00");
          opts.manufacturer = "manufacturer_example";
          opts.siteIds = ["siteIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.osType = "osType_example";
          opts.firstSeenGte = new Date("2013-10-20T19:20:30+01:00");
          opts.macAddressContains = ["macAddressContains_example"];
          opts.lastSeenBetween = "lastSeenBetween_example";
          opts.deviceType = "deviceType_example";
          opts.lastSeenLt = new Date("2013-10-20T19:20:30+01:00");
          opts.osName = "osName_example";

          instance.webApiRoguesTableViewGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.RogueSchemasRoguesTableViewSchemaMany200);
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
                expect(data).to.be.a(S1MgmtApi.RogueSchemasRoguesTableViewSchemaMany200Data);
                expect(data.manufacturer).to.be.a('string');
                expect(data.manufacturer).to.be("");
                expect(data.localIp).to.be.a('string');
                expect(data.localIp).to.be("");
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("225494730938493804");
                expect(data.osType).to.be.a('string');
                expect(data.osType).to.be("");
                expect(data.externalIp).to.be.a('string');
                expect(data.externalIp).to.be("");
                expect(data.deviceFunction).to.be.a('string');
                expect(data.deviceFunction).to.be("Server");
                expect(data.macAddress).to.be.a('string');
                expect(data.macAddress).to.be("");
                expect(data.deviceType).to.be.a('string');
                expect(data.deviceType).to.be("Server");
                expect(data.osVersion).to.be.a('string');
                expect(data.osVersion).to.be("");
                expect(data.lastSeen).to.be.a(Date);
                expect(data.lastSeen).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.firstSeen).to.be.a(Date);
                expect(data.firstSeen).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.osName).to.be.a('string');
                expect(data.osName).to.be("");
                {
                  let dataCtr = data.hostnames;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }

                      }
            }

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
