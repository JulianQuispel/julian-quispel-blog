import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostPreview from "../components/BlogPostPreview"

const IndexPage = ({ data, location }) => {
  const posts = data.posts.edges.map((edge) => edge.node)
  const projects = data.projects.edges

  return (
    <Layout location={location}>
      <SEO title="Home" />

      <section>
        <h5>Projects</h5>
        <div className="grid">
          {projects.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug} className="project">
                <Link style={{ boxShadow: `none` }} to="projects">
                  <GatsbyImage
                    className="project__thumbnail"
                    image={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                  />
                  <div>
                    <small>{node.frontmatter.tags.join(', ')}</small>
                    <h3>{title}</h3>
                  </div>
                </Link>
              </article>
            )
          })}</div>
      </section>

      <section>
        <h5>Recent articles</h5>
        {posts.map(({ fields: { slug }, frontmatter: { title, description, date } }) => {
          return <BlogPostPreview slug={slug} title={title} description={description} date={date} />
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
    filter: { fileAbsolutePath: { regex: "/\/blog\//" } },
    limit: 3
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
              gatsbyImageData(
                width: 260
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
  projects: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { fileAbsolutePath: { regex: "/\/projects\//" } }
    limit: 2
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
              gatsbyImageData(
                width: 450
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
