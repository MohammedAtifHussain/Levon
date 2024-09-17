import React, { useState, useEffect } from 'react';
import '../styles/TrafficLight.css';
const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState('green');  // Tracks the current active light
  const [pedestrianRequest, setPedestrianRequest] = useState(false);  // Tracks if pedestrian request is active

  useEffect(() => {
    let timer;

    // Function to handle light switching logic
    const switchLight = () => {
      if (currentLight === 'green') {
        setCurrentLight('yellow');
        timer = setTimeout(switchLight, 3000);  // Yellow for 3 seconds
      } else if (currentLight === 'yellow') {
        setCurrentLight('red');
        // If there's a pedestrian request, hold the red light for extra 5 seconds
        const redDuration = pedestrianRequest ? 12000 : 7000;  // 7 sec normal, 12 sec with pedestrian request
        setPedestrianRequest(false);  // Reset pedestrian request after switching to red
        timer = setTimeout(switchLight, redDuration);  // Red for 7 or 12 seconds
      } else if (currentLight === 'red') {
        setCurrentLight('green');
        timer = setTimeout(switchLight, 10000);  // Green for 10 seconds
      }
    };

    // Set initial timeout based on the current light
    if (currentLight === 'green') {
      timer = setTimeout(switchLight, 10000);  // Green for 10 seconds
    } else if (currentLight === 'yellow') {
      timer = setTimeout(switchLight, 3000);   // Yellow for 3 seconds
    } else if (currentLight === 'red') {
      const redDuration = pedestrianRequest ? 12000 : 7000;
      setPedestrianRequest(false);  // Reset pedestrian request
      timer = setTimeout(switchLight, redDuration);   // Red for 7 or 12 seconds
    }

    // Cleanup the timeout when component unmounts or light changes
    return () => clearTimeout(timer);
  }, [currentLight, pedestrianRequest]);

  // Handle pedestrian button click
  const handlePedestrianRequest = () => {
    setPedestrianRequest(true);
  };

  return (
    <div className="traffic-light-container">
      {/* Render traffic lights */}
      <div className={`light red ${currentLight === 'red' ? 'active' : ''}`} />
      <div className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`} />
      <div className={`light green ${currentLight === 'green' ? 'active' : ''}`} />

      {/* Pedestrian Button */}
      <button onClick={handlePedestrianRequest} className="pedestrian-button">
        Pedestrian Crossing
      </button>
    </div>
  );
};

export default TrafficLight;
