import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact/index-page'

const ContactPagePreview = ({ entry }) => {
  return (
    <ContactPageTemplate
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      name={entry.getIn(['data', 'name'])}
      email={entry.getIn(['data', 'email'])}
      message={entry.getIn(['data', 'message'])}
    />
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContactPagePreview
