const https = require('https');

const apiKey = 'Pv1ZBFUhq7G8t_psRDDycvGbnSu-1ReA';
const postContent = 'Conteúdo da postagem';

const postData = `api_dev_key=${apiKey}&api_option=paste&api_paste_code=${encodeURIComponent(postContent)}`;

const options = {
  hostname: 'pastebin.com',
  path: '/api/api_post.php',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};

const req = https.request(options, (res) => {
  let responseData = '';

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', () => {
    const response = responseData.trim();
    if (response.startsWith('https://pastebin.com/')) {
      console.log('Postagem criada com sucesso!');
      console.log('URL da postagem:', response);
    } else {
      console.error('Erro ao criar a postagem:', response);
    }
  });
});

req.on('error', (error) => {
  console.error('Erro na solicitação:', error);
});

req.write(postData);
req.end();
