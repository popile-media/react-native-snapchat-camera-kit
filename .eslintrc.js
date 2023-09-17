module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  ignorePatterns: ['scripts', 'lib', 'documentation', 'node_modules'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'consistent',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    'react/no-unstable-nested-components': [
      'off',
      {
        allowAsProps: false,
      },
    ],
  },
};
