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

- Split different concerns into different files
- move the new question into template / partial
- generate a unique string for each user (Or leave an app specific, not sure if matters)
- Add zurb-foundation

Improvements:

- Provide a possibility to change btw different subjects / topics
- Provide a possibility to take a test
- Provide a possibility to search through your questions

Further Plans:

- Add a simple Rails API, which returns an url for a send topic (to share with friends). This can than be imported in your app (user specific string would bother here)