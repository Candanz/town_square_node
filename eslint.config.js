import prettier from 'eslint-plugin-prettier/recommended';
import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
    "prettier/prettier": [ "error",
        { "endOfLine": "auto" }
    ]
    }
  },
  js.configs.recommended,
  prettier,
];