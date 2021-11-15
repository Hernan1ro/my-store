const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3005;

// Crear un servidor
app.get('/', (request, response) => {
  response.send('Hola mi server en express');
});

// Mostrar en consola el puerto donde nos encontramos
app.listen(port, () => {
  console.log('Mi port' + port);
});

// Parametros tipo query para obtener datos

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

// Single Responsability Principle
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

routerApi(app);
