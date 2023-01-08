const express = require('express');

const controller = require('../controllers/orderController');

const router = express.Router();

router.get('/', controller.getAllOrders);

router.get('/:oid', controller.getOrderById);

router.post('/', controller.createOrder);

router.patch('/:oid', controller.updateOrder);

router.delete('/:oid', controller.deleteOrder);

module.exports = router;
