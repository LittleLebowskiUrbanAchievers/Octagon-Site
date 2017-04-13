import React from 'react';

class NavbarComponent extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="index.html"><strong>Home</strong></a></li>
          <li><a href="predict.html">Predict</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavbarComponent;
