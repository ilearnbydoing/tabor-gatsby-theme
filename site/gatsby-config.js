module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby starter site `,
    author: `@alexadark`,
    wordPressUrl: `https://blog.webanaya.com`,
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-tabor',
      options: { wordPressUrl: `https://blog.webanaya.com` },
    },
  ],
};
