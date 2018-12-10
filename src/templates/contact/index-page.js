import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact'

export const ContactPageTemplate = ({
  contact,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <Contact contact={contact} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

ContactPageTemplate.propTypes = {
  contact: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        contact={frontmatter.contact}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        contact {
          heading
          description
        }
      }
    }
  }
`
