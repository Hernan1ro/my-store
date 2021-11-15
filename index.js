const express = require('express');

const app = express();
const port = 3005;

app.get('/', (request, response) => {
  response.send('Hola mi server en express');
});
app.get('/products', (req, res) => {
  res.json([
    { name: 'play station 2', price: 20000 },
    { name: 'play station 4', price: 30000 },
    { name: 'play station 5', price: 50000 },
  ]);
});
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'play station 2', price: 20000 });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
