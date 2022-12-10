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
              ... on _ExternalLink {
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
