// src/components/YellowLight.js
import React from 'react'

const YellowLight = ({isActive}) => {
  return <div className={`light yellow ${isActive ? 'active' : ''}`} />
}

export default YellowLight
