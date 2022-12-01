module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'commonjs': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    'react',
    'react-hooks'
  ],
  'rules': {
    'indent': [2, 2],
    'eqeqeq': [2, 'always'],
    'quotes': [2, 'single'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn', {
        'additionalHooks': 'useRecoilCakkback'
      }
    ]
  }
}
