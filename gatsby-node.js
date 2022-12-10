import { graphql } from "gatsby"
import { allPrismicAuthor } from "./src/graphql/allPrismicAuthor"
import { allPrismicCategory } from "./src/graphql/allPrismicCategory"
import { allPrismicPage } from "./src/graphql/allPrismicPage"
import { allPrismicPost } from "./src/graphql/allPrismicPost"
import { allPrismicTag } from "./src/graphql/allPrismicTag"
import { prismicPostByAuthor } from "./src/graphql/prismicPostByAuthor"
import { prismicPostByCategory } from "./src/graphql/prismicPostByCategory"
import { prismicPostByTag } from "./src/graphql/prismicPostByTag"

const path = require(`path`)
exports.createPages = async ({ graphql , actions }) => {
  const { createPage } = actions
  
  const postTemplate = path.resolve(`src/templates/post.js`)
  const pageTemplate = path.resolve(`src/templates/page.js`)
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  const tagTemplate = path.resolve(`src/templates/tag.js`)
  const authorTemplate = path.resolve(`src/templ6/author.js`)
  
  const postList = await graphql(allPrismicPost)
  const pageList = await graphql(allPrismicPage)
  const categoryList = await graphql(allPrismicCategory)
  const tagList = await graphql(allPrismicTag)
  const authorList = await graphql(allPrismicAuthor)

//  const postsByAuthor = await graphql(prismicPostByAuthor, { authorId:  })
//  const postsByCategory = await graphql(prismicPostByCategory, { CategoryId:  })
//  const postByTag = await graphql(prismicPostByTag, { tagId:  })
  
  postList.data.allPrismicPost.nodes.forEach(node => {
    let path = ""
    const category = node.data.category.data
    if(category.label != null || category.label != "") {
      path += category.label
      if(category.body)
    }
    createPage({
      path: ``,
      component: postTemplate,
      context: {
        
      }
    })
  })

}
