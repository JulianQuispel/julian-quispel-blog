import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"
import Bio from "./bio"
import Footer from "./footer"
import '../styles/styles.scss'


const ListLink = (props) => (
  <li>
    <Link to={props.to} activeClassName="active">{props.children}</Link>
  </li>
)

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navActive: false
    }

    this.toggleNavActive = this.toggleNavActive.bind(this)
  }

  toggleNavActive() {
    this.setState(state => ({
      navActive: !state.navActive
    }))
  }

  render() {
    let navClassName = `nav__nav`
    let bio
    const { navActive } = this.state
    if (navActive) {
      navClassName += ` nav__nav--active`
    }

    const {
      location,
      children
    } = this.props

    if (location.pathname === "/") {
      bio = <Bio />
    }

    return (
      <StaticQuery
        query={graphql`
          query SiteQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}

        render={data => (
          <div>
            <header>
              <div className={`container`}>
                <nav className={`nav`}>
                  <Link to="/">
                    <h5 className={`nav__title`}>{data.site.siteMetadata.title}</h5>
                  </Link>

                  <button
                    className={`nav__toggle`}
                    onClick={this.toggleNavActive}
                  >
                    <span className={`nav__toggle-bar`}></span>
                    <span className={`nav__toggle-bar`}></span>
                    <span className={`nav__toggle-bar`}></span>
                  </button>

                  <div className={navClassName}>
                    <button className={`nav__close`} onClick={this.toggleNavActive}>Close</button>

                    <ul>
                      <ListLink to="/">Home</ListLink>
                      <ListLink to="/about-me">About me</ListLink>
                      <ListLink to="/projects">Projects</ListLink>
                      <ListLink to="/blog">Blog</ListLink>
                      <ListLink to="/contact">Contact</ListLink>
                    </ul>
                  </div>
                </nav>

                {bio}
              </div>
            </header>

            <main>{children}</main>

            <Footer siteTitle={data.site.siteMetadata.title} />
          </div>
        )}
      />
    )
  }
}

export default Layout
