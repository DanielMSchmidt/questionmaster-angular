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
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have an array of questions', function () {
    expect(Object.prototype.toString.call( scope.questions )).toBe('[object Array]');
  });

  it('should have a localstorage', function() {
    expect(localStorage).not.toBe(undefined);
  });

  it('should add a question if asked to', function() {
    var oldLen = localStorage.length;

    scope.save({'question': 'Funktioniert es?', 'answer': 'Ja!'});

    expect(localStorage.length).toBe(oldLen + 1);
  });

  it('should not add a question if its the default one', function() {
    var oldLen = localStorage.length;

    scope.save({'question': '...', 'answer': '...'});

    expect(localStorage.length).toBe(oldLen);
  });

});
