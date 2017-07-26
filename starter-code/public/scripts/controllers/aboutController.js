'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide(); // REVIEW: We have a slight refactor in selectors here, which has reduced the amount of code from the last lab.

    // DONE: Call a function to load all the data.
    // Pass a view function as a callback, so the view will render after the data is loaded.
    // estimate 10 min, actual 10 min
    module.repos.requestRepos(module.repoView.index);
    $('#about').show();
  }
  module.aboutController = aboutController;
})(app);
