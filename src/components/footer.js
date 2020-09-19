import React from "React"

const Footer = ({ siteTitle }) => {
  return (
    <footer>
      <div className={`container`}>
        <span>
          {siteTitle} 2012 - {new Date().getFullYear()}
        </span>

        <span>
          Made with <span role={`img`}>❤️</span> in <span role={`img`}>🇳🇱</span>
        </span>
      </div>
    </footer>
  )
}

export default Footer