import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySerach from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { DarkMode } from './DarkMode';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };

  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ locations: extractLocations(events) });
      this.setState({
        events: events.slice(0, this.state.numberOfEvents),
      });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    if (!location) location = 'all';
    !eventCount
      ? (eventCount = this.state.numberOfEvents)
      : this.setState({ numberOfEvents: eventCount });
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
      });
    });
  };

  render() {
    return (
      <div className="App">
        <CitySerach
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <DarkMode />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
