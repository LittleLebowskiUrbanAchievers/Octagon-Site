import React from 'react';
import {render} from 'react-dom';
import NavbarComponent from './components/NavbarComponent.jsx';
import SearchBar from './components/SearchBar.jsx';


class Nav extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
      </div>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
        <SearchBar />
    );
  }
}

render(<Nav/>, document.getElementById('navbar'));
render(<Search/>, document.getElementById('search'));
