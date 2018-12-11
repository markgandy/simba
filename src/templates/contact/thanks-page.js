import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export const ThanksPageTemplate = ({
  heading,
  description
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

ThanksPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
}

const ThanksPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ThanksPageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  )
}

ThanksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ThanksPage

export const thanksPageQuery = graphql`
  query ThanksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        description
      }
    }
  }
`
