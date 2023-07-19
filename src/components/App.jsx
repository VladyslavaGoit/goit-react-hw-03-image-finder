import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    searchName: '',
    page: 1,
  };
  handleSearchFormSubmit = searchName => {
    this.setState({ searchName, page: 1 });
  };

  handleLoadeMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleStatus = status => {
    this.setState({ status });
  };

  render() {
    const { searchName, page } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery
          q={searchName}
          page={page}
          getStatus={this.handleStatus}
        />
        {this.state.status === 'resolved' && (
          <Button
            arrayIsOver={this.state.status}
            loadeMore={this.handleLoadeMore}
          />
        )}
        {this.state.status === 'arrayIsOver' && (
          <Button
            arrayIsOver={this.state.status}
            loadeMore={this.handleLoadeMore}
          />
        )}
      </div>
    );
  }
}

export default App;
