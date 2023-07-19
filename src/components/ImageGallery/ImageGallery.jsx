import { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ThreeDots } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { q, page } = this.props;
    const { status } = this.state;

    if (prevProps.q !== q || prevProps.page !== page) {
      this.setState({ status: 'pending' });

      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            q,
            page,
            key: '19455332-d5e97e52b6c9cba374c4e4b27',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
          },
        });
        const { hits } = response.data;
        if (!hits.length) {
          throw new Error();
        }

        if (prevProps.q !== q) {
          this.setState({
            images: hits,
            status: 'resolved',
          });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            status: 'resolved',
          }));
          if (hits.length < 12) {
            this.setState({ status: 'arrayIsOver' });
          }
        }
      } catch (error) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        this.setState({ status: 'error' });
      }
    }

    if (prevState.status !== status) {
      this.handleStatus();
    }
  }

  handleStatus = () => {
    this.props.getStatus(this.state.status);
  };

  render() {
    const { images, status } = this.state;
    if (status === 'pending') {
      return (
        <div className="loaderBox">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#2d2974"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      );
    }
    if (status === 'resolved' || status === 'arrayIsOver') {
      return (
        <div className="container">
          {images && (
            <ul className="gallery">
              {images.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                  key={id}
                  miniUrl={webformatURL}
                  largeUrl={largeImageURL}
                />
              ))}
            </ul>
          )}
        </div>
      );
    }
  }
}

export default ImageGallery;
