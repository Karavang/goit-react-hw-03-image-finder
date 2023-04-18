import React from 'react';
import * as basicLightbox from 'basiclightbox';

export const ImageGalleryItem = image => {
  console.log(image);
  const full = basicLightbox.create(
    `
<img width="1400" height="900" src="${image.image.webformatURL}">
`
  );
  return (
    <li class="ImageGalleryItem" key={image.id}>
      <div
        onKeyDown={e => {
          if (e.key === 'Escape') {
            full.close();
          }
        }}
      >
        <button
          className="btn"
          onClick={() => {
            full.show();
          }}
        >
          <img
            className="ImageGalleryItem-image"
            src={image.image.webformatURL}
            alt={image.image.tags}
            onClick={() => {
              full.show();
            }}
          />
        </button>
      </div>
    </li>
  );
};
