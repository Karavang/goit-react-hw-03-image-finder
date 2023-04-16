import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Component } from 'react';

export class App extends Component {
  state = {
    query: '',
    searchText: '',
  };
  handleSearchText = e => {
    this.setState({ searchText: e });
  };

  render() {
    return (
      <>
        <Searchbar searchText={this.handleSearchText} />
        <ImageGallery
          searchText={this.state.searchText}
          handleisLoading={this.handleisLoading}
        />
        <Button />
      </>
    );
  }
}
