module.exports = {
  presets: [["@babel/preset-env"], ["@babel/preset-react"]],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      // {
      //   absoluteRuntime: false,
      //   corejs: false,
      //   helpers: true,
      //   regenerator: true,
      //   version: "7.0.0-beta.0",
      // },
    ],
  ],
};
