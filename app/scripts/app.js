'use strict';

angular.module('questionmasterAngularApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/topic/new', {
        templateUrl: 'views/newTopic.html',
        controller: 'TopicsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
