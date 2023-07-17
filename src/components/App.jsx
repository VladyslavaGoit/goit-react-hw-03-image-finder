import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchName: '',
  };
  handleSearchFormSubmit = searchName => {
    this.setState({ searchName });
  };
  render() {
    const { searchName } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery q={searchName} />
      </div>
    );
  }
}

export default App;
