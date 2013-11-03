(function () {
  'use strict';

  app = angular.module('questionmasterAngularApp');

  app.service('Storage', function(){
    var TOPICS_KEY = 'topics';
    var accessor = {
      getTopics: function(){
        var keys_from_storage = angular.fromJson(localStorage.getItem(TOPICS_KEY));
        return (keys_from_storage === null) ? [] : keys_from_storage;
      },
      saveTopics: function(topics){
        localStorage.setItem(TOPICS_KEY, angular.toJson(topics));
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

        return newTopic.questions;
      }
    };
    return accessor;
  });
}());
