import { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleChangeName = evt => {
    const searchName = evt.target.value;
    this.setState({ searchName });
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmitForm} className="searchForm">
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>

          <input
            className="searchForm-input"
            onChange={this.handleChangeName}
            value={this.state.searchName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
