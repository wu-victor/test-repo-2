const github = require('@actions/github');
const core = require('@actions/core');
const axios = require('axios');

console.log('hello from inside the action on a branch and now a PR');

const { context } = github;
const { payload } = context;

const { repository } = payload;
const { pulls_url } = repository;

const { commits } = payload;

console.log({ pulls_url, commits, payload });

const token = core.getInput('token');


(async () => {  
  const response = await axios({
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    url: 'https://api.github.com/repos/wu-victor/test-repo-2/pulls/1/comments',
    data: {
      'body': 'This is a comment!'
    }
  });
  const { data } = response;
  console.log({ data })
})();