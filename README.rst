QuestionMaster Angular
======================

This is an angular app, designed to help students to learn a topic, by asking them the Questions they need to know.


Getting Started
---------------

- Use `npm install && bower install` to install all dependencies.
- Use `grunt server` to start the development server
- Use `grunt` to create a build

Todos
------

Refactorings:

- move the new question into template / partial (http://docs.angularjs.org/api/ng.directive:ngInclude)
- remove Question/Topic suffixes from their accessors
- move add question into modal
- style sidebar nicer

Improvements:

- Provide a possibility to take a test
- Provide a possibility to search through your questions
- Provide a possibility to add a bulk of questions
- Add an error screen if localstorage isn't supported
- refactor, so that topic is a big object with a title and an array of questions

Further Plans:

- Add a simple Rails API, which returns an url for a send topic (to share with friends). This can than be imported in your app
