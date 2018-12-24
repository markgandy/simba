import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const PricingPageTemplate = ({
  heading,
  description,
  packages,
  image1,
  image2
}) => (
  <div className="content">
    <h2 className="has-text-weight-semibold is-size-3">
      {heading}
    </h2>
    <p className="is-size-5">{description}</p>
    <Pricing packages={packages} />
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

PricingPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  packages: PropTypes.array,
  image1: PropTypes.object,
  image2: PropTypes.object,
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
        image1={frontmatter.image_1}
        image2={frontmatter.image_2}
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
