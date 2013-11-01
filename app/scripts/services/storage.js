(function () {
  'use strict';

  app = angular.module('questionmasterAngularApp');

  app.service('Storage', function(){

    var createQuestionAccessor = function (topic){
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
    };

    var createTopicAccessor = function (){
      var allTopics = function () {
        var topics = angular.fromJson(localStorage.getItem('topics'));
        if (topics === undefined || topics === null){
          topics = [];
        }
        return topics;
      };

      return {
        setActiveTopic: function (newTopic){
          var topics = allTopics();

          if (topics.indexOf(newTopic) === -1){
            topics.push(newTopic);
          }

          localStorage.setItem('topics', angular.toJson(topics));
          localStorage.setItem('active_topic', angular.toJson(newTopic));
        },
        getTopics: allTopics,
        removeTopic: function(formerTopic) {
          var topics = allTopics();
          var pos = topics.indexOf(formerTopic);
          if (pos > -1){
            topics.splice(pos, 1);
          }

          localStorage.setItem('topics', angular.toJson(topics));
          localStorage.setItem('active_topic', angular.toJson(topics[0]));
        },
        getActiveTopic: function() {
          var lsItem = angular.fromJson(localStorage.getItem('active_topic'));
          if (lsItem === undefined || lsItem === null){
            lsItem = allTopics()[0];
          }
          return lsItem;
        }
      };
    };

    return {
      createQuestionAccessor: createQuestionAccessor,
      createTopicAccessor: createTopicAccessor
    };
  });
}());
