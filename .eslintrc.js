module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/react',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Not required for React 17+
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'always'],
    'import/no-unresolved': 'error',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
    }],
    'react/jsx-one-expression-per-line': 'off', // Disable rule causing errors
    'eol-last': 'off', // Disable rule causing errors
    'object-curly-newline': 'off', // Disable rule causing errors
  },
};
