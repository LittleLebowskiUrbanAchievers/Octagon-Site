import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
        <form>
          <input type="search" id="fightersearch" placeholder="Enter fighter name to search:" onkeyup="searchFighters()"></input>
        </form>
    );
  }
}

export default SearchBar;
