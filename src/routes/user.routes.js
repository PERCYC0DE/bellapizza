const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json('Get All Users');
});

module.exports = router;
