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
  return {
    addQuestion: function(question){
      console.log("added question :)");
    },
    removeQuestion: function(question){
      console.log("removed question :)");
    },
    getQuestions: function(){
      return [
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
    }
  }
})

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
