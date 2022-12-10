const allPrismicPage = `
  {
    allPrismicPage {
      nodes {
        uid
        data {
          title
          body {
            richText
          }
        }
      }
    }
  }
`
export default allPrismicPage
