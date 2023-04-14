import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value: value });
  };

  upgradeSearchText = e => {
    e.preventDefault();
    this.props.setState({ searchText: this.state.value });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="SearchForm" onSubmit={this.upgradeSearchText}>
          <button type="submit" className="SearchForm-button"></button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleChange}
            value={this.state.value}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
