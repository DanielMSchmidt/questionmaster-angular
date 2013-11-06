(function () {
  'use strict';

  var app = angular.module('questionmasterAngularApp');

  app.service('Storage', function(){
    var TOPICS_KEY = 'topics';
    var accessor = {
      getTopics: function(){
        var keysFromStorage = angular.fromJson(localStorage.getItem(TOPICS_KEY));
        return (keysFromStorage === null) ? [] : keysFromStorage;
      },
      saveTopics: function(topics){
        localStorage.setItem(TOPICS_KEY, angular.toJson(topics));
      },
      changeTopic: function(newTopic){
        var topics = accessor.getTopics();
        topics.forEach(function(topic){
          topic.active = false;
        });

        var index = topics.map(function(topic){
          return topic.name;
        }).indexOf(newTopic.name);

        if (index === -1){
          index = topics.length;
          topics.push(newTopic);
        }

        topics[index].active = true;
        accessor.saveTopics(topics);

        return newTopic.questions;
      }
    };
    return accessor;
  });
}());
