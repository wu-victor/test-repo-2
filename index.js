const github = require('@actions/github');

console.log('hello from inside the action');
console.log({ commits: github.context.payload.commits });


const { context } = github;
const { payload } = context;
const { commits } = payload;

console.log({ payload });
