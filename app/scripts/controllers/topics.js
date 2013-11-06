'use strict';

var app = angular.module('questionmasterAngularApp');

app.controller('TopicsCtrl', ['$scope', '$location', 'Storage', function ($scope, $location, Storage) {

  $scope.addTopic = function (){
    if ($scope.newTopic === undefined){
      return ;
    }

    Storage.changeTopic({
      name: $scope.newTopic.name,
      questions: []
    });

    $location.path('/');
  };
}]);

