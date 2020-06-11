/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

'use strict';

module.exports = {
  siteMetadata: {
    title: 'PPMESSAGE - 在线客服系统',
    titleTemplate: "%s · PPMESSAGE 在线客服系统",
    keywords: "在线客服系统,客服软件,在线客服软件,智能客服系统,全渠道客服系统,呼叫中心,客服解决方案，线800,在线客服,网站客服系统,网页客服,网站客服,客服系统,免费客服系统,专业客服,网页咨询,网络客服,在线交流,在线营销",
    description: "PPMESSAGE - 网站实时交流系统，为企业发展带来更多的潜在客户，是企业进行在线咨询、在线营销、在线客服的有力工具。PPMESSAGE是全球领先的企业级客服系统平台、智能在线客服、呼叫中心、智能知识库、CRM为一体的全渠道客户通信平台",
    url: "https://www.ppmessage.cn", // No trailing slash allowed!
    image: "/images/ppmessage-logo-black.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ppmessage",

  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    'gatsby-transformer-authors-yaml',
    'gatsby-transformer-home-example-code',
    'gatsby-transformer-versions-yaml',
    'gatsby-plugin-netlify',
    'gatsby-plugin-glamor',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#61dafb',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/docs/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 840,
            },
          },
          'gatsby-remark-header-custom-ids',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'gatsby-code-',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
  ],
};
