const allPrismicAuthor = `
  {
    allPrismicAuthor {
      nodes {
        uid
        data {
          name
          profile {
            localFile {
              publicURL
            }
          }
          bio
          links {
            label
            link {
              ... on prismic_ExternalLink {
                url
                target
              }
            }
          }
        }
      }
    }
  }
`
export default allPrismicAuthor
