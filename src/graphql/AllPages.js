const AllPages = `
  query {
    edges {
      node {
        title
        body
        _meta {
          uid
        }
      }
    }
  }
`
export default AllPages
