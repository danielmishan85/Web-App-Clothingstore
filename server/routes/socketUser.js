const express = require('express');

const userController = require('../controllers/socketController')

const router = express.Router();

router.get('/', userController.getUsers);

module.exports = router;