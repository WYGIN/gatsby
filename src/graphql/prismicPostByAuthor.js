const prismicPostByAuthor = `
  query($authorId: String!) {
    allPrismicPost(filter: { data: { author: { ... on prismicAuthor: { id: { eq: $authorId  } } } } }) {
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
          tags {
            tag {
              ... on prismicTag {
                label
              }
            }
          }
        }
      }
    }
  }
`
export default prismicPostByAuthor
