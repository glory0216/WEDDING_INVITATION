module.exports = {
  siteMetadata: {
    title: `weddingInvitation`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans KR:300,400,500,700,900`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {},
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers, path) => headers,
        generateMatchPathRewrites: true,
      },
    },
  ]
};