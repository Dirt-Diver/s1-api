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
    instance = new S1MgmtApi.ConfigOverridesApi();
  });

  describe('(package)', function() {
    describe('ConfigOverridesApi', function() {
      describe('webApiConfigOverrideDelete', function() {
        it('should call webApiConfigOverrideDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiConfigOverrideDelete call and complete the assertions
          /*
          var opts = {};
          opts.body = new S1MgmtApi.ConfigOverridesConfigOverrideDeleteSchema();
          opts.body.filter = new S1MgmtApi.ConfigOverridesConfigOverrideDeleteSchemaFilter();
          opts.body.filter.createdAtGt = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.osTypes = ["windows"];
          opts.body.filter.agentIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.createdAtGte = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.descriptionLike = "";
          opts.body.filter.siteIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.accountIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.agentVersions = ["2.5.1.1320"];
          opts.body.filter.versionOption = "ALL";
          opts.body.filter.nameLike = "";
          opts.body.filter.query = "";
          opts.body.filter.tenant = false;
          opts.body.filter.createdAtLte = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.ids = ["225494730938493804","225494730938493915"];
          opts.body.filter.createdAtBetween = "1514978890136-1514978650130";
          opts.body.filter.groupIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.createdAtLt = 2018-02-27T04:49:26.257525Z;

          instance.webApiConfigOverrideDelete(opts, function(error, data, response) {
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
      describe('webApiConfigOverrideGet', function() {
        it('should call webApiConfigOverrideGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiConfigOverrideGet call and complete the assertions
          /*
          var opts = {};
          opts.cursor = "null";
          opts.createdAtGt = new Date("2013-10-20T19:20:30+01:00");
          opts.agentIds = ["agentIds_example"];
          opts.ids = ["ids_example"];
          opts.query = "query_example";
          opts.countOnly = false;
          opts.createdAtLt = new Date("2013-10-20T19:20:30+01:00");
          opts.limit = 10;
          opts.osTypes = ["osTypes_example"];
          opts.versionOption = "versionOption_example";
          opts.skip = 56;
          opts.skipCount = null;
          opts.sortOrder = "null";
          opts.createdAtLte = new Date("2013-10-20T19:20:30+01:00");
          opts.descriptionLike = "descriptionLike_example";
          opts.sortBy = "null";
          opts.tenant = true;
          opts.createdAtBetween = "createdAtBetween_example";
          opts.groupIds = ["groupIds_example"];
          opts.agentVersions = ["agentVersions_example"];
          opts.createdAtGte = new Date("2013-10-20T19:20:30+01:00");
          opts.siteIds = ["siteIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.nameLike = "nameLike_example";

          instance.webApiConfigOverrideGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200);
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
                expect(data).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Data);
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.agentVersion).to.be.a('string');
                expect(data.agentVersion).to.be("2.5.1.1320");
                expect(data.group).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Group);
                      expect(data.group.name).to.be.a('string');
                  expect(data.group.name).to.be("");
                  expect(data.group.id).to.be.a('string');
                  expect(data.group.id).to.be("225494730938493804");
                expect(data.versionOption).to.be.a('string');
                expect(data.versionOption).to.be("ALL");
                expect(data.account).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Account);
                      expect(data.account.name).to.be.a('string');
                  expect(data.account.name).to.be("");
                  expect(data.account.id).to.be.a('string');
                  expect(data.account.id).to.be("225494730938493804");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("225494730938493804");
                expect(data.scope).to.be.a('string');
                expect(data.scope).to.be("group");
                expect(data.agent).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Agent);
                      expect(data.agent.id).to.be.a('string');
                  expect(data.agent.id).to.be("225494730938493804");
                expect(data.osType).to.be.a('string');
                expect(data.osType).to.be("windows");
                expect(data.config).to.be.a(Object);
                expect(data.config).to.be();
                expect(data.site).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Site);
                      expect(data.site.name).to.be.a('string');
                  expect(data.site.name).to.be("");
                  expect(data.site.id).to.be.a('string');
                  expect(data.site.id).to.be("225494730938493804");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiConfigOverridePost', function() {
        it('should call webApiConfigOverridePost successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiConfigOverridePost call and complete the assertions
          /*
          var opts = {};
          opts.body = new S1MgmtApi.ConfigOverridesCreateConfigOverrideSchema();
          opts.body.filter = ;
          opts.body.data = new S1MgmtApi.ConfigOverridesCreateConfigOverrideSchemaData();
          opts.body.data.description = "";
          opts.body.data.agentVersion = "2.5.1.1320";
          opts.body.data.account = new S1MgmtApi.ConfigOverridesCreateConfigOverrideSchemaDataAccount();
          opts.body.data.account.name = "";
          opts.body.data.account.id = "225494730938493804";
          opts.body.data.versionOption = "ALL";
          opts.body.data.group = new S1MgmtApi.ConfigOverridesCreateConfigOverrideSchemaDataGroup();
          opts.body.data.group.name = "";
          opts.body.data.group.id = "225494730938493804";
          opts.body.data.name = "";
          opts.body.data.scope = "group";
          opts.body.data.osType = "windows";
          opts.body.data.config = ;
          opts.body.data.site = new S1MgmtApi.ConfigOverridesCreateConfigOverrideSchemaDataSite();
          opts.body.data.site.name = "";
          opts.body.data.site.id = "225494730938493804";

          instance.webApiConfigOverridePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchema200);
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
            expect(data.data).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchema200Data);
                  expect(data.data.description).to.be.a('string');
              expect(data.data.description).to.be("");
              expect(data.data.agentVersion).to.be.a('string');
              expect(data.data.agentVersion).to.be("2.5.1.1320");
              expect(data.data.group).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Group);
                    expect(data.data.group.name).to.be.a('string');
                expect(data.data.group.name).to.be("");
                expect(data.data.group.id).to.be.a('string');
                expect(data.data.group.id).to.be("225494730938493804");
              expect(data.data.versionOption).to.be.a('string');
              expect(data.data.versionOption).to.be("ALL");
              expect(data.data.account).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Account);
                    expect(data.data.account.name).to.be.a('string');
                expect(data.data.account.name).to.be("");
                expect(data.data.account.id).to.be.a('string');
                expect(data.data.account.id).to.be("225494730938493804");
              expect(data.data.name).to.be.a('string');
              expect(data.data.name).to.be("");
              expect(data.data.id).to.be.a('string');
              expect(data.data.id).to.be("225494730938493804");
              expect(data.data.scope).to.be.a('string');
              expect(data.data.scope).to.be("group");
              expect(data.data.agent).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Agent);
                    expect(data.data.agent.id).to.be.a('string');
                expect(data.data.agent.id).to.be("225494730938493804");
              expect(data.data.osType).to.be.a('string');
              expect(data.data.osType).to.be("windows");
              expect(data.data.config).to.be.a(Object);
              expect(data.data.config).to.be();
              expect(data.data.site).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Site);
                    expect(data.data.site.name).to.be.a('string');
                expect(data.data.site.name).to.be("");
                expect(data.data.site.id).to.be.a('string');
                expect(data.data.site.id).to.be("225494730938493804");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiConfigOverrideoverrideIdDelete', function() {
        it('should call webApiConfigOverrideoverrideIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiConfigOverrideoverrideIdDelete call and complete the assertions
          /*
          var overrideId = "overrideId_example";

          instance.webApiConfigOverrideoverrideIdDelete(overrideId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.SuccessResponseSchema200);
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
            expect(data.data).to.be.a(S1MgmtApi.SuccessResponseSchema200Data);
                  expect(data.data.success).to.be.a('boolean');
              expect(data.data.success).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiConfigOverrideoverrideIdPut', function() {
        it('should call webApiConfigOverrideoverrideIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiConfigOverrideoverrideIdPut call and complete the assertions
          /*
          var overrideId = "overrideId_example";
          var opts = {};
          opts.body = new S1MgmtApi.ConfigOverridesPutConfigOverrideSchema();
          opts.body.filter = ;
          opts.body.data = new S1MgmtApi.ConfigOverridesPutConfigOverrideSchemaData();
          opts.body.data.description = "";
          opts.body.data.agentVersion = "2.5.1.1320";
          opts.body.data.group = new S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Group();
          opts.body.data.group.name = "";
          opts.body.data.group.id = "225494730938493804";
          opts.body.data.versionOption = "ALL";
          opts.body.data.account = new S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Account();
          opts.body.data.account.name = "";
          opts.body.data.account.id = "225494730938493804";
          opts.body.data.name = "";
          opts.body.data.scope = "group";
          opts.body.data.osType = "windows";
          opts.body.data.config = ;
          opts.body.data.site = new S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Site();
          opts.body.data.site.name = "";
          opts.body.data.site.id = "225494730938493804";

          instance.webApiConfigOverrideoverrideIdPut(overrideId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchema200);
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
            expect(data.data).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchema200Data);
                  expect(data.data.description).to.be.a('string');
              expect(data.data.description).to.be("");
              expect(data.data.agentVersion).to.be.a('string');
              expect(data.data.agentVersion).to.be("2.5.1.1320");
              expect(data.data.group).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Group);
                    expect(data.data.group.name).to.be.a('string');
                expect(data.data.group.name).to.be("");
                expect(data.data.group.id).to.be.a('string');
                expect(data.data.group.id).to.be("225494730938493804");
              expect(data.data.versionOption).to.be.a('string');
              expect(data.data.versionOption).to.be("ALL");
              expect(data.data.account).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Account);
                    expect(data.data.account.name).to.be.a('string');
                expect(data.data.account.name).to.be("");
                expect(data.data.account.id).to.be.a('string');
                expect(data.data.account.id).to.be("225494730938493804");
              expect(data.data.name).to.be.a('string');
              expect(data.data.name).to.be("");
              expect(data.data.id).to.be.a('string');
              expect(data.data.id).to.be("225494730938493804");
              expect(data.data.scope).to.be.a('string');
              expect(data.data.scope).to.be("group");
              expect(data.data.agent).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Agent);
                    expect(data.data.agent.id).to.be.a('string');
                expect(data.data.agent.id).to.be("225494730938493804");
              expect(data.data.osType).to.be.a('string');
              expect(data.data.osType).to.be("windows");
              expect(data.data.config).to.be.a(Object);
              expect(data.data.config).to.be();
              expect(data.data.site).to.be.a(S1MgmtApi.ConfigOverridesConfigOverrideSchemaMany200Site);
                    expect(data.data.site.name).to.be.a('string');
                expect(data.data.site.name).to.be("");
                expect(data.data.site.id).to.be.a('string');
                expect(data.data.site.id).to.be("225494730938493804");

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
