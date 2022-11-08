const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плагин 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: { main: './src/index.ts' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js',
      core: path.resolve(__dirname, "./src/core"),
      components: path.resolve(__dirname, "./src/components"),
      helpers: path.resolve(__dirname, "./src/helpers"),
      pages: path.resolve(__dirname, ".src/pages"),
      image: path.resolve(__dirname, "./src/image"),
      utils: path.resolve(__dirname, "./src/utils")
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 3000,
    open: true
  },
}