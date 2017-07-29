'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.

    // DONE: Call a function to load all the data.
    // Pass a view function as a callback, so the view will render after the data is loaded.
    // estimated 15 min | actual 20 min
    console.log(module)
    app.repos.requestRepos(app.repoView.index);
  };
  console.log(module);

  module.aboutController = aboutController;
})(app);
