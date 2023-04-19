import * as basicLightbox from 'basiclightbox';

export const Modal = ({ image, isFull }) => {
  const full = basicLightbox.create(
    `
  <img width="1400" height="900" src="${image.largeImageURL}">
  `
  );
  // console.log(isFull);
  isFull ? full.show() : full.close();
};
