import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

const IndexPage = ({ data, location }) => {
  const posts = data.posts.edges
  const projects = data.projects.edges

  return (
    <Layout location={location}>
      <SEO title="Home" />

      <section>
        <h5>Recent articles</h5>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} className={`article`}>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <Image
                  className={`article__thumbnail`}
                  fixed={node.frontmatter.thumbnail.childImageSharp.fluid}
                />
                <div>
                  <small>{node.frontmatter.date}</small>
                  <h3>{title}</h3>
                </div>
              </Link>
            </article>
          )
        })}
      </section>

      <section>
        <h5>Projects</h5>
        {projects.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} className={`article`}>
              <Link style={{ boxShadow: `none` }} to={`projects`}>
                <Image
                  className={`article__thumbnail`}
                  fixed={node.frontmatter.thumbnail.childImageSharp.fluid}
                />
                <div>
                  <small>{node.frontmatter.tags.join(', ')}</small>
                  <h3>{title}</h3>
                </div>
              </Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  posts: allMarkdownRemark(
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
  projects: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { fileAbsolutePath: { regex: "/projects/" } }
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          tags
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
