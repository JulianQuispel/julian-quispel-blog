import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title={`Contact`} />

      <header>
        <h1>
          Contact
          <small>Let's talk.</small>
        </h1>
      </header>

      <div>
        Send a mail to <a href={`mailto:hello@julianquispel.nl`}>hello@julianquispel.nl</a> to get in touch with me.
        {/* <form>
          <label for="name">Name</label>
          <input id="name" type="text" name="text" />

          <label for="email">Email</label>
          <input id="email" type="email" name="email" />

          <label for="subject">Subject</label>
          <input id="subject" type="text" name="subject" />

          <label for="message">Message</label>
          <textarea id="subject" name="message"></textarea>

          <button>Submit</button>
        </form>*/}
      </div>
    </Layout>
  )
}

export default ContactPage