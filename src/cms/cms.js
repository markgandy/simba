import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'
import LocationPagePreview from './preview-templates/LocationPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
CMS.registerPreviewTemplate('location', LocationPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
