import React from "react"
import { Link } from "gatsby"

const BlogPostPreview = ({ slug, date, title, description }) => (
  <article key={slug} className="article">
    <Link to={slug}>
      <small>{date}</small>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  </article>
)

export default BlogPostPreview