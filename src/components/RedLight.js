// src/components/RedLight.js
import React from 'react'

const RedLight = ({isActive}) => {
  return <div className={`light red ${isActive ? 'active' : ''}`} />
}

export default RedLight
