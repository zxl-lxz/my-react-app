const rules = require('./rules');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
    amd: false,
    mocha: false,
    jasmine: false,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      legacyDecorators: true
    }
  },
  extends: 'airbnb',
  plugins: ['react-hooks', 'react', 'import', 'a11y'],
  rules: {
    ...rules,
    'no-duplicate-imports': ['error'],
    'no-console': ['off'],
    "react/forbid-prop-types": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/no-array-index-key": [0],
    "react/prop-types": [0],
    "react/prefer-stateless-function": [0],
    "react/jsx-no-target-blank": [0],
    "react/jsx-first-prop-new-line": [0],
    "react/jsx-wrap-multilines": ["error", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "ignore"
    }],
    "react/jsx-props-no-spreading": [0],
    "react/state-in-constructor": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/anchor-is-valid": [0],
    "react/no-did-mount-set-state": [0]
  },
};
