// eslint.config.mjs
import globals from 'globals';
import js from '@eslint/js';

export default [
  js.configs.recommended, // Usa as regras recomendadas do ESLint
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs', // Informa que estamos usando 'require'
      globals: {
        ...globals.node,  // Reconhece 'require', 'process', etc.
        ...globals.jest  // Reconhece 'describe', 'it', 'expect', etc.
      }
    },
    rules: {
      // Você pode adicionar regras personalizadas aqui no futuro
    }
  }
];