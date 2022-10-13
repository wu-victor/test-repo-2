const github = require('@actions/github');
const core = require('@actions/core');
const axios = require('axios');

const { context } = github;
const { payload } = context;

const { commits } = payload;

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
        'body': 'If you don\'t need to run CI, add [ci skip] to your commit message in your next push to save GitHub some CI costs 💰'
      }
    });
  })();
}
