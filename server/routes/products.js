const express = require('express');

const controller = require('../controllers/productController');

const router = express.Router();

router.get('/', controller.getAllProducts);

router.get('/:pid', controller.getProductById);

router.post('/', controller.createProduct);

router.patch('/:pid', controller.updateProduct);

router.delete('/:pid', controller.deleteProduct);

module.exports = router;
