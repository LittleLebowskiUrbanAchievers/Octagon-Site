import React from 'react';
import {render} from 'react-dom';
import NavbarComponent from './components/NavbarComponent.jsx';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
      </div>
    );
  }
}

render(<Nav/>, document.getElementById('navbar'));
