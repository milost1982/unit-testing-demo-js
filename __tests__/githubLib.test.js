const getGithubProfile = require('../src/githubLib')
const axios = require('axios')

test('getGithubProfile', async () => {
  // arrange
  const mockData = JSON.parse(`{
    "avatar_url": "https://avatars.githubusercontent.com/u/150330?v=4",
    "name": "Kyle Simpson",
    "login": "getify",
    "company": "Getify Solutions",
    "location": "Austin, TX",
    "html_url": "https://github.com/getify",
    "blog": "http://getify.me"
  }`)

  async function mockAxioxGet(username) {
    return { data: mockData}
  }
  axios.get = jest.fn(mockAxioxGet)

  // act
  let data = await getGithubProfile('test-username')

  // assert
  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/test-username')
  expect(data).toEqual(mockData)
})
