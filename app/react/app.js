var React = require('react');
var ReactDOM = require('react-dom');

var hello = {
  title: "Hello World"
};

var main = React.createClass({
  render: function(){
    return (
      <div>
        <h1>{hello.title}</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <main />,
  document.getElementById('content')
);
