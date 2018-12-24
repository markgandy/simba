import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

export const ContactPageTemplate = ({
  heading,
  description,
  name,
  email,
  message,
  image1,
  image2
}) => (
  <div className="content">
    <Contact 
      heading={heading} 
      description={description}
      name={name}
      email={email}
      message={message}
    />
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child">
              <PreviewCompatibleImage imageInfo={image1} />
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child">
              <PreviewCompatibleImage imageInfo={image2} />
            </article>
          </div>
        </div>
      </div>
    </div>    
  </div> 
)

ContactPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
  image1: PropTypes.object,
  image2: PropTypes.object,  
}

const ContactPage = props => {
  const { data } = props
  const { frontmatter } = data.markdownRemark
  const locale = props.location.pathname.startsWith('/es/') ? 'es' : 'en'
  return (
    <Layout>
      <ContactPageTemplate
        heading={frontmatter.heading[locale]}
        description={frontmatter.description[locale]}
        name={frontmatter.name[locale]}
        email={frontmatter.email[locale]}
        message={frontmatter.message[locale]}
        image1={frontmatter.image_1}
        image2={frontmatter.image_2}
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
        image_1 {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        image_2 {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
