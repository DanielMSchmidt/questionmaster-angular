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
    name: '',
    questions: [],
    active: false
  };
};

app.controller('MainCtrl', ['$scope', '$location', 'Storage', function ($scope, $location, Storage) {
  var setActiveTopic = function(){
    $scope.topics.forEach(function(topic){
      if (topic.active){
        $scope.activeTopic = topic;
      }
    });
  };

  // Initialization
  $scope.newQuestion = app.defaultQuestion();
  $scope.newTopic = app.defaultTopic();
  $scope.newTopic.name = '';

  // Access stored data
  $scope.topics = Storage.getTopics();

  setActiveTopic();
  if($scope.activeTopic === undefined){
    $location.path('/topic/new');
    return;
  }

  $scope.addQuestion = function(){
    if($scope.newQuestion.question === app.defaultQuestion().question){
      return ;
    }else{
      $scope.activeTopic.questions.push($scope.newQuestion);
      $scope.newQuestion = app.defaultQuestion();
      Storage.saveTopics($scope.topics);
      $scope.showNewQuestion = false;
    }
  };

  $scope.changeTopic = function(newTopic) {
    if((newTopic.name === '')){
      return ;
    }else{

      $scope.activeTopic.questions = Storage.changeTopic(newTopic);
      $scope.topics = Storage.getTopics();
      $scope.newTopic.name = '';
      setActiveTopic();
    }
  };
}]);
