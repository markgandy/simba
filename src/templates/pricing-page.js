import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Pricing from '../components/Pricing'

export const PricingPageTemplate = ({
  heading,
  description,
  packages
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h2 className="has-text-weight-semibold is-size-3">
                {heading}
              </h2>
              <p className="is-size-5">{description}</p>
              <Pricing packages={packages} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

PricingPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  packages: PropTypes.array,
}

const PricingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PricingPageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
        packages={frontmatter.packages}
      />
    </Layout>
  )
}

PricingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PricingPage

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        description
        packages {
          name
          description
          items
          price
        }
      }
    }
  }
`
