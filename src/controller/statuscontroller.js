const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('Requisição recebida:', req.body); // Log da requisição
  res.status(200).json({ message: 'Rota funcionando!' });
});

module.exports = router;

