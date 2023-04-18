import React, { Component } from 'react';
import { fetchSearch } from 'source/api';

import Loader from './Loader';
import { ImageGalleryItem } from './ImageGalleryItem';

// import { ImageGalleryItem } from './ImageGalleryItem';
export class ImageGallery extends Component {
  state = {
    image: null,
    isLoading: false,
  };
  componentDidUpdate(prevProps) {
    if (
      prevProps.searchText !== this.props.searchText &&
      this.props.searchText
    ) {
      this.setState({ isLoading: true });

      fetchSearch(prevProps.searchText)
        .then(hits => {
          this.setState({ image: hits });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    if (this.state.image) {
      return (
        <>
          {this.state.isLoading && <Loader />}
          <ul className="ImageGallery">
            {this.state.image.hits.map(image => (
              <ImageGalleryItem image={image} />
            ))}
          </ul>
        </>
      );
    }
  }
}
