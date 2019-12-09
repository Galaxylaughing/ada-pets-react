import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     searchTerm: '',
  //   }
  // }

  onSearchChange = (event) => {
    console.log(`Search ${event.target.value}`)

    // // set search term value
    // this.setState({
    //   searchTerm: event.target.value
    // })

    // perform search
    this.props.onSearch(event.target.value);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    // console.log(this.state.searchTerm);
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

// Add a component called SearchBar. 
// This component should consist of an input 
// and when the user types in the input field, 
// the list of pets should be filtered to only include pets whose 
// about, species or name fields match the text in the input. 
// You can use JavaScript's `match` function to assist.

// Questions
// Should this component be a functional stateless component or a class component?
//    class component with state for what's currently in the search bar
// Which component should track the filtered list of pets?
//    App, because it's the one who has petList in its state