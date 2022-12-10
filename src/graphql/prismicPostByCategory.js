const prismicPostByCategory = `
  query($CategoryId: String!) {
    allPrismicPost(filter: { data: { category: { ... on prismicCategory: { id: { eq: $CategoryId } } } } }) {
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
          tags {
            ... on prismicTag {
              data {
                label
              }
            }
          }
        }
      }
    }
  }
`
export default prismicPostByCategory
