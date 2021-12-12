module.exports = {
  siteMetadata: {
    title: "Calgary Web Designer & Marketing Specialist",
    titleTemplate: "%s - Aaron Tonner Web Solutions",
    description:
      "I am a highly-reviewed web designer in Calgary. I offer affordable web design, development, SEO services in Calgary for your local business. Call me at 587-437-9161 to discuss your next website project!",
    url: "https://www.aarontonner.com", // No trailing slash allowed!
    siteUrl: "https://www.aarontonner.com",
    image: "/images/thumbnail.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    // sitemap
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: [`/thank-you/`, `/privacy-policy/`],
      },
    },
    // ga
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-180678384-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
  ],
}
