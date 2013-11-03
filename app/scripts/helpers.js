var app = angular.module('questionmasterAngularApp');
app.directive('question', function(){
  return {
    templateUrl: 'views/directives/question.html'
  };
});

app.filter('reverse', function() {
  return function(items) {
    if (items === undefined){
      return [];
    }else{
      return items.slice().reverse();
    }
  };
});