import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact'

export const ContactPageTemplate = ({
  heading,
  description,
  name,
  email,
  message
}) => (
  <div className="content">
    <Contact 
      heading={heading} 
      description={description}
      name={name}
      email={email}
      message={message}
    />
  </div> 
)

ContactPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
        name={frontmatter.name}
        email={frontmatter.email}
        message={frontmatter.message}
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
        heading
        description
        name
        email
        message
      }
    }
  }
`
