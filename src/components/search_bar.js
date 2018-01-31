import React, { Component } from 'react';

// functional component
/* const SearchBar = () => {
  return <input type="text"/>;
}; */

// class-based component - helps keep track of inputs, etc
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; // we set term to an empty obj only in the constructor
  }

  render() {
    return (
      <div className='search-bar'>  
        <input
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)} 
        /> 
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;