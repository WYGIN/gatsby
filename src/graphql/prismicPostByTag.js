const prismicPostByTag = `
  query($tagId: String!) {
    allPrismicPost(filter: { data: { tags: { elemMatch: { id: { eq: $tagId } } } } }) {
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
export default prismicPostByTag

