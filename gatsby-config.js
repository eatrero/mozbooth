module.exports = {
  siteMetadata: {
    title: 'Mozbooth'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ]
}
