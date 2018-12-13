import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const HomePageTemplate = ({
  image,
  heading,
  description,
  intro,
  main,
  fullImage,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp
            ? image.childImageSharp.fluid.src
            : image
        })`,
      }}
    >
    </div>
    <h3 className="has-text-weight-semibold is-size-3">
      {heading}
    </h3>
    <p className="is-size-5">{description}</p>
    <Features gridItems={intro.blurbs} />
    <h3 className="has-text-weight-semibold is-size-3">
      {main.heading}
    </h3>
    <p className="is-size-5">{main.description}</p>
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child">
              <PreviewCompatibleImage imageInfo={main.image1} />
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child">
              <PreviewCompatibleImage imageInfo={main.image2} />
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child">
            <PreviewCompatibleImage imageInfo={main.image3} />
          </article>
        </div>
      </div>
    </div>
    {/* <Testimonials testimonials={testimonials} /> */}
    <div
      className="full-width-image-container"
      style={{
        backgroundImage: `url(${
          fullImage.childImageSharp
            ? fullImage.childImageSharp.fluid.src
            : fullImage
        })`,
      }}
    />
  </div>
)

HomePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const HomePage = props => {
  const { data } = props
  const { frontmatter } = data.markdownRemark
  const locale = props.location.pathname.startsWith('/es') ? 'es' : 'en'

  const localizedIntro = { 
    blurbs: []
  }
  frontmatter.intro.blurbs.forEach(blurb => {
    const localizedBlurb = { image: blurb.image, text: blurb.text[locale] }
    localizedIntro.blurbs.push(localizedBlurb)
  })

  const localizedMain = {
    heading: frontmatter.main.heading[locale],
    description: frontmatter.main.description[locale],
    image1: frontmatter.main.image1,
    image2: frontmatter.main.image2,
    image3: frontmatter.main.image3,
  }
  return (
    <Layout>
      <HomePageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading[locale]}
        description={frontmatter.description[locale]}
        intro={localizedIntro}
        main={localizedMain}
        fullImage={frontmatter.full_image}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading {
          en
          es
        }
        description {
          en
          es
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text {
              en
              es
            }
          }
        }
        main {
          heading {
            en
            es
          }
          description {
            en
            es
          }
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
