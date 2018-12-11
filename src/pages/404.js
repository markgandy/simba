import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h2 className="has-text-weight-semibold is-size-3">
                  Not Found
                </h2>
                <p className="is-size-5">You just hit a route that doesn&#39;t exist... the sadness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
