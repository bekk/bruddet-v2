import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// Import the prettier plugin as an ES module
import eslintPluginPrettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extending the core Next.js and TypeScript configurations
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    ignores: [
      "**/.next/**",   // Ignore everything inside .next folder
      "**/node_modules/**",  // Ignore node_modules
      "**/out/**", // Ignore out folder
    ],
  },

  // Main linting rules for JS/TS files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],  // Only lint JavaScript and TypeScript files
    plugins: {
      // Correctly import the prettier plugin for ES modules
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",  // Enforce Prettier rules
    },
  },

  // Add TypeScript specific linting rules
  {
    files: ["**/*.ts", "**/*.tsx"],  // Only apply these rules to TypeScript files
    rules: {
      // Add any TypeScript specific rules here
    },
  },
];

export default eslintConfig;
