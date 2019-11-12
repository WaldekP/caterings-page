import React, { useContext, useEffect } from "react"
import Layout from '../components/layout'
import { graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import PageContext from "../context/pageContext"

export const query = graphql`
    query MyPostQuery($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
            title
            slug
            content {
                json
            }
        }
    }
`
const BlogPost = ({ data }) => {
  const { toggleOverlay } = useContext(PageContext)

  useEffect(() => {
    toggleOverlay(false)
  })

  const post = data.contentfulPost
  return (
    <Layout>
      <h1>{post.title}</h1>
      <div>
        {documentToReactComponents(post.content.json)}
      </div>
      <Link to='/temp-blog'>Wróć do bloga</Link>
      {/*<h1>{props.data.contentfulBlogPost.title}</h1>*/}
      {/*<p>{props.data.contentfulBlogPost.publishedDate}</p>*/}
      {/*{documentToReactComponents(props.data.contentfulBlogPost.body.json)}*/}
    </Layout>
  )
}

export default BlogPost
