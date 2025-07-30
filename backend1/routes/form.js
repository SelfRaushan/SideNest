const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/productController');

// POST /api/form
router.post('/', submitForm);

module.exports = router;
