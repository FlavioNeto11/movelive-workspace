import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  {
    ignores: ['.next/**', 'node_modules/**', '*.config.mjs'],
  },
  ...compat.extends('next/core-web-vitals'),
];
