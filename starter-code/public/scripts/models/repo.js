'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // Done!TODO: How would you like to fetch your repos? Don't forget to call the callback.
    //       Remember that the callback function we'll want to call relies on repos.all
    //       being an array with a bunch of repo objects in it, so you'll need to
    //       populate it with the response from Github before you call the callback.
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization :'token 69e223ab2982007e6016ceeded3807507c39b892'
      }
    })
    .then(
      function(data){
        var mappedData = data.map(function(repo){
          return {
            name: repo.name,
            description: repo.description,
            language: repo.language,
            create_date: repo.created_at,
            last_undated: repo.updated_at,
            watchers_count: repo.watchers_count
          }
        })
        console.log(mappedData);
      })
  };

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
//
// //<p>Description: {{description}}</p>
// <p>Language: {{language}}</p>
// <p>Created: {{createdDate}}</p>
// <p>Last updated: {{lastUpdatedDate}}</p>
// {{#if watchers_count}}
//   <p>{{watchers_count}}
