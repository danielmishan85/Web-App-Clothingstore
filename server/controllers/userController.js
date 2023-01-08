const HttpError = require('../models/http-error');

let DUMMY_DATA = [
  {
    id: 'u1',
    name: 'Daniella',
    email: 'test@test.com',
    password: 'black',
    ordersList: [],
  },
];

const getAllUsers = (req, res) => {
  res.json({ DUMMY_DATA });
};

const getUserById = (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_DATA.find((u) => {
    return u.id === userId;
  });
  if (!user) {
    return next(
      new HttpError('Could not find a user for the provided id.', 404)
    );
  }
  res.json({ user });
};

const createUser = (req, res, next) => {
  const { id, name, email, password } = req.body;
  const createdUser = {
    id,
    name,
    email,
    password,
    ordersList: [],
  };
  DUMMY_DATA.push(createdUser);
  res.status(201).json({ user: createdUser });
};

const updateUser = (req, res, next) => {
  const { name, email, password, ordersList } = req.body;
  const userId = req.params.uid;

  const updatedUser = { ...DUMMY_DATA.find((u) => u.id === userId) };
  const userIndex = DUMMY_DATA.findIndex((u) => u.id === userId);
  updatedUser.name = name;
  updatedUser.email = email;
  updatedUser.password = password;
  updatedUser.ordersList = ordersList;

  DUMMY_DATA[userIndex] = updatedUser;

  res.status(200).json({ user: updatedUser });
};

const deleteUser = (req, res, next) => {
  const userId = req.params.uid;
  DUMMY_DATA = DUMMY_DATA.filter((u) => u.id !== userId);

  res.status(200).json({ message: 'Deleted user!' });
};

const signup = (req, res, next) => {
  const { id, name, email, password } = req.body;

  const hasUser = DUMMY_DATA.find((u) => u.email === email);
  if (hasUser) {
    return next(
      new HttpError('Could not create user, email already exists.', 422)
    );
  }
  const createdUser = {
    id,
    name,
    email,
    password,
    ordersList: [],
  };
  DUMMY_DATA.push(createdUser);
  res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_DATA.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    return next(
      new HttpError(
        'Could not identify user, credentials seem to be wrong.',
        401
      )
    );
  }
  res.json({ message: 'Logged in!' });
};

exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.signup = signup;
exports.login = login;
