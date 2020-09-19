import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Bio from "./bio"
import Footer from "./footer"


const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ location, title, children }) => {
  let bio

  if (location.pathname === "/") {
    bio = <Bio />
  }

  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title

  return (
    <div>
      <header>
        <div className={`container`}>
          <nav>
            <Link to="/">
              <h5>{siteTitle}</h5>
            </Link>

            <ul>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about-me">About me</ListLink>
              <ListLink to="/projects">Projects</ListLink>
              <ListLink to="/blog">Blog</ListLink>
              <ListLink to="/contact">Contact</ListLink>
            </ul>
          </nav>

          {bio}
        </div>
      </header>

      <main>{children}</main>

      <Footer siteTitle={siteTitle} />
    </div>
  )
}

export default Layout
