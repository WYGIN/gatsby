const allPrismicCategory = `
  {
    allPrismicCategory {
      nodes {
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
`
export default allPrismicCategory
