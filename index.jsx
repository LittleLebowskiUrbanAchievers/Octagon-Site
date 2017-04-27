import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexRoute} from 'react-router';
import Home from './components/Home.jsx';
import Predict from './components/Predict.jsx';

class App extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}

export default App;

class HomeComponent extends React.Component {
  render() {
    return (
        <Home />
    );
  }
}

class PredictComponent extends React.Component {
   render() {
      return (
         <Predict />
      );
   }
}

render(<App />, document.getElementById('app'));
