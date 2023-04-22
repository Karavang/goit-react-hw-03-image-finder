import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Component } from 'react';

export class App extends Component {
  state = {
    query: '',
    searchText: '',
    page: 1,
  };
  handleSearchText = e => {
    this.setState({ searchText: e });
  };
  handlePer = e => {
    this.setState({ page: this.state.page + e });
  };

  render() {
    console.log(this.state.searchText);
    return (
      <>
        <Searchbar searchText={this.handleSearchText} />
        <ImageGallery
          searchText={this.state.searchText}
          handleisLoading={this.handleisLoading}
          page={this.state.page}
          handlePer={this.handlePer}
        />
      </>
    );
  }
}
