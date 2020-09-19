import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout';
import "../styles/styles.scss"

const IndexPage = ({ data, location }) => {
  const posts = data.posts.edges
  const projects = data.projects.edges

  return (
    <Layout location={location}>
      <section>
        <h5>Recent articles</h5>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <div></div>
                <small>{node.frontmatter.date}</small>
                <h3>{title}</h3>
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
            <article key={node.fields.slug}>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <div></div>
                <small>{node.frontmatter.date}</small>
                <h3>{title}</h3>
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
