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
    instance = new S1MgmtApi.AgentsRepositoryBetaApi();
  });

  describe('(package)', function() {
    describe('AgentsRepositoryBetaApi', function() {
      describe('webApiAgentArtifactsTokenDelete', function() {
        it('should call webApiAgentArtifactsTokenDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiAgentArtifactsTokenDelete call
          /*
          var opts = {};
          opts.scopeLevel = "scopeLevel_example";
          opts.scopeId = 56;
          opts.tokenId = 56;

          instance.webApiAgentArtifactsTokenDelete(opts, function(error, data, response) {
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
      describe('webApiAgentArtifactsTokenGet', function() {
        it('should call webApiAgentArtifactsTokenGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiAgentArtifactsTokenGet call and complete the assertions
          /*
          var opts = {};
          opts.scopeLevel = "scopeLevel_example";
          opts.scopeId = 56;

          instance.webApiAgentArtifactsTokenGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.HandlersListTokensResponse);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(S1MgmtApi.HandlersTokenResponse);
                expect(data.createdAt).to.be.a('string');
                expect(data.createdAt).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.scopeId).to.be.a('string');
                expect(data.scopeId).to.be("");
                expect(data.scopeLevel).to.be.a('string');
                expect(data.scopeLevel).to.be("");
                expect(data.title).to.be.a('string');
                expect(data.title).to.be("");
                expect(data.token).to.be.a('string');
                expect(data.token).to.be("");
                expect(data.username).to.be.a('string');
                expect(data.username).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webApiAgentArtifactsTokenPost', function() {
        it('should call webApiAgentArtifactsTokenPost successfully', function(done) {
          // TODO: uncomment, update parameter values for webApiAgentArtifactsTokenPost call and complete the assertions
          /*
          var request = new S1MgmtApi.HandlersTokenRequest();
          request.description = "";
          request.scopeId = "";
          request.scopeLevel = "";
          request.title = "";

          instance.webApiAgentArtifactsTokenPost(request, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(S1MgmtApi.HandlersTokenResponse);
            expect(data.createdAt).to.be.a('string');
            expect(data.createdAt).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.scopeId).to.be.a('string');
            expect(data.scopeId).to.be("");
            expect(data.scopeLevel).to.be.a('string');
            expect(data.scopeLevel).to.be("");
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("");
            expect(data.token).to.be.a('string');
            expect(data.token).to.be("");
            expect(data.username).to.be.a('string');
            expect(data.username).to.be("");

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