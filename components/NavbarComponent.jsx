import React from 'react';

class NavbarComponent extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="#"><strong>Home</strong></a></li>
          <li><a href="#">Predict</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavbarComponent;
