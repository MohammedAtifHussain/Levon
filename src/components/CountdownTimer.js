// src/components/CountdownTimer.js
import {useContext} from 'react'
import {TrafficLightContext} from '../context/TrafficLightContext'

const CountdownTimer = () => {
  const {timer} = useContext(TrafficLightContext)

  return <div className='countdown-timer'>Time left: {timer}s</div>
}

export default CountdownTimer
