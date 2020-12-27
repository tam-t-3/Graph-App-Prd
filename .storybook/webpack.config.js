module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resoleve: {
    extensions: [".ts", "tsx", ".js", "json"]
  }
};