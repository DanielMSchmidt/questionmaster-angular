(function () {
  'use strict';

  app = angular.module('questionmasterAngularApp');

  app.service('Storage', function(){

    var createTopicAccessor = function (topic){
      var USERKEY = topic;

      var getKey = function(question){
        return USERKEY + question.question;
      };

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
      };
    }

     return { createTopicAccessor: createTopicAccessor};
  });
}());