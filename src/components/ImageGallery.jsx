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
    console.log(prevProps.searchText, this.props.searchText);
    if (
      prevProps.searchText !== this.props.searchText ||
      prevProps.page !== this.props.page
    ) {
      console.log(prevProps);
      console.log(prevProps.page);
      console.log(prevProps.searchText);
      this.setState({ isLoading: true });

      fetchSearch(this.props.searchText, this.props.page)
        .then(hits => {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits.hits],
          }));
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    console.log(this.state.images);
    if (this.state.images.length !== 0) {
      return (
        <>
          {this.state.isLoading && <Loader />}
          {!this.state.isLoading && (
            <div>
              <ul className="ImageGallery">
                {this.state.images.map(images => (
                  <ImageGalleryItem image={images} />
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
