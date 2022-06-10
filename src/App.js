import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySerach from './CitySearch';
import NumberOfEvents from './NumberOfEvents'

function App() {
  return (
    <div className="App">
      <CitySerach />
      <EventList />
      <NumberOfEvents />
    </div>
  );
}

export default App;
