const express = require('express');

const app = express();
const port = 3005;

app.get('/', (request, response) => {
  response.send('Hola mi server en express');
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
