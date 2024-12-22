const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point for your React app
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Transpile both .js and .jsx files
        exclude: /node_modules/,  // Ignore node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',   // Modern JavaScript
              '@babel/preset-react', // JSX
            ]
          }
        }
      },
      {
        test: /\.css$/,  // For CSS files
        use: ['style-loader', 'css-loader']  // Inject styles and load CSS
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Allow imports without specifying file extensions for .js and .jsx
  },
  mode: 'development',  // Set to development mode (you can change this to 'production' for production builds)
  devServer: {
    static: {  // Serve static files from the "public" directory
      directory: path.join(__dirname, 'public'),
    },
    compress: true,  // Enable gzip compression for everything served
    port: 9000,  // Change the port if necessary
  }
};
