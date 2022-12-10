const allPrismicCategory = `
  {
    allPrismicCategory {
      nodes {
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
`
export default allPrismicCategory
