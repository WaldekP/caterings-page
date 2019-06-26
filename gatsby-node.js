const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const cityComponent = path.resolve("./src/pages/index.js")
  const dietComponent = path.resolve("./src/pages/diet.js")
  // const citiesArray = cities.reduce((acc, curr) => {
  //   acc.push(curr.value)
  //   return acc
  // },[])
  const citiesArray = ['warszawa', 'poznan', 'wroclaw', 'gdansk', 'gdynia', 'wroclaw', 'torun', 'bydgoszcz', 'lublin', 'krakow', 'sopot', 'katowice']
  const diets = ['paleo', 'samuraja', 'sportowa-na-redukcje', 'odchudzajaca', 'weganska', 'wegetarianska', 'standard', 'sportowa-na-mase']
  // const res = await graphql(`
  //   query {
  //     allContentfulBlogPost {
  //       edges {
  //         node {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)

  // res.data.allContentfulBlogPost.edges.forEach(edge => {
  //   createPage({
  //     component: blogTemplate,
  //     path: `/blog/${edge.node.slug}`,
  //     context: {
  //       slug: edge.node.slug,
  //     },
  //   })
  // })
  citiesArray.forEach(city => {
    createPage({
      component: cityComponent,
      path: `/${city}`,
      context: {
        city: `${city}`,
      },
    })
    diets.forEach(diet => {
      createPage({
        component: dietComponent,
        path: `/${city}/dieta-${diet}`,
        context: {
          diet: `dieta-${diet}`,
          city,
        },
      })
    })
  })
  diets.forEach(diet => {
    createPage({
      component: dietComponent,
      path: `/dieta-${diet}`,
      context: {
        diet: `dieta-${diet}`,
        city: 'lodz',
      },
    })
  })

}
