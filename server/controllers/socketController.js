const HttpError = require('../models/http-error');

const User = require('../models/user');

const getUsers = async () => {
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
}


exports.getUsers = getUsers;