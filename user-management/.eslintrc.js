module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'unused-imports'
  ],
  rules: {
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',  // 組み込みモジュール
          'external', // npmでインストールした外部ライブラリ
          'internal', // 自作モジュール
          [
            'parent',
            'sibling'
          ],
          'object',
          'type',
          'index'
        ],
        'newlines-between': 'always', // グループ毎にで改行を入れる
        'pathGroupsExcludedImportTypes': [
          'builtin'
        ],
        'alphabetize': {
          'order': 'asc', // 昇順にソート
          'caseInsensitive': true // 小文字大文字を区別する 
        },
        'pathGroups': [ // 指定した順番にソートされる
          {
            'pattern': '@/components/common',
            'group': 'internal',
            'position': 'before'
          },
          {
            'pattern': '@/components/hooks',
            'group': 'internal',
            'position': 'before'
          },
        ]
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'react/function-component-definition': [
      2, {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
    }],
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-no-useless-fragment': 'off',
  },
};
