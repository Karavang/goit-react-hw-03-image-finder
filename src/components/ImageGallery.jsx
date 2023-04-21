import React, { Component } from 'react';
import { fetchSearch } from 'source/api';

import Loader from './Loader';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';

// import { ImageGalleryItem } from './ImageGalleryItem';
export class ImageGallery extends Component {
  state = {
    isLoading: false,
    images: [],
  };
  componentDidUpdate(prevProps) {
    if (
      (prevProps.searchText !== this.props.searchText &&
        this.props.searchText) ||
      prevProps.page !== this.props.page
    ) {
      console.log(prevProps.page);
      console.log(this.props.page);
      this.setState({ isLoading: true });

      fetchSearch(prevProps.searchText, prevProps.page)
        .then(hits => {
          console.log(hits);
          this.setState(prevState => ({
            image: [...prevState.images, ...hits],
          }));
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    console.log(this.state.images);
    if (this.state.image) {
      return (
        <>
          {this.state.isLoading && <Loader />}
          {!this.state.isLoading && (
            <div>
              <ul className="ImageGallery">
                {this.state.image.hits.map(image => (
                  <ImageGalleryItem image={image} />
                ))}
              </ul>
              <Button handlePer={this.props.handlePer} />
            </div>
          )}
        </>
      );
    }
  }
}
