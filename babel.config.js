module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@assets": "./assets",
          "@mobx": "./src/mobx",
          "@hooks": "./src/hooks",
          "@utils": "./src/utils",
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@navigation": "./src/navigation"
        }
      }
    ]
  ]
};
