import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Component } from 'react';
export class App extends Component {
  state = {
    query: '',
  };
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <Button />
      </>
    );
  }
}
