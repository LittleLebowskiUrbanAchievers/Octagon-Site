var webpack = require('webpack');
var path = require('path');
var app = webpack();
var port = process.env.PORT || 8000
let server = require('http').Server(app);

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, '');

app.use(webpack.static(path.join(__dirname)));
app.get('/', function(req, res, next){
    res.sendStatus(200);
});
server.listen(port, function() {
    console.log("App is running on port " + port);
});

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
