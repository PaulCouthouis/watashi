const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "Paul Couthouis",
    author: "Paul Couthouis"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: path.join(__dirname, `src`, `data`),
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-transformer-json`,
  ],
};
