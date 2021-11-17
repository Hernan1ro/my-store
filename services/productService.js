const faker = require('faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }
  async findOne(id) {
    const name = this.getTotal();
    return this.products.find((item) => item.id === id);
  }
  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }
  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Esto está malo');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
