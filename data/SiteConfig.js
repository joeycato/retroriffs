const config = {
    siteTitle: "retro riffs", // Site title.
    siteTitleShort: "retro riffs", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
    siteTitleAlt: "retro riffs", // Alternative site title for SEO.
    siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://retroriffs.netlify.com", // Domain of your website without pathPrefix.
    pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
    siteDescription: "My meandering musings about technology and nostalgia.", // Website description used for RSS feeds/meta description tag.
    siteRss: "/rss.xml", // Path to the RSS file.
    siteFBAppID: "243795000001250", // FB Application ID for using app insights
    googleAnalyticsID: "UA-112581073-2", // GA tracking ID.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "DD/MM/YYYY", // Date format for display.
    userName: "Joey Cato", // Username to display in the author segment.
    userEmail: "joeycato@gmail.com", // Email used for RSS feed's author segment
    userTwitter: "joeycato", // Optionally renders "Follow Me" in the Bio segment.
    userGitHub: "joeycato", // Optionally renders "Follow Me" in the Bio segment.
    userLocation: "San Jose, California", // User location to display in the author segment.
    userAvatar: "https://gorch.com/images/joey160.gif", // User avatar to display in the author segment.
    userDescription: "Doer of stuff.", // User description to display in the author segment.
    copyright: "Copyright © 2020. All rights reserved.", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#c62828", // Used for setting manifest and progress theme colors.
    backgroundColor: "red", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
    config.pathPrefix = "";
} else {
    // Make sure pathPrefix only contains the first forward slash
    config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
    config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config;
