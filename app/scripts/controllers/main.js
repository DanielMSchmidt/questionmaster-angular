'use strict';

angular.module('questionmasterAngularApp')
  .controller('MainCtrl', function ($scope) {
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
