import React, { Component } from 'react';
import { fetchSearch } from 'source/api';
// import { ImageGalleryItem } from './ImageGalleryItem';
export class ImageGallery extends Component {
  state = {
    image: null,
  };
  componentDidUpdate(prevProps) {
    if (
      prevProps.searchText !== this.props.searchText &&
      this.props.searchText
    ) {
      fetchSearch(prevProps.searchText).then(hits => {
        this.setState({ image: hits });
      });
    }
  }
  render() {
    if (this.state.image) {
      console.log(this.state.image.hits);
      return (
        <ul className="ImageGallery">
          {this.state.image.map(e => {
            console.log(e.hits);
            return (
              <li class="ImageGalleryItem">
                <img
                  className="ImageGalleryItem-image"
                  src={e.hits.pageURL}
                  alt={e.hits.tags}
                />
              </li>
            );
          })}
        </ul>
      );
    }
  }
}
