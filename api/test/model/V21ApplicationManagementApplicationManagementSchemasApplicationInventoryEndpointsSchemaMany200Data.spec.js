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
    describe('V21ApplicationManagementApplicationManagementSchemasApplicationInventoryEndpointsSchemaMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasApplicationInventoryEndpointsSchemaMany200Data();
      });

      it('should create an instance of V21ApplicationManagementApplicationManagementSchemasApplicationInventoryEndpointsSchemaMany200Data', function() {
        // TODO: update the code to test V21ApplicationManagementApplicationManagementSchemasApplicationInventoryEndpointsSchemaMany200Data
        expect(instance).to.be.a(S1MgmtApi.V21ApplicationManagementApplicationManagementSchemasApplicationInventoryEndpointsSchemaMany200Data);
      });

      it('should have the property osType (base name: "osType")', function() {
        // TODO: update the code to test the property osType
        expect(instance).to.have.property('osType');
        // expect(instance.osType).to.be(expectedValueLiteral);
      });

      it('should have the property coreCount (base name: "coreCount")', function() {
        // TODO: update the code to test the property coreCount
        expect(instance).to.have.property('coreCount');
        // expect(instance.coreCount).to.be(expectedValueLiteral);
      });

      it('should have the property endpointName (base name: "endpointName")', function() {
        // TODO: update the code to test the property endpointName
        expect(instance).to.have.property('endpointName');
        // expect(instance.endpointName).to.be(expectedValueLiteral);
      });

      it('should have the property endpointUuid (base name: "endpointUuid")', function() {
        // TODO: update the code to test the property endpointUuid
        expect(instance).to.have.property('endpointUuid');
        // expect(instance.endpointUuid).to.be(expectedValueLiteral);
      });

      it('should have the property fileSize (base name: "fileSize")', function() {
        // TODO: update the code to test the property fileSize
        expect(instance).to.have.property('fileSize');
        // expect(instance.fileSize).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property groupName (base name: "groupName")', function() {
        // TODO: update the code to test the property groupName
        expect(instance).to.have.property('groupName');
        // expect(instance.groupName).to.be(expectedValueLiteral);
      });

      it('should have the property siteName (base name: "siteName")', function() {
        // TODO: update the code to test the property siteName
        expect(instance).to.have.property('siteName');
        // expect(instance.siteName).to.be(expectedValueLiteral);
      });

      it('should have the property cpe (base name: "cpe")', function() {
        // TODO: update the code to test the property cpe
        expect(instance).to.have.property('cpe');
        // expect(instance.cpe).to.be(expectedValueLiteral);
      });

      it('should have the property accountName (base name: "accountName")', function() {
        // TODO: update the code to test the property accountName
        expect(instance).to.have.property('accountName');
        // expect(instance.accountName).to.be(expectedValueLiteral);
      });

      it('should have the property endpointId (base name: "endpointId")', function() {
        // TODO: update the code to test the property endpointId
        expect(instance).to.have.property('endpointId');
        // expect(instance.endpointId).to.be(expectedValueLiteral);
      });

      it('should have the property applicationInstallationDate (base name: "applicationInstallationDate")', function() {
        // TODO: update the code to test the property applicationInstallationDate
        expect(instance).to.have.property('applicationInstallationDate');
        // expect(instance.applicationInstallationDate).to.be(expectedValueLiteral);
      });

      it('should have the property cpuCount (base name: "cpuCount")', function() {
        // TODO: update the code to test the property cpuCount
        expect(instance).to.have.property('cpuCount');
        // expect(instance.cpuCount).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property osName (base name: "osName")', function() {
        // TODO: update the code to test the property osName
        expect(instance).to.have.property('osName');
        // expect(instance.osName).to.be(expectedValueLiteral);
      });

      it('should have the property applicationName (base name: "applicationName")', function() {
        // TODO: update the code to test the property applicationName
        expect(instance).to.have.property('applicationName');
        // expect(instance.applicationName).to.be(expectedValueLiteral);
      });

      it('should have the property applicationInstallationPath (base name: "applicationInstallationPath")', function() {
        // TODO: update the code to test the property applicationInstallationPath
        expect(instance).to.have.property('applicationInstallationPath');
        // expect(instance.applicationInstallationPath).to.be(expectedValueLiteral);
      });

      it('should have the property detectionDate (base name: "detectionDate")', function() {
        // TODO: update the code to test the property detectionDate
        expect(instance).to.have.property('detectionDate');
        // expect(instance.detectionDate).to.be(expectedValueLiteral);
      });

      it('should have the property osArch (base name: "osArch")', function() {
        // TODO: update the code to test the property osArch
        expect(instance).to.have.property('osArch');
        // expect(instance.osArch).to.be(expectedValueLiteral);
      });

      it('should have the property osVersion (base name: "osVersion")', function() {
        // TODO: update the code to test the property osVersion
        expect(instance).to.have.property('osVersion');
        // expect(instance.osVersion).to.be(expectedValueLiteral);
      });

      it('should have the property endpointType (base name: "endpointType")', function() {
        // TODO: update the code to test the property endpointType
        expect(instance).to.have.property('endpointType');
        // expect(instance.endpointType).to.be(expectedValueLiteral);
      });

    });
  });

}));
