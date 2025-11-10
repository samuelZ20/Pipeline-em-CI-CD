module.exports = {
  "env": {
    "node": true,  // <-- Reconhece 'require', 'process', etc.
    "jest": true,  // <-- Reconhece 'describe', 'it', 'expect', etc.
    "es2021": true
  },
  "extends": "eslint:recommended", // Usaremos as regras básicas recomendadas
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "commonjs" // Informa que nossos arquivos (app.js) usam 'require'
  },
  "rules": {
    // Regras personalizadas podem ser adicionadas aqui
  }
};