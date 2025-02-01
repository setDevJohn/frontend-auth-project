import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      indent: ["error", 2, { SwitchCase: 1 }],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "block-spacing": ["error", "always"],
      "space-before-function-paren": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      eqeqeq: ["error", "always"],
      "react/prop-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "prefer-const": "error",
    },
  },
)
