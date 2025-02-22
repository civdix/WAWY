const webpack = require("webpack");

module.exports = {
  // Other existing configurations
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      url: require.resolve("url"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
