import React from 'react';

export const ImageGalleryItem = e => {
  console.log(e);
  return (
    <li class="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={e.largeImageURL}
        alt={e.tags}
      />
    </li>
  );
};
