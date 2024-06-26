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
    instance = new S1MgmtApi.AutoUpgradePolicyApi();
  });

  describe('(package)', function() {
    describe('AutoUpgradePolicyApi', function() {
      describe('webApiUpgradePolicyAvailablePackagesGet', function() {
        it('should call webApiUpgradePolicyAvailablePackagesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiUpgradePolicyAvailablePackagesGet call and complete the assertions
          /*
          var scopeLevel = "scopeLevel_example";
          var osType = "osType_example";
          var opts = {};
          opts.scopeId = "scopeId_example";
          opts.displayNameContains = "displayNameContains_example";

          instance.webApiUpgradePolicyAvailablePackagesGet(scopeLevel, osType, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ModelsGetAvailablePackagesResponse);
            expect(data.data).to.be.a(S1MgmtApi.V21ModelsPackagesCollection);
                  {
                let dataCtr = data.data.packages;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(S1MgmtApi.V21ModelsPackageResponse);
                  expect(data.build).to.be.a('string');
                  expect(data.build).to.be("");
                  expect(data.displayName).to.be.a('string');
                  expect(data.displayName).to.be("");
                  {
                    let dataCtr = data.fileNames;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(S1MgmtApi.V21ModelsPackageFile);
                      expect(data.id).to.be.a('string');
                      expect(data.id).to.be("");
                      expect(data.name).to.be.a('string');
                      expect(data.name).to.be("");
      
                            }
                  }
                  expect(data.major).to.be.a('string');
                  expect(data.major).to.be("");
                  expect(data.minor).to.be.a('string');
                  expect(data.minor).to.be("");
  
                        }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiUpgradePolicyHasPolicyPost', function() {
        it('should call webApiUpgradePolicyHasPolicyPost successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiUpgradePolicyHasPolicyPost call and complete the assertions
          /*
          var payload = new S1MgmtApi.V21ModelsHasPoliciesRequest();
          payload.accounts = [""];
          payload.groups = [""];
          payload.osType = "";
          payload.sites = [""];

          instance.webApiUpgradePolicyHasPolicyPost(payload, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ModelsHasPoliciesResponse);
            expect(data.hasPolicies).to.be.a('boolean');
            expect(data.hasPolicies).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiUpgradePolicyParentPoliciesGet', function() {
        it('should call webApiUpgradePolicyParentPoliciesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiUpgradePolicyParentPoliciesGet call and complete the assertions
          /*
          var scopeLevel = "scopeLevel_example";
          var osType = "osType_example";
          var limit = 56;
          var skip = 56;
          var sortBy = "sortBy_example";
          var sortOrder = "sortOrder_example";
          var opts = {};
          opts.scopeId = "scopeId_example";

          instance.webApiUpgradePolicyParentPoliciesGet(scopeLevel, osType, limit, skip, sortBy, sortOrder, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ModelsGetPoliciesResponse);
            expect(data.data).to.be.a(S1MgmtApi.V21ModelsPoliciesCollection);
                  expect(data.data.isInherited).to.be.a('boolean');
              expect(data.data.isInherited).to.be(false);
              {
                let dataCtr = data.data.policies;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(S1MgmtApi.V21ModelsPolicy);
                  expect(data.activatedAt).to.be.a('string');
                  expect(data.activatedAt).to.be("");
                  expect(data.allEndpoints).to.be.a('boolean');
                  expect(data.allEndpoints).to.be(false);
                  expect(data.createdAt).to.be.a('string');
                  expect(data.createdAt).to.be("");
                  expect(data.description).to.be.a('string');
                  expect(data.description).to.be("");
                  expect(data.id).to.be.a('string');
                  expect(data.id).to.be("");
                  expect(data.isActive).to.be.a('boolean');
                  expect(data.isActive).to.be(false);
                  expect(data.isScheduled).to.be.a('boolean');
                  expect(data.isScheduled).to.be(false);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.osType).to.be.a('string');
                  expect(data.osType).to.be("");
                  expect(data._package).to.be.a(S1MgmtApi.V21ModelsPackage);
                        expect(data._package.build).to.be.a('string');
                    expect(data._package.build).to.be("");
                    expect(data._package.fileId).to.be.a('string');
                    expect(data._package.fileId).to.be("");
                    expect(data._package.major).to.be.a('string');
                    expect(data._package.major).to.be("");
                    expect(data._package.minor).to.be.a('string');
                    expect(data._package.minor).to.be("");
                  expect(data.priority).to.be.a('number');
                  expect(data.priority).to.be(0);
                  expect(data.scopeId).to.be.a('string');
                  expect(data.scopeId).to.be("");
                  expect(data.scopeLevel).to.be.a('string');
                  expect(data.scopeLevel).to.be("");
                  {
                    let dataCtr = data.tags;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  expect(data.updatedAt).to.be.a('string');
                  expect(data.updatedAt).to.be("");
  
                        }
              }
              expect(data.data.policiesInChildScope).to.be.a('boolean');
              expect(data.data.policiesInChildScope).to.be(false);
            expect(data.pagination).to.be.a(S1MgmtApi.V21ModelsPaginationInfo);
                  expect(data.pagination.totalItems).to.be.a('number');
              expect(data.pagination.totalItems).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiUpgradePolicyPoliciesCountGet', function() {
        it('should call webApiUpgradePolicyPoliciesCountGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiUpgradePolicyPoliciesCountGet call and complete the assertions
          /*
          var scopeLevel = "scopeLevel_example";
          var opts = {};
          opts.scopeId = "scopeId_example";

          instance.webApiUpgradePolicyPoliciesCountGet(scopeLevel, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ModelsOsCountResult);
            expect(data.linux).to.be.a('number');
            expect(data.linux).to.be(0);
            expect(data.macos).to.be.a('number');
            expect(data.macos).to.be(0);
            expect(data.windows).to.be.a('number');
            expect(data.windows).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiUpgradePolicyPoliciesGet', function() {
        it('should call webApiUpgradePolicyPoliciesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiUpgradePolicyPoliciesGet call and complete the assertions
          /*
          var scopeLevel = "scopeLevel_example";
          var osType = "osType_example";
          var limit = 56;
          var skip = 56;
          var sortBy = "sortBy_example";
          var sortOrder = "sortOrder_example";
          var opts = {};
          opts.scopeId = "scopeId_example";

          instance.webApiUpgradePolicyPoliciesGet(scopeLevel, osType, limit, skip, sortBy, sortOrder, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ModelsGetPoliciesResponse);
            expect(data.data).to.be.a(S1MgmtApi.V21ModelsPoliciesCollection);
                  expect(data.data.isInherited).to.be.a('boolean');
              expect(data.data.isInherited).to.be(false);
              {
                let dataCtr = data.data.policies;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(S1MgmtApi.V21ModelsPolicy);
                  expect(data.activatedAt).to.be.a('string');
                  expect(data.activatedAt).to.be("");
                  expect(data.allEndpoints).to.be.a('boolean');
                  expect(data.allEndpoints).to.be(false);
                  expect(data.createdAt).to.be.a('string');
                  expect(data.createdAt).to.be("");
                  expect(data.description).to.be.a('string');
                  expect(data.description).to.be("");
                  expect(data.id).to.be.a('string');
                  expect(data.id).to.be("");
                  expect(data.isActive).to.be.a('boolean');
                  expect(data.isActive).to.be(false);
                  expect(data.isScheduled).to.be.a('boolean');
                  expect(data.isScheduled).to.be(false);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.osType).to.be.a('string');
                  expect(data.osType).to.be("");
                  expect(data._package).to.be.a(S1MgmtApi.V21ModelsPackage);
                        expect(data._package.build).to.be.a('string');
                    expect(data._package.build).to.be("");
                    expect(data._package.fileId).to.be.a('string');
                    expect(data._package.fileId).to.be("");
                    expect(data._package.major).to.be.a('string');
                    expect(data._package.major).to.be("");
                    expect(data._package.minor).to.be.a('string');
                    expect(data._package.minor).to.be("");
                  expect(data.priority).to.be.a('number');
                  expect(data.priority).to.be(0);
                  expect(data.scopeId).to.be.a('string');
                  expect(data.scopeId).to.be("");
                  expect(data.scopeLevel).to.be.a('string');
                  expect(data.scopeLevel).to.be("");
                  {
                    let dataCtr = data.tags;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  expect(data.updatedAt).to.be.a('string');
                  expect(data.updatedAt).to.be("");
  
                        }
              }
              expect(data.data.policiesInChildScope).to.be.a('boolean');
              expect(data.data.policiesInChildScope).to.be(false);
            expect(data.pagination).to.be.a(S1MgmtApi.V21ModelsPaginationInfo);
                  expect(data.pagination.totalItems).to.be.a('number');
              expect(data.pagination.totalItems).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiUpgradePolicyPoliciesPost', function() {
        it('should call webApiUpgradePolicyPoliciesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiUpgradePolicyPoliciesPost call and complete the assertions
          /*
          var scopeLevel = "scopeLevel_example";
          var osType = "osType_example";
          var opts = {};
          opts.scopeId = "scopeId_example";

          instance.webApiUpgradePolicyPoliciesPost(scopeLevel, osType, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ModelsEmptyResponse);
            expect(data.response).to.be.a('string');
            expect(data.response).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiUpgradePolicyPolicyPolicyidPost', function() {
        it('should call webApiUpgradePolicyPolicyPolicyidPost successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiUpgradePolicyPolicyPolicyidPost call and complete the assertions
          /*
          var payload = new S1MgmtApi.V21ModelsEndpointActionRequest();
          payload.action = "";
          var policyid = "policyid_example";

          instance.webApiUpgradePolicyPolicyPolicyidPost(payload, policyid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ModelsEmptyResponse);
            expect(data.response).to.be.a('string');
            expect(data.response).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiUpgradePolicyPolicyPolicyidPut', function() {
        it('should call webApiUpgradePolicyPolicyPolicyidPut successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiUpgradePolicyPolicyPolicyidPut call and complete the assertions
          /*
          var payload = new S1MgmtApi.V21ModelsCreatePolicyRequest();
          payload.allEndpoints = false;
          payload.description = "";
          payload.isActive = false;
          payload.isScheduled = false;
          payload.name = "";
          payload.osType = "";
          payload._package = new S1MgmtApi.V21ModelsPackage();
          payload._package.build = "";
          payload._package.fileId = "";
          payload._package.major = "";
          payload._package.minor = "";
          payload.scopeId = "";
          payload.scopeLevel = "";
          payload.tags = [""];
          var policyid = "policyid_example";

          instance.webApiUpgradePolicyPolicyPolicyidPut(payload, policyid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ModelsEmptyResponse);
            expect(data.response).to.be.a('string');
            expect(data.response).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiUpgradePolicyPolicyPost', function() {
        it('should call webApiUpgradePolicyPolicyPost successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiUpgradePolicyPolicyPost call and complete the assertions
          /*
          var payload = new S1MgmtApi.V21ModelsCreatePolicyRequest();
          payload.allEndpoints = false;
          payload.description = "";
          payload.isActive = false;
          payload.isScheduled = false;
          payload.name = "";
          payload.osType = "";
          payload._package = new S1MgmtApi.V21ModelsPackage();
          payload._package.build = "";
          payload._package.fileId = "";
          payload._package.major = "";
          payload._package.minor = "";
          payload.scopeId = "";
          payload.scopeLevel = "";
          payload.tags = [""];

          instance.webApiUpgradePolicyPolicyPost(payload, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ModelsEmptyResponse);
            expect(data.response).to.be.a('string');
            expect(data.response).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiUpgradePolicyReorderPut', function() {
        it('should call webApiUpgradePolicyReorderPut successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiUpgradePolicyReorderPut call and complete the assertions
          /*
          var payload = new S1MgmtApi.V21ModelsReorderPolicyRequest();
          payload.policies = [new S1MgmtApi.V21ModelsOrderedPolicy()];
          payload.policies[0].id = "";
          payload.policies[0].order = 0;

          instance.webApiUpgradePolicyReorderPut(payload, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ModelsEmptyResponse);
            expect(data.response).to.be.a('string');
            expect(data.response).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiUpgradePolicySetInheritingPut', function() {
        it('should call webApiUpgradePolicySetInheritingPut successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiUpgradePolicySetInheritingPut call and complete the assertions
          /*
          var payload = new S1MgmtApi.V21ModelsScopeInheritanceRequest();
          payload.isInheriting = false;
          payload.scopeId = "";
          payload.scopeLevel = "";

          instance.webApiUpgradePolicySetInheritingPut(payload, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ModelsEmptyResponse);
            expect(data.response).to.be.a('string');
            expect(data.response).to.be("");

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
