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

  it('should not add a question if there is no topic', function() {
    var oldLen = localStorage.length;

    scope.activeTopic = undefined;
    scope.save({'question': 'I am', 'answer': 'valid'});

    expect(localStorage.length).toBe(oldLen);
  });

  it('should change the count of questions if topic changes', function() {
    var firstTopicLen = scope.questions.length;

    scope.changeTopic('My New Topic');

    expect(scope.questions.length).not.toBe(firstTopicLen);
  });

  it('shouldnt be able to add a topic with an already existing name', function() {
    scope.topics = ['Hallo Welt'];

    scope.changeTopic('Hallo Welt');

    expect(scope.topics.length).toBe(1);
  });

});
