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

const ContactPage = props => {
  const { data } = props
  const { frontmatter } = data.markdownRemark
  const locale = props.location.pathname.startsWith('/es/') ? 'es' : 'en'
  return (
    <Layout>
      <ContactPageTemplate
        heading={frontmatter.heading[locale]}
        descriptionx={frontmatter.description[locale]}
        name={frontmatter.name[locale]}
        email={frontmatter.email[locale]}
        message={frontmatter.message[locale]}
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
        heading {
          en
          es
        }
        description {
          en
          es
        }
        name {
          en
          es
        }
        email {
          en
          es
        }
        message {
          en
          es
        }
      }
    }
  }
`
