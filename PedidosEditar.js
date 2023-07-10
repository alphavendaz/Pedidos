const readline = require('readline');
const https = require('https');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual é o seu nome? ', (nome) => {
  rl.close();

  // Configurar as opções da solicitação HTTP POST
  const options = {
    hostname: 'pastebin.com',
    path: '/api/api_post.php',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  // Construir a string de dados no formato esperado pela API do Pastebin
  const postData = `api_dev_key=Pv1ZBFUhq7G8t_psRDDycvGbnSu-1ReA&api_option=paste&api_paste_code=Nome: ${nome}`;

  // Enviar a solicitação HTTP POST
  const req = https.request(options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
      responseData += chunk;
    });

    res.on('end', () => {
      console.log('Resposta da API:', responseData);
    });
  });

  req.on('error', (error) => {
    console.error('Erro ao enviar a solicitação:', error);
  });

  // Envia os dados no corpo da solicitação POST
  req.write(postData);
  req.end();
});
