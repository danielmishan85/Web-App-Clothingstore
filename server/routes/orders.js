const express = require('express');
const { check } = require('express-validator');

const controller = require('../controllers/orderController');

const router = express.Router();

router.get('/', controller.getAllOrders);

router.get('/:oid', controller.getOrderById);

router.get('/user/:uid', controller.getOrdersByUserId);

router.post('/', [
    check('totalPrice').not().isEmpty(),
    check('date').not().isEmpty(),
    check('creator').not().isEmpty(),
  ], controller.createOrder);

router.patch('/:oid', controller.updateOrder);

router.delete('/:oid', controller.deleteOrder);

module.exports = router;
