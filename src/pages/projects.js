import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const ProjectsPage = ({ data, location }) => {
  const projects = data.allMarkdownRemark.edges
  let index = 0

  return (
    <Layout location={location}>
      <SEO title={`Projects`} />

      <header>
        <h1>
          Projects
          <small>Some of my work.</small>
          </h1>
      </header>

      {projects.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        index++
        return (
          <article key={node.fields.slug} className={`project`}>
            <Image
              className={
                `project__thumbnail ` +
                (index % 2 == 0 ? "project__thumbnail--right" : "")
              }
              fixed={node.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <div
              className={
                `project__entry ` + (index % 2 === 0 ? "project__entry--left" : "")
              }
            >
              <small>{node.frontmatter.tags.join(", ")}</small>
              <h3>{title}</h3>
              <p className={`project__excerpt`}>
                {node.frontmatter.description}
              </p>
            </div>
          </article>
        )
      })}
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
            tags
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
