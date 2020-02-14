import React, { useContext, useEffect } from "react"
import Layout from "../components/common/layout"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import PageContext from "../context/pageContext"
import Img from "gatsby-image"
import postStyles from "../styles/blog/post.module.scss"

// export const query = graphql`
//   query MyPostQuery($slug: String!) {
//     contentfulPost(slug: { eq: $slug }) {
//       title
//       slug
//       content {
//         json
//       }
//       mainPhoto {
//         fluid {
//           ...GatsbyContentfulFluid
//         }
//       }
//     }
//   }
// `
const BlogPost = ({ pageContext }) => {
  // const { toggleOverlay } = useContext(PageContext)
  //
  // useEffect(() => {
  //   toggleOverlay(false)
  // })


  // const post = data.contentfulPost
  return (
    <Layout>
      {/*<div className={postStyles.container}>*/}
      {/*  <div className={postStyles.postImage}>*/}
      {/*    <Img fluid={post.mainPhoto.fluid} />*/}
      {/*  </div>*/}
      {/*  <h1>{post.title}</h1>*/}
      {/*  <div>{documentToReactComponents(post.content.json)}</div>*/}
      {/*  <Link to="/temp-blog">Wróć do bloga</Link>*/}
      {/*</div>*/}
      {/*<h1>{props.data.contentfulBlogPost.title}</h1>*/}
      {/*<p>{props.data.contentfulBlogPost.publishedDate}</p>*/}
      {/*{documentToReactComponents(props.data.contentfulBlogPost.body.json)}*/}
    </Layout>
  )
}

export default BlogPost
