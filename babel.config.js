const parse = require("./preParser.js")

module.exports = {
  ignore: ["./identifierMappings.js"],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1"
        },
        useBuiltIns: "usage",
        corejs: "3.6.5"
      }
    ]
  ],
  plugins: [
    {
      parserOverride(code, opts) {
        return parse(code, opts);
      }
    },
    "./index.js"
  ]
}
