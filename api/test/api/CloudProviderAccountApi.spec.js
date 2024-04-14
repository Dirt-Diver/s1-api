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
    instance = new S1MgmtApi.CloudProviderAccountApi();
  });

  describe('(package)', function() {
    describe('CloudProviderAccountApi', function() {
      describe('webApiCloudnativeAccountManagementActiveHealthEventscloudProviderAccountIdGet', function() {
        it('should call webApiCloudnativeAccountManagementActiveHealthEventscloudProviderAccountIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiCloudnativeAccountManagementActiveHealthEventscloudProviderAccountIdGet call and complete the assertions
          /*
          var cloudProviderAccountId = "cloudProviderAccountId_example";
          var opts = {};
          opts.tenant = true;
          opts.groupIds = ["groupIds_example"];
          opts.accountIds = ["accountIds_example"];
          opts.siteIds = ["siteIds_example"];

          instance.webApiCloudnativeAccountManagementActiveHealthEventscloudProviderAccountIdGet(cloudProviderAccountId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21AccountManagementSchemasGetCloudProviderAccountErrorMany200);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(S1MgmtApi.V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data);
                expect(data.detectedAt).to.be.a(Date);
                expect(data.detectedAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.title).to.be.a('string');
                expect(data.title).to.be("");
                expect(data.recommendedAction).to.be.a('string');
                expect(data.recommendedAction).to.be("");
                expect(data.healthStatus).to.be.a('string');
                expect(data.healthStatus).to.be("");
                expect(data.cloudProviderAccountId).to.be.a('string');
                expect(data.cloudProviderAccountId).to.be("225494730938493804");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");

                      }
            }
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
