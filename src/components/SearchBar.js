import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    }
  }

  onSearchChange = (event) => {
    console.log(`Search ${event.target.value}`)

    // set search term value
    this.setState({
      searchTerm: event.target.value
    })

    // perform search
    this.props.onSearch(event.target.value);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <section>
        <form className="search-form" onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="search"></label>
            <input 
              name="search"
              className="search-bar"
              placeholder="Filter Pets"
              onChange={this.onSearchChange}
            />
          </div>
        </form>
      </section>
    );
  }
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
