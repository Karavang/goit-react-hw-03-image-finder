import React, { Component } from 'react';
import * as basicLightbox from 'basiclightbox';

export class Button extends Component {
  render() {
    const full = basicLightbox.create(
      `
<img width="1400" height="900" src="https://placehold.it/1400x900">
`
    );

    return (
      <div
        onKeyDown={e => {
          if (e.key === 'Escape') {
            full.close();
          }
        }}
      >
        <button
          className="Button image"
          onClick={() => {
            full.show();
          }}
        >
          Load more
        </button>
      </div>
    );
  }
}
