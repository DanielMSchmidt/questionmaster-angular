'use strict';

var app = angular.module('questionmasterAngularApp');
app.defaultQuestion = function(){
    return {
      question: '...',
      answer: '...'
    };
  };
app.defaultTopic = function() {return 'Neues Thema';};

app.controller('MainCtrl', ['$scope', 'Storage', function ($scope, Storage) {

  // Initialization
  $scope.newQuestion = app.defaultQuestion();
  $scope.newTopic = app.defaultTopic();

  // Access stored data
  var questionStore = Storage.createQuestionAccessor($scope.activeTopic);
  $scope.questions = questionStore.getQuestions();

  var topicStore = Storage.createTopicAccessor();
  $scope.topics = topicStore.getTopics();
  $scope.activeTopic = topicStore.getActiveTopic();

  if ($scope.activeTopic === undefined){
    // TODO: get me nicer than this
    $scope.activeTopic = app.defaultTopic();
    topicStore.setActiveTopic($scope.activeTopic);
  }

  $scope.save = function(newQuestion){
    if($scope.activeTopic && newQuestion.question !== app.defaultQuestion().question){
      $scope.questions.push(newQuestion);
      questionStore.addQuestion(newQuestion);
      newQuestion = app.defaultQuestion();
    }else{
      // Don't add if it doesnt differ
    }
  };

  $scope.changeTopic = function (newTopicName){
    if((newTopicName === undefined)){
      return false;
    }
    topicStore.setActiveTopic(newTopicName);

    $scope.activeTopic = newTopicName;
    questionStore = Storage.createQuestionAccessor($scope.activeTopic);
    $scope.questions = questionStore.getQuestions();
  }



}]);

app.directive('question', function(){
  return {
    templateUrl: 'views/directives/question.html'
  };
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
