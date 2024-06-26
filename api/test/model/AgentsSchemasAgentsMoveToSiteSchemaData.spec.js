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

  describe('(package)', function() {
    describe('AgentsSchemasAgentsMoveToSiteSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.AgentsSchemasAgentsMoveToSiteSchemaData();
      });

      it('should create an instance of AgentsSchemasAgentsMoveToSiteSchemaData', function() {
        // TODO: update the code to test AgentsSchemasAgentsMoveToSiteSchemaData
        expect(instance).to.be.a(S1MgmtApi.AgentsSchemasAgentsMoveToSiteSchemaData);
      });

      it('should have the property targetSiteId (base name: "targetSiteId")', function() {
        // TODO: update the code to test the property targetSiteId
        expect(instance).to.have.property('targetSiteId');
        // expect(instance.targetSiteId).to.be(expectedValueLiteral);
      });

    });
  });

}));
