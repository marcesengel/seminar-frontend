const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    filename: 'app.[hash:12].js'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.jsx', '.js' ],
    modules: [ 'src', 'node_modules' ]
  },
  module: {
    rules: [ {
      test: /\.tsx?$/i,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.css$/i,
      use: [ 'style-loader', 'css-loader' ]
    } ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, './tsconfig.json')
    })
  ]
}