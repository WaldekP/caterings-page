import React, { useContext, useEffect, useState } from "react"
import Layout from "../components/common/layout"
import { graphql, Link } from "gatsby"
import PageContext from "../context/pageContext"
import Img from "gatsby-image"
import blogPostsStyles from "../styles/blog/blogPosts.module.scss"

// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// export const query = graphql`
//   query MyBlogQuery {
//     allContentfulPost {
//       edges {
//         node {
//           title
//           slug
//           shortDescription
//           coverPhoto {
//             fluid {
//               ...GatsbyContentfulFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
const Blog = () => {
  // const { toggleOverlay } = useContext(PageContext)
  // const posts = data.allContentfulPost.edges
  //
  // useEffect(() => {
  //   toggleOverlay(false)
  // })
  //
  // const [page, changePage] = useState(1)
  //
  // const getPostsForPage = (paginatedPage) => {
  //   let paginatedPosts = []
  //   posts.forEach((post, i) => {
  //     let j = 0
  //     if (i >= j + (paginatedPage - 1) * 6 && i < j + 6 + ((paginatedPage - 1) * 6)) {
  //       paginatedPosts.push(post)
  //     }
  //   })
  //   return paginatedPosts
  // }
  return (
    <Layout>
      {/*<div className={blogPostsStyles.container}>*/}
      {/*  <h1>To bedzie blog</h1>*/}
      {/*  <div className={blogPostsStyles.postsContainer}>*/}
      {/*    {getPostsForPage(page).map((post, i) => (*/}
      {/*      <Link*/}
      {/*        to={`/temp-blog/${post.node.slug}`}*/}
      {/*        className={blogPostsStyles.postBox}*/}
      {/*      >*/}
      {/*        <div className={blogPostsStyles.postImage}>*/}
      {/*          <Img fluid={post.node.coverPhoto.fluid} />*/}
      {/*        </div>*/}
      {/*        <h3 key={i}>{post.node.title}</h3>*/}
      {/*        <p>{post.node.shortDescription}</p>*/}
      {/*      </Link>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*  <div className={blogPostsStyles.paginationContainer}>*/}
      {/*    <div className={blogPostsStyles.paginationButton} onClick={() => page > 1 && changePage(page -1)} style={{*/}
      {/*      visibility: page === 1 ? 'hidden' : 'visible'*/}
      {/*    }}>*/}
      {/*      Strona {page - 1}*/}
      {/*    </div>*/}
      {/*    <p>{page}/3</p>*/}
      {/*    <div className={blogPostsStyles.paginationButton} onClick={() => changePage(page + 1)} style={{*/}
      {/*      visibility: getPostsForPage(page + 1).length === 0 ? 'hidden' : 'visible'*/}
      {/*    }}>Strona {page + 1}</div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<h1>{props.data.contentfulBlogPost.title}</h1>*/}
      {/*<p>{props.data.contentfulBlogPost.publishedDate}</p>*/}
      {/*{documentToReactComponents(props.data.contentfulBlogPost.body.json)}*/}
    </Layout>
  )
}

export default Blog
