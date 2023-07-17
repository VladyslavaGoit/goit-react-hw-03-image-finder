import Modal from 'components/Modal/Modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { showModal } = this.state;
    const { miniUrl, largeUrl } = this.props;
    return (
      <>
        <li
          data-url={largeUrl}
          onClick={this.toggleModal}
          className="galleryItem"
        >
          <img className="galleryItem-image" src={miniUrl} alt="" />
        </li>
        {showModal && (
          <Modal>
            <img src={largeUrl} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
export default ImageGalleryItem;
