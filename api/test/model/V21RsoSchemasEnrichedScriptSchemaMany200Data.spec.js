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
    describe('V21RsoSchemasEnrichedScriptSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21RsoSchemasEnrichedScriptSchemaMany200Data();
      });

      it('should create an instance of V21RsoSchemasEnrichedScriptSchemaMany200Data', function() {
        // TODO: update the code to test V21RsoSchemasEnrichedScriptSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.V21RsoSchemasEnrichedScriptSchemaMany200Data);
      });

      it('should have the property isAvailableForLite (base name: "isAvailableForLite")', function() {
        // TODO: update the code to test the property isAvailableForLite
        expect(instance).to.have.property('isAvailableForLite');
        // expect(instance.isAvailableForLite).to.be(expectedValueLiteral);
      });

      it('should have the property inputInstructions (base name: "inputInstructions")', function() {
        // TODO: update the code to test the property inputInstructions
        expect(instance).to.have.property('inputInstructions');
        // expect(instance.inputInstructions).to.be(expectedValueLiteral);
      });

      it('should have the property supportedDestinations (base name: "supportedDestinations")', function() {
        // TODO: update the code to test the property supportedDestinations
        expect(instance).to.have.property('supportedDestinations');
        // expect(instance.supportedDestinations).to.be(expectedValueLiteral);
      });

      it('should have the property _package (base name: "package")', function() {
        // TODO: update the code to test the property _package
        expect(instance).to.have.property('_package');
        // expect(instance._package).to.be(expectedValueLiteral);
      });

      it('should have the property isAvailableForArs (base name: "isAvailableForArs")', function() {
        // TODO: update the code to test the property isAvailableForArs
        expect(instance).to.have.property('isAvailableForArs');
        // expect(instance.isAvailableForArs).to.be(expectedValueLiteral);
      });

      it('should have the property scriptType (base name: "scriptType")', function() {
        // TODO: update the code to test the property scriptType
        expect(instance).to.have.property('scriptType');
        // expect(instance.scriptType).to.be(expectedValueLiteral);
      });

      it('should have the property inputExample (base name: "inputExample")', function() {
        // TODO: update the code to test the property inputExample
        expect(instance).to.have.property('inputExample');
        // expect(instance.inputExample).to.be(expectedValueLiteral);
      });

      it('should have the property osTypes (base name: "osTypes")', function() {
        // TODO: update the code to test the property osTypes
        expect(instance).to.have.property('osTypes');
        // expect(instance.osTypes).to.be(expectedValueLiteral);
      });

      it('should have the property scopeId (base name: "scopeId")', function() {
        // TODO: update the code to test the property scopeId
        expect(instance).to.have.property('scopeId');
        // expect(instance.scopeId).to.be(expectedValueLiteral);
      });

      it('should have the property createdByUserId (base name: "createdByUserId")', function() {
        // TODO: update the code to test the property createdByUserId
        expect(instance).to.have.property('createdByUserId');
        // expect(instance.createdByUserId).to.be(expectedValueLiteral);
      });

      it('should have the property inputRequired (base name: "inputRequired")', function() {
        // TODO: update the code to test the property inputRequired
        expect(instance).to.have.property('inputRequired');
        // expect(instance.inputRequired).to.be(expectedValueLiteral);
      });

      it('should have the property bucketName (base name: "bucketName")', function() {
        // TODO: update the code to test the property bucketName
        expect(instance).to.have.property('bucketName');
        // expect(instance.bucketName).to.be(expectedValueLiteral);
      });

      it('should have the property mgmtId (base name: "mgmtId")', function() {
        // TODO: update the code to test the property mgmtId
        expect(instance).to.have.property('mgmtId');
        // expect(instance.mgmtId).to.be(expectedValueLiteral);
      });

      it('should have the property scriptName (base name: "scriptName")', function() {
        // TODO: update the code to test the property scriptName
        expect(instance).to.have.property('scriptName');
        // expect(instance.scriptName).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property scopeLevel (base name: "scopeLevel")', function() {
        // TODO: update the code to test the property scopeLevel
        expect(instance).to.have.property('scopeLevel');
        // expect(instance.scopeLevel).to.be(expectedValueLiteral);
      });

      it('should have the property signatureType (base name: "signatureType")', function() {
        // TODO: update the code to test the property signatureType
        expect(instance).to.have.property('signatureType');
        // expect(instance.signatureType).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property updaterId (base name: "updaterId")', function() {
        // TODO: update the code to test the property updaterId
        expect(instance).to.have.property('updaterId');
        // expect(instance.updaterId).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property createdByUser (base name: "createdByUser")', function() {
        // TODO: update the code to test the property createdByUser
        expect(instance).to.have.property('createdByUser');
        // expect(instance.createdByUser).to.be(expectedValueLiteral);
      });

      it('should have the property scriptDescription (base name: "scriptDescription")', function() {
        // TODO: update the code to test the property scriptDescription
        expect(instance).to.have.property('scriptDescription');
        // expect(instance.scriptDescription).to.be(expectedValueLiteral);
      });

      it('should have the property fileSize (base name: "fileSize")', function() {
        // TODO: update the code to test the property fileSize
        expect(instance).to.have.property('fileSize');
        // expect(instance.fileSize).to.be(expectedValueLiteral);
      });

      it('should have the property outputFilePaths (base name: "outputFilePaths")', function() {
        // TODO: update the code to test the property outputFilePaths
        expect(instance).to.have.property('outputFilePaths');
        // expect(instance.outputFilePaths).to.be(expectedValueLiteral);
      });

      it('should have the property creator (base name: "creator")', function() {
        // TODO: update the code to test the property creator
        expect(instance).to.have.property('creator');
        // expect(instance.creator).to.be(expectedValueLiteral);
      });

      it('should have the property signature (base name: "signature")', function() {
        // TODO: update the code to test the property signature
        expect(instance).to.have.property('signature');
        // expect(instance.signature).to.be(expectedValueLiteral);
      });

      it('should have the property scopeName (base name: "scopeName")', function() {
        // TODO: update the code to test the property scopeName
        expect(instance).to.have.property('scopeName');
        // expect(instance.scopeName).to.be(expectedValueLiteral);
      });

      it('should have the property scopePath (base name: "scopePath")', function() {
        // TODO: update the code to test the property scopePath
        expect(instance).to.have.property('scopePath');
        // expect(instance.scopePath).to.be(expectedValueLiteral);
      });

      it('should have the property fileName (base name: "fileName")', function() {
        // TODO: update the code to test the property fileName
        expect(instance).to.have.property('fileName');
        // expect(instance.fileName).to.be(expectedValueLiteral);
      });

      it('should have the property updater (base name: "updater")', function() {
        // TODO: update the code to test the property updater
        expect(instance).to.have.property('updater');
        // expect(instance.updater).to.be(expectedValueLiteral);
      });

      it('should have the property shortFileName (base name: "shortFileName")', function() {
        // TODO: update the code to test the property shortFileName
        expect(instance).to.have.property('shortFileName');
        // expect(instance.shortFileName).to.be(expectedValueLiteral);
      });

      it('should have the property scriptRuntimeTimeoutSeconds (base name: "scriptRuntimeTimeoutSeconds")', function() {
        // TODO: update the code to test the property scriptRuntimeTimeoutSeconds
        expect(instance).to.have.property('scriptRuntimeTimeoutSeconds');
        // expect(instance.scriptRuntimeTimeoutSeconds).to.be(expectedValueLiteral);
      });

      it('should have the property creatorId (base name: "creatorId")', function() {
        // TODO: update the code to test the property creatorId
        expect(instance).to.have.property('creatorId');
        // expect(instance.creatorId).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

    });
  });

}));
