'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: How would you like to fetch your repos? Don't forget to call the callback.
    //       Remember that the callback function we'll want to call relies on repos.all
    //       being an array with a bunch of repo objects in it, so you'll need to
    //       populate it with the response from Github before you call the callback.
    // est 15min act 30min
    // ajax call
    $.ajax({
      url: 'https://api.github.com/orgs/codefellows-seattle-301d27/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    })
    .then(
      function (res) {
        let repos = res.map(res => ({
          name: res.name,
          description: res.description,
          language: res.language,
          created: res.created_at,
          lastUpdated: res.updated_at,
          watchers_count: res.watchers_count
        }));
        callback(repos);
      }
    );
  };

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
