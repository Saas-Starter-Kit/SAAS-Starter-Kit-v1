require('dotenv').config();

module.exports = {
  siteMetadata: {
    defaultTitle: `SAAS Starter Kit`,
    defaultDescription: `A starter for a minimal SAAS app`,
    siteUrl: `http://localhost:8000`,
    defaultImage: './src/images/favicon.ico'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/auth/*`] }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/user/*`] }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/purchase/*`] }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_GOOGLE_ANALYTICS_ID]
      }
    }
  ]
};
