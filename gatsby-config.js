module.exports = {
  siteMetadata: {
    title: `Full Stack Me`,
    description: `Remarks on developing a versatile living.`,
    author: `@sainnr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'admin.fullstackme.co.uk',
        protocol: 'https',
        hostingWPCOM: false,
        verboseOutput: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fullstackme-gatsby`,
        short_name: `fullstackme`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-30667052-2",
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Caveat Brush', 'Patua One']
        }
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-pinterest`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
