'use strict';

module.exports = {
  siteMetadata: {
    title: 'Interesse skjema',
    description: 'Sick shit bruh',
    keywords: 'interesse',
    siteUrl: 'https://interesse.online.ntnu.no',
    author: {
      name: 'dotkom',
      url: 'github.com/dotkom',
      email: 'dotkom@online.ntnu.no',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          common: `./common`,
          src: './src',
        },
      },
    },
  ],
};
