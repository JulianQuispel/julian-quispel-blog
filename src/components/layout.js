import React from "react"
import { Link } from "gatsby"
import Bio from './bio'
import './layout.css'
import { globalHistory } from '@reach/router/lib/history';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
      <header
        style={{
          paddingTop: `1em`,
          marginBottom: `1em`,
          backgroundColor: `#3A7EFF`,
          marginBottom: `1rem`,
          color: `white`,
        }}
        className={`clearfix`}
      >
        <div style={{ maxWidth: 900, margin: `auto` }}>
          <nav style={{ marginBottom: `1rem` }}>
            <Link
              to="/"
              style={{ textShadow: `none`, backgroundImage: `none` }}
            >
              <h3 style={{ display: `inline` }}>Julian Quispel</h3>
            </Link>

            <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about/">About me</ListLink>
              <ListLink to="/projects/">Projects</ListLink>
              <ListLink to="/blog/">Blog</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
            </ul>
          </nav>

          {window.location.pathname === "/" ? <Bio /> : ""}
        </div>
      </header>
      <div style={{ maxWidth: 900, margin: `auto` }}>{children}</div>

      <footer style={{ borderTop: `8px solid #3A7EFF` }}>
        <div style={{ maxWidth: 900, margin: `1em auto` }}>
          <span>Julian Quispel 2012 - {new Date().getFullYear()}</span>
          <span style={{ float: `right` }}>Made With ❤️ in 🇳🇱</span>
        </div>
      </footer>
    </div>
  )
}