const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

// Priorizando las rutas especificas sobre las dinámicas para evitar reescritura

router.get('/filter', (rep, res) => {
  res.send('soy un filter');
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'play station 2', price: 20000 });
});

module.exports = router;
