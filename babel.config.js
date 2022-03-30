module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@services': './src/services',
          '@context': './src/context',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
