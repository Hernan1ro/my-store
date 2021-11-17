const express = require('express');
const ProductsService = require('../services/productService');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

// Priorizando las rutas especificas sobre las dinámicas para evitar reescritura

router.get('/filter', (rep, res) => {
  res.send('soy un filter');
});
// Get a single products
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

// Post element
router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

// Patch element
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.json(product);
});

module.exports = router;
