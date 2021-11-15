const express = require('express');

const app = express();
const port = 3005;

app.get('/', (request, response) => {
  response.send('Hola mi server en express');
});
app.get('/productos', (req, res) => {
  res.send('Hola soy producto section');
});
app.get('/nigga', (req, res) => {
  res.json({
    name: 'Hola nigaa',
    appelido: 'escrito mal papau',
  });
});
app.listen(port, () => {
  console.log('Mi port' + port);
});
