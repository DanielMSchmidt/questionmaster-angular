'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('questionmasterAngularApp'));

  var MainCtrl,
    scope,
    Storage;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scope.activeTopic = "Hallo Topic";

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  // TODO: Write tests

});
