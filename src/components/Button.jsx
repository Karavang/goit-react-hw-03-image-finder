import React, { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <button
        className="Button image"
        onClick={() => {
          this.props.handlePer(12);
        }}
      >
        Load more
      </button>
    );
  }
}
