import React from 'react'
import SEO from '../components/SEO'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <SEO />
    <Navbar />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">{children}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default TemplateWrapper
