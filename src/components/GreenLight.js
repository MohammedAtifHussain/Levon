// src/components/GreenLight.js
import React from 'react'
import '../styles/TrafficLight.css';

const GreenLight = ({isActive}) => {
  return <div className={`light green ${isActive ? 'active' : ''}`} />
}

export default GreenLight
