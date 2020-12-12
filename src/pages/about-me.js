import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title={`About me`} />

      <header>
        <h1>About me</h1>

        <p>
          I am Julian Quispel: a developer, student, fitness enthusiast,
          investor, car fanatic and a techie from the Netherlands. Currently,
          I’m employed as a freelance backend developer while being a student at
          the Windsheim University of Applied Sciences in Zwolle. Once I learned
          myself how to write code - to be able to create software applications
          of my own - demand of my services followed. I have been developing as
          a freelancer since 2017 and I have been tasked with all kinds of
          requests for websites and web applications. Most of the projects I do
          for clients are in co-operation with my partner where he is
          responsible for the frontend and I for the backend. Where we started
          providing services for small businesses, we are currently shifting
          more and more towards medium companies and large corporations. We do,
          however, still service small business, albeit under a spin-off
          company.{" "}
        </p>

        <p>
          Since the 3 years we started working together, the amount of projects
          have increased dramatically and so have we. That’s why I’m now able to
          invest in my own projects and work with many different companies and
          people.
        </p>
      </header>
    </Layout>
  )
}

export default About
