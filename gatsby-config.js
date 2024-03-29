/**
 * @type {import('gatsby').GatsbyConfig}
 */
const { linkResolver } = require("./config/prismic/link-resolver"); 
  
 require("dotenv").config({ 
   path: `.env`, 
 }); 
 
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.wygin.com`,
  },
  plugins: [
     "gatsby-plugin-image", 
     "gatsby-plugin-sitemap", 
     { 
       resolve: "gatsby-plugin-manifest", 
       options: { 
         icon: "src/images/icon.png", 
       }, 
     }, 
     "gatsby-plugin-sharp", 
     "gatsby-transformer-sharp", 
     { 
       resolve: "gatsby-source-filesystem", 
       options: { 
         name: "images", 
         path: "./src/images/", 
       }, 
       __key: "images", 
     }, 
     { 
       resolve: "gatsby-source-prismic", 
       options: { 
         repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME, 
         accessToken: process.env.PRISMIC_ACCESS_TOKEN, 
         customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN, 
         linkResolver: (doc) => linkResolver(doc), 
       }, 
     }
  ],
}
