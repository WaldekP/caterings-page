import React from "react"
import Layout from '../components/layout'
import { graphql, Link, useStaticQuery } from "gatsby"


const BlogPage = () => {
//   const data = useStaticQuery(graphql`query {
//   allContentfulBlogPost (
//     sort: {
//       fields: publishedField
//       order:ASC
//     }
//   ) {
//     edges {
//       node {
//         title
//         slug
//         publishedField(fromNow: true)
//       }
//     }
//   }
// }`)
  return (
    <Layout>
      <p>To jest blog</p>
      {/*<ul>*/}
      {/*    {data.allContentfulBlogPost.edges.map(edge =>*/}
      {/*      <Link to={`/blog/${edge.node.slug}`}>*/}
      {/*        <li><h2>{edge.node.title}</h2><p>{edge.node.date}</p></li>*/}
      {/*      </Link>*/}
      {/*        )}*/}
      {/*</ul>*/}
    </Layout>
  )
}

export default BlogPage
