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
            ... on Tag {
              
              data {
                label
              }
            }
          }
          author {
            ... on author {
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
            ... on Category {
              data {
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
          }
        }
      }
    }
  }
`
export default allPrismicPost
