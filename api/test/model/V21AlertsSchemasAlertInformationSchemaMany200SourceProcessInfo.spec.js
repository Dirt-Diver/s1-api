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
    describe('V21AlertsSchemasAlertInformationSchemaMany200SourceProcessInfo', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200SourceProcessInfo();
      });

      it('should create an instance of V21AlertsSchemasAlertInformationSchemaMany200SourceProcessInfo', function() {
        // TODO: update the code to test V21AlertsSchemasAlertInformationSchemaMany200SourceProcessInfo
        expect(instance).to.be.a(S1MgmtApi.V21AlertsSchemasAlertInformationSchemaMany200SourceProcessInfo);
      });

      it('should have the property fileHashSha256 (base name: "fileHashSha256")', function() {
        // TODO: update the code to test the property fileHashSha256
        expect(instance).to.have.property('fileHashSha256');
        // expect(instance.fileHashSha256).to.be(expectedValueLiteral);
      });

      it('should have the property subsystem (base name: "subsystem")', function() {
        // TODO: update the code to test the property subsystem
        expect(instance).to.have.property('subsystem');
        // expect(instance.subsystem).to.be(expectedValueLiteral);
      });

      it('should have the property uniqueId (base name: "uniqueId")', function() {
        // TODO: update the code to test the property uniqueId
        expect(instance).to.have.property('uniqueId');
        // expect(instance.uniqueId).to.be(expectedValueLiteral);
      });

      it('should have the property fileSignerIdentity (base name: "fileSignerIdentity")', function() {
        // TODO: update the code to test the property fileSignerIdentity
        expect(instance).to.have.property('fileSignerIdentity');
        // expect(instance.fileSignerIdentity).to.be(expectedValueLiteral);
      });

      it('should have the property integrityLevel (base name: "integrityLevel")', function() {
        // TODO: update the code to test the property integrityLevel
        expect(instance).to.have.property('integrityLevel');
        // expect(instance.integrityLevel).to.be(expectedValueLiteral);
      });

      it('should have the property pid (base name: "pid")', function() {
        // TODO: update the code to test the property pid
        expect(instance).to.have.property('pid');
        // expect(instance.pid).to.be(expectedValueLiteral);
      });

      it('should have the property filePath (base name: "filePath")', function() {
        // TODO: update the code to test the property filePath
        expect(instance).to.have.property('filePath');
        // expect(instance.filePath).to.be(expectedValueLiteral);
      });

      it('should have the property effectiveUser (base name: "effectiveUser")', function() {
        // TODO: update the code to test the property effectiveUser
        expect(instance).to.have.property('effectiveUser');
        // expect(instance.effectiveUser).to.be(expectedValueLiteral);
      });

      it('should have the property fileHashSha1 (base name: "fileHashSha1")', function() {
        // TODO: update the code to test the property fileHashSha1
        expect(instance).to.have.property('fileHashSha1');
        // expect(instance.fileHashSha1).to.be(expectedValueLiteral);
      });

      it('should have the property pidStarttime (base name: "pidStarttime")', function() {
        // TODO: update the code to test the property pidStarttime
        expect(instance).to.have.property('pidStarttime');
        // expect(instance.pidStarttime).to.be(expectedValueLiteral);
      });

      it('should have the property fileHashMd5 (base name: "fileHashMd5")', function() {
        // TODO: update the code to test the property fileHashMd5
        expect(instance).to.have.property('fileHashMd5');
        // expect(instance.fileHashMd5).to.be(expectedValueLiteral);
      });

      it('should have the property realUser (base name: "realUser")', function() {
        // TODO: update the code to test the property realUser
        expect(instance).to.have.property('realUser');
        // expect(instance.realUser).to.be(expectedValueLiteral);
      });

      it('should have the property loginUser (base name: "loginUser")', function() {
        // TODO: update the code to test the property loginUser
        expect(instance).to.have.property('loginUser');
        // expect(instance.loginUser).to.be(expectedValueLiteral);
      });

      it('should have the property storyline (base name: "storyline")', function() {
        // TODO: update the code to test the property storyline
        expect(instance).to.have.property('storyline');
        // expect(instance.storyline).to.be(expectedValueLiteral);
      });

      it('should have the property commandline (base name: "commandline")', function() {
        // TODO: update the code to test the property commandline
        expect(instance).to.have.property('commandline');
        // expect(instance.commandline).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

    });
  });

}));
