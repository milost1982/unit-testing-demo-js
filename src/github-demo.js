const getGithubProfile = require('../src/githubLib')

getGithubProfile('vuejs')
  .then(data => console.log(data))
