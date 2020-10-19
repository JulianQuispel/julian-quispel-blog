import React from "react"

const Footer = ({ siteTitle }) => {
  return (
    <footer>
      <div className={`container`}>
        <span>
          {siteTitle} 2012 - {new Date().getFullYear()}
        </span>

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