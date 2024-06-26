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
    instance = new S1MgmtApi.CustomDetectionRuleApi();
  });

  describe('(package)', function() {
    describe('CustomDetectionRuleApi', function() {
      describe('webApiCloudDetectionRulesDelete', function() {
        it('should call webApiCloudDetectionRulesDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiCloudDetectionRulesDelete call and complete the assertions
          /*
          var opts = {};
          opts.body = new S1MgmtApi.V21RulesSchemasRuleDeleteSchema();
          opts.body.filter = new S1MgmtApi.V21RulesSchemasRuleDeleteSchemaFilter();
          opts.body.filter.ids = ["225494730938493804","225494730938493915"];
          opts.body.filter.creatorContains = ["Service Pack 1"];
          opts.body.filter.scopes = ["account"];
          opts.body.filter.expired = false;
          opts.body.filter.activeResponse = false;
          opts.body.filter.siteIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.reachedLimit = false;
          opts.body.filter.expirationMode = "Permanent";
          opts.body.filter.groupIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.accountIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.queryType = "events";
          opts.body.filter.query = ["Service Pack 1"];
          opts.body.filter.s1qlContains = ["Service Pack 1"];
          opts.body.filter.descriptionContains = ["Service Pack 1"];
          opts.body.filter.status = ["Draft"];
          opts.body.filter.nameContains = ["Service Pack 1"];

          instance.webApiCloudDetectionRulesDelete(opts, function(error, data, response) {
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
      describe('webApiCloudDetectionRulesDisablePut', function() {
        it('should call webApiCloudDetectionRulesDisablePut successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiCloudDetectionRulesDisablePut call and complete the assertions
          /*
          var opts = {};
          opts.body = new S1MgmtApi.V21RulesSchemasFilterRuleSchema();
          opts.body.filter = new S1MgmtApi.V21RulesSchemasRuleDeleteSchemaFilter();
          opts.body.filter.ids = ["225494730938493804","225494730938493915"];
          opts.body.filter.creatorContains = ["Service Pack 1"];
          opts.body.filter.scopes = ["account"];
          opts.body.filter.expired = false;
          opts.body.filter.activeResponse = false;
          opts.body.filter.siteIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.reachedLimit = false;
          opts.body.filter.expirationMode = "Permanent";
          opts.body.filter.groupIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.accountIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.queryType = "events";
          opts.body.filter.query = ["Service Pack 1"];
          opts.body.filter.s1qlContains = ["Service Pack 1"];
          opts.body.filter.descriptionContains = ["Service Pack 1"];
          opts.body.filter.status = ["Draft"];
          opts.body.filter.nameContains = ["Service Pack 1"];

          instance.webApiCloudDetectionRulesDisablePut(opts, function(error, data, response) {
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
      describe('webApiCloudDetectionRulesEnablePut', function() {
        it('should call webApiCloudDetectionRulesEnablePut successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiCloudDetectionRulesEnablePut call and complete the assertions
          /*
          var opts = {};
          opts.body = new S1MgmtApi.V21RulesSchemasFilterRuleSchema();
          opts.body.filter = new S1MgmtApi.V21RulesSchemasRuleDeleteSchemaFilter();
          opts.body.filter.ids = ["225494730938493804","225494730938493915"];
          opts.body.filter.creatorContains = ["Service Pack 1"];
          opts.body.filter.scopes = ["account"];
          opts.body.filter.expired = false;
          opts.body.filter.activeResponse = false;
          opts.body.filter.siteIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.reachedLimit = false;
          opts.body.filter.expirationMode = "Permanent";
          opts.body.filter.groupIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.accountIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.queryType = "events";
          opts.body.filter.query = ["Service Pack 1"];
          opts.body.filter.s1qlContains = ["Service Pack 1"];
          opts.body.filter.descriptionContains = ["Service Pack 1"];
          opts.body.filter.status = ["Draft"];
          opts.body.filter.nameContains = ["Service Pack 1"];

          instance.webApiCloudDetectionRulesEnablePut(opts, function(error, data, response) {
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
      describe('webApiCloudDetectionRulesGet', function() {
        it('should call webApiCloudDetectionRulesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiCloudDetectionRulesGet call and complete the assertions
          /*
          var opts = {};
          opts.limit = 10;
          opts.activeResponse = true;
          opts.cursor = "null";
          opts.sortOrder = "null";
          opts.query = ["query_example"];
          opts.s1qlContains = ["s1qlContains_example"];
          opts.sortBy = "null";
          opts.expired = true;
          opts.siteIds = ["siteIds_example"];
          opts.reachedLimit = true;
          opts.expirationMode = "expirationMode_example";
          opts.groupIds = ["groupIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.skipCount = null;
          opts.status = ["status_example"];
          opts.nameContains = ["nameContains_example"];
          opts.ids = ["ids_example"];
          opts.creatorContains = ["creatorContains_example"];
          opts.scopes = ["scopes_example"];
          opts.skip = 56;
          opts.queryType = "queryType_example";
          opts.descriptionContains = ["descriptionContains_example"];
          opts.disablePagination = true;
          opts.countOnly = false;

          instance.webApiCloudDetectionRulesGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200);
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
            expect(data.pagination).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200Pagination);
                  expect(data.pagination.nextCursor).to.be.a('string');
              expect(data.pagination.nextCursor).to.be("YWdlbnRfaWQ6NTgwMjkzODE=");
              expect(data.pagination.totalItems).to.be.a('number');
              expect(data.pagination.totalItems).to.be(580);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200Data);
                expect(data.enrichment).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200Enrichment);
                      expect(data.enrichment.scopeName).to.be.a('string');
                  expect(data.enrichment.scopeName).to.be("225494730938493804");
                  expect(data.enrichment.creator).to.be.a('string');
                  expect(data.enrichment.creator).to.be("225494730938493804");
                  expect(data.enrichment.updater).to.be.a('string');
                  expect(data.enrichment.updater).to.be("225494730938493804");
                expect(data.creator).to.be.a('string');
                expect(data.creator).to.be("");
                expect(data.activeResponse).to.be.a('boolean');
                expect(data.activeResponse).to.be(false);
                expect(data.scope).to.be.a('string');
                expect(data.scope).to.be("account");
                expect(data.queryLang).to.be.a('string');
                expect(data.queryLang).to.be("1.0");
                expect(data.lastAlertTime).to.be.a(Date);
                expect(data.lastAlertTime).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.creatorId).to.be.a('string');
                expect(data.creatorId).to.be("225494730938493804");
                expect(data.siteName).to.be.a('string');
                expect(data.siteName).to.be("");
                expect(data.correlationParams).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParams);
                      {
                    let dataCtr = data.correlationParams.subQueries;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries);
                      expect(data.subQuery).to.be.a('string');
                      expect(data.subQuery).to.be("");
                      expect(data.matchesRequired).to.be.a('number');
                      expect(data.matchesRequired).to.be(0);
      
                            }
                  }
                  expect(data.correlationParams.timeWindow).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow);
                        expect(data.correlationParams.timeWindow.windowMinutes).to.be.a('number');
                    expect(data.correlationParams.timeWindow.windowMinutes).to.be(0);
                  expect(data.correlationParams.matchInOrder).to.be.a('boolean');
                  expect(data.correlationParams.matchInOrder).to.be(false);
                  expect(data.correlationParams.entity).to.be.a('string');
                  expect(data.correlationParams.entity).to.be("user");
                expect(data.generatedAlerts).to.be.a('number');
                expect(data.generatedAlerts).to.be(0);
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.editable).to.be.a('boolean');
                expect(data.editable).to.be(false);
                expect(data.expired).to.be.a('boolean');
                expect(data.expired).to.be(false);
                expect(data.updaterId).to.be.a('string');
                expect(data.updaterId).to.be("225494730938493804");
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("225494730938493804");
                expect(data.expiration).to.be.a(Date);
                expect(data.expiration).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.reachedLimit).to.be.a('boolean');
                expect(data.reachedLimit).to.be(false);
                expect(data.siteId).to.be.a('string');
                expect(data.siteId).to.be("225494730938493804");
                expect(data.treatAsThreat).to.be.a('string');
                expect(data.treatAsThreat).to.be("UNDEFINED");
                expect(data.expirationMode).to.be.a('string');
                expect(data.expirationMode).to.be("Permanent");
                expect(data.status).to.be.a('string');
                expect(data.status).to.be("Draft");
                expect(data.networkQuarantine).to.be.a('boolean');
                expect(data.networkQuarantine).to.be(false);
                expect(data.updatedAt).to.be.a(Date);
                expect(data.updatedAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.statusReason).to.be.a('string');
                expect(data.statusReason).to.be("");
                expect(data.severity).to.be.a('string');
                expect(data.severity).to.be("Low");
                expect(data.accountId).to.be.a('string');
                expect(data.accountId).to.be("225494730938493804");
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.queryType).to.be.a('string');
                expect(data.queryType).to.be("events");
                expect(data.s1ql).to.be.a('string');
                expect(data.s1ql).to.be("");
                {
                  let dataCtr = data.scopeId;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("225494730938493804");
                  }
                }
                expect(data.accountName).to.be.a('string');
                expect(data.accountName).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiCloudDetectionRulesPost', function() {
        it('should call webApiCloudDetectionRulesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiCloudDetectionRulesPost call and complete the assertions
          /*
          var opts = {};
          opts.body = new S1MgmtApi.V21RulesSchemasPostRuleSchema();
          opts.body.filter = new S1MgmtApi.V21RulesSchemasPostRuleSchemaFilter();
          opts.body.filter.groupIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.accountIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.tenant = false;
          opts.body.filter.siteIds = ["225494730938493804","225494730938493915"];
          opts.body.data = new S1MgmtApi.V21RulesSchemasPostRuleSchemaData();
          opts.body.data.severity = "Low";
          opts.body.data.id = "225494730938493804";
          opts.body.data.expiration = 2018-02-27T04:49:26.257525Z;
          opts.body.data.correlationParams = new S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParams();
          opts.body.data.correlationParams.subQueries = [new S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries()];
          opts.body.data.correlationParams.subQueries[0].subQuery = "";
          opts.body.data.correlationParams.subQueries[0].matchesRequired = 0;
          opts.body.data.correlationParams.timeWindow = new S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow();
          opts.body.data.correlationParams.timeWindow.windowMinutes = 0;
          opts.body.data.correlationParams.matchInOrder = false;
          opts.body.data.correlationParams.entity = "user";
          opts.body.data.treatAsThreat = "UNDEFINED";
          opts.body.data.expirationMode = "Permanent";
          opts.body.data.status = "Draft";
          opts.body.data.queryLang = "1.0";
          opts.body.data.description = "";
          opts.body.data.queryType = "events";
          opts.body.data.s1ql = "";
          opts.body.data.networkQuarantine = false;
          opts.body.data.name = "";

          instance.webApiCloudDetectionRulesPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21RulesSchemasRuleResponseSchema200);
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
            expect(data.data).to.be.a(S1MgmtApi.V21RulesSchemasRuleResponseSchema200Data);
                  expect(data.data.creator).to.be.a('string');
              expect(data.data.creator).to.be("");
              expect(data.data.scope).to.be.a('string');
              expect(data.data.scope).to.be("account");
              expect(data.data.queryLang).to.be.a('string');
              expect(data.data.queryLang).to.be("1.0");
              expect(data.data.name).to.be.a('string');
              expect(data.data.name).to.be("");
              expect(data.data.creatorId).to.be.a('string');
              expect(data.data.creatorId).to.be("225494730938493804");
              expect(data.data.correlationParams).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParams);
                    {
                  let dataCtr = data.data.correlationParams.subQueries;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries);
                    expect(data.subQuery).to.be.a('string');
                    expect(data.subQuery).to.be("");
                    expect(data.matchesRequired).to.be.a('number');
                    expect(data.matchesRequired).to.be(0);
    
                          }
                }
                expect(data.data.correlationParams.timeWindow).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow);
                      expect(data.data.correlationParams.timeWindow.windowMinutes).to.be.a('number');
                  expect(data.data.correlationParams.timeWindow.windowMinutes).to.be(0);
                expect(data.data.correlationParams.matchInOrder).to.be.a('boolean');
                expect(data.data.correlationParams.matchInOrder).to.be(false);
                expect(data.data.correlationParams.entity).to.be.a('string');
                expect(data.data.correlationParams.entity).to.be("user");
              expect(data.data.description).to.be.a('string');
              expect(data.data.description).to.be("");
              expect(data.data.editable).to.be.a('boolean');
              expect(data.data.editable).to.be(false);
              expect(data.data.expired).to.be.a('boolean');
              expect(data.data.expired).to.be(false);
              expect(data.data.updaterId).to.be.a('string');
              expect(data.data.updaterId).to.be("225494730938493804");
              expect(data.data.id).to.be.a('string');
              expect(data.data.id).to.be("225494730938493804");
              expect(data.data.expiration).to.be.a(Date);
              expect(data.data.expiration).to.be(2018-02-27T04:49:26.257525Z);
              expect(data.data.reachedLimit).to.be.a('boolean');
              expect(data.data.reachedLimit).to.be(false);
              expect(data.data.treatAsThreat).to.be.a('string');
              expect(data.data.treatAsThreat).to.be("UNDEFINED");
              expect(data.data.expirationMode).to.be.a('string');
              expect(data.data.expirationMode).to.be("Permanent");
              expect(data.data.status).to.be.a('string');
              expect(data.data.status).to.be("Draft");
              expect(data.data.networkQuarantine).to.be.a('boolean');
              expect(data.data.networkQuarantine).to.be(false);
              expect(data.data.updatedAt).to.be.a(Date);
              expect(data.data.updatedAt).to.be(2018-02-27T04:49:26.257525Z);
              expect(data.data.statusReason).to.be.a('string');
              expect(data.data.statusReason).to.be("");
              expect(data.data.severity).to.be.a('string');
              expect(data.data.severity).to.be("Low");
              expect(data.data.createdAt).to.be.a(Date);
              expect(data.data.createdAt).to.be(2018-02-27T04:49:26.257525Z);
              expect(data.data.queryType).to.be.a('string');
              expect(data.data.queryType).to.be("events");
              expect(data.data.s1ql).to.be.a('string');
              expect(data.data.s1ql).to.be("");
              {
                let dataCtr = data.data.scopeId;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("225494730938493804");
                }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiCloudDetectionRulesruleIdPut', function() {
        it('should call webApiCloudDetectionRulesruleIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiCloudDetectionRulesruleIdPut call and complete the assertions
          /*
          var ruleId = "ruleId_example";
          var opts = {};
          opts.body = new S1MgmtApi.V21RulesSchemasPostRuleSchema();
          opts.body.filter = new S1MgmtApi.V21RulesSchemasPostRuleSchemaFilter();
          opts.body.filter.groupIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.accountIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.tenant = false;
          opts.body.filter.siteIds = ["225494730938493804","225494730938493915"];
          opts.body.data = new S1MgmtApi.V21RulesSchemasPostRuleSchemaData();
          opts.body.data.severity = "Low";
          opts.body.data.id = "225494730938493804";
          opts.body.data.expiration = 2018-02-27T04:49:26.257525Z;
          opts.body.data.correlationParams = new S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParams();
          opts.body.data.correlationParams.subQueries = [new S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries()];
          opts.body.data.correlationParams.subQueries[0].subQuery = "";
          opts.body.data.correlationParams.subQueries[0].matchesRequired = 0;
          opts.body.data.correlationParams.timeWindow = new S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow();
          opts.body.data.correlationParams.timeWindow.windowMinutes = 0;
          opts.body.data.correlationParams.matchInOrder = false;
          opts.body.data.correlationParams.entity = "user";
          opts.body.data.treatAsThreat = "UNDEFINED";
          opts.body.data.expirationMode = "Permanent";
          opts.body.data.status = "Draft";
          opts.body.data.queryLang = "1.0";
          opts.body.data.description = "";
          opts.body.data.queryType = "events";
          opts.body.data.s1ql = "";
          opts.body.data.networkQuarantine = false;
          opts.body.data.name = "";

          instance.webApiCloudDetectionRulesruleIdPut(ruleId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21RulesSchemasRuleResponseSchema200);
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
            expect(data.data).to.be.a(S1MgmtApi.V21RulesSchemasRuleResponseSchema200Data);
                  expect(data.data.creator).to.be.a('string');
              expect(data.data.creator).to.be("");
              expect(data.data.scope).to.be.a('string');
              expect(data.data.scope).to.be("account");
              expect(data.data.queryLang).to.be.a('string');
              expect(data.data.queryLang).to.be("1.0");
              expect(data.data.name).to.be.a('string');
              expect(data.data.name).to.be("");
              expect(data.data.creatorId).to.be.a('string');
              expect(data.data.creatorId).to.be("225494730938493804");
              expect(data.data.correlationParams).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParams);
                    {
                  let dataCtr = data.data.correlationParams.subQueries;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParamsSubQueries);
                    expect(data.subQuery).to.be.a('string');
                    expect(data.subQuery).to.be("");
                    expect(data.matchesRequired).to.be.a('number');
                    expect(data.matchesRequired).to.be(0);
    
                          }
                }
                expect(data.data.correlationParams.timeWindow).to.be.a(S1MgmtApi.V21RulesSchemasRuleViewSchemaMany200CorrelationParamsTimeWindow);
                      expect(data.data.correlationParams.timeWindow.windowMinutes).to.be.a('number');
                  expect(data.data.correlationParams.timeWindow.windowMinutes).to.be(0);
                expect(data.data.correlationParams.matchInOrder).to.be.a('boolean');
                expect(data.data.correlationParams.matchInOrder).to.be(false);
                expect(data.data.correlationParams.entity).to.be.a('string');
                expect(data.data.correlationParams.entity).to.be("user");
              expect(data.data.description).to.be.a('string');
              expect(data.data.description).to.be("");
              expect(data.data.editable).to.be.a('boolean');
              expect(data.data.editable).to.be(false);
              expect(data.data.expired).to.be.a('boolean');
              expect(data.data.expired).to.be(false);
              expect(data.data.updaterId).to.be.a('string');
              expect(data.data.updaterId).to.be("225494730938493804");
              expect(data.data.id).to.be.a('string');
              expect(data.data.id).to.be("225494730938493804");
              expect(data.data.expiration).to.be.a(Date);
              expect(data.data.expiration).to.be(2018-02-27T04:49:26.257525Z);
              expect(data.data.reachedLimit).to.be.a('boolean');
              expect(data.data.reachedLimit).to.be(false);
              expect(data.data.treatAsThreat).to.be.a('string');
              expect(data.data.treatAsThreat).to.be("UNDEFINED");
              expect(data.data.expirationMode).to.be.a('string');
              expect(data.data.expirationMode).to.be("Permanent");
              expect(data.data.status).to.be.a('string');
              expect(data.data.status).to.be("Draft");
              expect(data.data.networkQuarantine).to.be.a('boolean');
              expect(data.data.networkQuarantine).to.be(false);
              expect(data.data.updatedAt).to.be.a(Date);
              expect(data.data.updatedAt).to.be(2018-02-27T04:49:26.257525Z);
              expect(data.data.statusReason).to.be.a('string');
              expect(data.data.statusReason).to.be("");
              expect(data.data.severity).to.be.a('string');
              expect(data.data.severity).to.be("Low");
              expect(data.data.createdAt).to.be.a(Date);
              expect(data.data.createdAt).to.be(2018-02-27T04:49:26.257525Z);
              expect(data.data.queryType).to.be.a('string');
              expect(data.data.queryType).to.be("events");
              expect(data.data.s1ql).to.be.a('string');
              expect(data.data.s1ql).to.be("");
              {
                let dataCtr = data.data.scopeId;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("225494730938493804");
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
