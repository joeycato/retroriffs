module.exports = {
  siteMetadata: {
    title: `joey's stuff`,
    description: `I love to build interactive nostalgic things in my spare time. I find it's also a fun way to exercise my passion for learning.`,
    author: `Joey Cato`,
    siteUrl: `https://joeycato.com`,
    social: {
      twitter: `joeycato`,
      facebook: ``,
      github: `joeycato`,
      linkedin: `joeycato`,
      email: `joeycato@gmail.com`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 970,
              withWebp: true,
              withAvif: true,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `warn`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `files`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // uncomment this and input the trackingId to enable google analytics
    // {
    // resolve: `gatsby-plugin-google-analytics`,
    // options: {
    // trackingId: `ADD YOUR TRACKING ID HERE`,
    // },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `flexible-gatsby-starter`,
        short_name: `flexible-gatsby`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-112581073-2',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
  ],
}
