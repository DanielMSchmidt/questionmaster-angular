'use strict';

var app = angular.module('questionmasterAngularApp');
app.defaultQuestion = function(){
    return {
      question: '...',
      answer: '...'
    };
  };
app.controller('MainCtrl', ['$scope', 'Storage', function ($scope, Storage) {

  // Initialization
  $scope.topics = [];
  $scope.activeTopic = "MeinThema";
  $scope.newQuestion = app.defaultQuestion();
  var store = Storage.createTopicAccessor($scope.activeTopic);

  $scope.save = function(newQuestion){
    if(newQuestion.question !== app.defaultQuestion().question){
      $scope.questions.push(newQuestion);
      store.addQuestion(newQuestion);
      newQuestion = app.defaultQuestion();
    }else{
      // Don't add if it doesnt differ
    }
  };

  $scope.questions = store.getQuestions();

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
