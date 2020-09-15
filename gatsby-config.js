const dotenv = require('dotenv')
const proxy = require("http-proxy-middleware")

if(process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  siteMetadata: {
    title: `AfterFit`,
    description: `TODO`,
    author: `WPieniak`,
    siteUrl: `https://afterfit-catering.pl`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-polyfill-io`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/src/lambda`,
        functionsOutput: `${__dirname}/lambda`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/logo/ico-afterfit-icon.svg",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5N36QQ7",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
      },
    },
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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'q9p0tdrrxgn9',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
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
        background_color: `#FBDAE2`,
        theme_color: `#FBDAE2`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
