const express = require('express');
const { check } = require('express-validator');

const controller = require('../controllers//userController');

const router = express.Router();

router.get('/', controller.getAllUsers);

router.get('/:uid', controller.getUserById);

router.post(
  '/signup',
  [
    check('firstName').not().isEmpty(),
    check('lastName').not().isEmpty(),
    check('email').not().isEmpty(),
    check('password').not().isEmpty(),
  ],
  controller.signup
);

router.post(
  '/login',
  [check('email').not().isEmpty(), check('password').not().isEmpty()],
  controller.login
);

router.patch('/:uid', controller.updateUser);

router.patch('/', controller.resetPassword);

router.delete('/:uid', controller.deleteUser);

module.exports = router;
