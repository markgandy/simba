import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SimbaMap from '../components/SimbaMap'

export const LocationPageTemplate = ({
  heading,
  description
}) => (
  <div className="content">
    <h2 className="has-text-weight-semibold is-size-3">
      {heading}
    </h2>
    <p className="is-size-5">{description}</p>
    <SimbaMap />
  </div>
)

LocationPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
}

const LocationPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <LocationPageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
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
        heading
        description
      }
    }
  }
`
