import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title="Blog" />

      <header>
        <h1>
          Blog
          <small>Where I write about.</small>
        </h1>
      </header>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} className={`article`}>
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              <Image fixed={node.frontmatter.thumbnail.childImageSharp.fluid} />
              <small>{node.frontmatter.date}</small>
              <h3>{title}</h3>
            </Link>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid {
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`
