import React from 'react'
import PropTypes from 'prop-types'
import { ThanksPageTemplate } from '../../templates/contact/thanks-page'

const ThanksPagePreview = ({ entry }) => {
  return (
    <ThanksPageTemplate
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
    />
  )
}

ThanksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ThanksPagePreview
