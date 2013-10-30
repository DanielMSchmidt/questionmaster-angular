'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('questionmasterAngularApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have an array of questions', function () {
    expect(Object.prototype.toString.call( scope.questions )).toBe('[object Array]');
  });

  // TODO: Add some tests, which test if localstorage is hit on curd methods of Storage
});
