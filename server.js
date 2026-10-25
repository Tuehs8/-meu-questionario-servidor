const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota POST que recebe os dados dos dois retângulos
app.post('/api/enviar', (req, res) => {
  const { resposta1, resposta2, dataEnvio } = req.body;

  console.log('\n====================================');
  console.log(`📬 NOVA RESPOSTA RECEBIDA [${dataEnvio}]`);
  console.log('Campo 1:', resposta1);
  console.log('Campo 2:', resposta2);
  console.log('====================================\n');

  res.status(200).json({ mensagem: 'Dados recebidos com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}!`);
  console.log(`Aguardando envios do questionário...`);
});