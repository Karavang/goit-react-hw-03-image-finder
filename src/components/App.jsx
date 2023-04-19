import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Component } from 'react';

export class App extends Component {
  state = {
    query: '',
    searchText: '',
    per: 12,
  };
  handleSearchText = e => {
    this.setState({ searchText: e });
  };
  handlePer = e => {
    this.setState({ per: this.state.per + e });
  };

  render() {
    return (
      <>
        <Searchbar searchText={this.handleSearchText} />
        <ImageGallery
          searchText={this.state.searchText}
          handleisLoading={this.handleisLoading}
          per={this.state.per}
          handlePer={this.handlePer}
        />
      </>
    );
  }
}
