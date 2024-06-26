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
    instance = new S1MgmtApi.ActivitiesApi();
  });

  describe('(package)', function() {
    describe('ActivitiesApi', function() {
      describe('webApiActivitiesGet', function() {
        it('should call webApiActivitiesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiActivitiesGet call and complete the assertions
          /*
          var opts = {};
          opts.cursor = "null";
          opts.createdAtGt = new Date("2013-10-20T19:20:30+01:00");
          opts.agentIds = ["agentIds_example"];
          opts.activityUuids = ["activityUuids_example"];
          opts.alertIds = ["alertIds_example"];
          opts.ids = ["ids_example"];
          opts.countOnly = false;
          opts.createdAtLt = new Date("2013-10-20T19:20:30+01:00");
          opts.limit = 10;
          opts.skip = 56;
          opts.skipCount = null;
          opts.sortOrder = "null";
          opts.createdAtLte = new Date("2013-10-20T19:20:30+01:00");
          opts.threatIds = ["threatIds_example"];
          opts.activityTypes = ["activityTypes_example"];
          opts.ruleIds = ["ruleIds_example"];
          opts.userEmails = ["userEmails_example"];
          opts.sortBy = "null";
          opts.createdAtBetween = "createdAtBetween_example";
          opts.groupIds = ["groupIds_example"];
          opts.createdAtGte = new Date("2013-10-20T19:20:30+01:00");
          opts.siteIds = ["siteIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.userIds = ["userIds_example"];
          opts.includeHidden = false;

          instance.webApiActivitiesGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.ActivitiesActivityViewSchemaMany200);
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
                expect(data).to.be.a(S1MgmtApi.ActivitiesActivityViewSchemaMany200Data);
                expect(data.secondaryDescription).to.be.a('string');
                expect(data.secondaryDescription).to.be("");
                expect(data.accountId).to.be.a('string');
                expect(data.accountId).to.be("225494730938493804");
                expect(data.updatedAt).to.be.a(Date);
                expect(data.updatedAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.siteId).to.be.a('string');
                expect(data.siteId).to.be("225494730938493804");
                expect(data.comments).to.be.a('string');
                expect(data.comments).to.be("");
                expect(data.userId).to.be.a('string');
                expect(data.userId).to.be("225494730938493804");
                expect(data.accountName).to.be.a('string');
                expect(data.accountName).to.be("");
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("225494730938493804");
                expect(data.osFamily).to.be.a('string');
                expect(data.osFamily).to.be("windows");
                expect(data.groupName).to.be.a('string');
                expect(data.groupName).to.be("");
                expect(data.hash).to.be.a('string');
                expect(data.hash).to.be("");
                expect(data.agentId).to.be.a('string');
                expect(data.agentId).to.be("225494730938493804");
                expect(data.activityUuid).to.be.a('string');
                expect(data.activityUuid).to.be("");
                expect(data.data).to.be.a(Object);
                expect(data.data).to.be({"computer_name":"COMP_1234","username":"my_user"});
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.groupId).to.be.a('string');
                expect(data.groupId).to.be("225494730938493804");
                expect(data.siteName).to.be.a('string');
                expect(data.siteName).to.be("");
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.agentUpdatedVersion).to.be.a('string');
                expect(data.agentUpdatedVersion).to.be("2.5.1.1320");
                expect(data.threatId).to.be.a('string');
                expect(data.threatId).to.be("225494730938493804");
                expect(data.activityType).to.be.a('number');
                expect(data.activityType).to.be(0);
                expect(data.primaryDescription).to.be.a('string');
                expect(data.primaryDescription).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiActivitiesTypesGet', function() {
        it('should call webApiActivitiesTypesGet successfully', function(done) {
          // TODO: uncomment webApiActivitiesTypesGet call and complete the assertions
          /*

          instance.webApiActivitiesTypesGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.ActivitiesActivityTypesSchemaMany200);
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
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(S1MgmtApi.ActivitiesActivityTypesSchemaMany200Data);
                expect(data.descriptionTemplate).to.be.a('string');
                expect(data.descriptionTemplate).to.be("");
                expect(data.action).to.be.a('string');
                expect(data.action).to.be("");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiExportActivitiesGet', function() {
        it('should call webApiExportActivitiesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiExportActivitiesGet call
          /*
          var opts = {};
          opts.createdAtGt = new Date("2013-10-20T19:20:30+01:00");
          opts.agentIds = ["agentIds_example"];
          opts.rowsLimit = 100;
          opts.activityUuids = ["activityUuids_example"];
          opts.alertIds = ["alertIds_example"];
          opts.ids = ["ids_example"];
          opts.createdAtLt = new Date("2013-10-20T19:20:30+01:00");
          opts.createdAtLte = new Date("2013-10-20T19:20:30+01:00");
          opts.threatIds = ["threatIds_example"];
          opts.activityTypes = ["activityTypes_example"];
          opts.ruleIds = ["ruleIds_example"];
          opts.userEmails = ["userEmails_example"];
          opts.createdAtBetween = "createdAtBetween_example";
          opts.groupIds = ["groupIds_example"];
          opts.createdAtGte = new Date("2013-10-20T19:20:30+01:00");
          opts.siteIds = ["siteIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.userIds = ["userIds_example"];
          opts.includeHidden = false;

          instance.webApiExportActivitiesGet(opts, function(error, data, response) {
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
      describe('webApiLastActivityAsSyslogGet', function() {
        it('should call webApiLastActivityAsSyslogGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiLastActivityAsSyslogGet call and complete the assertions
          /*
          var opts = {};
          opts.cursor = "null";
          opts.createdAtGt = new Date("2013-10-20T19:20:30+01:00");
          opts.agentIds = ["agentIds_example"];
          opts.activityUuids = ["activityUuids_example"];
          opts.alertIds = ["alertIds_example"];
          opts.ids = ["ids_example"];
          opts.countOnly = false;
          opts.createdAtLt = new Date("2013-10-20T19:20:30+01:00");
          opts.limit = 10;
          opts.skip = 56;
          opts.skipCount = null;
          opts.sortOrder = "null";
          opts.createdAtLte = new Date("2013-10-20T19:20:30+01:00");
          opts.threatIds = ["threatIds_example"];
          opts.activityTypes = ["activityTypes_example"];
          opts.ruleIds = ["ruleIds_example"];
          opts.userEmails = ["userEmails_example"];
          opts.sortBy = "null";
          opts.createdAtBetween = "createdAtBetween_example";
          opts.groupIds = ["groupIds_example"];
          opts.createdAtGte = new Date("2013-10-20T19:20:30+01:00");
          opts.siteIds = ["siteIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.userIds = ["userIds_example"];
          opts.includeHidden = false;

          instance.webApiLastActivityAsSyslogGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.ActivitiesActivityAsMessageSchema200);
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
            expect(data.data).to.be.a(S1MgmtApi.ActivitiesActivityAsMessageSchema200Data);
                  expect(data.data.activityId).to.be.a('string');
              expect(data.data.activityId).to.be("");
              expect(data.data.syslogMessage).to.be.a('string');
              expect(data.data.syslogMessage).to.be("");

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
