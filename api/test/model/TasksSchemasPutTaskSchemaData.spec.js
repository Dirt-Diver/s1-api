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
    describe('TasksSchemasPutTaskSchemaData', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.TasksSchemasPutTaskSchemaData();
      });

      it('should create an instance of TasksSchemasPutTaskSchemaData', function() {
        // TODO: update the code to test TasksSchemasPutTaskSchemaData
        expect(instance).to.be.a(S1MgmtApi.TasksSchemasPutTaskSchemaData);
      });

      it('should have the property maintenanceWindowsByDay (base name: "maintenanceWindowsByDay")', function() {
        // TODO: update the code to test the property maintenanceWindowsByDay
        expect(instance).to.have.property('maintenanceWindowsByDay');
        // expect(instance.maintenanceWindowsByDay).to.be(expectedValueLiteral);
      });

      it('should have the property maxConcurrent (base name: "maxConcurrent")', function() {
        // TODO: update the code to test the property maxConcurrent
        expect(instance).to.have.property('maxConcurrent');
        // expect(instance.maxConcurrent).to.be(expectedValueLiteral);
      });

      it('should have the property inheritParentMaintenanceConfig (base name: "inheritParentMaintenanceConfig")', function() {
        // TODO: update the code to test the property inheritParentMaintenanceConfig
        expect(instance).to.have.property('inheritParentMaintenanceConfig');
        // expect(instance.inheritParentMaintenanceConfig).to.be(expectedValueLiteral);
      });

      it('should have the property timezoneGmt (base name: "timezoneGmt")', function() {
        // TODO: update the code to test the property timezoneGmt
        expect(instance).to.have.property('timezoneGmt');
        // expect(instance.timezoneGmt).to.be(expectedValueLiteral);
      });

      it('should have the property inheritParentConcurrencyConfig (base name: "inheritParentConcurrencyConfig")', function() {
        // TODO: update the code to test the property inheritParentConcurrencyConfig
        expect(instance).to.have.property('inheritParentConcurrencyConfig');
        // expect(instance.inheritParentConcurrencyConfig).to.be(expectedValueLiteral);
      });

    });
  });

}));