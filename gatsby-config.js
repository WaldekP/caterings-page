module.exports = {
  siteMetadata: {
    title: `AfterFit`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `WPieniak`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: "afterfit-catering.pl",
    //     // The protocol. This can be http or https.
    //     protocol: "https",
    //     hostingWPCOM: false,
    //     // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
    //     // This feature is untested for sites hosted on wordpress.com.
    //     // Defaults to true.
    //     useACF: false,
    //   }
    // },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   }
    // },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          mergeLinkHeaders: true,
        }, // option to add more headers. `Link` headers are transformed by the below criteria
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
