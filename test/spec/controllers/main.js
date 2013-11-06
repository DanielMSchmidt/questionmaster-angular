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
        scope.topics[0].active = false;
        scope.topics[1].active = true;
        return scope.topics[0].questions;
      },
      saveTopics: function(){
        return ;
      }
    }

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      Storage: Storage
    });
  }));

  it('should get the right active Topic', function(){
    expect(scope.activeTopic).toEqual(scope.topics[0]);
  });

  it('should be able to add a question', function(){
    scope.newQuestion = {
      question: "Hallo",
      answer: "Welt"
    };
    var len = scope.activeTopic.questions.length;

    scope.addQuestion();
    expect(scope.activeTopic.questions.length).toEqual(len + 1);
  });

  it('should be able to change the topic', function(){
    expect(scope.activeTopic).toEqual(scope.topics[0]);
    scope.changeTopic(scope.topics[1]);

    expect(scope.activeTopic).toEqual(scope.topics[1]);
    expect(scope.activeTopic.active).toEqual(true);
  });

});
