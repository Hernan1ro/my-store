const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3005;

app.use(express.json());

// Crear un servidor
app.get('/', (request, response) => {
  response.send('Hola mi server en express');
});

// Mostrar en consola el puerto donde nos encontramos
app.listen(port, () => {
  console.log('Mi port' + port);
});

routerApi(app);
