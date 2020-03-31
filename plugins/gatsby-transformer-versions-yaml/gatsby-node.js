const readFileSync = require('fs').readFileSync;
const resolve = require('path').resolve;
const safeLoad = require('js-yaml').safeLoad;
const createRedirects = require('./create-redirects');
const path = require('path');

// Reads versions.yml data into GraphQL.
// This is used to generate redirect rules for older documentation versions.
exports.onPostBuild = async ({store}) => {
};
