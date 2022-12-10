const allPrismicPost = `
  {
    allPrismicPost {
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
          tags {
            tag {
              ... on prismicTag {
              
                data {
                  label
                }
              }
            }
          }
          author {
            ... on prismicAuthor {
              uid
              data {
                name
                bio {
                  richText
                }
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
        }
      }
    }
  }
`
export default allPrismicPost
