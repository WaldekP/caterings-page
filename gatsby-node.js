const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //const blogTemplate = path.resolve("./src/templates/blog.js")
  const cityComponent = path.resolve("./src/templates/mainPage.js")
  const dietComponent = path.resolve("./src/templates/dietTemplate.js")
  const blog = path.resolve("./src/templates/blog.js")
  const blogPost = path.resolve("./src/templates/blogPost.js")
  // const citiesArray = cities.reduce((acc, curr) => {
  //   acc.push(curr.value)
  //   return acc
  // },[])
  const citiesArray = [ 'warszawa', 'poznan', 'wroclaw', 'trojmiasto', 'wroclaw', 'torun', 'bydgoszcz', 'krakow', 'aglomeracja-slaska', 'bialystok', 'bielsko-biala', 'czestochowa', 'gorzow-wielkopolski', 'kielce', 'kutno', 'opole', 'plock', 'radom', 'rzeszow', 'szczecin', 'wloclawek' ]
  const diets = ['paleo', 'samuraja', 'sportowa-na-redukcje', 'odchudzajaca', 'weganska', 'wegetarianska', 'standard', 'bezlaktozowa', 'bezglutenowa', 'niski-indeks', 'detox', 'wege-z-rybami', 'keto', 'dash']

  const res = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulPost.edges.forEach((edge, index) => {
    createPage({
      component: blogPost,
      path: `/temp-blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        index,
      },
    })
  })

  createPage({
    component: blog,
    path: '/temp-blog',
  })

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
      },
    })
  })



}
