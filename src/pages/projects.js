import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const getDomain = url => {
  const urlObj = new URL(url)

  return urlObj.host
}

const ProjectsPage = ({ data, location }) => {
  const projects = data.allMarkdownRemark.edges
  let index = 0

  return (
    <Layout location={location}>
      <SEO title={`Projects`} slug="projects" />

      <header>
        <h1>
          Projects
          <small>Some of my work.</small>
        </h1>
      </header>

      <div className="grid">
        {projects.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          index++
          return (
            <article key={node.fields.slug} className="project">
              <GatsbyImage
                className={
                  `project__thumbnail ` +
                  (index % 2 === 0 ? "project__thumbnail--right" : "")
                }
                image={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
              />
              <div
                className={
                  `project__entry ` +
                  (index % 2 === 0 ? "project__entry--left" : "")
                }
              >
                <small>{node.frontmatter.tags.join(", ")}</small>
                <h3>{title}</h3>
                <p className={`project__excerpt`}>
                  {node.frontmatter.description}
                </p>
                {node.frontmatter.url && (
                  <a href={node.frontmatter.url} className="project__url">
                    ↗️ {getDomain(node.frontmatter.url)}
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>
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
            url
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 450
                  aspectRatio: 1
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`
