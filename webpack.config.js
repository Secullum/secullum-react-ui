const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const srcPath = path.join(__dirname, 'src');
const distPath = path.join(__dirname, 'dist');

const pluginsDev = [];
const pluginsProd = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: { warnings: false }
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  })
];

module.exports = {
  entry: path.join(srcPath, 'index.js'),
  output: {
    path: distPath,
    filename: 'bundle.js',
    library: 'SecullumReactUI',
    libraryTarget: 'umd'
  },
  externals: [
    { react: { root: 'React', commonjs2: 'react', commonjs: 'react', amd: 'react' } }
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: srcPath },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?v=.+)?$/, loader: 'url?limit=8192' }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ].concat(isProd ? pluginsProd : pluginsDev)
};
