import React, { Component } from 'react';

export class Button extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <button
        className="Button image"
        onClick={() => {
          this.props.HandlePer(12);
        }}
      >
        Load more
      </button>
    );
  }
}
