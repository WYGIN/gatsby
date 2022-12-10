const prismicPostByAuthor = `
  query($author: String!) {
    allPrismicPost(filter: { data: { author: { ... on prismicAuthor: { data: { name: { eq: $author } } } } } }) {
      nodes {
        uid
        lastPublicationDate
        data {
          title
          featured {
            localFile {
              publicURL
            }
          }
          body {
            richText
          }
          category {
            ... on prismicCategory {
              data {
                label
                body {
                  ... on PrismicCategoryBodyCategory {
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
          }
          author {
            ... on prismicAuthor {
              uid
              data {
                name
                profile {
                  localFile {
                    publicURL
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export default prismicPostByAuthor
