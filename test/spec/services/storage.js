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
    expect(Storage.getAllTopics).not.toBeUndefined();
    expect(Storage.getActiveTopic).not.toBeUndefined();
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
});
