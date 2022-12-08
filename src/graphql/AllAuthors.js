const AllAuthors = `
  query {
    allAuthors {
      edges {
        node {
          name
          profile
          bio
          links {
            label
            link {
              ... on _ExternalLink {
                url
              }
            }
          }
          _meta {
            uid
          }
        }
      }
    }
  }
`
export default AllAuthors
