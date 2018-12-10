import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export const ThanksPageTemplate = ({
  thanks,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h2 className="has-text-weight-semibold is-size-3">
                {thanks.heading}
              </h2>
              <p className="is-size-5">{thanks.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

ThanksPageTemplate.propTypes = {
  thanks: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
}

const ThanksPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ThanksPageTemplate
        thanks={frontmatter.thanks}
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
        thanks {
          heading
          description
        }
      }
    }
  }
`
