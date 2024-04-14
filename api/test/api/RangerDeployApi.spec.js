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
    instance = new S1MgmtApi.RangerDeployApi();
  });

  describe('(package)', function() {
    describe('RangerDeployApi', function() {
      describe('webApiRangerCredGroupsDetailsGet', function() {
        it('should call webApiRangerCredGroupsDetailsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRangerCredGroupsDetailsGet call and complete the assertions
          /*
          var opts = {};
          opts.cursor = "null";
          opts.titleLike = "titleLike_example";
          opts.credGroupIds = ["credGroupIds_example"];
          opts.skip = 56;
          opts.siteIds = ["siteIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.skipCount = null;
          opts.sortOrder = "null";
          opts.sortBy = "null";
          opts.ids = ["ids_example"];
          opts.title = "title_example";
          opts.countOnly = false;
          opts.credTypeLike = "credTypeLike_example";
          opts.limit = 10;

          instance.webApiRangerCredGroupsDetailsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.RangerAutoDeploySchemasCredGroupsDetailsGetSchemaMany200);
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
                expect(data).to.be.a(S1MgmtApi.RangerAutoDeploySchemasCredGroupsDetailsGetSchemaMany200Data);
                expect(data.credType).to.be.a('string');
                expect(data.credType).to.be("User/Password");
                expect(data.updatedBy).to.be.a('string');
                expect(data.updatedBy).to.be("");
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("2315331413411134343");
                expect(data.credGroupId).to.be.a('string');
                expect(data.credGroupId).to.be("2315331413411134343");
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.updatedAt).to.be.a(Date);
                expect(data.updatedAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.createdBy).to.be.a('string');
                expect(data.createdBy).to.be("");
                expect(data.title).to.be.a('string');
                expect(data.title).to.be("AD admin");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiRangerCredGroupsDetailsPost', function() {
        it('should call webApiRangerCredGroupsDetailsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRangerCredGroupsDetailsPost call and complete the assertions
          /*
          var opts = {};
          opts.body = new S1MgmtApi.RangerAutoDeploySchemasCredGroupsDetailsPostSchema();
          opts.body.data = new S1MgmtApi.RangerAutoDeploySchemasCredGroupsDetailsPostSchemaData();
          opts.body.data.credGroupId = "225494730938493804";
          opts.body.data.details = [new S1MgmtApi.RangerAutoDeploySchemasCredGroupsDetailsPostSchemaDataDetails()];
          opts.body.data.details[0].title = "AD admin";
          opts.body.data.details[0].credType = "User/Password";
          opts.body.data.details[0].encryptedCred = "34aaseqreafadfasfafafaf";
          opts.body.data.details[0].encryptedKey = "34aaseqreafadfasfafafaf";

          instance.webApiRangerCredGroupsDetailsPost(opts, function(error, data, response) {
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
      describe('webApiRangerCredGroupsDetailsdetailIdDelete', function() {
        it('should call webApiRangerCredGroupsDetailsdetailIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRangerCredGroupsDetailsdetailIdDelete call and complete the assertions
          /*
          var detailId = "detailId_example";

          instance.webApiRangerCredGroupsDetailsdetailIdDelete(detailId, function(error, data, response) {
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
      describe('webApiRangerCredGroupsDetailsdetailIdPut', function() {
        it('should call webApiRangerCredGroupsDetailsdetailIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRangerCredGroupsDetailsdetailIdPut call and complete the assertions
          /*
          var detailId = "detailId_example";
          var opts = {};
          opts.body = new S1MgmtApi.RangerAutoDeploySchemasCredPutDetailsSchema();
          opts.body.data = new S1MgmtApi.RangerAutoDeploySchemasCredPutDetailsSchemaData();
          opts.body.data.title = "AD admin";
          opts.body.data.credType = "User/Password";
          opts.body.data.encryptedCred = "34aaseqreafadfasfafafaf";
          opts.body.data.encryptedKey = "34aaseqreafadfasfafafaf";

          instance.webApiRangerCredGroupsDetailsdetailIdPut(detailId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.RangerAutoDeploySchemasCredGroupsDetailsGetSchema200);
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
            expect(data.data).to.be.a(S1MgmtApi.RangerAutoDeploySchemasCredGroupsDetailsGetSchema200Data);
                  expect(data.data.credType).to.be.a('string');
              expect(data.data.credType).to.be("User/Password");
              expect(data.data.updatedBy).to.be.a('string');
              expect(data.data.updatedBy).to.be("");
              expect(data.data.id).to.be.a('string');
              expect(data.data.id).to.be("2315331413411134343");
              expect(data.data.credGroupId).to.be.a('string');
              expect(data.data.credGroupId).to.be("2315331413411134343");
              expect(data.data.createdAt).to.be.a(Date);
              expect(data.data.createdAt).to.be(2018-02-27T04:49:26.257525Z);
              expect(data.data.updatedAt).to.be.a(Date);
              expect(data.data.updatedAt).to.be(2018-02-27T04:49:26.257525Z);
              expect(data.data.createdBy).to.be.a('string');
              expect(data.data.createdBy).to.be("");
              expect(data.data.title).to.be.a('string');
              expect(data.data.title).to.be("AD admin");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiRangerCredGroupsGet', function() {
        it('should call webApiRangerCredGroupsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRangerCredGroupsGet call and complete the assertions
          /*
          var opts = {};
          opts.cursor = "null";
          opts.targetOs = "targetOs_example";
          opts.skip = 56;
          opts.siteIds = ["siteIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.skipCount = null;
          opts.groupName = "groupName_example";
          opts.sortOrder = "null";
          opts.totalDetailsGt = 56;
          opts.sortBy = "null";
          opts.groupNameLike = "groupNameLike_example";
          opts.ids = ["ids_example"];
          opts.countOnly = false;
          opts.limit = 10;

          instance.webApiRangerCredGroupsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.RangerAutoDeploySchemasCredGroupsGetSchemaMany200);
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
                expect(data).to.be.a(S1MgmtApi.RangerAutoDeploySchemasCredGroupsGetSchemaMany200Data);
                expect(data.targetOs).to.be.a('string');
                expect(data.targetOs).to.be("windows");
                expect(data.totalDetails).to.be.a('number');
                expect(data.totalDetails).to.be(3);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("2315331413411134343");
                expect(data.groupName).to.be.a('string');
                expect(data.groupName).to.be("My Tag");
                expect(data.scopeId).to.be.a('string');
                expect(data.scopeId).to.be("225494730938493804");
                expect(data.domain).to.be.a('string');
                expect(data.domain).to.be("OFFICE");
                expect(data.groupPassphrase).to.be.a('string');
                expect(data.groupPassphrase).to.be("asd34asda4asfte341341");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiRangerCredGroupsPost', function() {
        it('should call webApiRangerCredGroupsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRangerCredGroupsPost call and complete the assertions
          /*
          var opts = {};
          opts.body = new S1MgmtApi.RangerAutoDeploySchemasCredGroupsPostSchema();
          opts.body.data = new S1MgmtApi.RangerAutoDeploySchemasCredGroupsPostSchemaData();
          opts.body.data.targetOs = "windows";
          opts.body.data.groupName = "My Tag";
          opts.body.data.scopeId = "225494730938493804";
          opts.body.data.domain = "OFFICE";
          opts.body.data.groupPassphrase = "asd34asda4asfte341341";

          instance.webApiRangerCredGroupsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.RangerAutoDeploySchemasCredGroupsGetSchema200);
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
            expect(data.data).to.be.a(S1MgmtApi.RangerAutoDeploySchemasCredGroupsGetSchema200Data);
                  expect(data.data.targetOs).to.be.a('string');
              expect(data.data.targetOs).to.be("windows");
              expect(data.data.totalDetails).to.be.a('number');
              expect(data.data.totalDetails).to.be(3);
              expect(data.data.id).to.be.a('string');
              expect(data.data.id).to.be("2315331413411134343");
              expect(data.data.groupName).to.be.a('string');
              expect(data.data.groupName).to.be("My Tag");
              expect(data.data.scopeId).to.be.a('string');
              expect(data.data.scopeId).to.be("225494730938493804");
              expect(data.data.domain).to.be.a('string');
              expect(data.data.domain).to.be("OFFICE");
              expect(data.data.groupPassphrase).to.be.a('string');
              expect(data.data.groupPassphrase).to.be("asd34asda4asfte341341");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiRangerCredGroupscredGroupIdDelete', function() {
        it('should call webApiRangerCredGroupscredGroupIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiRangerCredGroupscredGroupIdDelete call and complete the assertions
          /*
          var credGroupId = "credGroupId_example";

          instance.webApiRangerCredGroupscredGroupIdDelete(credGroupId, function(error, data, response) {
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
    });
  });

}));