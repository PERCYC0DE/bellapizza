const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Get All Categories');
});

module.exports = router;
