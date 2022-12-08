const AllPosts = `
  query {
    allPosts {
      edges {
        node {
          title
          featured
          body
          category {
            ... on Category {
              label
              body {
                ... on CategoryBodyCategory {
                  primary {
                    level1
                  }
                  fields {
                    level2
                  }
                }
              }
            }
          
          }
          tags {
            link {
              ... on Tag {
                label
                _meta {
                  uid
                }
              }
            }
          }
          authors {
            authorlink {
              ... on Author {
                name
                profile
                bio
              
              }
            }
          }
          schema
          _meta {
            uid
          }
        }
      }
    }
  }
`
export default AllPosts
