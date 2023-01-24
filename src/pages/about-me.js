import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import JSONData from "../../content/experiences.json"
import format from "date-fns/format"

const About = ({ location }) => {
  const formatDate = date => {
    return format(new Date(date), "MMM yyyy")
  }

  return (
    <Layout location={location}>
      <Seo title={`About me`} />

      <main className="about-me">
        <h1>About me</h1>

        <p>
          I am Julian Quispel: a developer, student, fitness enthusiast,
          investor, car fanatic and a techie from the Netherlands. Currently,
          I’m employed as a freelance backend developer while being a student at
          the Windesheim University of Applied Sciences in Zwolle. Once I
          learned myself how to write code - to be able to create software
          applications of my own - demand of my services followed. I have been
          developing as a freelancer since 2017 and I have been tasked with all
          kinds of requests for websites and web applications. Most of the
          projects I do for clients are in co-operation with my partner where he
          is responsible for the frontend and I for the backend. Where we
          started providing services for small businesses, we are currently
          shifting more and more towards medium companies and large
          corporations. We do, however, still service small business, albeit
          under a spin-off company.
        </p>

        <p>
          Since the 3 years we started working together, the amount of projects
          have increased dramatically and so have we. That’s why I’m now able to
          invest in my own projects and work with many different companies and
          people.
        </p>

        <h1>Experiences</h1>
        <h2>Work</h2>
        {JSONData.work.map(work => (
          <div className="about-me-item">
            <div>
              <div className="about-me-item-head">
                <h3 className="about-me-item-title">{work.title}</h3>
                <span className="about-me-item-date">
                  {formatDate(work.from)} - {formatDate(work.to)}
                </span>
              </div>
              <span className="about-me-item-location">
                {work.employer} &bull; {work.location}
              </span>
            </div>
            <p>{work.description}</p>
          </div>
        ))}

        <h2>Education</h2>
        {JSONData.education.map(education => (
          <div className="about-me-item">
            <div>
              <div className="about-me-item-head">
                <h3 className="about-me-item-title">{education.title}</h3>
                <span className="about-me-item-date">
                  {formatDate(education.from)} - {formatDate(education.to)}
                </span>
              </div>
              <span className="about-me-item-location">
                {education.institution} &bull; {education.location}
              </span>
            </div>
            <p>{education.description}</p>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export default About
