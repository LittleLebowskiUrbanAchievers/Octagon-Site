import React from 'react';
import {render} from 'react-dom';
import NavbarComponent from './components/NavbarComponent.jsx';
import SearchBar from './components/SearchBar.jsx';
import RecentFights from './components/RecentFights.jsx';
import Upcoming from './components/Upcoming.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <RecentFights />
        <Upcoming />
      </div>
    );
  }
}

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

class Recent extends React.Component {
  render() {
    return (
        <RecentFights />
    );
  }
}

class UpcomingFights extends React.Component {
  render() {
    return (
        <Upcoming />
    );
  }
}

render(<App />, document.getElementById('app'));
// render(<Nav/>, document.getElementById('navbar'));
// render(<Search/>, document.getElementById('search'));
// render(<Recent/>, document.getElementById('recent'));
// render(<UpcomingFights/>, document.getElementById('upcoming'));
