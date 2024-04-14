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
    describe('V21SchemasPostThreatIntelligenceSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21SchemasPostThreatIntelligenceSchemaData();
      });

      it('should create an instance of V21SchemasPostThreatIntelligenceSchemaData', function() {
        // TODO: update the code to test V21SchemasPostThreatIntelligenceSchemaData
        expect(instance).to.be.a(S1MgmtApi.V21SchemasPostThreatIntelligenceSchemaData);
      });

      it('should have the property mitreTactic (base name: "mitreTactic")', function() {
        // TODO: update the code to test the property mitreTactic
        expect(instance).to.have.property('mitreTactic');
        // expect(instance.mitreTactic).to.be(expectedValueLiteral);
      });

      it('should have the property originalRiskScore (base name: "originalRiskScore")', function() {
        // TODO: update the code to test the property originalRiskScore
        expect(instance).to.have.property('originalRiskScore');
        // expect(instance.originalRiskScore).to.be(expectedValueLiteral);
      });

      it('should have the property labels (base name: "labels")', function() {
        // TODO: update the code to test the property labels
        expect(instance).to.have.property('labels');
        // expect(instance.labels).to.be(expectedValueLiteral);
      });

      it('should have the property intrusionSets (base name: "intrusionSets")', function() {
        // TODO: update the code to test the property intrusionSets
        expect(instance).to.have.property('intrusionSets');
        // expect(instance.intrusionSets).to.be(expectedValueLiteral);
      });

      it('should have the property validUntil (base name: "validUntil")', function() {
        // TODO: update the code to test the property validUntil
        expect(instance).to.have.property('validUntil');
        // expect(instance.validUntil).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property campaignNames (base name: "campaignNames")', function() {
        // TODO: update the code to test the property campaignNames
        expect(instance).to.have.property('campaignNames');
        // expect(instance.campaignNames).to.be(expectedValueLiteral);
      });

      it('should have the property source (base name: "source")', function() {
        // TODO: update the code to test the property source
        expect(instance).to.have.property('source');
        // expect(instance.source).to.be(expectedValueLiteral);
      });

      it('should have the property reference (base name: "reference")', function() {
        // TODO: update the code to test the property reference
        expect(instance).to.have.property('reference');
        // expect(instance.reference).to.be(expectedValueLiteral);
      });

      it('should have the property creationTime (base name: "creationTime")', function() {
        // TODO: update the code to test the property creationTime
        expect(instance).to.have.property('creationTime');
        // expect(instance.creationTime).to.be(expectedValueLiteral);
      });

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property threatActors (base name: "threatActors")', function() {
        // TODO: update the code to test the property threatActors
        expect(instance).to.have.property('threatActors');
        // expect(instance.threatActors).to.be(expectedValueLiteral);
      });

      it('should have the property metadata (base name: "metadata")', function() {
        // TODO: update the code to test the property metadata
        expect(instance).to.have.property('metadata');
        // expect(instance.metadata).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property method (base name: "method")', function() {
        // TODO: update the code to test the property method
        expect(instance).to.have.property('method');
        // expect(instance.method).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property patternType (base name: "patternType")', function() {
        // TODO: update the code to test the property patternType
        expect(instance).to.have.property('patternType');
        // expect(instance.patternType).to.be(expectedValueLiteral);
      });

      it('should have the property externalId (base name: "externalId")', function() {
        // TODO: update the code to test the property externalId
        expect(instance).to.have.property('externalId');
        // expect(instance.externalId).to.be(expectedValueLiteral);
      });

      it('should have the property threatActorTypes (base name: "threatActorTypes")', function() {
        // TODO: update the code to test the property threatActorTypes
        expect(instance).to.have.property('threatActorTypes');
        // expect(instance.threatActorTypes).to.be(expectedValueLiteral);
      });

      it('should have the property pattern (base name: "pattern")', function() {
        // TODO: update the code to test the property pattern
        expect(instance).to.have.property('pattern');
        // expect(instance.pattern).to.be(expectedValueLiteral);
      });

      it('should have the property creator (base name: "creator")', function() {
        // TODO: update the code to test the property creator
        expect(instance).to.have.property('creator');
        // expect(instance.creator).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property malwareNames (base name: "malwareNames")', function() {
        // TODO: update the code to test the property malwareNames
        expect(instance).to.have.property('malwareNames');
        // expect(instance.malwareNames).to.be(expectedValueLiteral);
      });

      it('should have the property severity (base name: "severity")', function() {
        // TODO: update the code to test the property severity
        expect(instance).to.have.property('severity');
        // expect(instance.severity).to.be(expectedValueLiteral);
      });

    });
  });

}));