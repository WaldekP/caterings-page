const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const dietComponent = path.resolve("./src/components/diet.js")
  const cityComponent = path.resolve("./src/pages/index.js")
  const cities = ["wroclaw", "lublin", "krakow"]
  const diets = ["paleo", "samuraja", "odchudzajaca"]
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  cities.forEach(city => {
    createPage({
      component: cityComponent,
      path: `/${city}`,
      context: {
        slug: `${city}`,
      },
    })
    diets.forEach(diet => {
      createPage({
        component: dietComponent,
        path: `/${city}/dieta-${diet}`,
        context: {
          slug: `dieta-${diet}`,
          city,
        },
      })
    })
  })

  // cities.forEach(city => {
  //   createPage({
  //     component: cityComponent,
  //     path: `/${city}`,
  //     context: {
  //       slug: `${city}`
  //     }
  //   })
  // })
}
