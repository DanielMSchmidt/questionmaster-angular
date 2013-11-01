(function () {
  'use strict';

  app = angular.module('questionmasterAngularApp');

  app.service('Storage', function(){
    return {
      getTopics: function(){
        // TODO: Well, just get it from the localstorage
      },
      saveTopics: function(topics){
        //TODO: Well put it to json and then to localstorage
      },
      changeTopic: function(newTopic){
        // TODO: Is this a new topic? Than Add it
        // TODO: If not, set it active!
      }
    };
  });
}());
