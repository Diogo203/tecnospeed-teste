
const express = require('express');
const app = express();

const statusRoutes = require('./src/controller/statuscontroller');

app.use(express.json()); // Middleware para parse de JSON
app.use('/status', statusRoutes); // Use a rota '/status'

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
