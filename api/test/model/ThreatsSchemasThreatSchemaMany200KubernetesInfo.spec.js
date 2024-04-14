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
    describe('ThreatsSchemasThreatSchemaMany200KubernetesInfo', function() {
      beforeEach(function() {
        instance = new S1MgmtApi.ThreatsSchemasThreatSchemaMany200KubernetesInfo();
      });

      it('should create an instance of ThreatsSchemasThreatSchemaMany200KubernetesInfo', function() {
        // TODO: update the code to test ThreatsSchemasThreatSchemaMany200KubernetesInfo
        expect(instance).to.be.a(S1MgmtApi.ThreatsSchemasThreatSchemaMany200KubernetesInfo);
      });

      it('should have the property podLabels (base name: "podLabels")', function() {
        // TODO: update the code to test the property podLabels
        expect(instance).to.have.property('podLabels');
        // expect(instance.podLabels).to.be(expectedValueLiteral);
      });

      it('should have the property controllerLabels (base name: "controllerLabels")', function() {
        // TODO: update the code to test the property controllerLabels
        expect(instance).to.have.property('controllerLabels');
        // expect(instance.controllerLabels).to.be(expectedValueLiteral);
      });

      it('should have the property nodeLabels (base name: "nodeLabels")', function() {
        // TODO: update the code to test the property nodeLabels
        expect(instance).to.have.property('nodeLabels');
        // expect(instance.nodeLabels).to.be(expectedValueLiteral);
      });

      it('should have the property controllerName (base name: "controllerName")', function() {
        // TODO: update the code to test the property controllerName
        expect(instance).to.have.property('controllerName');
        // expect(instance.controllerName).to.be(expectedValueLiteral);
      });

      it('should have the property node (base name: "node")', function() {
        // TODO: update the code to test the property node
        expect(instance).to.have.property('node');
        // expect(instance.node).to.be(expectedValueLiteral);
      });

      it('should have the property pod (base name: "pod")', function() {
        // TODO: update the code to test the property pod
        expect(instance).to.have.property('pod');
        // expect(instance.pod).to.be(expectedValueLiteral);
      });

      it('should have the property namespace (base name: "namespace")', function() {
        // TODO: update the code to test the property namespace
        expect(instance).to.have.property('namespace');
        // expect(instance.namespace).to.be(expectedValueLiteral);
      });

      it('should have the property namespaceLabels (base name: "namespaceLabels")', function() {
        // TODO: update the code to test the property namespaceLabels
        expect(instance).to.have.property('namespaceLabels');
        // expect(instance.namespaceLabels).to.be(expectedValueLiteral);
      });

      it('should have the property controllerKind (base name: "controllerKind")', function() {
        // TODO: update the code to test the property controllerKind
        expect(instance).to.have.property('controllerKind');
        // expect(instance.controllerKind).to.be(expectedValueLiteral);
      });

      it('should have the property cluster (base name: "cluster")', function() {
        // TODO: update the code to test the property cluster
        expect(instance).to.have.property('cluster');
        // expect(instance.cluster).to.be(expectedValueLiteral);
      });

      it('should have the property isContainerQuarantine (base name: "isContainerQuarantine")', function() {
        // TODO: update the code to test the property isContainerQuarantine
        expect(instance).to.have.property('isContainerQuarantine');
        // expect(instance.isContainerQuarantine).to.be(expectedValueLiteral);
      });

    });
  });

}));
