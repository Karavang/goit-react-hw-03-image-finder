import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
// import { Loader } from './Loader';
import { Component } from 'react';
export class App extends Component {
  state = {
    query: '',
    searchText: '',
  };

  render() {
    console.log(this.state.searchText);

    return (
      <>
        <Searchbar searchText={this.state.searchText} />
        <ImageGallery />
        <Button />
      </>
    );
  }
}
