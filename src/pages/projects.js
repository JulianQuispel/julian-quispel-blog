import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const ProjectsPage = ({ data, location }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <header>
        <h1>Projects</h1>

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
      </header>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
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
