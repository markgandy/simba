import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'
import LocationPagePreview from './preview-templates/LocationPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import ThanksPagePreview from './preview-templates/ThanksPagePreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
CMS.registerPreviewTemplate('location', LocationPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('thanks', ThanksPagePreview)
