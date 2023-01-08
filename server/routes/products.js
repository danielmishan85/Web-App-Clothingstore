const express = require('express');
const { check } = require('express-validator');

const controller = require('../controllers/productController');

const router = express.Router();

router.get('/', controller.getAllProducts);

router.get('/:pid', controller.getProductById);

router.post(
  '/',
  [
    check('name').not().isEmpty(),
    check('category').not().isEmpty(),
    check('image').not().isEmpty(),
    check('color').not().isEmpty(),
    check('price').not().isEmpty(),
    check('description').not().isEmpty(),
  ],
  controller.createProduct
);

router.patch('/:pid', controller.updateProduct);

router.delete('/:pid', controller.deleteProduct);

module.exports = router;
