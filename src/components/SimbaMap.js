import React from 'react'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

const SimbaMap = () => {
  const handleMarkerClick = ({ anchor, payload }) => {
    console.log(`Marker #${payload} clicked at: `, anchor)
  }
  return (
    <Map center={[-0.4736, -80.447]} zoom={14} width={750} height={400}>
      <Marker anchor={[-0.48275, -80.45106]} payload={1} onClick={handleMarkerClick} />
    </Map>
  )
}

export default SimbaMap
