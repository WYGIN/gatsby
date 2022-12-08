import { graphql } from "gatsby"
import { AllPosts } from "./src/graphql/AllPosts"
import { AllPages } from "./src/graphql/AllPages"
import { AllCategories } from "./src/graphql/AllCategories"
import { AllTags } from "./src/graphql/AllTags"
import { AllAuthors } from "./src/graphql/AllAuthors"

const path = require(`path`)
exports.createPages = async ({ graphql , actions }) => {
  const { createPage } = actions
  
  const postTemplate = path.resolve(`src/templates/post.js`)
  const pageTemplate = path.resolve(`src/templates/page.js`)
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  const tagTemplate = path.resolve(`src/templates/tag.js`)
  const authorTemplate = path.resolve(`src/templ6/author.js`)
  
  const postList = await graphql(AllPosts)
  const pageList = await graphql(AllPages)
  const categoryList = await graphql(AllCategories)
  const tagList = await graphql(AllTags)
  const authorList = await graphql(AllAuthors)
  
}
