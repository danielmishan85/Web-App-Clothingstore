const HttpError = require('../models/http-error');

const User = require('../models/user');

const getUsers = async () => {
  try {
    const users = await User.find();
    if (users[0]) {
      return { success: users };
    } else {
      return { error: 'No user found' };
    }
  } catch (e) {
    return { error: e };
  }
};

exports.getUsers = getUsers;
