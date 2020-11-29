module.exports = {
  pathPrefix: "",
  siteUrl: "https://joeycato.com",
  siteTitle: "retro riffs", // Site title.
  siteTitleShort: "retro riffs", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "retro riffs", // Alternative site title for SEO.
  siteDescription: "Meandering musings of a mere mortal",
  author: "Joey Cato",
  postsForArchivePage: 3,
  defaultLanguage: "en",
  pages: {
    home: "/",
    stuff: "stuff",
  },
  social: {
    github: "https://github.com/joey.cato",
    facebook: "https://www.facebook.com/joey.cato/",
    twitter: "https://twitter.com/joeycato",
    instagram: "https://www.instagram.com/joeycato/",
    rss: "/rss.xml",
  },
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || "UA-112581073-2",
}
