// src/context/TrafficLightContext.js
import { createContext, useReducer } from 'react';

const TrafficLightContext = createContext();

const initialState = {
  currentLight: 'green',
  pedestrianRequested: false,
  timer: 10,
};

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return { ...state, currentLight: action.payload };
    case 'REQUEST_CROSSING':
      return { ...state, pedestrianRequested: true };
    case 'RESET_TIMER':
      return { ...state, timer: action.payload };
    default:
      return state;
  }
};

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export { TrafficLightContext };
