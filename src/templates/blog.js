import React, { useContext, useEffect } from "react"
import Layout from '../components/layout'
import { graphql, Link } from "gatsby";
import PageContext from "../context/pageContext"

// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
    query MyBlogQuery {
        allContentfulPost {
            edges {
                node {
                    title
                    slug
                }
            }
        }
    }
`
const Blog = ({ data }) => {
  const { toggleOverlay } = useContext(PageContext)
  const posts = data.allContentfulPost.edges

  useEffect(() => {
    toggleOverlay(false)
  })
  return (
    <Layout>
      <h1>To bedzie blog</h1>
      <ul>
        {posts.map((post, i) => <Link to={`/temp-blog/${post.node.slug}`}> <li key={i}>{post.node.title}</li></Link>)}
      </ul>
      {/*<h1>{props.data.contentfulBlogPost.title}</h1>*/}
      {/*<p>{props.data.contentfulBlogPost.publishedDate}</p>*/}
      {/*{documentToReactComponents(props.data.contentfulBlogPost.body.json)}*/}
    </Layout>
  )
}

export default Blog
