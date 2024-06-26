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
    instance = new S1MgmtApi.ApplicationRiskApi();
  });

  describe('(package)', function() {
    describe('ApplicationRiskApi', function() {
      describe('webApiExportInstalledApplicationsGet', function() {
        it('should call webApiExportInstalledApplicationsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiExportInstalledApplicationsGet call
          /*
          var opts = {};
          opts.typesNin = ["typesNin_example"];
          opts.nameContains = ["nameContains_example"];
          opts.agentIsDecommissioned = [[false]];
          opts.ids = ["ids_example"];
          opts.riskLevels = ["riskLevels_example"];
          opts.osTypes = ["osTypes_example"];
          opts.agentMachineTypes = ["agentMachineTypes_example"];
          opts.agentOsVersionContains = ["agentOsVersionContains_example"];
          opts.agentMachineTypesNin = ["agentMachineTypesNin_example"];
          opts.installedAtBetween = "installedAtBetween_example";
          opts.publisherContains = ["publisherContains_example"];
          opts.groupIds = ["groupIds_example"];
          opts.sizeBetween = "sizeBetween_example";
          opts.siteIds = ["siteIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.agentComputerNameContains = ["agentComputerNameContains_example"];
          opts.riskLevelsNin = ["riskLevelsNin_example"];
          opts.agentUuidContains = ["agentUuidContains_example"];
          opts.versionContains = ["versionContains_example"];
          opts.types = ["types_example"];
          opts.osTypesNin = ["osTypesNin_example"];

          instance.webApiExportInstalledApplicationsGet(opts, function(error, data, response) {
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
      describe('webApiInstalledApplicationsCvesGet', function() {
        it('should call webApiInstalledApplicationsCvesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiInstalledApplicationsCvesGet call and complete the assertions
          /*
          var opts = {};
          opts.cursor = "null";
          opts.createdAtGt = new Date("2013-10-20T19:20:30+01:00");
          opts.updatedAtLt = new Date("2013-10-20T19:20:30+01:00");
          opts.ids = ["ids_example"];
          opts.countOnly = false;
          opts.createdAtLt = new Date("2013-10-20T19:20:30+01:00");
          opts.limit = 10;
          opts.updatedAtGte = new Date("2013-10-20T19:20:30+01:00");
          opts.skip = 56;
          opts.skipCount = null;
          opts.sortOrder = "null";
          opts.updatedAtGt = new Date("2013-10-20T19:20:30+01:00");
          opts.createdAtLte = new Date("2013-10-20T19:20:30+01:00");
          opts.cveIds = ["cveIds_example"];
          opts.applicationIds = ["applicationIds_example"];
          opts.sortBy = "null";
          opts.updatedAtLte = new Date("2013-10-20T19:20:30+01:00");
          opts.groupIds = ["groupIds_example"];
          opts.createdAtGte = new Date("2013-10-20T19:20:30+01:00");
          opts.siteIds = ["siteIds_example"];
          opts.accountIds = ["accountIds_example"];

          instance.webApiInstalledApplicationsCvesGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.ApplicationsSchemasCveViewSchemaMany200);
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
                expect(data).to.be.a(S1MgmtApi.ApplicationsSchemasCveViewSchemaMany200Data);
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.score).to.be.a('number');
                expect(data.score).to.be(8.4);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("225494730938493804");
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.publishedAt).to.be.a('string');
                expect(data.publishedAt).to.be("");
                expect(data.updatedAt).to.be.a(Date);
                expect(data.updatedAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.cveId).to.be.a('string');
                expect(data.cveId).to.be("CVE-2018-3204");
                expect(data.riskLevel).to.be.a('string');
                expect(data.riskLevel).to.be("none");
                expect(data.link).to.be.a('string');
                expect(data.link).to.be("https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-3204");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiInstalledApplicationsGet', function() {
        it('should call webApiInstalledApplicationsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiInstalledApplicationsGet call and complete the assertions
          /*
          var opts = {};
          opts.cursor = "null";
          opts.typesNin = ["typesNin_example"];
          opts.nameContains = ["nameContains_example"];
          opts.agentIsDecommissioned = [[false]];
          opts.ids = ["ids_example"];
          opts.countOnly = false;
          opts.limit = 10;
          opts.riskLevels = ["riskLevels_example"];
          opts.osTypes = ["osTypes_example"];
          opts.agentMachineTypes = ["agentMachineTypes_example"];
          opts.agentOsVersionContains = ["agentOsVersionContains_example"];
          opts.skip = 56;
          opts.skipCount = null;
          opts.agentMachineTypesNin = ["agentMachineTypesNin_example"];
          opts.sortOrder = "null";
          opts.installedAtBetween = "installedAtBetween_example";
          opts.sortBy = "null";
          opts.publisherContains = ["publisherContains_example"];
          opts.groupIds = ["groupIds_example"];
          opts.sizeBetween = "sizeBetween_example";
          opts.siteIds = ["siteIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.agentComputerNameContains = ["agentComputerNameContains_example"];
          opts.riskLevelsNin = ["riskLevelsNin_example"];
          opts.agentUuidContains = ["agentUuidContains_example"];
          opts.versionContains = ["versionContains_example"];
          opts.types = ["types_example"];
          opts.osTypesNin = ["osTypesNin_example"];

          instance.webApiInstalledApplicationsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.ApplicationsSchemasApplicationViewSchemaMany200);
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
                expect(data).to.be.a(S1MgmtApi.ApplicationsSchemasApplicationViewSchemaMany200Data);
                expect(data.agentInfected).to.be.a('boolean');
                expect(data.agentInfected).to.be(false);
                expect(data.agentUuid).to.be.a('string');
                expect(data.agentUuid).to.be("a57efb63-f9d4-4fb1-9e80-8960d4f27205");
                expect(data.agentMachineType).to.be.a('string');
                expect(data.agentMachineType).to.be("unknown");
                expect(data.size).to.be.a('number');
                expect(data.size).to.be(1956039);
                expect(data.updatedAt).to.be.a(Date);
                expect(data.updatedAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.agentNetworkStatus).to.be.a('string');
                expect(data.agentNetworkStatus).to.be("connected");
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("225494730938493804");
                expect(data.agentIsActive).to.be.a('boolean');
                expect(data.agentIsActive).to.be(false);
                expect(data.agentOperationalState).to.be.a('string');
                expect(data.agentOperationalState).to.be("");
                expect(data.signed).to.be.a('boolean');
                expect(data.signed).to.be(false);
                expect(data.agentId).to.be.a('string');
                expect(data.agentId).to.be("225494730938493804");
                expect(data.publisher).to.be.a('string');
                expect(data.publisher).to.be("SentinelOne");
                expect(data.version).to.be.a('string');
                expect(data.version).to.be("2.8.1.3862");
                expect(data.agentIsDecommissioned).to.be.a('boolean');
                expect(data.agentIsDecommissioned).to.be(false);
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("app");
                expect(data.agentOsType).to.be.a('string');
                expect(data.agentOsType).to.be("windows");
                expect(data.agentVersion).to.be.a('string');
                expect(data.agentVersion).to.be("2.8.1.3862");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("Sentinel Agent");
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.osType).to.be.a('string');
                expect(data.osType).to.be("windows");
                expect(data.agentComputerName).to.be.a('string');
                expect(data.agentComputerName).to.be("MY_COMPUTER_1234");
                expect(data.riskLevel).to.be.a('string');
                expect(data.riskLevel).to.be("none");
                expect(data.installedAt).to.be.a(Date);
                expect(data.installedAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.agentDomain).to.be.a('string');
                expect(data.agentDomain).to.be("sentinelone.net");

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
