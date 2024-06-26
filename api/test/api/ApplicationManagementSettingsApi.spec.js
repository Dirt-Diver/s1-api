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
    instance = new S1MgmtApi.ApplicationManagementSettingsApi();
  });

  describe('(package)', function() {
    describe('ApplicationManagementSettingsApi', function() {
      describe('webApiApplicationManagementSettingsGet', function() {
        it('should call webApiApplicationManagementSettingsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiApplicationManagementSettingsGet call and complete the assertions
          /*
          var opts = {};
          opts.accountIds = ["accountIds_example"];
          opts.siteIds = ["siteIds_example"];
          opts.groupIds = ["groupIds_example"];

          instance.webApiApplicationManagementSettingsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ApplicationManagementSettingsFiltersApplicationManagementSettingsDataSchema200);
            expect(data.data).to.be.a(S1MgmtApi.V21ApplicationManagementSettingsFiltersApplicationManagementSettingsDataSchema200Data);
                  expect(data.data.vulnerabilitiesScanEnabled).to.be.a('boolean');
              expect(data.data.vulnerabilitiesScanEnabled).to.be(false);
              expect(data.data.inheritedFrom).to.be.a('string');
              expect(data.data.inheritedFrom).to.be("");
              expect(data.data.isDefaultPolicy).to.be.a('boolean');
              expect(data.data.isDefaultPolicy).to.be(false);
              expect(data.data.extensiveLinuxScanEnabled).to.be.a('boolean');
              expect(data.data.extensiveLinuxScanEnabled).to.be(false);
              expect(data.data.extensiveScanEnabled).to.be.a('boolean');
              expect(data.data.extensiveScanEnabled).to.be(false);
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
      describe('webApiApplicationManagementSettingsPost', function() {
        it('should call webApiApplicationManagementSettingsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiApplicationManagementSettingsPost call and complete the assertions
          /*
          var opts = {};
          opts.body = new S1MgmtApi.V21ApplicationManagementSettingsFiltersApplicationManagementSettingsSchema();
          opts.body.data = new S1MgmtApi.V21ApplicationManagementSettingsFiltersApplicationManagementSettingsSchemaData();
          opts.body.data.extensiveLinuxScanEnabled = false;
          opts.body.data.extensiveScanEnabled = false;
          opts.body.data.vulnerabilitiesScanEnabled = false;
          opts.body.data.isDefaultPolicy = false;
          opts.body.filter = new S1MgmtApi.V21ApplicationManagementSettingsFiltersApplicationManagementSettingsSchemaFilter();
          opts.body.filter.accountIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.siteIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.tenant = false;
          opts.body.filter.groupIds = ["225494730938493804","225494730938493915"];

          instance.webApiApplicationManagementSettingsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.V21ApplicationManagementSettingsFiltersApplicationManagementSettingsDataSchema200);
            expect(data.data).to.be.a(S1MgmtApi.V21ApplicationManagementSettingsFiltersApplicationManagementSettingsDataSchema200Data);
                  expect(data.data.vulnerabilitiesScanEnabled).to.be.a('boolean');
              expect(data.data.vulnerabilitiesScanEnabled).to.be(false);
              expect(data.data.inheritedFrom).to.be.a('string');
              expect(data.data.inheritedFrom).to.be("");
              expect(data.data.isDefaultPolicy).to.be.a('boolean');
              expect(data.data.isDefaultPolicy).to.be(false);
              expect(data.data.extensiveLinuxScanEnabled).to.be.a('boolean');
              expect(data.data.extensiveLinuxScanEnabled).to.be(false);
              expect(data.data.extensiveScanEnabled).to.be.a('boolean');
              expect(data.data.extensiveScanEnabled).to.be(false);
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
