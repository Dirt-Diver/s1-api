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
    describe('V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data();
      });

      it('should create an instance of V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data', function() {
        // TODO: update the code to test V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data
        expect(instance).to.be.a(S1MgmtApi.V21AccountManagementSchemasGetCloudProviderAccountErrorMany200Data);
      });

      it('should have the property detectedAt (base name: "detectedAt")', function() {
        // TODO: update the code to test the property detectedAt
        expect(instance).to.have.property('detectedAt');
        // expect(instance.detectedAt).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property recommendedAction (base name: "recommendedAction")', function() {
        // TODO: update the code to test the property recommendedAction
        expect(instance).to.have.property('recommendedAction');
        // expect(instance.recommendedAction).to.be(expectedValueLiteral);
      });

      it('should have the property healthStatus (base name: "healthStatus")', function() {
        // TODO: update the code to test the property healthStatus
        expect(instance).to.have.property('healthStatus');
        // expect(instance.healthStatus).to.be(expectedValueLiteral);
      });

      it('should have the property cloudProviderAccountId (base name: "cloudProviderAccountId")', function() {
        // TODO: update the code to test the property cloudProviderAccountId
        expect(instance).to.have.property('cloudProviderAccountId');
        // expect(instance.cloudProviderAccountId).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

    });
  });

}));
