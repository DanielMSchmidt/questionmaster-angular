'use strict';

var app = angular.module('questionmasterAngularApp');

app.controller('MainCtrl', function ($scope) {
    $scope.save = function(newQuestion){
      console.log("Yeah, well i didn't saved that one exactly");
      $scope.newQuestion = {}
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
