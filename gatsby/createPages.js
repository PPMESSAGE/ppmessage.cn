/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

'use strict';

const {resolve} = require('path');

module.exports = async ({graphql, actions}) => {
  const {createPage, createRedirect} = actions;

  // Used to detect and prevent duplicate redirects
  const redirectToSlugMap = {};

  const docsTemplate = resolve(__dirname, '../src/templates/docs.js');

  // Redirect /index.html to root.
  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/',
  });

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                redirect
                slug
              }
            }
          }
        }
      }
    `,
  );

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);

    throw Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug;

	  console.log(edge);

      const createArticlePage = path =>
        createPage({
          path: path,
          component: docsTemplate,
          context: {
            slug,
          },
        });

      console.log(slug);
      // Register primary URL.
      createArticlePage(slug);
  });

};
