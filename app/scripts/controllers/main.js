'use strict';

var app = angular.module('questionmasterAngularApp');
app.defaultQuestion = function(){
    return {
      question: '...',
      answer: '...'
    };
  };
app.defaultTopic = function() {
  return {
    name: 'Neues Thema',
    questions: [],
    active: false
  };
};

app.controller('MainCtrl', ['$scope', 'Storage', function ($scope, Storage) {

  // Initialization
  $scope.newQuestion = app.defaultQuestion();
  $scope.newTopic = app.defaultTopic();

  // Access stored data
  $scope.topics = Storage.getTopics();
  $scope.activeTopic = undefined; // TODO: search for topic where topic is active
  $scope.questions = $scope.activeTopic.questions;

  $scope.addQuestion = function(){
    if($scope.newQuestion.question === app.defaultQuestion().question){
      return ;
    }else{
      $scope.questions.push($scope.newQuestion);
      $scope.newQuestion = app.defaultQuestion();
    }
  };

  $scope.changeTopic = function() {
    if(($scope.newTopic === undefined)){
      return ;
    }else{
      $scope.activeTopic = $scope.newTopic;
      $scope.questions = Storage.changeTopic($scope.newTopic);
    }
  };

  $scope.$watch('questions', function(newVal, oldVal){
    console.log(newVal);
    console.log(oldVal);
    Storage.saveTopics($scope.topics);
  });
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
