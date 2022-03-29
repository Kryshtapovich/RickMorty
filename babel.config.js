module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@hooks': './src/hooks',
          '@models': './src/mobx/models',
          '@services': './src/mobx/services',
          '@stores': './src/mobx/stores',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
