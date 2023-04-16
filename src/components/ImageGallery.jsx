import React, { Component } from 'react';
import { fetchSearch } from 'source/api';

import { ColorRing } from 'react-loader-spinner';

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
    console.log(this.state.isLoading);
    if (this.state.image) {
      return (
        <>
          {/* <Loader isLoading={this.state.isLoading} /> */}
          <div className="loading-pos">
            <ColorRing
              visible={this.state.isLoading}
              height="800"
              width="800"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </div>
          <ul className="ImageGallery">
            {this.state.image.hits.map(e => {
              return (
                <li className="ImageGalleryItem" key={e.id}>
                  <img
                    className="ImageGalleryItem-image"
                    src={e.webformatURL}
                    alt={e.tags}
                  />
                </li>
              );
            })}
          </ul>
        </>
      );
    }
  }
}
