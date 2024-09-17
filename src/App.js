// src/App.js
import TrafficLight from './components/TrafficLight';
import { TrafficLightProvider } from './context/TrafficLightContext';
import TrafficLightTimer from './TrafficLightTimer';

function App() {
  return (
    <TrafficLightProvider>
      <TrafficLight />
      <TrafficLightTimer />
    </TrafficLightProvider>
  );
}

export default App;
