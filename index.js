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

let skip = false;
for (const commit of commits) {
  const { message } = commit;
  if (message.toLowerCase().includes('skip')) {
    skip = true;
    break;
  }
}

if (!skip) {
  (async () => {  
    await axios({
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      url: 'https://api.github.com/repos/wu-victor/test-repo-2/issues/1/comments', // Regular comments for PRs use this endpoint
      data: {
        'body': 'If you don\'t need to run CI, add [ci skip] to your commit message in your next push'
      }
    });
  })();
}