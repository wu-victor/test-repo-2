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
