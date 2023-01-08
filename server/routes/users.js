const express = require('express');

const controller = require('../controllers//userController');

const router = express.Router();

router.get('/', controller.getAllUsers);

router.get('/:uid', controller.getUserById);

router.post('/', controller.createUser);

router.patch('/:uid', controller.updateUser);

router.delete('/:uid', controller.deleteUser);

module.exports = router;
