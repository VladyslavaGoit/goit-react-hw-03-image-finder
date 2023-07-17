import { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { ThreeDots } from 'react-loader-spinner';

class ImageGallery extends Component {
  state = {
    images: null,
    status: 'idle',
    page: 1,
  };

  handleLoadeMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { q } = this.props;
    const { page } = this.state;

    if (prevProps.q !== this.props.q) {
      this.setState({ status: 'pending', page: 1 });
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
        const data = response.data;
        this.setState({ images: data, status: 'resolved' });
      } catch (error) {
        console.log(error);
      }
    }
    if (prevState.page !== this.state.page) {
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
        const data = response.data;
        this.setState({ images: data, status: 'resolved' });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { images, status } = this.state;
    if (status === 'pending') {
      return (
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
      );
    }
    if (status === 'resolved') {
      return (
        <div className="container">
          {images && (
            <ul className="gallery">
              {images.hits.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                  key={id}
                  miniUrl={webformatURL}
                  largeUrl={largeImageURL}
                />
              ))}
              <Button loadeMore={this.handleLoadeMore} />
            </ul>
          )}
        </div>
      );
    }
  }
}

export default ImageGallery;
