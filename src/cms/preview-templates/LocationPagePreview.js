import React from 'react'
import PropTypes from 'prop-types'
import { LocationPageTemplate } from '../../templates/location-page'

const LocationPagePreview = ({ entry }) => {
  return (
    <LocationPageTemplate
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
    />
  )
}

LocationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LocationPagePreview
