import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class Button extends Component {
  state = {
    disabled: false,
  };
  handleArraiIsOver = () => {
    Notify.warning(
      'Sorry, there are no more available images. Please enter new query.'
    );
    this.setState({ disabled: true });
    return;
  };

  render() {
    const { loadeMore, arrayIsOver } = this.props;

    if (arrayIsOver === 'arrayIsOver') {
      return (
        <button
          onClick={this.handleArraiIsOver}
          className="button"
          type="button"
          disabled={this.state.disabled}
        >
          No more images available
        </button>
      );
    } else {
      return (
        <button onClick={loadeMore} className="button" type="button">
          Load more
        </button>
      );
    }
  }
}

export default Button;
