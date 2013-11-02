(function () {
  'use strict';

  app = angular.module('questionmasterAngularApp');

  app.service('Storage', function(){
    var accessor = {
      getTopics: function(){
        return angular.fromJson(localStorage.getItem('topics'));
      },
      saveTopics: function(topics){
        localStorage.setItem('topics', angular.toJson(topics));
      },
      changeTopic: function(newTopic){
        var topics = accessor.getTopics();
        topics.forEach(function(topic){
          topic.active = false;
        });
        newTopic.active = true;

        if (topics.indexOf(newTopic) === -1){
          topics.push(newTopic)
        }
        accessor.saveTopics(topics);
        console.log(newTopic);
        console.log(newTopic.questions);
        return newTopic.questions;
      }
    };
    return accessor;
  });
}());
