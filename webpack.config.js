var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist",
  },
  resolve: {
    fallback: {
      crypto: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/proposal-class-properties']
          },
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  //   plugins: [new webpack.HtmlWebpackPlugin({ template: './index.html' })],
  mode: "development",
};
