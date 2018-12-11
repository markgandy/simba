import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export const ThanksPageTemplate = ({
  heading,
  description
}) => (
  <div className="content">
    <h2 className="has-text-weight-semibold is-size-3">
      {heading}
    </h2>
    <p className="is-size-5">{description}</p>
  </div>
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
