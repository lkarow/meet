import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 1) {
      this.setState({ numberOfEvents: value });
    } else {
      console.log('Please enter a valid number.');
      return this.state.numberOfEvents;
    }
    this.props.updateEvents(undefined, value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label htmlFor="events-number">Number of Events: </label>
        <br />
        <input
          type="text"
          id="events-number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}
export default NumberOfEvents;
