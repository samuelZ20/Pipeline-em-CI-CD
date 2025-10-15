const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.status(200).send('Pipeline CI/CD Funcionando!');
});
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}
module.exports = app;