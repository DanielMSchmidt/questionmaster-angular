'use strict';

var app = angular.module('questionmasterAngularApp');

app.controller('MainCtrl', function ($scope) {
  var defaultQuestion = function(){
    return {
      question: "...",
      answer: "..."
    }
  }

  $scope.newQuestion = defaultQuestion();

  $scope.save = function(newQuestion){
    // Don't add if it doesnt differ
    if($scope.newQuestion.question !== defaultQuestion().question){
      $scope.questions.push($scope.newQuestion);
      $scope.newQuestion = defaultQuestion();
    }
  }

  $scope.questions = [
    {
      'question': 'Where are my keys?',
      'answer': 'Behind you'
    },{
      'question': 'How much is the fish?',
      'answer': '4.20 &euro;'
    },{
      'question': 'Where is Google',
      'answer': '<a href="http://www.google.de">Here</a>'
    }
  ];

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
