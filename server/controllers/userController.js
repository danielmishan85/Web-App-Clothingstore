const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

const User = require('../models/user');

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find(
      {},
      'firstName lastName email password role ordersList'
    );
  } catch (err) {
    return next(
      new HttpError('Fatching users failed, please try again later.', 500)
    );
  }
  res.json({
    users: users.map((user) => user.toObject({ getters: true })),
  });
};

const getUserById = async (req, res, next) => {
  const userId = req.params.uid;

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not find a user.', 500)
    );
  }
  if (!user) {
    return next(
      new HttpError('Could not find a user for the provided id.', 404)
    );
  }

  res.json({ user: user.toObject({ getters: true }) });
};

const updateUser = async (req, res, next) => {
  const { firstName, lastName, email, password, role, ordersList } = req.body;
  const userId = req.params.uid;

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not update user', 500)
    );
  }

  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.password = password;
  user.role = role;
  user.ordersList = ordersList;

  try {
    await user.save();
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not update user', 500)
    );
  }

  res.status(200).json({ user: user.toObject({ getters: true }) });
};

const resetPassword = async (req, res, next) => {
  const { email, password } = req.body;

  let user;
  try {
    user = await User.findOne({ email: email });
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not find this user', 500)
    );
  }

  user.password = password;

  try {
    await user.save();
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not reset password', 500)
    );
  }

  res.status(200).json({ user: user.toObject({ getters: true }) });
};

const deleteUser = async (req, res, next) => {
  const userId = req.params.uid;
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not delete user', 500)
    );
  }
  try {
    await user.remove();
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not delete user', 500)
    );
  }
  res.status(200).json({ message: 'Deleted user.' });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { firstName, lastName, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return next(
      new HttpError('Singing up failed, please try again later.', 500)
    );
  }

  if (existingUser) {
    return next(
      new HttpError('User exsits already, please login instead', 422)
    );
  }

  const createdUser = new User({
    firstName,
    lastName,
    email,
    password,
    role: 'customer',
    ordersList: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    return next(new HttpError('Creating user failed, please try again.', 500));
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return next(
      new HttpError('Logging in failed, please try again later.', 500)
    );
  }

  if (!existingUser || existingUser.password !== password) {
    return next(
      new HttpError('Invalid credentials, could not log you in', 401)
    );
  }

  //res.json({ message: 'Logged in!' });
  res.status(200).json({ user: existingUser.toObject({ getters: true }) });
};

const getUserByEmail = async (req, res, next) => {
  const userEmail = req.params.uemail;

  let user;
  try {
    user = await User.findOne({ email: userEmail });
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not find a user.', 500)
    );
  }
  if (!user) {
    return next(
      new HttpError('Could not find a user for the provided email.', 404)
    );
  }

  res.json({ user: user.toObject({ getters: true }) });
};

exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.signup = signup;
exports.login = login;
exports.updateUser = updateUser;
exports.resetPassword = resetPassword;
exports.deleteUser = deleteUser;
exports.getUserByEmail = getUserByEmail;
