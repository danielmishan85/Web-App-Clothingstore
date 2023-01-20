const userController = require('../controllers/socketController');


const GetUsers = (io, socket) => async () => {
  const res = await userController.getUser();
  console.log(res.success)
  res.error
    ? socket.emit('getUsers_error', res.error)
    : socket.emit('getUsers_success', res.success);
};

exports.GetUsers = GetUsers;
