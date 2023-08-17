const express = require('express');

// Import routes file
const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');
const categoryRoutes = require('./category.routes');

function routesAPI(appExpress) {
  const router = express.Router();
  // Define main path
  appExpress.use('/api/v1', router);

  // Define routes point
  router.use('/users', userRoutes);
  router.use('/products', productRoutes);
  router.use('/categories', categoryRoutes);
}

module.exports = routesAPI;
