const express = require('express');
const { check } = require('express-validator');

const controller = require('../controllers/productController');

const router = express.Router();

router.get('/', controller.getAllProducts);

router.get('/:pid', controller.getProductById);

router.post(
  '/',
  [
    check('title').not().isEmpty(),
    check('category').not().isEmpty(),
    check('type').not().isEmpty(),
    check('productName').not().isEmpty(),
    check('price').not().isEmpty(),
    check('img').not().isEmpty(),
    check('imgList').not().isEmpty(),
    check('desc').not().isEmpty(),
  ],
  controller.createProduct
);

router.patch('/:pid', controller.updateProduct);

router.delete('/:pid', controller.deleteProduct);

module.exports = router;
