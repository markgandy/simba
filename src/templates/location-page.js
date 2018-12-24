import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SimbaMap from '../components/SimbaMap'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const LocationPageTemplate = ({
  heading,
  description,
  image1
}) => (
  <div className="content">
    <h2 className="has-text-weight-semibold is-size-3">
      {heading}
    </h2>
    <p className="is-size-5">{description}</p>
    <SimbaMap />
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child">
              <PreviewCompatibleImage imageInfo={image1} />
            </article>
          </div>
        </div>
      </div>
    </div>    
  </div>
)

LocationPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const LocationPage = props => {
  const { data } = props
  const { frontmatter } = data.markdownRemark
  const locale = props.location.pathname.startsWith('/es/') ? 'es' : 'en'

  return (
    <Layout>
      <LocationPageTemplate
        heading={frontmatter.heading[locale]}
        description={frontmatter.description[locale]}
        image1={frontmatter.image_1}
      />
    </Layout>
  )
}

LocationPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default LocationPage

export const locationPageQuery = graphql`
  query LocationPage($id: String!) {
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
      }
    }
  }
`
