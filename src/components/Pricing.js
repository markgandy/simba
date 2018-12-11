import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ packages }) => (
  <div className="columns">
    {packages.map(pack => (
      <div key={pack.name} className="column">
        <section className="section">
          <h4 className="has-text-centered has-text-weight-semibold">
            {pack.name}
          </h4>
          <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
            ${pack.price}
          </h2>
          <p className="has-text-weight-semibold">{pack.description}</p>
          <ul>
            {pack.items.map(item => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  packages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
