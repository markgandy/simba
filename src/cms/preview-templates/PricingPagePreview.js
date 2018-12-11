import React from 'react'
import PropTypes from 'prop-types'
import { PricingPageTemplate } from '../../templates/pricing-page'

const PricingPagePreview = ({ entry, getAsset }) => {
  const entryPricingPlans = entry.getIn(['data', 'packages'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <PricingPageTemplate
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      packages={pricingPlans}
    />
  )
}

PricingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PricingPagePreview
