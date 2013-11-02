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
    scope.topics = [
      {
        name: "FirstTopic",
        questions: [],
        active: true
      },{
        name: "SecondTopic",
        questions: [
          {
            question: "What?",
            answer: "42"
          }
        ],
        active: false
      }
    ];

    Storage = {
      getTopics: function(){
        return scope.topics;
      },
      changeTopic: function(){
        return [];
      }
    }

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      Storage: Storage
    });
  }));

  // TODO: Write Mock for Storage (on change of questions)

  it('should get the right active Topic', function(){
    expect(scope.activeTopic).toEqual(scope.topics[0]);
  });

  it('should be able to add a question', function(){
    scope.newQuestion = {
      question: "Hallo",
      answer: "Welt"
    };
    var len = scope.questions.length;

    scope.addQuestion();
    expect(scope.questions.length).toEqual(len + 1);
  });

  it('should be able to change the topic', function(){
    scope.changeTopic(scope.topics[0]);
    expect(scope.activeTopic).toEqual(scope.topics[0]);
    scope.changeTopic(scope.topics[1]);

    expect(scope.activeTopic).toEqual(scope.topics[1]);
    expect(scope.activeTopic.active).toEqual(true);
  });

  it('should be able to add a new topic', function(){
    var newTopic = function(){
      return {
        name: "A new Topic",
        active: false,
        questions: []
      };
    };
    var len = scope.topics.length;
    scope.newTopic = newTopic();
    scope.changeTopic();

    expect(scope.newTopic).toBeUndefined;
    expect(scope.topics.length).toEqual(len + 1);
    expect(scope.activeTopic).toEqual(newTopic());
  });

});
