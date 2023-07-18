import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    console.log('mount');
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    console.log('unmount');
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackDrop = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div onClick={this.handleBackDrop} className="overlay">
        <div className="modal">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
