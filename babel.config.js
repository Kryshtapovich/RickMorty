module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@hooks': './src/hooks',
          '@actions': './src/redux/actions',
          '@models': './src/redux/models',
          '@reducers': './src/redux/reducers',
          '@services': './src/redux/services',
          '@store': './src/redux/store',
          '@components': './src/components',
        },
      },
    ],
  ],
};