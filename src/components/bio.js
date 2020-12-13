/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Bio = () => {
  return (
    <div className={`jumbo`}>
      <h1>
        Hello, my name is Julian Quispel{" "}
        <span role={`img`} aria-label={`wave`}>
          👋
        </span>
      </h1>
      <p>
        I am a full stack developer from Zwolle, the Netherlands. Most of the
        time, I am passionately programming web applications using Laravel and
        Vue.js
      </p>
    </div>
  )
}

export default Bio
