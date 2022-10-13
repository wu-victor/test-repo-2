const core = require("@actions/core");
const github = require("@actions/github");

const category = core.getInput('category') || 'inspire';
const readme_path = core.getInput('readme_path') || 'README.md';

console.log('hello from inside the action');
console.log({ payload: github.context.payload });