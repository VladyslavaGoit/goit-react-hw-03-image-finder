import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { Button } from './Button/Button';
import { MagnifyingGlass } from 'react-loader-spinner';

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#e5f5fb"
          color="#000000"
        />
        <ImageGallery />
        <Button />
        <Modal />
      </div>
    );
  }
}

export default App;
