import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const SimbaMap = ({ data }) => {
  const state = {
    lat: -0.4807,
    lng: -80.4519,
    zoom: 14,
  }
  const position = [state.lat, state.lng]
  if (typeof window !== 'undefined') {
    return (
      <Map center={[-0.4736, -80.447]} zoom={14}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-0.48275, -80.45106]}>
          <Popup>
            Simba Surf
          </Popup>
        </Marker>
      </Map>
    )
  }
  return null
}

export default SimbaMap
