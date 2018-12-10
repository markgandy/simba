import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SimbaMap from '../components/SimbaMap'

export const LocationPageTemplate = ({
  location,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h2 className="has-text-weight-semibold is-size-3">
                {location.heading}
              </h2>
              <p className="is-size-5">{location.description}</p>
              <SimbaMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

LocationPageTemplate.propTypes = {
  location: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
}

const LocationPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <LocationPageTemplate
        location={frontmatter.location}
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
        location {
          heading
          description
        }
      }
    }
  }
`
