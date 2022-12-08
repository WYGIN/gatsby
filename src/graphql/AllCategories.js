const AllCategories = `
  query {
    allCategorys {
      edges {
        node {
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
`
export default AllCategories
