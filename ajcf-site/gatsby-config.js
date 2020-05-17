module.exports = {
  pathPrefix: `/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: "Association des Jeunes Chinois de France",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-emotion`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Association des Jeunes Chinois de France",
        short_name: "AJCF",
        start_url: "/",
        background_color: "#ba2d1d",
        theme_color: "#ba2d1d",
        display: "standalone",
        icon: "src/assets/img/website-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    "gatsby-plugin-offline",
  ],
};
