import React from 'react';

export const Modal = ({ src }) => {
  return (
    <div class="overlay">
      <div class="modal">
        <img src={src} />
      </div>
    </div>
  );
};
