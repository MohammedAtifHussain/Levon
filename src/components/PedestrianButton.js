// src/components/PedestrianButton.js
import React, {useContext} from 'react'
import {TrafficLightContext} from '../context/TrafficLightContext'

const PedestrianButton = () => {
  const {dispatch, pedestrianRequested} = useContext(TrafficLightContext)

  const handleClick = () => {
    dispatch({type: 'REQUEST_CROSSING'})
  }

  return (
    <button
      onClick={handleClick}
      disabled={pedestrianRequested}
      className='pedestrian-button'
    >
      {pedestrianRequested ? 'Request Pending' : 'Request Crossing'}
    </button>
  )
}

export default PedestrianButton
