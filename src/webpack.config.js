const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output file name
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify')
    }
  },
  module: {
    rules: [
      // Other rules for handling different file types and loaders
      // Example: JavaScript and JSX files with Babel loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // Other rules...
    ]
  },
  // Other webpack configuration options...
};
