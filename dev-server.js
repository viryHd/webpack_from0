// const express = require('express');
const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackDevServer = require('webpack-dev-server');

// const app = express();
const config = require('./webpack.config.js');
// const compiler = webpack(config);

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));
webpackDevServer.addDevServerEntrypoints(config,options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler,options);

// Serve the files on port 3000.
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!\n');
// });

server.listen(5000,'localhost',()=>{
  console.log('server 5000');
})