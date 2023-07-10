const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Dados das contas
const accounts = [
  { email: 'erick187@gmail.com', senha: '6tris0lita' },
  { email: 'jsisbad@outlook.com', senha: 'todosamam' }
];

// Rota para obter os dados das contas
app.get('/accounts', (req, res) => {
  res.json(accounts);
});

// Rota para enviar os dados das contas
app.post('/send-accounts', (req, res) => {
  const { destination } = req.body;

  // Envie os dados das contas para o destino especificado
  // Por exemplo, usando a biblioteca de envio de mensagens para WhatsApp

  res.send('Dados das contas enviados com sucesso!');
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
