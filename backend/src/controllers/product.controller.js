// Import services
const ProductsService = require('../services/product.service.js');

const getProducts = (req, res) => {
  res.json('Get All Products');
};

module.exports = {
  getProducts,
};
