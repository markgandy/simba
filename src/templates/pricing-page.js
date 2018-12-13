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
  <div className="content">
    <h2 className="has-text-weight-semibold is-size-3">
      {heading}
    </h2>
    <p className="is-size-5">{description}</p>
    <Pricing packages={packages} />
  </div>
)

PricingPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  packages: PropTypes.array,
}

const PricingPage = props => {
  const { data } = props
  const { frontmatter } = data.markdownRemark
  const locale = props.location.pathname.startsWith('/es/') ? 'es' : 'en'
  const loaclizedPackages = []
  frontmatter.packages.forEach(pack => {
    const localizedPackage = {
      name: pack.name[locale],
      description: pack.description[locale],
      items: [],
      price: pack.price
    }
    pack.items.forEach(item => {
      const localizedItem = item[locale]
      localizedPackage.items.push(localizedItem)
    })
    loaclizedPackages.push(localizedPackage)
  })

  return (
    <Layout>
      <PricingPageTemplate
        heading={frontmatter.heading[locale]}
        description={frontmatter.description[locale]}
        packages={loaclizedPackages}
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
        heading {
          en
          es
        }
        description {
          en
          es
        }
        packages {
          name {
            en
            es
          }
          description {
            en
            es
          }
          items {
            en
            es
          }
          price
        }
      }
    }
  }
`
