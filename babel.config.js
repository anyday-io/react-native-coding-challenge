module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@modules': './src/modules',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigators': './src/navigators',
          '@services': './src/services',
          '@store': './src/store',
        },
      },
    ],
  ],
}
