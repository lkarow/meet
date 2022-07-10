import React, { Component } from 'react';

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  dateNewFormat = (eventDate) => {
    const newDate = `${new Date(eventDate)}`;
    return newDate;
  };

  changeBtnText = () => {
    return `${this.state.collapsed ? 'show' : 'hide'} details`;
  };

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h3 className="title">{event.summary}</h3>
        <p className="start-time">{this.dateNewFormat(event.start.dateTime)}</p>
        <p className="location">{event.location}</p>
        {!this.state.collapsed && (
          <p className="event-details">{event.description}</p>
        )}
        <button className="btn-details" onClick={this.handleClick}>
          {this.changeBtnText()}
        </button>
      </div>
    );
  }
}
export default Event;
