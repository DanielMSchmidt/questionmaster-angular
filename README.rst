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

Improvements:

- Provide a possibility to change btw different subjects / topics
- Provide a possibility to take a test
- Provide a possibility to search through your questions
- Add an error screen if localstorage isn't supported

Further Plans:

- Add a simple Rails API, which returns an url for a send topic (to share with friends). This can than be imported in your app
