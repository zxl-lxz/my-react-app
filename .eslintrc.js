module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: 'airbnb',
  plugins: ['react-hooks'],
  rules: {
    'no-duplicate-imports': ['error'],
  },
};
