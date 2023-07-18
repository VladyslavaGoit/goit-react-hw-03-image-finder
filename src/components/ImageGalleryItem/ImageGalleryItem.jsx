import Modal from 'components/Modal/Modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = evt => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const { miniUrl, largeUrl } = this.props;
    return (
      <>
        <li
          data-url={largeUrl}
          onClick={this.openModal}
          className="galleryItem"
        >
          <img className="galleryItem-image" src={miniUrl} alt="" />
        </li>
        {showModal && (
          <Modal closeModal={this.closeModal}>
            <img src={largeUrl} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
export default ImageGalleryItem;
