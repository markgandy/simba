import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'
import LocationPagePreview from './preview-templates/LocationPagePreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
CMS.registerPreviewTemplate('location', LocationPagePreview)
