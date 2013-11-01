'use strict';

describe('Service: Storage', function () {

  // load the service's module
  beforeEach(module('questionmasterAngularApp'));

  // instantiate service
  var Storage, topics;
  beforeEach(inject(function (_Storage_) {
    Storage = _Storage_;
    topics = [
      {
        name: "FirstTopic",
        questions: []
      },{
        name: "SecondTopic",
        questions: [
          {
            question: "What?",
            answer: "42"
          }
        ]
      }
    ];
  }));

  it('should be able to set/get all topics', function(){
    Storage.saveTopics(topics);
    expect(Storage.getTopics()).toEqual(topics);
  });

  it('should be able to change the topic', function(){
    expect(Storage.changeTopic(topics[0].questions)).toEqual([]);
    expect(Storage.changeTopic(topics[1].questions)).toEqual([{question: "What?", answer: "42"}]);
  });
});
