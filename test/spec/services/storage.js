'use strict';

describe('Service: Storage', function () {

  // load the service's module
  beforeEach(module('questionmasterAngularApp'));

  // instantiate service
  var Storage;
  beforeEach(inject(function (_Storage_) {
    Storage = _Storage_;
  }));

  it('should have all expected methods', function () {
    expect(Storage.createQuestionAccessor).not.toBeUndefined();
    expect(Storage.createTopicAccessor).not.toBeUndefined();
  });

  it('should be able to access questions', function () {
    var store = Storage.createQuestionAccessor("mytopic");
    var question = {question: "Was war die Frage?", answer: "Das war die Frage!"};
    store.addQuestion(question);

    expect(store.getQuestions()[0]).toEqual(question);
  });

  it('should be able to remove questions', function () {
    var store = Storage.createQuestionAccessor("mytopic");
    var question = {question: "Was war die Frage?", answer: "Das war die Frage!"};
    store.addQuestion(question);

    expect(store.getQuestions()[0]).toEqual(question);

    store.removeQuestion(question);
    expect(store.getQuestions()).toEqual([]);
  });

  it('should be able to get an active topic', function () {
    var store = Storage.createTopicAccessor();

    expect(store.getActiveTopic()).not.toBeUndefined();
  });

  it('should be able to set a topic as active', function () {
    var store = Storage.createTopicAccessor();

    store.setActiveTopic('Neues Topic');
    expect(store.getActiveTopic()).toEqual('Neues Topic');
  });

  it('should add a new active topic the topicslist if it wasnt added', function () {
    var store = Storage.createTopicAccessor();
    var len = store.getTopics().length;

    store.setActiveTopic('Another Topic');
    expect(store.getTopics().length).toEqual(len + 1);
  });

  it('shouldnt add a topic twice', function () {
    var store = Storage.createTopicAccessor();

    store.setActiveTopic('A known Topic');
    var len = store.getTopics().length;
    store.setActiveTopic('A known Topic');

    expect(store.getTopics().length).toEqual(len);
  });

  it('should be able to remove a topic', function (){
    var store = Storage.createTopicAccessor();

    store.setActiveTopic('A known Topic');
    var len = store.getTopics().length;
    store.removeTopic('A known Topic');

    expect(store.getTopics().length).toEqual(len - 1);
  });
});
