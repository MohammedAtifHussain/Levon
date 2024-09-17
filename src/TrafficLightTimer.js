// src/TrafficLightTimer.js
import { useEffect, useContext } from 'react';
import { TrafficLightContext } from './context/TrafficLightContext';

const TrafficLightTimer = () => {
  const { currentLight, pedestrianRequested, dispatch } = useContext(TrafficLightContext);

  useEffect(() => {
    const lightDurations = {
      green: 10,
      yellow: 3,
      red: pedestrianRequested ? 12 : 7,
    };

    const timer = setInterval(() => {
      if (currentLight === 'green') {
        dispatch({ type: 'CHANGE_LIGHT', payload: 'yellow' });
      } else if (currentLight === 'yellow') {
        dispatch({ type: 'CHANGE_LIGHT', payload: 'red' });
      } else {
        dispatch({ type: 'CHANGE_LIGHT', payload: 'green' });
      }
    }, lightDurations[currentLight] * 1000);

    return () => clearInterval(timer);
  }, [currentLight, pedestrianRequested, dispatch]);

  return null;
};

export default TrafficLightTimer;
