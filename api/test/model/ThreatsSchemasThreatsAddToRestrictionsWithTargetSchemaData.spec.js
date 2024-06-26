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
    describe('ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData();
      });

      it('should create an instance of ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData', function() {
        // TODO: update the code to test ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData
        expect(instance).to.be.a(S1MgmtApi.ThreatsSchemasThreatsAddToRestrictionsWithTargetSchemaData);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property targetScope (base name: "targetScope")', function() {
        // TODO: update the code to test the property targetScope
        expect(instance).to.have.property('targetScope');
        // expect(instance.targetScope).to.be(expectedValueLiteral);
      });

      it('should have the property note (base name: "note")', function() {
        // TODO: update the code to test the property note
        expect(instance).to.have.property('note');
        // expect(instance.note).to.be(expectedValueLiteral);
      });

      it('should have the property externalTicketId (base name: "externalTicketId")', function() {
        // TODO: update the code to test the property externalTicketId
        expect(instance).to.have.property('externalTicketId');
        // expect(instance.externalTicketId).to.be(expectedValueLiteral);
      });

    });
  });

}));
