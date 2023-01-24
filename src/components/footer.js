import React from "react"

const Footer = ({ siteTitle }) => {
  return (
    <footer>
      <div className={`container`}>
        <span>
          {siteTitle} 2012 - {new Date().getFullYear()}
        </span>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/julianquispel/"
            target="_blank"
            rel="noreferrer"
          >
            Linked In
          </a>
          <a
            href="https://www.twitter.com/julianquispel/"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>

        <span>
          Made with{" "}
          <span role={`img`} aria-label={`love`}>
            ❤️
          </span>{" "}
          in{" "}
          <span role={`img`} aria-label={`the Netherlands`}>
            🇳🇱
          </span>
        </span>
      </div>
    </footer>
  )
}

export default Footer
