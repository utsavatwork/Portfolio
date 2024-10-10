const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.ts',  // Entry point for TypeScript
  output: {
    filename: 'bundle.js',  // Output file
    path: path.resolve(__dirname, 'dist'),  // Output directory
    clean: true  // Clean old files in 'dist' before building
  },
  resolve: {
    extensions: ['.ts', '.js'],  // Resolve TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,  // Use ts-loader for TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,  // For SCSS files
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,  // Use html-loader for HTML files
        use: 'html-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // HTML template
      filename: 'index.html',  // Output HTML file
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',  // Output CSS file
    }),
  ],
  devServer: {
    static: './dist',  // Serve files from the dist directory
    port: 3000,  // The port for the dev server
    open: true,  // Automatically open the browser
    hot: true  // Enable hot module replacement
  },
  mode: 'development',  // Set the mode to development
};
