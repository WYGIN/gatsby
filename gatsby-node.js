const path = require(`path`)
exports.createPages = async ({ graphql , actions }) => {
  const { createPage } = actions
  
  const postTemplate = path.resolve(`src/templates/post.js`)
  const pageTemplate = path.resolve(`src/templates/page.js`)
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  const tagTemplate = path.resolve(`src/templates/tag.js`)
  
  const postList = await graphql()
}
