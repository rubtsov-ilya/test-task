import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImport from 'eslint-plugin-import';
import boundaries from 'eslint-plugin-boundaries';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const nextConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

const eslintConfig = [
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      'eslint.config.js',
      'eslint.config.mjs',
      '.next',
      '.next/**',
      '.next/**/*',
    ],
  },
  ...nextConfig,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
      import: eslintImport,
      boundaries: boundaries,
    },
    settings: {
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/*' },
        { type: 'app', pattern: 'src/redux/*' },
        { type: 'screens', pattern: 'src/screens/*' },
        { type: 'widgets', pattern: 'src/widgets/*' },
        { type: 'features', pattern: 'src/features/*' },
        { type: 'entities', pattern: 'src/entities/*' },
        { type: 'shared', pattern: 'src/shared/*' },
      ],
      'boundaries/ignore': ['**/*.test.ts', '**/*.module.scss'],
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      /* 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], */
      'prefer-const': 'warn',
      /* 'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
      'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
      'react/self-closing-comp': ['error', { component: true, html: true }], */
      /* 'max-lines': ['warn', { max: 124 }], */
      /* 'max-params': ['error', 3], */
      'no-console': 'warn',
      quotes: ['error', 'single'],
      'jsx-quotes': ['warn', 'prefer-single'],
      'comma-dangle': ['warn', 'always-multiline'],
      semi: ['warn', 'always'],
      /*'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always-and-inside-groups',
        },
      ],*/

      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          message:
            'Слой {{importType}} не может быть импортирован в {{type}} (нарушение иерархии FSD)',
          rules: [
            { from: 'shared', allow: ['shared'] },
            { from: 'entities', allow: ['shared', 'entities'] },
            { from: 'features', allow: ['shared', 'entities', 'features'] },
            {
              from: 'widgets',
              allow: ['shared', 'entities', 'features', 'widgets'],
            },
            {
              from: 'screens',
              allow: ['shared', 'entities', 'features', 'widgets', 'screens'],
            },
            {
              from: 'app',
              allow: [
                'shared',
                'entities',
                'features',
                'widgets',
                'screens',
                'app',
              ],
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
