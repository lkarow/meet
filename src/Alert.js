import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.backgroundColor = null;
    this.borderRadius = null;
    this.top = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.backgroundColor,
      borderRadius: this.borderRadius,
      top: this.top,
    };
  };

  render() {
    return (
      <div>
        <p style={this.getStyle()} className="Alert">
          {this.props.text}
        </p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(21, 63, 177)';
    this.backgroundColor = 'rgb(182, 215, 255)';
    this.borderRadius = '8px';
    this.top = '205px';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(162, 22, 22)';
    this.backgroundColor = 'rgb(255, 202, 202)';
    this.borderRadius = '8px';
    this.top = '290px';
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(255, 98, 0)';
    this.backgroundColor = 'rgb(202,202,202)';
    this.borderRadius = '8px';
    this.top = '90px';
  }
}

export { InfoAlert, ErrorAlert, OfflineAlert };
