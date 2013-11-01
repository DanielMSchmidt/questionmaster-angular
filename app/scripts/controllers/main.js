'use strict';

var app = angular.module('questionmasterAngularApp');
app.defaultQuestion = function(){
    return {
      question: '...',
      answer: '...'
    };
  };
app.defaultTopic = 'Neues Thema';

app.controller('MainCtrl', ['$scope', 'Storage', function ($scope, Storage) {

  // Initialization
  $scope.topics = ['MeinThema'];
  $scope.activeTopic = $scope.topics[0];
  $scope.newQuestion = app.defaultQuestion();

  // Access stored data
  var store = Storage.createQuestionAccessor($scope.activeTopic);
  $scope.questions = store.getQuestions();

  $scope.save = function(newQuestion){
    if($scope.activeTopic && newQuestion.question !== app.defaultQuestion().question){
      $scope.questions.push(newQuestion);
      store.addQuestion(newQuestion);
      newQuestion = app.defaultQuestion();
    }else{
      // Don't add if it doesnt differ
    }
  };

  $scope.changeTopic = function (newTopicName){
    if((newTopicName === undefined)){
      return false;
    }
    if ($scope.topics.indexOf(newTopicName) === -1){
      // TODO: Put a watch on it, so it gets stored in localstorage
      $scope.topics.push(newTopicName);
    }

    $scope.activeTopic = newTopicName;
    store = Storage.createQuestionAccessor($scope.activeTopic);
    $scope.questions = store.getQuestions();
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
