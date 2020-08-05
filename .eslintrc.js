module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-unused-expressions': 0,
    'no-underscore-dangle': 0,
    'no-console': 0,
    'react/require-default-props': 0,
    'spaced-comment': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    "jsx-a11y/label-has-associated-control": 0,
    'no-nested-ternary': 0
  },
};
