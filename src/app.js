const express = require('express');
const routesAPI = require('./routes');
const app = express();

// Middlewares
app.use(express.json());

// Routes
routesAPI(app);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

module.exports = app;
