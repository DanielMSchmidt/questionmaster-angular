'use strict';

var app = angular.module('questionmasterAngularApp');

app.controller('MainCtrl', ['$scope', 'Storage', function ($scope, Storage) {
  var defaultQuestion = function(){
    return {
      question: "...",
      answer: "..."
    }
  }

  $scope.newQuestion = defaultQuestion();

  $scope.save = function(newQuestion){
    if($scope.newQuestion.question !== defaultQuestion().question){
      $scope.questions.push($scope.newQuestion);
      Storage.addQuestion($scope.newQuestion);
      $scope.newQuestion = defaultQuestion();
    }else{
      // Don't add if it doesnt differ
    }
  }

  $scope.questions = Storage.getQuestions();

}]);

app.service('Storage', function(){
  var USERKEY = "MeUser";

  var getKey = function(question){
    return USERKEY + question.question;
  }

  return {
    addQuestion: function(question){
      localStorage.setItem(getKey(question), angular.toJson(question));
    },
    removeQuestion: function(question){
      localStorage.removeItem(getKey(question));
    },
    getQuestions: function(){
      var questions = [];
      for(var i = 0, len = localStorage.length; i < len; i++){
        var key = localStorage.key(i);

        // To later only catch items of one topic domain
        if (key.indexOf(USERKEY) === 0){
          questions.push(angular.fromJson(localStorage[key]));
        }
      }
      return questions;
    }
  }
});

app.directive('question', function(){
  return {
    templateUrl: 'views/directives/question.html'
  }
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
