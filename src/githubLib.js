const axios = require('axios')

async function getGithubProfile (username) {
  // build url from username
  const url = `https://api.github.com/users/${username}`

  const response = await axios.get(url)
  return response.data // just return http body content
}

module.exports = getGithubProfile
