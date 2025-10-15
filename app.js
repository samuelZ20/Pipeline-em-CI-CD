const express = require('express');
const app = express();

// Rota principal que responde com uma mensagem simples
app.get('/', (req, res) => {
  res.status(200).send('Pipeline CI/CD Funcionando!');
});

module.exports = app;