const core = require("@actions/core");

const category = core.getInput('category') || 'inspire';
const readme_path = core.getInput('readme_path') || 'README.md';

console.log('hello from inside the action');
