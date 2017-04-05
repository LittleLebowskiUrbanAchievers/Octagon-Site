import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
        <form>
          <input type="search" name="fightersearch" placeholder="Enter fighter name to search:"></input>
        </form>
    );
  }
}

export default SearchBar;
