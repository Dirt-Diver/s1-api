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
    instance = new S1MgmtApi.ThreatNotesApi();
  });

  describe('(package)', function() {
    describe('ThreatNotesApi', function() {
      describe('webApiThreatsNotesPost', function() {
        it('should call webApiThreatsNotesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiThreatsNotesPost call and complete the assertions
          /*
          var opts = {};
          opts.body = new S1MgmtApi.ThreatsSchemasThreatsNoteCreateSchema();
          opts.body.filter = new S1MgmtApi.ThreatsSchemasThreatsIncidentSchemaFilter();
          opts.body.filter.agentVersionsNin = ["2.5.1.1320"];
          opts.body.filter.analystVerdictsNin = ["true_positive","suspicious"];
          opts.body.filter.threatDetailsContains = ["malware.exe","virus.exe"];
          opts.body.filter.classificationSources = ["Cloud"];
          opts.body.filter.query = "";
          opts.body.filter.cloudProvider = [""];
          opts.body.filter.incidentStatusesNin = ["unresolved","in_progress"];
          opts.body.filter.publisherNameContains = ["GOOGLE","Apple Inc."];
          opts.body.filter.agentIsActive = false;
          opts.body.filter.updatedAtGt = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.classificationSourcesNin = ["Cloud"];
          opts.body.filter.containerNameContains = [""];
          opts.body.filter.cloudImageContains = [""];
          opts.body.filter.hasAgentTags = false;
          opts.body.filter.storylineContains = ["0000C2E97648","0006FC73-77B4-470F-AAC7-"];
          opts.body.filter.updatedAtLte = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.classificationsNin = [""];
          opts.body.filter.groupIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.externalTicketIds = [""];
          opts.body.filter.osTypesNin = ["windows"];
          opts.body.filter.containerImageNameContains = [""];
          opts.body.filter.agentIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.k8sPodNameContains = [""];
          opts.body.filter.contentHashes = "ddd5030a3d029f3845fc1052419829f08f312240";
          opts.body.filter.awsSubnetIdsContains = [""];
          opts.body.filter.agentTagsData = "{"key1": ["value1_1", "value1_2"], "key2__nin": ["value2"]}";
          opts.body.filter.updatedAtGte = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.storylines = [""];
          opts.body.filter.k8sControllerLabelsContains = [""];
          opts.body.filter.awsSecurityGroupsContains = [""];
          opts.body.filter.k8sNodeNameContains = [""];
          opts.body.filter.confidenceLevels = ["malicious"];
          opts.body.filter.computerNameContains = ["john-office","WIN"];
          opts.body.filter.cloudNetworkContains = [""];
          opts.body.filter.classifications = [""];
          opts.body.filter.analystVerdicts = ["true_positive","suspicious"];
          opts.body.filter.initiatedByUsernameContains = ["John","John Doe"];
          opts.body.filter.resolved = false;
          opts.body.filter.collectionIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.detectionEngines = ["reputation"];
          opts.body.filter.awsRoleContains = [""];
          opts.body.filter.cloudAccountContains = [""];
          opts.body.filter.updatedAtLt = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.ids = ["225494730938493804","225494730938493915"];
          opts.body.filter.countsFor = "osTypes,machineTypes";
          opts.body.filter.limit = 0;
          opts.body.filter.realtimeAgentVersionContains = ["1.1.1.1","2.2."];
          opts.body.filter.osTypes = ["windows"];
          opts.body.filter.agentMachineTypes = ["unknown"];
          opts.body.filter.initiatedBy = ["agent_policy","dv_command"];
          opts.body.filter.initiatedByNin = ["agent_policy","dv_command"];
          opts.body.filter.k8sNamespaceLabelsContains = [""];
          opts.body.filter.engines = ["reputation"];
          opts.body.filter.createdAtLte = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.detectionAgentVersionContains = ["1.1.1.1","2.2."];
          opts.body.filter.detectionEnginesNin = ["reputation"];
          opts.body.filter.osNamesNin = ["Windows 10 Pro"];
          opts.body.filter.k8sControllerNameContains = [""];
          opts.body.filter.k8sClusterNameContains = [""];
          opts.body.filter.noteExists = false;
          opts.body.filter.containerLabelsContains = [""];
          opts.body.filter.tenant = false;
          opts.body.filter.cloudInstanceIdContains = [""];
          opts.body.filter.agentVersions = ["2.5.1.1320"];
          opts.body.filter.createdAtGte = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.detectionAgentDomainContains = ["sentinel","sentinelone.com"];
          opts.body.filter.enginesNin = ["reputation"];
          opts.body.filter.accountIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.cloudProviderNin = [""];
          opts.body.filter.filePathContains = ["\\MyUser\\Downloads"];
          opts.body.filter.k8sNodeLabelsContains = [""];
          opts.body.filter.osArchs = ["32 bit"];
          opts.body.filter.createdAtGt = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.k8sNamespaceNameContains = [""];
          opts.body.filter.rebootRequired = false;
          opts.body.filter.mitigationStatuses = ["not_mitigated"];
          opts.body.filter.createdAtLt = 2018-02-27T04:49:26.257525Z;
          opts.body.filter.k8sPodLabelsContains = [""];
          opts.body.filter.gcpServiceAccountContains = [""];
          opts.body.filter.pendingActions = false;
          opts.body.filter.cloudLocationContains = [""];
          opts.body.filter.mitigationStatusesNin = ["not_mitigated"];
          opts.body.filter.agentMachineTypesNin = ["unknown"];
          opts.body.filter.originatedProcessContains = [""];
          opts.body.filter.failedActions = false;
          opts.body.filter.osNames = ["Windows 10 Pro"];
          opts.body.filter.contentHashContains = ["5f09bcff3"];
          opts.body.filter.incidentStatuses = ["unresolved","in_progress"];
          opts.body.filter.cloudInstanceSizeContains = [""];
          opts.body.filter.mitigatedPreemptively = false;
          opts.body.filter.displayName = "";
          opts.body.filter.externalTicketIdContains = [""];
          opts.body.filter.confidenceLevelsNin = ["malicious"];
          opts.body.filter.azureResourceGroupContains = [""];
          opts.body.filter.siteIds = ["225494730938493804","225494730938493915"];
          opts.body.filter.commandLineArgumentsContains = ["/usr/sbin/","wget"];
          opts.body.filter.uuidContains = ["e92-01928","b055"];
          opts.body.filter.externalTicketExists = false;
          opts.body.data = new S1MgmtApi.ThreatsSchemasThreatsNoteCreateSchemaData();
          opts.body.data.text = "Discovered using analysis";

          instance.webApiThreatsNotesPost(opts, function(error, data, response) {
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
      describe('webApiThreatsthreatIdNotesGet', function() {
        it('should call webApiThreatsthreatIdNotesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiThreatsthreatIdNotesGet call and complete the assertions
          /*
          var threatId = "threatId_example";
          var opts = {};
          opts.cursor = "null";
          opts.skip = 56;
          opts.creatorLike = "creatorLike_example";
          opts.skipCount = null;
          opts.creatorId = "creatorId_example";
          opts.sortOrder = "null";
          opts.sortBy = "null";
          opts.countOnly = false;
          opts.limit = 10;

          instance.webApiThreatsthreatIdNotesGet(threatId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.ThreatsSchemasThreatNoteSchemaMany200);
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
                expect(data).to.be.a(S1MgmtApi.ThreatsSchemasThreatNoteSchemaMany200Data);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("225494730938493804");
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.creator).to.be.a('string');
                expect(data.creator).to.be("John Doe");
                expect(data.creatorId).to.be.a('string');
                expect(data.creatorId).to.be("225494730938493804");
                expect(data.updatedAt).to.be.a(Date);
                expect(data.updatedAt).to.be(2018-02-27T04:49:26.257525Z);
                expect(data.edited).to.be.a('boolean');
                expect(data.edited).to.be(false);
                expect(data.text).to.be.a('string');
                expect(data.text).to.be("Discovered using analysis");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiThreatsthreatIdNotesnoteIdDelete', function() {
        it('should call webApiThreatsthreatIdNotesnoteIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiThreatsthreatIdNotesnoteIdDelete call and complete the assertions
          /*
          var noteId = "noteId_example";
          var threatId = "threatId_example";

          instance.webApiThreatsthreatIdNotesnoteIdDelete(noteId, threatId, function(error, data, response) {
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
      describe('webApiThreatsthreatIdNotesnoteIdPut', function() {
        it('should call webApiThreatsthreatIdNotesnoteIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiThreatsthreatIdNotesnoteIdPut call and complete the assertions
          /*
          var noteId = "noteId_example";
          var threatId = "threatId_example";
          var opts = {};
          opts.body = new S1MgmtApi.ThreatsSchemasPostThreatNoteDataSchema();
          opts.body.data = new S1MgmtApi.ThreatsSchemasThreatsNoteCreateSchemaData();
          opts.body.data.text = "Discovered using analysis";

          instance.webApiThreatsthreatIdNotesnoteIdPut(noteId, threatId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.ThreatsSchemasThreatNoteSchema200);
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
            expect(data.data).to.be.a(S1MgmtApi.ThreatsSchemasThreatNoteSchema200Data);
                  expect(data.data.id).to.be.a('string');
              expect(data.data.id).to.be("225494730938493804");
              expect(data.data.createdAt).to.be.a(Date);
              expect(data.data.createdAt).to.be(2018-02-27T04:49:26.257525Z);
              expect(data.data.creator).to.be.a('string');
              expect(data.data.creator).to.be("John Doe");
              expect(data.data.creatorId).to.be.a('string');
              expect(data.data.creatorId).to.be("225494730938493804");
              expect(data.data.updatedAt).to.be.a(Date);
              expect(data.data.updatedAt).to.be(2018-02-27T04:49:26.257525Z);
              expect(data.data.edited).to.be.a('boolean');
              expect(data.data.edited).to.be(false);
              expect(data.data.text).to.be.a('string');
              expect(data.data.text).to.be("Discovered using analysis");

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
