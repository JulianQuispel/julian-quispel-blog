import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)

  return (
    <Layout location={location}>
      <Seo title="Blog" slug="blog" />

      <header>
        <h1>
          Blog
          <small>Where I write about.</small>
        </h1>
      </header>

      <div className="article-grid">
        {posts.map(
          ({ frontmatter: { title, date, description }, fields: { slug } }) => {
            return (
              <article key={slug} className="article">
                <Link to={slug}>
                  <small>{date}</small>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </Link>
              </article>
            )
          }
        )}
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "//blog//" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 260)
              }
            }
          }
        }
      }
    }
  }
`
