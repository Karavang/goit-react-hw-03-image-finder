import React, { Component } from 'react';

import { Modal } from './Modal';

export class ImageGalleryItem extends Component {
  state = {
    image: this.props.image,
    isFull: null,
  };
  render() {
    return (
      <li
        className="ImageGalleryItem"
        key={this.state.image.id}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            this.setState({ isFull: false });
          }
        }}
        onClick={() => {
          this.setState({ isFull: true });
        }}
      >
        <Modal image={this.state.image} isFull={this.state.isFull} />
        <img
          className="ImageGalleryItem-image"
          src={this.state.image.webformatURL}
          alt={this.state.image.tags}
        />
      </li>
    );
  }
}
