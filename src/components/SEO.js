import React from "react"
import Helmet from "react-helmet"
import favicon from '../img/favicon.png'
import { Location } from '@reach/router'
import pageConfig from '../config/page-config'

const SEO = () => (
  <Location>
    { ({ location }) => {
      const locale = location.pathname.startsWith('/es') ? 'es' : 'en'
      const seo = {
        title: `${pageConfig.title} - ${pageConfig.home}`,
        description: pageConfig.description.home[locale],
        url: pageConfig.baseUrl + location.pathname
      }
      if (location.pathname.includes('location')) {
        seo.title = `${pageConfig.title} - ${pageConfig.location[locale]}`
        seo.description = pageConfig.description.location[locale]
      }
      if (location.pathname.includes('pricing')) {
        seo.title = `${pageConfig.title} - ${pageConfig.pricing[locale]}`
        seo.description = pageConfig.description.pricing[locale]
      }
      if (location.pathname.includes('contact')) {
        seo.title = `${pageConfig.title} - ${pageConfig.contact[locale]}`
        seo.description = pageConfig.description.contact[locale]
      }
      return (
        <Helmet title={seo.title}>
          <html lang={locale} />
          <title>{seo.title}</title>
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <meta name="description" content={seo.description} />
          <meta property="og:url" content={seo.url} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
        </Helmet>
      )
    }}
  </Location>
)

export default SEO
