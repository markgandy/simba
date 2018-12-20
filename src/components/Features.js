import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => {
      let itemParagraph = <p>{item.text}</p>
      if (item.text.includes('[WorkAway]')) {
        const splitText = item.text.split('[WorkAway]')
        itemParagraph = 
          <p>
            {splitText[0]}
            <a href="https://www.workaway.info/198385421843-en.html" target="_blank">
              WorkAway
            </a>
            {splitText[1]}
          </p>
      }
      return (
        <div key={item.text} className="column is-6">
          <section className="section">
            <div className="has-text-centered">
              <div
                style={{
                  width: '240px',
                  display: 'inline-block',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            {itemParagraph}
          </section>
        </div>
      )
    })}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
